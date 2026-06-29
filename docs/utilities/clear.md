<script setup>
  import { ref } from "vue";

  const clear = ref("clear-none");
</script>

# Clear Utilities

The clear utilities provide a set of classes to adjust the `clear` properties of elements.

## Clear

| Class Name | Property | Value |
| --- | --- | --- |
| `.clear-none` | clear | `none` |
| `.clear-left` | clear | `left` |
| `.clear-right` | clear | `right` |
| `.clear-both` | clear | `both` |
| `.clear-inline-start` | clear | `inline-start` |
| `.clear-inline-end` | clear | `inline-end` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="` w-full h-full `">
        <div class="float-right bordered border-primary-700 bg-primary-300 p-7 h-two-thirds m-3"></div>
        <div class="float-left bordered border-secondary-700 bg-secondary-300 p-7 m-3"></div>
        <div :class="` ${clear} bordered border-tertiary-700 bg-tertiary-300 p-5 m-3 `"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="p-5 {{ clear }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-clear">clear property</label>
    <select id="select-clear" v-model="clear">
      <option value="clear-none">None</option>
      <option value="clear-left">Left</option>
      <option value="clear-right">Right</option>
      <option value="clear-both">Both</option>
      <option value="clear-inline-start">Inline-start</option>
      <option value="clear-inline-end">Inline End</option>
    </select>
  </div>
</div>

## Customization

To customize the clear utilities, you can use the following variables.

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

By default, screen-aware classes are generated for clear.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
