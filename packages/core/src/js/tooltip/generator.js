/**
 * @file
 * Tooltip generator.
 */
import Tooltip from "./Tooltip.js";
import once from "@drupal/once";

/**
 * Generates Tooltip elements.
 *
 * @param {object}      [options = {}]                                       - Options for generating the tooltip.
 * @param {object}      [options.options = {}]                               - Options to pass to the Tooltip constructor.
 * @param {HTMLElement} [options.context = document]                         - The element to base the selector off of.
 * @param {string}      [options.selector = .tooltip]                        - The query selector for the tooltip elements in the DOM.
 * @param {string}      [options.descriptionSelector = .tooltip-description] - The query selector for the tooltip description elements in the DOM.
 * @param {string}      [options.controllerSelector = .tooltip-toggle]       - The query selector for the tooltip controller elements in the DOM.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".tooltip",
  descriptionSelector = ".tooltip-description",
  controllerSelector = ".tooltip-toggle",
} = {}) => {
  once("graupl-tooltip-generator", selector, context).forEach(
    (tooltipElement) => {
      const tooltipOptions = tooltipElement.dataset.grauplTooltipOptions
        ? JSON.parse(
            tooltipElement.dataset.grauplTooltipOptions.replace(/'/g, '"')
          ) || {}
        : {};

      new Tooltip({
        tooltipElement,
        tooltipToggleElement:
          tooltipElement.querySelector(controllerSelector) || null,
        tooltipDescriptionElement:
          tooltipElement.querySelector(descriptionSelector) || null,
        initialize: true,
        ...options,
        ...tooltipOptions,
      });
    }
  );
};

export default generate;
