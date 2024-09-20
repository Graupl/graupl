import Carousel from "./Carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  const carousels = [];

  document.querySelectorAll(".carousel").forEach((carouselElement) => {
    const carousel = new Carousel({
      carouselElement,
      initialize: true,
    });

    carousels.push(carousel);
  });

  const graupl = window.Graupl || {};

  graupl.carousels = carousels;

  window.Graupl = graupl;
});
