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
      }
    );

    it.each([
      ["Enter", ".expand-all", "expandChildren"],
      [" ", ".expand-all", "expandChildren"],
      ["Enter", ".collapse-all", "collapseChildren"],
      [" ", ".collapse-all", "collapseChildren"],
    ])(
      "should prevent native %j activation on %s until keyup",
      (key, selector, method) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          initialize: true,
        });
        const action = vi.spyOn(accordion, method);
        const event = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });

        document.querySelector(selector).dispatchEvent(event);

        expect(event.defaultPrevented).toBe(true);
        expect(accordion.currentEvent).toBe("keyboard");
        expect(action).not.toHaveBeenCalled();
      }
    );
  });

  describe("_handleKeyup", () => {
    it.each(["Enter", " "])("should expand the focused item with %j", (key) => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const item = accordion.elements.accordionItems[1];

      item.dom.toggle.focus();

      const toggle = vi.spyOn(item, "toggle");
      const event = new KeyboardEvent("keyup", {
        key,
        bubbles: true,
        cancelable: true,
      });

      item.dom.toggle.dispatchEvent(event);

      expect(accordion.currentChild).toBe(1);
      expect(accordion.currentEvent).toBe("keyboard");
      expect(event.defaultPrevented).toBe(true);
      expect(toggle).toHaveBeenCalledOnce();
      expect(item.isExpanded).toBe(true);
    });

    it.each(["Enter", " "])(
      "should collapse the focused item with %j",
      (key) => {
        document
          .querySelectorAll(".accordion-item-toggle")[1]
          .setAttribute("aria-expanded", "true");
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          transitionClass: "",
          initialize: true,
        });
        const item = accordion.elements.accordionItems[1];

        item.dom.toggle.focus();

        const toggle = vi.spyOn(item, "toggle");
        const event = new KeyboardEvent("keyup", {
          key,
          bubbles: true,
          cancelable: true,
        });

        item.dom.toggle.dispatchEvent(event);

        expect(accordion.currentChild).toBe(1);
        expect(accordion.currentEvent).toBe("keyboard");
        expect(event.defaultPrevented).toBe(true);
        expect(toggle).toHaveBeenCalledOnce();
        expect(item.isExpanded).toBe(false);
      }
    );

    it.each([
      ["ArrowDown", "focusNextChild"],
      ["ArrowUp", "focusPreviousChild"],
      ["Home", "focusFirstChild"],
      ["End", "focusLastChild"],
    ])("should handle %s by calling %s", (key, method) => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        optionalKeySupport: true,
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
      const navigate = vi.spyOn(accordion, method);

      item.dom.toggle.dispatchEvent(keydown);
      item.dom.toggle.dispatchEvent(keyup);

      expect(keyup.defaultPrevented).toBe(true);
      expect(navigate).toHaveBeenCalledExactlyOnceWith();
    });

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
