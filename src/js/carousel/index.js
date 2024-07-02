import Carousel from "./Carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  const carousels = [];

  document.querySelectorAll(".carousel").forEach((carouselElement) => {
    const autoplayButton = carouselElement.querySelector(".autoplay");
    const nextButton = carouselElement.querySelector(".next");
    const previousButton = carouselElement.querySelector(".previous");

    const carousel = new Carousel({
      carouselElement,
      autoplayButton,
      nextButton,
      previousButton,
      initialize: true,
    });

    carousels.push(carousel);
  });

  const gruapl = window.Graupl || {};

  gruapl.carousels = carousels;

  window.Graupl = gruapl;
});
