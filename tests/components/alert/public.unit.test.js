/**
 * Public method tests for the Alert class.
 */

import { describe, it, expect } from "vitest";
import CollapsibleComponent from "@accessible-ecosystem/core/CollapsibleComponent.js";
import Alert from "../../../packages/core/src/js/alert/Alert.js";

describe("Alert public methods", () => {
  describe.each(["expand", "collapse", "lock", "unlock"])("%s", (method) => {
    it("should inherit the Core implementation", () => {
      expect(CollapsibleComponent.prototype[method]).toBeTypeOf("function");
      expect(Alert.prototype[method]).toBe(
        CollapsibleComponent.prototype[method]
      );
    });
  });
});
