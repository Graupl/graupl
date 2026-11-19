import { ref } from "vue";
import defaultCopy from "../example-copy/default.js";

const themeModules = import.meta.glob("../example-copy/*/exampleCopy.js", {
  eager: true,
  import: "default",
});
const themeCopy = new Map(
  Object.entries(themeModules).map(([path, copy]) => [
    path.split("/").at(-2),
    copy,
  ])
);
const activeTheme = ref("default");
const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * Read a dot-separated path from a copy catalog.
 *
 * @param {object} catalog  The copy catalog.
 * @param {string[]} keys  The keys in the path, starting from the root.
 * @return {*} The value at the path, or undefined if the path is missing.
 */
function readCopy(catalog, keys) {
  let value = catalog;

  for (const key of keys) {
    if (value == null || !Object.hasOwn(value, key)) return undefined;

    value = value[key];
  }

  return value;
}

/**
 * Get the active theme's copy for a key, with the default copy as a fallback.
 *
 * @param {string} path  The dot-separated path to a value, such as `button.label`.
 * @return {*} The example copy for this path.
 */
function get(path) {
  const keys = path.split(".");

  return (
    readCopy(themeCopy.get(activeTheme.value), keys) ??
    readCopy(defaultCopy, keys)
  );
}

export default {
  get,

  /**
   * Escape plain sample text for use in HTML text and quoted attributes.
   *
   * @param {string} path  The dot-separated path to a string.
   * @return {string} The escaped text.
   */
  html(path) {
    const copy = get(path);

    if (typeof copy !== "string") {
      throw new TypeError(`Expected example copy at "${path}" to be a string.`);
    }

    return copy.replace(/[&<>"']/g, (character) => htmlEntities[character]);
  },

  /**
   * Select which theme supplies example copy. Themes without a catalog use the default copy.
   *
   * @param {string} theme  The theme ID, which matches the catalog's directory name.
   */
  setTheme(theme) {
    activeTheme.value = theme;
  },
};
