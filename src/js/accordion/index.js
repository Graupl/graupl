import Accordion from "./Accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  // @todo: Create one accordion.
  // @todo: For each accordion element create an item
  const accordion = null;
  const accordionItems = [];

  document.querySelectorAll(".accordion").forEach((accordionElement) => {

    const accordionItem = new AccordionItem({
      accordionElement,
      controllerElement: accordionElement.querySelector(".accordion-toggle") || null,
      initialize: true,
    });

    accordionItems.push(accordionItem);
  });

  accordion = new Accordion(accordionItems);

  const gruapl = window.Graupl || {};

  gruapl.accordions = accordions;

  window.Graupl = gruapl;
});
