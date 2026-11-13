<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const parentHeight = ref(40);
  const height = ref("h-full");
  const minHeight = ref("");
  const maxHeight = ref("max-h-half");
  const exampleHeight = computed(() => {
    const classes = [height.value, minHeight.value, maxHeight.value].filter(Boolean).join(" ");

    return `<div class="bordered border-tertiary-700 border-dashed overflow-auto" style="height: ${parentHeight.value}vh">
  <div class="bg-primary-300 overflow-hidden ${classes}" aria-hidden="true">
    <div class="h-7"></div>
  </div>
</div>`;
  });
</script>

# Height Utilities

The height utilities provide classes for setting an element’s height with `h-*`. Add a `min-h-*` or `max-h-*` class to limit how short or tall it can get. Percentage heights in the preview use the adjustable parent height. Classes ending in `-screen` use the viewport height.

<live-example :source-code="exampleHeight" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="height-example-parent">Parent height ({{ parentHeight }}vh)</label>
      <input id="height-example-parent" type="range" min="15" max="60" v-model.number="parentHeight">
    </div>
    <div class="input-group">
      <label for="height-example-height">Height</label>
      <select id="height-example-height" v-model="height">
        <option value="">None</option>
        <option value="h-auto">.h-auto</option>
        <option value="h-fit-content">.h-fit-content</option>
        <option value="h-max-content">.h-max-content</option>
        <option value="h-min-content">.h-min-content</option>
        <option value="h-stretch">.h-stretch</option>
        <option value="h-full">.h-full</option>
        <option value="h-quarter">.h-quarter</option>
        <option value="h-half">.h-half</option>
        <option value="h-three-quarters">.h-three-quarters</option>
        <option value="h-third">.h-third</option>
        <option value="h-two-thirds">.h-two-thirds</option>
        <option value="h-half-screen">.h-half-screen</option>
        <option value="h-third-screen">.h-third-screen</option>
        <option value="h-two-thirds-screen">.h-two-thirds-screen</option>
        <option value="h-quarter-screen">.h-quarter-screen</option>
        <option value="h-three-quarters-screen">.h-three-quarters-screen</option>
        <option value="h-full-screen">.h-full-screen</option>
        <option value="h-0">.h-0</option>
        <option value="h-1">.h-1</option>
        <option value="h-2">.h-2</option>
        <option value="h-3">.h-3</option>
        <option value="h-4">.h-4</option>
        <option value="h-5">.h-5</option>
        <option value="h-6">.h-6</option>
        <option value="h-7">.h-7</option>
        <option value="h-8">.h-8</option>
        <option value="h-9">.h-9</option>
        <option value="h-10">.h-10</option>
      </select>
    </div>
    <div class="input-group">
      <label for="height-example-min-height">Minimum height</label>
      <select id="height-example-min-height" v-model="minHeight">
        <option value="">None</option>
        <option value="min-h-auto">.min-h-auto</option>
        <option value="min-h-fit-content">.min-h-fit-content</option>
        <option value="min-h-max-content">.min-h-max-content</option>
        <option value="min-h-min-content">.min-h-min-content</option>
        <option value="min-h-stretch">.min-h-stretch</option>
        <option value="min-h-full">.min-h-full</option>
        <option value="min-h-quarter">.min-h-quarter</option>
        <option value="min-h-half">.min-h-half</option>
        <option value="min-h-three-quarters">.min-h-three-quarters</option>
        <option value="min-h-third">.min-h-third</option>
        <option value="min-h-two-thirds">.min-h-two-thirds</option>
        <option value="min-h-half-screen">.min-h-half-screen</option>
        <option value="min-h-third-screen">.min-h-third-screen</option>
        <option value="min-h-two-thirds-screen">.min-h-two-thirds-screen</option>
        <option value="min-h-quarter-screen">.min-h-quarter-screen</option>
        <option value="min-h-three-quarters-screen">.min-h-three-quarters-screen</option>
        <option value="min-h-full-screen">.min-h-full-screen</option>
        <option value="min-h-0">.min-h-0</option>
        <option value="min-h-1">.min-h-1</option>
        <option value="min-h-2">.min-h-2</option>
        <option value="min-h-3">.min-h-3</option>
        <option value="min-h-4">.min-h-4</option>
        <option value="min-h-5">.min-h-5</option>
        <option value="min-h-6">.min-h-6</option>
        <option value="min-h-7">.min-h-7</option>
        <option value="min-h-8">.min-h-8</option>
        <option value="min-h-9">.min-h-9</option>
        <option value="min-h-10">.min-h-10</option>
      </select>
    </div>
    <div class="input-group">
      <label for="height-example-max-height">Maximum height</label>
      <select id="height-example-max-height" v-model="maxHeight">
        <option value="">None</option>
        <option value="max-h-auto">.max-h-auto</option>
        <option value="max-h-fit-content">.max-h-fit-content</option>
        <option value="max-h-max-content">.max-h-max-content</option>
        <option value="max-h-min-content">.max-h-min-content</option>
        <option value="max-h-stretch">.max-h-stretch</option>
        <option value="max-h-full">.max-h-full</option>
        <option value="max-h-quarter">.max-h-quarter</option>
        <option value="max-h-half">.max-h-half</option>
        <option value="max-h-three-quarters">.max-h-three-quarters</option>
        <option value="max-h-third">.max-h-third</option>
        <option value="max-h-two-thirds">.max-h-two-thirds</option>
        <option value="max-h-half-screen">.max-h-half-screen</option>
        <option value="max-h-third-screen">.max-h-third-screen</option>
        <option value="max-h-two-thirds-screen">.max-h-two-thirds-screen</option>
        <option value="max-h-quarter-screen">.max-h-quarter-screen</option>
        <option value="max-h-three-quarters-screen">.max-h-three-quarters-screen</option>
        <option value="max-h-full-screen">.max-h-full-screen</option>
        <option value="max-h-0">.max-h-0</option>
        <option value="max-h-1">.max-h-1</option>
        <option value="max-h-2">.max-h-2</option>
        <option value="max-h-3">.max-h-3</option>
        <option value="max-h-4">.max-h-4</option>
        <option value="max-h-5">.max-h-5</option>
        <option value="max-h-6">.max-h-6</option>
        <option value="max-h-7">.max-h-7</option>
        <option value="max-h-8">.max-h-8</option>
        <option value="max-h-9">.max-h-9</option>
        <option value="max-h-10">.max-h-10</option>
      </select>
    </div>
  </template>
