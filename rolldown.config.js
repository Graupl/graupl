import { defineConfig } from "rolldown";
import { minify } from "rollup-plugin-esbuild";
import { babel } from "@rollup/plugin-babel";

export const plugins = [babel({ babelHelpers: "bundled" }), minify()];

export default defineConfig([
  {
    input: "./packages/core/src/js/main.js",
    output: {
      file: `dist/js/graupl.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/accordion/index.js",
    output: {
      file: `dist/js/accordion.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/alert/index.js",
    output: {
      file: `dist/js/alert.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/carousel/index.js",
    output: {
      file: `dist/js/carousel.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/navigation/index.js",
    output: {
      file: `dist/js/navigation.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
]);
