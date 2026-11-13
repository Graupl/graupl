<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const parentSize = ref(16);
  const writingMode = ref("horizontal-tb");
  const blockSize = ref("bs-full");
  const minBlockSize = ref("");
  const maxBlockSize = ref("max-bs-half");
  const exampleBlockSize = computed(() => {
    const classes = [blockSize.value, minBlockSize.value, maxBlockSize.value].filter(Boolean).join(" ");

    const size = `${parentSize.value}rem`;
    const parentBlockSize = writingMode.value === "vertical-rl" ? `min(${size}, 100%)` : size;

    return `<div class="bordered border-tertiary-700 border-dashed overflow-auto" style="writing-mode: ${writingMode.value}; block-size: ${parentBlockSize}; inline-size: 6rem">
  <div class="bg-primary-300 text-primary-900 overflow-hidden ${classes}" style="inline-size: 100%">Guild supplies</div>
</div>`;
  });
</script>

# Block Size Utilities

The block size utilities provide classes for sizing an element along the direction its lines stack with `bs-*`. Block size controls height in horizontal writing modes and width in vertical writing modes. Use `min-bs-*` and `max-bs-*` to set limits along the same axis.

Percentage values use the parent’s block size. Classes ending in `-screen` use the viewport height in either writing mode.

<live-example :source-code="exampleBlockSize" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="block-size-example-parent">Parent block size ({{ parentSize }}rem)</label>
      <input id="block-size-example-parent" type="range" min="8" max="20" v-model.number="parentSize">
    </div>
    <div class="input-group">
      <label for="block-size-example-writing-mode">Writing mode</label>
      <select id="block-size-example-writing-mode" v-model="writingMode">
        <option value="horizontal-tb">Horizontal</option>
        <option value="vertical-rl">Vertical</option>
      </select>
    </div>
    <div class="input-group">
      <label for="block-size-example-blockSize">Inline size</label>
      <select id="block-size-example-blockSize" v-model="blockSize">
        <option value="">None</option>
        <option value="bs-auto">.bs-auto</option>
        <option value="bs-fit-content">.bs-fit-content</option>
        <option value="bs-max-content">.bs-max-content</option>
        <option value="bs-min-content">.bs-min-content</option>
        <option value="bs-stretch">.bs-stretch</option>
        <option value="bs-full">.bs-full</option>
        <option value="bs-quarter">.bs-quarter</option>
        <option value="bs-half">.bs-half</option>
        <option value="bs-three-quarters">.bs-three-quarters</option>
        <option value="bs-third">.bs-third</option>
        <option value="bs-two-thirds">.bs-two-thirds</option>
        <option value="bs-half-screen">.bs-half-screen</option>
        <option value="bs-third-screen">.bs-third-screen</option>
        <option value="bs-two-thirds-screen">.bs-two-thirds-screen</option>
        <option value="bs-quarter-screen">.bs-quarter-screen</option>
        <option value="bs-three-quarters-screen">.bs-three-quarters-screen</option>
        <option value="bs-full-screen">.bs-full-screen</option>
        <option value="bs-0">.bs-0</option>
        <option value="bs-1">.bs-1</option>
        <option value="bs-2">.bs-2</option>
        <option value="bs-3">.bs-3</option>
        <option value="bs-4">.bs-4</option>
        <option value="bs-5">.bs-5</option>
        <option value="bs-6">.bs-6</option>
        <option value="bs-7">.bs-7</option>
        <option value="bs-8">.bs-8</option>
        <option value="bs-9">.bs-9</option>
        <option value="bs-10">.bs-10</option>
      </select>
    </div>
    <div class="input-group">
      <label for="block-size-example-minBlockSize">Min block size</label>
      <select id="block-size-example-minBlockSize" v-model="minBlockSize">
        <option value="">None</option>
        <option value="min-bs-auto">.min-bs-auto</option>
        <option value="min-bs-fit-content">.min-bs-fit-content</option>
        <option value="min-bs-max-content">.min-bs-max-content</option>
        <option value="min-bs-min-content">.min-bs-min-content</option>
        <option value="min-bs-stretch">.min-bs-stretch</option>
        <option value="min-bs-full">.min-bs-full</option>
        <option value="min-bs-quarter">.min-bs-quarter</option>
        <option value="min-bs-half">.min-bs-half</option>
        <option value="min-bs-three-quarters">.min-bs-three-quarters</option>
        <option value="min-bs-third">.min-bs-third</option>
        <option value="min-bs-two-thirds">.min-bs-two-thirds</option>
        <option value="min-bs-half-screen">.min-bs-half-screen</option>
        <option value="min-bs-third-screen">.min-bs-third-screen</option>
        <option value="min-bs-two-thirds-screen">.min-bs-two-thirds-screen</option>
        <option value="min-bs-quarter-screen">.min-bs-quarter-screen</option>
        <option value="min-bs-three-quarters-screen">.min-bs-three-quarters-screen</option>
        <option value="min-bs-full-screen">.min-bs-full-screen</option>
        <option value="min-bs-0">.min-bs-0</option>
        <option value="min-bs-1">.min-bs-1</option>
        <option value="min-bs-2">.min-bs-2</option>
        <option value="min-bs-3">.min-bs-3</option>
        <option value="min-bs-4">.min-bs-4</option>
        <option value="min-bs-5">.min-bs-5</option>
        <option value="min-bs-6">.min-bs-6</option>
        <option value="min-bs-7">.min-bs-7</option>
        <option value="min-bs-8">.min-bs-8</option>
        <option value="min-bs-9">.min-bs-9</option>
        <option value="min-bs-10">.min-bs-10</option>
      </select>
    </div>
    <div class="input-group">
      <label for="block-size-example-maxBlockSize">Max block size</label>
      <select id="block-size-example-maxBlockSize" v-model="maxBlockSize">
        <option value="">None</option>
        <option value="max-bs-auto">.max-bs-auto</option>
        <option value="max-bs-fit-content">.max-bs-fit-content</option>
        <option value="max-bs-max-content">.max-bs-max-content</option>
        <option value="max-bs-min-content">.max-bs-min-content</option>
        <option value="max-bs-stretch">.max-bs-stretch</option>
        <option value="max-bs-full">.max-bs-full</option>
        <option value="max-bs-quarter">.max-bs-quarter</option>
        <option value="max-bs-half">.max-bs-half</option>
        <option value="max-bs-three-quarters">.max-bs-three-quarters</option>
        <option value="max-bs-third">.max-bs-third</option>
        <option value="max-bs-two-thirds">.max-bs-two-thirds</option>
        <option value="max-bs-half-screen">.max-bs-half-screen</option>
        <option value="max-bs-third-screen">.max-bs-third-screen</option>
        <option value="max-bs-two-thirds-screen">.max-bs-two-thirds-screen</option>
        <option value="max-bs-quarter-screen">.max-bs-quarter-screen</option>
        <option value="max-bs-three-quarters-screen">.max-bs-three-quarters-screen</option>
        <option value="max-bs-full-screen">.max-bs-full-screen</option>
        <option value="max-bs-0">.max-bs-0</option>
        <option value="max-bs-1">.max-bs-1</option>
        <option value="max-bs-2">.max-bs-2</option>
        <option value="max-bs-3">.max-bs-3</option>
        <option value="max-bs-4">.max-bs-4</option>
        <option value="max-bs-5">.max-bs-5</option>
        <option value="max-bs-6">.max-bs-6</option>
        <option value="max-bs-7">.max-bs-7</option>
        <option value="max-bs-8">.max-bs-8</option>
        <option value="max-bs-9">.max-bs-9</option>
        <option value="max-bs-10">.max-bs-10</option>
      </select>
    </div>
  </template>
