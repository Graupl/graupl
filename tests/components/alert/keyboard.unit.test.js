/**
 * Keyboard tests for the Alert class.
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

describe("Alert keyboard events", () => {
  describe("_handleKeydown", () => {
    it.each([
      { key: "Enter", name: "Enter" },
      { key: " ", name: "Space" },
    ])("should prevent default and stop propagation for $name", ({ key }) => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: document.querySelector(".alert-dismisser"),
        initialize: true,
      });

      const alertKeydown = vi.fn();
      alert.dom.alert.addEventListener("keydown", alertKeydown);

      const event = new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true,
      });

      alert.dom.controller.dispatchEvent(event);

      expect(event.defaultPrevented).toBe(true);
      expect(alertKeydown).not.toHaveBeenCalled();
    });

    it("should leave unrelated keys to the browser", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: document.querySelector(".alert-dismisser"),
        initialize: true,
      });

      const alertKeydown = vi.fn();
      alert.dom.alert.addEventListener("keydown", alertKeydown);
      const event = new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      });

      alert.dom.controller.dispatchEvent(event);

      expect(event.defaultPrevented).toBe(false);
      expect(alertKeydown).toHaveBeenCalledOnce();
    });

    it.each([
      { key: "Enter", name: "Enter" },
      { key: " ", name: "Space" },
    ])(
      "should leave $name to the browser when no controller exists",
      ({ key }) => {
        alert = new Alert({
          alertElement: document.querySelector(".alert"),
          controllerElement: null,
          initialize: true,
        });

        const event = new KeyboardEvent("keydown", {
          key,
          bubbles: true,
          cancelable: true,
        });

        alert.dom.alert.dispatchEvent(event);

        expect(event.defaultPrevented).toBe(false);
        expect(alert.isExpanded).toBe(true);
      }
    );
  });

  describe("_handleKeyup", () => {
    it.each([
      { key: "Enter", name: "Enter" },
      { key: " ", name: "Space" },
    ])("should collapse the alert with $name", ({ key }) => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: document.querySelector(".alert-dismisser"),
        initialize: true,
      });

      alert.dom.controller.dispatchEvent(
        new KeyboardEvent("keyup", { key, bubbles: true, cancelable: true })
      );

      expect(alert.isExpanded).toBe(false);
    });

    it("should leave the alert expanded on an unrelated key", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: document.querySelector(".alert-dismisser"),
        initialize: true,
      });
      const event = new KeyboardEvent("keyup", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      });

      alert.dom.controller.dispatchEvent(event);

      expect(alert.isExpanded).toBe(true);
    });

    it.each([
      { key: "Enter", name: "Enter" },
      { key: " ", name: "Space" },
    ])(
      "should leave the alert expanded on $name when no controller exists",
      ({ key }) => {
        alert = new Alert({
          alertElement: document.querySelector(".alert"),
          controllerElement: null,
          initialize: true,
        });

        const collapseSpy = vi.spyOn(alert, "collapse");

        alert.dom.alert.dispatchEvent(
          new KeyboardEvent("keyup", { key, bubbles: true, cancelable: true })
        );

        expect(collapseSpy).not.toHaveBeenCalled();
        expect(alert.isExpanded).toBe(true);
      }
    );
  });
});
