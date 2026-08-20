<script setup>
  import { ref, computed, onMounted } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const layout = ref("vertical bottom");

  const exampleCard = computed(() => {

    const layoutClasses = [
      layout.value,
    ].filter(c => c !== null).join(" ");

    return `
  <div class="card ${layoutClasses}">
    <div class="card-image">
      <img src="https://picsum.photos/1000/400?random=1"
        alt="Card image" />
    </div>
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">Title</h3>
      </div>
      <div class="card-body">
        <p>This is some text that describes the card.</p>
      </div>
      <div class="card-footer">
        <a class="button stretched" href="#">Card Action</a>
      </div>
    </div>
  </div>
        `;
  });
</script>

# Cards


The card component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.card` | The card container. |
| `.card-image` | The card image wrapper. |
| `.card-content` | The card content wrapper. |
| `.card-body` | The main body region. |
| `.card-header` | The header region. |
| `.card-footer` | The footer region. |
| `.card-title` | The title element.|
| `.horizontal` | A modifier to use a horizontal layout for the card. |
| `.left` | A modifier to layout the image on the left in a horizontal layout. |
| `.right` | A modifier to layout the image on the right in a horizontal layout. |
| `.top` | A modifier to layout the image on the top in a vertical layout. |
| `.bottom` | A modifier to layout the image on the bottom in a vertical layout. |
| `.inverse` | A modifier to invert the image/content layouting. |

<br />

<live-example :source-code="exampleCard" :key="layout">
  <template #options>
    <div class="input-group">
      <label for="layout">Card Layout Properties</label>
      <select id="layout" v-model="layout">
        <option value="vertical bottom">Vertical Card, Bottom Image</option>
        <option value="vertical top">Vertical Card, Top Image</option>
        <option value="vertical inverse">Vertical Card, Inverse Image</option>
        <option value="horizontal right">Horizontal Card, Right Image</option>
        <option value="horizontal left">Horizontal Card, Left Image</option>
        <option value="horizontal inverse">Horizontal Card, Inverse Image</option>
      </select>
    </div>
  </template>
</live-example>

## .card custom properties

| Class Name | Property | Value |
| --- | --- | --- |
| `--graupl-card-padding-x` | Value for card padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-card-padding-y` | Value for card padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-card-padding` | Value for card padding. | `var(--graupl-card-padding-y) var(--graupl-card-padding-x)` |
| `--graupl-card-transition` | Value for card transition. | `transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)` |
| `--graupl-card-transition-reduced-motion` | Value for card transition reduced motion. | `none` |
| `--graupl-card-transform` | Value for card transform. | `none` |
| `--graupl-card-hover-transform` | Value for card hover transform. | `none` |
| `--graupl-card-column-gap` | Value for card column gap. | `var(--graupl-spacer-0)` |
| `--graupl-card-row-gap` | Value for card row gap. | `var(--graupl-spacer-0)` |
| `--graupl-card-gap` | Value for card gap. | `var(--graupl-card-column-gap) var(--graupl-card-row-gap)` |
| `--graupl-card-background` | Value for card background. | `var(--graupl-background)` |
| `--graupl-card-color` | Value for card color. | `var(--graupl-color)` |
| `--graupl-card-border-color` | Value for card border color. | `var(--graupl-card-color)` |
| `--graupl-card-border-top-left-radius` | Value for card border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-card-border-top-right-radius` | Value for card border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-card-border-bottom-right-radius` | Value for card border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-card-border-bottom-left-radius` | Value for card border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-card-border-radius` | Value for card border radius. | `var(--graupl-card-border-top-left-radius) var(--graupl-card-border-top-right-radius) var(--graupl-card-border-bottom-right-radius) var(--graupl-card-border-bottom-left-radius)` |
| `--graupl-card-border-top-width` | Value for card border top width. | `var(--graupl-border-top-width)` |
| `--graupl-card-border-right-width` | Value for card border right width. | `var(--graupl-border-right-width)` |
| `--graupl-card-border-bottom-width` | Value for card border bottom width. | `var(--graupl-border-bottom-width)` |
| `--graupl-card-border-left-width` | Value for card border left width. | `var(--graupl-border-left-width)` |
| `--graupl-card-border-width` | Value for card border width. | `var(--graupl-card-border-top-width) var(--graupl-card-border-right-width) var(--graupl-card-border-bottom-width) var(--graupl-card-border-left-width)` |
| `--graupl-card-border-top-style` | Value for card border top style. | `var(--graupl-border-top-style)` |
| `--graupl-card-border-right-style` | Value for card border right style. | `var(--graupl-border-right-style)` |
| `--graupl-card-border-bottom-style` | Value for card border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-card-border-left-style` | Value for card border left style. | `var(--graupl-border-left-style)` |
| `--graupl-card-border-style` | Value for card border style. | `var(--graupl-card-border-top-style) var(--graupl-card-border-right-style) var(--graupl-card-border-bottom-style) var(--graupl-card-border-left-style)` |

## .card-image custom properties

| Class Name | Property | Value |
| --- | --- | --- |
| `--graupl-card-image-ratio` | Value for card image ratio. | `auto` |
| `--graupl-horizontal-card-image-ratio` | Value for card horizontal card image ratio. | `2fr` |
| `--graupl-card-image-padding-x` | Value for card image padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-card-image-padding-y` | Value for card image padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-card-image-padding` | Value for card image padding. | `var(--graupl-card-image-padding-y) var(--graupl-card-image-padding-x)` |

