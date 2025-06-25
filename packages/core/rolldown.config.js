import { defineConfig } from "rolldown";
import { plugins as globalPlugins } from "../../rolldown.config.js";

export const plugins = [...globalPlugins];

export default defineConfig([
  {
    input: "./src/js/main.js",
    output: {
      file: `dist/js/graupl.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/accordion/index.js",
    output: {
      file: `dist/js/accordion.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/alert/index.js",
    output: {
      file: `dist/js/alert.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/carousel/index.js",
    output: {
      file: `dist/js/carousel.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/navigation/index.js",
    output: {
      file: `dist/js/navigation.js`,
      format: "iife",
      sourcemap: true,
    },
    platform: "browser",
    plugins,
  },
  {
    input: "./src/js/accordion/Accordion.js",
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
    input: "./src/js/accordion/generator.js",
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
    input: "./src/js/alert/Alert.js",
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
    input: "./src/js/alert/generator.js",
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
    input: "./src/js/carousel/Carousel.js",
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
    input: "./src/js/carousel/generator.js",
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
    input: "./src/js/navigation/generator.js",
    output: ["iife", "es", "cjs"].map((format) => ({
      file: `dist/js/generator/navigation.${format}.js`,
      format,
      name: "NavigationGenerator",
      sourcemap: true,
    })),
    platform: "browser",
    plugins,
  },
]);
