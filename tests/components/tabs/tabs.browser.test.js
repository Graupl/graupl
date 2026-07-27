import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./tabs.js";
import { variants } from "../defaults.js";

describe("Disclosure Component", () => {
  describe.for(variants)("%s tabs", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByRole("tab", { selected: true });

      await expect(toggleButton).toHaveAttribute("tabindex", "0");

      await expect(screen.getByTestId("tabs")).toMatchScreenshot();
    });
  });
});
