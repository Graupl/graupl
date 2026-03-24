import Tooltip from "./Tooltip.js";
import once from "@drupal/once";

const generate = (
  options = {},
  context = document,
  tooltipSelector = ".tooltip"
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
        tooltipButtonElement:
          tooltipElement.querySelector(".tooltip-button") || null,
        tooltipBubbleElement:
          tooltipElement.querySelector(".tooltip-bubble") || null,
        initialize: true,
        ...options,
        ...tooltipOptions,
      });
    }
  );
};

export default generate;
