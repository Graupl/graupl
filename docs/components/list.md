<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const exampleLists = computed(() => {
    return `
<ul class="list">
  <li class="list-item">
    <a href="#">List item 1</a>
  </li>
  <li class="list-item">List item 2</li>
  <li class="list-item">
    <a href="#" class="stretched">List item 3</a>
  </li>
</ul>
    `
  });
</script>

# Lists

<live-example :source-code="exampleLists"></live-example>

<br/>

The list component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.list` | The list container. |
| `.list-item` | The list item. |

## .list properties

These are the default values for the `.list` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-list-padding-x` | Value for list padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-list-padding-y` | Value for list padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-list-padding` | Value for list padding. | `var(--graupl-list-padding-y) var(--graupl-list-padding-x)` |
| `--graupl-list-margin-x` | Value for list margin horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-list-margin-y` | Value for list margin vertical. | `var(--graupl-spacer-0)` |
| `--graupl-list-margin` | Value for list margin. | `var(--graupl-list-margin-y) var(--graupl-list-margin-x)` |
| `--graupl-list-column-gap` | Value for list column gap. | `var(--graupl-spacer-2)` |
| `--graupl-list-row-gap` | Value for list row gap. | `var(--graupl-spacer-2)` |
| `--graupl-list-gap` | Value for list gap. | `var(--graupl-list-column-gap) var(--graupl-list-row-gap)` |
| `--graupl-list-background` | Value for list background. | `var(--graupl-background)` |
| `--graupl-list-color` | Value for list color. | `var(--graupl-color)` |
| `--graupl-list-border-color` | Value for list border color. | `var(--graupl-list-color)` |
| `--graupl-list-border-top-left-radius` | Value for list border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-list-border-top-right-radius` | Value for list border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-list-border-bottom-left-radius` | Value for list border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-list-border-bottom-right-radius` | Value for list border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-list-border-radius` | Value for list border radius. | `var(--graupl-list-border-top-left-radius) var(--graupl-list-border-top-right-radius) var(--graupl-list-border-bottom-right-radius) var(--graupl-list-border-bottom-left-radius)` |
| `--graupl-list-border-top-width` | Value for list border top width. | `0` |
| `--graupl-list-border-right-width` | Value for list border right width. | `0` |
| `--graupl-list-border-bottom-width` | Value for list border bottom width. | `0` |
| `--graupl-list-border-left-width` | Value for list border left width. | `0` |
| `--graupl-list-border-width` | Value for list border width. | `var(--graupl-list-border-top-width) var(--graupl-list-border-right-width) var(--graupl-list-border-bottom-width) var(--graupl-list-border-left-width)` |
| `--graupl-list-border-top-style` | Value for list border top style. | `var(--graupl-border-top-style)` |
| `--graupl-list-border-right-style` | Value for list border right style. | `var(--graupl-border-right-style)` |
| `--graupl-list-border-bottom-style` | Value for list border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-list-border-left-style` | Value for list border left style. | `var(--graupl-border-left-style)` |
| `--graupl-list-border-style` | Value for list border style. | `var(--graupl-list-border-top-style) var(--graupl-list-border-right-style) var(--graupl-list-border-bottom-style) var(--graupl-list-border-left-style)` |

## .list-item properties

These are the default values for the `.list` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-list-item-padding-x` | Value for list item padding horizontal. | `var(--graupl-spacer-5)` |
| `--graupl-list-item-padding-y` | Value for list item padding vertical. | `var(--graupl-spacer-3)` |
| `--graupl-list-item-padding` | Value for list item padding. | `var(--graupl-list-item-padding-y) var(--graupl-list-item-padding-x)` |
| `--graupl-list-item-transition` | Value for list item transition. | `transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)` |
| `--graupl-list-item-transition-reduced-motion` | Value for list item transition reduced motion. | `none` |
| `--graupl-list-item-transform` | Value for list item transform. | `none` |
| `--graupl-list-item-hover-transform` | Value for list item hover transform. | `none` |
| `--graupl-list-item-background` | Value for list item background. | `var(--graupl-background)` |
| `--graupl-list-item-color` | Value for list item color. | `var(--graupl-color)` |
| `--graupl-list-item-border-color` | Value for list item border color. | `var(--graupl-list-item-color)` |
| `--graupl-list-item-border-top-left-radius` | Value for list item border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-list-item-border-top-right-radius` | Value for list item border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-list-item-border-bottom-left-radius` | Value for list item border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-list-item-border-bottom-right-radius` | Value for list item border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-list-item-border-radius` | Value for list item border radius. | `var(--graupl-list-item-border-top-left-radius) var(--graupl-list-item-border-top-right-radius) var(--graupl-list-item-border-bottom-right-radius) var(--graupl-list-item-border-bottom-left-radius)` |
| `--graupl-list-item-border-top-width` | Value for list item border top width. | `var(--graupl-border-top-width)` |
| `--graupl-list-item-border-right-width` | Value for list item border right width. | `var(--graupl-border-right-width)` |
| `--graupl-list-item-border-bottom-width` | Value for list item border bottom width. | `var(--graupl-border-bottom-width)` |
| `--graupl-list-item-border-left-width` | Value for list item border left width. | `var(--graupl-border-left-width)` |
| `--graupl-list-item-border-width` | Value for list item border width. | `var(--graupl-list-item-border-top-width) var(--graupl-list-item-border-right-width) var(--graupl-list-item-border-bottom-width) var(--graupl-list-item-border-left-width)` |
| `--graupl-list-item-border-top-style` | Value for list item border top style. | `var(--graupl-border-top-style)` |
| `--graupl-list-item-border-right-style` | Value for list item border right style. | `var(--graupl-border-right-style)` |
| `--graupl-list-item-border-bottom-style` | Value for list item border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-list-item-border-left-style` | Value for list item border left style. | `var(--graupl-border-left-style)` |
| `--graupl-list-item-border-style` | Value for list item border style. | `var(--graupl-list-item-border-top-style) var(--graupl-list-item-border-right-style) var(--graupl-list-item-border-bottom-style) var(--graupl-list-item-border-left-style)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Default for selector base. | `"."` |
| `$modifier-selector-base` | Default for modifier selector base. | `"."` |
| `$generate-base-theme-map` | Default for generate base theme map. | `true` |
| `$themeable` | Default for themeable. | `false` |
| `$list-selector-base` | Default for list selector base. | `"."` |
| `$list-selector` | Default for list selector. | `"list"` |
| `$list-theme-selector-base` | Default for list theme selector base. | `"."` |
| `$list-theme-selector-prefix` | Default for list theme selector prefix. | `""` |
| `$list-item-selector-base` | Default for list item selector base. | `"."` |
| `$list-item-selector` | Default for list item selector. | `"list-item"` |
| `$list-item-transform` | Default for list item transform. | `none` |
| `$list-item-hover-transform` | Default for list item hover transform. | `none` |
| `$list-theme-mappings` | Default for list theme mappings. | `map.merge($-list-theme-mappings, $list-theme-mappings)` |
| `$list-theme-map` | Default for list theme map. | `map.deep-merge($-list-theme-map, $list-theme-map)` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
