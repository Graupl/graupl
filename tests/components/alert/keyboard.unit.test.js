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

describe("Alert keyboard interactions", () => {
  it.each([
    { key: "Enter", name: "Enter" },
    { key: " ", name: "Space" },
  ])("$name keydown prevents default and stops propagation", ({ key }) => {
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

  it.each([
    { key: "Enter", name: "Enter" },
    { key: " ", name: "Space" },
  ])("$name keyup collapses the alert", ({ key }) => {
    alert = new Alert({
      alertElement: document.querySelector(".alert"),
      controllerElement: document.querySelector(".alert-dismisser"),
      initialize: true,
    });

    const collapseSpy = vi.spyOn(alert, "collapse");
    alert.dom.controller.dispatchEvent(
      new KeyboardEvent("keyup", { key, bubbles: true, cancelable: true })
    );

    expect(collapseSpy).toHaveBeenCalledOnce();
    expect(alert.isExpanded).toBe(false);
  });

  it("does not prevent or collapse for an unrelated key", () => {
    alert = new Alert({
      alertElement: document.querySelector(".alert"),
      controllerElement: document.querySelector(".alert-dismisser"),
      initialize: true,
    });

    const alertKeydown = vi.fn();
    alert.dom.alert.addEventListener("keydown", alertKeydown);
    const collapseSpy = vi.spyOn(alert, "collapse");
    const event = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    });
    alert.dom.controller.dispatchEvent(event);
    alert.dom.controller.dispatchEvent(
      new KeyboardEvent("keyup", { key: "Escape", bubbles: true })
    );

    expect(event.defaultPrevented).toBe(false);
    expect(alertKeydown).toHaveBeenCalledOnce();
    expect(collapseSpy).not.toHaveBeenCalled();
    expect(alert.isExpanded).toBe(true);
  });
});
