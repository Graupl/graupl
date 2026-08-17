<script setup>
  import { ref } from "vue";

  const block = ref("bs-auto");
  const maxBlock = ref("bs-10");
  const max = ref("max-bs-auto");
  const minBlock = ref("bs-1");
  const min = ref("min-bs-auto");
</script>

# Block Size Utilities

The block-size utilities provide a set of classes to adjust the `block-size`, `max-block-size`, and `min-block-size` properties of elements.

## Block Size

| Class Name                     | Property   | Value                     |
| ------------------------------ | ---------- | ------------------------- |
| `.bs-auto`                  | block-size | `auto`                    |
| `.bs-fit-content`           | block-size | `fit-content`             |
| `.bs-max-content`           | block-size | `max-content`             |
| `.bs-min-content`           | block-size | `min-content`             |
| `.bs-stretch`               | block-size | `stretch`                 |
| `.bs-full`                  | block-size | `100%`                    |
| `.bs-quarter`               | block-size | `25%`                     |
| `.bs-half`                  | block-size | `50%`                     |
| `.bs-three-quarters`        | block-size | `75%`                     |
| `.bs-third`                 | block-size | `calc(100%/ 3)`           |
| `.bs-two-thirds`            | block-size | `calc(100%/ 1.5)`         |
| `.bs-half-screen`           | block-size | `50vh`                    |
| `.bs-third-screen`          | block-size | `calc(100vh/ 3)`          |
| `.bs-two-thirds-screen`     | block-size | `calc(100vh/ 1.5)`        |
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

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`bordered border-primary-700 bg-primary-300 inline-full max-inline-10 ${block}`"></div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ block }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-block">Block size property</label>
    <select id="select-block" v-model="block">
      <option value="bs-auto">Auto</option>
      <option value="bs-fit-content">Fit-Content</option>
      <option value="bs-max-content">Max-Content</option>
      <option value="bs-min-content">Min-Content</option>
      <option value="bs-stretch">Stretch</option>
      <option value="bs-full">Full</option>
      <option value="bs-quarter">Quarter</option>
      <option value="bs-half">Half</option>
      <option value="bs-three-quarters">Three-Quarters</option>
      <option value="bs-third">Third</option>
      <option value="bs-two-thirds">Two-Thirds</option>
      <option value="bs-half-screen">Half-Screen</option>
      <option value="bs-third-screen">Third-Screen</option>
      <option value="bs-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="bs-quarter-screen">Quarter-Screen</option>
      <option value="bs-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="bs-full-screen">Full-Screen</option>
      <option value="bs-0">0</option>
      <option value="bs-1">1</option>
      <option value="bs-2">2</option>
      <option value="bs-3">3</option>
      <option value="bs-4">4</option>
      <option value="bs-5">5</option>
      <option value="bs-6">6</option>
      <option value="bs-7">7</option>
      <option value="bs-8">8</option>
      <option value="bs-9">9</option>
      <option value="bs-10">10</option>
    </select>
  </div>
</div>

## Max Block Size