</live-example>

## Block Size

| Class Name                  | Property   | Value                     |
| --------------------------- | ---------- | ------------------------- |
| `.bs-auto`                  | block-size | `auto`                    |
| `.bs-fit-content`           | block-size | `fit-content`             |
| `.bs-max-content`           | block-size | `max-content`             |
| `.bs-min-content`           | block-size | `min-content`             |
| `.bs-stretch`               | block-size | `stretch`                 |
| `.bs-full`                  | block-size | `100%`                    |
| `.bs-quarter`               | block-size | `25%`                     |
| `.bs-half`                  | block-size | `50%`                     |
| `.bs-three-quarters`        | block-size | `75%`                     |
| `.bs-third`                 | block-size | `calc(100% / 3)`          |
| `.bs-two-thirds`            | block-size | `calc(100% / 1.5)`        |
| `.bs-half-screen`           | block-size | `50vh`                    |
| `.bs-third-screen`          | block-size | `calc(100vh / 3)`         |
| `.bs-two-thirds-screen`     | block-size | `calc(100vh / 1.5)`       |
| `.bs-quarter-screen`        | block-size | `25vh`                    |
| `.bs-three-quarters-screen` | block-size | `75vh`                    |
| `.bs-full-screen`           | block-size | `100vh`                   |
| `.bs-0`                     | block-size | `var(--graupl-spacer-0)`  |
| `.bs-1`                     | block-size | `var(--graupl-spacer-1)`  |
| `.bs-2`                     | block-size | `var(--graupl-spacer-2)`  |
| `.bs-3`                     | block-size | `var(--graupl-spacer-3)`  |
| `.bs-4`                     | block-size | `var(--graupl-spacer-4)`  |
| `.bs-5`                     | block-size | `var(--graupl-spacer-5)`  |
| `.bs-6`                     | block-size | `var(--graupl-spacer-6)`  |
| `.bs-7`                     | block-size | `var(--graupl-spacer-7)`  |
| `.bs-8`                     | block-size | `var(--graupl-spacer-8)`  |
| `.bs-9`                     | block-size | `var(--graupl-spacer-9)`  |
| `.bs-10`                    | block-size | `var(--graupl-spacer-10)` |

## Max Block Size

