import Alert from "./Alert.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".alert").forEach((alertElement) => {
    new Alert({
      alertElement,
      controllerElement: alertElement.querySelector(".alert-dismisser") || null,
      initialize: true,
    });
  });
});
