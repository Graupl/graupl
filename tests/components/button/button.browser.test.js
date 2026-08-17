import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./button.js";
import { variants as themeVariants, states } from "../defaults.js";

// The button component also has a `.link` modifier.
const variants = [...themeVariants, "link"];

describe("Button Component", () => {
  describe.for(variants)("%s button", (variant) => {
    it.each(states)("Should match screenshot with state: %s", async (state) => {
      const screen = render(Component, {
        props: {
          variant,
          state,
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("button-wrapper")).toMatchScreenshot();
    });
  });

  describe("anchor button", () => {
    it("Should match screenshot when rendered on an anchor element", async () => {
      const screen = render(Component, {
        props: {
          tag: "a",
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("button-wrapper")).toMatchScreenshot();
    });
  });
});
