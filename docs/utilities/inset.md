<script setup>
  import { ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const offsets = ["0", "auto", "full", "quarter", "half", "three-quarters", "third", "two-thirds"];
  const selected = ref({
    "inset": "inset-0",
    "inset-x": "inset-x-0",
    "inset-y": "inset-y-0",
    "inset-inline": "inset-inline-0",
    "inset-block": "inset-block-0",
    "inset-inline-start": "inset-inline-start-0",
    "inset-inline-end": "inset-inline-end-0",
    "inset-block-start": "inset-block-start-0",
    "inset-block-end": "inset-block-end-0",
    "top": "top-0",
    "right": "right-0",
    "bottom": "bottom-0",
    "left": "left-0",
  });

  function renderInset(className) {
    return `<div class="position-relative h-9 overflow-hidden bordered border-primary-700">
  <div class="position-absolute min-w-5 min-h-5 bordered border-primary-700 bg-primary-300 ${className}"></div>
</div>`;
  }
</script>

# Inset Utilities

The inset utilities provide classes for setting the distance between a positioned element and an edge. In these examples, `.position-relative` makes the outlined box the containing block for the `.position-absolute` marker. Percentage offsets use the containing block’s size along the relevant axis.

Choose physical edges to target the top, right, bottom, or left. Logical edges follow the writing mode and text direction. With two opposing edges set, an auto-sized marker can stretch between them. Large offsets can move it outside the box.

## Inset

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-0` | inset | `0` |
| `.inset-auto` | inset | `auto` |
| `.inset-full` | inset | `100%` |
| `.inset-quarter` | inset | `25%` |
| `.inset-half` | inset | `50%` |
| `.inset-three-quarters` | inset | `75%` |
| `.inset-third` | inset | `calc(100% / 3)` |
| `.inset-two-thirds` | inset | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset">Inset class</label>
      <select id="select-inset" v-model="selected['inset']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-${offset}`">.inset-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Inset X

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-x-0` | left and right | `0` |
| `.inset-x-auto` | left and right | `auto` |
| `.inset-x-full` | left and right | `100%` |
| `.inset-x-quarter` | left and right | `25%` |
| `.inset-x-half` | left and right | `50%` |
| `.inset-x-three-quarters` | left and right | `75%` |
| `.inset-x-third` | left and right | `calc(100% / 3)` |
| `.inset-x-two-thirds` | left and right | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset-x'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset-x">Inset X class</label>
      <select id="select-inset-x" v-model="selected['inset-x']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-x-${offset}`">.inset-x-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Inset Y

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-y-0` | top and bottom | `0` |
| `.inset-y-auto` | top and bottom | `auto` |
| `.inset-y-full` | top and bottom | `100%` |
| `.inset-y-quarter` | top and bottom | `25%` |
| `.inset-y-half` | top and bottom | `50%` |
| `.inset-y-three-quarters` | top and bottom | `75%` |
| `.inset-y-third` | top and bottom | `calc(100% / 3)` |
| `.inset-y-two-thirds` | top and bottom | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset-y'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset-y">Inset Y class</label>
      <select id="select-inset-y" v-model="selected['inset-y']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-y-${offset}`">.inset-y-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Inset Inline

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-inline-0` | inset-inline | `0` |
| `.inset-inline-auto` | inset-inline | `auto` |
| `.inset-inline-full` | inset-inline | `100%` |
| `.inset-inline-quarter` | inset-inline | `25%` |
| `.inset-inline-half` | inset-inline | `50%` |
| `.inset-inline-three-quarters` | inset-inline | `75%` |
| `.inset-inline-third` | inset-inline | `calc(100% / 3)` |
| `.inset-inline-two-thirds` | inset-inline | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset-inline'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset-inline">Inset Inline class</label>
      <select id="select-inset-inline" v-model="selected['inset-inline']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-inline-${offset}`">.inset-inline-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Inset Block

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-block-0` | inset-block | `0` |
| `.inset-block-auto` | inset-block | `auto` |
| `.inset-block-full` | inset-block | `100%` |
| `.inset-block-quarter` | inset-block | `25%` |
| `.inset-block-half` | inset-block | `50%` |
| `.inset-block-three-quarters` | inset-block | `75%` |
| `.inset-block-third` | inset-block | `calc(100% / 3)` |
| `.inset-block-two-thirds` | inset-block | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset-block'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset-block">Inset Block class</label>
      <select id="select-inset-block" v-model="selected['inset-block']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-block-${offset}`">.inset-block-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Inset Inline Start

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-inline-start-0` | inset-inline-start | `0` |
| `.inset-inline-start-auto` | inset-inline-start | `auto` |
| `.inset-inline-start-full` | inset-inline-start | `100%` |
| `.inset-inline-start-quarter` | inset-inline-start | `25%` |
| `.inset-inline-start-half` | inset-inline-start | `50%` |
| `.inset-inline-start-three-quarters` | inset-inline-start | `75%` |
| `.inset-inline-start-third` | inset-inline-start | `calc(100% / 3)` |
| `.inset-inline-start-two-thirds` | inset-inline-start | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset-inline-start'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset-inline-start">Inset Inline Start class</label>
      <select id="select-inset-inline-start" v-model="selected['inset-inline-start']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-inline-start-${offset}`">.inset-inline-start-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Inset Inline End

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-inline-end-0` | inset-inline-end | `0` |
| `.inset-inline-end-auto` | inset-inline-end | `auto` |
| `.inset-inline-end-full` | inset-inline-end | `100%` |
| `.inset-inline-end-quarter` | inset-inline-end | `25%` |
| `.inset-inline-end-half` | inset-inline-end | `50%` |
| `.inset-inline-end-three-quarters` | inset-inline-end | `75%` |
| `.inset-inline-end-third` | inset-inline-end | `calc(100% / 3)` |
| `.inset-inline-end-two-thirds` | inset-inline-end | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset-inline-end'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset-inline-end">Inset Inline End class</label>
      <select id="select-inset-inline-end" v-model="selected['inset-inline-end']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-inline-end-${offset}`">.inset-inline-end-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Inset Block Start

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-block-start-0` | inset-block-start | `0` |
| `.inset-block-start-auto` | inset-block-start | `auto` |
| `.inset-block-start-full` | inset-block-start | `100%` |
| `.inset-block-start-quarter` | inset-block-start | `25%` |
| `.inset-block-start-half` | inset-block-start | `50%` |
| `.inset-block-start-three-quarters` | inset-block-start | `75%` |
| `.inset-block-start-third` | inset-block-start | `calc(100% / 3)` |
| `.inset-block-start-two-thirds` | inset-block-start | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset-block-start'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset-block-start">Inset Block Start class</label>
      <select id="select-inset-block-start" v-model="selected['inset-block-start']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-block-start-${offset}`">.inset-block-start-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Inset Block End

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-block-end-0` | inset-block-end | `0` |
| `.inset-block-end-auto` | inset-block-end | `auto` |
| `.inset-block-end-full` | inset-block-end | `100%` |
| `.inset-block-end-quarter` | inset-block-end | `25%` |
| `.inset-block-end-half` | inset-block-end | `50%` |
| `.inset-block-end-three-quarters` | inset-block-end | `75%` |
| `.inset-block-end-third` | inset-block-end | `calc(100% / 3)` |
| `.inset-block-end-two-thirds` | inset-block-end | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['inset-block-end'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-inset-block-end">Inset Block End class</label>
      <select id="select-inset-block-end" v-model="selected['inset-block-end']">
        <option v-for="offset in offsets" :key="offset" :value="`inset-block-end-${offset}`">.inset-block-end-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Top

| Class Name | Property | Value |
| --- | --- | --- |
| `.top-0` | top | `0` |
| `.top-auto` | top | `auto` |
| `.top-full` | top | `100%` |
| `.top-quarter` | top | `25%` |
| `.top-half` | top | `50%` |
| `.top-three-quarters` | top | `75%` |
| `.top-third` | top | `calc(100% / 3)` |
| `.top-two-thirds` | top | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['top'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-top">Top class</label>
      <select id="select-top" v-model="selected['top']">
        <option v-for="offset in offsets" :key="offset" :value="`top-${offset}`">.top-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Right

| Class Name | Property | Value |
| --- | --- | --- |
| `.right-0` | right | `0` |
| `.right-auto` | right | `auto` |
| `.right-full` | right | `100%` |
| `.right-quarter` | right | `25%` |
| `.right-half` | right | `50%` |
| `.right-three-quarters` | right | `75%` |
| `.right-third` | right | `calc(100% / 3)` |
| `.right-two-thirds` | right | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['right'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-right">Right class</label>
      <select id="select-right" v-model="selected['right']">
        <option v-for="offset in offsets" :key="offset" :value="`right-${offset}`">.right-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Bottom

| Class Name | Property | Value |
| --- | --- | --- |
| `.bottom-0` | bottom | `0` |
| `.bottom-auto` | bottom | `auto` |
| `.bottom-full` | bottom | `100%` |
| `.bottom-quarter` | bottom | `25%` |
| `.bottom-half` | bottom | `50%` |
| `.bottom-three-quarters` | bottom | `75%` |
| `.bottom-third` | bottom | `calc(100% / 3)` |
| `.bottom-two-thirds` | bottom | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['bottom'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-bottom">Bottom class</label>
      <select id="select-bottom" v-model="selected['bottom']">
        <option v-for="offset in offsets" :key="offset" :value="`bottom-${offset}`">.bottom-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Left

| Class Name | Property | Value |
| --- | --- | --- |
| `.left-0` | left | `0` |
| `.left-auto` | left | `auto` |
| `.left-full` | left | `100%` |
| `.left-quarter` | left | `25%` |
| `.left-half` | left | `50%` |
| `.left-three-quarters` | left | `75%` |
| `.left-third` | left | `calc(100% / 3)` |
| `.left-two-thirds` | left | `calc(100% / 1.5)` |

<live-example :source-code="renderInset(selected['left'])" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-left">Left class</label>
      <select id="select-left" v-model="selected['left']">
        <option v-for="offset in offsets" :key="offset" :value="`left-${offset}`">.left-{{ offset }}</option>
      </select>
    </div>
  </template>
</live-example>


## Sass variables

The following Sass variables can be used to customize the generation of the inset utilities.

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

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, screen-aware responsive utility classes are generated for inset.

::: info Note
For more information on responsive variants, refer to the [Responsive classes](../responsive-classes) documentation.
:::
