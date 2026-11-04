/**
 * Keyboard tests for the Accordion class.
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

describe("Accordion keyboard events", () => {
  describe("_handleKeydown", () => {
    it.each(["Enter", " "])(
      "should prevent native %j activation until keyup",
      (key) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          initialize: true,
        });
        const item = accordion.elements.accordionItems[1];

        item.dom.toggle.focus();

        const toggle = vi.spyOn(item, "toggle");
        const event = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });
        const stopPropagation = vi.spyOn(event, "stopPropagation");

        item.dom.toggle.dispatchEvent(event);

        expect(event.defaultPrevented).toBe(true);
        expect(stopPropagation).toHaveBeenCalledOnce();
        expect(accordion.currentEvent).toBe("keyboard");
        expect(toggle).not.toHaveBeenCalled();
      }
    );

    it.each(["ArrowDown", "ArrowUp", "Home", "End"])(
      "should prevent %s when optional navigation is enabled",
      (key) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          optionalKeySupport: true,
          initialize: true,
        });
        const item = accordion.elements.accordionItems[1];

        item.dom.toggle.focus();

        const event = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });

        item.dom.toggle.dispatchEvent(event);

        expect(event.defaultPrevented).toBe(true);
        expect(accordion.currentEvent).toBe("keyboard");
        expect(accordion.currentChild).toBe(1);
      }
    );

    it.each(["Enter", " "])(
      "should prevent native %j activation on bulk controls",
      (key) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          initialize: true,
        });
        const expand = vi.spyOn(accordion, "expandChildren");
        const collapse = vi.spyOn(accordion, "collapseChildren");
        const expandEvent = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });
        const collapseEvent = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });

        document.querySelector(".expand-all").dispatchEvent(expandEvent);
        document.querySelector(".collapse-all").dispatchEvent(collapseEvent);

        expect(expandEvent.defaultPrevented).toBe(true);
        expect(collapseEvent.defaultPrevented).toBe(true);
        expect(accordion.currentEvent).toBe("keyboard");
        expect(expand).not.toHaveBeenCalled();
        expect(collapse).not.toHaveBeenCalled();
      }
    );
  });

  describe("_handleKeyup", () => {
    it.each(["Enter", " "])("should toggle the focused item with %j", (key) => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;

      second.dom.toggle.focus();

      const toggle = vi.spyOn(second, "toggle");
      const event = new KeyboardEvent("keyup", {
        key,
        bubbles: true,
        cancelable: true,
      });

      second.dom.toggle.dispatchEvent(event);

      expect(accordion.currentChild).toBe(1);
      expect(accordion.currentEvent).toBe("keyboard");
      expect(event.defaultPrevented).toBe(true);
      expect(toggle).toHaveBeenCalledOnce();
      expect(second.isExpanded).toBe(true);
      expect(first.isExpanded).toBe(false);

      second.dom.toggle.dispatchEvent(
        new KeyboardEvent("keyup", { key, bubbles: true, cancelable: true })
      );

      expect(toggle).toHaveBeenCalledTimes(2);
      expect(second.isExpanded).toBe(false);
    });

    it.each([
      ["ArrowDown", 1, 2],
      ["ArrowDown", 2, 2],
      ["ArrowUp", 1, 0],
      ["ArrowUp", 0, 0],
      ["Home", 1, 0],
      ["End", 1, 2],
    ])(
      "should move focus with %s from index %i to index %i",
      (key, initialIndex, expectedIndex) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          optionalKeySupport: true,
          initialize: true,
        });
        const item = accordion.elements.accordionItems[initialIndex];

        item.dom.toggle.focus();

        const keydown = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });
        const keyup = new KeyboardEvent("keyup", {
          key,
          bubbles: true,
          cancelable: true,
        });

        item.dom.toggle.dispatchEvent(keydown);
        item.dom.toggle.dispatchEvent(keyup);

        expect(keyup.defaultPrevented).toBe(true);
        expect(accordion.currentChild).toBe(expectedIndex);
        expect(document.activeElement).toBe(
          accordion.elements.accordionItems[expectedIndex].dom.toggle
        );
        expect(accordion.expandedAccordionItems).toEqual([]);
      }
    );

    it.each(["ArrowDown", "ArrowUp", "Home", "End"])(
      "should preserve focus and allow %s by default",
      (key) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          initialize: true,
        });
        const item = accordion.elements.accordionItems[1];

        item.dom.toggle.focus();

        const keydown = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });
        const keyup = new KeyboardEvent("keyup", {
          key,
          bubbles: true,
          cancelable: true,
        });

        item.dom.toggle.dispatchEvent(keydown);
        item.dom.toggle.dispatchEvent(keyup);

        expect(keydown.defaultPrevented).toBe(false);
        expect(keyup.defaultPrevented).toBe(false);
        expect(accordion.currentChild).toBe(1);
        expect(document.activeElement).toBe(item.dom.toggle);
      }
    );

    it.each([
      ["Tab", false],
      ["Tab", true],
      ["Escape", false],
      ["a", false],
    ])("should leave %s with shiftKey=%s to the browser", (key, shiftKey) => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        optionalKeySupport: true,
        initialize: true,
      });
      const item = accordion.elements.accordionItems[1];

      item.dom.toggle.focus();

      const keydown = new KeyboardEvent("keydown", {
        key,
        shiftKey,
        bubbles: true,
        cancelable: true,
      });
      const keyup = new KeyboardEvent("keyup", {
        key,
        shiftKey,
        bubbles: true,
        cancelable: true,
      });
      const toggle = vi.spyOn(item, "toggle");

      item.dom.toggle.dispatchEvent(keydown);
      item.dom.toggle.dispatchEvent(keyup);

      expect(keydown.defaultPrevented).toBe(false);
      expect(keyup.defaultPrevented).toBe(false);
      expect(toggle).not.toHaveBeenCalled();
      expect(accordion.currentChild).toBe(1);
    });

    it.each([
      ["Enter", ".expand-all", "expandChildren"],
      [" ", ".expand-all", "expandChildren"],
      ["Enter", ".collapse-all", "collapseChildren"],
      [" ", ".collapse-all", "collapseChildren"],
    ])("should handle %j on %s by calling %s", (key, selector, method) => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const action = vi.spyOn(accordion, method);
      const event = new KeyboardEvent("keyup", {
        key,
        bubbles: true,
        cancelable: true,
      });

      document.querySelector(selector).dispatchEvent(event);

      expect(event.defaultPrevented).toBe(true);
      expect(accordion.currentEvent).toBe("keyboard");
      expect(action).toHaveBeenCalledExactlyOnceWith();
    });

    it.each([
      [".expand-all", "allowExpandMultiple", "expandChildren"],
      [".collapse-all", "allowCollapseAll", "collapseChildren"],
    ])(
      "should ignore activation on %s when %s is false",
      (selector, option, method) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          [option]: false,
          initialize: true,
        });
        const action = vi.spyOn(accordion, method);

        document.querySelector(selector).dispatchEvent(
          new KeyboardEvent("keyup", {
            key: "Enter",
            bubbles: true,
            cancelable: true,
          })
        );

        expect(action).not.toHaveBeenCalled();
      }
    );
  });
});
