<script setup>
  import { ref } from "vue";

  const gradient = ref("gradient");
  const gradientDirection = ref("gradient gradient-direction-to-top");
  const gradientFrom = ref("from-transparent");
  const gradientTo = ref("to-transparent");
</script>

# Gradient Utilities

The gradient utilities provide a set of classes to adjust the color `background-image` properties of elements for the purpose of creating gradients.

## Gradient Type

| Class Name | Property | Value |
| --- | --- | --- |
| `.gradient` | background-image | `linear-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |
| `.gradient-linear` | background-image | `linear-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |
| `.gradient-radial` | background-image | `radial-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="` display-flex bordered border-primary-700 ${gradient} from-transparent to-primary-300 h-full `">
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gradient }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-gradient">Gradient property</label>
    <select id="select-gradient" v-model="gradient">
      <option value="gradient">Gradient</option>
      <option value="gradient-linear">Linear Gradient</option>
      <option value="gradient-radial">Radial Gradient</option>
    </select>
  </div>
</div>

## Custom Gradient Properties

Used to customize gradient types.

| Custom Property | Description | Default Value |
| --- | --- | --- |
| `--graupl-gradient-from` | Starting color used by generated gradients | `transparent` |
| `--graupl-gradient-from-position` | Start color stop position used for generated gradients | `0%` |
| `--graupl-gradient-to` | Ending color used by generated gradients | `transparent` |
| `--graupl-gradient-to-position`| `End color stop position used for generated gradients` | `100%` |
| `--graupl-gradient-direction` | Direction/shape keyword consumed by gradient utilities | `to right` (gradient-linear), `circle` (gradient-radial)` |

## Gradient Direction

| Class Name | Property | Value |
| --- | --- | --- |
| `.gradient-direction-to-top` | --graupl-gradient-direction | `to top` |
| `.gradient-direction-to-right` | --graupl-gradient-direction | `to right` |
| `.gradient-direction-to-bottom` | --graupl-gradient-direction | `to bottom` |
| `.gradient-direction-to-left` | --graupl-gradient-direction | `to left` |
| `.gradient-direction-circle` | --graupl-gradient-direction | `circle` |
| `.gradient-direction-circle-at-top` | --graupl-gradient-direction | `circle at top` |
| `.gradient-direction-circle-at-right` | --graupl-gradient-direction | `circle at right` |
| `.gradient-direction-circle-at-bottom` | --graupl-gradient-direction | `circle at bottom` |
| `.gradient-direction-circle-at-left` | --graupl-gradient-direction | `circle at left` |
| `.gradient-direction-ellipse` | --graupl-gradient-direction | `ellipse` |
| `.gradient-direction-ellipse-at-top` | --graupl-gradient-direction | `ellipse at top` |
| `.gradient-direction-ellipse-at-right` | --graupl-gradient-direction | `ellipse at right` |
| `.gradient-direction-ellipse-at-bottom` | --graupl-gradient-direction | `ellipse at bottom` |
| `.gradient-direction-ellipse-at-left` | --graupl-gradient-direction | `ellipse at left` |
| `.gradient-direction-closest-side` | --graupl-gradient-direction | `closest-side` |
| `.gradient-direction-closest-corner` | --graupl-gradient-direction | `closest-corner` |
| `.gradient-direction-farthest-side` | --graupl-gradient-direction | `farthest-side` |
| `.gradient-direction-farthest-corner` | --graupl-gradient-direction | `farthest-corner` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="` display-flex bordered border-primary-700 gradient h-full ${gradientDirection} from-transparent to-primary-300 `">
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gradientDirection }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-gradient-direction">Gradient Direction property</label>
    <select id="select-gradient-direction" v-model="gradientDirection">
      <option value="gradient gradient-direction-to-top">To Top</option>
      <option value="gradient gradient-direction-to-right">To Right</option>
      <option value="gradient gradient-direction-to-bottom">To Bottom</option>
      <option value="gradient gradient-direction-to-left">To Left</option>
      <option value="gradient-radial gradient-direction-circle">Circle</option>
      <option value="gradient-radial gradient-direction-circle-at-top">Circle To Top</option>
      <option value="gradient-radial gradient-direction-circle-at-right">Circle To Right</option>
      <option value="gradient-radial gradient-direction-circle-at-bottom">Circle To Bottom</option>
      <option value="gradient-radial gradient-direction-circle-at-left">Circle To Left</option>
      <option value="gradient-radial gradient-direction-ellipse">Ellipse</option>
      <option value="gradient-radial gradient-direction-ellipse-at-top">Ellipse To Top</option>
      <option value="gradient-radial gradient-direction-ellipse-at-right">Ellipse To Right</option>
      <option value="gradient-radial gradient-direction-ellipse-at-bottom">Ellipse To Bottom</option>
      <option value="gradient-radial gradient-direction-ellipse-at-left">Ellipse To Left</option>
      <option value="gradient-radial gradient-direction-closest-side">Closest Side</option>
      <option value="gradient-radial gradient-direction-closest-corner">Closest Corner</option>
      <option value="gradient-radial gradient-direction-farthest-side">Farthest Side</option>
      <option value="gradient-radial gradient-direction-farthest-corner">Farthest Corner</option>
    </select>
  </div>
