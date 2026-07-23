import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./disclosure.js";
import { variants } from "../defaults.js";
import { userEvent } from "vitest/browser";

describe("Disclosure Component", () => {
  describe.for(variants)("%s disclosure", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByRole("button");
      await userEvent.click(toggleButton);

      await expect(screen.getByText("Disclosure")).toBeVisible();

      await expect(screen.getByText("Disclosure")).toMatchScreenshot();
    });
  });
});
