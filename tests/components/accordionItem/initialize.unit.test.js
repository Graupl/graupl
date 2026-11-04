/**
 * Initialization tests for the AccordionItem class.
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

describe("AccordionItem initialization", () => {
  describe("constructor", () => {
    it("should connect the item's DOM to Core and the parent", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      expect(item).toBeInstanceOf(AccordionItem);
      expect(item).toBeInstanceOf(CollapsibleComponent);
      expect(item.dom.item).toBe(document.querySelector(".accordion-item"));
      expect(item.dom.toggle).toBe(
        document.querySelector(".accordion-item-toggle")
      );
      expect(item.dom.header).toBe(
        document.querySelector(".accordion-item-header")
      );
      expect(item.dom.content).toBe(
        document.querySelector(".accordion-item-content")
      );
      expect(item.rootDOMElement).toBe(item.dom.item);
      expect(item.dom.controlled).toBe(item.dom.item);
      expect(item.dom.controller).toBe(item.dom.toggle);
      expect(item.dom.trigger).toBe(item.dom.toggle);
      expect(item.elements.parent).toBe(accordion);
    });
  });

  describe("initialize", () => {
    it.each([
      ["true", true, "show", false, "true"],
      ["false", false, "hide", true, "false"],
      ["invalid", false, "hide", true, "false"],
    ])(
      "should derive initial expansion from aria-expanded=%s",
      (value, expanded, expectedClass, inert, expectedAria) => {
        const toggle = document.querySelector(".accordion-item-toggle");
        toggle.setAttribute("aria-expanded", value);
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          initialize: true,
        });
        const item = accordion.elements.accordionItems[0];

        expect(item.isInitialized).toBe(true);
        expect(item.isExpanded).toBe(expanded);
        expect(item.shouldBeExpanded).toBe(expanded);
        expect(toggle.getAttribute("aria-expanded")).toBe(expectedAria);
        expect(item.dom.item.classList.contains(expectedClass)).toBe(true);
        expect(item.dom.content.hasAttribute("inert")).toBe(inert);
        expect(item.dom.item.style.height).toBe("");
      }
    );

    it("should initialize collapsed when aria-expanded is absent", () => {
      document
        .querySelector(".accordion-item-toggle")
        .removeAttribute("aria-expanded");
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });
      const item = accordion.elements.accordionItems[0];

      expect(item.isInitialized).toBe(true);
      expect(item.isExpanded).toBe(false);
      expect(item.dom.toggle.getAttribute("aria-expanded")).toBe("false");
      expect(item.dom.content.hasAttribute("inert")).toBe(true);
    });
  });
});
