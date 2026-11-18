import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { JSDOM } from "jsdom";
import { compileAsync, NodePackageImporter } from "sass-embedded";

const consumer = await mkdtemp(join(tmpdir(), "graupl-package-"));

try {
  const [archive] = JSON.parse(
    execFileSync(
      "npm",
      ["pack", "--ignore-scripts", "--json", "--pack-destination", consumer],
      { encoding: "utf8" }
    )
  );

  await writeFile(join(consumer, "package.json"), '{"private":true}');
  execFileSync(
    "npm",
    ["install", "--no-audit", "--no-fund", join(consumer, archive.filename)],
    { cwd: consumer, stdio: "inherit" }
  );

  const entry = join(consumer, "check.scss");
  await writeFile(entry, '@use "pkg:@graupl/graupl/scss/graupl.scss";\n');
  const { css } = await compileAsync(entry, {
    importers: [new NodePackageImporter()],
  });
  assert.match(css, /\.alert\b/);

  const bundle = await readFile(
    join(consumer, "node_modules/@graupl/graupl/dist/js/graupl.js"),
    "utf8"
  );
  const { window } = new JSDOM(
    '<div class="alert"><button type="button" class="alert-dismisser">Dismiss</button></div>',
    { runScripts: "outside-only", pretendToBeVisual: true }
  );
  try {
    window.eval(bundle);
    window.document.dispatchEvent(new window.Event("DOMContentLoaded"));
    assert.match(
      window.document.querySelector(".alert").getAttribute("data-once") ?? "",
      /\bgraupl-alert-generator\b/
    );
  } finally {
    window.close();
  }
} finally {
  await rm(consumer, { recursive: true, force: true });
}
