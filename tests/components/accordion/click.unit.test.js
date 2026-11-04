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
    it("should toggle the clicked item and retain its content", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;
      const toggle = vi.spyOn(second, "toggle");
      const content = second.dom.content;

      second.dom.toggle.click();

      expect(toggle).toHaveBeenCalledOnce();
      expect(accordion.currentChild).toBe(1);
      expect(accordion.currentEvent).toBe("mouse");
      expect(second.isExpanded).toBe(true);
      expect(second.dom.item.classList.contains("show")).toBe(true);
      expect(second.dom.toggle.getAttribute("aria-expanded")).toBe("true");
      expect(content.hasAttribute("inert")).toBe(false);
      expect(first.isExpanded).toBe(false);

      second.dom.toggle.click();

      expect(toggle).toHaveBeenCalledTimes(2);
      expect(second.isExpanded).toBe(false);
      expect(second.dom.item.classList.contains("hide")).toBe(true);
      expect(second.dom.toggle.getAttribute("aria-expanded")).toBe("false");
      expect(content.hasAttribute("inert")).toBe(true);
      expect(second.dom.content).toBe(content);
      expect(content.isConnected).toBe(true);
      expect(content.textContent).toBe("Second panel");
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
