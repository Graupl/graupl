import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./tooltip.js";
import { variants } from "../defaults.js";

describe("Tooltip Component", () => {
  describe.for(variants)("%s tooltip", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByRole("button", { name: "" }).first();
      toggleButton.click();

      await expect(screen.getByTestId("tooltip")).toMatchScreenshot();
    });
  });
});
