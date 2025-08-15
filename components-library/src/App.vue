<script setup>
import { ref } from "vue";
import clTheme from "./views/Theme.vue";
import clComponents from "./views/Components.vue";
import clLayout from "./views/Layout.vue";
import logoUrl from "../../logo.svg";

const themeToggle = ref(false);
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
const setTheme = window.localStorage.getItem("theme") || preferredTheme;

document.documentElement.classList.add(`${setTheme}-mode`);
</script>

<template>
  <main id="cl-app" class="container">
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
</style>
"
