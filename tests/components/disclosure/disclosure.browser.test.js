import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./disclosure.js";
import { variants } from "../defaults.js";

describe("Disclosure Closed Component", () => {
  describe.for(variants)("%s disclosure", async (variant) => {
    it("Should match screenshot while closed: %s", async () => {
      const screen = render(Component, {
        props: {
          variant,
          attributes: {
            dataset: {
              testId: "disclosure",
            },
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("disclosure")).toMatchScreenshot();
    });
  });
});

describe("Disclosure Open Component", () => {
  describe.for(variants)("%s disclosure", async (variant) => {
    it("Should match screenshot while open: %s", async () => {
      const screen = render(Component, {
        props: {
          open: true,
          variant,
          attributes: {
            dataset: {
              testId: "disclosure",
            },
          },
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
