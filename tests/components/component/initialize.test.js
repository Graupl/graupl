/**
 * @file
 * Initialization tests for the base Component class.
 */

import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import Component from "../../../packages/core/src/js/Component.js";

beforeAll(() => {
  // Mock the console.error method.
  console.error = vi.fn((error) => {
    throw new Error(error);
  });
});

afterAll(() => {
  // Restore the console.error method.
  console.error = vi.restoreAllMocks();
});

// Test base Component initialization.
describe("Component", () => {
  // Test that the Component will initailize.
  it("should initialize", () => {
    const component = new Component();

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).not.toThrow();
  });

  // Test that the Component will initialize when a valid prefix is provided.
  it("should initialize with a valid prefix", () => {
    const component = new Component({ prefix: "my-prefix" });

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).not.toThrow();
  });

  // Test that the Component will throw an error when an invalid prefix is provided.
  it("should throw an error with an invalid prefix", () => {
    const component = new Component({ prefix: 123 });

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).toThrow();
  });

  // Test that the component will initialize when a valid key is provided.
  it("should initialize with a valid key", () => {
    const component = new Component({ key: "my-key" });

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).not.toThrow();
  });

  // Test that the component will throw an error when an invalid key is provided.
  it("should throw an error with an invalid key", () => {
    const component = new Component({ key: {} });

    expect(() => {
      component.initialize();
    }).toThrow();
  });

  // Test that the component will initialize when a valid initializeClass is provided.
  it("should initialize with a valid initializeClass", () => {
    const component = new Component({ initializeClass: "my-initialize-class" });

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).not.toThrow();
  });

  // Test that the component will initialize when an array of valid initializeClass is provided.
  it("should initialize with an array of valid initializeClass", () => {
    const component = new Component({
      initializeClass: ["class-one", "class-two"],
    });

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).not.toThrow();
  });

  // Test that the component will throw an error when an invalid initializeClass is provided.
  it("should throw an error with an invalid initializeClass", () => {
    const component = new Component({ initializeClass: 456 });

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).toThrow();
  });

  // Test that the component will throw an error when an array with an invalid initializeClass is provided.
  it("should throw an error with an array with an invalid initializeClass", () => {
    const component = new Component({
      initializeClass: ["valid-class", 789],
    });

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).toThrow();
  });

  // Test that the component will throw an error when an array of partially invalid initializeClass is provided
  it("should throw an error with an array of partially invalid initializeClass", () => {
    const component = new Component({
      initializeClass: ["valid-class", {}],
    });

    // Mock a DOM element for the component so it passes initialization.
    component._dom["element"] = document.createElement("div");
    component._rootDOMElement = "element";

    expect(() => {
      component.initialize();
    }).toThrow();
  });

  // Test that the component will throw an error when no root DOM element is found.
  it("should throw an error when no root DOM element is found", () => {
    const component = new Component();

    expect(() => {
      component.initialize();
    }).toThrow();
  });
});
