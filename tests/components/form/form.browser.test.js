import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./form.js";
import { states } from "../defaults.js";

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
    const input = screen.getByTestId("input-default");
    const textarea = screen.getByTestId("textarea-disabled");
    const select = screen.getByTestId("select-disabled");
    const fieldset = screen.getByTestId("fieldset-disabled");
    const selecter = screen.getByTestId("selecter");
    const checkedOption = screen.getByTestId("checkedoption1");
    const disabledOption = screen.getByTestId("disabledoption1");
    const checkedOption2 = screen.getByTestId("checkedoption2");
    const disabledOption2 = screen.getByTestId("disabledoption2");

    // Set the element value directly to the option's value attribute
    await input.setAttribute("disabled");
    await textarea.setAttribute("disabled");
    await select.setAttribute("disabled");
    await fieldset.setAttribute("disabled");
    await selecter.selectOptions(select, "Option 2");
    await checkedOption.setAttribute("checked");
    await disabledOption.setAttribute("disabled");
    await checkedOption2.setAttribute("checked");
    await disabledOption2.setAttribute("disabled");

    await expect(screen.getByTestId("form")).toMatchScreenshot();
  });
});
