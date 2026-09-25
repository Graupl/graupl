<script setup>
  import { ref, computed, onMounted } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import generate from "../../packages/core/src/js/breadcrumb/generator.js";

  const exampleBreadcrumbs = computed(() => {
    return `
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a class="breadcrumb-link" href="#a">First Item</a>
    </li>
    <li class="breadcrumb-item">
      <button class="breadcrumb-toggle breadcrumb-link"
        aria-label="Show more breadcrumbs"
        id="breadcrumb-toggle-example"
        aria-expanded="true"
        aria-controls="breadcrumb-example"
        disabled="true"
      > ... </button>
    </li>
    <li class="breadcrumb-item">
      <a class="breadcrumb-link" href="#a">Second Item</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      Third Item
    </li>
  </ol>
    `;
  });
</script>

# Breadcrumbs

The breadcrumb component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.breadcrumb` | The breadcrumb container. |
| `.breadcrumb-item` | The breadcrumb item. |
| `.breadcrumb-link` | The breadcrumb link. |
| `.breadcrumb-toggle` | The breadcrumb toggle. |

<br/>

<live-example :source-code="exampleBreadcrumbs" @mounted="generate()" @updated="generate()" >
  <template #options>
  </template>
</live-example>

## .breadcrumb properties

These are the default values for the `.breadcrumb` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-breadcrumb-padding-x` | Horizontal padding for the breadcrumb container. | `var(--graupl-spacer-0)` |
| `--graupl-breadcrumb-padding-y` | Vertical padding for the breadcrumb container. | `var(--graupl-spacer-0)` |
| `--graupl-breadcrumb-padding` | Padding for the breadcrumb container. | `var(--graupl-breadcrumb-padding-y) var(--graupl-breadcrumb-padding-x)` |
| `--graupl-breadcrumb-margin-x` | Horizontal margin for the breadcrumb container. | `var(--graupl-spacer-0)` |
| `--graupl-breadcrumb-margin-y` | Vertical margin for the breadcrumb container. | `var(--graupl-spacer-0)` |
| `--graupl-breadcrumb-margin` | Margin for the breadcrumb container. | `var(--graupl-breadcrumb-margin-y) var(--graupl-breadcrumb-margin-x)` |
| `--graupl-breadcrumb-column-gap` | Horizontal gap for the breadcrumb container. | `var(--graupl-spacer-2)` |
| `--graupl-breadcrumb-row-gap` | Vertical gap for the breadcrumb container. | `var(--graupl-spacer-2)` |
| `--graupl-breadcrumb-gap` | Gap for the breadcrumb container. | `var(--graupl-breadcrumb-column-gap) var(--graupl-breadcrumb-row-gap)` |
| `--graupl-breadcrumb-background` | Background for the breadcrumb container. | `var(--graupl-background)` |
| `--graupl-breadcrumb-color` | Text color for the breadcrumb container. | `var(--graupl-color)` |
| `--graupl-breadcrumb-border-color` | Border color for the breadcrumb container. | `var(--graupl-breadcrumb-color)` |
| `--graupl-breadcrumb-border-top-left-radius` | Top-left border radius for the breadcrumb container. | `var(--graupl-border-top-left-radius)` |
| `--graupl-breadcrumb-border-top-right-radius` | Top-right border radius for the breadcrumb container. | `var(--graupl-border-top-right-radius)` |
| `--graupl-breadcrumb-border-bottom-left-radius` | Bottom-left border radius for the breadcrumb container. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-breadcrumb-border-bottom-right-radius` | Bottom-right border radius for the breadcrumb container. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-breadcrumb-border-radius` | Border radius for the breadcrumb container. | `var(--graupl-breadcrumb-border-top-left-radius) var(--graupl-breadcrumb-border-top-right-radius) var(--graupl-breadcrumb-border-bottom-right-radius) var(--graupl-breadcrumb-border-bottom-left-radius)` |
| `--graupl-breadcrumb-border-top-width` | Top border width for the breadcrumb container. | `0` |
| `--graupl-breadcrumb-border-right-width` | Right border width for the breadcrumb container. | `0` |
| `--graupl-breadcrumb-border-bottom-width` | Bottom border width for the breadcrumb container. | `0` |
| `--graupl-breadcrumb-border-left-width` | Left border width for the breadcrumb container. | `0` |
| `--graupl-breadcrumb-border-width` | Border width for the breadcrumb container. | `var(--graupl-breadcrumb-border-top-width) var(--graupl-breadcrumb-border-right-width) var(--graupl-breadcrumb-border-bottom-width) var(--graupl-breadcrumb-border-left-width)` |
| `--graupl-breadcrumb-border-top-style` | Top border style for the breadcrumb container. | `var(--graupl-border-top-style)` |
| `--graupl-breadcrumb-border-right-style` | Right border style for the breadcrumb container. | `var(--graupl-border-right-style)` |
| `--graupl-breadcrumb-border-bottom-style` | Bottom border style for the breadcrumb container. | `var(--graupl-border-bottom-style)` |
| `--graupl-breadcrumb-border-left-style` | Left border style for the breadcrumb container. | `var(--graupl-border-left-style)` |
| `--graupl-breadcrumb-border-style` | Border style for the breadcrumb container. | `var(--graupl-breadcrumb-border-top-style) var(--graupl-breadcrumb-border-right-style) var(--graupl-breadcrumb-border-bottom-style) var(--graupl-breadcrumb-border-left-style)` |

