import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./carousel.js";

describe("Carousel Component", () => {
  it("Should match screenshot", async () => {
    const screen = render(Component);

    await document.fonts.ready;

    await expect(
      screen.getByTestId("component-test-wrapper")
    ).toMatchScreenshot();
  });

  it("Should match screenshot with play", async () => {
    const screen = render(Component, {
      props: {
        play: true,
      },
    });

    await document.fonts.ready;

    await expect(
      screen.getByTestId("component-test-wrapper")
    ).toMatchScreenshot();
  });

  it("Should match screenshot with a disabled control", async () => {
    const screen = render(Component, {
      props: {
        disabled: true,
      },
    });

    await document.fonts.ready;

    await expect(
      screen.getByTestId("component-test-wrapper")
    ).toMatchScreenshot();
  });
});
