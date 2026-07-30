import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "vitest-browser-vue";
import Component from "./disclosure-open.js";
import { variants, statuses } from "../defaults.js";

describe("Disclosure Open Component", () => {
  describe.for(variants)("%s disclosure", async (variant) => {
    it.each(statuses)(
      "Should match screenshot with status: %s",
      async (status) => {
        const screen = render(Component, {
          props: {
            variant,
            status,
          },
        });

        await document.fonts.ready;

        const toggleButton = screen.getByRole("button", { name: "" }).first();
        await toggleButton.click();

        await expect(screen.getByTestId("disclosure")).toMatchScreenshot();
      }
    );
  });
});

afterEach(() => {
  cleanup();
});
