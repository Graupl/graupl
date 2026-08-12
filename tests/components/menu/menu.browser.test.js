import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./menu.js";

describe("Menu Closed Component", () => {
  it("Should match screenshot while closed:", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "menu",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("menu")).toMatchScreenshot();
  });
});

describe("Menu Open Component", () => {
  it("Should match screenshot while open:", async () => {
    const screen = render(Component, {
      props: {
        open: true,
        attributes: {
          "data-testid": "menu",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("menu")).toMatchScreenshot();
  });
});
