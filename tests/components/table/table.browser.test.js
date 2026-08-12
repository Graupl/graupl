import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./table.js";
import { variants } from "../defaults.js";
import { userEvent } from "vitest/browser";

const classes = [
  "responsive-table",
  "bordered",
  "collapsed",
  "hoverable",
  "striped-columns",
  "striped-rows",
];

describe("Table Component", () => {
  describe.for(variants)("%s table", async (variant) => {
    it.each(classes)(
      "Should match screenshot with %s:",
      async (modifierClass) => {
        const screen = render(Component, {
          props: {
            attributes: {
              class: [`${variant}`, `${modifierClass}`],
              "data-testid": "table",
            },
          },
        });

        await document.fonts.ready;

        const user = userEvent.setup();
        const cell = screen.getByText("JavaScript frameworks");

        await user.hover(cell);

        await expect(screen.getByTestId("table")).toMatchScreenshot();
      }
    );
  });
});
