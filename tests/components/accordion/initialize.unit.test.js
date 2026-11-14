/**
 * Initialization tests for the Accordion class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Accordion from "../../../packages/core/src/js/accordion/Accordion.js";
import AccordionItem from "../../../packages/core/src/js/accordion/AccordionItem.js";
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

describe("Accordion initialization", () => {
  describe("constructor", () => {
    it("should bootstrap without initializing by default", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
      });

      expect(accordion.isBootstrapped).toBe(true);
      expect(accordion.isInitialized).toBe(false);
      expect(accordion.elements.accordionItems).toEqual([]);
    });

    it("should use the default interaction settings", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
      });

      expect(accordion.allowExpandMultiple).toBe(true);
      expect(accordion.allowCollapseAll).toBe(true);
      expect(accordion.optionalKeySupport).toBe(false);
    });

    it("should use the default classes and durations", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
      });

      expect(accordion.expandClass).toBe("show");
      expect(accordion.collapseClass).toBe("hide");
      expect(accordion.transitionClass).toBe("transitioning");
      expect(accordion.transitionDuration).toBe(300);
      expect(accordion.expandDuration).toBe(300);
      expect(accordion.collapseDuration).toBe(300);
    });

    it("should initialize children when requested", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });

      const items = accordion.elements.accordionItems;

      expect(accordion.isInitialized).toBe(true);
      expect(items).toHaveLength(3);
      expect(items[0]).toBeInstanceOf(AccordionItem);
      expect(items[0].isInitialized).toBe(true);
      expect(items[1].isInitialized).toBe(true);
      expect(items[2].isInitialized).toBe(true);
      expect(items[0].elements.parent).toBe(accordion);
      expect(items[1].elements.parent).toBe(accordion);
      expect(items[2].elements.parent).toBe(accordion);
    });

    it("should forward custom configuration to each item", () => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        expandClass: ["expanded", "visible"],
        collapseClass: "collapsed",
        transitionClass: "animating",
        transitionDuration: 120,
        expandDuration: 180,
        collapseDuration: 90,
        prefix: "custom-",
        key: "example",
        initializeClass: "preparing",
        initialize: true,
      });

      const items = accordion.elements.accordionItems;

      expect(accordion.initializeClass).toBe("preparing");
      for (const item of items) {
        expect(item.classes.expand).toEqual(["expanded", "visible"]);
        expect(item.classes.collapse).toBe("collapsed");
        expect(item.classes.transition).toBe("animating");
        expect(item.durations).toEqual({
          transition: 120,
          expand: 180,
          collapse: 90,
        });
        expect(item.lockedClass).toBe("");
        expect(item.unlockedClass).toBe("");
        expect(item.prefix).toBe("custom-");
        expect(item.key).toBe("example");
      }
    });

    it.each([
      ["expandClass", "expand"],
      ["collapseClass", "collapse"],
      ["transitionClass", "transition"],
    ])("should use an empty class when %s is null", (option, className) => {
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        [option]: null,
        initialize: true,
      });

      expect(accordion.isInitialized).toBe(true);
      expect(accordion[option]).toBe("");
      expect(accordion.elements.accordionItems[0].classes[className]).toBe("");
    });
  });

  describe("initialize", () => {
    it("should initialize explicitly with custom selectors", () => {
      document.body.innerHTML = `
        <div class="custom-accordion">
          <div class="controls">
            <button type="button" class="control expand">Expand</button>
            <button type="button" class="control collapse">Collapse</button>
          </div>
          <article>
            <h3>
              <button type="button" class="toggle">Heading</button>
            </h3>
            <section><p>Panel</p></section>
          </article>
        </div>
      `;
      accordion = new Accordion({
        accordionElement: document.querySelector(".custom-accordion"),
        accordionItemsSelector: "article",
        accordionItemTogglesSelector: ".toggle",
        accordionItemHeadersSelector: "h3",
        accordionItemContentsSelector: "section",
        accordionControlContainerSelector: ".controls",
        accordionControlsSelector: ".control",
        expandControllerSelector: ".expand",
        collapseControllerSelector: ".collapse",
      });

      accordion.initialize();

      const item = accordion.elements.accordionItems[0];

      expect(accordion.isInitialized).toBe(true);
      expect(item.isInitialized).toBe(true);
      expect(item.dom.item).toBe(document.querySelector("article"));
      expect(item.dom.toggle).toBe(document.querySelector(".toggle"));
      expect(item.dom.header).toBe(document.querySelector("h3"));
      expect(item.dom.content).toBe(document.querySelector("section"));
      expect(accordion.dom.accordionControls).toHaveLength(2);
      expect(accordion.dom.expandController).toEqual([
        document.querySelector(".expand"),
      ]);
      expect(accordion.dom.collapseController).toEqual([
        document.querySelector(".collapse"),
      ]);
    });

    it("should initialize without bulk controls", () => {
      document.querySelector(".accordion-control-container").remove();
      accordion = new Accordion({
        accordionElement: document.querySelector(".accordion"),
        initialize: true,
      });

      expect(accordion.isInitialized).toBe(true);
      expect(accordion.dom.accordionControlContainer).toBeNull();
      expect(accordion.dom.accordionControls).toEqual([]);
    });

    it.each(["optionalKeySupport", "allowExpandMultiple", "allowCollapseAll"])(
      "should report invalid %s without initializing",
      (option) => {
        const error = vi.spyOn(console, "error").mockImplementation(() => {});
        accordion = new Accordion({
          accordionElement: document.querySelector(".accordion"),
          [option]: "invalid",
        });

        accordion.initialize();

        expect(accordion.isInitialized).toBe(false);
        expect(accordion.isValid).toBe(false);
        expect(accordion.errors).toContainEqual(expect.any(TypeError));
        expect(error).toHaveBeenCalled();
      }
    );
  });
});
