import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./menu.js";
import { variants } from "../defaults.js";

describe("Menu Component", () => {
  describe.for(variants)("%s menu", (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByRole("button", { name: "Button" });
      await toggleButton.click();

      await expect(toggleButton).toHaveAttribute("aria-expanded", "true");

      await expect(screen.getByTestId("menu")).toMatchScreenshot();
    });
  });
});
