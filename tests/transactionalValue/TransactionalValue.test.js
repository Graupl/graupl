/**
 * Tests for the TransactionalValue class.
 */

import { describe, it, expect } from "vitest";
import { TransactionalValue } from "../../packages/core/src/js/TransactionalValue.js";

describe("TransactionalValue", () => {
  it("should initialize current and committed values from the initial value", () => {
    const value = new TransactionalValue("alpha");

    expect(value.value).toBe("alpha");
    expect(value.committed).toBe("alpha");
    expect(value.isDirty).toBe(false);
  });

  it("should mark itself dirty when the current value differs", () => {
    const value = new TransactionalValue("alpha");
    value.value = "beta";

    expect(value.isDirty).toBe(true);
  });

  it("should commit the current value as the new baseline", () => {
    const value = new TransactionalValue("alpha");
    value.value = "beta";

    const result = value.commit();

    expect(result).toBe(value);
    expect(value.committed).toBe("beta");
    expect(value.isDirty).toBe(false);
  });

  it("should reset the current value to the committed baseline", () => {
    const value = new TransactionalValue("alpha");
    value.value = "beta";

    const result = value.reset();

    expect(result).toBe(value);
    expect(value.value).toBe("alpha");
    expect(value.isDirty).toBe(false);
  });

  it("should update the current value via a function", () => {
    const value = new TransactionalValue(1);

    const result = value.update((current) => current + 1);

    expect(result).toBe(value);
    expect(value.value).toBe(2);
    expect(value.isDirty).toBe(true);
  });

  it("should use a custom equals comparator when provided", () => {
    const equals = (left, right) => left.id === right.id;
    const value = new TransactionalValue({ id: 1, name: "alpha" }, { equals });

    value.value = { id: 1, name: "beta" };
    expect(value.isDirty).toBe(false);

    value.value = { id: 2, name: "alpha" };
    expect(value.isDirty).toBe(true);
  });
});
