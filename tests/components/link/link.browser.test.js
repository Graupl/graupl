import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./link.js";

describe("Link Component", () => {
  const states = ["default", "hover", "active", "disabled", "focus", "current"];

  it("Should render", async () => {
    const screen = render(Component);

    await expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it.each(states)("Should match screenshot with state: %s", async (state) => {
    const screen = render(Component, {
      props: {
        state,
      },
    });

    await expect(screen.getByText("Click me")).toMatchScreenshot();
  });
});
