/**
 * Check to see if the provided values are valid side types.
 *
 * Available types are: `"left"` and `"right"`.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return `{ status: true }` if the check is successful.
 *
 * @param  {Object<string>}          values - The value(s) to check.
 * @return {Object<boolean, string>}        - The result of the check.
 */
export function isValidSideType(values) {
  try {
    if (typeof values !== "object") {
      const type = typeof values;

      throw new TypeError(
        `Values given to isValidSideType() must be inside of an object. "${type}" given.`
      );
    }

    const validTypes = ["left", "right"];

    for (const key in values) {
      if (!validTypes.includes(values[key])) {
        throw new TypeError(
          `${key} must be one of the following values: ${validTypes.join(
            ", "
          )}. "${values[key]}" given.`
        );
      }
    }

    return {
      status: true,
      error: null,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
}
