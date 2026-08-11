/**
 * @file
 * Navigation generator.
 *
 * This file currently assumes you have loaded Accessible Menu's libraries manually.
 */
import once from "@drupal/once";

/**
 * Generates Navigation elements.
 *
 * @param {object}      [options = {}]                   - Options for generating the navigation.
 * @param {object}      [options.options = {}]           - Options to pass to the Navigation constructor.
 * @param {HTMLElement} [options.context = document]     - The element to base the selector off of.
 * @param {string}      [options.selector = .navigation] - The query selector for the navigation elements in the DOM.
 */
const generate = ({
  options = {},
  context = document,
  selector = ".navigation",
} = {}) => {
  once("graupl-navigation-generator", selector, context).forEach(
    (navigationElement) => {
      const MenuConstructor =
        navigationElement.dataset.grauplMenuType || "DisclosureMenu";

      if (window[MenuConstructor] === undefined) {
        console.warn(
          `Graupl navigation requires accessible-menu's ${MenuConstructor}. Please make sure to include it on this page.`
        );

        return;
      }

      const menuOptions = navigationElement.dataset.grauplMenuOptions
        ? JSON.parse(
            navigationElement.dataset.grauplMenuOptions.replace(/'/g, '"')
          ) || {}
        : {};
      const menuElement = navigationElement.querySelector(".menu");
      const controllerElement =
        navigationElement.querySelector(".navigation-toggle") || null;
      const containerElement = controllerElement ? navigationElement : null;
      new window[MenuConstructor]({
        menuElement,
        menuItemSelector: ".menu-item",
        menuLinkSelector: ".menu-link",
        submenuItemSelector: ".submenu-item",
        submenuToggleSelector: ".submenu-toggle",
        controllerElement,
        containerElement,
        ...options,
        ...menuOptions,
      });
    }
  );
};

export default generate;
