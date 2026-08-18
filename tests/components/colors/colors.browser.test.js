import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./colors.js";
import { variants } from "../defaults.js";

const shades = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];

describe("Colors Component", () => {
  describe.for(variants)("%s color", async (variant) => {
    if (variant != "default") {
      shades.forEach((shade) => {
        it(`Should match ${variant}-${shade}`, async () => {
          const screen = render(Component, {
            props: {
              attributes: {
                class: [
                  `bg-${variant}-${shade}`,
                  shade > "500" ? `text-${shade}-100` : "",
                ],
                "data-testid": "color",
              },
            },
          });

          await document.fonts.ready;

          await expect(screen.getByTestId("color")).toMatchScreenshot();
        });
      });
    } else {
      it("Should match screenshot", async () => {
        const screen = render(Component, {
          props: {
            variant,
            attributes: {
              "data-testid": "color",
            },
          },
        });

        await document.fonts.ready;

        await expect(screen.getByTestId("color")).toMatchScreenshot();
      });
    }
  });
});