</div>

## Gradient From Color

| Class Name | Property | Value |
| --- | --- | --- |
| `.from-transparent` | --graupl-gradient-from | `transparent` |
| `.from-primary` | --graupl-gradient-from | `var(--graupl-theme-active--primary)` |
| `.from-primary-100` | --graupl-gradient-from | `var(--graupl-theme-active--primary--100)` |
| `.from-primary-200` | --graupl-gradient-from | `var(--graupl-theme-active--primary--200)` |
| `.from-primary-300` | --graupl-gradient-from | `var(--graupl-theme-active--primary--300)` |
| `.from-primary-400` | --graupl-gradient-from | `var(--graupl-theme-active--primary--400)` |
| `.from-primary-500` | --graupl-gradient-from | `var(--graupl-theme-active--primary--500)` |
| `.from-primary-600` | --graupl-gradient-from | `var(--graupl-theme-active--primary--600)` |
| `.from-primary-700` | --graupl-gradient-from | `var(--graupl-theme-active--primary--700)` |
| `.from-primary-800` | --graupl-gradient-from | `var(--graupl-theme-active--primary--800)` |
| `.from-primary-900` | --graupl-gradient-from | `var(--graupl-theme-active--primary--900)` |
| `.from-secondary` | --graupl-gradient-from | `var(--graupl-theme-active--secondary)` |
| `.from-secondary-100` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--100)` |
| `.from-secondary-200` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--200)` |
| `.from-secondary-300` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--300)` |
| `.from-secondary-400` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--400)` |
| `.from-secondary-500` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--500)` |
| `.from-secondary-600` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--600)` |
| `.from-secondary-700` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--700)` |
| `.from-secondary-800` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--800)` |
| `.from-secondary-900` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--900)` |
| `.from-tertiary` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary)` |
| `.from-tertiary-100` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--100)` |
| `.from-tertiary-200` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--200)` |
| `.from-tertiary-300` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--300)` |
| `.from-tertiary-400` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--400)` |
| `.from-tertiary-500` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--500)` |
| `.from-tertiary-600` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--600)` |
| `.from-tertiary-700` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--700)` |
| `.from-tertiary-800` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--800)` |
| `.from-tertiary-900` | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--900)` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="` display-flex is-full bs-full bordered border-primary-700 gradient ${gradientFrom} to-primary-300 `">
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gradientFrom }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-gradient-from">Gradient From property</label>
    <select id="select-gradient-from" v-model="gradientFrom">
      <option value="from-transparent">Transparent</option>
      <option value="from-primary">Primary</option>
      <option value="from-primary-100">Primary 100</option>
      <option value="from-primary-200">Primary 200</option>
      <option value="from-primary-300">Primary 300</option>
      <option value="from-primary-400">Primary 400</option>
      <option value="from-primary-500">Primary 500</option>
      <option value="from-primary-600">Primary 600</option>
      <option value="from-primary-700">Primary 700</option>
      <option value="from-primary-800">Primary 800</option>
      <option value="from-primary-900">Primary 900</option>
      <option value="from-secondary-100">Secondary 100</option>
      <option value="from-secondary-200">Secondary 200</option>
      <option value="from-secondary-300">Secondary 300</option>
      <option value="from-secondary-400">Secondary 400</option>
      <option value="from-secondary-500">Secondary 500</option>
      <option value="from-secondary-600">Secondary 600</option>
      <option value="from-secondary-700">Secondary 700</option>
      <option value="from-secondary-800">Secondary 800</option>
      <option value="from-secondary-900">Secondary 900</option>
      <option value="from-tertiary-100">Tertiary 100</option>
      <option value="from-tertiary-200">Tertiary 200</option>
      <option value="from-tertiary-300">Tertiary 300</option>
      <option value="from-tertiary-400">Tertiary 400</option>
      <option value="from-tertiary-500">Tertiary 500</option>
      <option value="from-tertiary-600">Tertiary 600</option>
      <option value="from-tertiary-700">Tertiary 700</option>
      <option value="from-tertiary-800">Tertiary 800</option>
      <option value="from-tertiary-900">Tertiary 900</option>
    </select>
  </div>
</div>

## Gradient To Color

| Class Name | Property | Value |
| --- | --- | --- |
| `.to-transparent` | --graupl-gradient-to | `transparent` |
| `.to-primary` | --graupl-gradient-to | `var(--graupl-theme-active--primary)` |
| `.to-primary-100` | --graupl-gradient-to | `var(--graupl-theme-active--primary--100)` |
| `.to-primary-200` | --graupl-gradient-to | `var(--graupl-theme-active--primary--200)` |
| `.to-primary-300` | --graupl-gradient-to | `var(--graupl-theme-active--primary--300)` |
| `.to-primary-400` | --graupl-gradient-to | `var(--graupl-theme-active--primary--400)` |
| `.to-primary-500` | --graupl-gradient-to | `var(--graupl-theme-active--primary--500)` |
| `.to-primary-600` | --graupl-gradient-to | `var(--graupl-theme-active--primary--600)` |
| `.to-primary-700` | --graupl-gradient-to | `var(--graupl-theme-active--primary--700)` |
| `.to-primary-800` | --graupl-gradient-to | `var(--graupl-theme-active--primary--800)` |
| `.to-primary-900` | --graupl-gradient-to | `var(--graupl-theme-active--primary--900)` |
| `.to-secondary` | --graupl-gradient-to | `var(--graupl-theme-active--secondary)` |
| `.to-secondary-100` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--100)` |
| `.to-secondary-200` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--200)` |
| `.to-secondary-300` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--300)` |
| `.to-secondary-400` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--400)` |
| `.to-secondary-500` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--500)` |
| `.to-secondary-600` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--600)` |
| `.to-secondary-700` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--700)` |
| `.to-secondary-800` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--800)` |
| `.to-secondary-900` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--900)` |
| `.to-tertiary` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary)` |
| `.to-tertiary-100` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--100)` |
| `.to-tertiary-200` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--200)` |
| `.to-tertiary-300` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--300)` |
| `.to-tertiary-400` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--400)` |
| `.to-tertiary-500` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--500)` |
| `.to-tertiary-600` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--600)` |
| `.to-tertiary-700` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--700)` |
| `.to-tertiary-800` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--800)` |
| `.to-tertiary-900` | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--900)` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="` display-flex is-full bs-full bordered border-primary-700 gradient ${gradientTo} from-primary-300 `">
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gradientTo }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-gradient-to">Gradient To property</label>
    <select id="select-gradient-to" v-model="gradientTo">
      <option value="to-transparent">Transparent</option>
      <option value="to-primary">Primary</option>
      <option value="to-primary-100">Primary 100</option>
      <option value="to-primary-200">Primary 200</option>
      <option value="to-primary-300">Primary 300</option>
      <option value="to-primary-400">Primary 400</option>
      <option value="to-primary-500">Primary 500</option>
      <option value="to-primary-600">Primary 600</option>
      <option value="to-primary-700">Primary 700</option>
      <option value="to-primary-800">Primary 800</option>
      <option value="to-primary-900">Primary 900</option>
      <option value="to-secondary-100">Secondary 100</option>
      <option value="to-secondary-200">Secondary 200</option>
      <option value="to-secondary-300">Secondary 300</option>
      <option value="to-secondary-400">Secondary 400</option>
      <option value="to-secondary-500">Secondary 500</option>
      <option value="to-secondary-600">Secondary 600</option>
      <option value="to-secondary-700">Secondary 700</option>
      <option value="to-secondary-800">Secondary 800</option>
      <option value="to-secondary-900">Secondary 900</option>
      <option value="to-tertiary-100">Tertiary 100</option>
      <option value="to-tertiary-200">Tertiary 200</option>
      <option value="to-tertiary-300">Tertiary 300</option>
      <option value="to-tertiary-400">Tertiary 400</option>
      <option value="to-tertiary-500">Tertiary 500</option>
      <option value="to-tertiary-600">Tertiary 600</option>
      <option value="to-tertiary-700">Tertiary 700</option>
      <option value="to-tertiary-800">Tertiary 800</option>
      <option value="to-tertiary-900">Tertiary 900</option>
    </select>
  </div>
</div>

## Customization

To customize the gradient utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for gradient.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
