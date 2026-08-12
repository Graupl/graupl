/**
 * @file
 * Alert generator.
 */
import Alert from "./Alert.js";
import once from "@drupal/once";

/**
 * Generates Alert elements.
 *
 * @param {object}      [options = {}]               - Options for generating the alert.
 * @param {object}      [options.options = {}]       - Options to pass to the Alert constructor.
 * @param {HTMLElement} [options.context = document] - The element to base the selector off of.
 * @param {string}      [options.selector = .alert]  - The query selector for the alert elements in the DOM.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".alert",
} = {}) => {
  once("graupl-alert-generator", selector, context).forEach((alertElement) => {
    const alertOptions = alertElement.dataset.grauplAlertOptions
      ? JSON.parse(
          alertElement.dataset.grauplAlertOptions.replace(/'/g, '"')
        ) || {}
      : {};

    new Alert({
      alertElement,
      controllerElement: alertElement.querySelector(".alert-dismisser") || null,
      initialize: true,
      ...options,
      ...alertOptions,
    });
  });
};

export default generate;