| Class Name                         | Property       | Value                     |
| ---------------------------------- | -------------- | ------------------------- |
| `.max-bs-auto`                  | max-block-size | `auto`                    |
| `.max-bs-fit-content`           | max-block-size | `fit-content`             |
| `.max-bs-max-content`           | max-block-size | `max-content`             |
| `.max-bs-min-content`           | max-block-size | `min-content`             |
| `.max-bs-stretch`               | max-block-size | `stretch`                 |
| `.max-bs-full`                  | max-block-size | `100%`                    |
| `.max-bs-quarter`               | max-block-size | `25%`                     |
| `.max-bs-half`                  | max-block-size | `50%`                     |
| `.max-bs-three-quarters`        | max-block-size | `75%`                     |
| `.max-bs-third`                 | max-block-size | `calc(100%/ 3)`           |
| `.max-bs-two-thirds`            | max-block-size | `calc(100%/ 1.5)`         |
| `.max-bs-half-screen`           | max-block-size | `50vh`                    |
| `.max-bs-third-screen`          | max-block-size | `calc(100vh/ 3)`          |
| `.max-bs-two-thirds-screen`     | max-block-size | `calc(100vh/ 1.5)`        |
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

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`bordered border-primary-700 bg-primary-300 inline-full max-inline-10 ${maxBlock} ${max}`"></div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{maxBlock}} {{ max }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-max-block">Block size property</label>
    <select id="select-max-block" v-model="maxBlock">
      <option value="bs-auto">Auto</option>
      <option value="bs-fit-content">Fit-Content</option>
      <option value="bs-max-content">Max-Content</option>
      <option value="bs-min-content">Min-Content</option>
      <option value="bs-stretch">Stretch</option>
      <option value="bs-full">Full</option>
      <option value="bs-quarter">Quarter</option>
      <option value="bs-half">Half</option>
      <option value="bs-three-quarters">Three-Quarters</option>
      <option value="bs-third">Third</option>
      <option value="bs-two-thirds">Two-Thirds</option>
      <option value="bs-half-screen">Half-Screen</option>
      <option value="bs-third-screen">Third-Screen</option>
      <option value="bs-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="bs-quarter-screen">Quarter-Screen</option>
      <option value="bs-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="bs-full-screen">Full-Screen</option>
      <option value="bs-0">0</option>
      <option value="bs-1">1</option>
      <option value="bs-2">2</option>
      <option value="bs-3">3</option>
      <option value="bs-4">4</option>
      <option value="bs-5">5</option>
      <option value="bs-6">6</option>
      <option value="bs-7">7</option>
      <option value="bs-8">8</option>
      <option value="bs-9">9</option>
      <option value="bs-10">10</option>
    </select>
  </div>
  <div class="input-group">
    <label for="select-max">Max block size property</label>
    <select id="select-max" v-model="max">
      <option value="max-bs-auto">Auto</option>
      <option value="max-bs-fit-content">Fit-Content</option>
      <option value="max-bs-max-content">Max-Content</option>
      <option value="max-bs-min-content">Min-Content</option>
      <option value="max-bs-stretch">Stretch</option>
      <option value="max-bs-full">Full</option>
      <option value="max-bs-quarter">Quarter</option>
      <option value="max-bs-half">Half</option>
      <option value="max-bs-three-quarters">Three-Quarters</option>
      <option value="max-bs-third">Third</option>
      <option value="max-bs-two-thirds">Two-Thirds</option>
      <option value="max-bs-half-screen">Half-Screen</option>
      <option value="max-bs-third-screen">Third-Screen</option>
      <option value="max-bs-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="max-bs-quarter-screen">Quarter-Screen</option>
      <option value="max-bs-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="max-bs-full-screen">Full-Screen</option>
      <option value="max-bs-0">0</option>
      <option value="max-bs-1">1</option>
      <option value="max-bs-2">2</option>
      <option value="max-bs-3">3</option>
      <option value="max-bs-4">4</option>
      <option value="max-bs-5">5</option>
      <option value="max-bs-6">6</option>
      <option value="max-bs-7">7</option>
      <option value="max-bs-8">8</option>
      <option value="max-bs-9">9</option>
      <option value="max-bs-10">10</option>
    </select>
  </div>
</div>

## Min Block Size

