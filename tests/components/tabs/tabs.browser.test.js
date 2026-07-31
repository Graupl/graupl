import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./tabs.js";

describe("Tabs Component", () => {
  it("Should match screenshot", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "tabs",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("tabs")).toMatchScreenshot();
  });
});
