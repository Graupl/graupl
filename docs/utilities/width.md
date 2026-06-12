<script setup>
  import { ref } from "vue";

  const content = ref("w-auto");
  const maxContent = ref("max-w-auto");
  const minContent = ref("min-w-auto");
</script>

# Width Utilities

The width utilities provide a set of classes to adjust the `width`, `max-width`, and `min-width` properties of elements.

## Width

| Class Name | Property | Value |
| --- | --- | --- |
| `.w-auto` | width | `auto` |
| `.w-fit-content` | width | `fit-content` |
| `.w-max-content` | width | `max-content` |
| `.w-min-content` | width | `min-content` |
| `.w-stretch` | width | `stretch` |
| `.w-full` | width | `100%` |
| `.w-quarter` | width | `25%` |
| `.w-half` | width | `50%` |
| `.w-three-quarters` | width | `75%` |
| `.w-third` | width | `calc(100%/ 3)` |
| `.w-two-thirds` | width | `calc(100%/ 1.5)` |
| `.w-half-screen` | width | `50vw` |
| `.w-third-screen` | width | `calc(100vw/ 3)` |
| `.w-two-thirds-screen` | width | `calc(100vw/ 1.5)` |
| `.w-quarter-screen` | width | `25vw` |
| `.w-three-quarters-screen` | width | `75vw` |
| `.w-full-screen` | width | `100vw` |
| `.w-0` | width | `var(--graupl-spacer-0)` |
| `.w-1` | width | `var(--graupl-spacer-1)` |
| `.w-2` | width | `var(--graupl-spacer-2)` |
| `.w-3` | width | `var(--graupl-spacer-3)` |
| `.w-4` | width | `var(--graupl-spacer-4)` |
| `.w-5` | width | `var(--graupl-spacer-5)` |
| `.w-6` | width | `var(--graupl-spacer-6)` |
| `.w-7` | width | `var(--graupl-spacer-7)` |
| `.w-8` | width | `var(--graupl-spacer-8)` |
| `.w-9` | width | `var(--graupl-spacer-9)` |
| `.w-10` | width | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex g-5 h-full`">
        <div :class="`bordered text-primary-100 border-primary-700 py-3 bg-primary-300 ${content}`">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ content }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-width">Width property</label>
    <select id="select-width" v-model="content">
      <option value="w-auto">Auto</option>
      <option value="w-fit-content">Fit Content</option>
      <option value="w-max-content">Max Content</option>
      <option value="w-min-content">Min Content</option>
      <option value="w-stretch">Stretch</option>
      <option value="w-full">Full</option>
      <option value="w-quarter">Quarter</option>
      <option value="w-half">Half</option>
      <option value="w-three-quarters">Three Quarters</option>
      <option value="w-third">Third</option>
      <option value="w-two-thirds">Two Thirds</option>
      <option value="w-half-screen">Half Screen</option>
      <option value="w-third-screen">Third Screen</option>
      <option value="w-two-thirds-screen">Two Thirds Screen</option>
       <option value="w-quarter-screen">Quarter Screen</option>
      <option value="w-three-quarters-screen">Three Quarters Screen</option>
      <option value="w-full-screen">Full Screen</option>
      <option value="w-0">Spacer 0</option>
      <option value="w-1">Spacer 1</option>
      <option value="w-2">Spacer 2</option>
      <option value="w-3">Spacer 3</option>
      <option value="w-4">Spacer 4</option>
      <option value="w-5">Spacer 5</option>
      <option value="w-6">Spacer 6</option>
      <option value="w-7">Spacer 7</option>
      <option value="w-8">Spacer 8</option>
      <option value="w-9">Spacer 9</option>
      <option value="w-10">Spacer 10</option>
    </select>
  </div>
</div>

## Max Width

| Class Name | Property | Value |
| --- | --- | --- |
| `.max-w-auto` | max-width | `auto` |
| `.max-w-fit-content` | max-width | `fit-content` |
| `.max-w-max-content` | max-width | `max-content` |
| `.max-w-min-content` | max-width | `min-content` |
| `.max-w-stretch` | max-width | `stretch` |
| `.max-w-full` | max-width | `100%` |
| `.max-w-quarter` | max-width | `25%` |
| `.max-w-half` | max-width | `50%` |
| `.max-w-three-quarters` | max-width | `75%` |
| `.max-w-third` | max-width | `calc(100%/ 3)` |
| `.max-w-two-thirds` | max-width | `calc(100%/ 1.5)` |
| `.max-w-half-screen` | max-width | `50vw` |
| `.max-w-third-screen` | max-width | `calc(100vw/ 3)` |
| `.max-w-two-thirds-screen` | max-width | `calc(100vw/ 1.5)` |
| `.max-w-quarter-screen` | max-width | `25vw` |
| `.max-w-three-quarters-screen` | max-width | `75vw` |
| `.max-w-full-screen` | max-width | `100vw` |
| `.max-w-0` | max-width | `var(--graupl-spacer-0)` |
| `.max-w-1` | max-width | `var(--graupl-spacer-1)` |
| `.max-w-2` | max-width | `var(--graupl-spacer-2)` |
| `.max-w-3` | max-width | `var(--graupl-spacer-3)` |
| `.max-w-4` | max-width | `var(--graupl-spacer-4)` |
| `.max-w-5` | max-width | `var(--graupl-spacer-5)` |
| `.max-w-6` | max-width | `var(--graupl-spacer-6)` |
| `.max-w-7` | max-width | `var(--graupl-spacer-7)` |
| `.max-w-8` | max-width | `var(--graupl-spacer-8)` |
| `.max-w-9` | max-width | `var(--graupl-spacer-9)` |
| `.max-w-10` | max-width | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex g-5 h-full`">
        <div :class="`bordered border-primary-700 text-primary-100 py-3 bg-primary-300 ${maxContent}`">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ maxContent }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-max-width">Width property</label>
    <select id="select-max-width" v-model="maxContent">
      <option value="max-w-auto">Auto</option>
      <option value="max-w-fit-content">Fit Content</option>
      <option value="max-w-max-content">Max Content</option>
      <option value="max-w-min-content">Min Content</option>
      <option value="max-w-stretch">Stretch</option>
      <option value="max-w-full">Full</option>
      <option value="max-w-quarter">Quarter</option>
      <option value="max-w-half">Half</option>
      <option value="max-w-three-quarters">Three Quarters</option>
      <option value="max-w-third">Third</option>
      <option value="max-w-two-thirds">Two Thirds</option>
      <option value="max-w-half-screen">Half Screen</option>
      <option value="max-w-third-screen">Third Screen</option>
      <option value="max-w-two-thirds-screen">Two Thirds Screen</option>
       <option value="max-w-quarter-screen">Quarter Screen</option>
      <option value="max-w-three-quarters-screen">Three Quarters Screen</option>
      <option value="max-w-full-screen">Full Screen</option>
      <option value="max-w-0">Spacer 0</option>
      <option value="max-w-1">Spacer 1</option>
      <option value="max-w-2">Spacer 2</option>
      <option value="max-w-3">Spacer 3</option>
      <option value="max-w-4">Spacer 4</option>
      <option value="max-w-5">Spacer 5</option>
      <option value="max-w-6">Spacer 6</option>
      <option value="max-w-7">Spacer 7</option>
      <option value="max-w-8">Spacer 8</option>
      <option value="max-w-9">Spacer 9</option>
      <option value="max-w-10">Spacer 10</option>
    </select>
  </div>