## .breadcrumb-item properties

These are the default values for the `.breadcrumb-item` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-breadcrumb-item-show-display` | Display for the breadcrumb item in the shown state. | `flex` |
| `--graupl-breadcrumb-item-hide-display` | Display for the breadcrumb item in the hidden state. | `none` |
| `--graupl-breadcrumb-item-transitioning-display` | Display for the breadcrumb item in the transitioning state. | `flex` |
| `--graupl-breadcrumb-item-display` | Display value for the breadcrumb item. | `flex` |
| `--graupl-breadcrumb-item-show-opacity` | Opacity for the breadcrumb item in the shown state. | `1` |
| `--graupl-breadcrumb-item-hide-opacity` | Opacity for the breadcrumb item in the hidden state. | `0` |
| `--graupl-breadcrumb-item-transitioning-opacity` | Opacity for the breadcrumb item in the transitioning state. | `0` |
| `--graupl-breadcrumb-item-opacity` | Opacity for the breadcrumb item. | `var(--graupl-breadcrumb-item-show-opacity)` |
| `--graupl-breadcrumb-item-transition-duration` | Transition duration for the breadcrumb item. | `var(--graupl-transition-duration-fast)` |
| `--graupl-breadcrumb-item-transition-timing-function` | Transition timing function for the breadcrumb item. | `var(--graupl-transition-timing-function)` |
| `--graupl-breadcrumb-item-transition` | Transition applied to the breadcrumb item. | `opacity var(--graupl-breadcrumb-item-transition-duration) var(--graupl-breadcrumb-item-transition-timing-function)` |
| `--graupl-breadcrumb-item-transition-reduced-motion` | Transition used for the breadcrumb item when reduced motion is enabled. | `none` |
| `--graupl-breadcrumb-item-padding-x` | Horizontal padding for the breadcrumb item. | `0` |
| `--graupl-breadcrumb-item-padding-y` | Vertical padding for the breadcrumb item. | `0` |
| `--graupl-breadcrumb-item-padding` | Padding for the breadcrumb item. | `var(--graupl-breadcrumb-item-padding-y) var(--graupl-breadcrumb-item-padding-x)` |
| `--graupl-breadcrumb-item-column-gap` | Horizontal gap for the breadcrumb item. | `var(--graupl-breadcrumb-column-gap)` |
| `--graupl-breadcrumb-item-row-gap` | Vertical gap for the breadcrumb item. | `var(--graupl-breadcrumb-row-gap)` |
| `--graupl-breadcrumb-item-gap` | Gap for the breadcrumb item. | `var(--graupl-breadcrumb-item-column-gap) var(--graupl-breadcrumb-item-row-gap)` |
| `--graupl-breadcrumb-item-color` | Text color for the breadcrumb item. | `var(--graupl-breadcrumb-color)` |
| `--graupl-breadcrumb-item-background` | Background for the breadcrumb item. | `var(--graupl-breadcrumb-background)` |
| `--graupl-breadcrumb-item-visited-color` | Text color for the breadcrumb item in the visited state. | `var(--graupl-breadcrumb-item-color)` |
| `--graupl-breadcrumb-item-focus-color` | Text color for the breadcrumb item in the focus state. | `var(--graupl-breadcrumb-item-color)` |
| `--graupl-breadcrumb-item-hover-color` | Text color for the breadcrumb item in the hover state. | `var(--graupl-breadcrumb-item-background)` |
| `--graupl-breadcrumb-item-active-color` | Text color for the breadcrumb item in the active state. | `var(--graupl-breadcrumb-item-hover-color)` |
| `--graupl-breadcrumb-item-disabled-color` | Text color for the breadcrumb item in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-item-visited-background` | Background for the breadcrumb item in the visited state. | `var(--graupl-breadcrumb-item-background)` |
| `--graupl-breadcrumb-item-focus-background` | Background for the breadcrumb item in the focus state. | `var(--graupl-breadcrumb-item-background)` |
| `--graupl-breadcrumb-item-hover-background` | Background for the breadcrumb item in the hover state. | `var(--graupl-breadcrumb-item-color)` |
| `--graupl-breadcrumb-item-active-background` | Background for the breadcrumb item in the active state. | `var(--graupl-breadcrumb-item-hover-background)` |
| `--graupl-breadcrumb-item-disabled-background` | Background for the breadcrumb item in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-item-border-color` | Border color for the breadcrumb item. | `var(--graupl-breadcrumb-item-color)` |
| `--graupl-breadcrumb-item-visited-border-color` | Border color for the breadcrumb item in the visited state. | `var(--graupl-breadcrumb-item-border-color)` |
| `--graupl-breadcrumb-item-focus-border-color` | Border color for the breadcrumb item in the focus state. | `var(--graupl-breadcrumb-item-border-color)` |
| `--graupl-breadcrumb-item-hover-border-color` | Border color for the breadcrumb item in the hover state. | `var(--graupl-breadcrumb-item-color)` |
| `--graupl-breadcrumb-item-active-border-color` | Border color for the breadcrumb item in the active state. | `var(--graupl-breadcrumb-item-hover-border-color)` |
| `--graupl-breadcrumb-item-disabled-border-color` | Border color for the breadcrumb item in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-item-border-top-left-radius` | Top-left border radius for the breadcrumb item. | `var(--graupl-border-top-left-radius)` |
| `--graupl-breadcrumb-item-border-top-right-radius` | Top-right border radius for the breadcrumb item. | `var(--graupl-border-top-right-radius)` |
| `--graupl-breadcrumb-item-border-bottom-left-radius` | Bottom-left border radius for the breadcrumb item. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-breadcrumb-item-border-bottom-right-radius` | Bottom-right border radius for the breadcrumb item. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-breadcrumb-item-border-radius` | Border radius for the breadcrumb item. | `var(--graupl-breadcrumb-item-border-top-left-radius) var(--graupl-breadcrumb-item-border-top-right-radius) var(--graupl-breadcrumb-item-border-bottom-right-radius) var(--graupl-breadcrumb-item-border-bottom-left-radius)` |
| `--graupl-breadcrumb-item-border-top-width` | Top border width for the breadcrumb item. | `0` |
| `--graupl-breadcrumb-item-border-right-width` | Right border width for the breadcrumb item. | `0` |
| `--graupl-breadcrumb-item-border-bottom-width` | Bottom border width for the breadcrumb item. | `0` |
| `--graupl-breadcrumb-item-border-left-width` | Left border width for the breadcrumb item. | `0` |
| `--graupl-breadcrumb-item-border-width` | Border width for the breadcrumb item. | `var(--graupl-breadcrumb-item-border-top-width) var(--graupl-breadcrumb-item-border-right-width) var(--graupl-breadcrumb-item-border-bottom-width) var(--graupl-breadcrumb-item-border-left-width)` |
| `--graupl-breadcrumb-item-border-top-style` | Top border style for the breadcrumb item. | `var(--graupl-border-top-style)` |
| `--graupl-breadcrumb-item-border-right-style` | Right border style for the breadcrumb item. | `var(--graupl-border-right-style)` |
| `--graupl-breadcrumb-item-border-bottom-style` | Bottom border style for the breadcrumb item. | `var(--graupl-border-bottom-style)` |
| `--graupl-breadcrumb-item-border-left-style` | Left border style for the breadcrumb item. | `var(--graupl-border-left-style)` |
| `--graupl-breadcrumb-item-border-style` | Border style for the breadcrumb item. | `var(--graupl-breadcrumb-item-border-top-style) var(--graupl-breadcrumb-item-border-right-style) var(--graupl-breadcrumb-item-border-bottom-style) var(--graupl-breadcrumb-item-border-left-style)` |
| `--graupl-breadcrumb-item-separator` | Separator content rendered between breadcrumb items. | `"'/'"` |

