/**
 * Protected method tests for the Alert class.
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

describe("Alert protected methods", () => {
  describe("_setIds", () => {
    it("should generate IDs for the alert and its controller", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: document.querySelector(".alert-dismisser"),
        key: "notice",
      });

      alert._setIds();

      expect(alert.dom.alert.id).toBe("alert-notice");
      expect(alert.dom.controller.id).toBe("alert-controller-notice");
    });

    it("should preserve existing IDs when no controller is provided", () => {
      document.querySelector(".alert").id = "existing-alert";

      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        key: "notice",
      });

      alert._setIds();

      expect(alert.dom.alert.id).toBe("existing-alert");
    });
  });

  describe("_setCustomProps", () => {
    it("should set the alert duration properties using its prefix", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        prefix: "custom-",
        transitionDuration: 120,
        expandDuration: 80,
        collapseDuration: 200,
      });

      alert._setCustomProps();

      expect(
        alert.dom.alert.style.getPropertyValue(
          "--custom-alert-transition-duration"
        )
      ).toBe("120ms");
      expect(
        alert.dom.alert.style.getPropertyValue(
          "--custom-alert-show-transition-duration"
        )
      ).toBe("80ms");
      expect(
        alert.dom.alert.style.getPropertyValue(
          "--custom-alert-hide-transition-duration"
        )
      ).toBe("200ms");
    });
  });

  describe("_registerEvents", () => {
    it("should update inert when the alert collapses and expands", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
      });

      alert.collapse();

      expect(alert.dom.alert.hasAttribute("inert")).toBe(true);

      alert.expand();

      expect(alert.dom.alert.hasAttribute("inert")).toBe(false);
    });
  });
});
