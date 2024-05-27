document.addEventListener("DOMContentLoaded", function () {
  const navs = document.querySelectorAll(".navigation");
  const menus = [];

  navs.forEach((nav) => {
    const MenuConstructor = nav.dataset.grauplMenuType || DisclosureMenu;

    if (window[MenuConstructor] === undefined) {
      console.warn(
        `Graupl navigation requires accessible-menu's ${MenuConstructor}. Please make sure to include it on this page.`
      );

      return;
    }

    const menuOptions =
      JSON.parse(nav.dataset.grauplMenuOptions.replace(/'/g, '"')) || {};
    const menuElement = nav.querySelector(".menu");
    const controllerElement = nav.querySelector(".navigation-toggle");
    const containerElement = nav;
    const menu = new window[MenuConstructor]({
      menuElement,
      menuItemSelector: ".menu-item",
      menuLinkSelector: ".menu-link",
      submenuItemSelector: ".submenu-item",
      submenuToggleSelector: ".submenu-toggle",
      controllerElement,
      containerElement,
      ...menuOptions,
    });

    menus.push(menu);
  });
});
