import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./accordion.js";

describe("Accordion Open Component", () => {
  it("Should match screenshot", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "accordion",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("accordion")).toMatchScreenshot();
  });
});

describe("Accordion Open Component", () => {
  it("Should match screenshot", async () => {
    const screen = render(Component, {
      props: {
        open: true,
        attributes: {
          "data-testid": "accordion",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("accordion")).toMatchScreenshot();
  });
});
