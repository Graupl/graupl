import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./disclosure-closed.js";
import { variants } from "../defaults.js";

describe("Disclosure Closed Component", () => {
  describe.for(variants)("%s disclosure", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("disclosure")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
