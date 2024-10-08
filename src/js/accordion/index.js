import Accordion from "./Accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  const accordions = [];

  document.querySelectorAll(".accordion").forEach((accordionElement) => {
    const accordion = new Accordion({
      accordionElement,
      optionalKeySupport: true,
      initialize: true,
    });
    accordions.push(accordion);
  });
});
