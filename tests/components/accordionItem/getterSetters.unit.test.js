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
    it("should read live parent settings and forward writes to the parent", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;

      accordion[property] = parentValue;

      expect(first[property]).toBe(parentValue);
      expect(second[property]).toBe(parentValue);

      first[property] = itemValue;

      expect(accordion[property]).toBe(itemValue);
      expect(first[property]).toBe(itemValue);
      expect(second[property]).toBe(itemValue);
    });
  });

  describe("currentEvent", () => {
    it("should share the current event with the parent and sibling items", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const [first, second] = accordion.elements.accordionItems;

      accordion.currentEvent = "keyboard";

      expect(first.currentEvent).toBe("keyboard");

      first.currentEvent = "mouse";

      expect(accordion.currentEvent).toBe("mouse");
      expect(second.currentEvent).toBe("mouse");
    });
  });

  describe("shouldFocus", () => {
    it("should read the parent's focus permission", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      accordion.currentEvent = "keyboard";

      expect(item.shouldFocus).toBe(true);

      accordion.currentEvent = "mouse";

      expect(item.shouldFocus).toBe(false);
    });
  });
});
