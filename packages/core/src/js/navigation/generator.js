import storage from "../storage.js";
import once from "@drupal/once";

export const generate = (
  options = {},
  context = document,
  navigationSelector = ".navigation"
) => {
  once("graupl-navigation-generator", navigationSelector, context).forEach(
    (navigationElement) => {
      const MenuConstructor =
        navigationElement.dataset.grauplMenuType || DisclosureMenu;

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
      const menu = new window[MenuConstructor]({
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

      storage.initializeStorage("menus");
      storage.pushToStorage("menus", menu.dom.menu.id, menu);
    }
  );
};

export default generate;
