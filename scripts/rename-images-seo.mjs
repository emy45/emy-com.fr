#!/usr/bin/env node
// Rename "Capture-decran-…" images to SEO-friendly slugs derived from
// alt text + category + client in src/data/realisations.ts.
// Also renames the .webp companion and updates the realisations.ts file in place.

import { readFileSync, writeFileSync, renameSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA_FILE = path.join(ROOT, "src/data/realisations.ts");
const IMG_DIR = path.join(ROOT, "public/images");

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['"’«»]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");

// Parse realisations.ts to extract: category -> [{ client, images: [{ src, alt }] }]
const code = readFileSync(DATA_FILE, "utf8");

// Find the cases object content
const casesMatch = code.match(
  /export const cases:[^=]+=\s*\{([\s\S]*?)\n\};\s*$/
);
if (!casesMatch) {
  console.error("Couldn't locate cases object.");
  process.exit(1);
}
const casesBody = casesMatch[1];

// Split by category keys at the top level. Match `"slug":` or `slug:` at start of indented line.
const categoryRegex = /\n  (?:"([^"]+)"|([a-z-]+)):\s*\[([\s\S]*?)\n  \],/g;
const categories = {};
let m;
while ((m = categoryRegex.exec(casesBody + "\n  ],")) !== null) {
  const slug = m[1] || m[2];
  const body = m[3];
  categories[slug] = body;
}

const renames = []; // [{ oldPng, newPng, oldWebp, newWebp, oldRef, newRef }]
const seen = new Set();

for (const [catSlug, catBody] of Object.entries(categories)) {
  // Find each case block: { client: "…", …, images: [ … ] }
  const caseRegex = /\{\s*client:\s*"([^"]+)"[\s\S]*?images:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
  let cm;
  while ((cm = caseRegex.exec(catBody)) !== null) {
    const client = cm[1];
    const imgsBody = cm[2];
    const imgRegex =
      /\{\s*src:\s*"([^"]+)"\s*,\s*alt:\s*"([^"]+)"(?:\s*,\s*href:\s*"[^"]+")?\s*,?\s*\}/g;
    let ig;
    while ((ig = imgRegex.exec(imgsBody)) !== null) {
      const src = ig[1];
      const alt = ig[2];
      if (!/\/images\/Capture-decran-/.test(src)) continue;

      // Build new slug: {category}-{client}-{altShort}
      const catPart = slugify(catSlug);
      const clientPart = slugify(client);
      // Remove client name from alt to avoid duplication
      const altCleaned = alt.replace(new RegExp(client, "gi"), "").trim();
      const altPart = slugify(altCleaned).split("-").slice(0, 5).join("-");
      let base = [catPart, clientPart, altPart].filter(Boolean).join("-");

      // Dedup
      let final = base;
      let n = 2;
      while (seen.has(final)) {
        final = `${base}-${n++}`;
      }
      seen.add(final);

      const newRef = `/images/${final}.png`;
      if (newRef === src) continue;

      const oldPng = path.join(ROOT, "public", src);
      const newPng = path.join(ROOT, "public", newRef);
      const oldWebp = oldPng.replace(/\.png$/, ".webp");
      const newWebp = newPng.replace(/\.png$/, ".webp");

      renames.push({ oldPng, newPng, oldWebp, newWebp, oldRef: src, newRef });
    }
  }
}

console.log(`[rename] Found ${renames.length} files to rename.`);
if (renames.length === 0) process.exit(0);

let conflict = false;
for (const r of renames) {
  if (!existsSync(r.oldPng)) {
    console.error(`  MISSING source: ${r.oldPng}`);
    conflict = true;
  }
  if (existsSync(r.newPng) && r.oldPng !== r.newPng) {
    console.error(`  DEST exists: ${r.newPng}`);
    conflict = true;
  }
}
if (conflict) {
  console.error("Aborting due to conflicts.");
  process.exit(1);
}

// Rename files
for (const r of renames) {
  renameSync(r.oldPng, r.newPng);
  if (existsSync(r.oldWebp)) renameSync(r.oldWebp, r.newWebp);
  console.log(`  ${path.basename(r.oldPng)} -> ${path.basename(r.newPng)}`);
}

// Update realisations.ts
let updated = code;
for (const r of renames) {
  updated = updated.split(r.oldRef).join(r.newRef);
}
writeFileSync(DATA_FILE, updated, "utf8");
console.log(`[rename] Updated ${DATA_FILE}`);
console.log(`[rename] Done. ${renames.length} files renamed.`);
