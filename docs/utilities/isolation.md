<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const isolation = ref("isolation-auto");
  const exampleIsolation = computed(() => `<div class="position-relative isolation-isolate h-10 bordered border-dashed border-tertiary-700">
  <div class="position-absolute top-0 left-0 w-two-thirds h-9 bordered border-dashed border-primary-700 ${isolation.value}">
    <div class="position-absolute top-quarter left-quarter w-two-thirds h-7 z-1 bg-primary-300 text-primary-900 p-2">1</div>
  </div>
  <div class="position-absolute top-quarter left-third w-half h-9 z-0 bg-tertiary-300 text-tertiary-900 p-2">2</div>
</div>`);
</script>

# Isolation Utilities

The isolation utilities provide classes for controlling how a group stacks relative to nearby elements. Add `.isolation-isolate` to create a stacking context so the browser stacks the group as a unit. See [Z Index](./z-index.md) to control the order of elements within a stacking context.

## Isolation

| Class Name           | Property  | Value     |
| -------------------- | --------- | --------- |
| `.isolation-auto`    | isolation | `auto`    |
| `.isolation-isolate` | isolation | `isolate` |

Block 1 has `.z-1` and starts above block 2. Apply `.isolation-isolate` to the inner dashed box to give block 1 its own stacking context. Block 2 then paints above the whole box.

<live-example :source-code="exampleIsolation" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="isolation-example-class">Inner box isolation</label>
      <select id="isolation-example-class" v-model="isolation">
        <option value="isolation-auto">.isolation-auto</option>
        <option value="isolation-isolate">.isolation-isolate</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/isolation.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/isolation.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/isolation.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the isolation utilities.

| Variable                              | Description                                                 | Default Value |
| ------------------------------------- | ----------------------------------------------------------- | ------------- |
| `$selector-base`                      | Base selector for utility classes.                          | `"."`         |
| `$selector-prefix`                    | The selector prefix for all utility classes.                | `""`          |
| `$selector-suffix`                    | The selector suffix for all utility classes.                | `""`          |
| `$selector-separator`                 | The selector separator for all utility classes.             | `"-"`         |
| `$use-important`                      | Appends `!important` to generated utility declarations.     | `true`        |
| `$generate-base-utilities`            | Generates the base utility classes.                         | `true`        |
| `$screen-aware`                       | Enables screen-aware utility variants.                      | `true`        |
| `$theme-aware`                        | Enables theme-aware utility variants.                       | `false`       |
| `$scheme-aware`                       | Enables scheme-aware utility variants.                      | `false`       |
| `$state-aware`                        | Enables state-aware utility variants.                       | `false`       |
| `$container-aware`                    | Enables container-aware utility variants.                   | `true`        |
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

Screen-aware classes are generated by default, including `hd:`, `qhd:`, and `uhd:`. See the [Responsive Classes guide](../responsive-classes.md) for the available prefixes.
