/**
 * Intercept links within the element passed to prevent click events.
 *
 * @param {HTMLElement} element - The element to intercept links within.
 */
export const interceptLinks = (element) => {
  element.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
    }
  });
};
