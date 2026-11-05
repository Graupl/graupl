/**
 * Public method tests for the Accordion class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Component from "@accessible-ecosystem/core/Component.js";
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

describe("Accordion public methods", () => {
  describe("initialize", () => {
    it("should inherit Core initialization", () => {
      expect(Component.prototype.initialize).toBeTypeOf("function");
      expect(Accordion.prototype.initialize).toBe(
        Component.prototype.initialize
      );
    });
  });

  describe("focusChild", () => {
    it("should blur the previous item and focus the selected toggle", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      accordion.currentEvent = "keyboard";
      const [first, second] = accordion.elements.accordionItems;

      first.focus();

      accordion.focusChild(1);

      expect(accordion.currentChild).toBe(1);
      expect(first.focusState).toBe("none");
      expect(second.focusState).toBe("self");
      expect(document.activeElement).toBe(second.dom.toggle);
    });
  });

  describe.each([
    ["focusFirstChild", 1, 0],
    ["focusLastChild", 1, 2],
    ["focusCurrentChild", 1, 1],
  ])("%s from index %i", (method, initialIndex, expectedIndex) => {
    it("should focus the selected item's toggle", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      accordion.currentEvent = "keyboard";
      accordion.currentChild = initialIndex;

      accordion[method]();

      expect(accordion.currentChild).toBe(expectedIndex);
      expect(document.activeElement).toBe(
        accordion.elements.accordionItems[expectedIndex].dom.toggle
      );
    });
  });

  describe("focusNextChild", () => {
    it.each([
      [1, 2],
      [2, 2],
    ])(
      "should move focus from index %i to index %i without wrapping",
      (initialIndex, expectedIndex) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          initialize: true,
        });
        accordion.currentEvent = "keyboard";
        accordion.currentChild = initialIndex;

        accordion.focusNextChild();

        expect(accordion.currentChild).toBe(expectedIndex);
        expect(document.activeElement).toBe(
          accordion.elements.accordionItems[expectedIndex].dom.toggle
        );
      }
    );
  });

  describe("focusPreviousChild", () => {
    it.each([
      [1, 0],
      [0, 0],
    ])(
      "should move focus from index %i to index %i without wrapping",
      (initialIndex, expectedIndex) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          initialize: true,
        });
        accordion.currentEvent = "keyboard";
        accordion.currentChild = initialIndex;

        accordion.focusPreviousChild();

        expect(accordion.currentChild).toBe(expectedIndex);
        expect(document.activeElement).toBe(
          accordion.elements.accordionItems[expectedIndex].dom.toggle
        );
      }
    );
  });

  describe("blurCurrentChild", () => {
    it("should blur the selected toggle", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      accordion.currentEvent = "keyboard";

      accordion.focusChild(1);

      const item = accordion.currentAccordionItem;

      accordion.blurCurrentChild();

      expect(item.focusState).toBe("none");
      expect(document.activeElement).toBe(document.body);
    });
  });

  describe.each([
    ["expandChildren", "expand"],
    ["collapseChildren", "collapse"],
  ])("%s", (method, childMethod) => {
    it("should delegate to every item", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const [first, second, third] = accordion.elements.accordionItems;
      const firstAction = vi.spyOn(first, childMethod);
      const secondAction = vi.spyOn(second, childMethod);
      const thirdAction = vi.spyOn(third, childMethod);

      accordion[method]();

      expect(firstAction).toHaveBeenCalledExactlyOnceWith();
      expect(secondAction).toHaveBeenCalledExactlyOnceWith();
      expect(thirdAction).toHaveBeenCalledExactlyOnceWith();
    });
  });

  describe("dispose", () => {
    it("should dispose children before disposing the parent", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const [first, second, third] = accordion.elements.accordionItems;
      const firstDispose = vi.spyOn(first, "dispose");
      const secondDispose = vi.spyOn(second, "dispose");
      const thirdDispose = vi.spyOn(third, "dispose");
      const parentDispose = vi.spyOn(Component.prototype, "dispose");

      accordion.dispose();

      expect(firstDispose).toHaveBeenCalledOnce();
      expect(secondDispose).toHaveBeenCalledOnce();
      expect(thirdDispose).toHaveBeenCalledOnce();
      expect(parentDispose.mock.contexts.at(-1)).toBe(accordion);
      expect(firstDispose.mock.invocationCallOrder[0]).toBeLessThan(
        parentDispose.mock.invocationCallOrder.at(-1)
      );
      expect(secondDispose.mock.invocationCallOrder[0]).toBeLessThan(
        parentDispose.mock.invocationCallOrder.at(-1)
      );
      expect(thirdDispose.mock.invocationCallOrder[0]).toBeLessThan(
        parentDispose.mock.invocationCallOrder.at(-1)
      );
    });
  });
});
