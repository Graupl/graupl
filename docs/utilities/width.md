<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const parentWidth = ref(75);
  const width = ref("w-full");
  const minWidth = ref("");
  const maxWidth = ref("max-w-half");
  const exampleWidth = computed(() => {
    const classes = [width.value, minWidth.value, maxWidth.value].filter(Boolean).join(" ");

    return `<div class="bordered border-tertiary-700 border-dashed" style="width: ${parentWidth.value}%">
  <div class="bordered border-primary-700 bg-primary-300 text-primary-900 p-2 ${classes}">Guild supplies</div>
</div>`;
  });
</script>

# Width Utilities

The width utilities provide classes for setting an element’s width with `w-*`. Add a `min-w-*` or `max-w-*` class to limit how narrow or wide it can get. Percentage widths use the parent’s width. For sizing along the direction text runs, see [Inline Size](./inline-size.md).

<live-example :source-code="exampleWidth" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="width-example-parent">Parent width ({{ parentWidth }}%)</label>
      <input id="width-example-parent" type="range" min="25" max="100" v-model.number="parentWidth">
    </div>
    <div class="input-group">
      <label for="width-example-width">Width</label>
      <select id="width-example-width" v-model="width">
        <option value="">None</option>
        <option value="w-auto">.w-auto</option>
        <option value="w-fit-content">.w-fit-content</option>
        <option value="w-max-content">.w-max-content</option>
        <option value="w-min-content">.w-min-content</option>
        <option value="w-stretch">.w-stretch</option>
        <option value="w-full">.w-full</option>
        <option value="w-quarter">.w-quarter</option>
        <option value="w-half">.w-half</option>
        <option value="w-three-quarters">.w-three-quarters</option>
        <option value="w-third">.w-third</option>
        <option value="w-two-thirds">.w-two-thirds</option>
        <option value="w-half-screen">.w-half-screen</option>
        <option value="w-third-screen">.w-third-screen</option>
        <option value="w-two-thirds-screen">.w-two-thirds-screen</option>
        <option value="w-quarter-screen">.w-quarter-screen</option>
        <option value="w-three-quarters-screen">.w-three-quarters-screen</option>
        <option value="w-full-screen">.w-full-screen</option>
        <option value="w-0">.w-0</option>
        <option value="w-1">.w-1</option>
        <option value="w-2">.w-2</option>
        <option value="w-3">.w-3</option>
        <option value="w-4">.w-4</option>
        <option value="w-5">.w-5</option>
        <option value="w-6">.w-6</option>
        <option value="w-7">.w-7</option>
        <option value="w-8">.w-8</option>
        <option value="w-9">.w-9</option>
        <option value="w-10">.w-10</option>
      </select>
    </div>
    <div class="input-group">
      <label for="width-example-min-width">Minimum width</label>
      <select id="width-example-min-width" v-model="minWidth">
        <option value="">None</option>
        <option value="min-w-auto">.min-w-auto</option>
        <option value="min-w-fit-content">.min-w-fit-content</option>
        <option value="min-w-max-content">.min-w-max-content</option>
        <option value="min-w-min-content">.min-w-min-content</option>
        <option value="min-w-stretch">.min-w-stretch</option>
        <option value="min-w-full">.min-w-full</option>
        <option value="min-w-quarter">.min-w-quarter</option>
        <option value="min-w-half">.min-w-half</option>
        <option value="min-w-three-quarters">.min-w-three-quarters</option>
        <option value="min-w-third">.min-w-third</option>
        <option value="min-w-two-thirds">.min-w-two-thirds</option>
        <option value="min-w-half-screen">.min-w-half-screen</option>
        <option value="min-w-third-screen">.min-w-third-screen</option>
        <option value="min-w-two-thirds-screen">.min-w-two-thirds-screen</option>
        <option value="min-w-quarter-screen">.min-w-quarter-screen</option>
        <option value="min-w-three-quarters-screen">.min-w-three-quarters-screen</option>
        <option value="min-w-full-screen">.min-w-full-screen</option>
        <option value="min-w-0">.min-w-0</option>
        <option value="min-w-1">.min-w-1</option>
        <option value="min-w-2">.min-w-2</option>
        <option value="min-w-3">.min-w-3</option>
        <option value="min-w-4">.min-w-4</option>
        <option value="min-w-5">.min-w-5</option>
        <option value="min-w-6">.min-w-6</option>
        <option value="min-w-7">.min-w-7</option>
        <option value="min-w-8">.min-w-8</option>
        <option value="min-w-9">.min-w-9</option>
        <option value="min-w-10">.min-w-10</option>
      </select>
    </div>
    <div class="input-group">
      <label for="width-example-max-width">Maximum width</label>
      <select id="width-example-max-width" v-model="maxWidth">
        <option value="">None</option>
        <option value="max-w-auto">.max-w-auto</option>
        <option value="max-w-fit-content">.max-w-fit-content</option>
        <option value="max-w-max-content">.max-w-max-content</option>
        <option value="max-w-min-content">.max-w-min-content</option>
        <option value="max-w-stretch">.max-w-stretch</option>
        <option value="max-w-full">.max-w-full</option>
        <option value="max-w-quarter">.max-w-quarter</option>
        <option value="max-w-half">.max-w-half</option>
        <option value="max-w-three-quarters">.max-w-three-quarters</option>
        <option value="max-w-third">.max-w-third</option>
        <option value="max-w-two-thirds">.max-w-two-thirds</option>
        <option value="max-w-half-screen">.max-w-half-screen</option>
        <option value="max-w-third-screen">.max-w-third-screen</option>
        <option value="max-w-two-thirds-screen">.max-w-two-thirds-screen</option>
        <option value="max-w-quarter-screen">.max-w-quarter-screen</option>
        <option value="max-w-three-quarters-screen">.max-w-three-quarters-screen</option>
        <option value="max-w-full-screen">.max-w-full-screen</option>
        <option value="max-w-0">.max-w-0</option>
        <option value="max-w-1">.max-w-1</option>
        <option value="max-w-2">.max-w-2</option>
        <option value="max-w-3">.max-w-3</option>
        <option value="max-w-4">.max-w-4</option>
        <option value="max-w-5">.max-w-5</option>
        <option value="max-w-6">.max-w-6</option>
        <option value="max-w-7">.max-w-7</option>
        <option value="max-w-8">.max-w-8</option>
        <option value="max-w-9">.max-w-9</option>
        <option value="max-w-10">.max-w-10</option>
      </select>
    </div>
  </template>
