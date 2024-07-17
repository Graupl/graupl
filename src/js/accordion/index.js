import Accordion from "./Accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  const accordions = [];

  document.querySelectorAll(".accordion").forEach((accordionElement) => {
    const accordion = new Accordion({
      accordionElement,
      controllerElement: accordionElement.querySelector(".accordion-toggle") || null,
      initialize: true,
    });

    accordions.push(accordion);
  });

  const gruapl = window.Graupl || {};

  gruapl.accordions = accordions;

  window.Graupl = gruapl;
});
