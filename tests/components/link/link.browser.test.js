import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import { states } from "../defaults.js";
import Component from "./link.js";

describe("Link Component", () => {
  it.each(states)("Should match screenshot with state: %s", async (state) => {
    const screen = render(Component, {
      props: {
        state,
      },
    });

    await document.fonts.ready;

    await expect(
      screen.getByTestId("component-test-wrapper")
    ).toMatchScreenshot();
  });
});
