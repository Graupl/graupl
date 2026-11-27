<script setup>
  import { computed, onBeforeUnmount, ref, useTemplateRef } from "vue";
  import Carousel from "@graupl/core/src/carousel/Carousel.js";
  import exampleCopy from "../vue-components/exampleCopy.js";
  import LiveExample from "../vue-components/LiveExample.vue";

  const preview = useTemplateRef("preview");
  const indicatorPreview = useTemplateRef("carousel-indicator-preview");
  const optionsPreview = useTemplateRef("options-preview");
  const instances = new Map();

  const exampleCarousel = computed(() => `
<section class="carousel" aria-label="${exampleCopy.html("carousel.title")}" data-graupl-carousel-options='{"autoplay":false}'>
  <div class="carousel-control-container">
    <button type="button" class="carousel-control autoplay play" aria-label="Start slide rotation"></button>
    <button type="button" class="carousel-control previous" aria-label="Previous slide"></button>
    <button type="button" class="carousel-control next" aria-label="Next slide"></button>
  </div>
  <div class="carousel-item-container">
    <div class="carousel-item px-5 pb-5 pt-9 bg-primary-100" role="group" aria-roledescription="slide" aria-label="${exampleCopy.html("carousel.firstTitle")}">
      <h3>${exampleCopy.html("carousel.firstTitle")}</h3>
      <p>${exampleCopy.html("carousel.firstBody")}</p>
    </div>
    <div class="carousel-item px-5 pb-5 pt-9 bg-secondary-100" role="group" aria-roledescription="slide" aria-label="${exampleCopy.html("carousel.secondTitle")}" inert>
      <h3>${exampleCopy.html("carousel.secondTitle")}</h3>
      <p>${exampleCopy.html("carousel.secondBody")}</p>
    </div>
    <div class="carousel-item px-5 pb-5 pt-9 bg-tertiary-100" role="group" aria-roledescription="slide" aria-label="${exampleCopy.html("carousel.thirdTitle")}" inert>
      <h3>${exampleCopy.html("carousel.thirdTitle")}</h3>
      <p>${exampleCopy.html("carousel.thirdBody")}</p>
    </div>
  </div>
</section>
  `);

  const exampleWithIndicators = computed(() => exampleCarousel.value
    .replace(`aria-label="${exampleCopy.html("carousel.title")}"`, () => `aria-label="${exampleCopy.html("carousel.indicatorTitle")}"`)
    .replace('{"autoplay":false}', '{"autoplay":false,"automaticActivation":true}')
    .replace('  <div class="carousel-item-container">', `  <div class="carousel-tab-container" aria-label="Choose a slide">
    <button type="button" class="carousel-tab" aria-label="${exampleCopy.html("carousel.firstTitle")}"></button>
    <button type="button" class="carousel-tab" aria-label="${exampleCopy.html("carousel.secondTitle")}"></button>
    <button type="button" class="carousel-tab" aria-label="${exampleCopy.html("carousel.thirdTitle")}"></button>
  </div>
  <div class="carousel-item-container">`)
    .replaceAll('pb-5 pt-9', 'pb-9 pt-9')
    .replaceAll('role="group" aria-roledescription="slide"', 'tabindex="0"'));

  const optionsControls = [
    {
      name: "autoplay",
      defaultValue: true,
      label: "Start slide rotation automatically",
      help: "Start rotating slides when the carousel initializes. Use the rotation button to stop them. Enabled by default.",
    },
    {
      name: "loop",
      defaultValue: true,
      label: "Loop slides",
      help: "Wrap to the opposite end when you navigate past the first or last slide. With Loop off, autoplay stops at the last slide. Enabled by default.",
    },
    {
      name: "pauseOnEnter",
      defaultValue: true,
      label: "Pause when the pointer enters",
      help: "Pause slide rotation when you move the pointer into the carousel. Enabled by default.",
    },
    {
      name: "resumeOnLeave",
      defaultValue: true,
      label: "Resume when the pointer leaves",
      help: "Resume a pointer pause when you move the pointer out of the carousel. Requires Pause when the pointer enters. With this off, use Play to resume. Enabled by default.",
    },
  ];

  const optionsAttribute = "data-graupl-carousel-options";
  const defaultOptions = Object.fromEntries(
    optionsControls.map(({ name, defaultValue }) => [name, defaultValue])
  );
  const optionValues = ref({ ...defaultOptions });
  const optionsError = ref("");

  const exampleWithOptions = computed(() => exampleCarousel.value.replace(
    /data-graupl-carousel-options='[^']*'/,
    `data-graupl-carousel-options='${JSON.stringify(optionValues.value)}'`
  ));

  function initializePreview(wrapper) {
    const element = wrapper?.querySelector(".example .carousel");
    const previous = instances.get(wrapper);

    // Form and status updates can run this hook without replacing the markup.
    if (previous?.dom.carousel === element) return;

    previous?.dispose();
    instances.delete(wrapper);

    const isOptionsPreview = wrapper === optionsPreview.value;
    if (isOptionsPreview) optionsError.value = "";
    if (!element) return;

    // Keep the basic and indicator examples paused while you try the autoplay controls.
    let options = isOptionsPreview ? {} : { autoplay: false };
    const attribute = (isOptionsPreview || wrapper === indicatorPreview.value)
      ? element.getAttribute(optionsAttribute)
      : null;

    if (attribute) {
      let editedOptions;

      // An edit can leave incomplete JSON until the next keystroke.
      try {
        editedOptions = JSON.parse(attribute);
      } catch {
        editedOptions = null;
      }

      if (!editedOptions || typeof editedOptions !== "object" || Array.isArray(editedOptions)) {
        if (isOptionsPreview) optionsError.value = `Enter a JSON object in ${optionsAttribute}.`;
        return;
      }

      options = isOptionsPreview
        ? editedOptions
        : { ...options, automaticActivation: editedOptions.automaticActivation };
    }

    instances.set(wrapper, new Carousel({
      ...options,
      carouselElement: element,
      initialize: true,
    }));
  }

  onBeforeUnmount(() => instances.forEach((instance) => instance.dispose()));
