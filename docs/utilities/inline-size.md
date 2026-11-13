<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const parentSize = ref(16);
  const writingMode = ref("horizontal-tb");
  const inlineSize = ref("is-full");
  const minInlineSize = ref("");
  const maxInlineSize = ref("max-is-half");
  const exampleInlineSize = computed(() => {
    const classes = [inlineSize.value, minInlineSize.value, maxInlineSize.value].filter(Boolean).join(" ");

    const size = `${parentSize.value}rem`;
    const parentInlineSize = writingMode.value === "horizontal-tb" ? `min(${size}, 100%)` : size;

    return `<div class="bordered border-tertiary-700 border-dashed overflow-auto" style="writing-mode: ${writingMode.value}; inline-size: ${parentInlineSize}; block-size: 6rem">
  <div class="bg-primary-300 text-primary-900 overflow-hidden ${classes}" style="block-size: 100%">Guild supplies</div>
</div>`;
  });
</script>

# Inline Size Utilities

The inline size utilities provide classes for sizing an element along the direction its text runs with `is-*`. Inline size controls width in horizontal writing modes and height in vertical writing modes. Use `min-is-*` and `max-is-*` to set limits along the same axis.

Percentage values use the parent’s inline size. Classes ending in `-screen` use the viewport width in either writing mode.

<live-example :source-code="exampleInlineSize" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="inline-size-example-parent">Parent inline size ({{ parentSize }}rem)</label>
      <input id="inline-size-example-parent" type="range" min="8" max="20" v-model.number="parentSize">
    </div>
    <div class="input-group">
      <label for="inline-size-example-writing-mode">Writing mode</label>
      <select id="inline-size-example-writing-mode" v-model="writingMode">
        <option value="horizontal-tb">Horizontal</option>
        <option value="vertical-rl">Vertical</option>
      </select>
    </div>
    <div class="input-group">
      <label for="inline-size-example-inlineSize">Inline size</label>
      <select id="inline-size-example-inlineSize" v-model="inlineSize">
        <option value="">None</option>
        <option value="is-auto">.is-auto</option>
        <option value="is-fit-content">.is-fit-content</option>
        <option value="is-max-content">.is-max-content</option>
        <option value="is-min-content">.is-min-content</option>
        <option value="is-stretch">.is-stretch</option>
        <option value="is-full">.is-full</option>
        <option value="is-quarter">.is-quarter</option>
        <option value="is-half">.is-half</option>
        <option value="is-three-quarters">.is-three-quarters</option>
        <option value="is-third">.is-third</option>
        <option value="is-two-thirds">.is-two-thirds</option>
        <option value="is-half-screen">.is-half-screen</option>
        <option value="is-third-screen">.is-third-screen</option>
        <option value="is-two-thirds-screen">.is-two-thirds-screen</option>
        <option value="is-quarter-screen">.is-quarter-screen</option>
        <option value="is-three-quarters-screen">.is-three-quarters-screen</option>
        <option value="is-full-screen">.is-full-screen</option>
        <option value="is-0">.is-0</option>
        <option value="is-1">.is-1</option>
        <option value="is-2">.is-2</option>
        <option value="is-3">.is-3</option>
        <option value="is-4">.is-4</option>
        <option value="is-5">.is-5</option>
        <option value="is-6">.is-6</option>
        <option value="is-7">.is-7</option>
        <option value="is-8">.is-8</option>
        <option value="is-9">.is-9</option>
        <option value="is-10">.is-10</option>
      </select>
    </div>
    <div class="input-group">
      <label for="inline-size-example-minInlineSize">Min inline size</label>
      <select id="inline-size-example-minInlineSize" v-model="minInlineSize">
        <option value="">None</option>
        <option value="min-is-auto">.min-is-auto</option>
        <option value="min-is-fit-content">.min-is-fit-content</option>
        <option value="min-is-max-content">.min-is-max-content</option>
        <option value="min-is-min-content">.min-is-min-content</option>
        <option value="min-is-stretch">.min-is-stretch</option>
        <option value="min-is-full">.min-is-full</option>
        <option value="min-is-quarter">.min-is-quarter</option>
        <option value="min-is-half">.min-is-half</option>
        <option value="min-is-three-quarters">.min-is-three-quarters</option>
        <option value="min-is-third">.min-is-third</option>
        <option value="min-is-two-thirds">.min-is-two-thirds</option>
        <option value="min-is-half-screen">.min-is-half-screen</option>
        <option value="min-is-third-screen">.min-is-third-screen</option>
        <option value="min-is-two-thirds-screen">.min-is-two-thirds-screen</option>
        <option value="min-is-quarter-screen">.min-is-quarter-screen</option>
        <option value="min-is-three-quarters-screen">.min-is-three-quarters-screen</option>
        <option value="min-is-full-screen">.min-is-full-screen</option>
        <option value="min-is-0">.min-is-0</option>
        <option value="min-is-1">.min-is-1</option>
        <option value="min-is-2">.min-is-2</option>
        <option value="min-is-3">.min-is-3</option>
        <option value="min-is-4">.min-is-4</option>
        <option value="min-is-5">.min-is-5</option>
        <option value="min-is-6">.min-is-6</option>
        <option value="min-is-7">.min-is-7</option>
        <option value="min-is-8">.min-is-8</option>
        <option value="min-is-9">.min-is-9</option>
        <option value="min-is-10">.min-is-10</option>
      </select>
    </div>
    <div class="input-group">
      <label for="inline-size-example-maxInlineSize">Max inline size</label>
      <select id="inline-size-example-maxInlineSize" v-model="maxInlineSize">
        <option value="">None</option>
        <option value="max-is-auto">.max-is-auto</option>
        <option value="max-is-fit-content">.max-is-fit-content</option>
        <option value="max-is-max-content">.max-is-max-content</option>
        <option value="max-is-min-content">.max-is-min-content</option>
        <option value="max-is-stretch">.max-is-stretch</option>
        <option value="max-is-full">.max-is-full</option>
        <option value="max-is-quarter">.max-is-quarter</option>
        <option value="max-is-half">.max-is-half</option>
        <option value="max-is-three-quarters">.max-is-three-quarters</option>
        <option value="max-is-third">.max-is-third</option>
        <option value="max-is-two-thirds">.max-is-two-thirds</option>
        <option value="max-is-half-screen">.max-is-half-screen</option>
        <option value="max-is-third-screen">.max-is-third-screen</option>
        <option value="max-is-two-thirds-screen">.max-is-two-thirds-screen</option>
        <option value="max-is-quarter-screen">.max-is-quarter-screen</option>
        <option value="max-is-three-quarters-screen">.max-is-three-quarters-screen</option>
        <option value="max-is-full-screen">.max-is-full-screen</option>
        <option value="max-is-0">.max-is-0</option>
        <option value="max-is-1">.max-is-1</option>
        <option value="max-is-2">.max-is-2</option>
        <option value="max-is-3">.max-is-3</option>
        <option value="max-is-4">.max-is-4</option>
        <option value="max-is-5">.max-is-5</option>
        <option value="max-is-6">.max-is-6</option>
        <option value="max-is-7">.max-is-7</option>
        <option value="max-is-8">.max-is-8</option>
        <option value="max-is-9">.max-is-9</option>
        <option value="max-is-10">.max-is-10</option>
      </select>
    </div>
  </template>
