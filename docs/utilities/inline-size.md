<script setup>
  import { ref } from "vue";

  const content = ref("inline-auto");
  const maxContent = ref("max-inline-auto");
  const minContent = ref("min-inline-auto");
</script>

# Inline Size Utilities

The inline-size utilities provide a set of classes to adjust the `inline-size`, `max-inline-size`, and `min-inline-size` properties of elements.

## Inline Size

| Class Name | Property | Value |
| --- | --- | --- |
| `.inline-auto` | inline-size | `auto` |
| `.inline-fit-content` | inline-size | `fit-content` |
| `.inline-max-content` | inline-size | `max-content` |
| `.inline-min-content` | inline-size | `min-content` |
| `.inline-stretch` | inline-size | `stretch` |
| `.inline-full` | inline-size | `100%` |
| `.inline-quarter` | inline-size | `25%` |
| `.inline-half` | inline-size | `50%` |
| `.inline-three-quarters` | inline-size | `75%` |
| `.inline-third` | inline-size | `calc(100%/ 3)` |
| `.inline-two-thirds` | inline-size | `calc(100%/ 1.5)` |
| `.inline-half-screen` | inline-size | `50vw` |
| `.inline-third-screen` | inline-size | `calc(100vw/ 3)` |
| `.inline-two-thirds-screen` | inline-size | `calc(100vw/ 1.5)` |
| `.inline-quarter-screen` | inline-size | `25vw` |
| `.inline-three-quarters-screen` | inline-size | `75vw` |
| `.inline-full-screen` | inline-size | `100vw` |
| `.inline-0` | inline-size | `var(--graupl-spacer-0)` |
| `.inline-1` | inline-size | `var(--graupl-spacer-1)` |
| `.inline-2` | inline-size | `var(--graupl-spacer-2)` |
| `.inline-3` | inline-size | `var(--graupl-spacer-3)` |
| `.inline-4` | inline-size | `var(--graupl-spacer-4)` |
| `.inline-5` | inline-size | `var(--graupl-spacer-5)` |
| `.inline-6` | inline-size | `var(--graupl-spacer-6)` |
| `.inline-7` | inline-size | `var(--graupl-spacer-7)` |
| `.inline-8` | inline-size | `var(--graupl-spacer-8)` |
| `.inline-9` | inline-size | `var(--graupl-spacer-9)` |
| `.inline-10` | inline-size | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex  `">
        <div :class="`bordered text-primary-100 border-primary-700 py-3 bg-primary-300 ${content}`"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ content }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inline">Inline property</label>
    <select id="select-inline" v-model="content">
      <option value="inline-auto">Auto</option>
      <option value="inline-fit-content">Fit Content</option>
      <option value="inline-max-content">Max Content</option>
      <option value="inline-min-content">Min Content</option>
      <option value="inline-stretch">Stretch</option>
      <option value="inline-full">Full</option>
      <option value="inline-quarter">Quarter</option>
      <option value="inline-half">Half</option>
      <option value="inline-three-quarters">Three Quarters</option>
      <option value="inline-third">Third</option>
      <option value="inline-two-thirds">Two Thirds</option>
      <option value="inline-half-screen">Half Screen</option>
      <option value="inline-third-screen">Third Screen</option>
      <option value="inline-two-thirds-screen">Two Thirds Screen</option>
       <option value="inline-quarter-screen">Quarter Screen</option>
      <option value="inline-three-quarters-screen">Three Quarters Screen</option>
      <option value="inline-full-screen">Full Screen</option>
      <option value="inline-0">Spacer 0</option>
      <option value="inline-1">Spacer 1</option>
      <option value="inline-2">Spacer 2</option>
      <option value="inline-3">Spacer 3</option>
      <option value="inline-4">Spacer 4</option>
      <option value="inline-5">Spacer 5</option>
      <option value="inline-6">Spacer 6</option>
      <option value="inline-7">Spacer 7</option>
      <option value="inline-8">Spacer 8</option>
      <option value="inline-9">Spacer 9</option>
      <option value="inline-10">Spacer 10</option>
    </select>
  </div>
</div>

## Max Inline-size

| Class Name | Property | Value |
| --- | --- | --- |
| `.max-inline-auto` | max-inline-size | `auto` |
| `.max-inline-fit-content` | max-inline-size | `fit-content` |
| `.max-inline-max-content` | max-inline-size | `max-content` |
| `.max-inline-min-content` | max-inline-size | `min-content` |
| `.max-inline-stretch` | max-inline-size | `stretch` |
| `.max-inline-full` | max-inline-size | `100%` |
| `.max-inline-quarter` | max-inline-size | `25%` |
| `.max-inline-half` | max-inline-size | `50%` |
| `.max-inline-three-quarters` | max-inline-size | `75%` |
| `.max-inline-third` | max-inline-size | `calc(100%/ 3)` |
| `.max-inline-two-thirds` | max-inline-size | `calc(100%/ 1.5)` |
| `.max-inline-half-screen` | max-inline-size | `50vw` |
| `.max-inline-third-screen` | max-inline-size | `calc(100vw/ 3)` |
| `.max-inline-two-thirds-screen` | max-inline-size | `calc(100vw/ 1.5)` |
| `.max-inline-quarter-screen` | max-inline-size | `25vw` |
| `.max-inline-three-quarters-screen` | max-inline-size | `75vw` |
| `.max-inline-full-screen` | max-inline-size | `100vw` |
| `.max-inline-0` | max-inline-size | `var(--graupl-spacer-0)` |
| `.max-inline-1` | max-inline-size | `var(--graupl-spacer-1)` |
| `.max-inline-2` | max-inline-size | `var(--graupl-spacer-2)` |
| `.max-inline-3` | max-inline-size | `var(--graupl-spacer-3)` |
| `.max-inline-4` | max-inline-size | `var(--graupl-spacer-4)` |
| `.max-inline-5` | max-inline-size | `var(--graupl-spacer-5)` |
| `.max-inline-6` | max-inline-size | `var(--graupl-spacer-6)` |
| `.max-inline-7` | max-inline-size | `var(--graupl-spacer-7)` |
| `.max-inline-8` | max-inline-size | `var(--graupl-spacer-8)` |
| `.max-inline-9` | max-inline-size | `var(--graupl-spacer-9)` |
| `.max-inline-10` | max-inline-size | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex `">
        <div :class="` bordered text-primary-100 border-primary-700 py-3 bg-primary-300 ${maxContent} `">Test</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ maxContent }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-max-inline">Max Inline property</label>
    <select id="select-max-inline" v-model="maxContent">
      <option value="max-inline-auto">Auto</option>
      <option value="max-inline-fit-content">Fit Content</option>
      <option value="max-inline-max-content">Max Content</option>
      <option value="max-inline-min-content">Min Content</option>
      <option value="max-inline-stretch">Stretch</option>
      <option value="max-inline-full">Full</option>
      <option value="max-inline-quarter">Quarter</option>
      <option value="max-inline-half">Half</option>
      <option value="max-inline-three-quarters">Three Quarters</option>
      <option value="max-inline-third">Third</option>
      <option value="max-inline-two-thirds">Two Thirds</option>
      <option value="max-inline-half-screen">Half Screen</option>
      <option value="max-inline-third-screen">Third Screen</option>
      <option value="max-inline-two-thirds-screen">Two Thirds Screen</option>
       <option value="max-inline-quarter-screen">Quarter Screen</option>
      <option value="max-inline-three-quarters-screen">Three Quarters Screen</option>
      <option value="max-inline-full-screen">Full Screen</option>
      <option value="max-inline-0">Spacer 0</option>
      <option value="max-inline-1">Spacer 1</option>
      <option value="max-inline-2">Spacer 2</option>
      <option value="max-inline-3">Spacer 3</option>
      <option value="max-inline-4">Spacer 4</option>
      <option value="max-inline-5">Spacer 5</option>
      <option value="max-inline-6">Spacer 6</option>
      <option value="max-inline-7">Spacer 7</option>
      <option value="max-inline-8">Spacer 8</option>
      <option value="max-inline-9">Spacer 9</option>
      <option value="max-inline-10">Spacer 10</option>
    </select>
  </div>
