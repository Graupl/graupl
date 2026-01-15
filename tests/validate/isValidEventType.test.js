/**
 * Tests for the isValidEventType() function.
 */

import { describe, it, expect } from "vitest";
import { isValidEventType } from "../../packages/core/src/js/validate.js";

describe("isValidEventType", () => {
  class TestComponent {
    constructor() {
      this.events = {
        expand: {},
        collapse: {},
      };
    }
  }

  it("should return true when the event type exists on the component", () => {
    const component = new TestComponent();
    const result = isValidEventType("expand", component);

    expect(result.status).toBeTruthy();
    expect(result.errors).toHaveLength(0);
  });

  it("should return false when the event type does not exist on the component", () => {
    const component = new TestComponent();

    expect(() => {
      isValidEventType("invalid", component);
    }).toThrow(TypeError);
  });

  it("should throw the first error when shouldThrow is true", () => {
    const component = new TestComponent();

    expect(() => {
      isValidEventType("invalid", component, { shouldThrow: true });
    }).toThrow(TypeError);
  });

  it("should not throw when shouldThrow is false", () => {
    const component = new TestComponent();
    const result = isValidEventType("invalid", component, {
      shouldThrow: false,
    });

    expect(result.status).toBeFalsy();
    expect(result.errors[0]).toBeInstanceOf(TypeError);
  });
});
