import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./table.js";
import { variants } from "../defaults.js";

const classes = [
  "responsive-table",
  "bordered",
  "hoverable",
  "striped-columns",
  "striped-rows",
];

describe("Table Component", () => {
  describe.for(variants)("%s table", async (variant) => {
    it.each(classes)("Should match screenshot:", async (classes) => {
      const screen = render(Component, {
        props: {
          attributes: {
            class: `${variant} ${classes}`,
            "data-testid": "table",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("table")).toMatchScreenshot();
    });
  });
});
