import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./container.js";

describe("Container Layout", () => {
  it("Should match screenshot:", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "container",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("container")).toMatchScreenshot();
  });
});
