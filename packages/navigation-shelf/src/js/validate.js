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
 * @param  {Object<string>}          values                       - The value(s) to check.
 * @param  {object}                  [options = {}]               - The options for the check.
 * @param  {boolean}                 [options.shouldThrow = true] - Whether to throw on error or return it.
 * @return {Object<boolean, string>}                              - The result of the check.
 */
export function isValidSideType(values, { shouldThrow = true } = {}) {
  const result = {
    status: true,
    errors: [],
  };

  try {
    if (typeof values !== "object") {
      const type = typeof values;

      throw new TypeError(
        `Values given to isValidSideType() must be inside of an object. "${type}" given.`
      );
    }

    const validTypes = ["left", "right"];

    for (const key in values) {
      try {
        if (!validTypes.includes(values[key])) {
          throw new TypeError(
            `${key} must be one of the following values: ${validTypes.join(
              ", "
            )}. "${values[key]}" given.`
          );
        }
      } catch (error) {
        result.status = false;
        result.errors.push(error);
      }
    }

    return {
      status: true,
      error: null,
    };
  } catch (error) {
    result.status = false;
    result.errors.push(error);
  }

  if (shouldThrow && !result.status) {
    throw result.errors[0];
  }

  return result;
}
