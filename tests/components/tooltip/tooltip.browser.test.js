import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./tooltip.js";

describe("Tooltip Component", () => {
  it("Should match screenshot when closed", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "tooltip-closed",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("tooltip-closed")).toMatchScreenshot();
  });

  it("Should match screenshot when open", async () => {
    const screen = render(Component, {
      props: {
        open: true,
        attributes: {
          "data-testid": "tooltip-open",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("tooltip-open")).toMatchScreenshot();
  });
});
