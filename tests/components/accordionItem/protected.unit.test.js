/**
 * Protected method tests for the AccordionItem class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Accordion from "../../../packages/core/src/js/accordion/Accordion.js";
import { threeItemAccordion } from "../accordion/fixtures.js";

let accordion;

beforeEach(() => {
  document.body.innerHTML = threeItemAccordion;
});

afterEach(() => {
  accordion?.dispose();
  accordion = null;
  document.body.innerHTML = "";
  delete window.GrauplStorage;
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.useRealTimers();
});

describe("AccordionItem protected methods", () => {
  describe("_setIds", () => {
    it("should generate unique IDs using the parent's key and item index", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        key: "example",
        initialize: true,
      });
      const [first, second, third] = accordion.elements.accordionItems;
      const ids = [...document.querySelectorAll("[id]")].map(
        (element) => element.id
      );

      expect(first.dom.item.id).toBe("accordion-item-example-0");
      expect(first.dom.header.id).toBe("accordion-item-header-example-0");
      expect(first.dom.toggle.id).toBe("accordion-item-toggle-example-0");
      expect(first.dom.content.id).toBe("accordion-item-content-example-0");
      expect(second.dom.toggle.id).toBe("accordion-item-toggle-example-1");
      expect(second.dom.content.id).toBe("accordion-item-content-example-1");
      expect(third.dom.toggle.id).toBe("accordion-item-toggle-example-2");
      expect(third.dom.content.id).toBe("accordion-item-content-example-2");
      expect(new Set(ids).size).toBe(ids.length);
    });

    it("should preserve existing IDs and use them in ARIA relationships", () => {
      document.querySelector(".accordion-item").id = "existing-item";
      document.querySelector(".accordion-item-header").id = "existing-heading";
      document.querySelector(".accordion-item-toggle").id = "existing-toggle";
      document.querySelector(".accordion-item-content").id = "existing-panel";
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      expect(item.dom.item.id).toBe("existing-item");
      expect(item.dom.header.id).toBe("existing-heading");
      expect(item.dom.toggle.id).toBe("existing-toggle");
      expect(item.dom.content.id).toBe("existing-panel");
      expect(item.dom.toggle.getAttribute("aria-controls")).toBe(
        "existing-panel"
      );
      expect(item.dom.content.getAttribute("aria-labelledby")).toBe(
        "existing-toggle"
      );
    });
  });

  describe("_setAriaAttributes", () => {
    it("should label the panel and connect the native toggle to its content", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      expect(item.dom.toggle.hasAttribute("role")).toBe(false);
      expect(item.dom.toggle.getAttribute("aria-controls")).toBe(
        item.dom.content.id
      );
      expect(item.dom.content.getAttribute("role")).toBe("region");
      expect(item.dom.content.getAttribute("aria-labelledby")).toBe(
        item.dom.toggle.id
      );
      expect(item.dom.item.hasAttribute("aria-labelledby")).toBe(false);
    });

    it("should give a non-native toggle the button role", () => {
      document.querySelector(".accordion-item-toggle").outerHTML =
        '<span class="accordion-item-toggle" tabindex="0">Accordion Heading</span>';
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      expect(item.isInitialized).toBe(true);
      expect(item.dom.toggle.getAttribute("role")).toBe("button");
    });

    it("should label a section without adding a redundant region role", () => {
      document.querySelector(".accordion-item-content").outerHTML =
        '<section class="accordion-item-content"><p>Panel</p></section>';
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      expect(item.dom.content.hasAttribute("role")).toBe(false);
      expect(item.dom.content.getAttribute("aria-labelledby")).toBe(
        item.dom.toggle.id
      );
    });
  });

  describe("_registerEvents", () => {
    it.each([
      ["expand", "grauplAccordionItemExpand", "false"],
      ["collapse", "grauplAccordionItemCollapse", "true"],
    ])(
      "should dispatch %s as %s on the item",
      (method, eventName, expanded) => {
        document
          .querySelector(".accordion-item-toggle")
          .setAttribute("aria-expanded", expanded);
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          transitionClass: "",
          initialize: true,
        });
        const item = accordion.elements.accordionItems[0];
        const listener = vi.fn();
        item.dom.item.addEventListener(eventName, listener);

        item[method]();

        expect(listener).toHaveBeenCalledOnce();
        expect(listener.mock.calls[0][0].target).toBe(item.dom.item);
      }
    );

    it("should update expansion height and clear it after the transition", () => {
      vi.useFakeTimers();
      vi.stubGlobal("requestAnimationFrame", (callback) =>
        setTimeout(callback, 16)
      );
      vi.stubGlobal("cancelAnimationFrame", clearTimeout);
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        expandDuration: 80,
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];
      vi.spyOn(item.dom.header, "getBoundingClientRect").mockReturnValue({
        height: 20,
      });
      vi.spyOn(item.dom.content, "getBoundingClientRect").mockReturnValue({
        height: 100,
      });

      item.expand();

      expect(item.dom.item.style.height).toBe("20px");

      vi.advanceTimersByTime(32);

      expect(item.dom.item.style.height).toBe("120px");

      vi.runAllTimers();

      expect(item.dom.item.style.height).toBe("");
    });

    it("should collapse from the current height to the header height and clear it", () => {
      vi.useFakeTimers();
      vi.stubGlobal("requestAnimationFrame", (callback) =>
        setTimeout(callback, 16)
      );
      vi.stubGlobal("cancelAnimationFrame", clearTimeout);
      document
        .querySelector(".accordion-item-toggle")
        .setAttribute("aria-expanded", "true");
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        collapseDuration: 90,
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];
      vi.spyOn(item.dom.item, "getBoundingClientRect").mockReturnValue({
        height: 120,
      });
      vi.spyOn(item.dom.header, "getBoundingClientRect").mockReturnValue({
        height: 20,
      });

      item.collapse();

      expect(item.dom.item.style.height).toBe("120px");

      vi.advanceTimersByTime(16);

      expect(item.dom.item.style.height).toBe("20px");

      vi.runAllTimers();

      expect(item.dom.item.style.height).toBe("");
    });

    it("should cancel a pending collapse height update when expansion replaces it", () => {
      vi.useFakeTimers();
      vi.stubGlobal("requestAnimationFrame", (callback) =>
        setTimeout(callback, 16)
      );
      vi.stubGlobal("cancelAnimationFrame", clearTimeout);
      document
        .querySelector(".accordion-item-toggle")
        .setAttribute("aria-expanded", "true");
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];
      vi.spyOn(item.dom.item, "getBoundingClientRect").mockReturnValue({
        height: 120,
      });
      vi.spyOn(item.dom.header, "getBoundingClientRect").mockReturnValue({
        height: 20,
      });

      item.collapse();
      item.expand({ transition: false });
      vi.runAllTimers();

      expect(item.dom.item.style.height).toBe("");
    });

    it("should cancel the accordion height frame when disposed", () => {
      vi.useFakeTimers();
      vi.stubGlobal("requestAnimationFrame", (callback) =>
        setTimeout(callback, 16)
      );
      vi.stubGlobal("cancelAnimationFrame", clearTimeout);
      document
        .querySelector(".accordion-item-toggle")
        .setAttribute("aria-expanded", "true");
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];
      vi.spyOn(item.dom.item, "getBoundingClientRect").mockReturnValue({
        height: 120,
      });
      vi.spyOn(item.dom.header, "getBoundingClientRect").mockReturnValue({
        height: 20,
      });

      item.collapse();
      accordion.dispose();
      vi.runAllTimers();

      expect(item.dom.item.style.height).toBe("120px");
    });

    it.each([true, false])(
      "should update ARIA and remove inert when expanding with emit=%s",
      (emit) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          transitionClass: "",
          initialize: true,
        });
        const item = accordion.elements.accordionItems[0];

        item.expand({ emit });

        expect(item.dom.toggle.getAttribute("aria-expanded")).toBe("true");
        expect(item.dom.content.hasAttribute("inert")).toBe(false);
      }
    );

    it.each([true, false])(
      "should update ARIA and apply inert when collapsing with emit=%s",
      (emit) => {
        document
          .querySelector(".accordion-item-toggle")
          .setAttribute("aria-expanded", "true");
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          transitionClass: "",
          initialize: true,
        });
        const item = accordion.elements.accordionItems[0];

        item.collapse({ emit });

        expect(item.dom.toggle.getAttribute("aria-expanded")).toBe("false");
        expect(item.dom.content.hasAttribute("inert")).toBe(true);
      }
    );
  });
});