</script>

# Carousels

The carousel component provides a set of classes to show a series of slides one at a time.

Carousels implement the spec found in the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).

## Base classes

Use `.carousel` on a labelled section and group its slides in `.carousel-item-container`. Give each `.carousel-item` an accessible name with `aria-label`, along with `role="group"` and `aria-roledescription="slide"`.

Put the buttons in `.carousel-control-container`. Use `.carousel-control` on each button with `.autoplay` to start or stop rotation, `.previous` to go back, or `.next` to advance. Give each button an accessible name. Once initialized, the rotation button’s name changes to reflect whether it starts or stops rotation.

<div ref="preview">
  <live-example :source-code="exampleCarousel" @updated="initializePreview(preview)" />
</div>

## Slide indicators

Slide indicators show which slide is active and let readers jump directly to another slide.

Use `.carousel-tab-container` to group the indicators. Add one `.carousel-tab` button per slide in the same order, and give each button an accessible name that identifies its slide.

Initialization sets the roles and ARIA attributes that link each indicator to its panel. If a panel starts with text, add `tabindex="0"` so readers can reach it by pressing Tab.

Focusing an indicator selects its slide by default. In the example below, set `automaticActivation` to `false` in `data-graupl-carousel-options` to select slides manually with Enter or Space.

<div ref="carousel-indicator-preview">
  <live-example :source-code="exampleWithIndicators" @updated="initializePreview(indicatorPreview)" />
</div>

## Initialization

Run the carousel generator after the markup is in the DOM.

```js
import generateCarousels from "@graupl/core/carousel/generator";

generateCarousels();
```

## JavaScript customization

Use `data-graupl-carousel-options` to customize a carousel. To try the pointer options, keep automatic rotation on and move the pointer into and out of the preview. Slides change every 10 seconds while rotation is running.

<div ref="options-preview">
  <live-example
    :source-code="exampleWithOptions"
    options-position="top"
    resettable
    @updated="initializePreview(optionsPreview)"
    @reset="optionValues = { ...defaultOptions }"
  >
    <template #options>
      <form @submit.prevent>
        <fieldset>
          <legend>Carousel options</legend>
          <div v-for="control in optionsControls" :key="control.name" class="input-group left">
            <input
              :id="`carousel-option-${control.name}`"
              type="checkbox"
              :aria-describedby="`carousel-option-${control.name}-help`"
              v-model="optionValues[control.name]"
            >
            <label :for="`carousel-option-${control.name}`">{{ control.label }}</label>
            <small :id="`carousel-option-${control.name}-help`" class="help-text">{{ control.help }}</small>
          </div>
        </fieldset>
      </form>
    </template>
  </live-example>
  <div role="status">{{ optionsError }}</div>
