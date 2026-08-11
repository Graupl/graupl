/**
 * @file
 * Accordion generator.
 */
import Accordion from "./Accordion.js";
import once from "@drupal/once";

/**
 * Generates Accordion elements.
 *
 * @param {object}      [options = {}]                  - Options for generating the accordion.
 * @param {object}      [options.options = {}]          - Options to pass to the Accordion constructor.
 * @param {HTMLElement} [options.context = document]    - The element to base the selector off of.
 * @param {string}      [options.selector = .accordion] - The query selector for the accordion elements in the DOM.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".accordion",
} = {}) => {
  once("graupl-accordion-generator", selector, context).forEach(
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
