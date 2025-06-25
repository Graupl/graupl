import { defineConfig } from "rolldown";
import { plugins as globalPlugins } from "../../rolldown.config.js";

export const plugins = [...globalPlugins];

export default defineConfig([
  {
    input: "./src/js/navigation-shelf/index.js",
    output: {
      file: `dist/js/navigation-shelf.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/navigation-shelf/NavigationShelf.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/component/navigation-shelf.${format}.js`,
      format,
      name: "NavigationShelf",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/navigation-shelf/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/generator/navigation-shelf.${format}.js`,
      format,
      name: "NavigationShelfGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
]);