</live-example>

## Width

| Class Name | Property | Value |
| --- | --- | --- |
| `.w-auto` | width | `auto` |
| `.w-fit-content` | width | `fit-content` |
| `.w-max-content` | width | `max-content` |
| `.w-min-content` | width | `min-content` |
| `.w-stretch` | width | `stretch` |
| `.w-full` | width | `100%` |
| `.w-quarter` | width | `25%` |
| `.w-half` | width | `50%` |
| `.w-three-quarters` | width | `75%` |
| `.w-third` | width | `calc(100% / 3)` |
| `.w-two-thirds` | width | `calc(100% / 1.5)` |
| `.w-half-screen` | width | `50vw` |
| `.w-third-screen` | width | `calc(100vw/ 3)` |
| `.w-two-thirds-screen` | width | `calc(100vw/ 1.5)` |
| `.w-quarter-screen` | width | `25vw` |
| `.w-three-quarters-screen` | width | `75vw` |
| `.w-full-screen` | width | `100vw` |
| `.w-0` | width | `var(--graupl-spacer-0)` |
| `.w-1` | width | `var(--graupl-spacer-1)` |
| `.w-2` | width | `var(--graupl-spacer-2)` |
| `.w-3` | width | `var(--graupl-spacer-3)` |
| `.w-4` | width | `var(--graupl-spacer-4)` |
| `.w-5` | width | `var(--graupl-spacer-5)` |
| `.w-6` | width | `var(--graupl-spacer-6)` |
| `.w-7` | width | `var(--graupl-spacer-7)` |
| `.w-8` | width | `var(--graupl-spacer-8)` |
| `.w-9` | width | `var(--graupl-spacer-9)` |
| `.w-10` | width | `var(--graupl-spacer-10)` |


## Max Width

