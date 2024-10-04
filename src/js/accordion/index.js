import Accordion from "./Accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  const accordions = [];

  document.querySelectorAll(".accordion").forEach((accordionElement) => {
    const accordion = new Accordion({
      accordionElement,
      initialize: true,
      optionalKeySupport: true,
    });
    accordions.push(accordion);
  });

  const graupl = window.Graupl || {};

  graupl.accordions = accordions;

  window.Graupl = graupl;
});
