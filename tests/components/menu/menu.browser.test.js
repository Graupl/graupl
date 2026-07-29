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

      const menuButton = screen.getByRole("button", { name: "Button" }).first();
      await menuButton.click();

      await expect(menuButton).toHaveBeenCalledOnce;

      await expect(screen.getByTestId("menu")).toMatchScreenshot();
    });
  });
});
