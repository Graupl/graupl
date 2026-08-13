<script setup>
  import { ref, computed } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const content = ref("align-content-normal");
  const items = ref("align-items-start");
  const self = ref("align-self-auto");

  const exampleAlignContent = computed(() => {
    const containerClasses = [
      "display-grid",
      "h-10",
      content.value,
    ].filter(c => c !== null).join(" ");

    const itemClasses = [
      "bordered",
      "min-h-7",
      "w-7",
      "border-primary-700",
      "bg-primary-300",
    ].filter(c => c !== null).join(" ");

    return `
<div class="${containerClasses}">
  <div class="${itemClasses}"></div>
  <div class="${itemClasses}"></div>
  <div class="${itemClasses}"></div>
</div>
    `;
  });

  const exampleAlignItems = computed(() => {
    const containerClasses = [
      "display-flex",
      "h-10",
      items.value,
    ].filter(c => c !== null).join(" ");

    const itemClasses = [
      "bordered",
      "min-h-7",
      "w-7",
      "border-primary-700",
      "bg-primary-300",
    ].filter(c => c !== null).join(" ");

    return `
<div class="${containerClasses}">
  <div class="${itemClasses}"></div>
  <div class="${itemClasses}"></div>
  <div class="${itemClasses}"></div>
</div>
    `;
  });

  const exampleAlignSelf = computed(() => {
    const containerClasses = [
      "display-flex",
      "h-10",
    ].filter(c => c !== null).join(" ");

    const itemClasses = [
      "bordered",
      "min-h-7",
      "w-7",
      "border-primary-700",
      "bg-primary-300",
    ].filter(c => c !== null).join(" ");

    const highlightedItemClasses = [
      "bordered",
      "min-h-7",
      "w-7",
      "border-tertiary-700",
      "bg-tertiary-300",
      self.value,
    ].filter(c => c !== null).join(" ");

    return `
<div class="${containerClasses}">
  <div class="${itemClasses}"></div>
  <div class="${highlightedItemClasses}"></div>
  <div class="${itemClasses}"></div>
</div>
    `;
  });
</script>

# Alignment Utilities

The alignment utilities provide a set of classes to adjust the `align-content`, `align-items`, and `align-self` properties of elements.

## Align Content

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-content-normal` | align-content | `normal` |
| `.align-content-start` | align-content | `flex-start` |
| `.align-content-end` | align-content | `flex-end` |
| `.align-content-center` | align-content | `center` |
| `.align-content-between` | align-content | `space-between` |
| `.align-content-around` | align-content | `space-around` |
| `.align-content-evenly` | align-content | `space-evenly` |
| `.align-content-baseline` | align-content | `baseline` |
| `.align-content-stretch` | align-content | `stretch` |

<live-example :source-code="exampleAlignContent" :key="content">
  <template #options>
    <div class="input-group">
      <label for="select-align-content">Align content property</label>
      <select id="select-align-content" v-model="content">
        <option value="align-content-normal">Normal</option>
        <option value="align-content-start">Start</option>
        <option value="align-content-end">End</option>
        <option value="align-content-center">Center</option>
        <option value="align-content-between">Between</option>
        <option value="align-content-around">Around</option>
        <option value="align-content-evenly">Evenly</option>
        <option value="align-content-baseline">Baseline</option>
        <option value="align-content-stretch">Stretch</option>
      </select>
      <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## Align Items

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-items-start` | align-items | `start` |
| `.align-items-end` | align-items | `end` |
| `.align-items-center` | align-items | `center` |
| `.align-items-baseline` | align-items | `baseline` |
| `.align-items-stretch` | align-items | `stretch` |

<live-example :source-code="exampleAlignItems" :key="items">
  <template #options>
    <div class="input-group">
      <label for="select-align-items">Align items property</label>
      <select id="select-align-items" v-model="items">
        <option value="align-items-start">Start</option>
        <option value="align-items-end">End</option>
        <option value="align-items-center">Center</option>
        <option value="align-items-baseline">Baseline</option>
        <option value="align-items-stretch">Stretch</option>
      </select>
      <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## Align Self

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-self-auto` | align-self | `auto` |
| `.align-self-start` | align-self | `start` |
| `.align-self-end` | align-self | `end` |
| `.align-self-center` | align-self | `center` |
| `.align-self-baseline` | align-self | `baseline` |
| `.align-self-stretch` | align-self | `stretch` |

<live-example :source-code="exampleAlignSelf" :key="self">
  <template #options>
    <div class="input-group">
      <label for="select-align-self">Align self property</label>
      <select id="select-align-self" v-model="self">
        <option value="align-self-auto">Auto</option>
        <option value="align-self-start">Start</option>
        <option value="align-self-end">End</option>
        <option value="align-self-center">Center</option>
        <option value="align-self-baseline">Baseline</option>
        <option value="align-self-stretch">Stretch</option>
      </select>
      <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

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

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
