import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./tooltip.js";
import { variants } from "../defaults.js";
import { userEvent } from "vitest/browser";

describe("Tooltip Component", () => {
  describe.for(variants)("%s tooltip", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByRole("button", { name: "" });
      await userEvent.click(toggleButton);

      await expect(screen.getByText("Tips go here")).toHaveClass("show");

      await expect(screen.getByTestId("tooltip")).toMatchScreenshot();
    });
  });
});