## .breadcrumb-link properties

These are the default values for the `.breadcrumb-link` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-breadcrumb-link-padding-x` | Horizontal padding for the breadcrumb link. | `0` |
| `--graupl-breadcrumb-link-padding-y` | Vertical padding for the breadcrumb link. | `0` |
| `--graupl-breadcrumb-link-padding` | Padding for the breadcrumb link. | `var(--graupl-breadcrumb-link-padding-y) var(--graupl-breadcrumb-link-padding-x)` |
| `--graupl-breadcrumb-link-transition-duration` | Transition duration for the breadcrumb link. | `var(--graupl-transition-duration-fast)` |
| `--graupl-breadcrumb-link-transition-timing-function` | Transition timing function for the breadcrumb link. | `var(--graupl-transition-timing-function)` |
| `--graupl-breadcrumb-link-transition` | Transition applied to the breadcrumb link. | `transform var(--graupl-breadcrumb-link-transition-duration) var(--graupl-breadcrumb-link-transition-timing-function)` |
| `--graupl-breadcrumb-link-transition-reduced-motion` | Transition used for the breadcrumb link when reduced motion is enabled. | `none` |
| `--graupl-breadcrumb-link-transform` | Transform for the breadcrumb link. | `none` |
| `--graupl-breadcrumb-link-visited-transform` | Transform for the breadcrumb link in the visited state. | `var(--graupl-breadcrumb-link-transform)` |
| `--graupl-breadcrumb-link-focus-transform` | Transform for the breadcrumb link in the focus state. | `var(--graupl-breadcrumb-link-transform)` |
| `--graupl-breadcrumb-link-hover-transform` | Transform for the breadcrumb link in the hover state. | `var(--graupl-breadcrumb-link-transform)` |
| `--graupl-breadcrumb-link-active-transform` | Transform for the breadcrumb link in the active state. | `none` |
| `--graupl-breadcrumb-link-disabled-transform` | Transform for the breadcrumb link in the disabled state. | `none` |
| `--graupl-breadcrumb-link-color` | Text color for the breadcrumb link. | `var(--graupl-breadcrumb-item-color)` |
| `--graupl-breadcrumb-link-background` | Background for the breadcrumb link. | `var(--graupl-breadcrumb-item-background)` |
| `--graupl-breadcrumb-link-visited-color` | Text color for the breadcrumb link in the visited state. | `var(--graupl-breadcrumb-link-color)` |
| `--graupl-breadcrumb-link-focus-color` | Text color for the breadcrumb link in the focus state. | `var(--graupl-breadcrumb-link-color)` |
| `--graupl-breadcrumb-link-hover-color` | Text color for the breadcrumb link in the hover state. | `var(--graupl-breadcrumb-link-background)` |
| `--graupl-breadcrumb-link-active-color` | Text color for the breadcrumb link in the active state. | `var(--graupl-breadcrumb-link-hover-color)` |
| `--graupl-breadcrumb-link-disabled-color` | Text color for the breadcrumb link in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-link-visited-background` | Background for the breadcrumb link in the visited state. | `var(--graupl-breadcrumb-link-background)` |
| `--graupl-breadcrumb-link-focus-background` | Background for the breadcrumb link in the focus state. | `var(--graupl-breadcrumb-link-background)` |
| `--graupl-breadcrumb-link-hover-background` | Background for the breadcrumb link in the hover state. | `var(--graupl-breadcrumb-link-color)` |
| `--graupl-breadcrumb-link-active-background` | Background for the breadcrumb link in the active state. | `var(--graupl-breadcrumb-link-hover-background)` |
| `--graupl-breadcrumb-link-disabled-background` | Background for the breadcrumb link in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-link-border-color` | Border color for the breadcrumb link. | `var(--graupl-breadcrumb-link-color)` |
| `--graupl-breadcrumb-link-visited-border-color` | Border color for the breadcrumb link in the visited state. | `var(--graupl-breadcrumb-link-border-color)` |
| `--graupl-breadcrumb-link-focus-border-color` | Border color for the breadcrumb link in the focus state. | `var(--graupl-breadcrumb-link-border-color)` |
| `--graupl-breadcrumb-link-hover-border-color` | Border color for the breadcrumb link in the hover state. | `var(--graupl-breadcrumb-link-color)` |
| `--graupl-breadcrumb-link-active-border-color` | Border color for the breadcrumb link in the active state. | `var(--graupl-breadcrumb-link-hover-border-color)` |
| `--graupl-breadcrumb-link-disabled-border-color` | Border color for the breadcrumb link in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-link-border-top-left-radius` | Top-left border radius for the breadcrumb link. | `var(--graupl-border-top-left-radius)` |
| `--graupl-breadcrumb-link-border-top-right-radius` | Top-right border radius for the breadcrumb link. | `var(--graupl-border-top-right-radius)` |
| `--graupl-breadcrumb-link-border-bottom-left-radius` | Bottom-left border radius for the breadcrumb link. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-breadcrumb-link-border-bottom-right-radius` | Bottom-right border radius for the breadcrumb link. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-breadcrumb-link-border-radius` | Border radius for the breadcrumb link. | `var(--graupl-breadcrumb-link-border-top-left-radius) var(--graupl-breadcrumb-link-border-top-right-radius) var(--graupl-breadcrumb-link-border-bottom-right-radius) var(--graupl-breadcrumb-link-border-bottom-left-radius)` |
| `--graupl-breadcrumb-link-border-top-width` | Top border width for the breadcrumb link. | `0` |
| `--graupl-breadcrumb-link-border-right-width` | Right border width for the breadcrumb link. | `0` |
| `--graupl-breadcrumb-link-border-bottom-width` | Bottom border width for the breadcrumb link. | `0` |
| `--graupl-breadcrumb-link-border-left-width` | Left border width for the breadcrumb link. | `0` |
| `--graupl-breadcrumb-link-border-width` | Border width for the breadcrumb link. | `var(--graupl-breadcrumb-link-border-top-width) var(--graupl-breadcrumb-link-border-right-width) var(--graupl-breadcrumb-link-border-bottom-width) var(--graupl-breadcrumb-link-border-left-width)` |
| `--graupl-breadcrumb-link-border-top-style` | Top border style for the breadcrumb link. | `var(--graupl-border-top-style)` |
| `--graupl-breadcrumb-link-border-right-style` | Right border style for the breadcrumb link. | `var(--graupl-border-right-style)` |
| `--graupl-breadcrumb-link-border-bottom-style` | Bottom border style for the breadcrumb link. | `var(--graupl-border-bottom-style)` |
| `--graupl-breadcrumb-link-border-left-style` | Left border style for the breadcrumb link. | `var(--graupl-border-left-style)` |
| `--graupl-breadcrumb-link-border-style` | Border style for the breadcrumb link. | `var(--graupl-breadcrumb-link-border-top-style) var(--graupl-breadcrumb-link-border-right-style) var(--graupl-breadcrumb-link-border-bottom-style) var(--graupl-breadcrumb-link-border-left-style)` |

