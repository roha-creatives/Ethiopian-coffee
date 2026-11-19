#!/usr/bin/env node
// Downloads the Ethiopian Coffee brand photography and logos from ethiopiancoffee.net into
// public/images/brand/. Re-runnable: files already on disk are skipped.
//
// Usage: node scripts/fetch-brand-assets.mjs

import { writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, "../public/images/brand");
const origin = "https://www.ethiopiancoffee.net/images/";

const files = [
  "logo-white.png",
  "hero-pack.jpg",
  "cherry-basket.jpg",
  "cherry-branch.jpg",
  "picking.jpg",
  "drying-beds.jpg",
  "drying-station.jpg",
  "parchment.jpg",
  "hand-sorting.jpg",
  "warehouse.jpg",
  "weighing.jpg",
  "roasted-tins.jpg",
  "pack-beans-navy.jpg",
  "pack-light.jpg",
  "pack-navy-250.jpg",
  "pack-line-dark.jpg",
  "pack-shelf.jpg",
  "tote.jpg",
  "hanan.jpg",
];

await mkdir(outDir, { recursive: true });
let fetched = 0, skipped = 0, failed = 0;

for (const file of files) {
  const dest = path.join(outDir, file);
  try {
    await access(dest);
    skipped++;
    continue;
  } catch {}
  try {
    const res = await fetch(origin + file);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    fetched++;
  } catch (err) {
    failed++;
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log(`${files.length} assets: ${fetched} downloaded, ${skipped} already present, ${failed} failed → ${path.relative(process.cwd(), outDir)}`);
