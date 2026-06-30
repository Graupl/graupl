<script setup>
  import { ref } from "vue";

  const height = ref("h-auto");
  const maxHeight = ref("h-auto");
  const max = ref("max-h-auto");
  const minHeight = ref("h-auto");
  const min = ref("min-h-auto");
</script>

# Height Utilities

The height utilities provide a set of classes to adjust the `height`, `max-height`, and `min-height` properties of elements.

## Height

| Class Name | Property | Value |
| --- | --- | --- |
| `.h-auto` | height | `auto` |
| `.h-fit-content` | height | `fit-content` |
| `.h-max-content` | height | `max-content` |
| `.h-min-content` | height | `min-content` |
| `.h-stretch` | height | `stretch` |
| `.h-full` | height | `100%` |
| `.h-quarter` | height | `25%` |
| `.h-half` | height | `50%` |
| `.h-three-quarters` | height | `75%` |
| `.h-third` | height | `calc(100%/ 3)` |
| `.h-two-thirds` | height | `calc(100%/ 1.5)` |
| `.h-half-screen` | height | `50vh` |
| `.h-third-screen` | height | `calc(100vh/ 3)` |
| `.h-two-thirds-screen` | height | `calc(100vh/ 1.5)` |
| `.h-quarter-screen` | height | `25vh` |
| `.h-three-quarters-screen` | height | `75vh` |
| `.h-full-screen` | height | `100vh` |
| `.h-0` | height | `var(--graupl-spacer-0)` |
| `.h-1` | height | `var(--graupl-spacer-1)` |
| `.h-2` | height | `var(--graupl-spacer-2)` |
| `.h-3` | height | `var(--graupl-spacer-3)` |
| `.h-4` | height | `var(--graupl-spacer-4)` |
| `.h-5` | height | `var(--graupl-spacer-5)` |
| `.h-6` | height | `var(--graupl-spacer-6)` |
| `.h-7` | height | `var(--graupl-spacer-7)` |
| `.h-8` | height | `var(--graupl-spacer-8)` |
| `.h-9` | height | `var(--graupl-spacer-9)` |
| `.h-10` | height | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-full bg-tertiary-200">
        <div :class="`bordered bg-primary-300 bs-7 is-7 ${height}`"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ height }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-height">Height property</label>
    <select id="select-height" v-model="height">
      <option value="h-auto">Auto</option>
      <option value="h-fit-content">Fit Content</option>
      <option value="h-max-content">Max Content</option>
      <option value="h-min-content">Min Content</option>
      <option value="h-stretch">Stretch</option>
      <option value="h-full">Full</option>
      <option value="h-quarter">Quarter</option>
      <option value="h-half">Half</option>
      <option value="h-three-quarters">Three Quarters</option>
      <option value="h-third">Third</option>
      <option value="h-two-thirds">Two Thirds</option>
      <option value="h-half-screen">Half Screen</option>
      <option value="h-third-screen">Third Screen</option>
      <option value="h-two-thirds-screen">Two Thirds Screen</option>
       <option value="h-quarter-screen">Quarter Screen</option>
      <option value="h-three-quarters-screen">Three Quarters Screen</option>
      <option value="h-full-screen">Full Screen</option>
      <option value="h-0">0</option>
      <option value="h-1">1</option>
      <option value="h-2">2</option>
      <option value="h-3">3</option>
      <option value="h-4">4</option>
      <option value="h-5">5</option>
      <option value="h-6">6</option>
      <option value="h-7">7</option>
      <option value="h-8">8</option>
      <option value="h-9">9</option>
      <option value="h-10">10</option>
    </select>
  </div>
</div>

## Max Height

