import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./columns.js";

const colCount = [
  "count-1",
  "count-2",
  "count-3",
  "count-4",
  "count-5",
  "count-6",
  "count-7",
  "count-8",
  "count-9",
  "count-10",
  "count-11",
  "count-12",
];

const spanCount = [
  "span-1",
  "span-2",
  "span-3",
  "span-4",
  "span-5",
  "span-6",
  "span-7",
  "span-8",
  "span-9",
  "span-10",
  "span-11",
  "span-12",
];

describe("Columns Layout", () => {
  it.each(colCount)("Should match screenshot:", async (colCount) => {
    const screen = render(Component, {
      props: {
        attributes: {
          class: [`${colCount}`],
          "data-testid": "columns",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("columns")).toMatchScreenshot();
  });
});

describe("Columns Layout", () => {
  it.each(colCount)("Should match screenshot: fixed %s", async (colCount) => {
    const screen = render(Component, {
      props: {
        fixed: true,
        attributes: {
          class: [`${colCount}`],
          "data-testid": "columns",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("columns")).toMatchScreenshot();
  });
});

describe("Columns Layout", () => {
  it.each(spanCount)("Should match screenshot: fixed %s", async (spanCount) => {
    const screen = render(Component, {
      props: {
        fixed: true,
        span: `${spanCount}`,
        attributes: {
          class: ["count-12"],
          "data-testid": "columns",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("columns")).toMatchScreenshot();
  });
});
