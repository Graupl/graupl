import Carousel from "./Carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((carouselElement) => {
    new Carousel({
      carouselElement,
      initialize: true,
    });
  });
});