| Class Name | Property | Value |
| --- | --- | --- |
| `.max-h-auto` | max-height | `auto` |
| `.max-h-fit-content` | max-height | `fit-content` |
| `.max-h-max-content` | max-height | `max-content` |
| `.max-h-min-content` | max-height | `min-content` |
| `.max-h-stretch` | max-height | `stretch` |
| `.max-h-full` | max-height | `100%` |
| `.max-h-quarter` | max-height | `25%` |
| `.max-h-half` | max-height | `50%` |
| `.max-h-three-quarters` | max-height | `75%` |
| `.max-h-third` | max-height | `calc(100%/ 3)` |
| `.max-h-two-thirds` | max-height | `calc(100%/ 1.5)` |
| `.max-h-half-screen` | max-height | `50vh` |
| `.max-h-third-screen` | max-height | `calc(100vh/ 3)` |
| `.max-h-two-thirds-screen` | max-height | `calc(100vh/ 1.5)` |
| `.max-h-quarter-screen` | max-height | `25vh` |
| `.max-h-three-quarters-screen` | max-height | `75vh` |
| `.max-h-full-screen` | max-height | `100vh` |
| `.max-h-0` | max-height | `var(--graupl-spacer-0)` |
| `.max-h-1` | max-height | `var(--graupl-spacer-1)` |
| `.max-h-2` | max-height | `var(--graupl-spacer-2)` |
| `.max-h-3` | max-height | `var(--graupl-spacer-3)` |
| `.max-h-4` | max-height | `var(--graupl-spacer-4)` |
| `.max-h-5` | max-height | `var(--graupl-spacer-5)` |
| `.max-h-6` | max-height | `var(--graupl-spacer-6)` |
| `.max-h-7` | max-height | `var(--graupl-spacer-7)` |
| `.max-h-8` | max-height | `var(--graupl-spacer-8)` |
| `.max-h-9` | max-height | `var(--graupl-spacer-9)` |
| `.max-h-10` | max-height | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-full bg-tertiary-200">
        <div :class="`bordered bg-primary-300 bs-7 is-7 ${maxHeight} ${max} `"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ maxHeight }} {{max}}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-max-height">Height property</label>
    <select id="select-max-height" v-model="maxHeight">
      <option value="h-auto">Auto</option>
      <option value="h-fit-content">Fit Content</option>
      <option value="h-max-content">Max Content</option>
      <option value="h-min-content">Min Content</option>
      <option value="h-stretch">Stretch</option>
      <option value="h-full">Full</option>
      <option value="h-quarter">Quarter</option>
      <option value="h-half">Half</option>
      <option value="h-three-quarters">Three Quarters</option>
      <option value="h-third">Third</option>
      <option value="h-two-thirds">Two Thirds</option>
      <option value="h-half-screen">Half Screen</option>
      <option value="h-third-screen">Third Screen</option>
      <option value="h-two-thirds-screen">Two Thirds Screen</option>
       <option value="h-quarter-screen">Quarter Screen</option>
      <option value="h-three-quarters-screen">Three Quarters Screen</option>
      <option value="h-full-screen">Full Screen</option>
      <option value="h-0">0</option>
      <option value="h-1">1</option>
      <option value="h-2">2</option>
      <option value="h-3">3</option>
      <option value="h-4">4</option>
      <option value="h-5">5</option>
      <option value="h-6">6</option>
      <option value="h-7">7</option>
      <option value="h-8">8</option>
      <option value="h-9">9</option>
      <option value="h-10">10</option>
    </select>
  </div>
  <div class="input-group">
    <label for="select-max-height">Max Height property</label>
    <select id="select-max-height" v-model="max">
      <option value="max-h-auto">Auto</option>
      <option value="max-h-fit-content">Fit Content</option>
      <option value="max-h-max-content">Max Content</option>
      <option value="max-h-min-content">Min Content</option>
      <option value="max-h-stretch">Stretch</option>
      <option value="max-h-full">Full</option>
      <option value="max-h-quarter">Quarter</option>
      <option value="max-h-half">Half</option>
      <option value="max-h-three-quarters">Three Quarters</option>
      <option value="max-h-third">Third</option>
      <option value="max-h-two-thirds">Two Thirds</option>
      <option value="max-h-half-screen">Half Screen</option>
      <option value="max-h-third-screen">Third Screen</option>
      <option value="max-h-two-thirds-screen">Two Thirds Screen</option>
       <option value="max-h-quarter-screen">Quarter Screen</option>
      <option value="max-h-three-quarters-screen">Three Quarters Screen</option>
      <option value="max-h-full-screen">Full Screen</option>
      <option value="max-h-0">0</option>
      <option value="max-h-1">1</option>
      <option value="max-h-2">2</option>
      <option value="max-h-3">3</option>
      <option value="max-h-4">4</option>
      <option value="max-h-5">5</option>
      <option value="max-h-6">6</option>
      <option value="max-h-7">7</option>
      <option value="max-h-8">8</option>
      <option value="max-h-9">9</option>
      <option value="max-h-10">10</option>
    </select>
  </div>
