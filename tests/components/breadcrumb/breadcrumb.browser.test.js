import { h } from "vue";
import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./breadcrumb.js";
import { variants } from "../defaults.js";

describe("Breadcrumb Component", () => {
  describe.for(variants)("%s breadcrumb", async (variant) => {
    it("Should match screenshot", async () => {
      const screen = render(Component, {
        props: {
          variant,
          text: [
            h(
              "li",
              { class: "breadcrumb-item" },
              h("a", { class: "breadcrumb-link", href: "#" }, "Home")
            ),
            h("li", { class: "breadcrumb-item" }, "Breadcrumb"),
          ],
        },
      });

      await document.fonts.ready;

      await expect(screen.getByText("Home")).toBeVisible();
      await expect(screen)
        .toHaveClass("class", "breadcrumb")
        .toMatchScreenshot();
    });
  });
});