</live-example>

## Inline Size

| Class Name                  | Property    | Value                     |
| --------------------------- | ----------- | ------------------------- |
| `.is-auto`                  | inline-size | `auto`                    |
| `.is-fit-content`           | inline-size | `fit-content`             |
| `.is-max-content`           | inline-size | `max-content`             |
| `.is-min-content`           | inline-size | `min-content`             |
| `.is-stretch`               | inline-size | `stretch`                 |
| `.is-full`                  | inline-size | `100%`                    |
| `.is-quarter`               | inline-size | `25%`                     |
| `.is-half`                  | inline-size | `50%`                     |
| `.is-three-quarters`        | inline-size | `75%`                     |
| `.is-third`                 | inline-size | `calc(100% / 3)`          |
| `.is-two-thirds`            | inline-size | `calc(100% / 1.5)`        |
| `.is-half-screen`           | inline-size | `50vw`                    |
| `.is-third-screen`          | inline-size | `calc(100vw / 3)`         |
| `.is-two-thirds-screen`     | inline-size | `calc(100vw / 1.5)`       |
| `.is-quarter-screen`        | inline-size | `25vw`                    |
| `.is-three-quarters-screen` | inline-size | `75vw`                    |
| `.is-full-screen`           | inline-size | `100vw`                   |
| `.is-0`                     | inline-size | `var(--graupl-spacer-0)`  |
| `.is-1`                     | inline-size | `var(--graupl-spacer-1)`  |
| `.is-2`                     | inline-size | `var(--graupl-spacer-2)`  |
| `.is-3`                     | inline-size | `var(--graupl-spacer-3)`  |
| `.is-4`                     | inline-size | `var(--graupl-spacer-4)`  |
| `.is-5`                     | inline-size | `var(--graupl-spacer-5)`  |
| `.is-6`                     | inline-size | `var(--graupl-spacer-6)`  |
| `.is-7`                     | inline-size | `var(--graupl-spacer-7)`  |
| `.is-8`                     | inline-size | `var(--graupl-spacer-8)`  |
| `.is-9`                     | inline-size | `var(--graupl-spacer-9)`  |
| `.is-10`                    | inline-size | `var(--graupl-spacer-10)` |

## Max Inline Size

