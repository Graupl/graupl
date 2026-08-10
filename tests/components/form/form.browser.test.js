import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./form.js";
import { states } from "../defaults.js";
import { userEvent } from "vitest/browser";

describe("Form Component", () => {
  it.each(states)("Should match screenshot when normal:", async () => {
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
    const disabledOption = screen.getByTestId("disabledoption1");
    const checkedOption2 = screen.getByTestId("checkedoption2");
    const disabledOption2 = screen.getByTestId("disabledoption2");

    // Set the element value directly to the option's value attribute
    await user.selectOptions(selecter, selecter2.value);
    await checkedOption.setAttribute("checked", "true");
    await disabledOption.setAttribute("disabled", "true");
    await checkedOption2.setAttribute("checked", "true");
    await disabledOption2.setAttribute("disabled", "true");

    await expect(screen.getByTestId("form")).toMatchScreenshot();
  });
});
