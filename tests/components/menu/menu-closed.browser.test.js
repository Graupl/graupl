import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./menu-closed.js";
import { variants } from "../defaults.js";

describe("Menu Closed Component", () => {
  describe.for(variants)("%s menu", (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("menu")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
