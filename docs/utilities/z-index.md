<script setup>
  import { ref } from "vue";

  const zIndex = ref("z-n1");
</script>

# Z Index Utilities

The z-index utilities provide a set of classes to adjust the `z-index` properties of elements.

## Z Index

| Class Name | Property | Value |
| --- | --- | --- |
| `.z-n1` | z-index | `-1` |
| `.z-0` | z-index | `0` |
| `.z-1` | z-index | `1` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display gradient from-transparent  to-primary-100 bordered border-primary-700 position-relative">
      <div class="bg-tertiary-200 bordered border-tertiary-700 pl-3 h-8 m-2 mt-8 position-relative z-0">Z Index 0</div>
      <div class="bg-primary-200 bordered border-tertiary-700 w-two-thirds p-4 position-absolute bottom-quarter left-quarter z-1">Z Index 1</div>
      <div :class="`bg-secondary-400 text-primary-100 bordered border-tertiary-700 p-4 w-10 h-10 left-half top-0
      position-absolute ${zIndex}`">{{ zIndex }}</div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ zIndex }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-z-index">Z Index property</label>
    <select id="select-z-index" v-model="zIndex">
      <option value="z-n1">Index -1</option>
      <option value="z-0">Index 0</option>
      <option value="z-1">Index 1</option>
    </select>
  </div>
</div>

## Customization

To customize the z-index utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for z-index.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
