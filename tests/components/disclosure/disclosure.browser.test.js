import { h } from "vue";
import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./disclosure.js";
import { variants } from "../defaults.js";

describe("Disclosure Component", () => {
  describe.for(variants)("%s disclosure", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(
        (h("button", { class: "disclosure-toggle" + " " + variant }),
        Component,
        {
          props: {
            variant,
            text: h("div", { class: "disclosure-content" }, [
              h("p", "Disclosure"),
            ]),
          },
        })
      );

      await document.fonts.ready;

      const toggleButton = screen.getByRole("button", {
        class: "disclosure-toggle",
      });
      await toggleButton.click();

      await expect(screen.getByText("Disclosure")).toBeVisible();

      await expect(screen.getByText("Disclosure")).toMatchScreenshot();
    });
  });
});
