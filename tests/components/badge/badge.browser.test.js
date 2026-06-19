import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./badge.js";
import { variants } from "../defaults.js";
import "../../tests.css";

describe("Badge Component", () => {
  describe.for(variants)("%s badge", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByText("Badge")).toMatchScreenshot();
    });
  });
});
