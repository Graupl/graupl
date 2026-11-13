<script setup>
  import { computed, ref } from "vue";
  import { withBase } from "vitepress";
  import LiveExample from "../vue-components/LiveExample.vue";

  const fit = ref("object-fit-contain");
  const position = ref("object-position-center");
  const image = withBase("/card-trail-map.svg");

  const fitExample = computed(() => `<img class="display-block w-10 h-10 bordered border-dashed border-tertiary-700 ${fit.value}" src="${image}" alt="Illustrated trail map">`);
  const positionExample = computed(() => `<div class="display-flex flex-wrap g-2">
  <img class="display-block w-10 h-10 bordered border-dashed border-tertiary-700 object-fit-cover ${position.value}" src="${image}" alt="Illustrated trail map in a square frame">
  <img class="display-block w-10 h-8 bordered border-dashed border-tertiary-700 object-fit-cover ${position.value}" src="${image}" alt="Illustrated trail map in a wide frame">
</div>`);
</script>

# Object Utilities

The object utilities provide classes for controlling how an image fits inside its box and which part stays in view when it’s cropped.

## Object Fit

Use an object fit class on an image with a set width and height to control whether it scales, stretches, or crops to fit.

<live-example :source-code="fitExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="object-example-fit">Object Fit</label>
      <select id="object-example-fit" v-model="fit">
        <option value="object-fit-fill">.object-fit-fill</option>
        <option value="object-fit-contain">.object-fit-contain</option>
        <option value="object-fit-cover">.object-fit-cover</option>
        <option value="object-fit-none">.object-fit-none</option>
        <option value="object-fit-scale-down">.object-fit-scale-down</option>
      </select>
    </div>
  </template>
</live-example>

| Class Name               | Property   | Value        |
| ------------------------ | ---------- | ------------ |
| `.object-fit-fill`       | object-fit | `fill`       |
| `.object-fit-contain`    | object-fit | `contain`    |
| `.object-fit-cover`      | object-fit | `cover`      |
| `.object-fit-none`       | object-fit | `none`       |
| `.object-fit-scale-down` | object-fit | `scale-down` |

## Object Position

Use an object position class to move the crop. The square frame crops the sides, and the wide frame crops the top and bottom.

<live-example :source-code="positionExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="object-example-position">Object Position</label>
      <select id="object-example-position" v-model="position">
        <option value="object-position-top">.object-position-top</option>
        <option value="object-position-right">.object-position-right</option>
        <option value="object-position-bottom">.object-position-bottom</option>
        <option value="object-position-left">.object-position-left</option>
        <option value="object-position-center">.object-position-center</option>
      </select>
    </div>
  </template>
</live-example>

| Class Name                | Property        | Value    |
| ------------------------- | --------------- | -------- |
| `.object-position-top`    | object-position | `top`    |
| `.object-position-right`  | object-position | `right`  |
| `.object-position-bottom` | object-position | `bottom` |
| `.object-position-left`   | object-position | `left`   |
| `.object-position-center` | object-position | `center` |

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/object.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/object.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/object.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the object utilities.

| Variable                              | Description                                                 | Default Value                       |
| ------------------------------------- | ----------------------------------------------------------- | ----------------------------------- |
| `$selector-base`                      | "."                                                         | `The base selector for the utility` |
| `$selector-prefix`                    | The selector prefix for all utility classes.                | `""`                                |
| `$selector-suffix`                    | The selector suffix for all utility classes.                | `""`                                |
| `$selector-separator`                 | The selector separator for all utility classes.             | `"-"`                               |
| `$use-important`                      | Appends `!important` to generated utility declarations.     | `true`                              |
| `$generate-base-utilities`            | Generates the base utility classes.                         | `true`                              |
| `$screen-aware`                       | Enables screen-aware utility variants.                      | `false`                             |
| `$theme-aware`                        | Enables theme-aware utility variants.                       | `false`                             |
| `$scheme-aware`                       | Enables scheme-aware utility variants.                      | `false`                             |
| `$state-aware`                        | Enables state-aware utility variants.                       | `false`                             |
| `$container-aware`                    | Enables container-aware utility variants.                   | `false`                             |
| `$screen-aware-selector-prefix`       | Prefix to the screen-aware portion of utility selectors.    | `""`                                |
| `$screen-aware-selector-suffix`       | Suffix to the screen-aware portion of utility selectors.    | `""`                                |
| `$screen-aware-selector-separator`    | Separator inserted for screen-aware utility selectors.      | `"\\:"`                             |
| `$theme-aware-selector-prefix`        | Prefix to the theme-aware portion of utility selectors.     | `""`                                |
| `$theme-aware-selector-suffix`        | Suffix to the theme-aware portion of utility selectors.     | `"-theme"`                          |
| `$theme-aware-selector-separator`     | Separator inserted for theme-aware utility selectors.       | `"\\:"`                             |
| `$scheme-aware-selector-prefix`       | Prefix to the scheme-aware portion of utility selectors.    | `""`                                |
| `$scheme-aware-selector-suffix`       | Suffix to the scheme-aware portion of utility selectors.    | `"-mode"`                           |
| `$scheme-aware-selector-separator`    | Separator inserted for scheme-aware utility selectors.      | `"\\:"`                             |
| `$state-aware-selector-prefix`        | Prefix to the state-aware portion of utility selectors.     | `""`                                |
| `$state-aware-selector-suffix`        | Suffix to the state-aware portion of utility selectors.     | `""`                                |
| `$state-aware-selector-separator`     | Separator inserted for state-aware utility selectors.       | `"\\:"`                             |
| `$container-aware-selector-prefix`    | Prefix to the container-aware portion of utility selectors. | `"cq\\:"`                           |
| `$container-aware-selector-suffix`    | Suffix to the container-aware portion of utility selectors. | `""`                                |
| `$container-aware-selector-separator` | Separator inserted for container-aware utility selectors.   | `"\\:"`                             |
| `$utility-properties`                 | Map of utility properties.                                  | `()`                                |
| `$utility-values`                     | Map of utility values.                                      | `()`                                |
| `$utility-map`                        | Map of utility property/value pairs.                        | `()`                                |

## Responsive Variants

No responsive classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
