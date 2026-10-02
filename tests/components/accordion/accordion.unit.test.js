import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import Component from "./accordion.js";
import generate from "../../components/accordion/accordion.js";

vi.mock("./accordion.unit.test.js", () => {
  return {
    default: () => generate(),
  };
});

describe("Accordion.vue", () => {
  const mounted = () => {
    return mount(Component);
  };

  it("renders the title correctly", () => {
    const Accordion = mounted();
    expect(Accordion.find(".accordion-item-toggle").text()).toBe(
      "Accordion Heading"
    );
  });

  it("is closed by default and does not show content", () => {
    const Accordion = mounted();
    expect(Accordion.find(".accordion-item-content").exists()).toBe(false);
  });

  it("opens and displays content when clicked", async () => {
    const Accordion = mounted();
    const button = Accordion.find(".accordion-item-toggle");

    // Click to open
    await button.trigger("click");

    const content = Accordion.find(".accordion-item-content");
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe("Accordion Content");
  });

  it("closes when clicked a second time", async () => {
    const Accordion = mounted();
    const button = Accordion.find(".accordion-item-toggle");

    // Open it
    await button.trigger("click");
    expect(Accordion.find(".accordion-item-content").exists()).toBe(true);

    // Close it
    await button.trigger("click");
    expect(Accordion.find(".accordion-item-content").exists()).toBe(false);
  });
});
