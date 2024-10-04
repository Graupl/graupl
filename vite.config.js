import { resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import process from "process";

// Get the current directory path.
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// The type of menu to build from the BUILD_TYPE environment variable.
// If BUILD_TYPE is not set, the default build is used
const buildType = process.env.BUILD_TYPE ?? "default";

// Supported build types.
const formats = ["iife", "esm", "cjs"];

// The library options for the different menus.
const lib = {
  default: {
    entry: resolve(__dirname, "build.js"),
    name: "Graupl",
    formats,
    fileName: (format) => `graupl.${format}.js`,
  },
  Alert: {
    entry: resolve(__dirname, "/src/js/alert/Alert.js"),
    name: "Alert",
    formats,
    fileName: (format) => `component/alert.${format}.js`,
  },
  Carousel: {
    entry: resolve(__dirname, "/src/js/carousel/Carousel.js"),
    name: "Carousel",
    formats,
    fileName: (format) => `component/carousel.${format}.js`,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist/js",
    lib: lib[buildType] || lib.default,
    emptyOutDir: false,
  },
  server: {
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
    },
  },
});