</div>

## Min Height

| Class Name | Property | Value |
| --- | --- | --- |
| `.min-h-auto` | min-height | `auto` |
| `.min-h-fit-content` | min-height | `fit-content` |
| `.min-h-max-content` | min-height | `max-content` |
| `.min-h-min-content` | min-height | `min-content` |
| `.min-h-stretch` | min-height | `stretch` |
| `.min-h-full` | min-height | `100%` |
| `.min-h-quarter` | min-height | `25%` |
| `.min-h-half` | min-height | `50%` |
| `.min-h-three-quarters` | min-height | `75%` |
| `.min-h-third` | min-height | `calc(100%/ 3)` |
| `.min-h-two-thirds` | min-height | `calc(100%/ 1.5)` |
| `.min-h-half-screen` | min-height | `50vh` |
| `.min-h-third-screen` | min-height | `calc(100vh/ 3)` |
| `.min-h-two-thirds-screen` | min-height | `calc(100vh/ 1.5)` |
| `.min-h-quarter-screen` | min-height | `25vh` |
| `.min-h-three-quarters-screen` | min-height | `75vh` |
| `.min-h-full-screen` | min-height | `100vh` |
| `.min-h-0` | min-height | `var(--graupl-spacer-0)` |
| `.min-h-1` | min-height | `var(--graupl-spacer-1)` |
| `.min-h-2` | min-height | `var(--graupl-spacer-2)` |
| `.min-h-3` | min-height | `var(--graupl-spacer-3)` |
| `.min-h-4` | min-height | `var(--graupl-spacer-4)` |
| `.min-h-5` | min-height | `var(--graupl-spacer-5)` |
| `.min-h-6` | min-height | `var(--graupl-spacer-6)` |
| `.min-h-7` | min-height | `var(--graupl-spacer-7)` |
| `.min-h-8` | min-height | `var(--graupl-spacer-8)` |
| `.min-h-9` | min-height | `var(--graupl-spacer-9)` |
| `.min-h-10` | min-height | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-full bg-tertiary-200">
        <div :class="`bordered bg-primary-300 bs-7 is-7 ${minHeight} ${min} `"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ minHeight }} {{min}}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-min-height">Height property</label>
    <select id="select-min-height" v-model="minHeight">
      <option value="h-auto">Auto</option>
      <option value="h-fit-content">Fit Content</option>
      <option value="h-max-content">Max Content</option>
      <option value="h-min-content">Min Content</option>
      <option value="h-stretch">Stretch</option>
      <option value="h-full">Full</option>
      <option value="h-quarter">Quarter</option>
      <option value="h-half">Half</option>
      <option value="h-three-quarters">Three Quarters</option>
      <option value="h-third">Third</option>
      <option value="h-two-thirds">Two Thirds</option>
      <option value="h-half-screen">Half Screen</option>
      <option value="h-third-screen">Third Screen</option>
      <option value="h-two-thirds-screen">Two Thirds Screen</option>
       <option value="h-quarter-screen">Quarter Screen</option>
      <option value="h-three-quarters-screen">Three Quarters Screen</option>
      <option value="h-full-screen">Full Screen</option>
      <option value="h-0">0</option>
      <option value="h-1">1</option>
      <option value="h-2">2</option>
      <option value="h-3">3</option>
      <option value="h-4">4</option>
      <option value="h-5">5</option>
      <option value="h-6">6</option>
      <option value="h-7">7</option>
      <option value="h-8">8</option>
      <option value="h-9">9</option>
      <option value="h-10">10</option>
    </select>
  </div>
  <div class="input-group">
    <label for="select-min">Min Height property</label>
    <select id="select-min" v-model="min">
      <option value="min-h-auto">Auto</option>
      <option value="min-h-fit-content">Fit Content</option>
      <option value="min-h-max-content">Max Content</option>
      <option value="min-h-min-content">Min Content</option>
      <option value="min-h-stretch">Stretch</option>
      <option value="min-h-full">Full</option>
      <option value="min-h-quarter">Quarter</option>
      <option value="min-h-half">Half</option>
      <option value="min-h-three-quarters">Three Quarters</option>
      <option value="min-h-third">Third</option>
      <option value="min-h-two-thirds">Two Thirds</option>
      <option value="min-h-half-screen">Half Screen</option>
      <option value="min-h-third-screen">Third Screen</option>
      <option value="min-h-two-thirds-screen">Two Thirds Screen</option>
       <option value="min-h-quarter-screen">Quarter Screen</option>
      <option value="min-h-three-quarters-screen">Three Quarters Screen</option>
      <option value="min-h-full-screen">Full Screen</option>
      <option value="min-h-0">0</option>
      <option value="min-h-1">1</option>
      <option value="min-h-2">2</option>
      <option value="min-h-3">3</option>
      <option value="min-h-4">4</option>
      <option value="min-h-5">5</option>
      <option value="min-h-6">6</option>
      <option value="min-h-7">7</option>
      <option value="min-h-8">8</option>
      <option value="min-h-9">9</option>
      <option value="min-h-10">10</option>
    </select>
  </div>
