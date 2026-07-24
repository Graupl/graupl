import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./alert.js";
import { variants } from "../defaults.js";

describe("Alert Component", () => {
  describe.for(variants)("%s alert", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen).toHaveClass("alert");
      await expect(screen).toMatchScreenshot();
    });
  });
});
