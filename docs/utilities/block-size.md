<script setup>
  import { ref } from "vue";

  const block = ref("block-auto");
  const maxBlock = ref("block-10");
  const max = ref("max-block-auto");
  const minBlock = ref("block-1");
  const min = ref("min-block-auto");
</script>

# Block Size Utilities

The block-size utilities provide a set of classes to adjust the `block-size`, `max-block-size`, and `min-block-size` properties of elements.

## Block Size

| Class Name                     | Property   | Value                     |
| ------------------------------ | ---------- | ------------------------- |
| `.block-auto`                  | block-size | `auto`                    |
| `.block-fit-content`           | block-size | `fit-content`             |
| `.block-max-content`           | block-size | `max-content`             |
| `.block-min-content`           | block-size | `min-content`             |
| `.block-stretch`               | block-size | `stretch`                 |
| `.block-full`                  | block-size | `100%`                    |
| `.block-quarter`               | block-size | `25%`                     |
| `.block-half`                  | block-size | `50%`                     |
| `.block-three-quarters`        | block-size | `75%`                     |
| `.block-third`                 | block-size | `calc(100%/ 3)`           |
| `.block-two-thirds`            | block-size | `calc(100%/ 1.5)`         |
| `.block-half-screen`           | block-size | `50vh`                    |
| `.block-third-screen`          | block-size | `calc(100vh/ 3)`          |
| `.block-two-thirds-screen`     | block-size | `calc(100vh/ 1.5)`        |
| `.block-quarter-screen`        | block-size | `25vh`                    |
| `.block-three-quarters-screen` | block-size | `75vh`                    |
| `.block-full-screen`           | block-size | `100vh`                   |
| `.block-0`                     | block-size | `var(--graupl-spacer-0)`  |
| `.block-1`                     | block-size | `var(--graupl-spacer-1)`  |
| `.block-2`                     | block-size | `var(--graupl-spacer-2)`  |
| `.block-3`                     | block-size | `var(--graupl-spacer-3)`  |
| `.block-4`                     | block-size | `var(--graupl-spacer-4)`  |
| `.block-5`                     | block-size | `var(--graupl-spacer-5)`  |
| `.block-6`                     | block-size | `var(--graupl-spacer-6)`  |
| `.block-7`                     | block-size | `var(--graupl-spacer-7)`  |
| `.block-8`                     | block-size | `var(--graupl-spacer-8)`  |
| `.block-9`                     | block-size | `var(--graupl-spacer-9)`  |
| `.block-10`                    | block-size | `var(--graupl-spacer-10)` |

<div class="example">
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
      <option value="block-auto">Auto</option>
      <option value="block-fit-content">Fit-Content</option>
      <option value="block-max-content">Max-Content</option>
      <option value="block-min-content">Min-Content</option>
      <option value="block-stretch">Stretch</option>
      <option value="block-full">Full</option>
      <option value="block-quarter">Quarter</option>
      <option value="block-half">Half</option>
      <option value="block-three-quarters">Three-Quarters</option>
      <option value="block-third">Third</option>
      <option value="block-two-thirds">Two-Thirds</option>
      <option value="block-half-screen">Half-Screen</option>
      <option value="block-third-screen">Third-Screen</option>
      <option value="block-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="block-quarter-screen">Quarter-Screen</option>
      <option value="block-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="block-full-screen">Full-Screen</option>
      <option value="block-0">0</option>
      <option value="block-1">1</option>
      <option value="block-2">2</option>
      <option value="block-3">3</option>
      <option value="block-4">4</option>
      <option value="block-5">5</option>
      <option value="block-6">6</option>
      <option value="block-7">7</option>
      <option value="block-8">8</option>
      <option value="block-9">9</option>
      <option value="block-10">10</option>
    </select>
  </div>
</div>

## Max Block Size

