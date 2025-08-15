import { NodePackageImporter } from "sass-embedded";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "components-library/",
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    hmr: {
      host: "localhost",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        importers: [new NodePackageImporter()],
      },
    },
  },
});