| Class Name | Property | Value |
| --- | --- | --- |
| `.max-w-auto` | max-width | `auto` |
| `.max-w-fit-content` | max-width | `fit-content` |
| `.max-w-max-content` | max-width | `max-content` |
| `.max-w-min-content` | max-width | `min-content` |
| `.max-w-stretch` | max-width | `stretch` |
| `.max-w-full` | max-width | `100%` |
| `.max-w-quarter` | max-width | `25%` |
| `.max-w-half` | max-width | `50%` |
| `.max-w-three-quarters` | max-width | `75%` |
| `.max-w-third` | max-width | `calc(100% / 3)` |
| `.max-w-two-thirds` | max-width | `calc(100% / 1.5)` |
| `.max-w-half-screen` | max-width | `50vw` |
| `.max-w-third-screen` | max-width | `calc(100vw/ 3)` |
| `.max-w-two-thirds-screen` | max-width | `calc(100vw/ 1.5)` |
| `.max-w-quarter-screen` | max-width | `25vw` |
| `.max-w-three-quarters-screen` | max-width | `75vw` |
| `.max-w-full-screen` | max-width | `100vw` |
| `.max-w-0` | max-width | `var(--graupl-spacer-0)` |
| `.max-w-1` | max-width | `var(--graupl-spacer-1)` |
| `.max-w-2` | max-width | `var(--graupl-spacer-2)` |
| `.max-w-3` | max-width | `var(--graupl-spacer-3)` |
| `.max-w-4` | max-width | `var(--graupl-spacer-4)` |
| `.max-w-5` | max-width | `var(--graupl-spacer-5)` |
| `.max-w-6` | max-width | `var(--graupl-spacer-6)` |
| `.max-w-7` | max-width | `var(--graupl-spacer-7)` |
| `.max-w-8` | max-width | `var(--graupl-spacer-8)` |
| `.max-w-9` | max-width | `var(--graupl-spacer-9)` |
| `.max-w-10` | max-width | `var(--graupl-spacer-10)` |


## Min Width

| Class Name | Property | Value |
| --- | --- | --- |
| `.min-w-auto` | min-width | `auto` |
| `.min-w-fit-content` | min-width | `fit-content` |
| `.min-w-max-content` | min-width | `max-content` |
| `.min-w-min-content` | min-width | `min-content` |
| `.min-w-stretch` | min-width | `stretch` |
| `.min-w-full` | min-width | `100%` |
| `.min-w-quarter` | min-width | `25%` |
| `.min-w-half` | min-width | `50%` |
| `.min-w-three-quarters` | min-width | `75%` |
| `.min-w-third` | min-width | `calc(100% / 3)` |
| `.min-w-two-thirds` | min-width | `calc(100% / 1.5)` |
| `.min-w-half-screen` | min-width | `50vw` |
| `.min-w-third-screen` | min-width | `calc(100vw/ 3)` |
| `.min-w-two-thirds-screen` | min-width | `calc(100vw/ 1.5)` |
| `.min-w-quarter-screen` | min-width | `25vw` |
| `.min-w-three-quarters-screen` | min-width | `75vw` |
| `.min-w-full-screen` | min-width | `100vw` |
| `.min-w-0` | min-width | `var(--graupl-spacer-0)` |
| `.min-w-1` | min-width | `var(--graupl-spacer-1)` |
| `.min-w-2` | min-width | `var(--graupl-spacer-2)` |
| `.min-w-3` | min-width | `var(--graupl-spacer-3)` |
| `.min-w-4` | min-width | `var(--graupl-spacer-4)` |
| `.min-w-5` | min-width | `var(--graupl-spacer-5)` |
| `.min-w-6` | min-width | `var(--graupl-spacer-6)` |
| `.min-w-7` | min-width | `var(--graupl-spacer-7)` |
| `.min-w-8` | min-width | `var(--graupl-spacer-8)` |
| `.min-w-9` | min-width | `var(--graupl-spacer-9)` |
| `.min-w-10` | min-width | `var(--graupl-spacer-10)` |


## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/width.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/width.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/width.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the width utilities.

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

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for width.

::: info Note
For more information on responsive variants, refer to the [Responsive classes](../responsive-classes) documentation.
:::
