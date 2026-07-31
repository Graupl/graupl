import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./accordion.js";
import { variants } from "../defaults.js";

describe("Accordion Closed Component", () => {
  describe.for(variants)("%s accordion", async (variant) => {
    it("Should match screenshot while closed:", async () => {
      const screen = render(Component, {
        props: {
          variant,
          attributes: {
            "dataset-testid": "accordion",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("accordion")).toMatchScreenshot();
    });
  });
});

describe("Accordion Open Component", () => {
  describe.for(variants)("%s accordion", async (variant) => {
    it("Should match screenshot while open:", async () => {
      const screen = render(Component, {
        props: {
          open: true,
          variant,
          attributes: {
            "dataset-testid": "accordion",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("accordion")).toMatchScreenshot();
    });
  });
});
