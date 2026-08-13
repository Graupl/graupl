<script setup>
  import { ref } from "vue";

  const backgroundColor = ref("bg-primary");
  const textColor = ref("text-primary");
</script>

# Color Utilities

The color utilities provide a set of classes to adjust the `color` and `background` properties of elements.

## Background Color

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-primary` | background, --graupl-background | `var(--graupl-theme-active--primary)` |
| `.bg-primary-100` | background, --graupl-background | `var(--graupl-theme-active--primary--100)` |
| `.bg-primary-200` | background, --graupl-background | `var(--graupl-theme-active--primary--200)` |
| `.bg-primary-300` | background, --graupl-background | `var(--graupl-theme-active--primary--300)` |
| `.bg-primary-400` | background, --graupl-background | `var(--graupl-theme-active--primary--400)` |
| `.bg-primary-500` | background, --graupl-background | `var(--graupl-theme-active--primary--500)` |
| `.bg-primary-600` | background, --graupl-background | `var(--graupl-theme-active--primary--600)` |
| `.bg-primary-700` | background, --graupl-background | `var(--graupl-theme-active--primary--700)` |
| `.bg-primary-800` | background, --graupl-background | `var(--graupl-theme-active--primary--800)` |
| `.bg-primary-900` | background, --graupl-background | `var(--graupl-theme-active--primary--900)` |
| `.bg-secondary` | background, --graupl-background | `var(--graupl-theme-active--secondary)` |
| `.bg-secondary-100` | background, --graupl-background | `var(--graupl-theme-active--secondary--100)` |
| `.bg-secondary-200` | background, --graupl-background | `var(--graupl-theme-active--secondary--200)` |
| `.bg-secondary-300` | background, --graupl-background | `var(--graupl-theme-active--secondary--300)` |
| `.bg-secondary-400` | background, --graupl-background | `var(--graupl-theme-active--secondary--400)` |
| `.bg-secondary-500` | background, --graupl-background | `var(--graupl-theme-active--secondary--500)` |
| `.bg-secondary-600` | background, --graupl-background | `var(--graupl-theme-active--secondary--600)` |
| `.bg-secondary-700` | background, --graupl-background | `var(--graupl-theme-active--secondary--700)` |
| `.bg-secondary-800` | background, --graupl-background | `var(--graupl-theme-active--secondary--800)` |
| `.bg-secondary-900` | background, --graupl-background | `var(--graupl-theme-active--secondary--900)` |
| `.bg-tertiary` | background, --graupl-background | `var(--graupl-theme-active--tertiary)` |
| `.bg-tertiary-100` | background, --graupl-background | `var(--graupl-theme-active--tertiary--100)` |
| `.bg-tertiary-200` | background, --graupl-background | `var(--graupl-theme-active--tertiary--200)` |
| `.bg-tertiary-300` | background, --graupl-background | `var(--graupl-theme-active--tertiary--300)` |
| `.bg-tertiary-400` | background, --graupl-background | `var(--graupl-theme-active--tertiary--400)` |
| `.bg-tertiary-500` | background, --graupl-background | `var(--graupl-theme-active--tertiary--500)` |
| `.bg-tertiary-600` | background, --graupl-background | `var(--graupl-theme-active--tertiary--600)` |
| `.bg-tertiary-700` | background, --graupl-background | `var(--graupl-theme-active--tertiary--700)` |
| `.bg-tertiary-800` | background, --graupl-background | `var(--graupl-theme-active--tertiary--800)` |
| `.bg-tertiary-900` | background, --graupl-background | `var(--graupl-theme-active--tertiary--900)` |
| `.bg-inherit` | background, --graupl-background | `inherit` |
| `.bg-current` | background, --graupl-background | `currentColor` |
| `.bg-transparent` | background, --graupl-background | `transparent` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex h-full `">
        <div :class="`bordered text-primary-100 border-primary-700 w-quarter h-half ${backgroundColor}`"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ backgroundColor }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-background-color">Background Color property</label>
    <select id="select-background-color" v-model="backgroundColor">
      <option value="bg-primary">Primary</option>
      <option value="bg-primary-100">Primary 100</option>
      <option value="bg-primary-200">Primary 200</option>
      <option value="bg-primary-300">Primary 300</option>
      <option value="bg-primary-400">Primary 400</option>
      <option value="bg-primary-500">Primary 500</option>
      <option value="bg-primary-600">Primary 600</option>
      <option value="bg-primary-700">Primary 700</option>
      <option value="bg-primary-800">Primary 800</option>
      <option value="bg-primary-900">Primary 900</option>
      <option value="bg-secondary">Secondary</option>
      <option value="bg-secondary-100">Secondary 100</option>
      <option value="bg-secondary-200">Secondary 200</option>
      <option value="bg-secondary-300">Secondary 300</option>
      <option value="bg-secondary-400">Secondary 400</option>
      <option value="bg-secondary-500">Secondary 500</option>
      <option value="bg-secondary-600">Secondary 600</option>
      <option value="bg-secondary-700">Secondary 700</option>
      <option value="bg-secondary-800">Secondary 800</option>
      <option value="bg-secondary-900">Secondary 900</option>
      <option value="bg-tertiary">Tertiary</option>
      <option value="bg-tertiary-100">Tertiary 100</option>
      <option value="bg-tertiary-200">Tertiary 200</option>
      <option value="bg-tertiary-300">Tertiary 300</option>
      <option value="bg-tertiary-400">Tertiary 400</option>
      <option value="bg-tertiary-500">Tertiary 500</option>
      <option value="bg-tertiary-600">Tertiary 600</option>
      <option value="bg-tertiary-700">Tertiary 700</option>
      <option value="bg-tertiary-800">Tertiary 800</option>
      <option value="bg-tertiary-900">Tertiary 900</option>
      <option value="bg-inherit">Inherit</option>
      <option value="bg-current">Current</option>
      <option value="bg-transparent">Transparent</option>
    </select>
  </div>
