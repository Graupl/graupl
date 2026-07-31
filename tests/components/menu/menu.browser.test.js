import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./menu.js";
import { variants } from "../defaults.js";

describe("Menu Closed Component", () => {
  describe.for(variants)("%s menu", async (variant) => {
    it("Should match screenshot while closed:", async () => {
      const screen = render(Component, {
        props: {
          variant,
          attributes: {
            "data-testid": "menu",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("menu")).toMatchScreenshot();
    });
  });
});

describe("Menu Open Component", () => {
  describe.for(variants)("%s menu", async (variant) => {
    it("Should match screenshot while open:", async () => {
      const screen = render(Component, {
        props: {
          open: true,
          variant,
          attributes: {
            "data-testid": "menu",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("menu")).toMatchScreenshot();
    });
  });
});
