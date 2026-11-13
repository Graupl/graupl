<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const content = ref("justify-content-start");
  const items = ref("justify-items-start");
  const self = ref("justify-self-auto");
  const square = "bordered border-primary-700 bg-primary-300 min-w-7 h-7";

  const exampleContent = computed(() => `<div class="display-grid gap-2 bordered border-dashed border-tertiary-700 ${content.value}"
  style="grid-template-columns: repeat(3, auto)">
  <div class="${square}"></div>
  <div class="${square}"></div>
  <div class="${square}"></div>
</div>`);

  const exampleItems = computed(() => `<div class="display-grid grid-cols-3 gap-2 bordered border-dashed border-tertiary-700 ${items.value}">
  <div class="${square}"></div>
  <div class="${square}"></div>
  <div class="${square}"></div>
</div>`);

  const exampleSelf = computed(() => `<div class="display-grid grid-cols-3 gap-2 bordered border-dashed border-tertiary-700 justify-items-start">
  <div class="${square}"></div>
  <div class="bordered border-tertiary-700 bg-tertiary-300 min-w-7 h-7 ${self.value}"></div>
  <div class="${square}"></div>
</div>`);
</script>

# Justification Utilities

The justification utilities provide a set of classes to adjust the `justify-content`, `justify-items`, and `justify-self` properties of elements.

## Justify Content

Use `justify-content-*` on a container to distribute extra space along the main axis in flex or the inline axis in grid. The example uses three auto-sized grid columns so you can move them together, space them apart, or stretch the columns.

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-content-normal` | justify-content | `normal` |
| `.justify-content-start` | justify-content | `flex-start` |
| `.justify-content-end` | justify-content | `flex-end` |
| `.justify-content-center` | justify-content | `center` |
| `.justify-content-between` | justify-content | `space-between` |
| `.justify-content-around` | justify-content | `space-around` |
| `.justify-content-evenly` | justify-content | `space-evenly` |
| `.justify-content-stretch` | justify-content | `stretch` |

<live-example :source-code="exampleContent" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-justify-content">Justify content class</label>
      <select id="select-justify-content" v-model="content">
        <option value="justify-content-normal">.justify-content-normal</option>
        <option value="justify-content-start">.justify-content-start</option>
        <option value="justify-content-end">.justify-content-end</option>
        <option value="justify-content-center">.justify-content-center</option>
        <option value="justify-content-between">.justify-content-between</option>
        <option value="justify-content-around">.justify-content-around</option>
        <option value="justify-content-evenly">.justify-content-evenly</option>
        <option value="justify-content-stretch">.justify-content-stretch</option>
      </select>
    </div>
  </template>
</live-example>


## Justify Items

Use `justify-items-*` on a grid container to align each item within its own grid cell. Each square moves within its column or stretches to fill it.

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-items-start` | justify-items | `start` |
| `.justify-items-end` | justify-items | `end` |
| `.justify-items-center` | justify-items | `center` |
| `.justify-items-stretch` | justify-items | `stretch` |

<live-example :source-code="exampleItems" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-justify-items">Justify items class</label>
      <select id="select-justify-items" v-model="items">
        <option value="justify-items-start">.justify-items-start</option>
        <option value="justify-items-end">.justify-items-end</option>
        <option value="justify-items-center">.justify-items-center</option>
        <option value="justify-items-stretch">.justify-items-stretch</option>
      </select>
    </div>
  </template>
</live-example>


## Justify Self

Use `justify-self-*` on a grid item to change its alignment within its cell. Only the pink item changes. Choose `.justify-self-auto` to use the container’s alignment.

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-self-auto` | justify-self | `auto` |
| `.justify-self-start` | justify-self | `start` |
| `.justify-self-end` | justify-self | `end` |
| `.justify-self-center` | justify-self | `center` |
| `.justify-self-stretch` | justify-self | `stretch` |

<live-example :source-code="exampleSelf" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-justify-self">Justify self class</label>
      <select id="select-justify-self" v-model="self">
        <option value="justify-self-auto">.justify-self-auto</option>
        <option value="justify-self-start">.justify-self-start</option>
        <option value="justify-self-end">.justify-self-end</option>
        <option value="justify-self-center">.justify-self-center</option>
        <option value="justify-self-stretch">.justify-self-stretch</option>
      </select>
    </div>
  </template>
</live-example>


## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/justification.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/justification.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/justification.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the justification utilities.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | Base selector for utility classes. | `"."` |
| `$selector-prefix` | The selector prefix for all utility classes. | `""` |
| `$selector-suffix` | The selector suffix for all utility classes. | `""` |
| `$selector-separator` | The selector separator for all utility classes. | `""` |
| `$use-important` | Appends `!important` to generated utility declarations. | `true` |
| `$generate-base-utilities` | Generates the base utility classes. | `true` |
| `$screen-aware` | Enables screen-aware utility variants. | `false` |
| `$theme-aware` | Enables theme-aware utility variants. | `false` |
| `$scheme-aware` | Enables scheme-aware utility variants. | `false` |
| `$state-aware` | Enables state-aware utility variants. | `false` |
| `$container-aware` | Enables container-aware utility variants. | `false` |
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

No responsive classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
