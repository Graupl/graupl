/**
 * @file
 * Carousel generator.
 */
import Carousel from "./Carousel.js";
import once from "@drupal/once";

/**
 * Generates Carousel elements.
 *
 * @param {object}      [options = {}]                 - Options for generating the carousel.
 * @param {object}      [options.options = {}]         - Options to pass to the Carousel constructor.
 * @param {HTMLElement} [options.context = document]   - The element to base the selector off of.
 * @param {string}      [options.selector = .carousel] - The query selector for the carousel elements in the DOM.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".carousel",
} = {}) => {
  once("graupl-carousel-generator", selector, context).forEach(
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
