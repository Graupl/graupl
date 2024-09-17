import Carousel from "./Carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  const carousels = [];

  document.querySelectorAll(".carousel").forEach((carouselElement) => {
    const carouselItems = carouselElement.querySelectorAll(".carousel-item");
    const autoplayButton = carouselElement.querySelector(".autoplay");
    const nextButton = carouselElement.querySelector(".next");
    const previousButton = carouselElement.querySelector(".previous");

    const carousel = new Carousel({
      carouselElement,
      carouselItems,
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