| Class Name                         | Property       | Value                     |
| ---------------------------------- | -------------- | ------------------------- |
| `.min-bs-auto`                  | min-block-size | `auto`                    |
| `.min-bs-fit-content`           | min-block-size | `fit-content`             |
| `.min-bs-max-content`           | min-block-size | `max-content`             |
| `.min-bs-min-content`           | min-block-size | `min-content`             |
| `.min-bs-stretch`               | min-block-size | `stretch`                 |
| `.min-bs-full`                  | min-block-size | `100%`                    |
| `.min-bs-quarter`               | min-block-size | `25%`                     |
| `.min-bs-half`                  | min-block-size | `50%`                     |
| `.min-bs-three-quarters`        | min-block-size | `75%`                     |
| `.min-bs-third`                 | min-block-size | `calc(100%/ 3)`           |
| `.min-bs-two-thirds`            | min-block-size | `calc(100%/ 1.5)`         |
| `.min-bs-half-screen`           | min-block-size | `50vh`                    |
| `.min-bs-third-screen`          | min-block-size | `calc(100vh/ 3)`          |
| `.min-bs-two-thirds-screen`     | min-block-size | `calc(100vh/ 1.5)`        |
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

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`bordered border-primary-700 bg-primary-300 inline-full max-inline-10 ${minBlock} ${min}`"></div>
    </div>
    <div class="example-classes">
      <code lang="html">&lt;div class="{{ minBlock}} {{ min }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-min-block">Block size property</label>
    <select id="select-min-block" v-model="minBlock">
      <option value="bs-auto">Auto</option>
      <option value="bs-fit-content">Fit-Content</option>
      <option value="bs-max-content">Max-Content</option>
      <option value="bs-min-content">Min-Content</option>
      <option value="bs-stretch">Stretch</option>
      <option value="bs-full">Full</option>
      <option value="bs-quarter">Quarter</option>
      <option value="bs-half">Half</option>
      <option value="bs-three-quarters">Three-Quarters</option>
      <option value="bs-third">Third</option>
      <option value="bs-two-thirds">Two-Thirds</option>
      <option value="bs-half-screen">Half-Screen</option>
      <option value="bs-third-screen">Third-Screen</option>
      <option value="bs-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="bs-quarter-screen">Quarter-Screen</option>
      <option value="bs-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="bs-full-screen">Full-Screen</option>
      <option value="bs-0">0</option>
      <option value="bs-1">1</option>
      <option value="bs-2">2</option>
      <option value="bs-3">3</option>
      <option value="bs-4">4</option>
      <option value="bs-5">5</option>
      <option value="bs-6">6</option>
      <option value="bs-7">7</option>
      <option value="bs-8">8</option>
      <option value="bs-9">9</option>
      <option value="bs-10">10</option>
    </select>
  </div>
  <div class="input-group">
    <label for="select-min">Min block size property</label>
    <select id="select-min" v-model="min">
      <option value="min-bs-auto">Auto</option>
      <option value="min-bs-fit-content">Fit-Content</option>
      <option value="min-bs-max-content">Max-Content</option>
      <option value="min-bs-min-content">Min-Content</option>
      <option value="min-bs-stretch">Stretch</option>
      <option value="min-bs-full">Full</option>
      <option value="min-bs-quarter">Quarter</option>
      <option value="min-bs-half">Half</option>
      <option value="min-bs-three-quarters">Three-Quarters</option>
      <option value="min-bs-third">Third</option>
      <option value="min-bs-two-thirds">Two-Thirds</option>
      <option value="min-bs-half-screen">Half-Screen</option>
      <option value="min-bs-third-screen">Third-Screen</option>
      <option value="min-bs-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="min-bs-quarter-screen">Quarter-Screen</option>
      <option value="min-bs-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="min-bs-full-screen">Full-Screen</option>
      <option value="min-bs-0">0</option>
      <option value="min-bs-1">1</option>
      <option value="min-bs-2">2</option>
      <option value="min-bs-3">3</option>
      <option value="min-bs-4">4</option>
      <option value="min-bs-5">5</option>
      <option value="min-bs-6">6</option>
      <option value="min-bs-7">7</option>
      <option value="min-bs-8">8</option>
      <option value="min-bs-9">9</option>
      <option value="min-bs-10">10</option>
    </select>
  </div>
</div>

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable                              | Description                                                 | Default Value |
| ------------------------------------- | ----------------------------------------------------------- | ------------- |
| `$selector-base`                      | Base selector for utility classes.                          | `"."`         |
| `$selector-prefix`                    | The selector prefix for all utility classes.                | `""`          |
| `$selector-suffix`                    | The selctor suffix for all utility classes.                 | `""`          |
| `$selector-separator`                 | The selector separator for all utility classes.             | `""`          |
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

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for block-size.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