## .breadcrumb-toggle properties

These are the default values for the `.breadcrumb-toggle` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-breadcrumb-toggle-padding-x` | Horizontal padding for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-padding-x)` |
| `--graupl-breadcrumb-toggle-padding-y` | Vertical padding for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-padding-y)` |
| `--graupl-breadcrumb-toggle-padding` | Padding for the breadcrumb toggle. | `var(--graupl-breadcrumb-toggle-padding-y) var(--graupl-breadcrumb-toggle-padding-x)` |
| `--graupl-breadcrumb-toggle-transition-duration` | Transition duration for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-transition-duration)` |
| `--graupl-breadcrumb-toggle-transition-timing-function` | Transition timing function for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-transition-timing-function)` |
| `--graupl-breadcrumb-toggle-transition` | Transition applied to the breadcrumb toggle. | `transform var(--graupl-breadcrumb-toggle-transition-duration) var(--graupl-breadcrumb-toggle-transition-timing-function)` |
| `--graupl-breadcrumb-toggle-transition-reduced-motion` | Transition used for the breadcrumb toggle when reduced motion is enabled. | `var(--graupl-breadcrumb-link-transition-reduced-motion)` |
| `--graupl-breadcrumb-toggle-transform` | Transform for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-transform)` |
| `--graupl-breadcrumb-toggle-visited-transform` | Transform for the breadcrumb toggle in the visited state. | `var(--graupl-breadcrumb-toggle-transform)` |
| `--graupl-breadcrumb-toggle-focus-transform` | Transform for the breadcrumb toggle in the focus state. | `var(--graupl-breadcrumb-toggle-transform)` |
| `--graupl-breadcrumb-toggle-hover-transform` | Transform for the breadcrumb toggle in the hover state. | `var(--graupl-breadcrumb-toggle-transform)` |
| `--graupl-breadcrumb-toggle-active-transform` | Transform for the breadcrumb toggle in the active state. | `var(--graupl-breadcrumb-link-active-transform)` |
| `--graupl-breadcrumb-toggle-disabled-transform` | Transform for the breadcrumb toggle in the disabled state. | `var(--graupl-breadcrumb-link-disabled-transform)` |
| `--graupl-breadcrumb-toggle-color` | Text color for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-color)` |
| `--graupl-breadcrumb-toggle-background` | Background for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-background)` |
| `--graupl-breadcrumb-toggle-visited-color` | Text color for the breadcrumb toggle in the visited state. | `var(--graupl-breadcrumb-toggle-color)` |
| `--graupl-breadcrumb-toggle-focus-color` | Text color for the breadcrumb toggle in the focus state. | `var(--graupl-breadcrumb-toggle-color)` |
| `--graupl-breadcrumb-toggle-hover-color` | Text color for the breadcrumb toggle in the hover state. | `var(--graupl-breadcrumb-toggle-background)` |
| `--graupl-breadcrumb-toggle-active-color` | Text color for the breadcrumb toggle in the active state. | `var(--graupl-breadcrumb-toggle-hover-color)` |
| `--graupl-breadcrumb-toggle-disabled-color` | Text color for the breadcrumb toggle in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-toggle-visited-background` | Background for the breadcrumb toggle in the visited state. | `var(--graupl-breadcrumb-toggle-background)` |
| `--graupl-breadcrumb-toggle-focus-background` | Background for the breadcrumb toggle in the focus state. | `var(--graupl-breadcrumb-toggle-background)` |
| `--graupl-breadcrumb-toggle-hover-background` | Background for the breadcrumb toggle in the hover state. | `var(--graupl-breadcrumb-toggle-color)` |
| `--graupl-breadcrumb-toggle-active-background` | Background for the breadcrumb toggle in the active state. | `var(--graupl-breadcrumb-toggle-hover-background)` |
| `--graupl-breadcrumb-toggle-disabled-background` | Background for the breadcrumb toggle in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-toggle-border-color` | Border color for the breadcrumb toggle. | `var(--graupl-breadcrumb-toggle-color)` |
| `--graupl-breadcrumb-toggle-visited-border-color` | Border color for the breadcrumb toggle in the visited state. | `var(--graupl-breadcrumb-toggle-border-color)` |
| `--graupl-breadcrumb-toggle-focus-border-color` | Border color for the breadcrumb toggle in the focus state. | `var(--graupl-breadcrumb-toggle-border-color)` |
| `--graupl-breadcrumb-toggle-hover-border-color` | Border color for the breadcrumb toggle in the hover state. | `var(--graupl-breadcrumb-toggle-color)` |
| `--graupl-breadcrumb-toggle-active-border-color` | Border color for the breadcrumb toggle in the active state. | `var(--graupl-breadcrumb-toggle-hover-border-color)` |
| `--graupl-breadcrumb-toggle-disabled-border-color` | Border color for the breadcrumb toggle in the disabled state. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-breadcrumb-toggle-border-top-left-radius` | Top-left border radius for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-top-left-radius)` |
| `--graupl-breadcrumb-toggle-border-top-right-radius` | Top-right border radius for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-top-right-radius)` |
| `--graupl-breadcrumb-toggle-border-bottom-left-radius` | Bottom-left border radius for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-bottom-left-radius)` |
| `--graupl-breadcrumb-toggle-border-bottom-right-radius` | Bottom-right border radius for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-bottom-right-radius)` |
| `--graupl-breadcrumb-toggle-border-radius` | Border radius for the breadcrumb toggle. | `var(--graupl-breadcrumb-toggle-border-top-left-radius) var(--graupl-breadcrumb-toggle-border-top-right-radius) var(--graupl-breadcrumb-toggle-border-bottom-right-radius) var(--graupl-breadcrumb-toggle-border-bottom-left-radius)` |
| `--graupl-breadcrumb-toggle-border-top-width` | Top border width for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-top-width)` |
| `--graupl-breadcrumb-toggle-border-right-width` | Right border width for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-right-width)` |
| `--graupl-breadcrumb-toggle-border-bottom-width` | Bottom border width for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-bottom-width)` |
| `--graupl-breadcrumb-toggle-border-left-width` | Left border width for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-left-width)` |
| `--graupl-breadcrumb-toggle-border-width` | Border width for the breadcrumb toggle. | `var(--graupl-breadcrumb-toggle-border-top-width) var(--graupl-breadcrumb-toggle-border-right-width) var(--graupl-breadcrumb-toggle-border-bottom-width) var(--graupl-breadcrumb-toggle-border-left-width)` |
| `--graupl-breadcrumb-toggle-border-top-style` | Top border style for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-top-style)` |
| `--graupl-breadcrumb-toggle-border-right-style` | Right border style for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-right-style)` |
| `--graupl-breadcrumb-toggle-border-bottom-style` | Bottom border style for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-bottom-style)` |
| `--graupl-breadcrumb-toggle-border-left-style` | Left border style for the breadcrumb toggle. | `var(--graupl-breadcrumb-link-border-left-style)` |
| `--graupl-breadcrumb-toggle-border-style` | Border style for the breadcrumb toggle. | `var(--graupl-breadcrumb-toggle-border-top-style) var(--graupl-breadcrumb-toggle-border-right-style) var(--graupl-breadcrumb-toggle-border-bottom-style) var(--graupl-breadcrumb-toggle-border-left-style)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Selector base for the component. | `"."` |
| `$modifier-selector-base` | Selector base for component modifiers. | `"."` |
| `$generate-base-theme-map` | Flag to generate the base theme map. | `true` |
| `$themeable` | Flag to generate theme modifiers. | `false` |
| `$breadcrumb-selector-base` | Selector base for the breadcrumb container. | `"."` |
| `$breadcrumb-selector` | Selector for the breadcrumb container. | `"breadcrumb"` |
| `$breadcrumb-theme-selector-base` | Selector base for theme modifiers. | `"."` |
| `$breadcrumb-theme-selector-prefix` | Selector prefix for theme modifiers. | `""` |
| `$breadcrumb-item-selector-base` | Selector base for breadcrumb items. | `"."` |
| `$breadcrumb-item-selector` | Selector for breadcrumb items. | `"breadcrumb-item"` |
| `$breadcrumb-item-separator-pseudo-selector` | Pseudo selector for breadcrumb separators. | `"after"` |
| `$breadcrumb-item-separator` | Content used as the breadcrumb separator. | `"'/'"` |
| `$breadcrumb-toggle-selector-base` | Selector base for breadcrumb toggles. | `"."` |
| `$breadcrumb-toggle-selector` | Selector for breadcrumb toggles. | `"breadcrumb-toggle"` |
| `$breadcrumb-link-selector-base` | Selector base for breadcrumb links. | `"."` |
| `$breadcrumb-link-selector` | Selector for breadcrumb links. | `"breadcrumb-link"` |
| `$breadcrumb-open-selector-base` | Selector base for the open breadcrumb modifier. | `"."` |
| `$breadcrumb-open-selector` | Selector for the open breadcrumb modifier. | `"show"` |
| `$breadcrumb-close-selector-base` | Selector base for the closed breadcrumb modifier. | `"."` |
| `$breadcrumb-close-selector` | Selector for the closed breadcrumb modifier. | `"hide"` |
| `$breadcrumb-transition-selector-base` | Selector base for the transitioning modifier. | `"."` |
| `$breadcrumb-transition-selector` | Selector for the transitioning modifier. | `"transitioning"` |
| `$breadcrumb-link-initial-transform` | Initial transform for breadcrumb links. | `none` |
| `$breadcrumb-link-final-transform` | Final transform for breadcrumb links. | `none` |
| `$breadcrumb-link-disabled-transform` | Disabled transform for breadcrumb links. | `none` |
| `$breadcrumb-item-show-display` | Display for shown breadcrumb items. | `flex` |
| `$breadcrumb-item-hide-display` | Display for hidden breadcrumb items. | `none` |
| `$breadcrumb-item-transitioning-display` | Display for transitioning breadcrumb items. | `flex` |
| `$breadcrumb-item-show-opacity` | Opacity for shown breadcrumb items. | `1` |
| `$breadcrumb-item-hide-opacity` | Opacity for hidden breadcrumb items. | `0` |
| `$breadcrumb-item-transitioning-opacity` | Opacity for transitioning breadcrumb items. | `0` |
| `$breadcrumb-item-transform` | Base transform for breadcrumb items. | `none` |
| `$breadcrumb-item-hover-transform` | Hover transform for breadcrumb items. | `none` |
| `$breadcrumb-theme-mappings` | Map of properties/shades for breadcrumb themes. | `()` |
| `$breadcrumb-theme-map` | Expanded map of properties/colors/shades. | `()` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::


