/**
 * Tests for the hasValidRootDOMElement() function.
 */

import { describe, it, expect } from "vitest";
import { hasValidRootDOMElement } from "../../packages/core/src/js/validate.js";

describe("hasValidRootDOMElement", () => {
  class TestComponent {
    constructor() {
      this._dom = { root: null };
      this._rootDOMElement = "root";
    }
  }

  it("should return true when the root DOM element exists in _dom", () => {
    const component = new TestComponent();
    const result = hasValidRootDOMElement(component);

    expect(result.status).toBeTruthy();
    expect(result.errors).toHaveLength(0);
  });

  it("should return false when the root DOM element does not exist in _dom", () => {
    const component = new TestComponent();
    component._rootDOMElement = "missing";

    expect(() => {
      hasValidRootDOMElement(component);
    }).toThrow(Error);
  });

  it("should throw the first error when shouldThrow is true", () => {
    const component = new TestComponent();
    component._rootDOMElement = "missing";

    expect(() => {
      hasValidRootDOMElement(component, { shouldThrow: true });
    }).toThrow(Error);
  });

  it("should not throw when shouldThrow is false", () => {
    const component = new TestComponent();
    component._rootDOMElement = "missing";

    const result = hasValidRootDOMElement(component, { shouldThrow: false });

    expect(result.status).toBeFalsy();
    expect(result.errors[0]).toBeInstanceOf(Error);
  });
});
