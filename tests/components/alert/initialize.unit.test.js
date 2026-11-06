/**
 * Initialization tests for the Alert class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
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

describe("Alert initialization", () => {
  describe("constructor", () => {
    it("should bootstrap with initializing by default", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        initialize: true,
      });

      expect(alert.isBootstrapped).toBe(true);
      expect(alert.isInitialized).toBe(true);
      expect(alert.expandClass).toBe("show");
      expect(alert.collapseClass).toBe("hide");
      expect(alert.transitionClass).toBe("transitioning");
      expect(alert.transitionDuration).toBe(150);
      expect(alert.expandDuration).toBe(150);
      expect(alert.collapseDuration).toBe(150);
      expect(alert.isExpanded).toBe(true);
    });

    it.each(["expandClass", "collapseClass", "transitionClass"])(
      "should use an empty class when %s is null",
      (option) => {
        alert = new Alert({
          alertElement: document.querySelector(".alert"),
          [option]: null,
          initialize: true,
        });

        expect(alert.isInitialized).toBe(true);
        expect(alert[option]).toBe("");
      }
    );
  });

  describe("initialize", () => {
    it("should initialize explicitly with custom selectors", () => {
      document.body.innerHTML = `
        <div class="custom-alert">
          <div class="alert-header">
            <h3 class="alert-title">Alert</h3>
          </div>
          <div class="alert-body">
            <p>This is some text that describes the alert.</p>
          </div>
          <div class="alert-footer">
            <a href="#">Action</a>
          </div>
          <button class="alert-dismisser">x</button>
        </div>
      `;
      alert = new Alert({
        alertElement: document.querySelector(".custom-alert"),
        controllerElement: null,
      });

      alert.initialize();

      expect(alert.isInitialized).toBe(true);
    });
  });
});
