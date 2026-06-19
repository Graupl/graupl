import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./button.js";
import { variants, states } from "../defaults.js";
import "../../tests.css";

describe("Button Component", () => {
  it("Should render", async () => {
    const screen = render(Component);

    await document.fonts.ready;

    await expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  describe.for(variants)("%s button", (variant) => {
    it.each(states)("Should match screenshot with state: %s", async (state) => {
      const screen = render(Component, {
        props: {
          text: "",
          variant,
          state,
          attributes: {
            "data-testid": "test-button",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("test-button")).toMatchScreenshot();
    });
  });
});
