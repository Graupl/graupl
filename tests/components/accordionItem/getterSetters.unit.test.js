/**
 * Getter/setter tests for the AccordionItem class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
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

describe("AccordionItem getter/setters", () => {
  describe.each([
    "isExpanded",
    "shouldBeExpanded",
    "isLocked",
    "shouldBeLocked",
    "expandOnFocus",
    "collapseOnBlur",
  ])("%s", (property) => {
    it("should inherit the Core accessor", () => {
      const descriptor = Object.getOwnPropertyDescriptor(
        CollapsibleComponent.prototype,
        property
      );

      expect(descriptor.get).toBeTypeOf("function");
      expect(Object.getPrototypeOf(AccordionItem.prototype)).toBe(
        CollapsibleComponent.prototype
      );
      expect(Object.hasOwn(AccordionItem.prototype, property)).toBe(false);
    });
  });

  describe.each([
    ["expandClass", "visible", "shown"],
    ["collapseClass", "collapsed", "hidden"],
    ["transitionClass", "animating", "changing"],
    ["transitionDuration", 80, 90],
    ["expandDuration", 100, 110],
    ["collapseDuration", 120, 130],
  ])("%s", (property, parentValue, itemValue) => {
    it("should read the current value from the parent", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      accordion[property] = parentValue;

      expect(item[property]).toBe(parentValue);
    });

    it("should update the parent through the setter", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;

      first[property] = itemValue;

      expect(accordion[property]).toBe(itemValue);
      expect(second[property]).toBe(itemValue);
    });
  });

  describe("currentEvent", () => {
    it("should read the parent's current event", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      accordion.currentEvent = "keyboard";

      expect(item.currentEvent).toBe("keyboard");
    });

    it("should update the parent's current event through the setter", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;

      first.currentEvent = "mouse";

      expect(accordion.currentEvent).toBe("mouse");
      expect(second.currentEvent).toBe("mouse");
    });
  });

  describe("shouldFocus", () => {
    it.each([
      ["keyboard", true],
      ["mouse", false],
    ])(
      "should use the parent's focus permission for %s events",
      (currentEvent, shouldFocus) => {
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          initialize: true,
        });
        const item = accordion.elements.accordionItems[0];

        accordion.currentEvent = currentEvent;

        expect(item.shouldFocus).toBe(shouldFocus);
      }
    );
  });
});
