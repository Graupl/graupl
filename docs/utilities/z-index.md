<script setup>
  import { computed, ref } from "vue";

  import LiveExample from "../vue-components/LiveExample.vue";

  const zIndex = ref("z-n1");
  const exampleZIndex = computed(() => `<div class="position-relative isolation-isolate h-10 bordered border-dashed border-tertiary-700">
  <div class="position-absolute top-0 left-0 w-half h-9 z-0 bg-primary-300 text-primary-900 p-2">1</div>
  <div class="position-absolute top-quarter left-quarter w-half h-9 ${zIndex.value} bg-tertiary-300 text-tertiary-900 p-2">2</div>
  <div class="position-absolute top-half left-third w-half h-9 z-0 bg-secondary-300 text-secondary-900 p-2">3</div>
</div>`);
</script>

# Z Index Utilities

The z-index utilities provide classes for setting the stacking order of positioned elements. Within the same stacking context, higher values paint on top of lower values. When the values match, later elements paint on top. See [Isolation](./isolation.md) to create a stacking context for a group of elements.

## Z Index

| Class Name | Property | Value |
| ---------- | -------- | ----- |
| `.z-n1`    | z-index  | `-1`  |
| `.z-0`     | z-index  | `0`   |
| `.z-1`     | z-index  | `1`   |

<live-example :source-code="exampleZIndex" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="z-index-example-class">Block 2 z-index</label>
      <select id="z-index-example-class" v-model="zIndex">
        <option value="z-n1">.z-n1</option>
        <option value="z-0">.z-0</option>
        <option value="z-1">.z-1</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/z-index.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/z-index.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/z-index.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the z-index utilities.

| Variable                              | Description                                                 | Default Value |
| ------------------------------------- | ----------------------------------------------------------- | ------------- |
| `$selector-base`                      | Base selector for utility classes.                          | `"."`         |
| `$selector-prefix`                    | The selector prefix for all utility classes.                | `""`          |
| `$selector-suffix`                    | The selector suffix for all utility classes.                | `""`          |
| `$selector-separator`                 | The selector separator for all utility classes.             | `"-"`         |
| `$use-important`                      | Appends `!important` to generated utility declarations.     | `true`        |
| `$generate-base-utilities`            | Generates the base utility classes.                         | `true`        |
| `$screen-aware`                       | Enables screen-aware utility variants.                      | `false`       |
| `$theme-aware`                        | Enables theme-aware utility variants.                       | `false`       |
| `$scheme-aware`                       | Enables scheme-aware utility variants.                      | `false`       |
| `$state-aware`                        | Enables state-aware utility variants.                       | `false`       |
| `$container-aware`                    | Enables container-aware utility variants.                   | `false`       |
| `$screen-aware-selector-prefix`       | Prefix to the screen-aware portion of utility selectors.    | `""`          |
| `$screen-aware-selector-suffix`       | Suffix to the screen-aware portion of utility selectors.    | `""`          |
| `$screen-aware-selector-separator`    | Separator inserted for screen-aware utility selectors.      | `"\\:"`       |
| `$theme-aware-selector-prefix`        | Prefix to the theme-aware portion of utility selectors.     | `""`          |
| `$theme-aware-selector-suffix`        | Suffix to the theme-aware portion of utility selectors.     | `"-theme"`    |
| `$theme-aware-selector-separator`     | Separator inserted for theme-aware utility selectors.       | `"\\:"`       |
| `$scheme-aware-selector-prefix`       | Prefix to the scheme-aware portion of utility selectors.    | `""`          |
| `$scheme-aware-selector-suffix`       | Suffix to the scheme-aware portion of utility selectors.    | `"-mode"`     |
| `$scheme-aware-selector-separator`    | Separator inserted for scheme-aware utility selectors.      | `"\\:"`       |
| `$state-aware-selector-prefix`        | Prefix to the state-aware portion of utility selectors.     | `""`          |
| `$state-aware-selector-suffix`        | Suffix to the state-aware portion of utility selectors.     | `""`          |
| `$state-aware-selector-separator`     | Separator inserted for state-aware utility selectors.       | `"\\:"`       |
| `$container-aware-selector-prefix`    | Prefix to the container-aware portion of utility selectors. | `"cq\\:"`     |
| `$container-aware-selector-suffix`    | Suffix to the container-aware portion of utility selectors. | `""`          |
| `$container-aware-selector-separator` | Separator inserted for container-aware utility selectors.   | `"\\:"`       |
| `$utility-properties`                 | Map of utility properties.                                  | `()`          |
| `$utility-values`                     | Map of utility values.                                      | `()`          |
| `$utility-map`                        | Map of utility property/value pairs.                        | `()`          |

## Responsive Variants

No responsive classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
