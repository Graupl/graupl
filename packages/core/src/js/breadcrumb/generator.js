import Breadcrumb from "./Breadcrumb.js";
import once from "@drupal/once";

/**
 * Generates Breadcrumb elements.
 *
 * @param {object}      [options = {}]                   - Options for generating the breadcrumb.
 * @param {object}      [options.options = {}]           - Options to pass to the Breadcrumb constructor.
 * @param {HTMLElement} [options.context = document]     - The element to base the selector off of.
 * @param {string}      [options.selector = .breadcrumb] - The query selector for the breadcrumb elements in the DOM.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".breadcrumb",
} = {}) => {
  once("graupl-breadcrumb-generator", selector, context).forEach(
    (breadcrumbElement) => {
      const breadcrumbOptions = breadcrumbElement.dataset
        .grauplBreadcrumbOptions
        ? JSON.parse(
            breadcrumbElement.dataset.grauplBreadcrumbOptions.replace(/'/g, '"')
          ) || {}
        : {};

      new Breadcrumb({
        breadcrumbElement,
        initialize: true,
        ...options,
        ...breadcrumbOptions,
      });
    }
  );
};

export default generate;
