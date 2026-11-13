<script setup>
  import { ref, computed } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const content = ref("align-content-normal");
  const items = ref("align-items-start");
  const self = ref("align-self-auto");

  const itemClasses = "bordered min-h-7 w-7 border-primary-700 bg-primary-300";

  const exampleAlignContent = computed(() => `<div class="display-grid h-10 bordered border-dashed border-tertiary-700 ${content.value}">
  <div class="${itemClasses}"></div>
  <div class="${itemClasses}"></div>
  <div class="${itemClasses}"></div>
</div>`);

  const exampleAlignItems = computed(() => `<div class="display-flex h-10 bordered border-dashed border-tertiary-700 ${items.value}">
  <div class="${itemClasses}"></div>
  <div class="${itemClasses}"></div>
  <div class="${itemClasses}"></div>
</div>`);

  const exampleAlignSelf = computed(() => `<div class="display-flex align-items-start h-10 bordered border-dashed border-tertiary-700">
  <div class="${itemClasses}"></div>
  <div class="bordered min-h-7 w-7 border-tertiary-700 bg-tertiary-300 ${self.value}"></div>
  <div class="${itemClasses}"></div>
</div>`);
</script>

# Alignment Utilities

The alignment utilities provide a set of classes to align rows, groups of items, or individual items in flex and grid layouts.

## Align Content

Use `align-content-*` on a container to distribute space between its rows. The grid below has three rows and extra height so you can see how the rows move. In a flex layout, the container needs to allow wrapping for these classes to take effect.

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

<live-example :source-code="exampleAlignContent" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-align-content">Align content class</label>
      <select id="select-align-content" v-model="content">
        <option value="align-content-normal">.align-content-normal</option>
        <option value="align-content-start">.align-content-start</option>
        <option value="align-content-end">.align-content-end</option>
        <option value="align-content-center">.align-content-center</option>
        <option value="align-content-between">.align-content-between</option>
        <option value="align-content-around">.align-content-around</option>
        <option value="align-content-evenly">.align-content-evenly</option>
        <option value="align-content-baseline">.align-content-baseline</option>
        <option value="align-content-stretch">.align-content-stretch</option>
      </select>
    </div>
  </template>
</live-example>

## Align Items

Use `align-items-*` on a container to align all its items. In the flex row below, these classes move the squares vertically or stretch them to fill the row’s height.

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-items-start` | align-items | `start` |
| `.align-items-end` | align-items | `end` |
| `.align-items-center` | align-items | `center` |
| `.align-items-baseline` | align-items | `baseline` |
| `.align-items-stretch` | align-items | `stretch` |

<live-example :source-code="exampleAlignItems" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-align-items">Align items class</label>
      <select id="select-align-items" v-model="items">
        <option value="align-items-start">.align-items-start</option>
        <option value="align-items-end">.align-items-end</option>
        <option value="align-items-center">.align-items-center</option>
        <option value="align-items-baseline">.align-items-baseline</option>
        <option value="align-items-stretch">.align-items-stretch</option>
      </select>
    </div>
  </template>
</live-example>

## Align Self

Use `align-self-*` on an individual item to give it a different alignment from its siblings. Only the pink square changes alignment. Choose `.align-self-auto` to use the container’s alignment.

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-self-auto` | align-self | `auto` |
| `.align-self-start` | align-self | `start` |
| `.align-self-end` | align-self | `end` |
| `.align-self-center` | align-self | `center` |
| `.align-self-baseline` | align-self | `baseline` |
| `.align-self-stretch` | align-self | `stretch` |

<live-example :source-code="exampleAlignSelf" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-align-self">Align self class</label>
      <select id="select-align-self" v-model="self">
        <option value="align-self-auto">.align-self-auto</option>
        <option value="align-self-start">.align-self-start</option>
        <option value="align-self-end">.align-self-end</option>
        <option value="align-self-center">.align-self-center</option>
        <option value="align-self-baseline">.align-self-baseline</option>
        <option value="align-self-stretch">.align-self-stretch</option>
      </select>
    </div>
  </template>
</live-example>

## Sass variables

The following Sass variables can be used to customize the generation of the alignment utilities.

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