</div>

## Min Width

| Class Name | Property | Value |
| --- | --- | --- |
| `.min-w-auto` | min-width | `auto` |
| `.min-w-fit-content` | min-width | `fit-content` |
| `.min-w-max-content` | min-width | `max-content` |
| `.min-w-min-content` | min-width | `min-content` |
| `.min-w-stretch` | min-width | `stretch` |
| `.min-w-full` | min-width | `100%` |
| `.min-w-quarter` | min-width | `25%` |
| `.min-w-half` | min-width | `50%` |
| `.min-w-three-quarters` | min-width | `75%` |
| `.min-w-third` | min-width | `calc(100%/ 3)` |
| `.min-w-two-thirds` | min-width | `calc(100%/ 1.5)` |
| `.min-w-half-screen` | min-width | `50vw` |
| `.min-w-third-screen` | min-width | `calc(100vw/ 3)` |
| `.min-w-two-thirds-screen` | min-width | `calc(100vw/ 1.5)` |
| `.min-w-quarter-screen` | min-width | `25vw` |
| `.min-w-three-quarters-screen` | min-width | `75vw` |
| `.min-w-full-screen` | min-width | `100vw` |
| `.min-w-0` | min-width | `var(--graupl-spacer-0)` |
| `.min-w-1` | min-width | `var(--graupl-spacer-1)` |
| `.min-w-2` | min-width | `var(--graupl-spacer-2)` |
| `.min-w-3` | min-width | `var(--graupl-spacer-3)` |
| `.min-w-4` | min-width | `var(--graupl-spacer-4)` |
| `.min-w-5` | min-width | `var(--graupl-spacer-5)` |
| `.min-w-6` | min-width | `var(--graupl-spacer-6)` |
| `.min-w-7` | min-width | `var(--graupl-spacer-7)` |
| `.min-w-8` | min-width | `var(--graupl-spacer-8)` |
| `.min-w-9` | min-width | `var(--graupl-spacer-9)` |
| `.min-w-10` | min-width | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex g-5 h-full`">
        <div :class="`bordered border-primary-700 text-primary-100 py-3 bg-primary-300 ${minContent}`">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ minContent }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-min-width">Width property</label>
    <select id="select-min-width" v-model="minContent">
      <option value="min-w-auto">Auto</option>
      <option value="min-w-fit-content">Fit Content</option>
      <option value="min-w-min-content">Min Content</option>
      <option value="min-w-min-content">Min Content</option>
      <option value="min-w-stretch">Stretch</option>
      <option value="min-w-full">Full</option>
      <option value="min-w-quarter">Quarter</option>
      <option value="min-w-half">Half</option>
      <option value="min-w-three-quarters">Three Quarters</option>
      <option value="min-w-third">Third</option>
      <option value="min-w-two-thirds">Two Thirds</option>
      <option value="min-w-half-screen">Half Screen</option>
      <option value="min-w-third-screen">Third Screen</option>
      <option value="min-w-two-thirds-screen">Two Thirds Screen</option>
       <option value="min-w-quarter-screen">Quarter Screen</option>
      <option value="min-w-three-quarters-screen">Three Quarters Screen</option>
      <option value="min-w-full-screen">Full Screen</option>
      <option value="min-w-0">Spacer 0</option>
      <option value="min-w-1">Spacer 1</option>
      <option value="min-w-2">Spacer 2</option>
      <option value="min-w-3">Spacer 3</option>
      <option value="min-w-4">Spacer 4</option>
      <option value="min-w-5">Spacer 5</option>
      <option value="min-w-6">Spacer 6</option>
      <option value="min-w-7">Spacer 7</option>
      <option value="min-w-8">Spacer 8</option>
      <option value="min-w-9">Spacer 9</option>
      <option value="min-w-10">Spacer 10</option>
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

By default, no responsive utility classes are generated for width.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
