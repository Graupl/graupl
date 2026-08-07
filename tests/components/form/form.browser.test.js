import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./form.js";
import { variants, states } from "../defaults.js";

describe("Form Component", () => {
  describe.for(variants)("%s form", (variant) => {
    it.each(states)("Should match screenshot with state: %s", async (state) => {
      const screen = render(Component, {
        props: {
          variant,
          state,
          "data-testid": "form",
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("form")).toMatchScreenshot();
    });
  });
});
