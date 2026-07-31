import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./alert.js";
import { variants } from "../defaults.js";

describe("Alert Component", () => {
  describe.for(variants)("%s alert", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
          attributes: {
            "data-testid": "alert",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("alert")).toMatchScreenshot();
    });
  });
});

afterEach(() => {
  cleanup();
});
