/**
 * Public method tests for the AccordionItem class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Component from "@accessible-ecosystem/core/Component.js";
import CollapsibleComponent from "@accessible-ecosystem/core/CollapsibleComponent.js";
import Accordion from "../../../packages/core/src/js/accordion/Accordion.js";
import AccordionItem from "../../../packages/core/src/js/accordion/AccordionItem.js";
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
});

describe("AccordionItem public methods", () => {
  describe.each([
    "expand",
    "toggle",
    "lock",
    "unlock",
    "preview",
    "toggleLock",
  ])("%s", (method) => {
    it("should inherit the Core implementation", () => {
      expect(CollapsibleComponent.prototype[method]).toBeTypeOf("function");
      expect(AccordionItem.prototype[method]).toBe(
        CollapsibleComponent.prototype[method]
      );
    });
  });

  describe("initialize", () => {
    it("should inherit Core initialization", () => {
      expect(Component.prototype.initialize).toBeTypeOf("function");
      expect(AccordionItem.prototype.initialize).toBe(
        Component.prototype.initialize
      );
    });
  });

  describe("dispose", () => {
    it("should inherit Core cleanup", () => {
      expect(Component.prototype.dispose).toBeTypeOf("function");
      expect(AccordionItem.prototype.dispose).toBe(Component.prototype.dispose);
    });
  });

  describe("collapse", () => {
    it("should preserve the last expanded item even if it has been unlocked", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        allowCollapseAll: false,
        transitionClass: "",
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      item.expand();
      item.unlock();

      const collapse = vi.spyOn(CollapsibleComponent.prototype, "collapse");

      item.collapse();

      expect(collapse).not.toHaveBeenCalled();
      expect(item.isExpanded).toBe(true);
    });

    it("should forward options when collapse is allowed", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      const collapse = vi.spyOn(CollapsibleComponent.prototype, "collapse");
      const options = { emit: false, transition: false, preserveState: true };

      item.collapse(options);

      expect(collapse).toHaveBeenCalledExactlyOnceWith(options);
    });

    it("should allow forced collapse of the last expanded item", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        allowCollapseAll: false,
        transitionClass: "",
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      item.expand();

      item.collapse({ force: true, emit: false, transition: false });

      expect(item.isExpanded).toBe(false);
    });
  });

  describe("focus", () => {
    it("should focus the toggle for keyboard events", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[1];
      accordion.currentEvent = "keyboard";

      item.focus();

      expect(item.focusState).toBe("self");
      expect(document.activeElement).toBe(item.dom.toggle);
    });

    it("should update logical focus without moving DOM focus for mouse events", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[1];
      accordion.currentEvent = "mouse";

      item.focus();

      expect(item.focusState).toBe("self");
      expect(document.activeElement).toBe(document.body);
    });

    it.each([
      [false, 0],
      [true, 1],
    ])(
      "should apply expandOnFocus=%s when focusing the item",
      (expandOnFocus, calls) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          transitionClass: "",
          initialize: true,
        });
        const item = accordion.elements.accordionItems[0];
        item.expandOnFocus = expandOnFocus;
        const expand = vi.spyOn(item, "expand");

        item.focus();

        expect(expand).toHaveBeenCalledTimes(calls);
      }
    );
  });

  describe("blur", () => {
    it("should blur the toggle and clear logical focus", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];
      accordion.currentEvent = "keyboard";

      item.focus();

      item.blur();

      expect(item.focusState).toBe("none");
      expect(document.activeElement).toBe(document.body);
    });

    it("should preserve DOM focus when the parent disallows moving it", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      item.dom.toggle.focus();

      item.focusState = "self";
      accordion.currentEvent = "mouse";

      item.blur();

      expect(item.focusState).toBe("none");
      expect(document.activeElement).toBe(item.dom.toggle);
    });

    it.each([
      [false, 0],
      [true, 1],
    ])(
      "should apply collapseOnBlur=%s when blurring the item",
      (collapseOnBlur, calls) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          transitionClass: "",
          initialize: true,
        });
        const item = accordion.elements.accordionItems[0];

        item.collapseOnBlur = collapseOnBlur;
        const collapse = vi.spyOn(item, "collapse");

        item.blur();

        expect(collapse).toHaveBeenCalledTimes(calls);
      }
    );
  });

  describe("collapseSiblings", () => {
    it("should collapse every sibling without collapsing itself", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const [first, second, third] = accordion.elements.accordionItems;
      const firstCollapse = vi.spyOn(first, "collapse");
      const secondCollapse = vi.spyOn(second, "collapse");
      const thirdCollapse = vi.spyOn(third, "collapse");

      second.collapseSiblings();

      expect(firstCollapse).toHaveBeenCalledExactlyOnceWith();
      expect(secondCollapse).not.toHaveBeenCalled();
      expect(thirdCollapse).toHaveBeenCalledExactlyOnceWith();
    });
  });

  describe("unlockSiblings", () => {
    it("should forward options to every sibling without unlocking itself", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const [first, second, third] = accordion.elements.accordionItems;
      const firstUnlock = vi.spyOn(first, "unlock");
      const secondUnlock = vi.spyOn(second, "unlock");
      const thirdUnlock = vi.spyOn(third, "unlock");
      const options = { emit: false };

      second.unlockSiblings(options);

      expect(firstUnlock).toHaveBeenCalledExactlyOnceWith(options);
      expect(secondUnlock).not.toHaveBeenCalled();
      expect(thirdUnlock).toHaveBeenCalledExactlyOnceWith(options);
    });
  });
});
