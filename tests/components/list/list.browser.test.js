import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./list.js";
import { variants } from "../defaults.js";

describe("List Component", () => {
  describe.for(variants)("%s list", (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("list")).toMatchScreenshot();
    });
  });
});
