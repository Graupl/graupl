import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import Component from "./accordion.js";
import generate from "../../components/accordion/accordion.js";

describe("Accordion.vue", () => {
  const mounted = () => {
    return mount(Component);
  };

  vi.mock(generate);

  it("renders the title correctly", () => {
    const Accordion = mounted();
    expect(Accordion.find(".accordion-item-toggle").text()).toBe(
      "Accordion Heading"
    );
  });

  it("is open by default and does not show content", () => {
    const Accordion = mounted();
    expect(Accordion.find(".accordion-item-content").exists()).toBe(true);
  });

  it("closes and hides content when clicked", async () => {
    const Accordion = mounted();
    const button = Accordion.find(".accordion-item-toggle");

    // Click to close
    await button.trigger("click");

    const content = Accordion.find(".accordion-item-content");
    expect(content.exists()).toBe(false);
  });

  it("opens when clicked a second time", async () => {
    const Accordion = mounted();
    const button = Accordion.find(".accordion-item-toggle");

    // Close it
    await button.trigger("click");
    expect(Accordion.find(".accordion-item-content").exists()).toBe(false);

    // Open it
    await button.trigger("click");
    const content = Accordion.find(".accordion-item-content");

    expect(content.exists()).toBe(true);
    expect(content.text()).toBe("Accordion Content");
  });
});
