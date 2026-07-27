import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./list.js";
import { variants, states } from "../defaults.js";

describe("List Component", () => {
  describe.for(variants)("%s list", (variant) => {
    it.each(states)("Should match screenshot with state: %s", async (state) => {
      const screen = render(Component, {
        props: {
          variant,
          state,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByText("List Item")).toMatchScreenshot();
    });
  });
});
