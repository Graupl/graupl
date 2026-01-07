/**
 * Tests for focusable element helpers in domHelpers.
 */

import { describe, it, expect } from "vitest";
import {
  selectAllFocusableElements,
  selectFirstFocusableElement,
  selectLastFocusableElement,
  selectNextFocusableElement,
  selectPreviousFocusableElement,
} from "../../packages/core/src/js/domHelpers.js";

describe("focusable element selectors", () => {
  it("should select all focusable elements and ignore tabindex -1", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <a href="#one">One</a>
      <button>Two</button>
      <input />
      <div tabindex="0">Three</div>
      <div tabindex="-1">Skip</div>
    `;

    const elements = selectAllFocusableElements(container);

    expect(elements).toHaveLength(4);
    expect(elements.map((el) => el.textContent || el.tagName)).toEqual([
      "One",
      "Two",
      "INPUT",
      "Three",
    ]);
  });

  it("should allow filtering focusable elements with a predicate", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <button data-kind="primary">Primary</button>
      <button data-kind="secondary">Secondary</button>
    `;

    const elements = selectAllFocusableElements(container, (el) => {
      return el.dataset.kind === "primary";
    });

    expect(elements).toHaveLength(1);
    expect(elements[0].dataset.kind).toBe("primary");
  });

  it("should return false when no focusable elements exist", () => {
    const container = document.createElement("div");

    expect(selectFirstFocusableElement(container)).toBe(false);
    expect(selectLastFocusableElement(container)).toBe(false);
  });

  it("should return the first and last focusable elements", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <button>First</button>
      <button>Middle</button>
      <button>Last</button>
    `;

    expect(selectFirstFocusableElement(container).textContent).toBe("First");
    expect(selectLastFocusableElement(container).textContent).toBe("Last");
  });

  it("should return the next and previous focusable elements relative to a target", () => {
    const container = document.createElement("div");
    container.innerHTML = `
      <button>First</button>
      <button>Middle</button>
      <button>Last</button>
    `;

    const buttons = container.querySelectorAll("button");
    const first = buttons[0];
    const middle = buttons[1];
    const last = buttons[2];

    expect(selectNextFocusableElement(first, container)).toBe(middle);
    expect(selectPreviousFocusableElement(middle, container)).toBe(first);
    expect(selectNextFocusableElement(last, container)).toBe(false);
    expect(selectPreviousFocusableElement(first, container)).toBe(false);
  });
});
