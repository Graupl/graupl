<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import generate from "@graupl/core/src/carousel/generator.js";

  const exampleCarousel = computed(() => {
    return `
<section class="carousel">
  <div class="carousel-control-container">
    <button class="carousel-control autoplay"></button>
    <button class="carousel-control previous"></button>
    <button class="carousel-control next"></button>
  </div>
  <div class="carousel-tab-container">
    <button class="carousel-tab" aria-label="Carousel item 1"></button>
    <button class="carousel-tab" aria-label="Carousel item 2"></button>
    <button class="carousel-tab" aria-label="Carousel item 3"></button>
    <button class="carousel-tab" aria-label="Carousel item 4"></button>
    <button class="carousel-tab" aria-label="Carousel item 5"></button>
  </div>
  <div class="carousel-item-container">
    <div class="carousel-item">
        <img
          src="https://picsum.photos/1400/600?random=1"
          alt="A placeholder carousel image" />
      <div
        class="position-absolute bottom-0 left-0 right-0 p-5 bg-tertiary-100">
        <p>
          This is a slide! It has a
          <a href="#">thing you can click</a> in it!
        </p>
      </div>
    </div>
    <div class="carousel-item">
        <img
          src="https://picsum.photos/1400/600?random=2"
          alt="A placeholder carousel image" />
      <div
        class="position-absolute bottom-0 left-0 right-0 p-5 bg-tertiary-100">
        <p>
          This is a slide! It has a
          <a href="#">thing you can click</a> in it!
        </p>
      </div>
    </div>
    <div class="carousel-item">
        <img
          src="https://picsum.photos/1400/600?random=3"
          alt="A placeholder carousel image" />
      <div
        class="position-absolute bottom-0 left-0 right-0 p-5 bg-tertiary-100">
        <p>
          This is a slide! It has a
          <a href="#">thing you can click</a> in it!
        </p>
      </div>
    </div>
    <div class="carousel-item">
        <img
          src="https://picsum.photos/1400/600?random=4"
          alt="A placeholder carousel image" />
      <div
        class="position-absolute bottom-0 left-0 right-0 p-5 bg-tertiary-100">
        <p>
          This is a slide! It has a
          <a href="#">thing you can click</a> in it!
        </p>
      </div>
    </div>
    <div class="carousel-item">
        <img
          src="https://picsum.photos/1400/600?random=5"
          alt="A placeholder carousel image" />
      <div
        class="position-absolute bottom-0 left-0 right-0 p-5 bg-tertiary-100">
        <p>
          This is a slide! It has a
          <a href="#">thing you can click</a> in it!
        </p>
      </div>
    </div>
  </div>
</section>
    `;
  });
</script>

# Carousels

<live-example :source-code="exampleCarousel" @mounted="generate()" @updated="generate()">
</live-example>

<br/>

The carousel component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.carousel` | The carousel container |
| `.carousel-control-container` | The container for play/pause/prev/next controls |
| `.carousel-control` | The control elements (with `.autoplay`, `.play`, `.pause`, `.previous`, `.next` modifiers) |
| `.carousel-item-container` | The container for carousel items |
| `.carousel-item` | Individual carousel items (with `.active`, `.next`, `.previous` modifiers) |
| `.carousel-tab-container` | The container for tabs |
| `.carousel-tab` | Individual tabs |

<br/>

## .carousel custom properties

These are the default values for the `.carousel` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-carousel-controls-height` | Value for carousel controls height. | `auto` |
| `--graupl-carousel-tabs-width` | Value for carousel tabs width. | `1fr` |
| `--graupl-carousel-tabs-height` | Value for carousel tabs height. | `auto` |
| `--graupl-carousel-slide-height` | Value for carousel slide height. | `1fr` |
| `--graupl-carousel-padding-x` | Value for carousel padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-carousel-padding-y` | Value for carousel padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-carousel-padding` | Value for carousel padding. | `var(--graupl-carousel-padding-y) var(--graupl-carousel-padding-x)` |

## .carousel-item custom properties

These are the default values for the `.carousel-item` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-carousel-item-max-width` | Value for carousel item max width. | `100%` |
| `--graupl-carousel-item-scroll-snap-align` | Value for carousel item scroll snap align. | `center` |
| `--graupl-carousel-color` | Value for carousel color. | `var(--graupl-color)` |
| `--graupl-carousel-background` | Value for carousel background. | `var(--graupl-background)` |
| `--graupl-carousel-border-color` | Value for carousel border color. | `var(--graupl-border-color)` |

## .carousel-item-container custom properties

These are the default values for the `.carousel-item-container` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-carousel-item-container-padding-x` | Value for carousel item container padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-carousel-item-container-padding-y` | Value for carousel item container padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-carousel-item-container-padding` | Value for carousel item container padding. | `var(--graupl-carousel-item-container-padding-y) var(--graupl-carousel-item-container-padding-x)` |
| --graupl-carousel-item-container-flex-direction | Value for carousel item container flex direction. | `row` |
| --graupl-carousel-item-container-flex-wrap | Value for carousel item container flex wrap. | `nowrap` |
| --graupl-carousel-item-container-flex-flow | Value for carousel item container flex flow. | `var(--graupl-carousel-item-container-flex-direction) var(--graupl-carousel-item-container-flex-wrap)` |
| --graupl-carousel-item-container-aspect-ratio | Value for carousel item container aspect ratio. | `auto` |

