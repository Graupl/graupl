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
        attributes: {
          "data-testid": "carousel",
        },
      },
    });

    await document.fonts.ready;

    const user = userEvent.setup();
    const pauseButton = screen.getByRole("button", { class: "autoplay" });

    await user.click(pauseButton);

    await expect(screen.getByTestId("carousel")).toMatchScreenshot();
  });
});
