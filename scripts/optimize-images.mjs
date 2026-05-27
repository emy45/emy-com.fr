#!/usr/bin/env node
// Convert all PNG/JPG in public/images/ to optimized WebP siblings.
// Idempotent: skip if .webp already exists and is newer than source.

import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "public", "images");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const SUPPORTED = /\.(png|jpe?g)$/i;

const start = Date.now();
const files = (await walk(ROOT)).filter((f) => SUPPORTED.test(f));
let converted = 0;
let skipped = 0;
let totalIn = 0;
let totalOut = 0;

for (const src of files) {
  const dst = src.replace(SUPPORTED, ".webp");
  try {
    const srcStat = await stat(src);
    totalIn += srcStat.size;
    if (existsSync(dst)) {
      const dstStat = await stat(dst);
      if (dstStat.mtimeMs >= srcStat.mtimeMs) {
        totalOut += dstStat.size;
        skipped++;
        continue;
      }
    }
    await sharp(src)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(dst);
    const dstStat = await stat(dst);
    totalOut += dstStat.size;
    converted++;
  } catch (e) {
    console.error(`Failed: ${src}`, e.message);
  }
}

const fmt = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`;
console.log(
  `[images] ${converted} converted, ${skipped} cached — ${fmt(totalIn)} → ${fmt(totalOut)} in ${(
    (Date.now() - start) /
    1000
  ).toFixed(1)}s`
);
