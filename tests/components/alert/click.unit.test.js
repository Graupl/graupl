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
    it("should close the clicked alert", () => {
      alert = new Alert({
        alertElement: document.querySelector(".alert"),
        initialize: true,
      });
      const toggle = document.querySelector(".alert-dismisser");

      const clicker = vi.spyOn(alert, "collapseClass");
      toggle.click();

      expect(clicker).toHaveBeenCalledOnce();
      expect(alert.currentEvent).toBe("mouse");
    });

    it.each([[".alert-dismisser", "_handleClick"]])(
      "should delegate clicks on %s to %s",
      (selector, method) => {
        alert = new Alert({
          alertElement: document.querySelector(".alert"),
          initialize: true,
        });
        const action = vi.spyOn(alert, method);

        document.querySelector(selector).click();

        expect(action).toHaveBeenCalledExactlyOnceWith();
        expect(alert.currentEvent).toBe("mouse");
      }
    );
  });
});