</div>

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the carousel module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants. Add a variant class alongside `.carousel` or to an element inside it.

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/component/carousel.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/component/carousel.css">
```

```scss [Sass]
@use "pkg:@graupl/core/component/carousel.scss";
```

:::

### JavaScript

For a page that uses this component, include its generator script below. It finds and initializes matching markup when the page loads. If you already load the full `graupl.js` bundle, it runs the generator for you. To call the generator yourself, see [Initialization](#initialization).

::: code-group

```html [Local]
<script defer src="./dist/js/carousel.js"></script>
```

```html [CDN]
<script defer src="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/js/carousel.js"></script>
```

:::

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

## Generator options

The following options can be used to customize the carousel component generator.

| Option | Default | Description |
| --- | --- | --- |
| `context` | `document` | Document or element whose descendants the generator searches. |
| `selector` | `.carousel` | CSS selector for carousel elements. |
| `options` | `{}` | Settings passed to the constructor for each match. A JSON object in `data-graupl-carousel-options` overrides matching settings for that element. Pass element references through JavaScript. |

## Constructor options

The following options can be used to customize the carousel component during construction.

| Option                             | Default                       | Description                                                                                                                                                      |
| ---------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `carouselElement`                  | Required                      | Root element for the carousel. The generator supplies this element.                                                                                              |
| `carouselItemsSelector`            | `.carousel-item`              | CSS selector for carousel items.                                                                                                                                 |
| `carouselItemContainerSelector`    | `.carousel-item-container`    | CSS selector for the carousel item container.                                                                                                                    |
| `carouselControlsSelector`         | `.carousel-control`           | CSS selector for carousel controls.                                                                                                                              |
| `carouselControlContainerSelector` | `.carousel-control-container` | CSS selector for carousel control container.                                                                                                                     |
| `carouselTabsSelector`             | `.carousel-tab`               | CSS selector for slide indicators.                                                                                                                               |
| `carouselTabContainerSelector`     | `.carousel-tab-container`     | CSS selector for the carousel tab container.                                                                                                                     |
| `autoplaySelector`                 | `.autoplay`                   | CSS selector for the autoplay button.                                                                                                                            |
| `nextSelector`                     | `.next`                       | CSS selector for the next button.                                                                                                                                |
| `previousSelector`                 | `.previous`                   | CSS selector for the previous button.                                                                                                                            |
| `activeClass`                      | `active`                      | Class names applied to the active slide and its indicator.                                                                                                       |
| `playClass`                        | `play`                        | Class names applied to the rotation button when it offers to start rotation.                                                                                     |
| `pauseClass`                       | `pause`                       | Class names applied to the rotation button when it offers to stop rotation.                                                                                      |
| `autoplay`                         | `true`                        | Start with automatic slide rotation enabled.                                                                                                                     |
| `pauseOnFocus`                     | `true`                        | Pause rotation when focus enters the carousel.                                                                                                                   |
| `resumeOnBlur`                     | `false`                       | Resume a focus pause when focus leaves the entire carousel. This requires `pauseOnFocus`.                                                                        |
| `pauseOnEnter`                     | `true`                        | Pause rotation when the pointer enters the carousel.                                                                                                             |
| `resumeOnLeave`                    | `true`                        | Resume a pointer pause when the pointer leaves the carousel. This requires `pauseOnEnter`.                                                                       |
| `automaticActivation`              | `true`                        | Activate a slide when its indicator receives focus.                                                                                                              |
| `transitionDelay`                  | `10000`                       | Time between automatic slide changes in milliseconds.                                                                                                            |
| `playText`                         | `Play`                        | Accessible label for the rotation button when it offers to start rotation.                                                                                       |
| `pauseText`                        | `Pause`                       | Accessible label for the rotation button when it offers to stop rotation.                                                                                        |
| `itemsPerPage`                     | `1`                           | Number of slides the carousel copies at each end when looping. Set slide widths in CSS to control how many slides are visible.                                   |
| `loop`                             | `true`                        | Wrap to the opposite end when navigating past the first or last slide. When disabled, navigation stays within those bounds and autoplay stops at the last slide. |
| `prefix`                           | `graupl-`                     | Prefix passed to the shared component class. Carousel currently generates no prefixed CSS custom properties or attributes.                                       |
| `key`                              | `null`                        | Key used to generate IDs. A `null` or empty key produces a random key.                                                                                           |
| `initializeClass`                  | `initializing`                | Class names applied during initialization. Class options accept a string, an array of class names, or `null` for no class.                                       |
| `initialize`                       | `false`                       | Initialize the instance when it is constructed. The generator defaults this to `true`.                                                                           |
