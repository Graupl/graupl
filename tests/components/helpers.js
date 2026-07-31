/**
 * @file
 * Helper functions for tests.
 */

/**
 * Sets up a class array in an attributes object.
 *
 * Optionally, you can provide default classes to add as well.
 *
 * @param  {object}        attributes     - The attributes object to alter.
 * @param  {Array[string]} [classes = []] - The classes to add by default.
 * @return {object}                       - The attributes object with a class array.
 */
export function setupClasses(attributes, classes = []) {
  attributes.class = attributes.class || [];

  if (classes.length > 0) {
    attributes.class = [...attributes.class, ...classes];
  }

  attributes.class = attributes.class.filter(
    (value) => value !== "" && value !== null
  );

  return attributes;
}
