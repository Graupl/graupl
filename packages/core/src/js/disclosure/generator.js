import Disclosure from "./Disclosure.js";
import once from "@drupal/once";

const generate = (
  options = {},
  context = document,
  disclosureSelector = ".disclosure",
  controllerSelector = ".disclosure-controller"
) => {
  once("graupl-disclosure-generator", disclosureSelector, context).forEach(
    (disclosureElement) => {
      const disclosureOptions = disclosureElement.dataset
        .grauplDisclosureOptions
        ? JSON.parse(
            disclosureElement.dataset.grauplDisclosureOptions.replace(/'/g, '"')
          ) || {}
        : {};

      const targettedControllerSelector = `${controllerSelector}[data-graupl-disclosure-target="#${disclosureElement.id}"]`;
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
