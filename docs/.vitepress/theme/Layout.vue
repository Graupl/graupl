<script setup>
import { onMounted, ref, useTemplateRef } from "vue";
import { useData } from "vitepress";
import DisclosureMenu from "accessible-menu/disclosure-menu";
import Treeview from "accessible-menu/treeview";
import NavigationShelf from "../../../packages/navigation-shelf/src/js/navigation-shelf/NavigationShelf.js";
const { page, site } = useData();
const { nav, sidebar, socialLinks } = site.value.themeConfig || {};
const mainNav = useTemplateRef("mainNav");
const socialNav = useTemplateRef("socialNav");
const sidebarNav = useTemplateRef("sidebarNav");
const navigationShelf = useTemplateRef("navigationShelf");
const shelfLockToggle = useTemplateRef("shelfLockToggle");
const shelfHoverToggle = useTemplateRef("shelfHoverToggle");
const shelfSideToggle = useTemplateRef("shelfSideToggle");
const shelfToggle = useTemplateRef("shelfToggle");
const menus = ref([]);

onMounted(() => {
  menus.value.push(
    new DisclosureMenu({
      menuElement: mainNav.value.querySelector(".menu"),
      optionalKeySupport: true,
    })
  );
  menus.value.push(
    new DisclosureMenu({
      menuElement: socialNav.value.querySelector(".menu"),
      optionalKeySupport: true,
    })
  );
  menus.value.push(
    new Treeview({
      menuElement: sidebarNav.value.querySelector(".menu"),
      submenuToggleSelector: "button",
    })
  );

  new NavigationShelf({
    shelfElement: navigationShelf.value,
    controllerElement: shelfToggle.value,
    lockControllerElement: shelfLockToggle.value,
    hoverControllerElement: shelfHoverToggle.value,
    sideControllerElement: shelfSideToggle.value,
    locked: true,
    initialize: true,
  });
});
</script>

<template>
  <div class="position-relative min-h-full-screen pb-8">
    <div class="container topbar shelf-aware">
      <div class="display-flex justify-content-end g-4">
        <div
          class="navigation-shelf dark-mode bg-secondary-100 text-secondary-900"
          ref="navigationShelf"
        >
          <div class="navigation-shelf-header"></div>
          <div class="navigation-shelf-content w-shelf-open">
            <nav class="navigation" id="sidebar" ref="sidebarNav">
              <ul class="menu">
                <li v-for="item in sidebar" :key="item.text" class="menu-item">
                  <button class="menu-link submenu-toggle">
                    {{ item.text }}
                  </button>
                  <ul class="submenu">
                    <li
                      v-for="subItem in item.items"
                      :key="subItem.text"
                      class="menu-item"
                    >
                      <a :href="subItem.link" class="menu-link">
                        {{ subItem.text }}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div
            class="navigation-shelf-footer w-shelf-open display-flex flex-wrap"
          >
            <button
              class="button navigation-shelf-lock-toggle w-min-content mr-auto"
              aria-label="Toggle shelf lock"
              ref="shelfLockToggle"
            ></button>
            <button
              class="button navigation-shelf-hover-toggle w-min-content"
              aria-label="Toggle shelf hover"
              ref="shelfHoverToggle"
            ></button>
            <button
              class="button navigation-shelf-side-toggle w-min-content"
              aria-label="Toggle side"
              ref="shelfSideToggle"
            ></button>
          </div>
        </div>
        <a href="/" class="w-full height-auto display-flex align-items-center"
          ><img src="/logo.svg" alt="Graupl Logo" class="w-9 h-auto"
        /></a>
        <nav class="navigation" id="main" ref="mainNav">
          <ul class="menu mbs-3 mbe-3 g-2">
            <li v-for="item in nav" :key="item.text" class="menu-item">
              <a v-if="item.link" :href="item.link" class="menu-link">{{
                item.text
              }}</a>
              <template v-else>
                <button class="menu-link submenu-toggle">
                  {{ item.text }}
                </button>
                <ul class="submenu">
                  <li
                    v-for="subItem in item.items"
                    :key="subItem.text"
                    class="menu-item"
                  >
                    <a :href="subItem.link" class="menu-link">
                      {{ subItem.text }}
                    </a>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </nav>
        <nav class="navigation" id="social" ref="socialNav">
          <ul class="menu mbs-3 mbe-3 g-2">
            <li v-for="item in socialLinks" :key="item.link" class="menu-item">
              <a :href="item.link" class="menu-link">
                {{ item.icon }}
              </a>
            </li>
          </ul>
        </nav>
        <button
          class="button navigation-shelf-toggle navigation-toggle border-none"
          aria-label="Toggle sidebar"
          ref="shelfToggle"
        ></button>
      </div>
    </div>
    <div class="container shelf-aware">
      <template v-if="page.frontmatter?.layout === 'home'">
        <div v-if="page.frontmatter?.hero" class="display-flex flex-col g-5">
          <div>
            <h1 class="mb-0">{{ page.frontmatter.hero.name }}</h1>
            <p class="text-2xl w-max-content text-primary-800">
              {{ page.frontmatter.hero.tagline }}
            </p>
          </div>
          <div
            v-if="page.frontmatter.hero.actions"
            class="display-flex flex-wrap g-4"
          >
            <a
              v-for="action in page.frontmatter.hero.actions"
              :key="`action-${action.text.toLowerCase().replace(' ', '-')}`"
              :href="action.link"
              :class="`button ${action.theme}`"
              >{{ action.text }}</a
            >
          </div>
        </div>
      </template>
      <template v-else>
        <Content />
      </template>
    </div>
  </div>
</template>
