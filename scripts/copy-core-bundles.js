import { cp, rm } from "node:fs/promises";

const source = new URL(
  "../node_modules/@graupl/core/dist/js/",
  import.meta.url
);
const destination = new URL("../dist/js/", import.meta.url);

await rm(destination, { recursive: true, force: true });
await cp(source, destination, { recursive: true });
