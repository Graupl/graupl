import NavigationShelf from "./NavigationShelf.js";

document.addEventListener("DOMContentLoaded", () => {
  const shelfElement = document.querySelector(".navigation-shelf");
  const controllerElement = document.querySelector(".navigation-shelf-toggle");
  const lockControllerElement =
    document.querySelector(".navigation-shelf-lock-toggle") || null;
  const hoverControllerElement =
    document.querySelector(".navigation-shelf-hover-toggle") || null;
  const sideControllerElement =
    document.querySelector(".navigation-shelf-side-toggle") || null;

  new NavigationShelf({
    shelfElement,
    controllerElement,
    lockControllerElement,
    hoverControllerElement,
    sideControllerElement,
    initialize: true,
  });
});
