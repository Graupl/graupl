<script setup>
  import { computed, ref } from "vue";
  import { withBase } from "vitepress";
  import LiveExample from "../vue-components/LiveExample.vue";

  const layout = ref("");
  const containerWidth = ref(100);

  function renderCard(modifier = "") {
    const classes = modifier ? `card ${modifier}` : "card";

    return `<div class="${classes}">
  <div class="card-image">
    <img src="${withBase("/card-trail-map.svg")}" alt="" width="480" height="240">
  </div>
  <div class="card-content">
    <div class="card-header">
      <h3 class="card-title">Wyvern Ridge</h3>
    </div>
    <div class="card-body">
      <p>Follow the marked trail to the old watchtower below the wyvern nests.</p>
    </div>
    <div class="card-footer">
      <small>Two hours on foot</small>
    </div>
  </div>
</div>`;
  }

  const basicCard = renderCard();
  const layoutCard = computed(() => renderCard(layout.value));
  const responsiveCard = computed(() => `
<div class="container-type-inline" style="width: ${containerWidth.value}%">
  ${renderCard("horizontal").replaceAll("\n", "\n  ")}
</div>`);
</script>

# Cards

The card component provides a set of classes to group related content, such as an image, title, and description, in one place.

## Base classes

Inside a `.card`, use `.card-image` for the image and `.card-content` for the text and actions. Inside `.card-content`, put the main text in `.card-body`. You can add a `.card-header` above it for a title styled with `.card-title`, and a `.card-footer` below it for a follow-up action or extra details.

<live-example :source-code="basicCard" />

## Layouts

By default, the image sits above the content. Add `.bottom` to put it below, or use `.top` to explicitly place it above.

Add `.horizontal` to put the image to the left of the content. You can also use `.left` or `.right` alongside `.horizontal` to choose a side. The `.inverse` modifier puts the image below the content on a vertical card or to the right on a horizontal card.

<live-example :source-code="layoutCard" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-card-layout">Card layout</label>
      <select id="select-card-layout" v-model="layout">
        <option value="">Default</option>
        <option value="top">Image above content</option>
        <option value="bottom">Image below content</option>
        <option value="horizontal left">Image on the left</option>
        <option value="horizontal right">Image on the right</option>
        <option value="inverse">Vertical, inverted</option>
        <option value="horizontal inverse">Horizontal, inverted</option>
      </select>
    </div>
  </template>
</live-example>

### Horizontal cards in narrow containers

Use `.container-type-inline` on a wrapper to let the card respond to the space inside it. By default, horizontal cards stack vertically in containers up to 767px wide. The image moves above the content unless you add `.bottom` or `.inverse`.

<live-example :source-code="responsiveCard" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="card-container-width">Container width ({{ containerWidth }}%)</label>
      <input id="card-container-width" v-model.number="containerWidth" type="range" min="50" max="100">
    </div>
  </template>
</live-example>

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the card module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants.

## Custom Properties

The following custom properties can be used to customize the card component:

