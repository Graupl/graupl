import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./menu-open.js";
import { variants } from "../defaults.js";

describe("Menu Open Component", () => {
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

      await expect(menuButton).toHaveAttribute("aria-expanded", true);

      await expect(screen.getByTestId("submenu")).toBeInTheDocument();
      await expect(screen.getByTestId("menu")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
