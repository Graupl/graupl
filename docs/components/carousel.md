<script setup>
  import { onBeforeUnmount, useTemplateRef } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import Carousel from "../../packages/core/src/js/carousel/Carousel.js";

  const preview = useTemplateRef("carousel-preview");
  const indicatorPreview = useTemplateRef("carousel-indicator-preview");
  const carousels = new Map();

  const exampleCarousel = `
<section class="carousel" aria-label="Field guide" data-graupl-carousel-options='{"autoplay":false}'>
  <div class="carousel-control-container">
    <button type="button" class="carousel-control autoplay play" aria-label="Start slide rotation"></button>
    <button type="button" class="carousel-control previous" aria-label="Previous slide"></button>
    <button type="button" class="carousel-control next" aria-label="Next slide"></button>
  </div>
  <div class="carousel-item-container">
    <div class="carousel-item px-5 pb-5 pt-9 bg-primary-100" role="group" aria-roledescription="slide" aria-label="Dragons">
      <h3>Dragons</h3>
      <p>Look for scorched trees before you pitch your tent.</p>
    </div>
    <div class="carousel-item px-5 pb-5 pt-9 bg-secondary-100" role="group" aria-roledescription="slide" aria-label="Ogres" inert>
      <h3>Ogres</h3>
      <p>Take the ridge trail to avoid the ogre patrols.</p>
    </div>
    <div class="carousel-item px-5 pb-5 pt-9 bg-tertiary-100" role="group" aria-roledescription="slide" aria-label="Griffins" inert>
      <h3>Griffins</h3>
      <p>Bring a spare glove if you plan to feed a griffin.</p>
    </div>
  </div>
</section>
  `;

  const exampleWithIndicators = exampleCarousel
    .replace('aria-label="Field guide"', 'aria-label="Field guide with slide indicators"')
    .replace('  <div class="carousel-item-container">', `  <div class="carousel-tab-container" aria-label="Choose a slide">
    <button type="button" class="carousel-tab" aria-label="Dragons"></button>
    <button type="button" class="carousel-tab" aria-label="Ogres"></button>
    <button type="button" class="carousel-tab" aria-label="Griffins"></button>
  </div>
  <div class="carousel-item-container">`)
    .replaceAll('pb-5 pt-9', 'pb-9 pt-9')
    .replaceAll('role="group" aria-roledescription="slide"', 'tabindex="0"');

  function initializePreview(wrapper) {
    if (!wrapper) return;

    const element = wrapper.querySelector(".example .carousel");
    const carousel = carousels.get(wrapper);

    if (carousel?.dom.carousel === element) return;

    carousel?.dispose();
    carousels.delete(wrapper);

    if (element) {
      carousels.set(wrapper, new Carousel({
        carouselElement: element,
        autoplay: false,
        initialize: true,
      }));
    }
  }

  onBeforeUnmount(() => {
    carousels.forEach(carousel => carousel.dispose());
  });
</script>

# Carousels

The carousel component provides a set of classes to show a series of slides one at a time.

Carousels implement the spec found in the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).

## Base classes

Use `.carousel` on a labelled section and group its slides in `.carousel-item-container`. Give each `.carousel-item` an accessible name with `aria-label`, along with `role="group"` and `aria-roledescription="slide"`.

Put the buttons in `.carousel-control-container`. Use `.carousel-control` on each button with `.autoplay` to start or stop rotation, `.previous` to go back, or `.next` to advance. Give each button an accessible name. Once initialized, the rotation button’s name changes to reflect whether it starts or stops rotation.

<div ref="carousel-preview">
  <live-example :source-code="exampleCarousel" @mounted="initializePreview(preview)" @updated="initializePreview(preview)" />
</div>

## Slide indicators

Slide indicators show which slide is active and let readers jump directly to another slide.

Use `.carousel-tab-container` to group the indicators. Add one `.carousel-tab` button per slide in the same order, and give each button an accessible name that identifies its slide.

Initialization sets the roles and ARIA attributes that link each indicator to its panel. If a panel starts with text, add `tabindex="0"` so readers can reach it by pressing Tab.

Focusing an indicator selects its slide by default. Set `automaticActivation` to `false` in the carousel options to select slides manually with Enter or Space.

<div ref="carousel-indicator-preview">
  <live-example :source-code="exampleWithIndicators" @mounted="initializePreview(indicatorPreview)" @updated="initializePreview(indicatorPreview)" />
</div>

## Initialization

Run the carousel generator after the markup is in the DOM.

```js
import generateCarousels from "@graupl/core/carousel/generator";

generateCarousels();
```

By default, slides rotate automatically. Set `data-graupl-carousel-options='{"autoplay":false}'` on the carousel to start with rotation stopped. Both previews start with rotation stopped.

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the carousel module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants. Add a variant class alongside `.carousel` or to an element inside it.

