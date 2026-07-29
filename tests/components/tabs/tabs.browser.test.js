import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./tabs.js";
import { variants } from "../defaults.js";

describe("Tabs Component", () => {
  describe.for(variants)("%s tabs", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      const tabButton = screen.getByRole("button").first();
      await tabButton.click();

      await expect(tabButton).toHaveAttribute("tabindex", "0");

      await expect(screen.getByTestId("tabs")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