## .card-content custom properties

| Class Name | Property | Value |
| --- | --- | --- |
| `--graupl-card-content-ratio` | Value for card content ratio. | `1fr` |
| `--graupl-horizontal-card-content-ratio` | Value for card horizontal card content ratio. | `3fr` |
| `--graupl-card-content-padding-x` | Value for card content padding horizontal. | `var(--graupl-spacer-5)` |
| `--graupl-card-content-padding-y` | Value for card content padding vertical. | `var(--graupl-spacer-3)` |
| `--graupl-card-content-padding` | Value for card content padding. | `var(--graupl-card-content-padding-y) var(--graupl-card-content-padding-x)` |
| `--graupl-card-content-column-gap` | Value for card content column gap. | `var(--graupl-spacer-0)` |
| `--graupl-card-content-row-gap` | Value for card content row gap. | `var(--graupl-spacer-3)` |
| `--graupl-card-content-gap` | Value for card content gap. | `var(--graupl-card-content-column-gap) var(--graupl-card-content-row-gap)` |

## .card-title custom properties

| Class Name | Property | Value |
| --- | --- | --- |
| `--graupl-card-title-color` | Value for card title color. | `var(--graupl-card-color)` |
| `--graupl-card-title-font-size` | Value for card title font size. | `var(--graupl-h4-font-size)` |
| `--graupl-card-title-font-weight` | Value for card title font weight. | `var(--graupl-h4-font-weight)` |
| `--graupl-card-title-font-family` | Value for card title font family. | `var(--graupl-h4-font-family)` |
| `--graupl-card-title-line-height` | Value for card title line height. | `var(--graupl-h4-line-height)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | Default for selector base. | `"."` |
| `$modifier-selector-base` | Default for modifier selector base. | `"."` |
| `$generate-base-theme-map` | Default for generate base theme map. | `true` |
| `$themeable` | Default for themeable. | `false` |
| `$force-vertical-cards` | Default for force vertical cards. | `true` |
| `$card-selector-base` | Default for card selector base. | `"."` |
| `$card-selector` | Default for card selector. | `"card"` |
| `$card-theme-selector-base` | Default for card theme selector base. | `"."` |
| `$card-theme-selector-prefix` | Default for card theme selector prefix. | `""` |
| `$card-image-selector-base` | Default for card image selector base. | `"."` |
| `$card-image-selector` | Default for card image selector. | `"card-image"` |
| `$card-content-selector-base` | Default for card content selector base. | `"."` |
| `$card-content-selector` | Default for card content selector. | `"card-content"` |
| `$card-body-selector-base` | Default for card body selector base. | `"."` |
| `$card-body-selector` | Default for card body selector. | `"card-body"` |
| `$card-header-selector-base` | Default for card header selector base. | `"."` |
| `$card-header-selector` | Default for card header selector. | `"card-header"` |
| `$card-footer-selector-base` | Default for card footer selector base. | `"."` |
| `$card-footer-selector` | Default for card footer selector. | `"card-footer"` |
| `$card-title-selector-base` | Default for card title selector base. | `"."` |
| `$card-title-selector` | Default for card title selector. | `"card-title"` |
| `$horizontal-card-selector-base` | Default for horizontal card selector base. | `"."` |
| `$horizontal-card-selector` | Default for horizontal card selector. | `"horizontal"` |
| `$horizontal-card-left-selector-base` | Default for horizontal card left selector base. | `"."` |
| `$horizontal-card-left-selector` | Default for horizontal card left selector. | `"left"` |
| `$horizontal-card-right-selector-base` | Default for horizontal card right selector base. | `"."` |
| `$horizontal-card-right-selector` | Default for horizontal card right selector. | `"right"` |
| `$vertical-card-top-selector-base` | Default for vertical card top selector base. | `"."` |
| `$vertical-card-top-selector` | Default for vertical card top selector. | `"top"` |
| `$vertical-card-bottom-selector-base` | Default for vertical card bottom selector base. | `"."` |
| `$vertical-card-bottom-selector` | Default for vertical card bottom selector. | `"bottom"` |
| `$inverse-card-selector-base` | Default for inverse card selector base. | `"."` |
| `$inverse-card-selector` | Default for inverse card selector. | `"inverse"` |
| `$card-transform` | Default for card transform. | `none` |
| `$card-hover-transform` | Default for card hover transform. | `none` |
| `$card-content-ratio` | Default for card content ratio. | `1fr` |
| `$card-image-ratio` | Default for card image ratio. | `auto` |
| `$horizontal-card-content-ratio` | Default for horizontal card content ratio. | `3fr` |
| `$horizontal-card-image-ratio` | Default for horizontal card image ratio. | `2fr` |
| `$card-item-content-transform` | Default for card item content transform. | `translateY(-100%)` |
| `$card-item-content-open-transform` | Default for card item content open transform. | `translateY(0)` |
| `$card-theme-mappings` | Default for card theme mappings. | `map.merge($-card-theme-mappings, $card-theme-mappings)` |
| `$card-theme-map` | Default for card theme map. | `map.deep-merge($-card-theme-map, $card-theme-map)` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
