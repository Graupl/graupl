import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./form.js";
import { states } from "../defaults.js";

describe("Form Component", () => {
  it.each(states)("Should match screenshot with state: %s", async (state) => {
    const screen = render(Component, {
      props: {
        state,
        attributes: {
          "data-testid": "form",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("form")).toMatchScreenshot();
  });

  it("Should match screenshot with changed attributes:", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "form",
          value: true,
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("form")).toMatchScreenshot();
  });
});
