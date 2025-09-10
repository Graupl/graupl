<script setup>
import { ref, onMounted } from "vue";
import clTheme from "./views/Theme.vue";
import clComponents from "./views/Components.vue";
import clLayout from "./views/Layout.vue";
import logoUrl from "../../logo.svg";
import NavigationShelfGenerator from "../../packages/navigation-shelf/src/js/navigation-shelf/generator.js";

onMounted(() => {
  NavigationShelfGenerator();
});

const themeToggle = ref(false);
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const setTheme = window.localStorage.getItem("theme") || preferredTheme;

document.documentElement.classList.add(`${setTheme}-mode`);
</script>

<template>
  <header>
    <button class="navigation-shelf-toggle">Toggle shelf</button>
    <div class="navigation-shelf bg-primary-700 text-primary-100">
      <div class="navigation-shelf-header"></div>
      <div class="navigation-shelf-content w-shelf-open">
        <nav
          class="navigation display-flex flex-col"
          data-graupl-menu-type="DisclosureMenu"
          data-graupl-menu-options="{'optionalKeySupport': true}"
        >
          <ul class="menu flex-col">
            <li class="menu-item flex-wrap flex-row">
              <a class="menu-link flex-grow w-min-content" href="#view-theme"
                >Theme</a
              >
            </li>
            <li class="menu-item submenu-item">
              <button class="menu-link button link submenu-toggle">
                Components
              </button>
              <ul class="submenu min-w-full position-relative">
                <li class="menu-item">
                  <a class="menu-link" href="#section-links">Links</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-quotation">Quotation</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-buttons">Buttons</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-lists">Lists</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-details-disclosure"
                    >Details</a
                  >
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-tables">Tables</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-form-elements">Forms</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-navigation">Navigation</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-cards">Cards</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-alerts">Alerts</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-accordions">Accordions</a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="#section-carousel">Carousel</a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a class="menu-link" href="#view-layout">Layout</a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="navigation-shelf-footer w-shelf-current display-flex flex-wrap"
      >
        <button
          class="button navigation-shelf-lock-toggle w-full"
          aria-label="Toggle shelf lock"
        ></button>
        <button
          class="button navigation-shelf-hover-toggle w-full"
          aria-label="Toggle shelf hover"
        ></button>
        <button
          class="button navigation-shelf-side-toggle w-full"
          aria-label="Toggle side"
        ></button>
      </div>
    </div>
  </header>
  <main id="cl-app" class="container shelf-aware">
    <div class="flex-columns">
      <div class="col-8">
        <h1
          class="gradient from-tertiary-600 to-primary-600 w-max-content bg-clip-text text-transparent"
        >
          Hello Graupl!
        </h1>
        <p>
          Graupl is a modular CSS framework with the goal of making it easy to
          theme a site.
        </p>
        <p>
          This source code can be found in
          <a href="https://github.com/Graupl/graupl">GitHub</a>.
        </p>
        <button ref="themeToggle" class="button mt-5 w-half">
          Toggle dark mode
        </button>
      </div>
      <div class="col-4 align-items-center">
        <img :src="logoUrl" alt="Graupl logo" class="logo pt-5" />
      </div>
    </div>
    <div class="container rg-7">
      <cl-theme />
      <cl-components />
      <cl-layout />
    </div>
  </main>
</template>

<style lang="scss">
@use "../../scss/graupl";
@use "../../packages/icons/scss/icon";
@use "../../packages/navigation-shelf/scss/navigation-shelf";

// :root {
//   --graupl-navigation-shelf-closed-display: none;
//   --graupl-navigation-shelf-closed-opacity: 0;
//   --graupl-navigation-shelf-starting-opacity: 0;
//   --graupl-navigation-shelf-transitioning-opacity: 0;
//   --graupl-navigation-shelf-min-width: 36ch;
// }

// .left-side {
//   --graupl-navigation-shelf-closed-transform: translateX(-100%);
//   --graupl-navigation-shelf-transitioning-transform: translateX(-100%);
// }

// .right-side {
//   --graupl-navigation-shelf-closed-transform: translateX(100%);
//   --graupl-navigation-shelf-transitioning-transform: translateX(100%);
// }
</style>
