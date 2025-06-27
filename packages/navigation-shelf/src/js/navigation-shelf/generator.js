import NavigationShelf from "./NavigationShelf.js";
import once from "@drupal/once";

const generate = (options = {}, context = document, navigationShelfSelector = ".navigation-shelf") => {
  once("graupl-navigation-shelf-generator", navigationShelfSelector, context).forEach((shelfElement) => {
    const navigationShelfOptions = shelfElement.dataset.grauplNavigationShelfOptions ? JSON.parse(shelfElement.dataset.grauplNavigationShelfOptions.replace(/'/g, '"')) || {} : {};

    new NavigationShelf({
      shelfElement,
      controllerElement: context.querySelector(".navigation-shelf-toggle") || null,
      lockControllerElement: context.querySelector(".navigation-shelf-lock-toggle") || null,
      hoverControllerElement: context.querySelector(".navigation-shelf-hover-toggle") || null,
      sideControllerElement: context.querySelector(".navigation-shelf-side-toggle") || null,
      initialize: true,
      ...options,
      ...navigationShelfOptions
    });
  });
};

export default generate;
