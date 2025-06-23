import { resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

// Get the current directory path.
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Supported build types.
const formats = ["iife", "esm", "cjs"];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist/js",
    lib: {
      entry: resolve(__dirname, "build.js"),
      name: "Graupl",
      formats,
      fileName: (format) => `graupl.${format}.js`,
    },
  },
  server: {
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
    },
  },
});
