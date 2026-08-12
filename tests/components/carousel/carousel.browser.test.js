import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./carousel.js";

describe("Carousel Component", () => {
  it("Should match screenshot with pause", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "carousel",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("carousel")).toMatchScreenshot();
  });
});

describe("Carousel Component", () => {
  it("Should match screenshot with play", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "carousel",
        },
      },
    });

    await document.fonts.ready;

    const pauseButton = screen.getByRole("button").first();

    await pauseButton.click();

    await expect(screen.getByTestId("carousel")).toMatchScreenshot();
  });
});

describe("Carousel Component", () => {
  it("Should match screenshot with second image", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "carousel",
        },
      },
    });

    await document.fonts.ready;

    const secondTab = screen.getByTestId("second-tab");

    await secondTab.click();

    await expect(screen.getByTestId("carousel")).toMatchScreenshot();
  });
});