| Class Name                         | Property       | Value                     |
| ---------------------------------- | -------------- | ------------------------- |
| `.max-block-auto`                  | max-block-size | `auto`                    |
| `.max-block-fit-content`           | max-block-size | `fit-content`             |
| `.max-block-max-content`           | max-block-size | `max-content`             |
| `.max-block-min-content`           | max-block-size | `min-content`             |
| `.max-block-stretch`               | max-block-size | `stretch`                 |
| `.max-block-full`                  | max-block-size | `100%`                    |
| `.max-block-quarter`               | max-block-size | `25%`                     |
| `.max-block-half`                  | max-block-size | `50%`                     |
| `.max-block-three-quarters`        | max-block-size | `75%`                     |
| `.max-block-third`                 | max-block-size | `calc(100%/ 3)`           |
| `.max-block-two-thirds`            | max-block-size | `calc(100%/ 1.5)`         |
| `.max-block-half-screen`           | max-block-size | `50vh`                    |
| `.max-block-third-screen`          | max-block-size | `calc(100vh/ 3)`          |
| `.max-block-two-thirds-screen`     | max-block-size | `calc(100vh/ 1.5)`        |
| `.max-block-quarter-screen`        | max-block-size | `25vh`                    |
| `.max-block-three-quarters-screen` | max-block-size | `75vh`                    |
| `.max-block-full-screen`           | max-block-size | `100vh`                   |
| `.max-block-0`                     | max-block-size | `var(--graupl-spacer-0)`  |
| `.max-block-1`                     | max-block-size | `var(--graupl-spacer-1)`  |
| `.max-block-2`                     | max-block-size | `var(--graupl-spacer-2)`  |
| `.max-block-3`                     | max-block-size | `var(--graupl-spacer-3)`  |
| `.max-block-4`                     | max-block-size | `var(--graupl-spacer-4)`  |
| `.max-block-5`                     | max-block-size | `var(--graupl-spacer-5)`  |
| `.max-block-6`                     | max-block-size | `var(--graupl-spacer-6)`  |
| `.max-block-7`                     | max-block-size | `var(--graupl-spacer-7)`  |
| `.max-block-8`                     | max-block-size | `var(--graupl-spacer-8)`  |
| `.max-block-9`                     | max-block-size | `var(--graupl-spacer-9)`  |
| `.max-block-10`                    | max-block-size | `var(--graupl-spacer-10)` |

<div class="example">
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
      <option value="block-auto">Auto</option>
      <option value="block-fit-content">Fit-Content</option>
      <option value="block-max-content">Max-Content</option>
      <option value="block-min-content">Min-Content</option>
      <option value="block-stretch">Stretch</option>
      <option value="block-full">Full</option>
      <option value="block-quarter">Quarter</option>
      <option value="block-half">Half</option>
      <option value="block-three-quarters">Three-Quarters</option>
      <option value="block-third">Third</option>
      <option value="block-two-thirds">Two-Thirds</option>
      <option value="block-half-screen">Half-Screen</option>
      <option value="block-third-screen">Third-Screen</option>
      <option value="block-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="block-quarter-screen">Quarter-Screen</option>
      <option value="block-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="block-full-screen">Full-Screen</option>
      <option value="block-0">0</option>
      <option value="block-1">1</option>
      <option value="block-2">2</option>
      <option value="block-3">3</option>
      <option value="block-4">4</option>
      <option value="block-5">5</option>
      <option value="block-6">6</option>
      <option value="block-7">7</option>
      <option value="block-8">8</option>
      <option value="block-9">9</option>
      <option value="block-10">10</option>
    </select>
  </div>
  <div class="input-group">
    <label for="select-max">Max block size property</label>
    <select id="select-max" v-model="max">
      <option value="max-block-auto">Auto</option>
      <option value="max-block-fit-content">Fit-Content</option>
      <option value="max-block-max-content">Max-Content</option>
      <option value="max-block-min-content">Min-Content</option>
      <option value="max-block-stretch">Stretch</option>
      <option value="max-block-full">Full</option>
      <option value="max-block-quarter">Quarter</option>
      <option value="max-block-half">Half</option>
      <option value="max-block-three-quarters">Three-Quarters</option>
      <option value="max-block-third">Third</option>
      <option value="max-block-two-thirds">Two-Thirds</option>
      <option value="max-block-half-screen">Half-Screen</option>
      <option value="max-block-third-screen">Third-Screen</option>
      <option value="max-block-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="max-block-quarter-screen">Quarter-Screen</option>
      <option value="max-block-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="max-block-full-screen">Full-Screen</option>
      <option value="max-block-0">0</option>
      <option value="max-block-1">1</option>
      <option value="max-block-2">2</option>
      <option value="max-block-3">3</option>
      <option value="max-block-4">4</option>
      <option value="max-block-5">5</option>
      <option value="max-block-6">6</option>
      <option value="max-block-7">7</option>
      <option value="max-block-8">8</option>
      <option value="max-block-9">9</option>
      <option value="max-block-10">10</option>
    </select>
  </div>
</div>

## Min Block Size

