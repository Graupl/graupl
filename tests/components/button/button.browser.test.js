import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./button.js";

describe("Button Component", () => {
  const variants = ["default", "primary", "secondary", "tertiary"];
  const states = ["default", "hover", "active", "disabled", "focus", "current"];

  it("Should render", async () => {
    const screen = render(Component);

    await expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  describe.for(variants)("%s button", async (variant) => {
    it.each(states)("Should match screenshot with state: %s", async (state) => {
      const screen = render(Component, {
        props: {
          variant,
          state,
        },
      });

      await expect(screen.getByText("Click me")).toMatchScreenshot();
    });
  });
});
