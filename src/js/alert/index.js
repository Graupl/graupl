import Alert from "./Alert.js";

document.addEventListener("DOMContentLoaded", () => {
  const alerts = [];

  document.querySelectorAll(".alert").forEach((alertElement) => {
    const alert = new Alert({
      alertElement,
      controllerElement: alertElement.querySelector(".alert-dismisser") || null,
      initialize: true,
    });

    alerts.push(alert);
  });

  const graupl = window.Graupl || {};

  graupl.alerts = alerts;

  window.Graupl = graupl;
});
