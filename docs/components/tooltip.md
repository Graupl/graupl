<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import generate from "../../packages/core/src/js/tooltip/generator.js";

  const exampleTooltips = computed(() => {
    return `
 <div class="tooltip">
  <span class="tooltip-description">Tooltips provide some extra
    information that can help users
    understand the context or functionality of an element.</span>
  <button type="button" class="tooltip-toggle"></button>
</div>
  `
  });
</script>

# Tooltips

<live-example :source-code="exampleTooltips" @mounted="generate()" @updated="generate()">
</live-example>

<br/>

The tooltip component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.tooltip` | The tooltip container. |
| `.tooltip-description` | The tooltip description element. |
| `.tooltip-toggle` | The tooltip button control. |
| `.show` | Modifier applied when the tooltip is shown. |
| `.hide` | Modifier applied when the tooltip is hidden. |

## .tooltips properties

These are the default values for the `.tooltips` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-tooltip-padding-x` | Value for tooltip padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-tooltip-padding-y` | Value for tooltip padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-tooltip-padding` | Value for tooltip padding. | `var(--graupl-tooltip-padding-y) var(--graupl-tooltip-padding-x)` |
| `--graupl-tooltip-display` | Value for tooltip display. | `inline` |
| `--graupl-tooltip-width` | Value for tooltip width. | `fit-content` |
| `--graupl-tooltip-background` | Value for tooltip background. | `var(--graupl-background)` |
| `--graupl-tooltip-color` | Value for tooltip color. | `var(--graupl-color)` |
| `--graupl-tooltip-border-color` | Value for tooltip border color. | `var(--graupl-tooltip-color)` |
| `--graupl-tooltip-border-top-left-radius` | Value for tooltip border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-tooltip-border-top-right-radius` | Value for tooltip border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-tooltip-border-bottom-left-radius` | Value for tooltip border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-tooltip-border-bottom-right-radius` | Value for tooltip border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-tooltip-border-radius` | Value for tooltip border radius. | `var(--graupl-tooltip-border-top-left-radius) var(--graupl-tooltip-border-top-right-radius) var(--graupl-tooltip-border-bottom-right-radius) var(--graupl-tooltip-border-bottom-left-radius)` |
| `--graupl-tooltip-border-top-width` | Value for tooltip border top width. | `var(--graupl-border-top-width)` |
| `--graupl-tooltip-border-right-width` | Value for tooltip border right width. | `var(--graupl-border-right-width)` |
| `--graupl-tooltip-border-bottom-width` | Value for tooltip border bottom width. | `var(--graupl-border-bottom-width)` |
| `--graupl-tooltip-border-left-width` | Value for tooltip border left width. | `var(--graupl-border-left-width)` |
| `--graupl-tooltip-border-width` | Value for tooltip border width. | `var(--graupl-tooltip-border-top-width) var(--graupl-tooltip-border-right-width) var(--graupl-tooltip-border-bottom-width) var(--graupl-tooltip-border-left-width)` |
| `--graupl-tooltip-border-top-style` | Value for tooltip border top style. | `var(--graupl-border-top-style)` |
| `--graupl-tooltip-border-right-style` | Value for tooltip border right style. | `var(--graupl-border-right-style)` |
| `--graupl-tooltip-border-bottom-style` | Value for tooltip border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-tooltip-border-left-style` | Value for tooltip border left style. | `var(--graupl-border-left-style)` |
| `--graupl-tooltip-border-style` | Value for tooltip border style. | `var(--graupl-tooltip-border-top-style) var(--graupl-tooltip-border-right-style) var(--graupl-tooltip-border-bottom-style) var(--graupl-tooltip-border-left-style)` |

## .tooltip-description properties

These are the default values for the `.tooltip-description` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-tooltip-description-width` | Value for tooltip description width. | `30ch` |
| `--graupl-tooltip-description-color` | Value for tooltip description color. | `var(--graupl-tooltip-color)` |
| `--graupl-tooltip-description-background` | Value for tooltip description background. | `var(--graupl-tooltip-background)` |
| `--graupl-tooltip-description-font-size` | Value for tooltip description font size. | `--graupl-tooltip-padding` |
| `--graupl-tooltip-description-font-weight` | Value for tooltip description font weight. | `var(--graupl-root-font-weight)` |
| `--graupl-tooltip-description-font-family` | Value for tooltip description font family. | `var(--graupl-root-font-family)` |
| `--graupl-tooltip-description-line-height` | Value for tooltip description line height. | `var(--graupl-root-line-height)` |
| `--graupl-tooltip-description-margin` | Value for tooltip description margin. | `0 0 0 0` |
| `--graupl-tooltip-description-padding-x` | Value for tooltip description padding horizontal. | `var(--graupl-spacer-3)` |
| `--graupl-tooltip-description-padding-y` | Value for tooltip description padding vertical. | `var(--graupl-spacer-2)` |
| `--graupl-tooltip-description-padding` | Value for tooltip description padding. | `var(--graupl-tooltip-description-padding-y) var(--graupl-tooltip-description-padding-x)` |
| `--graupl-tooltip-description-indent` | Value for tooltip description indent. | `calc(100% + var(--graupl-spacer-2))` |
| `--graupl-tooltip-description-top` | Value for tooltip description top inset. | `auto` |
| `--graupl-tooltip-description-right` | Value for tooltip description right inset. | `auto` |
| `--graupl-tooltip-description-bottom` | Value for tooltip description bottom inset. | `auto` |
| `--graupl-tooltip-description-left` | Value for tooltip description left inset. | `var(--graupl-tooltip-description-indent)` |
| `--graupl-tooltip-description-inset` | Value for tooltip description inset. | `var(--graupl-tooltip-description-top) var(--graupl-tooltip-description-right) var(--graupl-tooltip-description-bottom) var(--graupl-tooltip-description-left)` |
| `--graupl-tooltip-description-border-color` | Value for tooltip description border color. | `var(--graupl-tooltip-border-color)` |
| `--graupl-tooltip-description-border-top-left-radius` | Value for tooltip description border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-tooltip-description-border-top-right-radius` | Value for tooltip description border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-tooltip-description-border-bottom-left-radius` | Value for tooltip description border bottom left radius . | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-tooltip-description-border-bottom-right-radius` | Value for tooltip description border bottom right radi us. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-tooltip-description-border-radius` | Value for tooltip description border radius. | `var(--graupl-tooltip-description-border-top-left-radius) var(--graupl-tooltip-description-border-top-right-radius) var(--graupl-tooltip-description-border-bottom-right-radius) var(--graupl-tooltip-description-border-bottom-left-radius)` |
| `--graupl-tooltip-description-border-top-width` | Value for tooltip description border top width. | `var(--graupl-border-top-width)` |
| `--graupl-tooltip-description-border-right-width` | Value for tooltip description border right width. | `var(--graupl-border-right-width)` |
| `--graupl-tooltip-description-border-bottom-width` | Value for tooltip description border bottom width. | `var(--graupl-border-bottom-width)` |
| `--graupl-tooltip-description-border-left-width` | Value for tooltip description border left width. | `var(--graupl-border-left-width)` |
| `--graupl-tooltip-description-border-width` | Value for tooltip description border width. | `var(--graupl-tooltip-description-border-top-width) var(--graupl-tooltip-description-border-right-width) var(--graupl-tooltip-description-border-bottom-width) var(--graupl-tooltip-description-border-left-width)` |
| `--graupl-tooltip-description-border-top-style` | Value for tooltip description border top style. | `var(--graupl-border-top-style)` |
| `--graupl-tooltip-description-border-right-style` | Value for tooltip description border right style. | `var(--graupl-border-right-style)` |
| `--graupl-tooltip-description-border-bottom-style` | Value for tooltip description border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-tooltip-description-border-left-style` | Value for tooltip description border left style. | `var(--graupl-border-left-style)` |
| `--graupl-tooltip-description-border-style` | Value for tooltip description border style. | `var(--graupl-tooltip-description-border-top-style) var(--graupl-tooltip-description-border-right-style) var(--graupl-tooltip-description-border-bottom-style) var(--graupl-tooltip-description-border-left-style)` |

## .tooltip-toggle properties

These are the default values for the `.tooltip-toggle` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-tooltip-toggle-content` | Value for tooltip toggle content. | `"i"` |
| `--graupl-tooltip-toggle-font-family` | Value for tooltip toggle font family. | `serif` |
| `--graupl-tooltip-toggle-font-size` | Value for tooltip toggle font size. | `var(--graupl-font-size-sm)` |
| `--graupl-tooltip-toggle-font-weight` | Value for tooltip toggle font weight. | `var(--graupl-font-weight-bold)` |
| `--graupl-tooltip-toggle-padding-x` | Value for tooltip toggle padding horizontal. | `var(--graupl-spacer-1)` |
| `--graupl-tooltip-toggle-padding-y` | Value for tooltip toggle padding vertical. | `var(--graupl-spacer-1)` |
| `--graupl-tooltip-toggle-padding` | Value for tooltip toggle padding. | `var(--graupl-tooltip-toggle-padding-y) var(--graupl-tooltip-toggle-padding-x)` |
| `--graupl-tooltip-toggle-border-top-left-radius` | Value for tooltip toggle border top left radius. | `100vw` |
| `--graupl-tooltip-toggle-border-top-right-radius` | Value for tooltip toggle border top right radius. | `100vw` |
| `--graupl-tooltip-toggle-border-bottom-left-radius` | Value for tooltip toggle border bottom left radius. | `100vw` |
| `--graupl-tooltip-toggle-border-bottom-right-radius` | Value for tooltip toggle border bottom right radius. | `100vw` |
| `--graupl-tooltip-toggle-border-radius` | Value for tooltip toggle border radius. | `var(--graupl-tooltip-toggle-border-top-left-radius) var(--graupl-tooltip-toggle-border-top-right-radius) var(--graupl-tooltip-toggle-border-bottom-right-radius) var(--graupl-tooltip-toggle-border-bottom-left-radius)` |
| `--graupl-tooltip-toggle-background` | Value for tooltip toggle background. | `var(--graupl-tooltip-background)` |
| `--graupl-tooltip-toggle-visited-background` | Value for tooltip toggle visited background component. | `var(--graupl-tooltip-toggle-background)` |
| `--graupl-tooltip-toggle-focus-background` | Value for tooltip toggle focus background component. | `var(--graupl-tooltip-toggle-background)` |
| `--graupl-tooltip-toggle-hover-background` | Value for tooltip toggle hover background component. | `var(--graupl-tooltip-color)` |
| `--graupl-tooltip-toggle-active-background` | Value for tooltip toggle active background component. | `var(--graupl-tooltip-toggle-hover-background)` |
| `--graupl-tooltip-toggle-selected-background` | Value for tooltip toggle selected background component. | `var(--graupl-tooltip-toggle-hover-background)` |
| `--graupl-tooltip-toggle-disabled-background` | Value for tooltip toggle disabled background component. | `var(--graupl-tooltip-background)` |
| `--graupl-tooltip-toggle-color` | Value for tooltip toggle color. | `var(--graupl-tooltip-color)` |
| `--graupl-tooltip-toggle-visited-color` | Value for tooltip toggle visited color component. | `var(--graupl-tooltip-toggle-color)` |
| `--graupl-tooltip-toggle-focus-color` | Value for tooltip toggle focus color component. | `var(--graupl-tooltip-toggle-color)` |
| `--graupl-tooltip-toggle-hover-color` | Value for tooltip toggle hover color component. | `var(--graupl-tooltip-background)` |
| `--graupl-tooltip-toggle-active-color` | Value for tooltip toggle active color component. | `var(--graupl-tooltip-toggle-hover-color)` |
| `--graupl-tooltip-toggle-selected-color` | Value for tooltip toggle selected color component. | `var(--graupl-tooltip-toggle-hover-color)` |
| `--graupl-tooltip-toggle-disabled-color` | Value for tooltip toggle disabled color component. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-tooltip-toggle-border-color` | Value for tooltip toggle border color. | `var(--graupl-tooltip-border-color)` |
| `--graupl-tooltip-toggle-visited-border-color` | Value for tooltip toggle visited border color component. | `var(--graupl-tooltip-toggle-border-color)` |
| `--graupl-tooltip-toggle-focus-border-color` | Value for tooltip toggle focus border color component. | `var(--graupl-tooltip-toggle-border-color)` |
| `--graupl-tooltip-toggle-hover-border-color` | Value for tooltip toggle hover border color component. | `var(--graupl-tooltip-border-color)` |
| `--graupl-tooltip-toggle-active-border-color` | Value for tooltip toggle active border color component. | `var(--graupl-tooltip-toggle-hover-border-color)` |
| `--graupl-tooltip-toggle-selected-border-color` | Value for tooltip toggle selected border color component. | `var(--graupl-tooltip-toggle-hover-border-color)` |
| `--graupl-tooltip-toggle-disabled-border-color` | Value for tooltip toggle disabled border color component. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-tooltip-toggle-transform` | Value for tooltip toggle transform. | `none` |
| `--graupl-tooltip-toggle-visited-transform` | Value for tooltip toggle visited transform component. | `var(--graupl-tooltip-toggle-transform)` |
| `--graupl-tooltip-toggle-focus-transform` | Value for tooltip toggle focus transform component. | `var(--graupl-tooltip-toggle-transform)` |
| `--graupl-tooltip-toggle-hover-transform` | Value for tooltip toggle hover transform component. | `var(--graupl-tooltip-toggle-transform)` |
| `--graupl-tooltip-toggle-active-transform` | Value for tooltip toggle active transform component. | `none` |
| `--graupl-tooltip-toggle-selected-transform` | Value for tooltip toggle selected transform component. | `none` |
| `--graupl-tooltip-toggle-disabled-transform` | Value for tooltip toggle disabled transform component. | `none` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Default for selector base. | `"."` |
| `$modifier-selector-base` | Default for modifier selector base. | `"."` |
| `$generate-base-theme-map` | Default for generate base theme map. | `true` |
| `$themeable` | Default for themeable. | `false` |
| `$tooltip-selector-base` | Default for tooltip selector base. | `"."` |
| `$tooltip-selector` | Default for tooltip selector. | `"tooltip"` |
| `$tooltip-theme-selector-base` | Default for tooltip theme selector base. | `"."` |
| `$tooltip-theme-selector-prefix` | Default for tooltip theme selector prefix. | `""` |
| `$tooltip-toggle-selector-base` | Default for tooltip button selector base. | `"."` |
| `$tooltip-toggle-selector` | Default for tooltip button selector. | `"tooltip-toggle"` |
| `$tooltip-description-selector-base` | Default for tooltip description selector base. | `"."` |
| `$tooltip-description-selector` | Default for tooltip description selector. | `"tooltip-description"` |
| `$tooltip-hidden-selector-base` | Default for tooltip hidden selector base. | `"."` |
| `$tooltip-hidden-selector` | Default for tooltip hidden selector. | `"hide"` |
| `$tooltip-shown-selector-base` | Default for tooltip shown selector base. | `"."` |
| `$tooltip-shown-selector` | Default for tooltip shown selector. | `"show"` |
| `$tooltip-transitioning-selector-base` | Default for tooltip transitioning selector base. | `"."` |
| `$tooltip-transitioning-selector` | Default for tooltip transitioning selector. | `"transitioning"` |
| `$tooltip-theme-mappings` | Default for tooltip theme mappings. | `()` |
| `$tooltip-theme-map` | Default for tooltip theme map. | `()` |
| `$tooltip-toggle-initial-transform` | Default for tooltip toggle initial transform. | `none` |
| `$tooltip-toggle-final-transform` | Default for tooltip toggle final transform. | `none` |
| `$tooltip-toggle-disabled-transform` | Default for tooltip toggle disabled transform. | `$tooltip-toggle-initial-transform` |
| `$tooltip-display` | Default for tooltip display. | `inline` |
| `$tooltip-width` | Default for tooltip width. | `fit-content` |
| `$tooltip-description-width` | Default for tooltip description width. | `30ch` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
