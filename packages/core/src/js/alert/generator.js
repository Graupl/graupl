import Alert from "./Alert.js";
import once from "@drupal/once";

export const generate = (
  options = {},
  context = document,
  alertSelector = ".alert"
) => {
  once("graupl-alert-generator", alertSelector, context).forEach(
    (alertElement) => {
      const alertOptions = alertElement.dataset.grauplAlertOptions
        ? JSON.parse(
            alertElement.dataset.grauplAlertOptions.replace(/'/g, '"')
          ) || {}
        : {};

      new Alert({
        alertElement,
        controllerElement:
          alertElement.querySelector(".alert-dismisser") || null,
        initialize: true,
        ...options,
        ...alertOptions,
      });
    }
  );
};

export default generate;
