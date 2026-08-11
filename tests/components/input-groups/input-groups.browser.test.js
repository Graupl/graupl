import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./input-groups.js";

describe("Input Group Component", () => {
  it("Should match screenshot:", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "input-group",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("input-group")).toMatchScreenshot();
  });
});