</live-example>

## Height

| Class Name                 | Property | Value                     |
| -------------------------- | -------- | ------------------------- |
| `.h-auto`                  | height   | `auto`                    |
| `.h-fit-content`           | height   | `fit-content`             |
| `.h-max-content`           | height   | `max-content`             |
| `.h-min-content`           | height   | `min-content`             |
| `.h-stretch`               | height   | `stretch`                 |
| `.h-full`                  | height   | `100%`                    |
| `.h-quarter`               | height   | `25%`                     |
| `.h-half`                  | height   | `50%`                     |
| `.h-three-quarters`        | height   | `75%`                     |
| `.h-third`                 | height   | `calc(100% / 3)`          |
| `.h-two-thirds`            | height   | `calc(100% / 1.5)`        |
| `.h-half-screen`           | height   | `50vh`                    |
| `.h-third-screen`          | height   | `calc(100vh / 3)`         |
| `.h-two-thirds-screen`     | height   | `calc(100vh / 1.5)`       |
| `.h-quarter-screen`        | height   | `25vh`                    |
| `.h-three-quarters-screen` | height   | `75vh`                    |
| `.h-full-screen`           | height   | `100vh`                   |
| `.h-0`                     | height   | `var(--graupl-spacer-0)`  |
| `.h-1`                     | height   | `var(--graupl-spacer-1)`  |
| `.h-2`                     | height   | `var(--graupl-spacer-2)`  |
| `.h-3`                     | height   | `var(--graupl-spacer-3)`  |
| `.h-4`                     | height   | `var(--graupl-spacer-4)`  |
| `.h-5`                     | height   | `var(--graupl-spacer-5)`  |
| `.h-6`                     | height   | `var(--graupl-spacer-6)`  |
| `.h-7`                     | height   | `var(--graupl-spacer-7)`  |
| `.h-8`                     | height   | `var(--graupl-spacer-8)`  |
| `.h-9`                     | height   | `var(--graupl-spacer-9)`  |
| `.h-10`                    | height   | `var(--graupl-spacer-10)` |

## Max Height

