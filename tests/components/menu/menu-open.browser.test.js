import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./menu-open.js";
import { variants } from "../defaults.js";

describe("Menu Open Component", () => {
  describe.for(variants)("%s menu", (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("submenu")).toBeInTheDocument();
      await expect(screen.getByTestId("menu")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
