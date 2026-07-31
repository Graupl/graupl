import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./disclosure.js";
import { variants } from "../defaults.js";

describe("Disclosure Closed Component", () => {
  describe.for(variants);
  it("Should match screenshot while closed:", async (variant) => {
    const screen = render(Component, {
      props: {
        variant,
        attributes: {
          "data-testid": "disclosure-closed",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("disclosure-closed")).toMatchScreenshot();
  });
});

describe("Disclosure Open Component", () => {
  describe.for(variants);
  it("Should match screenshot while open:", async (variant) => {
    const screen = render(Component, {
      props: {
        open: true,
        variant,
        attributes: {
          "data-testid": "disclosure-open",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("disclosure-closed")).toMatchScreenshot();
  });
});
