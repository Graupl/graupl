/**
 * Click tests for the Alert class.
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Alert from "@graupl/core/src/alert/Alert.js";
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

describe("Alert clicks", () => {
  describe("_handleClick", () => {
    it("should add a click listener to the controller and collapse when clicked", async () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: document.querySelector(".alert-dismisser"),
        initialize: true,
      });

      const collapseSpy = vi.spyOn(alert, "collapse");
      alert.dom.controller.click();

      await vi.waitFor(() => {
        expect(alert.dom.alert.classList.contains("hide")).toBe(true);
      });

      expect(collapseSpy).toHaveBeenCalledOnce();
      expect(alert.isExpanded).toBe(false);
    });

    it("should not collapse when no controller exists", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        controllerElement: null,
        initialize: true,
      });

      const collapseSpy = vi.spyOn(alert, "collapse");
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      });

      alert.dom.alert.dispatchEvent(clickEvent);

      expect(collapseSpy).not.toHaveBeenCalled();
    });

    it.each([".alert-dismisser"])(
      "should delegate click events on %s to collapse",
      (selector) => {
        alert = new Alert({
          alertElement: document.querySelector(".alert"),
          controllerElement: document.querySelector(".alert-dismisser"),
          initialize: true,
        });

        const collapseSpy = vi.spyOn(alert, "collapse");
        document.querySelector(selector).click();

        expect(collapseSpy).toHaveBeenCalledOnce();
      }
    );
  });
});