| Class Name                      | Property        | Value                     |
| ------------------------------- | --------------- | ------------------------- |
| `.max-is-auto`                  | max-inline-size | `auto`                    |
| `.max-is-fit-content`           | max-inline-size | `fit-content`             |
| `.max-is-max-content`           | max-inline-size | `max-content`             |
| `.max-is-min-content`           | max-inline-size | `min-content`             |
| `.max-is-stretch`               | max-inline-size | `stretch`                 |
| `.max-is-full`                  | max-inline-size | `100%`                    |
| `.max-is-quarter`               | max-inline-size | `25%`                     |
| `.max-is-half`                  | max-inline-size | `50%`                     |
| `.max-is-three-quarters`        | max-inline-size | `75%`                     |
| `.max-is-third`                 | max-inline-size | `calc(100% / 3)`          |
| `.max-is-two-thirds`            | max-inline-size | `calc(100% / 1.5)`        |
| `.max-is-half-screen`           | max-inline-size | `50vw`                    |
| `.max-is-third-screen`          | max-inline-size | `calc(100vw / 3)`         |
| `.max-is-two-thirds-screen`     | max-inline-size | `calc(100vw / 1.5)`       |
| `.max-is-quarter-screen`        | max-inline-size | `25vw`                    |
| `.max-is-three-quarters-screen` | max-inline-size | `75vw`                    |
| `.max-is-full-screen`           | max-inline-size | `100vw`                   |
| `.max-is-0`                     | max-inline-size | `var(--graupl-spacer-0)`  |
| `.max-is-1`                     | max-inline-size | `var(--graupl-spacer-1)`  |
| `.max-is-2`                     | max-inline-size | `var(--graupl-spacer-2)`  |
| `.max-is-3`                     | max-inline-size | `var(--graupl-spacer-3)`  |
| `.max-is-4`                     | max-inline-size | `var(--graupl-spacer-4)`  |
| `.max-is-5`                     | max-inline-size | `var(--graupl-spacer-5)`  |
| `.max-is-6`                     | max-inline-size | `var(--graupl-spacer-6)`  |
| `.max-is-7`                     | max-inline-size | `var(--graupl-spacer-7)`  |
| `.max-is-8`                     | max-inline-size | `var(--graupl-spacer-8)`  |
| `.max-is-9`                     | max-inline-size | `var(--graupl-spacer-9)`  |
| `.max-is-10`                    | max-inline-size | `var(--graupl-spacer-10)` |

## Min Inline Size

| Class Name                      | Property        | Value                     |
| ------------------------------- | --------------- | ------------------------- |
| `.min-is-auto`                  | min-inline-size | `auto`                    |
| `.min-is-fit-content`           | min-inline-size | `fit-content`             |
| `.min-is-max-content`           | min-inline-size | `max-content`             |
| `.min-is-min-content`           | min-inline-size | `min-content`             |
| `.min-is-stretch`               | min-inline-size | `stretch`                 |
| `.min-is-full`                  | min-inline-size | `100%`                    |
| `.min-is-quarter`               | min-inline-size | `25%`                     |
| `.min-is-half`                  | min-inline-size | `50%`                     |
| `.min-is-three-quarters`        | min-inline-size | `75%`                     |
| `.min-is-third`                 | min-inline-size | `calc(100% / 3)`          |
| `.min-is-two-thirds`            | min-inline-size | `calc(100% / 1.5)`        |
| `.min-is-half-screen`           | min-inline-size | `50vw`                    |
| `.min-is-third-screen`          | min-inline-size | `calc(100vw / 3)`         |
| `.min-is-two-thirds-screen`     | min-inline-size | `calc(100vw / 1.5)`       |
| `.min-is-quarter-screen`        | min-inline-size | `25vw`                    |
| `.min-is-three-quarters-screen` | min-inline-size | `75vw`                    |
| `.min-is-full-screen`           | min-inline-size | `100vw`                   |
| `.min-is-0`                     | min-inline-size | `var(--graupl-spacer-0)`  |
| `.min-is-1`                     | min-inline-size | `var(--graupl-spacer-1)`  |
| `.min-is-2`                     | min-inline-size | `var(--graupl-spacer-2)`  |
| `.min-is-3`                     | min-inline-size | `var(--graupl-spacer-3)`  |
| `.min-is-4`                     | min-inline-size | `var(--graupl-spacer-4)`  |
| `.min-is-5`                     | min-inline-size | `var(--graupl-spacer-5)`  |
| `.min-is-6`                     | min-inline-size | `var(--graupl-spacer-6)`  |
| `.min-is-7`                     | min-inline-size | `var(--graupl-spacer-7)`  |
| `.min-is-8`                     | min-inline-size | `var(--graupl-spacer-8)`  |
| `.min-is-9`                     | min-inline-size | `var(--graupl-spacer-9)`  |
| `.min-is-10`                    | min-inline-size | `var(--graupl-spacer-10)` |

## Sass variables

The following Sass variables can be used to customize the generation of the inline size utilities.

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