## Custom Properties

The following custom properties can be used to customize the carousel component:

| Property                                          | Description                                        | Default Value                                                                                          |
| ------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `--graupl-carousel-controls-height`               | Control area height of the carousel.               | `auto`                                                                                                 |
| `--graupl-carousel-tabs-width`                    | Tab area width of the carousel.                    | `1fr`                                                                                                  |
| `--graupl-carousel-tabs-height`                   | Tab area height of the carousel.                   | `auto`                                                                                                 |
| `--graupl-carousel-slide-height`                  | Slide height of the carousel.                      | `1fr`                                                                                                  |
| `--graupl-carousel-padding-x`                     | Horizontal padding of the carousel.                | `var(--graupl-spacer-0)`                                                                               |
| `--graupl-carousel-padding-y`                     | Vertical padding of the carousel.                  | `var(--graupl-spacer-0)`                                                                               |
| `--graupl-carousel-padding`                       | Padding of the carousel.                           | `var(--graupl-carousel-padding-y) var(--graupl-carousel-padding-x)`                                    |
| `--graupl-carousel-item-max-width`                | Maximum width of the carousel item.                | `100%`                                                                                                 |
| `--graupl-carousel-item-scroll-snap-align`        | Scroll snap align of the carousel item.            | `center`                                                                                               |
| `--graupl-carousel-item-container-padding-x`      | Horizontal padding of the carousel item container. | `var(--graupl-spacer-0)`                                                                               |
| `--graupl-carousel-item-container-padding-y`      | Vertical padding of the carousel item container.   | `var(--graupl-spacer-0)`                                                                               |
| `--graupl-carousel-item-container-padding`        | Padding of the carousel item container.            | `var(--graupl-carousel-item-container-padding-y) var(--graupl-carousel-item-container-padding-x)`      |
| `--graupl-carousel-item-container-flex-direction` | Flex direction of the carousel item container.     | `row`                                                                                                  |
| `--graupl-carousel-item-container-flex-wrap`      | Flex wrap of the carousel item container.          | `nowrap`                                                                                               |
| `--graupl-carousel-item-container-flex-flow`      | Flex flow of the carousel item container.          | `var(--graupl-carousel-item-container-flex-direction) var(--graupl-carousel-item-container-flex-wrap)` |
| `--graupl-carousel-item-container-aspect-ratio`   | Aspect ratio of the carousel item container.       | `auto`                                                                                                 |
| `--graupl-carousel-play-content`                  | Icon content for the play control.                 | `'▶'`                                                                                                  |
| `--graupl-carousel-pause-content`                 | Icon content for the pause control.                | `'❚❚'`                                                                                                 |
| `--graupl-carousel-next-content`                  | Icon content for the next control.                 | `'▶'`                                                                                                  |
| `--graupl-carousel-previous-content`              | Icon content for the previous control.             | `'◀'`                                                                                                  |
| `--graupl-carousel-control-width`                 | Width of the carousel control.                     | `4rem`                                                                                                 |
| `--graupl-carousel-control-height`                | Height of the carousel control.                    | `3rem`                                                                                                 |
| `--graupl-carousel-tab-container-padding-x`       | Horizontal padding of the carousel tab container.  | `var(--graupl-spacer-3)`                                                                               |
| `--graupl-carousel-tab-container-padding-y`       | Vertical padding of the carousel tab container.    | `var(--graupl-spacer-3)`                                                                               |
| `--graupl-carousel-tab-container-padding`         | Padding of the carousel tab container.             | `var(--graupl-carousel-tab-container-padding-y) var(--graupl-carousel-tab-container-padding-x)`        |
| `--graupl-carousel-tab-container-gap`             | Gap of the carousel tab container.                 | `var(--graupl-spacer-3)`                                                                               |
| `--graupl-carousel-color`                         | Text color of the carousel.                        | `var(--graupl-color)`                                                                                  |
| `--graupl-carousel-background`                    | Background of the carousel.                        | `var(--graupl-background)`                                                                             |
| `--graupl-carousel-border-color`                  | Border color of the carousel.                      | `var(--graupl-border-color)`                                                                           |
| `--graupl-carousel-control-color`                 | Text color of the carousel control.                | `var(--graupl-carousel-color)`                                                                         |
| `--graupl-carousel-control-visited-color`         | Text color of the visited carousel control.        | `var(--graupl-carousel-control-color)`                                                                 |
| `--graupl-carousel-control-focus-color`           | Text color of the focused carousel control.        | `var(--graupl-carousel-control-color)`                                                                 |
| `--graupl-carousel-control-hover-color`           | Text color of the hovered carousel control.        | `var(--graupl-carousel-background)`                                                                    |
| `--graupl-carousel-control-active-color`          | Text color of the active carousel control.         | `var(--graupl-carousel-control-hover-color)`                                                           |
| `--graupl-carousel-control-disabled-color`        | Text color of the disabled carousel control.       | `var(--graupl-theme-active--primary--200)`                                                             |
| `--graupl-carousel-control-background`            | Background of the carousel control.                | `var(--graupl-carousel-background)`                                                                    |
| `--graupl-carousel-control-visited-background`    | Background of the visited carousel control.        | `var(--graupl-carousel-control-background)`                                                            |
| `--graupl-carousel-control-focus-background`      | Background of the focused carousel control.        | `var(--graupl-carousel-control-background)`                                                            |
| `--graupl-carousel-control-hover-background`      | Background of the hovered carousel control.        | `var(--graupl-carousel-color)`                                                                         |
| `--graupl-carousel-control-active-background`     | Background of the active carousel control.         | `var(--graupl-carousel-control-hover-background)`                                                      |
| `--graupl-carousel-control-disabled-background`   | Background of the disabled carousel control.       | `var(--graupl-carousel-background)`                                                                    |
| `--graupl-carousel-control-border-color`          | Border color of the carousel control.              | `var(--graupl-carousel-border-color)`                                                                  |
| `--graupl-carousel-control-visited-border-color`  | Border color of the visited carousel control.      | `var(--graupl-carousel-control-border-color)`                                                          |
| `--graupl-carousel-control-focus-border-color`    | Border color of the focused carousel control.      | `var(--graupl-carousel-control-border-color)`                                                          |
| `--graupl-carousel-control-hover-border-color`    | Border color of the hovered carousel control.      | `var(--graupl-carousel-control-border-color)`                                                          |
| `--graupl-carousel-control-active-border-color`   | Border color of the active carousel control.       | `var(--graupl-carousel-control-hover-border-color)`                                                    |
| `--graupl-carousel-control-disabled-border-color` | Border color of the disabled carousel control.     | `var(--graupl-theme-active--primary--200)`                                                             |
| `--graupl-carousel-tab-color`                     | Text color of the carousel tab.                    | `var(--graupl-carousel-color)`                                                                         |
| `--graupl-carousel-tab-visited-color`             | Text color of the visited carousel tab.            | `var(--graupl-carousel-tab-color)`                                                                     |
| `--graupl-carousel-tab-focus-color`               | Text color of the focused carousel tab.            | `var(--graupl-carousel-tab-color)`                                                                     |
| `--graupl-carousel-tab-hover-color`               | Text color of the hovered carousel tab.            | `var(--graupl-carousel-background)`                                                                    |
| `--graupl-carousel-tab-active-color`              | Text color of the active carousel tab.             | `var(--graupl-carousel-tab-hover-color)`                                                               |
| `--graupl-carousel-tab-disabled-color`            | Text color of the disabled carousel tab.           | `var(--graupl-theme-active--primary--200)`                                                             |
| `--graupl-carousel-tab-background`                | Background of the carousel tab.                    | `var(--graupl-carousel-background)`                                                                    |
| `--graupl-carousel-tab-visited-background`        | Background of the visited carousel tab.            | `var(--graupl-carousel-tab-background)`                                                                |
| `--graupl-carousel-tab-focus-background`          | Background of the focused carousel tab.            | `var(--graupl-carousel-tab-background)`                                                                |
| `--graupl-carousel-tab-hover-background`          | Background of the hovered carousel tab.            | `var(--graupl-carousel-color)`                                                                         |
| `--graupl-carousel-tab-active-background`         | Background of the active carousel tab.             | `var(--graupl-carousel-tab-hover-background)`                                                          |
| `--graupl-carousel-tab-disabled-background`       | Background of the disabled carousel tab.           | `var(--graupl-carousel-background)`                                                                    |
| `--graupl-carousel-tab-border-color`              | Border color of the carousel tab.                  | `var(--graupl-carousel-border-color)`                                                                  |
| `--graupl-carousel-tab-visited-border-color`      | Border color of the visited carousel tab.          | `var(--graupl-carousel-tab-border-color)`                                                              |
| `--graupl-carousel-tab-focus-border-color`        | Border color of the focused carousel tab.          | `var(--graupl-carousel-tab-border-color)`                                                              |
| `--graupl-carousel-tab-hover-border-color`        | Border color of the hovered carousel tab.          | `var(--graupl-carousel-tab-border-color)`                                                              |
| `--graupl-carousel-tab-active-border-color`       | Border color of the active carousel tab.           | `var(--graupl-carousel-tab-hover-border-color)`                                                        |
| `--graupl-carousel-tab-disabled-border-color`     | Border color of the disabled carousel tab.         | `var(--graupl-theme-active--primary--200)`                                                             |