</div>

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | Base selector for utility classes. | `"."` |
| `$selector-prefix` | The selector prefix for all utility classes. | `""` |
| `$selector-suffix` | The selctor suffix for all utility classes. | `""` |
| `$selector-separator` | The selector separator for all utility classes. | `""` |
| `$use-important` | Appends `!important` to generated utility declarations. | `true` |
| `$generate-base-utilities` | Generates the base utility classes. | `true` |
| `$screen-aware` | Enables screen-aware utility variants. | `false` |
| `$theme-aware` | Enables theme-aware utility variants. | `false` |
| `$scheme-aware` | Enables scheme-aware utility variants. | `false` |
| `$state-aware` | Enables state-aware utility variants. | `false` |
| `$container-aware` | Enables container-aware utility variants. | `false` |
| `$screen-aware-selector-prefix` | Prefix to the screen-aware portion of utility selectors. | `""` |
| `$screen-aware-selector-suffix` | Suffix to the screen-aware portion of utility selectors. | `""` |
| `$screen-aware-selector-separator` | Separator inserted for screen-aware utility selectors. | `"\\:"` |
| `$theme-aware-selector-prefix` | Prefix to the theme-aware portion of utility selectors. | `""` |
| `$theme-aware-selector-suffix` | Suffix to the theme-aware portion of utility selectors. | `"-theme"` |
| `$theme-aware-selector-separator` | Separator inserted for theme-aware utility selectors. | `"\\:"` |
| `$scheme-aware-selector-prefix` | Prefix to the scheme-aware portion of utility selectors. | `""` |
| `$scheme-aware-selector-suffix` | Suffix to the scheme-aware portion of utility selectors. | `"-mode"` |
| `$scheme-aware-selector-separator` | Separator inserted for scheme-aware utility selectors. | `"\\:"` |
| `$state-aware-selector-prefix` | Prefix to the state-aware portion of utility selectors. | `""` |
| `$state-aware-selector-suffix` | Suffix to the state-aware portion of utility selectors. | `""` |
| `$state-aware-selector-separator` | Separator inserted for state-aware utility selectors. | `"\\:"` |
| `$container-aware-selector-prefix` | Prefix to the container-aware portion of utility selectors. | `"cq\\:"` |
| `$container-aware-selector-suffix` | Suffix to the container-aware portion of utility selectors. | `""` |
| `$container-aware-selector-separator` | Separator inserted for container-aware utility selectors. | `"\\:"` |
| `$utility-properties` | Map of utility properties. | `()` |
| `$utility-values` | Map of utility values. | `()` |
| `$utility-map` | Map of utility property/value pairs. | `()` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for height.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
