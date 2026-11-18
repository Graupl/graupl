<script setup>
  import { computed, ref } from "vue";
  import { withBase } from "vitepress";
  import LiveExample from "../vue-components/LiveExample.vue";

  const ratio = ref("one-by-one");
  const forceRatio = ref(true);
  const ratioExample = computed(() => `<div class="max-w-10">
  <div class="ratio ${ratio.value} bordered border-primary-700 bg-primary-300"></div>
</div>`);
  const imageExample = computed(() => `<div class="max-w-10">
  <div class="ratio one-by-one bordered border-tertiary-700 border-dashed">
    <img class="${forceRatio.value ? "force-ratio" : "w-full h-auto"}" src="${withBase("/card-trail-map.svg")}" alt="Illustrated trail map" width="480" height="240">
  </div>
</div>`);
</script>

# Ratio Utilities

The ratio utilities provide classes for setting a box’s aspect ratio. Add `.ratio` to a box to fill its parent's width, then add a preset class to set its aspect ratio. The preset sets `--graupl-ratio`, which determines the box's height.

## Aspect Ratio

<live-example :source-code="ratioExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="ratio-preset">Ratio preset</label>
      <select id="ratio-preset" v-model="ratio">
        <option value="one-by-one">.one-by-one</option>
        <option value="two-by-one">.two-by-one</option>
        <option value="four-by-three">.four-by-three</option>
        <option value="four-by-one">.four-by-one</option>
        <option value="sixteen-by-nine">.sixteen-by-nine</option>
        <option value="three-by-two">.three-by-two</option>
        <option value="eight-by-five">.eight-by-five</option>
      </select>
    </div>
  </template>
</live-example>

| Class Name         | Property         | Value    |
| ------------------ | ---------------- | -------- |
| `.one-by-one`      | `--graupl-ratio` | `1`      |
| `.two-by-one`      | `--graupl-ratio` | `2 / 1`  |
| `.four-by-three`   | `--graupl-ratio` | `4 / 3`  |
| `.four-by-one`     | `--graupl-ratio` | `4 / 1`  |
| `.sixteen-by-nine` | `--graupl-ratio` | `16 / 9` |
| `.three-by-two`    | `--graupl-ratio` | `3 / 2`  |
| `.eight-by-five`   | `--graupl-ratio` | `8 / 5`  |

## Force Ratio

Add `.force-ratio` to an image inside a `.ratio` box to fill the box. The image keeps its proportions, and any part that extends beyond the box is cropped.

<live-example :source-code="imageExample" options-position="top">
  <template #options>
    <div class="input-group">
      <input id="ratio-force-image" type="checkbox" v-model="forceRatio">
      <label for="ratio-force-image">Apply .force-ratio</label>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/ratio.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/ratio.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/ratio.scss";
```

:::

## Custom Properties

The following custom properties can be used to customize the ratio utilities.

| Custom Property  | Description                         | Default Value |
| ---------------- | ----------------------------------- | ------------- |
| `--graupl-ratio` | Aspect-ratio value used by `.ratio` | `auto`        |

## Sass variables

The following Sass variables can be used to customize the generation of the ratio utilities.

| Variable                              | Description                                                 | Default Value   |
| ------------------------------------- | ----------------------------------------------------------- | --------------- |
| `$selector-base`                      | Base selector for utility classes.                          | `"."`           |
| `$selector-prefix`                    | The selector prefix for all utility classes.                | `""`            |
| `$selector-suffix`                    | The selector suffix for all utility classes.                | `""`            |
| `$selector-separator`                 | The selector separator for all utility classes.             | `"-"`           |
| `$use-important`                      | Appends `!important` to generated utility declarations.     | `true`          |
| `$generate-base-utilities`            | Generates the base utility classes.                         | `true`          |
| `$screen-aware`                       | Enables screen-aware utility variants.                      | `true`          |
| `$theme-aware`                        | Enables theme-aware utility variants.                       | `false`         |
| `$scheme-aware`                       | Enables scheme-aware utility variants.                      | `false`         |
| `$state-aware`                        | Enables state-aware utility variants.                       | `false`         |
| `$container-aware`                    | Enables container-aware utility variants.                   | `true`          |
| `$screen-aware-selector-prefix`       | Prefix to the screen-aware portion of utility selectors.    | `""`            |
| `$screen-aware-selector-suffix`       | Suffix to the screen-aware portion of utility selectors.    | `""`            |
| `$screen-aware-selector-separator`    | Separator inserted for screen-aware utility selectors.      | `"\\:"`         |
| `$theme-aware-selector-prefix`        | Prefix to the theme-aware portion of utility selectors.     | `""`            |
| `$theme-aware-selector-suffix`        | Suffix to the theme-aware portion of utility selectors.     | `"-theme"`      |
| `$theme-aware-selector-separator`     | Separator inserted for theme-aware utility selectors.       | `"\\:"`         |
| `$scheme-aware-selector-prefix`       | Prefix to the scheme-aware portion of utility selectors.    | `""`            |
| `$scheme-aware-selector-suffix`       | Suffix to the scheme-aware portion of utility selectors.    | `"-mode"`       |
| `$scheme-aware-selector-separator`    | Separator inserted for scheme-aware utility selectors.      | `"\\:"`         |
| `$state-aware-selector-prefix`        | Prefix to the state-aware portion of utility selectors.     | `""`            |
| `$state-aware-selector-suffix`        | Suffix to the state-aware portion of utility selectors.     | `""`            |
| `$state-aware-selector-separator`     | Separator inserted for state-aware utility selectors.       | `"\\:"`         |
| `$container-aware-selector-prefix`    | Prefix to the container-aware portion of utility selectors. | `"cq\\:"`       |
| `$container-aware-selector-suffix`    | Suffix to the container-aware portion of utility selectors. | `""`            |
| `$container-aware-selector-separator` | Separator inserted for container-aware utility selectors.   | `"\\:"`         |
| `$ratio-selector`                     | Selector name for the ratio box.                            | `"ratio"`       |
| `$force-ratio-selector`               | Selector name for the element that fills the ratio box.     | `"force-ratio"` |
| `$utility-properties`                 | Map of utility properties.                                  | `()`            |
| `$utility-values`                     | Map of utility values.                                      | `()`            |
| `$utility-map`                        | Map of utility property/value pairs.                        | `()`            |

## Responsive Variants

Screen-aware classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for the available prefixes.
