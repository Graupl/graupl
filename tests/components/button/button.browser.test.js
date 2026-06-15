import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-vue";
import Component from "./button.js";

describe("Button Component", () => {
  it("Should render", async () => {
    const screen = render(Component);

    await expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
