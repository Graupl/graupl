import { NodePackageImporter } from "sass-embedded";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "demo",
  },
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
