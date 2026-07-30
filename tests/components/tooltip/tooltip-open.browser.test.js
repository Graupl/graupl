import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./tooltip-open.js";
import { variants } from "../defaults.js";

describe("Tooltip Open Component", () => {
  describe.for(variants)("%s tooltip", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByText("Tips go here")).toHaveClass("show");

      await expect(screen.getByTestId("tooltip")).toMatchScreenshot();
    });
  });
});
