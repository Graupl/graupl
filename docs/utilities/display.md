<script setup>
  import { ref } from "vue";

  const display = ref("display-block");
</script>

# Display Utilities

The display utilities provide a set of classes to adjust the `display` properties of elements.

## Display

| Class Name | Property | Value |
| --- | --- | --- |
| `.display-block` | display | `block` |
| `.display-inline-block` | display | `inline-block` |
| `.display-inline` | display | `inline` |
| `.display-flex` | display | `flex` |
| `.display-inline-flex` | display | `inline-flex` |
| `.display-grid` | display | `grid` |
| `.display-inline-grid` | display | `inline-grid` |
| `.display-flow-root` | display | `flow-root` |
| `.display-none` | display | `none` |
| `.display-contents` | display | `contents` |
| `.display-list-item` | display | `list-item` |

<div class="example">
  <div class="example-container">
    <div class="example-display px-6">
      <div :class="` ${display} g-5 border-dashed border-tertiary-500 `" style="grid-template-columns: repeat(3, min-content); grid-template-rows: auto;">
        <div class="display-inline-block bordered border-primary-700 bg-primary-300 p-5 w-auto h-auto m-3"></div>
        <div class="display-inline-block bordered border-primary-700 bg-primary-300 p-5 w-auto h-auto m-3"></div>
        <div class="display-inline-block bordered border-primary-700 bg-primary-300 p-5 w-auto h-auto m-3"></div>
        <div class="display-inline-block bordered border-primary-700 bg-primary-300 p-5 w-auto h-auto m-3"></div>
        <div class="display-inline-block bordered border-primary-700 bg-primary-300 p-5 w-auto h-auto m-3"></div>
        <div class="display-inline-block bordered border-primary-700 bg-primary-300 p-5 w-auto h-auto m-3"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ display }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-display">Display property</label>
    <select id="select-display" v-model="display">
      <option value="display-block">Block</option>
      <option value="display-inline-block">Inline Block</option>
      <option value="display-inline">Inline</option>
      <option value="display-flex">Flex</option>
      <option value="display-inline-flex">Inline flex</option>
      <option value="display-grid">Grid</option>
      <option value="display-inline-grid">Inline Grid</option>
      <option value="display-flow-root">Flow Root</option>
      <option value="display-none">None</option>
      <option value="display-contents">Contents</option>
      <option value="display-list-item">List Item</option>
    </select>
  </div>
</div>

## Customization

To customize the display utilities, you can use the following variables.

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

By default, screen-aware responsive utility classes are generated for display.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
