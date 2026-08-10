import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./form.js";
import { userEvent } from "vitest/browser";

describe("Form Component", () => {
  it("Should match screenshot when normal:", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "form",
        },
      },
    });

    await document.fonts.ready;

    await expect(screen.getByTestId("form")).toMatchScreenshot();
  });

  it("Should match screenshot with changed attributes:", async () => {
    const screen = render(Component, {
      props: {
        attributes: {
          "data-testid": "form",
          value: true,
        },
      },
    });

    await document.fonts.ready;
    const user = userEvent.setup();
    const selecter = screen.getByTestId("selecter1");
    const selecter2 = screen.getByTestId("selecter2");
    const checkedOption = screen.getByTestId("checkedoption1");
    const checkedOption2 = screen.getByTestId("checkedoption2");

    // Set the element value directly to the option's value attribute
    await user.selectOptions(selecter, "Option 2");
    await user.selectOptions(selecter2, ["Default Value", "Option 2"]);
    await user.click(checkedOption);
    await user.click(checkedOption2);

    await expect(screen.getByTestId("form")).toMatchScreenshot();
  });
});
