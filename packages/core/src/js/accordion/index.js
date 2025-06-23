import Accordion from "./Accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion").forEach((accordionElement) => {
    new Accordion({
      accordionElement,
      initialize: true,
    });
  });
});