| Class Name                         | Property       | Value                     |
| ---------------------------------- | -------------- | ------------------------- |
| `.min-block-auto`                  | min-block-size | `auto`                    |
| `.min-block-fit-content`           | min-block-size | `fit-content`             |
| `.min-block-max-content`           | min-block-size | `max-content`             |
| `.min-block-min-content`           | min-block-size | `min-content`             |
| `.min-block-stretch`               | min-block-size | `stretch`                 |
| `.min-block-full`                  | min-block-size | `100%`                    |
| `.min-block-quarter`               | min-block-size | `25%`                     |
| `.min-block-half`                  | min-block-size | `50%`                     |
| `.min-block-three-quarters`        | min-block-size | `75%`                     |
| `.min-block-third`                 | min-block-size | `calc(100%/ 3)`           |
| `.min-block-two-thirds`            | min-block-size | `calc(100%/ 1.5)`         |
| `.min-block-half-screen`           | min-block-size | `50vh`                    |
| `.min-block-third-screen`          | min-block-size | `calc(100vh/ 3)`          |
| `.min-block-two-thirds-screen`     | min-block-size | `calc(100vh/ 1.5)`        |
| `.min-block-quarter-screen`        | min-block-size | `25vh`                    |
| `.min-block-three-quarters-screen` | min-block-size | `75vh`                    |
| `.min-block-full-screen`           | min-block-size | `100vh`                   |
| `.min-block-0`                     | min-block-size | `var(--graupl-spacer-0)`  |
| `.min-block-1`                     | min-block-size | `var(--graupl-spacer-1)`  |
| `.min-block-2`                     | min-block-size | `var(--graupl-spacer-2)`  |
| `.min-block-3`                     | min-block-size | `var(--graupl-spacer-3)`  |
| `.min-block-4`                     | min-block-size | `var(--graupl-spacer-4)`  |
| `.min-block-5`                     | min-block-size | `var(--graupl-spacer-5)`  |
| `.min-block-6`                     | min-block-size | `var(--graupl-spacer-6)`  |
| `.min-block-7`                     | min-block-size | `var(--graupl-spacer-7)`  |
| `.min-block-8`                     | min-block-size | `var(--graupl-spacer-8)`  |
| `.min-block-9`                     | min-block-size | `var(--graupl-spacer-9)`  |
| `.min-block-10`                    | min-block-size | `var(--graupl-spacer-10)` |

<div class="example">
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
      <option value="block-auto">Auto</option>
      <option value="block-fit-content">Fit-Content</option>
      <option value="block-max-content">Max-Content</option>
      <option value="block-min-content">Min-Content</option>
      <option value="block-stretch">Stretch</option>
      <option value="block-full">Full</option>
      <option value="block-quarter">Quarter</option>
      <option value="block-half">Half</option>
      <option value="block-three-quarters">Three-Quarters</option>
      <option value="block-third">Third</option>
      <option value="block-two-thirds">Two-Thirds</option>
      <option value="block-half-screen">Half-Screen</option>
      <option value="block-third-screen">Third-Screen</option>
      <option value="block-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="block-quarter-screen">Quarter-Screen</option>
      <option value="block-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="block-full-screen">Full-Screen</option>
      <option value="block-0">0</option>
      <option value="block-1">1</option>
      <option value="block-2">2</option>
      <option value="block-3">3</option>
      <option value="block-4">4</option>
      <option value="block-5">5</option>
      <option value="block-6">6</option>
      <option value="block-7">7</option>
      <option value="block-8">8</option>
      <option value="block-9">9</option>
      <option value="block-10">10</option>
    </select>
  </div>
  <div class="input-group">
    <label for="select-min">Min block size property</label>
    <select id="select-min" v-model="min">
      <option value="min-block-auto">Auto</option>
      <option value="min-block-fit-content">Fit-Content</option>
      <option value="min-block-max-content">Max-Content</option>
      <option value="min-block-min-content">Min-Content</option>
      <option value="min-block-stretch">Stretch</option>
      <option value="min-block-full">Full</option>
      <option value="min-block-quarter">Quarter</option>
      <option value="min-block-half">Half</option>
      <option value="min-block-three-quarters">Three-Quarters</option>
      <option value="min-block-third">Third</option>
      <option value="min-block-two-thirds">Two-Thirds</option>
      <option value="min-block-half-screen">Half-Screen</option>
      <option value="min-block-third-screen">Third-Screen</option>
      <option value="min-block-two-thirds-screen">Two-Thirds-Screen</option>
      <option value="min-block-quarter-screen">Quarter-Screen</option>
      <option value="min-block-three-quarters-screen">Three-Quarters-Screen</option>
      <option value="min-block-full-screen">Full-Screen</option>
      <option value="min-block-0">0</option>
      <option value="min-block-1">1</option>
      <option value="min-block-2">2</option>
      <option value="min-block-3">3</option>
      <option value="min-block-4">4</option>
      <option value="min-block-5">5</option>
      <option value="min-block-6">6</option>
      <option value="min-block-7">7</option>
      <option value="min-block-8">8</option>
      <option value="min-block-9">9</option>
      <option value="min-block-10">10</option>
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
