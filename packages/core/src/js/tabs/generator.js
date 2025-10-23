import Tabs from "./Tabs.js";
import once from "@drupal/once";

/**
 * Generates Tabs elements.
 *
 * @param {object}      [options = {}]               - Options for generating the tabs.
 * @param {object}      [options.options = {}]       - Options to pass to the Tabs constructor.
 * @param {HTMLElement} [options.context = document] - The element to base the selector off of.
 * @param {string}      [options.selector = .tabs]   - The query selector for the tabs elements in the DOM.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".tabs",
} = {}) => {
  once("graupl-tabs-generator", selector, context).forEach((tabsElement) => {
    const tabsOptions = tabsElement.dataset.grauplTabsOptions
      ? JSON.parse(tabsElement.dataset.grauplTabsOptions.replace(/'/g, '"')) ||
        {}
      : {};

    new Tabs({
      tabsElement,
      initialize: true,
      ...options,
      ...tabsOptions,
    });
  });
};

export default generate;
