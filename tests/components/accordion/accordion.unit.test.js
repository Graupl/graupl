import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Component from "./accordion.js";
import generate from "../../components/accordion/accordion.js";

// vi.mock("./accordion.unit.test.js", () => {
//   return {
//     default: () => generate(),
//   };
// });

describe("Accordion.vue", () => {
  const mounted = () => {
    return mount(Component, {
      methods: {
        handleToggle() {
          // Use the imported function
          generate(this);
        },
      },
    });
  };

  it("renders the title correctly", () => {
    const Accordion = mounted();
    expect(Accordion.find(".accordion-item-toggle").text()).toBe(
      "Accordion Heading"
    );
  });

  it("is open by default and shows content", () => {
    const Accordion = mounted();
    expect(Accordion.find(".accordion-item-content").exists()).toBe(true);
  });

  it("opens and displays content when clicked", async () => {
    const Accordion = mounted();
    const button = Accordion.find(".accordion-item-toggle");

    // Click to open
    await button.trigger("click");

    const content = Accordion.find(".accordion-item-body");
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe("Accordion Body");
  });

  it("closes when clicked a second time", async () => {
    const Accordion = mounted();
    const button = Accordion.find(".accordion-item-toggle");

    // Close it
    await button.trigger("click");
    expect(Accordion.find(".accordion-item-content").exists()).toBe(false);

    // Open it
    await button.trigger("click");
    expect(Accordion.find(".accordion-item-content").exists()).toBe(true);
  });
});
