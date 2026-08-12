import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./container.js";

// container's sidebars options aren't shared with any other component, so
// kept local rather than in the shared defaults.js fixture.
const sidebarsOptions = ["none", "left", "right", "both"];

describe("Container Layout", () => {
  it.each(sidebarsOptions)(
    "Should match screenshot with sidebars: %s",
    async (sidebars) => {
      const screen = render(Component, {
        props: {
          sidebars,
          attributes: {
            "data-testid": "container",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("container")).toMatchScreenshot();
    }
  );
});
