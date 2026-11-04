/**
 * Protected method tests for the Accordion class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Accordion from "../../../packages/core/src/js/accordion/Accordion.js";
import { threeItemAccordion } from "./fixtures.js";

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
});

describe("Accordion protected methods", () => {
  describe("_setIds", () => {
    it("should generate the root ID from the supplied key", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        key: "example",
        initialize: true,
      });

      expect(accordion.dom.accordion.id).toBe("accordion-example");
      expect(accordion.id).toBe("accordion-example");
    });

    it("should preserve an existing root ID", () => {
      document.querySelector(".accordion").id = "existing-accordion";
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        key: "example",
        initialize: true,
      });

      expect(accordion.dom.accordion.id).toBe("existing-accordion");
      expect(accordion.id).toBe("existing-accordion");
    });
  });

  describe("_setCustomProps", () => {
    it("should use the configured prefix and fallback durations", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        prefix: "custom-",
        transitionDuration: 120,
        initialize: true,
      });
      const style = accordion.dom.accordion.style;

      expect(
        style.getPropertyValue("--custom-accordion-transition-duration")
      ).toBe("120ms");
      expect(
        style.getPropertyValue("--custom-accordion-open-transition-duration")
      ).toBe("120ms");
      expect(
        style.getPropertyValue("--custom-accordion-close-transition-duration")
      ).toBe("120ms");

      accordion.transitionDuration = 180;

      expect(
        style.getPropertyValue("--custom-accordion-open-transition-duration")
      ).toBe("180ms");
      expect(
        style.getPropertyValue("--custom-accordion-close-transition-duration")
      ).toBe("180ms");
    });
  });

  describe("_createChildElements", () => {
    it("should allow multiple expanded items and collapsing every item by default", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;

      first.expand();
      second.expand();

      expect(accordion.expandedAccordionItems).toEqual([first, second]);
      expect(first.isLocked).toBe(false);
      expect(second.isLocked).toBe(false);

      first.collapse();
      second.collapse();

      expect(accordion.expandedAccordionItems).toEqual([]);
    });

    it.each([true, false])(
      "should collapse siblings with emit set to %s in single-expansion mode",
      (emit) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          allowExpandMultiple: false,
          transitionClass: "",
          initialize: true,
        });
        const [first, second] = accordion.elements.accordionItems;

        first.expand({ emit: false });

        const collapse = vi.spyOn(first, "collapse");

        second.expand({ emit });

        expect(collapse).toHaveBeenCalledExactlyOnceWith({
          force: true,
          emit: true,
          transition: true,
        });
        expect(accordion.expandedAccordionItems).toEqual([second]);
        expect(first.dom.toggle.getAttribute("aria-expanded")).toBe("false");
        expect(second.dom.toggle.getAttribute("aria-expanded")).toBe("true");
      }
    );

    it("should unlock a previously required item when another item expands", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        allowCollapseAll: false,
        transitionClass: "",
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;

      first.expand({ emit: false });

      expect(first.isLocked).toBe(true);

      second.expand({ emit: false });

      expect(first.isLocked).toBe(false);
      expect(second.isLocked).toBe(false);

      first.collapse({ emit: false });

      expect(first.isExpanded).toBe(false);
      expect(second.isExpanded).toBe(true);
      expect(second.isLocked).toBe(true);
    });

    it("should transfer the required expanded item in single-expansion mode", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        allowExpandMultiple: false,
        allowCollapseAll: false,
        transitionClass: "",
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;

      first.expand();

      expect(first.isLocked).toBe(true);

      second.expand();

      expect(first.isExpanded).toBe(false);
      expect(first.isLocked).toBe(false);
      expect(second.isExpanded).toBe(true);
      expect(second.isLocked).toBe(true);
    });

    it("should enforce single expansion for initially expanded markup", () => {
      const toggles = document.querySelectorAll(".accordion-item-toggle");
      toggles[0].setAttribute("aria-expanded", "true");
      toggles[1].setAttribute("aria-expanded", "true");

      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        allowExpandMultiple: false,
        allowCollapseAll: false,
        initialize: true,
      });

      const [first, second] = accordion.elements.accordionItems;

      expect(accordion.isInitialized).toBe(true);
      expect(first.isExpanded).toBe(false);
      expect(first.isLocked).toBe(false);
      expect(second.isExpanded).toBe(true);
      expect(second.isLocked).toBe(true);
      expect(accordion.expandedAccordionItems).toEqual([second]);
    });
  });

  describe("_handleFocus", () => {
    it("should select the item whose toggle receives focus", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[2];

      item.dom.toggle.focus();

      expect(accordion.currentChild).toBe(2);
      expect(accordion.currentAccordionItem).toBe(item);
      expect(document.activeElement).toBe(item.dom.toggle);
    });
  });
});
