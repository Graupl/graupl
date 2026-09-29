import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./accordion.js";

describe("Accordion Closed Component", () => {
  it("Should match screenshot", async () => {
    const screen = render(Component);

    await document.fonts.ready;

    await expect(
      screen.getByTestId("component-test-wrapper")
    ).toMatchScreenshot();
  });
});

describe("Accordion Open Component", () => {
  it("Should match screenshot", async () => {
    const screen = render(Component, {
      props: {
        open: true,
      },
    });

    await document.fonts.ready;

    await expect(
      screen.getByTestId("component-test-wrapper")
    ).toMatchScreenshot();
  });
});
