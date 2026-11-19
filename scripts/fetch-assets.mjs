#!/usr/bin/env node
// Downloads every media file referenced by the Elementor templates into
// public/images/kit/ so the site doesn't depend on the kit's demo server.
//
// Usage: node scripts/fetch-assets.mjs [templatesDir]
// Re-runnable: files already on disk are skipped.

import { readFile, readdir, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.resolve(process.argv[2] ?? path.join(here, "../../_reference/templates"));
const outDir = path.join(here, "../public/images/kit");

const URL_RE = /https:\\?\/\\?\/templates\.studioniskala\.com[^"]*?\.(?:jpe?g|png|webp|svg|gif)/gi;

const urls = new Set();
for (const file of await readdir(templatesDir)) {
  if (!file.endsWith(".json")) continue;
  const raw = await readFile(path.join(templatesDir, file), "utf8");
  for (const m of raw.matchAll(URL_RE)) {
    const url = m[0].replaceAll("\\/", "/");
    // Elementor's own placeholder isn't a kit asset.
    if (!url.includes("/plugins/elementor/")) urls.add(url);
  }
}

await mkdir(outDir, { recursive: true });
let fetched = 0, skipped = 0, failed = 0;

for (const url of [...urls].sort()) {
  const dest = path.join(outDir, path.basename(new URL(url).pathname));
  try {
    await access(dest);
    skipped++;
    continue;
  } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    fetched++;
  } catch (err) {
    failed++;
    console.error(`✗ ${url}: ${err.message}`);
  }
}

console.log(`${urls.size} assets: ${fetched} downloaded, ${skipped} already present, ${failed} failed → ${path.relative(process.cwd(), outDir)}`);