</div>

## Text Color

| Class Name | Property | Value |
| --- | --- | --- |
| `.text-primary` | color, --graupl-color | `var(--graupl-theme-active--primary)` |
| `.text-primary-100` | color, --graupl-color | `var(--graupl-theme-active--primary--100)` |
| `.text-primary-200` | color, --graupl-color | `var(--graupl-theme-active--primary--200)` |
| `.text-primary-300` | color, --graupl-color | `var(--graupl-theme-active--primary--300)` |
| `.text-primary-400` | color, --graupl-color | `var(--graupl-theme-active--primary--400)` |
| `.text-primary-500` | color, --graupl-color | `var(--graupl-theme-active--primary--500)` |
| `.text-primary-600` | color, --graupl-color | `var(--graupl-theme-active--primary--600)` |
| `.text-primary-700` | color, --graupl-color | `var(--graupl-theme-active--primary--700)` |
| `.text-primary-800` | color, --graupl-color | `var(--graupl-theme-active--primary--800)` |
| `.text-primary-900` | color, --graupl-color | `var(--graupl-theme-active--primary--900)` |
| `.text-secondary` | color, --graupl-color | `var(--graupl-theme-active--secondary)` |
| `.text-secondary-100` | color, --graupl-color | `var(--graupl-theme-active--secondary--100)` |
| `.text-secondary-200` | color, --graupl-color | `var(--graupl-theme-active--secondary--200)` |
| `.text-secondary-300` | color, --graupl-color | `var(--graupl-theme-active--secondary--300)` |
| `.text-secondary-400` | color, --graupl-color | `var(--graupl-theme-active--secondary--400)` |
| `.text-secondary-500` | color, --graupl-color | `var(--graupl-theme-active--secondary--500)` |
| `.text-secondary-600` | color, --graupl-color | `var(--graupl-theme-active--secondary--600)` |
| `.text-secondary-700` | color, --graupl-color | `var(--graupl-theme-active--secondary--700)` |
| `.text-secondary-800` | color, --graupl-color | `var(--graupl-theme-active--secondary--800)` |
| `.text-secondary-900` | color, --graupl-color | `var(--graupl-theme-active--secondary--900)` |
| `.text-tertiary` | color, --graupl-color | `var(--graupl-theme-active--tertiary)` |
| `.text-tertiary-100` | color, --graupl-color | `var(--graupl-theme-active--tertiary--100)` |
| `.text-tertiary-200` | color, --graupl-color | `var(--graupl-theme-active--tertiary--200)` |
| `.text-tertiary-300` | color, --graupl-color | `var(--graupl-theme-active--tertiary--300)` |
| `.text-tertiary-400` | color, --graupl-color | `var(--graupl-theme-active--tertiary--400)` |
| `.text-tertiary-500` | color, --graupl-color | `var(--graupl-theme-active--tertiary--500)` |
| `.text-tertiary-600` | color, --graupl-color | `var(--graupl-theme-active--tertiary--600)` |
| `.text-tertiary-700` | color, --graupl-color | `var(--graupl-theme-active--tertiary--700)` |
| `.text-tertiary-800` | color, --graupl-color | `var(--graupl-theme-active--tertiary--800)` |
| `.text-tertiary-900` | color, --graupl-color | `var(--graupl-theme-active--tertiary--900)` |
| `.text-inherit` | color, --graupl-color | `inherit` |
| `.text-current` | color, --graupl-color | `currentColor` |
| `.text-transparent` | color, --graupl-color | `transparent` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex h-full g-5 `">
        <div :class="`bordered border-primary-700 bg-primary-100 p-3 align-content-center w-fit-content h-fit-content ${textColor}`"> Text color for Light Background</div>
        <div :class="`bordered border-primary-700 bg-primary-700 p-3 align-content-center w-fit-content h-fit-content ${textColor}`"> Text color for Dark Background</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ textColor }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-text-color">Text Color property</label>
    <select id="select-text-color" v-model="textColor">
      <option value="text-primary">Primary</option>
      <option value="text-primary-100">Primary 100</option>
      <option value="text-primary-200">Primary 200</option>
      <option value="text-primary-300">Primary 300</option>
      <option value="text-primary-400">Primary 400</option>
      <option value="text-primary-500">Primary 500</option>
      <option value="text-primary-600">Primary 600</option>
      <option value="text-primary-700">Primary 700</option>
      <option value="text-primary-800">Primary 800</option>
      <option value="text-primary-900">Primary 900</option>
      <option value="text-secondary">Secondary</option>
      <option value="text-secondary-100">Secondary 100</option>
      <option value="text-secondary-200">Secondary 200</option>
      <option value="text-secondary-300">Secondary 300</option>
      <option value="text-secondary-400">Secondary 400</option>
      <option value="text-secondary-500">Secondary 500</option>
      <option value="text-secondary-600">Secondary 600</option>
      <option value="text-secondary-700">Secondary 700</option>
      <option value="text-secondary-800">Secondary 800</option>
      <option value="text-secondary-900">Secondary 900</option>
      <option value="text-tertiary">Tertiary</option>
      <option value="text-tertiary-100">Tertiary 100</option>
      <option value="text-tertiary-200">Tertiary 200</option>
      <option value="text-tertiary-300">Tertiary 300</option>
      <option value="text-tertiary-400">Tertiary 400</option>
      <option value="text-tertiary-500">Tertiary 500</option>
      <option value="text-tertiary-600">Tertiary 600</option>
      <option value="text-tertiary-700">Tertiary 700</option>
      <option value="text-tertiary-800">Tertiary 800</option>
      <option value="text-tertiary-900">Tertiary 900</option>
      <option value="text-inherit">Inherit</option>
      <option value="text-current">Current</option>
      <option value="text-transparent">Transparent</option>
    </select>
  </div>
</div>

## Customization

To customize the color utilities, you can use the following variables.

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

Generating responsive utility classes can be done by setting `$screen-aware, $theme-aware, $scheme-aware, $state-aware`, or `$container-aware` to `true`.

By default, scheme-aware and state-aware responsive utility classes are generated for color.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
