import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./disclosure-open.js";
import { variants } from "../defaults.js";

describe("Disclosure Open Component", () => {
  describe.for(variants)("%s disclosure", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByRole("button", { name: "" }).first();
      await toggleButton.click();

      await expect(toggleButton).toHaveAttribute("aria-expanded", "true");

      await expect(screen.getByTestId("disclosure")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
