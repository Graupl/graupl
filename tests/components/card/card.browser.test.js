import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./card.js";
import { variants } from "../defaults.js";

describe("Card Component", () => {
  describe.for(variants)("%s card", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("card")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
