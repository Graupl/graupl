/**
 * Public method tests for the Alert class.
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

describe("Alert public methods", () => {
  describe("expand", () => {
    it("should expand the alert", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        expanded: false,
        initialize: true,
      });

      alert.expand({ transition: false });

      expect(alert.isExpanded).toBe(true);
      expect(alert.dom.alert.classList.contains("show")).toBe(true);
      expect(alert.dom.alert.classList.contains("hide")).toBe(false);
    });
  });

  describe("collapse", () => {
    it("should collapse the alert", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        initialize: true,
      });

      alert.collapse({ transition: false });

      expect(alert.isExpanded).toBe(false);
      expect(alert.dom.alert.classList.contains("hide")).toBe(true);
      expect(alert.dom.alert.classList.contains("show")).toBe(false);
    });
  });

  describe("lock", () => {
    it("should lock the alert and disable its controller", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: document.querySelector(".alert-dismisser"),
        initialize: true,
      });

      alert.lock();

      expect(alert.isLocked).toBe(true);
      expect(alert.dom.alert.classList.contains("locked")).toBe(true);
      expect(alert.dom.alert.classList.contains("unlocked")).toBe(false);
      expect(alert.dom.controller.hasAttribute("disabled")).toBe(true);
    });
  });

  describe("unlock", () => {
    it("should unlock the alert and enable its controller", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: document.querySelector(".alert-dismisser"),
        initialize: true,
      });

      alert.lock();

      alert.unlock();

      expect(alert.isLocked).toBe(false);
      expect(alert.dom.alert.classList.contains("unlocked")).toBe(true);
      expect(alert.dom.alert.classList.contains("locked")).toBe(false);
      expect(alert.dom.controller.hasAttribute("disabled")).toBe(false);
    });
  });
});
