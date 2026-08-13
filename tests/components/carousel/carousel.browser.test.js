import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./carousel.js";
import { userEvent } from "vitest/browser";

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
        play: true,
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
  it("Should match screenshot with second image", async () => {
    const screen = render(Component, {
      props: {
        play: true,
        secondTab: true,
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
  it("Should match screenshot on second with next clicked", async () => {
    const screen = render(Component, {
      props: {
        play: true,
        secondTab: true,
        attributes: {
          "data-testid": "carousel",
        },
      },
    });

    await document.fonts.ready;

    const user = userEvent.setup();
    const next = screen.getByTestId("next");
    const img = screen.getByTestId("third");

    user.click(next);

    await expect(img).toBeInViewport();

    await expect(screen.getByTestId("carousel")).toMatchScreenshot();
  });
});
