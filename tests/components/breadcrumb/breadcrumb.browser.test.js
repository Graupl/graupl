import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./breadcrumb.js";

describe("Breadcrumb Component", () => {
  it("Should match screenshot", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "breadcrumb",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("breadcrumb")).toMatchScreenshot();
  });
});
