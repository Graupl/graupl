import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./badge.js";
import { variants } from "../defaults.js";

describe("Button Component", () => {
  it("Should render", async () => {
    const screen = render(Component);

    await expect(screen.getByText("Badge")).toBeInTheDocument();
  });

  describe.for(variants)("%s badge", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByText("Badge")).toMatchScreenshot();
    });
  });
});
