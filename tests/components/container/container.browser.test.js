import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./columns.js";

describe("Columns Layout", () => {
  it("Should match screenshot:", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "columns",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("columns")).toMatchScreenshot();
  });
});
