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
    input: "./packages/core/src/js/storage/initializer.js",
    output: {
      file: `dist/js/storage/initializer.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/storage/StorageManager.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/storage/storage-manager.${format}.js`,
      format,
      name: "StorageManager",
      sourcemap: true,
    })),
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
    input: "./packages/core/src/js/disclosure/index.js",
    output: {
      file: `dist/js/disclosure.js`,
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
  {
    input: "./packages/core/src/js/tabs/index.js",
    output: {
      file: `dist/js/tabs.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/accordion/Accordion.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/component/accordion.${format}.js`,
      format,
      name: "Accordion",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/accordion/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/generator/accordion.${format}.js`,
      format,
      name: "AccordionGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/alert/Alert.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/component/alert.${format}.js`,
      format,
      name: "Alert",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/alert/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/generator/alert.${format}.js`,
      format,
      name: "AlertGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/carousel/Carousel.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/component/carousel.${format}.js`,
      format,
      name: "Carousel",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/carousel/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/generator/carousel.${format}.js`,
      format,
      name: "CarouselGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/disclosure/Disclosure.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/component/disclosure.${format}.js`,
      format,
      name: "Disclosure",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/disclosure/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/generator/disclosure.${format}.js`,
      format,
      name: "DisclosureGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/navigation/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/generator/navigation.${format}.js`,
      format,
      name: "NavigationGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/tabs/Tabs.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/component/tabs.${format}.js`,
      format,
      name: "Tabs",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
  {
    input: "./packages/core/src/js/tabs/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/generator/tabs.${format}.js`,
      format,
      name: "TabsGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
]);
