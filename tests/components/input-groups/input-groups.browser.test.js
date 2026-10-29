import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./input-groups.js";

// input-group's layout modifiers - not shared with any other component, so
// kept local rather than in the shared defaults.js fixture.
const modifiers = [
  "default",
  "top",
  "bottom",
  "left",
  "right",
  "inverse",
  "inline",
  "stacked",
];

describe("Input Group Component", () => {
  it.each(modifiers)(
    "Should match screenshot with modifier: %s",
    async (modifier) => {
      const screen = render(Component, {
        props: {
          modifier: modifier === "default" ? "" : modifier,
        },
      });

      await document.fonts.ready;

      await expect(
        screen.getByTestId("component-test-wrapper")
      ).toMatchScreenshot();
    }
  );

  describe("select input group", () => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          modifier: "inline",
          control: "select",
        },
      });

      await document.fonts.ready;

      await expect(
        screen.getByTestId("component-test-wrapper")
      ).toMatchScreenshot();
    });
  });

  describe("checkbox input group", () => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          control: "checkbox",
        },
      });

      await document.fonts.ready;

      await expect(
        screen.getByTestId("component-test-wrapper")
      ).toMatchScreenshot();
    });
  });
});
