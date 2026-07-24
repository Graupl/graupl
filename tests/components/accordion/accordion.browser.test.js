import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./accordion.js";
import { variants } from "../defaults.js";

describe("Accordion Component", () => {
  describe.for(variants)("%s accordion", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByRole("button").first();
      await toggleButton.click();

      await expect(screen.getByTestId("accordion")).toMatchScreenshot();
    });
  });
});
