/**
 * @file
 * Disclosure generator.
 */
import Disclosure from "./Disclosure.js";
import once from "@drupal/once";

/**
 * Generates Disclosure elements.
 *
 * @param {object}      [options = {}]                   - Options for generating the disclosure.
 * @param {object}      [options.options = {}]           - Options to pass to the Disclosure constructor.
 * @param {HTMLElement} [options.context = document]     - The element to base the selector off of.
 * @param {string}      [options.selector = .disclosure] - The query selector for the disclosure elements in the DOM.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".disclosure",
} = {}) => {
  once("graupl-disclosure-generator", selector, context).forEach(
    (disclosureElement) => {
      const disclosureOptions = disclosureElement.dataset
        .grauplDisclosureOptions
        ? JSON.parse(
            disclosureElement.dataset.grauplDisclosureOptions.replace(/'/g, '"')
          ) || {}
        : {};

      const targettedControllerSelector = `[data-graupl-disclosure-target="${disclosureElement.id}"]`;
      const [controllerElement] = once(
        "graupl-disclosure-generator",
        targettedControllerSelector,
        context
      );

      if (!controllerElement) {
        console.warn(
          `No controller found for disclosure with ID "${disclosureElement.id}". Please ensure there is an element with the selector "${targettedControllerSelector}".`
        );

        once.remove("graupl-disclosure-generator", disclosureElement);

        return;
      }

      new Disclosure({
        disclosureElement,
        controllerElement,
        initialize: true,
        ...options,
        ...disclosureOptions,
      });
    }
  );
};

export default generate;
