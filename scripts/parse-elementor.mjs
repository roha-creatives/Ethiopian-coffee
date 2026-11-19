#!/usr/bin/env node
// Collapses verbose Elementor template JSON into compact specs.
//
// Usage: node scripts/parse-elementor.mjs [templatesDir] [outDir]
// Defaults: ../_reference/templates -> ../_reference/parsed (relative to verdea-web/)
//
// For each template it writes:
//   <name>.json — pruned node tree (elType, widgetType, content, layout/style settings)
//   <name>.md   — human-readable outline of the same tree

import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.resolve(process.argv[2] ?? path.join(here, "../../_reference/templates"));
const outDir = path.resolve(process.argv[3] ?? path.join(here, "../../_reference/parsed"));

// Settings that carry no layout/content meaning for the port.
const NOISE = [
  /^_?motion_fx/, /^hover_animation/,
  /^_element_id$/, /^_css_classes$/, /^_title$/, /^__dynamic__$/,
  /^custom_css$/, /^_?attributes$/, /^sticky/, /^_transform/, /^handle_/,
  /^_?mask_/, /^presetTitle$/, /^presetIcon$/,
  /^plus_/, /^ekit_/,
];

// Content-bearing keys, surfaced first in the outline.
const CONTENT_KEYS = [
  "title", "editor", "text", "description_text", "title_text", "button_text",
  "link", "selected_icon", "icon_list", "form_fields", "form_name", "image",
  "logo", "menu", "tabs", "social_icon_list", "html", "header_size",
  "ending_number", "suffix", "prefix", "starting_number", "submit_button_text",
  "testimonial_content", "testimonial_name", "testimonial_job", "slides",
];

// Leading &nbsp; runs are the kit's first-line paragraph indent; keep them visible.
const stripHtml = (s) =>
  s.replace(/^(<p[^>]*>)?(?:[\u00a0 ]|&nbsp;){3,}/, "[indent] ").replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>\s*<p[^>]*>/gi, "\n\n")
   .replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
   .replace(/&#8217;|&rsquo;/g, "’").replace(/\n{3,}/g, "\n\n").trim();

function isEmpty(v) {
  if (v === "" || v == null) return true;
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === "object") {
    // Elementor dimension/slider objects with no actual value.
    if ("url" in v) return !v.url && !v.id;
    if ("size" in v && "unit" in v && (v.size === "" || v.size == null) && !v.sizes?.length) return true;
    if ("top" in v && ["top", "right", "bottom", "left"].every((k) => v[k] === "" || v[k] == null)) return true;
    return Object.values(v).every(isEmpty);
  }
  return false;
}

// Compact a dimension/slider value into a CSS-like string.
function compactValue(v) {
  if (v && typeof v === "object" && !Array.isArray(v)) {
    if ("top" in v && "unit" in v) {
      const sides = ["top", "right", "bottom", "left"].map((k) => (v[k] === "" ? "0" : v[k]));
      const uniq = new Set(sides);
      return (uniq.size === 1 ? sides[0] : sides.join(" ")) + v.unit;
    }
    if ("size" in v && "unit" in v && !v.sizes?.length) return `${v.size}${v.unit}`;
    if ("url" in v) return v.url || `#attachment-${v.id}`;
    if ("value" in v && "library" in v) {
      return typeof v.value === "string" ? v.value : (v.value?.url ?? "svg");
    }
  }
  return v;
}

function pruneSettings(settings, globals) {
  const out = {};
  for (const [k, raw] of Object.entries(settings ?? {})) {
    if (k === "__globals__" || NOISE.some((re) => re.test(k)) || isEmpty(raw)) continue;
    let v = raw;
    if (Array.isArray(v)) {
      v = v.map((item) => (typeof item === "object" ? pruneSettings(item, globals) : item));
    } else {
      v = compactValue(v);
      if (typeof v === "string" && /<[a-z][\s\S]*>/i.test(v)) v = stripHtml(v);
    }
    out[k] = v;
  }
  // Global references override the stale literal values stored alongside them.
  for (const [k, ref] of Object.entries(settings?.__globals__ ?? {})) {
    if (!ref) continue;
    out[k] = resolveGlobal(ref, globals);
  }
  return out;
}

function resolveGlobal(ref, globals) {
  const m = /^globals\/(colors|typography)\?id=(.+)$/.exec(ref);
  if (!m) return ref;
  const hit = globals[m[1]].get(m[2]);
  return hit ? `@${m[1] === "colors" ? "color" : "type"}:${hit}` : ref;
}

function loadGlobals(global) {
  const ps = global.page_settings;
  const colors = new Map();
  const typography = new Map();
  for (const c of [...ps.system_colors, ...ps.custom_colors]) colors.set(c._id, `${c.title} ${c.color}`);
  for (const t of [...ps.system_typography, ...ps.custom_typography]) typography.set(t._id, t.title);
  return { colors, typography };
}

function simplify(node, globals) {
  const settings = pruneSettings(node.settings, globals);
  const out = { elType: node.elType };
  if (node.widgetType) out.widgetType = node.widgetType;
  if (node.isInner) out.isInner = true;
  if (Object.keys(settings).length) out.settings = settings;
  const children = (node.elements ?? []).map((c) => simplify(c, globals));
  if (children.length) out.children = children;
  return out;
}

function summarize(v) {
  if (typeof v === "string") return v.replace(/\n+/g, " ⏎ ");
  return JSON.stringify(v);
}

function toMarkdown(nodes, depth = 0) {
  const lines = [];
  for (const n of nodes) {
    const pad = "  ".repeat(depth);
    const label = n.widgetType ? `**${n.widgetType}**` : `\`${n.elType}${n.isInner ? " (inner)" : ""}\``;
    lines.push(`${pad}- ${label}`);
    const s = n.settings ?? {};
    const keys = Object.keys(s).sort((a, b) => {
      const ia = CONTENT_KEYS.indexOf(a), ib = CONTENT_KEYS.indexOf(b);
      return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || a.localeCompare(b);
    });
    for (const k of keys) lines.push(`${pad}    - ${k}: ${summarize(s[k])}`);
    if (n.children) lines.push(...toMarkdown(n.children, depth + 1));
  }
  return lines;
}

const files = (await readdir(templatesDir)).filter((f) => f.endsWith(".json")).sort();
const globals = loadGlobals(JSON.parse(await readFile(path.join(templatesDir, "global.json"), "utf8")));
await mkdir(outDir, { recursive: true });

for (const file of files) {
  const tpl = JSON.parse(await readFile(path.join(templatesDir, file), "utf8"));
  const name = path.basename(file, ".json");
  const tree = (tpl.content ?? []).map((n) => simplify(n, globals));
  const pageSettings = pruneSettings(tpl.page_settings ?? {}, globals);

  const spec = { title: tpl.title, type: tpl.type, page_settings: pageSettings, tree };
  await writeFile(path.join(outDir, `${name}.json`), JSON.stringify(spec, null, 2));

  const md = [`# ${tpl.title} (\`${file}\`)`, ""];
  if (name !== "global" && Object.keys(pageSettings).length) {
    md.push("## Page settings", "", "```json", JSON.stringify(pageSettings, null, 2), "```", "");
  }
  md.push("## Tree", "", ...toMarkdown(tree), "");
  await writeFile(path.join(outDir, `${name}.md`), md.join("\n"));

  const before = (await readFile(path.join(templatesDir, file))).length;
  const after = JSON.stringify(spec).length;
  console.log(`${file.padEnd(24)} ${String(before).padStart(7)}B -> ${String(after).padStart(6)}B`);
}
