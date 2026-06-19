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
            expect: {
              toMatchScreenshot: {
                comparator: "pixelMatch",
                comparatorOptions: {
                  threshold: 0.1,
                  allowedMismatchedPixelRatio: 0.01,
                },
              },
            },
            instances: [
              { browser: "chromium", headless: true },
              { browser: "firefox", headless: true },
              { browser: "webkit", headless: true },
            ],
          },
          include: ["tests/**/*.browser.{test,spec}.{js,ts,jsx,tsx}"],
        },
      },
    ],
  },
});