## Sass variables

The following Sass variables can be used to customize the generation of the carousel component:

| Variable                                    | Description                                                                               | Default Value                  |
| ------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------ |
| `$selector-base`                            | The selector base for the component.                                                      | `"."`                          |
| `$modifier-selector-base`                   | The selector base for component modifiers.                                                | `"."`                          |
| `$generate-base-theme-map`                  | Whether to include the default carousel theme mappings.                                   | `true`                         |
| `$themeable`                                | Whether to generate carousel theme variants.                                              | `false`                        |
| `$carousel-selector-base`                   | Selector base for the carousel.                                                           | `"."`                          |
| `$carousel-selector`                        | Selector for the carousel.                                                                | `"carousel"`                   |
| `$carousel-theme-selector-base`             | Selector base for the carousel theme.                                                     | `"."`                          |
| `$carousel-theme-selector-prefix`           | Selector prefix for the carousel theme.                                                   | `""`                           |
| `$carousel-control-container-selector-base` | Selector base for the carousel control container.                                         | `"."`                          |
| `$carousel-control-container-selector`      | Selector for the carousel control container.                                              | `"carousel-control-container"` |
| `$carousel-control-selector-base`           | Selector base for the carousel control.                                                   | `"."`                          |
| `$carousel-control-selector`                | Selector for the carousel control.                                                        | `"carousel-control"`           |
| `$carousel-pause-selector-base`             | Selector base for the carousel pause modifier.                                            | `"."`                          |
| `$carousel-pause-selector`                  | Selector for the carousel pause modifier.                                                 | `"pause"`                      |
| `$carousel-play-selector-base`              | Selector base for the carousel play modifier.                                             | `"."`                          |
| `$carousel-play-selector`                   | Selector for the carousel play modifier.                                                  | `"play"`                       |
| `$carousel-autoplay-selector-base`          | Selector base for the carousel autoplay modifier.                                         | `"."`                          |
| `$carousel-autoplay-selector`               | Selector for the carousel autoplay modifier.                                              | `"autoplay"`                   |
| `$carousel-previous-selector-base`          | Selector base for the carousel previous modifier.                                         | `"."`                          |
| `$carousel-previous-selector`               | Selector for the carousel previous modifier.                                              | `"previous"`                   |
| `$carousel-next-selector-base`              | Selector base for the carousel next modifier.                                             | `"."`                          |
| `$carousel-next-selector`                   | Selector for the carousel next modifier.                                                  | `"next"`                       |
| `$carousel-item-container-selector-base`    | Selector base for the carousel item container.                                            | `"."`                          |
| `$carousel-item-container-selector`         | Selector for the carousel item container.                                                 | `"carousel-item-container"`    |
| `$carousel-item-selector-base`              | Selector base for the carousel item.                                                      | `"."`                          |
| `$carousel-item-selector`                   | Selector for the carousel item.                                                           | `"carousel-item"`              |
| `$carousel-tab-container-selector-base`     | Selector base for the carousel tab container.                                             | `"."`                          |
| `$carousel-tab-container-selector`          | Selector for the carousel tab container.                                                  | `"carousel-tab-container"`     |
| `$carousel-tab-selector-base`               | Selector base for the carousel tab.                                                       | `"."`                          |
| `$carousel-tab-selector`                    | Selector for the carousel tab.                                                            | `"carousel-tab"`               |
| `$carousel-controls-height`                 | Control area height of the carousel.                                                      | `auto`                         |
| `$carousel-tabs-width`                      | Tab area width of the carousel.                                                           | `1fr`                          |
| `$carousel-tabs-height`                     | Tab area height of the carousel.                                                          | `auto`                         |
| `$carousel-slide-height`                    | Slide height of the carousel.                                                             | `1fr`                          |
| `$carousel-control-height`                  | Height of the carousel control.                                                           | `3rem`                         |
| `$carousel-control-width`                   | Width of the carousel control.                                                            | `4rem`                         |
| `$carousel-item-max-width`                  | Maximum width of the carousel item.                                                       | `100%`                         |
| `$carousel-play-content`                    | Icon content for the play control.                                                        | `"'▶'"`                        |
| `$carousel-pause-content`                   | Icon content for the pause control.                                                       | `"'❚❚'"`                       |
| `$carousel-next-content`                    | Icon content for the next control.                                                        | `"'▶'"`                        |
| `$carousel-previous-content`                | Icon content for the previous control.                                                    | `"'◀'"`                        |
| `$carousel-theme-mappings`                  | A map of properties and color shades used to generate all carousel variants.              | `()`                           |
| `$carousel-theme-map`                       | A map of all properties, colors, and color shades used to generate all carousel variants. | `()`                           |
