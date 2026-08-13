import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./columns.js";

const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// container's sidebars options affect how much width columns has to work
// with, so these are tested together here rather than in isolation.
const sidebarsOptions = ["none", "left", "right", "both"];

describe("Columns Layout", () => {
  it.each(counts)("Should match screenshot with count: %s", async (count) => {
    const screen = render(Component, {
      props: {
        count,
        attributes: {
          "data-testid": "columns",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("columns")).toMatchScreenshot();
  });

  it.each(counts)(
    "Should match screenshot: fixed with count: %s",
    async (count) => {
      const screen = render(Component, {
        props: {
          count,
          fixed: true,
          attributes: {
            "data-testid": "columns",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("columns")).toMatchScreenshot();
    }
  );

  it("Should match screenshot: fixed with fewer items than count", async () => {
    // With only 1 item in a count-3 fixed layout, the item should hold to
    // its calculated 1/3-width column rather than stretching to fill the
    // row - that's the whole point of .fixed, and it's invisible in the
    // "fixed with count" loop above since 12 items always fill the row
    // regardless of fixed/not-fixed.
    const screen = render(Component, {
      props: {
        count: 3,
        fixed: true,
        items: 1,
        attributes: {
          "data-testid": "columns",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("columns")).toMatchScreenshot();
  });

  it.each(spans)("Should match screenshot with span: %s", async (span) => {
    const screen = render(Component, {
      props: {
        span,
        count: 12,
        attributes: {
          "data-testid": "columns",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("columns")).toMatchScreenshot();
  });

  it.each(sidebarsOptions)(
    "Should match screenshot in a container with sidebars: %s",
    async (sidebars) => {
      const screen = render(Component, {
        props: {
          sidebars,
          attributes: {
            "data-testid": "columns",
          },
        },
      });

      await document.fonts.ready;

      await expect(screen.getByTestId("columns")).toMatchScreenshot();
    }
  );
});