</div>

## Min Inline-size

| Class Name | Property | Value |
| --- | --- | --- |
| `.min-inline-auto` | min-inline-size | `auto` |
| `.min-inline-fit-content` | min-inline-size | `fit-content` |
| `.min-inline-max-content` | min-inline-size | `max-content` |
| `.min-inline-min-content` | min-inline-size | `min-content` |
| `.min-inline-stretch` | min-inline-size | `stretch` |
| `.min-inline-full` | min-inline-size | `100%` |
| `.min-inline-quarter` | min-inline-size | `25%` |
| `.min-inline-half` | min-inline-size | `50%` |
| `.min-inline-three-quarters` | min-inline-size | `75%` |
| `.min-inline-third` | min-inline-size | `calc(100%/ 3)` |
| `.min-inline-two-thirds` | min-inline-size | `calc(100%/ 1.5)` |
| `.min-inline-half-screen` | min-inline-size | `50vw` |
| `.min-inline-third-screen` | min-inline-size | `calc(100vw/ 3)` |
| `.min-inline-two-thirds-screen` | min-inline-size | `calc(100vw/ 1.5)` |
| `.min-inline-quarter-screen` | min-inline-size | `25vw` |
| `.min-inline-three-quarters-screen` | min-inline-size | `75vw` |
| `.min-inline-full-screen` | min-inline-size | `100vw` |
| `.min-inline-0` | min-inline-size | `var(--graupl-spacer-0)` |
| `.min-inline-1` | min-inline-size | `var(--graupl-spacer-1)` |
| `.min-inline-2` | min-inline-size | `var(--graupl-spacer-2)` |
| `.min-inline-3` | min-inline-size | `var(--graupl-spacer-3)` |
| `.min-inline-4` | min-inline-size | `var(--graupl-spacer-4)` |
| `.min-inline-5` | min-inline-size | `var(--graupl-spacer-5)` |
| `.min-inline-6` | min-inline-size | `var(--graupl-spacer-6)` |
| `.min-inline-7` | min-inline-size | `var(--graupl-spacer-7)` |
| `.min-inline-8` | min-inline-size | `var(--graupl-spacer-8)` |
| `.min-inline-9` | min-inline-size | `var(--graupl-spacer-9)` |
| `.min-inline-10` | min-inline-size | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex `">
        <div :class="`bordered text-primary-100 border-primary-700 py-3 bg-primary-300 ${minContent}`">Test</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ minContent }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-min-inline">Min Inline property</label>
    <select id="select-min-inline" v-model="minContent">
      <option value="min-inline-auto">Auto</option>
      <option value="min-inline-fit-content">Fit Content</option>
      <option value="min-inline-max-content">Max Content</option>
      <option value="min-inline-min-content">Min Content</option>
      <option value="min-inline-stretch">Stretch</option>
      <option value="min-inline-full">Full</option>
      <option value="min-inline-quarter">Quarter</option>
      <option value="min-inline-half">Half</option>
      <option value="min-inline-three-quarters">Three Quarters</option>
      <option value="min-inline-third">Third</option>
      <option value="min-inline-two-thirds">Two Thirds</option>
      <option value="min-inline-half-screen">Half Screen</option>
      <option value="min-inline-third-screen">Third Screen</option>
      <option value="min-inline-two-thirds-screen">Two Thirds Screen</option>
       <option value="min-inline-quarter-screen">Quarter Screen</option>
      <option value="min-inline-three-quarters-screen">Three Quarters Screen</option>
      <option value="min-inline-full-screen">Full Screen</option>
      <option value="min-inline-0">Spacer 0</option>
      <option value="min-inline-1">Spacer 1</option>
      <option value="min-inline-2">Spacer 2</option>
      <option value="min-inline-3">Spacer 3</option>
      <option value="min-inline-4">Spacer 4</option>
      <option value="min-inline-5">Spacer 5</option>
      <option value="min-inline-6">Spacer 6</option>
      <option value="min-inline-7">Spacer 7</option>
      <option value="min-inline-8">Spacer 8</option>
      <option value="min-inline-9">Spacer 9</option>
      <option value="min-inline-10">Spacer 10</option>
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

By default, no responsive utility classes are generated for inline-size.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
