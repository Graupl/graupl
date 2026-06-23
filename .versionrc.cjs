const fs = require("fs");

// Get all package.json files in the packages/*/ directories
const packageJsonFiles = fs
  .readdirSync("packages")
  .filter((dir) => fs.statSync(`packages/${dir}`).isDirectory())
  .map((dir) => `packages/${dir}/package.json`);

const config = {
  types: [
    {
      type: "feat",
      section: "Features",
      hidden: false,
    },
    {
      type: "fix",
      section: "Bug Fixes",
      hidden: false,
    },
    {
      type: "perf",
      section: "Performance Improvements",
      hidden: false,
    },
    {
      type: "revert",
      section: "Reverts",
      hidden: false,
    },
    {
      type: "docs",
      section: "Documentation",
      hidden: false,
    },
    {
      type: "style",
      section: "Styles",
      hidden: true,
    },
    {
      type: "chore",
      section: "Miscellaneous Chores",
      hidden: true,
    },
    {
      type: "refactor",
      section: "Code Refactoring",
      hidden: false,
    },
    {
      type: "test",
      section: "Tests",
      hidden: true,
    },
    {
      type: "build",
      section: "Build System",
      hidden: false,
    },
    {
      type: "ci",
      section: "Continuous Integration",
      hidden: false,
    },
  ],
  scripts: {
    prerelease: "npm run lint && npm run build && npm run test:unit",
    prechangelog: "rm -f CURRENT_RELEASE.md",
    postchangelog: "node scripts/current-release.js",
    precommit: "git add dist/. packages/*/dist/. CURRENT_RELEASE.md",
  },
};

config.packageFiles = ["package.json"];

config.bumpFiles = [...config.packageFiles, ...packageJsonFiles];

module.exports = config;