| Class Name                      | Property       | Value                     |
| ------------------------------- | -------------- | ------------------------- |
| `.max-bs-auto`                  | max-block-size | `auto`                    |
| `.max-bs-fit-content`           | max-block-size | `fit-content`             |
| `.max-bs-max-content`           | max-block-size | `max-content`             |
| `.max-bs-min-content`           | max-block-size | `min-content`             |
| `.max-bs-stretch`               | max-block-size | `stretch`                 |
| `.max-bs-full`                  | max-block-size | `100%`                    |
| `.max-bs-quarter`               | max-block-size | `25%`                     |
| `.max-bs-half`                  | max-block-size | `50%`                     |
| `.max-bs-three-quarters`        | max-block-size | `75%`                     |
| `.max-bs-third`                 | max-block-size | `calc(100% / 3)`          |
| `.max-bs-two-thirds`            | max-block-size | `calc(100% / 1.5)`        |
| `.max-bs-half-screen`           | max-block-size | `50vh`                    |
| `.max-bs-third-screen`          | max-block-size | `calc(100vh / 3)`         |
| `.max-bs-two-thirds-screen`     | max-block-size | `calc(100vh / 1.5)`       |
| `.max-bs-quarter-screen`        | max-block-size | `25vh`                    |
| `.max-bs-three-quarters-screen` | max-block-size | `75vh`                    |
| `.max-bs-full-screen`           | max-block-size | `100vh`                   |
| `.max-bs-0`                     | max-block-size | `var(--graupl-spacer-0)`  |
| `.max-bs-1`                     | max-block-size | `var(--graupl-spacer-1)`  |
| `.max-bs-2`                     | max-block-size | `var(--graupl-spacer-2)`  |
| `.max-bs-3`                     | max-block-size | `var(--graupl-spacer-3)`  |
| `.max-bs-4`                     | max-block-size | `var(--graupl-spacer-4)`  |
| `.max-bs-5`                     | max-block-size | `var(--graupl-spacer-5)`  |
| `.max-bs-6`                     | max-block-size | `var(--graupl-spacer-6)`  |
| `.max-bs-7`                     | max-block-size | `var(--graupl-spacer-7)`  |
| `.max-bs-8`                     | max-block-size | `var(--graupl-spacer-8)`  |
| `.max-bs-9`                     | max-block-size | `var(--graupl-spacer-9)`  |
| `.max-bs-10`                    | max-block-size | `var(--graupl-spacer-10)` |

## Min Block Size

| Class Name                      | Property       | Value                     |
| ------------------------------- | -------------- | ------------------------- |
| `.min-bs-auto`                  | min-block-size | `auto`                    |
| `.min-bs-fit-content`           | min-block-size | `fit-content`             |
| `.min-bs-max-content`           | min-block-size | `max-content`             |
| `.min-bs-min-content`           | min-block-size | `min-content`             |
| `.min-bs-stretch`               | min-block-size | `stretch`                 |
| `.min-bs-full`                  | min-block-size | `100%`                    |
| `.min-bs-quarter`               | min-block-size | `25%`                     |
| `.min-bs-half`                  | min-block-size | `50%`                     |
| `.min-bs-three-quarters`        | min-block-size | `75%`                     |
| `.min-bs-third`                 | min-block-size | `calc(100% / 3)`          |
| `.min-bs-two-thirds`            | min-block-size | `calc(100% / 1.5)`        |
| `.min-bs-half-screen`           | min-block-size | `50vh`                    |
| `.min-bs-third-screen`          | min-block-size | `calc(100vh / 3)`         |
| `.min-bs-two-thirds-screen`     | min-block-size | `calc(100vh / 1.5)`       |
| `.min-bs-quarter-screen`        | min-block-size | `25vh`                    |
| `.min-bs-three-quarters-screen` | min-block-size | `75vh`                    |
| `.min-bs-full-screen`           | min-block-size | `100vh`                   |
| `.min-bs-0`                     | min-block-size | `var(--graupl-spacer-0)`  |
| `.min-bs-1`                     | min-block-size | `var(--graupl-spacer-1)`  |
| `.min-bs-2`                     | min-block-size | `var(--graupl-spacer-2)`  |
| `.min-bs-3`                     | min-block-size | `var(--graupl-spacer-3)`  |
| `.min-bs-4`                     | min-block-size | `var(--graupl-spacer-4)`  |
| `.min-bs-5`                     | min-block-size | `var(--graupl-spacer-5)`  |
| `.min-bs-6`                     | min-block-size | `var(--graupl-spacer-6)`  |
| `.min-bs-7`                     | min-block-size | `var(--graupl-spacer-7)`  |
| `.min-bs-8`                     | min-block-size | `var(--graupl-spacer-8)`  |
| `.min-bs-9`                     | min-block-size | `var(--graupl-spacer-9)`  |
| `.min-bs-10`                    | min-block-size | `var(--graupl-spacer-10)` |

## Sass variables

The following Sass variables can be used to customize the generation of the block size utilities.

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
