/**
 * Getter/setter tests for the Accordion class.
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

describe("Accordion getter/setters", () => {
  describe.each([
    "dom",
    "elements",
    "classes",
    "durations",
    "prefix",
    "key",
    "isInitialized",
    "shouldFocus",
    "shouldEmit",
    "currentEvent",
    "focusState",
  ])("%s", (property) => {
    it("should inherit the Core accessor", () => {
      const descriptor = Object.getOwnPropertyDescriptor(
        Component.prototype,
        property
      );

      expect(descriptor.get).toBeTypeOf("function");
      expect(Object.getPrototypeOf(Accordion.prototype)).toBe(
        Component.prototype
      );
      expect(Object.hasOwn(Accordion.prototype, property)).toBe(false);
    });
  });

  describe.each([
    ["expandClass", "visible", "expand"],
    ["collapseClass", ["collapsed", "hidden"], "collapse"],
    ["transitionClass", "animating", "transition"],
  ])("%s", (property, value, key) => {
    it("should update the configured class", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
      });

      accordion[property] = value;

      expect(accordion[property]).toEqual(value);
      expect(accordion.classes[key]).toEqual(value);
    });

    it("should reject an invalid class without changing the value", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        [property]: "original",
      });

      expect(() => {
        accordion[property] = 12;
      }).toThrow(TypeError);
      expect(accordion[property]).toBe("original");
    });
  });

  describe.each([
    ["transitionDuration", "--graupl-accordion-transition-duration"],
    ["expandDuration", "--graupl-accordion-open-transition-duration"],
    ["collapseDuration", "--graupl-accordion-close-transition-duration"],
  ])("%s", (property, customProperty) => {
    it("should update its CSS custom property", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });

      accordion[property] = 75;

      expect(accordion[property]).toBe(75);
      expect(
        accordion.dom.accordion.style.getPropertyValue(customProperty)
      ).toBe("75ms");
    });

    it("should reject an invalid duration without changing the value", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
      });

      expect(() => {
        accordion[property] = "75";
      }).toThrow(TypeError);
      expect(accordion[property]).toBe(300);
    });
  });

  describe("currentChild", () => {
    it("should select an item by index and ignore out-of-range values", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });

      accordion.currentChild = 1;

      expect(accordion.currentChild).toBe(1);
      expect(accordion.currentAccordionItem).toBe(
        accordion.elements.accordionItems[1]
      );

      accordion.currentChild = -1;
      accordion.currentChild = 3;

      expect(accordion.currentChild).toBe(1);

      expect(() => {
        accordion.currentChild = "2";
      }).toThrow(TypeError);
      expect(accordion.currentChild).toBe(1);
    });
  });

  describe("expandedAccordionItems", () => {
    it("should return only currently expanded items", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        transitionClass: "",
        initialize: true,
      });
      const [first, second, third] = accordion.elements.accordionItems;

      expect(accordion.expandedAccordionItems).toEqual([]);

      first.expand();
      third.expand();

      expect(accordion.expandedAccordionItems).toEqual([first, third]);

      first.collapse();
      second.expand();

      expect(accordion.expandedAccordionItems).toEqual([second, third]);
    });
  });

  describe("optionalKeySupport", () => {
    it("should update optional keyboard support", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        optionalKeySupport: true,
      });

      expect(accordion.optionalKeySupport).toBe(true);

      accordion.optionalKeySupport = false;

      expect(accordion.optionalKeySupport).toBe(false);
    });

    it("should reject an invalid boolean without changing the value", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        optionalKeySupport: true,
      });

      expect(() => {
        accordion.optionalKeySupport = "false";
      }).toThrow(TypeError);
      expect(accordion.optionalKeySupport).toBe(true);
    });
  });

  describe.each([
    ["allowExpandMultiple", ".expand-all"],
    ["allowCollapseAll", ".collapse-all"],
  ])("%s", (property, selector) => {
    it("should disable the bulk control when initialized with false", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        [property]: false,
        initialize: true,
      });

      expect(accordion[property]).toBe(false);
      expect(document.querySelector(selector).disabled).toBe(true);
    });

    it("should update the bulk control when changed", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const control = document.querySelector(selector);

      expect(control.disabled).toBe(false);

      accordion[property] = false;

      expect(control.disabled).toBe(true);

      accordion[property] = true;

      expect(control.disabled).toBe(false);
    });

    it("should reject an invalid boolean without changing the value", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        [property]: true,
      });

      expect(() => {
        accordion[property] = "false";
      }).toThrow(TypeError);
      expect(accordion[property]).toBe(true);
    });
  });
});
