/**
 * Click tests for the Accordion class.
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

describe("Accordion clicks", () => {
  describe("_handleClick", () => {
    it("should expand the clicked item", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const item = accordion.elements.accordionItems[1];
      const toggle = vi.spyOn(item, "toggle");

      item.dom.toggle.click();

      expect(toggle).toHaveBeenCalledOnce();
      expect(accordion.currentChild).toBe(1);
      expect(accordion.currentEvent).toBe("mouse");
      expect(item.isExpanded).toBe(true);
    });

    it("should collapse the clicked item", () => {
      document
        .querySelectorAll(".accordion-item-toggle")[1]
        .setAttribute("aria-expanded", "true");
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const item = accordion.elements.accordionItems[1];
      const toggle = vi.spyOn(item, "toggle");

      item.dom.toggle.click();

      expect(toggle).toHaveBeenCalledOnce();
      expect(accordion.currentChild).toBe(1);
      expect(accordion.currentEvent).toBe("mouse");
      expect(item.isExpanded).toBe(false);
    });

    it.each([
      [".expand-all", "expandChildren"],
      [".collapse-all", "collapseChildren"],
    ])("should delegate clicks on %s to %s", (selector, method) => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const action = vi.spyOn(accordion, method);

      document.querySelector(selector).click();

      expect(action).toHaveBeenCalledExactlyOnceWith();
      expect(accordion.currentEvent).toBe("mouse");
    });

    it.each([
      [".expand-all", "allowExpandMultiple", "expandChildren"],
      [".collapse-all", "allowCollapseAll", "collapseChildren"],
    ])("should ignore %s when %s is false", (selector, option, method) => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        [option]: false,
        initialize: true,
      });
      const action = vi.spyOn(accordion, method);

      // Dispatch directly to exercise the handler's guard even on a disabled button.
      document
        .querySelector(selector)
        .dispatchEvent(new MouseEvent("click", { bubbles: true }));

      expect(action).not.toHaveBeenCalled();
    });
  });
});
