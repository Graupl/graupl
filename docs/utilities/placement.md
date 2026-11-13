<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const content = ref("place-content-center");
  const items = ref("place-items-start");
  const self = ref("place-self-auto");
  const block = "bordered border-primary-700 bg-primary-300 min-w-7 min-h-7";
  const container = "display-grid h-10 gap-2 bordered border-dashed border-tertiary-700";

  const exampleContent = computed(() => `<div class="${container} ${content.value}" style="grid-template-columns: repeat(2, auto)">
  <div class="${block}"></div>
  <div class="${block}"></div>
  <div class="${block}"></div>
  <div class="${block}"></div>
</div>`);

  const exampleItems = computed(() => `<div class="${container} grid-cols-3 ${items.value}">
  <div class="${block}"></div>
  <div class="${block}"></div>
  <div class="${block}"></div>
</div>`);

  const exampleSelf = computed(() => `<div class="${container} grid-cols-3 place-items-start">
  <div class="${block}"></div>
  <div class="bordered border-tertiary-700 bg-tertiary-300 min-w-7 min-h-7 ${self.value}"></div>
  <div class="${block}"></div>
</div>`);
</script>

# Placement Utilities

The placement utilities provide a set of classes to set alignment and justification together. Use the [Alignment](./alignment.md) and [Justification](./justification.md) utilities to adjust either axis on its own.

## Place Content

Use `place-content-*` on a grid container to position its rows and columns as a group or distribute extra space between them.

| Class Name | Property | Value |
| --- | --- | --- |
| `.place-content-center` | place-content | `center` |
| `.place-content-start` | place-content | `start` |
| `.place-content-end` | place-content | `end` |
| `.place-content-between` | place-content | `space-between` |
| `.place-content-around` | place-content | `space-around` |
| `.place-content-evenly` | place-content | `space-evenly` |
| `.place-content-baseline` | place-content | `baseline` |
| `.place-content-stretch` | place-content | `stretch` |

<live-example :source-code="exampleContent" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-place-content">Place content class</label>
      <select id="select-place-content" v-model="content">
        <option value="place-content-center">.place-content-center</option>
        <option value="place-content-start">.place-content-start</option>
        <option value="place-content-end">.place-content-end</option>
        <option value="place-content-between">.place-content-between</option>
        <option value="place-content-around">.place-content-around</option>
        <option value="place-content-evenly">.place-content-evenly</option>
        <option value="place-content-baseline">.place-content-baseline</option>
        <option value="place-content-stretch">.place-content-stretch</option>
      </select>
    </div>
  </template>
</live-example>


## Place Items

Use `place-items-*` on a grid container to align all its items within their cells.

| Class Name | Property | Value |
| --- | --- | --- |
| `.place-items-center` | place-items | `center` |
| `.place-items-start` | place-items | `start` |
| `.place-items-end` | place-items | `end` |
| `.place-items-baseline` | place-items | `baseline` |
| `.place-items-stretch` | place-items | `stretch` |

<live-example :source-code="exampleItems" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-place-items">Place items class</label>
      <select id="select-place-items" v-model="items">
        <option value="place-items-center">.place-items-center</option>
        <option value="place-items-start">.place-items-start</option>
        <option value="place-items-end">.place-items-end</option>
        <option value="place-items-baseline">.place-items-baseline</option>
        <option value="place-items-stretch">.place-items-stretch</option>
      </select>
    </div>
  </template>
</live-example>


## Place Self

Use `place-self-*` on a grid item to align it within its cell. Only the pink block changes. Choose `.place-self-auto` to use the container’s alignment.

| Class Name | Property | Value |
| --- | --- | --- |
| `.place-self-auto` | place-self | `auto` |
| `.place-self-center` | place-self | `center` |
| `.place-self-start` | place-self | `start` |
| `.place-self-end` | place-self | `end` |
| `.place-self-baseline` | place-self | `baseline` |
| `.place-self-stretch` | place-self | `stretch` |

<live-example :source-code="exampleSelf" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-place-self">Place self class</label>
      <select id="select-place-self" v-model="self">
        <option value="place-self-auto">.place-self-auto</option>
        <option value="place-self-center">.place-self-center</option>
        <option value="place-self-start">.place-self-start</option>
        <option value="place-self-end">.place-self-end</option>
        <option value="place-self-baseline">.place-self-baseline</option>
        <option value="place-self-stretch">.place-self-stretch</option>
      </select>
    </div>
  </template>
</live-example>


## Sass variables

The following Sass variables can be used to customize the generation of the placement utilities.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | Base selector for utility classes. | `"."` |
| `$selector-prefix` | The selector prefix for all utility classes. | `""` |
| `$selector-suffix` | The selector suffix for all utility classes. | `""` |
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

No responsive classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
