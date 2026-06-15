/// <reference types="vitest/config" />
import { NodePackageImporter } from "sass-embedded";
import { defineConfig } from "vite";
import { Features } from "lightningcss";
import { playwright } from "@vitest/browser-playwright";

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
    projects: [
      {
        test: {
          name: "unit",
          environment: "jsdom",
          environmentOptions: {
            pretendToBeVisual: true,
          },
          include: ["tests/**/*.unit.{test,spec}.{js,ts,jsx,tsx}"],
        },
      },
      {
        test: {
          name: "browser",
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
          include: ["tests/**/*.browser.{test,spec}.{js,ts,jsx,tsx}"],
        },
      },
    ],
  },
});
