import Accordion from "./Accordion.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Accordion loaded");

  const accordions = [];

  document.querySelectorAll(".accordion").forEach((accordionElement) => {
    const accordion = new Accordion({ accordionElement });
    accordions.push(accordion);
  });

  const gruapl = window.Graupl || {};

  gruapl.accordions = accordions;

  window.Graupl = gruapl;
});
