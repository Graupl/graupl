import Tooltip from "./Tooltip.js";
import once from "@drupal/once";

const generate = (
  options = {},
  context = document,
  tooltipSelector = ".tooltip",
  tooltipDescriptionSelector = ".tooltip-description",
  tooltipToggleSelector = ".tooltip-toggle"
) => {
  once("graupl-tooltip-generator", tooltipSelector, context).forEach(
    (tooltipElement) => {
      const tooltipOptions = tooltipElement.dataset.grauplTooltipOptions
        ? JSON.parse(
            tooltipElement.dataset.grauplTooltipOptions.replace(/'/g, '"')
          ) || {}
        : {};

      new Tooltip({
        tooltipElement,
        tooltipToggleElement:
          tooltipElement.querySelector(tooltipToggleSelector) || null,
        tooltipDescriptionElement:
          tooltipElement.querySelector(tooltipDescriptionSelector) || null,
        initialize: true,
        ...options,
        ...tooltipOptions,
      });
    }
  );
};

export default generate;
