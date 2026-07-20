<script setup>
  import { ref, computed } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const overflow = ref("overflow-auto");
  const overflowX = ref("overflow-x-auto");
  const overflowY = ref("overflow-y-auto");
  const overflowBlock = ref("overflow-block-auto");
  const overflowInline = ref("overflow-inline-auto");

  const exampleOverflow = computed(() => {
    const classes = [
      "h-10",
      "w-10",
      "p-5",
      "mb-7",
      "bordered",
      overflow.value,
    ].filter((c) => c !== null).join(" ");

    return `
<div class="${classes}">
  <div class="h-10 w-10 p-5 bordered bg-tertiary-200 border-color-tertiary-700"
</div>
    `;
  });

  const exampleOverflowX = computed(() => {
    const classes = [
      "h-10",
      "w-10",
      "p-5",
      "bordered",
      overflowX.value,
    ].filter((c) => c !== null).join(" ");

    return `
<div class="${classes}">
  <div class="w-10 p-5 bordered bg-tertiary-200 border-color-tertiary-700"
</div>
    `;
  });

  const exampleOverflowY = computed(() => {
    const classes = [
      "h-10",
      "w-10",
      "p-5",
      "mb-7",
      "bordered",
      overflowY.value,
    ].filter((c) => c !== null).join(" ");

    return `
<div class="${classes}">
  <div class="h-10 p-5 bordered bg-tertiary-200 border-color-tertiary-700"
</div>
    `;
  });

  const exampleOverflowInline = computed(() => {
    const classes = [
      "h-10",
      "w-10",
      "p-5",
      "bordered",
      overflowInline.value,
    ].filter((c) => c !== null).join(" ");

    return `
<div class="${classes}">
  <div class="w-10 p-5 bordered bg-tertiary-200 border-color-tertiary-700"
</div>
    `;
  });

  const exampleOverflowBlock = computed(() => {
    const classes = [
      "h-10",
      "w-10",
      "p-5",
      "mb-7",
      "bordered",
      overflowBlock.value,
    ].filter((c) => c !== null).join(" ");

    return `
<div class="${classes}">
  <div class="h-10 p-5 bordered bg-tertiary-200 border-color-tertiary-700"
</div>
    `;
  });
</script>

# Overflow Utilities

The overflow utilities provide a set of classes to adjust the `overflow`, `overflow-x`, `overflow-y`, `overflow-block`, and `overflow-inline` properties of elements.

## Overflow

| Class Name | Property | Value |
| --- | --- | --- |
| `.overflow-auto` | overflow | `auto` |
| `.overflow-visible` | overflow | `visible` |
| `.overflow-hidden` | overflow | `hidden` |
| `.overflow-clip` | overflow | `clip` |
| `.overflow-scroll` | overflow | `scroll` |

<live-example :source-code="exampleOverflow" :key="overflow" example-class="min-h-max-content">
  <template #options>
    <div class="input-group">
      <label for="select-overflow">Overflow</label>
      <select id="select-overflow" v-model="overflow">
        <option value="overflow-auto">Auto</option>
        <option value="overflow-visible">Visible</option>
        <option value="overflow-hidden">Hidden</option>
        <option value="overflow-clip">Clip</option>
        <option value="overflow-scroll">Scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Overflow X

| Class Name | Property | Value |
| --- | --- | --- |
| `.overflow-x-auto` | overflow-x | `auto` |
| `.overflow-x-visible` | overflow-x | `visible` |
| `.overflow-x-hidden` | overflow-x | `hidden` |
| `.overflow-x-clip` | overflow-x | `clip` |
| `.overflow-x-scroll` | overflow-x | `scroll` |

<live-example :source-code="exampleOverflowX" :key="overflowX" example-class="min-h-max-content">
  <template #options>
    <div class="input-group">
      <label for="select-overflow">Overflow X</label>
      <select id="select-overflow" v-model="overflowX">
        <option value="overflow-x-auto">Auto</option>
        <option value="overflow-x-visible">Visible</option>
        <option value="overflow-x-hidden">Hidden</option>
        <option value="overflow-x-clip">Clip</option>
        <option value="overflow-x-scroll">Scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Overflow Y

| Class Name | Property | Value |
| --- | --- | --- |
| `.overflow-y-auto` | overflow-y | `auto` |
| `.overflow-y-visible` | overflow-y | `visible` |
| `.overflow-y-hidden` | overflow-y | `hidden` |
| `.overflow-y-clip` | overflow-y | `clip` |
| `.overflow-y-scroll` | overflow-y | `scroll` |

<live-example :source-code="exampleOverflowY" :key="overflowY" example-class="min-h-max-content">
  <template #options>
    <div class="input-group">
      <label for="select-overflow">Overflow Y</label>
      <select id="select-overflow" v-model="overflowY">
        <option value="overflow-y-auto">Auto</option>
        <option value="overflow-y-visible">Visible</option>
        <option value="overflow-y-hidden">Hidden</option>
        <option value="overflow-y-clip">Clip</option>
        <option value="overflow-y-scroll">Scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Overflow Inline

| Class Name | Property | Value |
| --- | --- | --- |
| `.overflow-inline-auto` | overflow-inline | `auto` |
| `.overflow-inline-visible` | overflow-inline | `visible` |
| `.overflow-inline-hidden` | overflow-inline | `hidden` |
| `.overflow-inline-clip` | overflow-inline | `clip` |
| `.overflow-inline-scroll` | overflow-inline | `scroll` |

<live-example :source-code="exampleOverflowInline" :key="overflowInline" example-class="min-h-max-content">
  <template #options>
    <div class="input-group">
      <label for="select-overflow">Overflow inline</label>
      <select id="select-overflow" v-model="overflowInline">
        <option value="overflow-inline-auto">Auto</option>
        <option value="overflow-inline-visible">Visible</option>
        <option value="overflow-inline-hidden">Hidden</option>
        <option value="overflow-inline-clip">Clip</option>
        <option value="overflow-inline-scroll">Scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Overflow Block

| Class Name | Property | Value |
| --- | --- | --- |
| `.overflow-block-auto` | overflow-block | `auto` |
| `.overflow-block-visible` | overflow-block | `visible` |
| `.overflow-block-hidden` | overflow-block | `hidden` |
| `.overflow-block-clip` | overflow-block | `clip` |
| `.overflow-block-scroll` | overflow-block | `scroll` |

<live-example :source-code="exampleOverflowBlock" :key="overflowBlock" example-class="min-h-max-content">
  <template #options>
    <div class="input-group">
      <label for="select-overflow">Overflow block</label>
      <select id="select-overflow" v-model="overflowBlock">
        <option value="overflow-block-auto">Auto</option>
        <option value="overflow-block-visible">Visible</option>
        <option value="overflow-block-hidden">Hidden</option>
        <option value="overflow-block-clip">Clip</option>
        <option value="overflow-block-scroll">Scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Customization

To customize the overflow utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for overflow.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