## .carousel-control custom properties

These are the default values for the `.carousel` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-carousel-play-content` | Value for carousel play content. | `"'▶'"` |
| `--graupl-carousel-pause-content` | Value for carousel pause content. | `"'❚❚'"` |
| `--graupl-carousel-next-content` | Value for carousel next content. | `"'▶'"` |
| `--graupl-carousel-previous-content` | Value for carousel previous content. | `"'◀'"` |
| `--graupl-carousel-control-width` | Value for carousel control width. | `4rem` |
| `--graupl-carousel-control-height` | Value for carousel control height. | `3rem` |
| `--graupl-carousel-control-color` | Value for carousel control color. | `var(--graupl-carousel-color)` |
| `--graupl-carousel-control-visited-color` | Value for carousel control visited color. | `var(--graupl-carousel-control-color)` |
| `--graupl-carousel-control-focus-color` | Value for carousel control focus color. | `var(--graupl-carousel-control-color)` |
| `--graupl-carousel-control-hover-color` | Value for carousel control hover color. | `var(--graupl-carousel-background)` |
| `--graupl-carousel-control-active-color` | Value for carousel control active color. | `var(--graupl-carousel-control-hover-color)` |
| `--graupl-carousel-control-disabled-color` | Value for carousel control disabled color. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-carousel-control-background` | Value for carousel control background. | `var(--graupl-carousel-background)` |
| `--graupl-carousel-control-visited-background` | Value for carousel control visited background. | `var(--graupl-carousel-control-background)` |
| `--graupl-carousel-control-focus-background` | Value for carousel control focus background. | `var(--graupl-carousel-control-background)` |
| `--graupl-carousel-control-hover-background` | Value for carousel control hover background. | `var(--graupl-carousel-color)` |
| `--graupl-carousel-control-active-background` | Value for carousel control active background. | `var(--graupl-carousel-control-hover-background)` |
| `--graupl-carousel-control-disabled-background` | Value for carousel control disabled background. | `var(--graupl-carousel-background)` |
| `--graupl-carousel-control-border-color` | Value for carousel control border color. | `var(--graupl-carousel-border-color)` |
| `--graupl-carousel-control-visited-border-color` | Value for carousel control visited border color. | `var(--graupl-carousel-control-border-color)` |
| `--graupl-carousel-control-focus-border-color` | Value for carousel control focus border color. | `var(--graupl-carousel-control-border-color)` |
| `--graupl-carousel-control-hover-border-color` | Value for carousel control hover border color. | `var(--graupl-carousel-control-border-color)` |
| `--graupl-carousel-control-active-border-color` | Value for carousel control active border color. | `var(--graupl-carousel-control-hover-border-color)` |
| `--graupl-carousel-control-disabled-border-color` | Value for carousel control disabled border color. | `var(--graupl-theme-active--primary--200)` |

## .carousel-tab-container custom properties

