import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Component from "./accordion.js";

describe("Accordion.vue", () => {
  const Accordion = () => {
    return mount(Component);
  };

  it("renders the title correctly", () => {
    expect(Accordion.find(".accordion-item-toggle").text()).toBe(
      "Accordion Heading"
    );
  });

  it("is closed by default and does not show content", () => {
    expect(Accordion.find(".accordion-item-content").exists()).toBe(false);
  });

  it("opens and displays content when clicked", async () => {
    const button = Accordion.find(".accordion-item-toggle");

    // Click to open
    await button.trigger("click");

    const content = Accordion.find(".accordion-item-content");
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe("Accordion Content");
  });

  it("closes when clicked a second time", async () => {
    const button = Accordion.find(".accordion-item-toggle");

    // Open it
    await button.trigger("click");
    expect(Accordion.find(".accordion-item-content").exists()).toBe(true);

    // Close it
    await button.trigger("click");
    expect(Accordion.find(".accordion-item-content").exists()).toBe(false);
  });
});
