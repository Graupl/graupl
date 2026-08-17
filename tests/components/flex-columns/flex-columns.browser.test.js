import { h } from "vue";
import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import BasicComponent from "../component/basic-component.js";
import Component from "./flex-columns.js";

describe("Flex Columns Layout", () => {
  it("Should match screenshot:", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "flex",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("flex")).toMatchScreenshot();
  });

  it("Should match screenshot with a fill column", async () => {
    const screen = render(Component, {
      props: {
        children: [
          h(BasicComponent, {
            attributes: { class: ["col-3", "bg-primary-700", "py-7", "px-5"] },
          }),
          // .fill removes the max-width cap, so this column should grow to
          // take up the leftover space rather than staying capped at 3/12.
          h(BasicComponent, {
            attributes: {
              class: ["col-3", "fill", "bg-tertiary-700", "py-7", "px-5"],
            },
          }),
          h(BasicComponent, {
            attributes: { class: ["col-3", "bg-primary-700", "py-7", "px-5"] },
          }),
        ],
        attributes: {
          "data-testid": "flex",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("flex")).toMatchScreenshot();
  });
});
