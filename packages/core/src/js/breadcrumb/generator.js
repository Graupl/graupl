/**
 * @file
 * Breadcrumb generator.
 */
import Breadcrumb from "./Breadcrumb.js";
import once from "@drupal/once";

/**
 * Generates Breadcrumb elements.
 *
 * @param {object}           [options = {}]                                    - Options for generating the breadcrumb.
 * @param {object}           [options.options = {}]                            - Options to pass to the Breadcrumb constructor.
 * @param {Document|Element} [options.context = document]                      - The element to base the selector off of.
 * @param {string}           [options.selector = .breadcrumb]                  - The query selector for the breadcrumb elements in the DOM.
 * @param {string}           [options.controllerSelector = .breadcrumb-toggle] - The query selector for the optional breadcrumb expansion button.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".breadcrumb",
  controllerSelector = ".breadcrumb-toggle",
} = {}) => {
  once("graupl-breadcrumb-generator", selector, context).forEach(
    (breadcrumbElement) => {
      const breadcrumbOptions = breadcrumbElement.dataset
        .grauplBreadcrumbOptions
        ? JSON.parse(
            breadcrumbElement.dataset.grauplBreadcrumbOptions.replace(/'/g, '"')
          ) || {}
        : {};
      const controllerElement =
        breadcrumbElement.querySelector(controllerSelector) || null;

      new Breadcrumb({
        breadcrumbElement,
        controllerElement,
        initialize: true,
        ...options,
        ...breadcrumbOptions,
      });
    }
  );
};

export default generate;
