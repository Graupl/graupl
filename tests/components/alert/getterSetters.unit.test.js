/**
 * Getter/setter tests for the Alert class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import CollapsibleComponent from "@accessible-ecosystem/core/CollapsibleComponent.js";
import Alert from "../../../packages/core/src/js/alert/Alert.js";
import { alertBlock } from "./fixtures.js";

let alert;

beforeEach(() => {
  document.body.innerHTML = alertBlock;
});

afterEach(() => {
  alert?.dispose();
  alert = null;
  document.body.innerHTML = "";
  delete window.GrauplStorage;
  vi.restoreAllMocks();
});

describe("Alert getter/setters", () => {
  describe.each([
    ["expandClass", null],
    ["collapseClass", null],
    ["transitionClass", null],
    ["transitionDuration", "--graupl-alert-transition-duration"],
    ["expandDuration", "--graupl-alert-show-transition-duration"],
    ["collapseDuration", "--graupl-alert-hide-transition-duration"],
  ])("%s", (property, customProperty) => {
    it("should inherit the Core accessor", () => {
      const descriptor = Object.getOwnPropertyDescriptor(
        CollapsibleComponent.prototype,
        property
      );

      expect(descriptor.get).toBeTypeOf("function");
      expect(Object.getPrototypeOf(Alert.prototype)).toBe(
        CollapsibleComponent.prototype
      );
      expect(Object.hasOwn(Alert.prototype, property)).toBe(false);
    });

    if (customProperty) {
      it("should update its CSS custom property", () => {
        alert = new Alert({
          alertElement: document.querySelector(".alert"),
          initialize: true,
        });

        alert[property] = 75;

        expect(alert.dom.alert.style.getPropertyValue(customProperty)).toBe(
          "75ms"
        );
      });
    }
  });
});
