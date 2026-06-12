import { NodePackageImporter } from "sass-embedded";
import { defineConfig } from "vite";
import { Features } from "lightningcss";

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
    transformer: "lightningcss",
    lightningcss: {
      exclude: Features.LightDark,
    },
    preprocessorOptions: {
      scss: {
        importers: [new NodePackageImporter()],
      },
    },
  },
  test: {
    environment: "jsdom",
    environmentOptions: {
      pretendToBeVisual: true,
    },
  },
});
