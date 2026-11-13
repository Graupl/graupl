<script setup>
  import { computed, ref } from "vue";

  import LiveExample from "../vue-components/LiveExample.vue";

  const position = ref("position-static");
  const examplePosition = computed(() => `<div class="bordered border-dashed border-tertiary-700" style="transform: translate(0)">
  <div class="position-relative overflow-auto h-10" tabindex="0" role="region" aria-label="Position preview">
    <div class="h-8 bg-primary-300 text-primary-900 p-2">Before</div>
    <div class="${position.value} ${position.value === "position-relative" ? "top-5" : "top-0"} left-0 bg-tertiary-300 text-tertiary-900 p-2">Positioned block</div>
    <div class="h-10 bg-primary-300 text-primary-900 p-2">After</div>
  </div>
</div>`);
</script>

# Position Utilities

The position utilities provide classes for controlling where an element sits and whether it keeps its place in the normal flow. Static, relative, and sticky elements keep their space. Absolute and fixed elements leave the flow. Scroll the preview to see when the sticky block reaches the top and stays there.

## Position

| Class Name           | Property | Value      |
| -------------------- | -------- | ---------- |
| `.position-static`   | position | `static`   |
| `.position-fixed`    | position | `fixed`    |
| `.position-absolute` | position | `absolute` |
| `.position-relative` | position | `relative` |
| `.position-sticky`   | position | `sticky`   |

::: info Note
The preview uses a transform on the outer box to keep fixed positioning inside the preview. Fixed elements normally position against the viewport.
:::

<live-example :source-code="examplePosition" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-position">Position class</label>
      <select id="select-position" v-model="position">
        <option value="position-static">.position-static</option>
        <option value="position-fixed">.position-fixed</option>
        <option value="position-absolute">.position-absolute</option>
        <option value="position-relative">.position-relative</option>
        <option value="position-sticky">.position-sticky</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/position.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/position.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/position.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the position utilities.

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
