import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./accordion.js";
import { variants } from "../defaults.js";

describe("Accordion Closed Component", () => {
  describe.for(variants)("%s accordion", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("accordion")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
