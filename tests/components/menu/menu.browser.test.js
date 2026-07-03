import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./menu.js";
import { variants } from "../defaults.js";

describe("Menu Component", () => {
  describe.for(variants)("%s menu", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTag("li")).toMatchScreenshot();
    });
  });
});
