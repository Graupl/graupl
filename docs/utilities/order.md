<script setup>
  import { ref } from "vue";

  const order = ref("order-none");
</script>

# Order Utilities

The order utilities provide a set of classes to adjust the `order` properties of elements.

## Order

| Class Name | Property | Value |
| --- | --- | --- |
| `.order-none` | order | `0` |
| `.order-first` | order | `-9999` |
| `.order-last` | order | `9999` |
| `.order-1` | order | `1` |
| `.order-2` | order | `2` |
| `.order-3` | order | `3` |
| `.order-4` | order | `4` |
| `.order-5` | order | `5` |
| `.order-6` | order | `6` |
| `.order-7` | order | `7` |
| `.order-8` | order | `8` |
| `.order-9` | order | `9` |
| `.order-10` | order | `10` |
| `.order-11` | order | `11` |
| `.order-12` | order | `12` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid g-5 h-auto" style="grid-template-columns: repeat(4, max-content); grid-template-rows: auto;">
        <div :class="` bordered border-tertiary-700 text-primary-100 bg-tertiary-300 p-3 ${order} `">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-1">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-2">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-3">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-4">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-5">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-6">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-7">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-8">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-9">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-10">Test Item</div>
        <div class="bordered border-primary-700 text-primary-100 bg-primary-300 p-3 order-11">Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ order }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-order">Width property</label>
    <select id="select-order" v-model="order">
      <option value="order-none">None</option>
      <option value="order-first">First</option>
      <option value="order-last">Last</option>
      <option value="order-1">Order 1</option>
      <option value="order-2">Order 2</option>
      <option value="order-3">Order 3</option>
      <option value="order-4">Order 4</option>
      <option value="order-5">Order 5</option>
      <option value="order-6">Order 6</option>
      <option value="order-7">Order 7</option>
      <option value="order-8">Order 8</option>
      <option value="order-9">Order 9</option>
      <option value="order-10">Order 10</option>
      <option value="order-11">Order 11</option>
      <option value="order-12">Order 12</option>
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
| `$order-max-count` | The maximum number for generated order classes. | `12` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, screen-aware responsive utility classes are generated for order.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
