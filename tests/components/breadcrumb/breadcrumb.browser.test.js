import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./breadcrumb.js";
import { variants } from "../defaults.js";

describe("Breadcrumb Component", () => {
  describe.for(variants)("%s breadcrumb", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("breadcrumb")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
