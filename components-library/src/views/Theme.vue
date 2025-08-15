<script setup>
import clView from "../components/View.vue";
import clSection from "../components/Section.vue";
import clColourSpread from "../components/ColourSpread.vue";

const themeColours = {
  primary: [
    {
      name: "primary-100",
      class: "bg-primary-100 text-primary-900",
    },
    {
      name: "primary-200",
      class: "bg-primary-200 text-primary-900",
    },
    {
      name: "primary-300",
      class: "bg-primary-300 text-primary-900",
    },
    {
      name: "primary-400",
      class: "bg-primary-400 text-primary-900",
    },
    {
      name: "primary-500",
      class: "bg-primary-500 text-primary-100",
    },
    {
      name: "primary-600",
      class: "bg-primary-600 text-primary-100",
    },
    {
      name: "primary-700",
      class: "bg-primary-700 text-primary-100",
    },
    {
      name: "primary-800",
      class: "bg-primary-800 text-primary-100",
    },
    {
      name: "primary-900",
      class: "bg-primary-900 text-primary-100",
    },
  ],
  secondary: [
    {
      name: "secondary-100",
      class: "bg-secondary-100 text-secondary-900",
    },
    {
      name: "secondary-200",
      class: "bg-secondary-200 text-secondary-900",
    },
    {
      name: "secondary-300",
      class: "bg-secondary-300 text-secondary-900",
    },
    {
      name: "secondary-400",
      class: "bg-secondary-400 text-secondary-900",
    },
    {
      name: "secondary-500",
      class: "bg-secondary-500 text-secondary-100",
    },
    {
      name: "secondary-600",
      class: "bg-secondary-600 text-secondary-100",
    },
    {
      name: "secondary-700",
      class: "bg-secondary-700 text-secondary-100",
    },
    {
      name: "secondary-800",
      class: "bg-secondary-800 text-secondary-100",
    },
    {
      name: "secondary-900",
      class: "bg-secondary-900 text-secondary-100",
    },
  ],
  tertiary: [
    {
      name: "tertiary-100",
      class: "bg-tertiary-100 text-tertiary-900",
    },
    {
      name: "tertiary-200",
      class: "bg-tertiary-200 text-tertiary-900",
    },
    {
      name: "tertiary-300",
      class: "bg-tertiary-300 text-tertiary-900",
    },
    {
      name: "tertiary-400",
      class: "bg-tertiary-400 text-tertiary-900",
    },
    {
      name: "tertiary-500",
      class: "bg-tertiary-500 text-tertiary-100",
    },
    {
      name: "tertiary-600",
      class: "bg-tertiary-600 text-tertiary-100",
    },
    {
      name: "tertiary-700",
      class: "bg-tertiary-700 text-tertiary-100",
    },
    {
      name: "tertiary-800",
      class: "bg-tertiary-800 text-tertiary-100",
    },
    {
      name: "tertiary-900",
      class: "bg-tertiary-900 text-tertiary-100",
    },
  ],
};
const icons = ["car", "check", "bullhorn", "exclamation-triangle"];
</script>

<template>
  <cl-view
    name="Theme"
    description="Graupl's theme is the general look and feel of the framework. It consists of colours and typography."
    class="container"
    content-class="container rg-5"
  >
    <cl-section
      name="Theme Colours"
      description="The theme colours are used throughout the framework. Each colour has an array of shades to help with accessibility."
      class="container"
      content-class="container"
    >
      <div class="columns count-4">
        <cl-colour-spread
          v-for="(colours, name) in themeColours"
          :key="name"
          :name="name"
          :colours="colours"
        />
      </div>
    </cl-section>
    <cl-section
      name="Typography"
      description="Typography is argueably one of the most important aspects of a web application. Treating text with the same attention and care as any other component will lead to a better user experience. Good readability is good UX."
      class="container"
      content-class="container"
    >
      <p>
        The way basic paragraphs interact with each other is important. There
        will be a <em>lot</em> of them.
      </p>
      <p>
        Some paragraphs are short, some are long. Some contain
        <em>emphasized</em> text, some <strong>bold</strong>. No matter what is
        contained in your paragraphs, you need to make sure that they are not
        only readable by themselves, but also work well together in various
        situations and layouts.
      </p>
      <p><small>Small text shouldn't be overlooked either!</small></p>
      <p>
        Another important aspect to typography are headings. You should plan to
        have all 6 levels styled to ensure you're prepared for anything!
      </p>
      <p>
        Heading level 1s are very important for general accessibility. They are
        the title of your page and there should always be <em>exactly</em> one
        on every page. The rest of the heading levels can be used as many times
        per page as you'd like, however be sure to use them in a logical order;
        do not go from a heading level 2 to a level 5.
      </p>
      <p>
        In this case, the headings increase on a Major Third scale that was
        generated by
        <a
          href="https://typescale.com/?size=16&scale=1.250&text=A%20Visual%20Type%20Scale&font=Lato&fontweight=400&bodyfont=body_font_default&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false"
          target="_blank"
          >TypeScale</a
        >.
      </p>
      <div class="text-h1">Heading level 1</div>
      <div class="text-h2">Heading level 2</div>
      <div class="text-h3">Heading level 3</div>
      <div class="text-h4">Heading level 4</div>
      <div class="text-h5">Heading level 5</div>
      <div class="text-h6">Heading level 6</div>
    </cl-section>
  </cl-view>
</template>
