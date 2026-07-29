import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./link.js";
import { states } from "../defaults.js";

describe("Link Component", () => {
  it.each(states)("Should match screenshot with state: %s", async (state) => {
    const screen = render(Component, {
      props: {
        state,
      },
    });

    await document.fonts.ready;

    await expect(screen.getByText("Click me")).toMatchScreenshot();
  });
});

afterEach(() => {
  cleanup();
});
