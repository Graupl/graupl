import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./card.js";
import { variants } from "../defaults.js";

describe("Card Component", () => {
  describe.for(variants)("%s card", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByText("Card")).toMatchScreenshot();
    });
  });
});
