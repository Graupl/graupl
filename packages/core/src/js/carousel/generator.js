import Carousel from "./Carousel.js";
import once from "@drupal/once";

const generate = (
  options = {},
  context = document,
  carouselSelector = ".carousel"
) => {
  once("graupl-carousel-generator", carouselSelector, context).forEach(
    (carouselElement) => {
      const carouselOptions = carouselElement.dataset.grauplCarouselOptions
        ? JSON.parse(
            carouselElement.dataset.grauplCarouselOptions.replace(/'/g, '"')
          ) || {}
        : {};

      new Carousel({
        carouselElement,
        initialize: true,
        ...options,
        ...carouselOptions,
      });
    }
  );
};

export default generate;