These are the default values for the `.carousel-tab-container` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-carousel-tab-container-padding-x` | Value for carousel tab container padding horizontal. | `var(--graupl-spacer-3)` |
| `--graupl-carousel-tab-container-padding-y` | Value for carousel tab container padding vertical. | `var(--graupl-spacer-3)` |
| `--graupl-carousel-tab-container-padding` | Value for carousel tab container padding. | `var(--graupl-carousel-tab-container-padding-y) var(--graupl-carousel-tab-container-padding-x)` |
| `--graupl-carousel-tab-container-gap` | Value for carousel tab container gap. | `var(--graupl-spacer-3)` |

## .carousel-tab custom properties

These are the default values for the `.carousel-tab` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-carousel-tab-color` | Value for carousel tab color. | `var(--graupl-carousel-color)` |
| `--graupl-carousel-tab-visited-color` | Value for carousel tab visited color. | `var(--graupl-carousel-tab-color)` |
| `--graupl-carousel-tab-focus-color` | Value for carousel tab focus color. | `var(--graupl-carousel-tab-color)` |
| `--graupl-carousel-tab-hover-color` | Value for carousel tab hover color. | `var(--graupl-carousel-background)` |
| `--graupl-carousel-tab-active-color` | Value for carousel tab active color. | `var(--graupl-carousel-tab-hover-color)` |
| `--graupl-carousel-tab-disabled-color` | Value for carousel tab disabled color. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-carousel-tab-background` | Value for carousel tab background. | `var(--graupl-carousel-background)` |
| `--graupl-carousel-tab-visited-background` | Value for carousel tab visited background. | `var(--graupl-carousel-tab-background)` |
| `--graupl-carousel-tab-focus-background` | Value for carousel tab focus background. | `var(--graupl-carousel-tab-background)` |
| `--graupl-carousel-tab-hover-background` | Value for carousel tab hover background. | `var(--graupl-carousel-color)` |
| `--graupl-carousel-tab-active-background` | Value for carousel tab active background. | `var(--graupl-carousel-tab-hover-background)` |
| `--graupl-carousel-tab-disabled-background` | Value for carousel tab disabled background. | `var(--graupl-carousel-background)` |
| `--graupl-carousel-tab-border-color` | Value for carousel tab border color. | `var(--graupl-carousel-border-color)` |
| `--graupl-carousel-tab-visited-border-color` | Value for carousel tab visited border color. | `var(--graupl-carousel-tab-border-color)` |
| `--graupl-carousel-tab-focus-border-color` | Value for carousel tab focus border color. | `var(--graupl-carousel-tab-border-color)` |
| `--graupl-carousel-tab-hover-border-color` | Value for carousel tab hover border color. | `var(--graupl-carousel-tab-border-color)` |
| `--graupl-carousel-tab-active-border-color` | Value for carousel tab active border color. | `var(--graupl-carousel-tab-hover-border-color)` |
| `--graupl-carousel-tab-disabled-border-color` | Value for carousel tab disabled border color. | `var(--graupl-theme-active--primary--200)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Default for selector base. | `"."` |
| `$modifier-selector-base` | Default for modifier selector base. | `"."` |
| `$generate-base-theme-map` | Default for generate base theme map. | `true` |
| `$themeable` | Default for themeable. | `false` |
| `$carousel-selector-base` | Default for carousel selector base. | `"."` |
| `$carousel-selector` | Default for carousel selector. | `"carousel"` |
| `$carousel-theme-selector-base` | Default for carousel theme selector base. | `"."` |
| `$carousel-theme-selector-prefix` | Default for carousel theme selector prefix. | `""` |
| `$carousel-control-container-selector-base` | Default for carousel control container selector base. | `"."` |
| `$carousel-control-container-selector` | Default for carousel control container selector. | `"carousel-control-container"` |
| `$carousel-control-selector-base` | Default for carousel control selector base. | `"."` |
| `$carousel-control-selector` | Default for carousel control selector. | `"carousel-control"` |
| `$carousel-pause-selector-base` | Default for carousel pause selector base. | `"."` |
| `$carousel-pause-selector` | Default for carousel pause selector. | `"pause"` |
| `$carousel-play-selector-base` | Default for carousel play selector base. | `"."` |
| `$carousel-play-selector` | Default for carousel play selector. | `"play"` |
| `$carousel-autoplay-selector-base` | Default for carousel autoplay selector base. | `"."` |
| `$carousel-autoplay-selector` | Default for carousel autoplay selector. | `"autoplay"` |
| `$carousel-previous-selector-base` | Default for carousel previous selector base. | `"."` |
| `$carousel-previous-selector` | Default for carousel previous selector. | `"previous"` |
| `$carousel-next-selector-base` | Default for carousel next selector base. | `"."` |
| `$carousel-next-selector` | Default for carousel next selector. | `"next"` |
| `$carousel-item-container-selector-base` | Default for carousel item container selector base. | `"."` |
| `$carousel-item-container-selector` | Default for carousel item container selector. | `"carousel-item-container"` |
| `$carousel-item-selector-base` | Default for carousel item selector base. | `"."` |
| `$carousel-item-selector` | Default for carousel item selector. | `"carousel-item"` |
| `$carousel-tab-container-selector-base` | Default for carousel tab container selector base. | `"."` |
| `$carousel-tab-container-selector` | Default for carousel tab container selector. | `"carousel-tab-container"` |
| `$carousel-tab-selector-base` | Default for carousel tab selector base. | `"."` |
| `$carousel-tab-selector` | Default for carousel tab selector. | `"carousel-tab"` |
| `$carousel-active-item-selector-base` | Default for carousel active item selector base. | `"."` |
| `$carousel-active-item-selector` | Default for carousel active item selector. | `"active"` |
| `$carousel-controls-height` | Default for carousel controls height. | `auto` |
| `$carousel-tabs-width` | Default for carousel tabs width. | `1fr` |
| `$carousel-tabs-height` | Default for carousel tabs height. | `auto` |
| `$carousel-slide-height` | Default for carousel slide height. | `1fr` |
| `$carousel-control-height` | Default for carousel control height. | `3rem` |
| `$carousel-control-width` | Default for carousel control width. | `4rem` |
| `$carousel-item-max-width` | Default for carousel item max width. | `100%` |
| `$carousel-play-content` | Default for carousel play content. | `"'▶'"` |
| `$carousel-pause-content` | Default for carousel pause content. | `"'❚❚'"` |
| `$carousel-next-content` | Default for carousel next content. | `"'▶'"` |
| `$carousel-previous-content` | Default for carousel previous content. | `"'◀'"` |
| `$carousel-theme-mappings` | Default for carousel theme mappings. | `()` |
| `$carousel-theme-map` | Default for carousel theme map. | `()` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
