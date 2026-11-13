<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const order = ref("order-none");
  const block = "bordered border-primary-700 bg-primary-300 text-primary-900 p-3";
  const exampleOrder = computed(() => `<div class="display-grid grid-cols-4 gap-2">
  <div class="bordered border-tertiary-700 bg-tertiary-300 text-tertiary-900 p-3 ${order.value}">1</div>
${Array.from({ length: 11 }, (_, index) => `  <div class="${block} order-${index + 1}">${index + 2}</div>`).join("\n")}
</div>`);
</script>

# Order Utilities

The order utilities provide a set of classes to change the visual order of flex and grid items. The DOM order and keyboard focus order stay the same.

## Order

Items with lower order values appear first. Items with the same value appear in DOM order. Change the class on the pink block to move it among the numbered blocks.

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

<live-example :source-code="exampleOrder" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-order">Order class for block 1</label>
      <select id="select-order" v-model="order">
        <option value="order-none">.order-none</option>
        <option value="order-first">.order-first</option>
        <option value="order-last">.order-last</option>
        <option value="order-1">.order-1</option>
        <option value="order-2">.order-2</option>
        <option value="order-3">.order-3</option>
        <option value="order-4">.order-4</option>
        <option value="order-5">.order-5</option>
        <option value="order-6">.order-6</option>
        <option value="order-7">.order-7</option>
        <option value="order-8">.order-8</option>
        <option value="order-9">.order-9</option>
        <option value="order-10">.order-10</option>
        <option value="order-11">.order-11</option>
        <option value="order-12">.order-12</option>
      </select>
    </div>
  </template>
</live-example>

## Sass variables

The following Sass variables can be used to customize the generation of the order utilities.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | Base selector for utility classes. | `"."` |
| `$selector-prefix` | The selector prefix for all utility classes. | `""` |
| `$selector-suffix` | The selector suffix for all utility classes. | `""` |
| `$selector-separator` | The selector separator for all utility classes. | `""` |
| `$use-important` | Appends `!important` to generated utility declarations. | `true` |
| `$generate-base-utilities` | Generates the base utility classes. | `true` |
| `$screen-aware` | Enables screen-aware utility variants. | `true` |
| `$theme-aware` | Enables theme-aware utility variants. | `false` |
| `$scheme-aware` | Enables scheme-aware utility variants. | `false` |
| `$state-aware` | Enables state-aware utility variants. | `false` |
| `$container-aware` | Enables container-aware utility variants. | `true` |
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

Screen-aware classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
