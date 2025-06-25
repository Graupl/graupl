import Accordion from "./Accordion.js";
import once from "@drupal/once";

export const generate = (
  options = {},
  context = document,
  accordionSelector = ".accordion"
) => {
  once("graupl-accordion-generator", accordionSelector, context).forEach(
    (accordionElement) => {
      const accordionOptions = accordionElement.dataset.grauplAccordionOptions
        ? JSON.parse(
            accordionElement.dataset.grauplAccordionOptions.replace(/'/g, '"')
          ) || {}
        : {};

      new Accordion({
        accordionElement,
        initialize: true,
        ...options,
        ...accordionOptions,
      });
    }
  );
};

export default generate;