| Property                                   | Description                                                                    | Default Value                                                                                                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-card-padding-x`                  | The horizontal padding of the card.                                            | `var(--graupl-spacer-0)`                                                                                                                                                          |
| `--graupl-card-padding-y`                  | The vertical padding of the card.                                              | `var(--graupl-spacer-0)`                                                                                                                                                          |
| `--graupl-card-padding`                    | The padding of the card.                                                       | `var(--graupl-card-padding-y) var(--graupl-card-padding-x)`                                                                                                                       |
| `--graupl-card-transition`                 | The transition of the card.                                                    | `transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)`                                                                                       |
| `--graupl-card-transition-reduced-motion`  | The card transition when reduced motion is enabled.                            | `none`                                                                                                                                                                            |
| `--graupl-card-transform`                  | The transform of the card.                                                     | `none`                                                                                                                                                                            |
| `--graupl-card-hover-transform`            | The hover transform of the card.                                               | `none`                                                                                                                                                                            |
| `--graupl-card-column-gap`                 | The column gap of the card.                                                    | `var(--graupl-spacer-0)`                                                                                                                                                          |
| `--graupl-card-row-gap`                    | The row gap of the card.                                                       | `var(--graupl-spacer-0)`                                                                                                                                                          |
| `--graupl-card-gap`                        | The gap between rows and columns in the card.                                  | `var(--graupl-card-row-gap) var(--graupl-card-column-gap)`                                                                                                                        |
| `--graupl-card-background`                 | The background of the card.                                                    | `var(--graupl-background)`                                                                                                                                                        |
| `--graupl-card-color`                      | The text color of the card. Typography inside the card inherits it by default. | `var(--graupl-color)`                                                                                                                                                             |
| `--graupl-card-border-color`               | The border color of the card.                                                  | `var(--graupl-card-color)`                                                                                                                                                        |
| `--graupl-card-border-top-left-radius`     | The border top left radius of the card.                                        | `var(--graupl-border-top-left-radius)`                                                                                                                                            |
| `--graupl-card-border-top-right-radius`    | The border top right radius of the card.                                       | `var(--graupl-border-top-right-radius)`                                                                                                                                           |
| `--graupl-card-border-bottom-right-radius` | The border bottom right radius of the card.                                    | `var(--graupl-border-bottom-right-radius)`                                                                                                                                        |
| `--graupl-card-border-bottom-left-radius`  | The border bottom left radius of the card.                                     | `var(--graupl-border-bottom-left-radius)`                                                                                                                                         |
| `--graupl-card-border-radius`              | The border radius of the card.                                                 | `var(--graupl-card-border-top-left-radius) var(--graupl-card-border-top-right-radius) var(--graupl-card-border-bottom-right-radius) var(--graupl-card-border-bottom-left-radius)` |
| `--graupl-card-border-top-width`           | The border top width of the card.                                              | `var(--graupl-border-top-width)`                                                                                                                                                  |
| `--graupl-card-border-right-width`         | The border right width of the card.                                            | `var(--graupl-border-right-width)`                                                                                                                                                |
| `--graupl-card-border-bottom-width`        | The border bottom width of the card.                                           | `var(--graupl-border-bottom-width)`                                                                                                                                               |
| `--graupl-card-border-left-width`          | The border left width of the card.                                             | `var(--graupl-border-left-width)`                                                                                                                                                 |
| `--graupl-card-border-width`               | The border width of the card.                                                  | `var(--graupl-card-border-top-width) var(--graupl-card-border-right-width) var(--graupl-card-border-bottom-width) var(--graupl-card-border-left-width)`                           |
| `--graupl-card-border-top-style`           | The border top style of the card.                                              | `var(--graupl-border-top-style)`                                                                                                                                                  |
| `--graupl-card-border-right-style`         | The border right style of the card.                                            | `var(--graupl-border-right-style)`                                                                                                                                                |
| `--graupl-card-border-bottom-style`        | The border bottom style of the card.                                           | `var(--graupl-border-bottom-style)`                                                                                                                                               |
| `--graupl-card-border-left-style`          | The border left style of the card.                                             | `var(--graupl-border-left-style)`                                                                                                                                                 |
| `--graupl-card-border-style`               | The border style of the card.                                                  | `var(--graupl-card-border-top-style) var(--graupl-card-border-right-style) var(--graupl-card-border-bottom-style) var(--graupl-card-border-left-style)`                           |
| `--graupl-card-image-ratio`                | The size of the image track in a vertical card.                                | `auto`                                                                                                                                                                            |
| `--graupl-horizontal-card-image-ratio`     | The size of the image track in a horizontal card.                              | `2fr`                                                                                                                                                                             |
| `--graupl-card-image-padding-x`            | The horizontal padding of the card image.                                      | `var(--graupl-spacer-0)`                                                                                                                                                          |
| `--graupl-card-image-padding-y`            | The vertical padding of the card image.                                        | `var(--graupl-spacer-0)`                                                                                                                                                          |
| `--graupl-card-image-padding`              | The padding of the card image.                                                 | `var(--graupl-card-image-padding-y) var(--graupl-card-image-padding-x)`                                                                                                           |
| `--graupl-card-content-ratio`              | The size of the content track in a vertical card.                              | `1fr`                                                                                                                                                                             |
| `--graupl-horizontal-card-content-ratio`   | The size of the content track in a horizontal card.                            | `3fr`                                                                                                                                                                             |
| `--graupl-card-content-padding-x`          | The horizontal padding of the card content.                                    | `var(--graupl-spacer-5)`                                                                                                                                                          |
| `--graupl-card-content-padding-y`          | The vertical padding of the card content.                                      | `var(--graupl-spacer-3)`                                                                                                                                                          |
| `--graupl-card-content-padding`            | The padding of the card content.                                               | `var(--graupl-card-content-padding-y) var(--graupl-card-content-padding-x)`                                                                                                       |
| `--graupl-card-content-column-gap`         | The column gap of the card content.                                            | `var(--graupl-spacer-0)`                                                                                                                                                          |
| `--graupl-card-content-row-gap`            | The row gap of the card content.                                               | `var(--graupl-spacer-3)`                                                                                                                                                          |
| `--graupl-card-content-gap`                | The gap between rows and columns in the card content.                          | `var(--graupl-card-content-row-gap) var(--graupl-card-content-column-gap)`                                                                                                        |
| `--graupl-card-header-padding-x`           | The horizontal padding of the card header.                                     | `0`                                                                                                                                                                               |
| `--graupl-card-header-padding-y`           | The vertical padding of the card header.                                       | `0`                                                                                                                                                                               |
| `--graupl-card-header-padding`             | The padding of the card header.                                                | `var(--graupl-card-header-padding-y) var(--graupl-card-header-padding-x)`                                                                                                         |
| `--graupl-card-body-padding-x`             | The horizontal padding of the card body.                                       | `0`                                                                                                                                                                               |
| `--graupl-card-body-padding-y`             | The vertical padding of the card body.                                         | `0`                                                                                                                                                                               |
| `--graupl-card-body-padding`               | The padding of the card body.                                                  | `var(--graupl-card-body-padding-y) var(--graupl-card-body-padding-x)`                                                                                                             |
| `--graupl-card-footer-padding-x`           | The horizontal padding of the card footer.                                     | `0`                                                                                                                                                                               |
| `--graupl-card-footer-padding-y`           | The vertical padding of the card footer.                                       | `0`                                                                                                                                                                               |
| `--graupl-card-footer-padding`             | The padding of the card footer.                                                | `var(--graupl-card-footer-padding-y) var(--graupl-card-footer-padding-x)`                                                                                                         |
| `--graupl-card-title-color`                | The color of the card title.                                                   | `var(--graupl-card-color)`                                                                                                                                                        |
| `--graupl-card-title-font-size`            | The font size of the card title.                                               | `var(--graupl-h4-font-size)`                                                                                                                                                      |
| `--graupl-card-title-font-weight`          | The font weight of the card title.                                             | `var(--graupl-h4-font-weight)`                                                                                                                                                    |
| `--graupl-card-title-font-family`          | The font family of the card title.                                             | `var(--graupl-h4-font-family)`                                                                                                                                                    |
| `--graupl-card-title-line-height`          | The line height of the card title.                                             | `var(--graupl-h4-line-height)`                                                                                                                                                    |

## Sass variables

The following Sass variables can be used to customize the generation of the card component:

| Variable                               | Description                                                                           | Default Value                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `$selector-base`                       | The selector base for the component.                                                  | `"."`                                                    |
| `$modifier-selector-base`              | The selector base for component modifiers.                                            | `"."`                                                    |
| `$generate-base-theme-map`             | Whether to include the default card theme mappings.                                   | `true`                                                   |
| `$themeable`                           | Whether to generate theme variants for cards.                                         | `false`                                                  |
| `$force-vertical-cards`                | Whether to stack horizontal cards in narrow containers.                               | `true`                                                   |
| `$card-selector-base`                  | The selector base for the card.                                                       | `"."`                                                    |
| `$card-selector`                       | The selector for the card.                                                            | `"card"`                                                 |
| `$card-theme-selector-base`            | The selector base for card theme variants.                                            | `"."`                                                    |
| `$card-theme-selector-prefix`          | The selector prefix for card theme variants.                                          | `""`                                                     |
| `$card-image-selector-base`            | The selector base for the card image.                                                 | `"."`                                                    |
| `$card-image-selector`                 | The selector for the card image.                                                      | `"card-image"`                                           |
| `$card-image-element-selector-base`    | The selector base for the image inside the card image wrapper.                        | `""`                                                     |
| `$card-image-element-selector`         | The selector for the image inside the card image wrapper.                             | `"img"`                                                  |
| `$card-content-selector-base`          | The selector base for the card content.                                               | `"."`                                                    |
| `$card-content-selector`               | The selector for the card content.                                                    | `"card-content"`                                         |
| `$card-body-selector-base`             | The selector base for the card body.                                                  | `"."`                                                    |
| `$card-body-selector`                  | The selector for the card body.                                                       | `"card-body"`                                            |
| `$card-header-selector-base`           | The selector base for the card header.                                                | `"."`                                                    |
| `$card-header-selector`                | The selector for the card header.                                                     | `"card-header"`                                          |
| `$card-footer-selector-base`           | The selector base for the card footer.                                                | `"."`                                                    |
| `$card-footer-selector`                | The selector for the card footer.                                                     | `"card-footer"`                                          |
| `$card-title-selector-base`            | The selector base for the card title.                                                 | `"."`                                                    |
| `$card-title-selector`                 | The selector for the card title.                                                      | `"card-title"`                                           |
| `$horizontal-card-selector-base`       | The selector base for the horizontal card.                                            | `"."`                                                    |
| `$horizontal-card-selector`            | The selector for the horizontal card.                                                 | `"horizontal"`                                           |
| `$horizontal-card-left-selector-base`  | The selector base for the horizontal card left.                                       | `"."`                                                    |
| `$horizontal-card-left-selector`       | The selector for the horizontal card left.                                            | `"left"`                                                 |
| `$horizontal-card-right-selector-base` | The selector base for the horizontal card right.                                      | `"."`                                                    |
| `$horizontal-card-right-selector`      | The selector for the horizontal card right.                                           | `"right"`                                                |
| `$vertical-card-top-selector-base`     | The selector base for the vertical card top.                                          | `"."`                                                    |
| `$vertical-card-top-selector`          | The selector for the vertical card top.                                               | `"top"`                                                  |
| `$vertical-card-bottom-selector-base`  | The selector base for the vertical card bottom.                                       | `"."`                                                    |
| `$vertical-card-bottom-selector`       | The selector for the vertical card bottom.                                            | `"bottom"`                                               |
| `$inverse-card-selector-base`          | The selector base for the inverse card.                                               | `"."`                                                    |
| `$inverse-card-selector`               | The selector for the inverse card.                                                    | `"inverse"`                                              |
| `$card-transform`                      | The default transform of the card.                                                    | `none`                                                   |
| `$card-hover-transform`                | The transform of the card on hover.                                                   | `none`                                                   |
| `$card-content-ratio`                  | The default size of the content track in a vertical card.                             | `1fr`                                                    |
| `$card-image-ratio`                    | The default size of the image track in a vertical card.                               | `auto`                                                   |
| `$horizontal-card-content-ratio`       | The default size of the content track in a horizontal card.                           | `3fr`                                                    |
| `$horizontal-card-image-ratio`         | The default size of the image track in a horizontal card.                             | `2fr`                                                    |
| `$card-theme-mappings`                 | A map of properties and color shades used to generate all card variants.              | `map.merge($-card-theme-mappings, $card-theme-mappings)` |
| `$card-theme-map`                      | A map of all properties, colors, and color shades used to generate all card variants. | `map.deep-merge($-card-theme-map, $card-theme-map)`      |
