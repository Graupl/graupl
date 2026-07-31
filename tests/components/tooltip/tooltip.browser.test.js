import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./tooltip.js";

describe("Tooltip Component", () => {
  it("Should match screenshot when closed", async () => {
    const screen = render(Component);

    await document.fonts.ready;

    await expect(screen.getByTestId("tooltip")).toMatchScreenshot();
  });

  it("Should match screenshot when open", async () => {
    const screen = render(Component, {
      props: {
        open: true,
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("tooltip")).toMatchScreenshot();
  });
});
