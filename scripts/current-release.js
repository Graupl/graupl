/**
 * @file
 * This script generates the changelog for the current release.
 * It reads the CHANGELOG.md file and extracts the section for the current version.
 * The changelog is then written to CURRENT_RELEASE.md.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, "../package.json");
const changelogPath = path.join(__dirname, "../CHANGELOG.md");
const currentReleasePath = path.join(__dirname, "../CURRENT_RELEASE.md");

// Read the package.json file to get the current version
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const currentVersion = packageJson.version;

// Read the CHANGELOG.md file
const changelogContent = fs.readFileSync(changelogPath, "utf8");

// Parse the CHANGELOG.md to find the current version and all lines until the next version.
const lines = changelogContent.split("\n");
let inCurrentVersionSection = false;
let currentReleaseLines = [];
for (const line of lines) {
  if (line.startsWith(`## [${currentVersion}]`)) {
    inCurrentVersionSection = true;
    currentReleaseLines.push(line);
  } else if (inCurrentVersionSection) {
    if (line.startsWith("## ")) {
      // We reached the next version section, stop collecting lines
      break;
    }
    currentReleaseLines.push(line);
  }
}

if (currentReleaseLines.length > 0) {
  // Write the current release changelog to CURRENT_RELEASE.md
  fs.writeFileSync(
    currentReleasePath,
    currentReleaseLines.join("\n").trim(),
    "utf8"
  );
} else {
  fs.writeFileSync(
    currentReleasePath,
    `No changelog found for version ${currentVersion}.`,
    "utf8"
  );
}
