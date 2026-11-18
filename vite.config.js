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
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
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
});