| Class Name                     | Property   | Value                     |
| ------------------------------ | ---------- | ------------------------- |
| `.max-h-auto`                  | max-height | `auto`                    |
| `.max-h-fit-content`           | max-height | `fit-content`             |
| `.max-h-max-content`           | max-height | `max-content`             |
| `.max-h-min-content`           | max-height | `min-content`             |
| `.max-h-stretch`               | max-height | `stretch`                 |
| `.max-h-full`                  | max-height | `100%`                    |
| `.max-h-quarter`               | max-height | `25%`                     |
| `.max-h-half`                  | max-height | `50%`                     |
| `.max-h-three-quarters`        | max-height | `75%`                     |
| `.max-h-third`                 | max-height | `calc(100% / 3)`          |
| `.max-h-two-thirds`            | max-height | `calc(100% / 1.5)`        |
| `.max-h-half-screen`           | max-height | `50vh`                    |
| `.max-h-third-screen`          | max-height | `calc(100vh / 3)`         |
| `.max-h-two-thirds-screen`     | max-height | `calc(100vh / 1.5)`       |
| `.max-h-quarter-screen`        | max-height | `25vh`                    |
| `.max-h-three-quarters-screen` | max-height | `75vh`                    |
| `.max-h-full-screen`           | max-height | `100vh`                   |
| `.max-h-0`                     | max-height | `var(--graupl-spacer-0)`  |
| `.max-h-1`                     | max-height | `var(--graupl-spacer-1)`  |
| `.max-h-2`                     | max-height | `var(--graupl-spacer-2)`  |
| `.max-h-3`                     | max-height | `var(--graupl-spacer-3)`  |
| `.max-h-4`                     | max-height | `var(--graupl-spacer-4)`  |
| `.max-h-5`                     | max-height | `var(--graupl-spacer-5)`  |
| `.max-h-6`                     | max-height | `var(--graupl-spacer-6)`  |
| `.max-h-7`                     | max-height | `var(--graupl-spacer-7)`  |
| `.max-h-8`                     | max-height | `var(--graupl-spacer-8)`  |
| `.max-h-9`                     | max-height | `var(--graupl-spacer-9)`  |
| `.max-h-10`                    | max-height | `var(--graupl-spacer-10)` |

## Min Height

| Class Name                     | Property   | Value                     |
| ------------------------------ | ---------- | ------------------------- |
| `.min-h-auto`                  | min-height | `auto`                    |
| `.min-h-fit-content`           | min-height | `fit-content`             |
| `.min-h-max-content`           | min-height | `max-content`             |
| `.min-h-min-content`           | min-height | `min-content`             |
| `.min-h-stretch`               | min-height | `stretch`                 |
| `.min-h-full`                  | min-height | `100%`                    |
| `.min-h-quarter`               | min-height | `25%`                     |
| `.min-h-half`                  | min-height | `50%`                     |
| `.min-h-three-quarters`        | min-height | `75%`                     |
| `.min-h-third`                 | min-height | `calc(100% / 3)`          |
| `.min-h-two-thirds`            | min-height | `calc(100% / 1.5)`        |
| `.min-h-half-screen`           | min-height | `50vh`                    |
| `.min-h-third-screen`          | min-height | `calc(100vh / 3)`         |
| `.min-h-two-thirds-screen`     | min-height | `calc(100vh / 1.5)`       |
| `.min-h-quarter-screen`        | min-height | `25vh`                    |
| `.min-h-three-quarters-screen` | min-height | `75vh`                    |
| `.min-h-full-screen`           | min-height | `100vh`                   |
| `.min-h-0`                     | min-height | `var(--graupl-spacer-0)`  |
| `.min-h-1`                     | min-height | `var(--graupl-spacer-1)`  |
| `.min-h-2`                     | min-height | `var(--graupl-spacer-2)`  |
| `.min-h-3`                     | min-height | `var(--graupl-spacer-3)`  |
| `.min-h-4`                     | min-height | `var(--graupl-spacer-4)`  |
| `.min-h-5`                     | min-height | `var(--graupl-spacer-5)`  |
| `.min-h-6`                     | min-height | `var(--graupl-spacer-6)`  |
| `.min-h-7`                     | min-height | `var(--graupl-spacer-7)`  |
| `.min-h-8`                     | min-height | `var(--graupl-spacer-8)`  |
| `.min-h-9`                     | min-height | `var(--graupl-spacer-9)`  |
| `.min-h-10`                    | min-height | `var(--graupl-spacer-10)` |

## Sass variables

The following Sass variables can be used to customize the generation of the height utilities.

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
