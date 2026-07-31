import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./accordion-open.js";
import { variants } from "../defaults.js";

describe("Accordion Open Component", () => {
  describe.for(variants)("%s accordion", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
          attributes: {
            "data-testid": "accordion",
          },
        },
      });

      await document.fonts.ready;

      const toggleButton = screen.getByTestId("item-toggle");
      await toggleButton.click();

      await expect(screen.getByTestId("accordion")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
