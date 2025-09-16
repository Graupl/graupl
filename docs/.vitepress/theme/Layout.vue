<script setup>
import { onMounted, ref, useTemplateRef } from "vue";
import { useData } from "vitepress";
import DisclosureMenu from "accessible-menu/disclosure-menu";
import Treeview from "accessible-menu/treeview";
import NavigationShelfGenerator from "../../../packages/navigation-shelf/src/js/navigation-shelf/generator.js";
const { page, site } = useData();
const { nav, sidebar, socialLinks } = site.value.themeConfig || {};
const mainNav = useTemplateRef("mainNav");
const socialNav = useTemplateRef("socialNav");
const sidebarNav = useTemplateRef("sidebarNav");
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

  NavigationShelfGenerator();
});
</script>

<template>
  <div class="position-relative min-h-full-screen">
    <div class="container topbar shelf-aware">
      <div class="display-flex justify-content-end g-4">
        <div
          class="navigation-shelf dark-mode bg-secondary-100 text-secondary-900"
          data-graupl-navigation-shelf-options="{ 'locked': true }"
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
            ></button>
            <button
              class="button navigation-shelf-hover-toggle w-min-content"
              aria-label="Toggle shelf hover"
            ></button>
            <button
              class="button navigation-shelf-side-toggle w-min-content"
              aria-label="Toggle side"
            ></button>
          </div>
        </div>
        <!-- <a href="/" class="w-full height-auto display-flex align-items-center"
          ><img src="/logo.svg" alt="Graupl Logo" class="w-9 h-auto"
        /></a> -->
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
        ></button>
      </div>
    </div>
    <div class="container shelf-aware"><Content /></div>
  </div>
</template>
