<script setup>
import { onMounted, ref } from "vue";
import { useData } from "vitepress";
import DisclosureMenu from "accessible-menu/disclosure-menu";
import Treeview from "accessible-menu/treeview";
const { page, site } = useData();
const { nav, sidebar, socialLinks } = site.value.themeConfig || {};
const mainNav = ref(null);
const socialNav = ref(null);
const sidebarNav = ref(null);
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
});
</script>

<template>
  <div class="position-relative min-h-full-screen">
    <div
      class="container sidebars z-0 position-absolute inset-0 dark-mode display-none lg:display-grid"
    >
      <div
        class="sidebar-left bg-secondary-100 border-tertiary-500 border-solid border-top-none border-left-none border-bottom-none"
      ></div>
    </div>
    <div class="container sidebars topbar z-1">
      <div class="sidebar-left">
        <a href="/" class="w-full height-auto display-flex align-items-center"
          ><img src="/logo.svg" alt="Graupl Logo" class="w-9 h-auto"
        /></a>
      </div>
      <div class="content-right">
        <div class="display-flex justify-content-end g-4">
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
              <li
                v-for="item in socialLinks"
                :key="item.link"
                class="menu-item"
              >
                <a :href="item.link" class="menu-link">
                  {{ item.icon }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="container sidebars z-1">
      <aside
        class="sidebar-left bg-secondary-100 dark-mode border-tertiary-500 border-solid border-top-none border-left-none border-bottom-none"
      >
        <nav class="navigation" id="sidebar" ref="sidebarNav">
          <ul class="menu display-flex flex-col">
            <li v-for="item in sidebar" :key="item.text" class="menu-item">
              <button class="menu-link submenu-toggle" aria-expanded="true">
                {{ item.text }}
              </button>
              <ul class="submenu show">
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
      </aside>
      <div class="inner-content px-5"><Content /></div>
      <div class="sidebar-right"></div>
    </div>
  </div>
</template>
