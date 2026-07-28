import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./menu.js";
import { variants, states } from "../defaults.js";

describe("Menu Component", () => {
  describe.for(variants)("%s menu", (variant) => {
    it.each(states)("Should match screenshot with state: %s", async (state) => {
      const screen = render(Component, {
        props: {
          variant,
          state,
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByRole("button", { name: "Button" });
      await toggleButton.click();

      await expect(screen.getByTestId("menu")).toMatchScreenshot();
    });
  });
});
