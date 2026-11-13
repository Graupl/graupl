<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const display = ref("display-block");
  const squareClasses = "display-inline-block bordered border-primary-700 bg-primary-300 p-5 w-auto h-auto m-3";
  const exampleDisplay = computed(() => `<div class="overflow-auto">
  <div class="${display.value} bs-fit-content gap-2 bordered border-dashed border-tertiary-500 grid-cols-3">
${Array.from({ length: 6 }, () => `    <div class="${squareClasses}"></div>`).join("\n")}
  </div>
  <div class="display-inline-block bordered border-dashed border-primary-700">
    <div class="display-inline-block bordered border-dashed border-tertiary-700 bg-tertiary-300 p-5 w-auto h-auto m-3"></div>
    <div class="display-inline-block bordered border-dashed border-tertiary-700 bg-tertiary-300 p-5 w-auto h-auto m-3"></div>
  </div>
</div>`);
</script>

# Display Utilities

The display utilities provide a set of classes to change how elements participate in the layout.

Use `.display-none` to remove the outlined container and its items from the layout. Use [`.visibility-hidden`](./visibility.md) to hide them while keeping their space.

## Display

| Class Name | Property | Value |
| --- | --- | --- |
| `.display-block` | display | `block` |
| `.display-inline-block` | display | `inline-block` |
| `.display-inline` | display | `inline` |
| `.display-flex` | display | `flex` |
| `.display-inline-flex` | display | `inline-flex` |
| `.display-grid` | display | `grid` |
| `.display-inline-grid` | display | `inline-grid` |
| `.display-flow-root` | display | `flow-root` |
| `.display-none` | display | `none` |
| `.display-contents` | display | `contents` |
| `.display-list-item` | display | `list-item` |

Change the display class on the outlined container to see how it lays out its six items and affects the position of the box with pink squares.

<live-example :source-code="exampleDisplay" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-display">Display class</label>
      <select id="select-display" v-model="display">
        <option value="display-block">.display-block</option>
        <option value="display-inline-block">.display-inline-block</option>
        <option value="display-inline">.display-inline</option>
        <option value="display-flex">.display-flex</option>
        <option value="display-inline-flex">.display-inline-flex</option>
        <option value="display-grid">.display-grid</option>
        <option value="display-inline-grid">.display-inline-grid</option>
        <option value="display-flow-root">.display-flow-root</option>
        <option value="display-none">.display-none</option>
        <option value="display-contents">.display-contents</option>
        <option value="display-list-item">.display-list-item</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/display.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/display.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/display.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the display utilities.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | Base selector for utility classes. | `"."` |
| `$selector-prefix` | The selector prefix for all utility classes. | `""` |
| `$selector-suffix` | The selector suffix for all utility classes. | `""` |
| `$selector-separator` | The selector separator for all utility classes. | `""` |
| `$use-important` | Appends `!important` to generated utility declarations. | `true` |
| `$generate-base-utilities` | Generates the base utility classes. | `true` |
| `$screen-aware` | Enables screen-aware utility variants. | `true` |
| `$theme-aware` | Enables theme-aware utility variants. | `false` |
| `$scheme-aware` | Enables scheme-aware utility variants. | `false` |
| `$state-aware` | Enables state-aware utility variants. | `false` |
| `$container-aware` | Enables container-aware utility variants. | `true` |
| `$screen-aware-selector-prefix` | Prefix to the screen-aware portion of utility selectors. | `""` |
| `$screen-aware-selector-suffix` | Suffix to the screen-aware portion of utility selectors. | `""` |
| `$screen-aware-selector-separator` | Separator inserted for screen-aware utility selectors. | `"\\:"` |
| `$theme-aware-selector-prefix` | Prefix to the theme-aware portion of utility selectors. | `""` |
| `$theme-aware-selector-suffix` | Suffix to the theme-aware portion of utility selectors. | `"-theme"` |
| `$theme-aware-selector-separator` | Separator inserted for theme-aware utility selectors. | `"\\:"` |
| `$scheme-aware-selector-prefix` | Prefix to the scheme-aware portion of utility selectors. | `""` |
| `$scheme-aware-selector-suffix` | Suffix to the scheme-aware portion of utility selectors. | `"-mode"` |
| `$scheme-aware-selector-separator` | Separator inserted for scheme-aware utility selectors. | `"\\:"` |
| `$state-aware-selector-prefix` | Prefix to the state-aware portion of utility selectors. | `""` |
| `$state-aware-selector-suffix` | Suffix to the state-aware portion of utility selectors. | `""` |
| `$state-aware-selector-separator` | Separator inserted for state-aware utility selectors. | `"\\:"` |
| `$container-aware-selector-prefix` | Prefix to the container-aware portion of utility selectors. | `"cq\\:"` |
| `$container-aware-selector-suffix` | Suffix to the container-aware portion of utility selectors. | `""` |
| `$container-aware-selector-separator` | Separator inserted for container-aware utility selectors. | `"\\:"` |
| `$utility-properties` | Map of utility properties. | `()` |
| `$utility-values` | Map of utility values. | `()` |
| `$utility-map` | Map of utility property/value pairs. | `()` |

## Responsive Variants

Screen-aware classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
