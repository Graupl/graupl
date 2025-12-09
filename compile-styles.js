/* eslint-disable no-console */
/* global process Buffer */

import * as sass from "sass-embedded";
import { transform } from "lightningcss";
import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(process.cwd());

/**
 * Recursively collect all SCSS entry files (non-partials) inside a directory.
 *
 * - Partials (files starting with "_") are excluded.
 * - Subdirectories are traversed.
 *
 * @param {string} dir - The directory to scan.
 * @return {string[]} An array of absolute or relative file paths to SCSS entry files.
 */
function getScssEntries(dir) {
  const entries = [];

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      entries.push(...getScssEntries(fullPath));
    } else if (
      item.isFile() &&
      item.name.endsWith(".scss") &&
      !item.name.startsWith("_")
    ) {
      entries.push(fullPath);
    }
  }

  return entries;
}

/**
 * Build a single SCSS file into CSS + sourcemap.
 *
 * @param {string} entryPath - Path to the SCSS entry file (not a partial).
 * @param {string} srcDir - Root of the SCSS source directory tree.
 * @param {string} outDir - Output directory to write compiled CSS files into.
 * @return {void}
 */
function buildScssFile(entryPath, srcDir, outDir) {
  const relPath = path.relative(srcDir, entryPath);
  const outFile = path.join(outDir, relPath).replace(/\.scss$/, ".css");
  const outMapFile = `${outFile}.map`;

  console.log(`Building ${entryPath} → ${outFile}`);

  // 1. Compile SCSS
  const sassResult = sass.compile(entryPath, {
    style: "expanded",
    sourceMap: true,
    sourceMapIncludeSources: true,
    importers: [new sass.NodePackageImporter()],
  });

  // 2. Run LightningCSS
  const { code, map } = transform({
    filename: outFile,
    code: Buffer.from(sassResult.css),
    sourceMap: true,
    inputSourceMap: JSON.stringify(sassResult.sourceMap),
    minify: true,
    projectRoot,
  });

  // Ensure directories exist
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  // Write files
  fs.writeFileSync(outFile, code);
  fs.writeFileSync(outMapFile, map);

  // Add sourcemap comment
  fs.appendFileSync(
    outFile,
    `\n/*# sourceMappingURL=${path.basename(outMapFile)} */\n`
  );
}

/**
 * Build all SCSS entry files inside the given directory.
 *
 * @param {string} srcDir - Source SCSS directory to scan for entry files.
 * @param {string} outDir - Output directory where resulting CSS should be written.
 * @return {void}
 */
function buildAll(srcDir, outDir) {
  const entries = getScssEntries(srcDir);

  if (entries.length === 0) {
    console.warn(`No SCSS entry files found in "${srcDir}".`);
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });

  for (const entry of entries) {
    buildScssFile(entry, srcDir, outDir);
  }

  console.log(`Built ${entries.length} files from ${srcDir}`);
}

// --------------------------------------------------------
// Default execution (if you run this script directly)
// --------------------------------------------------------

if (process.argv[1] === new URL(import.meta.url).pathname) {
  // Example usage: build the main project's SCSS
  buildAll("scss", "dist/css");
}

export { buildAll };
