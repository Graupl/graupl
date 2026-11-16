<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const overflow = ref("overflow-auto");
  const overflowX = ref("overflow-x-auto");
  const overflowY = ref("overflow-y-auto");
  const overflowInline = ref("overflow-inline-auto");
  const overflowBlock = ref("overflow-block-auto");
  const inlineWritingMode = ref("horizontal-tb");
  const blockWritingMode = ref("horizontal-tb");

  function renderExample(overflowClass, childSize, writingMode = "") {
    const style = writingMode ? ` style="writing-mode: ${writingMode}"` : "";

    return `<div class="w-9 h-9 bordered border-dashed border-tertiary-700 ${overflowClass}"${style} tabindex="0" role="region" aria-label="Sample for ${overflowClass}">
  <div class="${childSize} bordered border-primary-700 bg-primary-300"></div>
</div>`;
  }

  const exampleOverflow = computed(() => renderExample(overflow.value, "w-10 h-10"));
  const exampleOverflowX = computed(() => renderExample(overflowX.value, "w-10 h-7"));
  const exampleOverflowY = computed(() => renderExample(overflowY.value, "w-7 h-10"));
  const exampleOverflowInline = computed(() => renderExample(overflowInline.value, "is-10 bs-7", inlineWritingMode.value));
  const exampleOverflowBlock = computed(() => renderExample(overflowBlock.value, "is-7 bs-10", blockWritingMode.value));
</script>

# Overflow Utilities

The overflow utilities provide classes for controlling what happens when content extends beyond its box.

## Overflow

Use these classes to control overflow in both directions.

| Class Name          | Property | Value     |
| ------------------- | -------- | --------- |
| `.overflow-auto`    | overflow | `auto`    |
| `.overflow-visible` | overflow | `visible` |
| `.overflow-hidden`  | overflow | `hidden`  |
| `.overflow-clip`    | overflow | `clip`    |
| `.overflow-scroll`  | overflow | `scroll`  |

<live-example :source-code="exampleOverflow" options-position="top" example-class="min-h-10">
  <template #options>
    <div class="input-group">
      <label for="overflow-example-both">Overflow</label>
      <select id="overflow-example-both" v-model="overflow">
        <option value="overflow-auto">.overflow-auto</option>
        <option value="overflow-visible">.overflow-visible</option>
        <option value="overflow-hidden">.overflow-hidden</option>
        <option value="overflow-clip">.overflow-clip</option>
        <option value="overflow-scroll">.overflow-scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Overflow X

Use these classes to control horizontal overflow.

| Class Name            | Property   | Value     |
| --------------------- | ---------- | --------- |
| `.overflow-x-auto`    | overflow-x | `auto`    |
| `.overflow-x-visible` | overflow-x | `visible` |
| `.overflow-x-hidden`  | overflow-x | `hidden`  |
| `.overflow-x-clip`    | overflow-x | `clip`    |
| `.overflow-x-scroll`  | overflow-x | `scroll`  |

<live-example :source-code="exampleOverflowX" options-position="top" example-class="min-h-10">
  <template #options>
    <div class="input-group">
      <label for="overflow-example-x">Overflow X</label>
      <select id="overflow-example-x" v-model="overflowX">
        <option value="overflow-x-auto">.overflow-x-auto</option>
        <option value="overflow-x-visible">.overflow-x-visible</option>
        <option value="overflow-x-hidden">.overflow-x-hidden</option>
        <option value="overflow-x-clip">.overflow-x-clip</option>
        <option value="overflow-x-scroll">.overflow-x-scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Overflow Y

Use these classes to control vertical overflow.

| Class Name            | Property   | Value     |
| --------------------- | ---------- | --------- |
| `.overflow-y-auto`    | overflow-y | `auto`    |
| `.overflow-y-visible` | overflow-y | `visible` |
| `.overflow-y-hidden`  | overflow-y | `hidden`  |
| `.overflow-y-clip`    | overflow-y | `clip`    |
| `.overflow-y-scroll`  | overflow-y | `scroll`  |

<live-example :source-code="exampleOverflowY" options-position="top" example-class="min-h-10">
  <template #options>
    <div class="input-group">
      <label for="overflow-example-y">Overflow Y</label>
      <select id="overflow-example-y" v-model="overflowY">
        <option value="overflow-y-auto">.overflow-y-auto</option>
        <option value="overflow-y-visible">.overflow-y-visible</option>
        <option value="overflow-y-hidden">.overflow-y-hidden</option>
        <option value="overflow-y-clip">.overflow-y-clip</option>
        <option value="overflow-y-scroll">.overflow-y-scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Overflow Inline

Inline overflow follows the direction text runs. It is horizontal in horizontal writing and vertical in vertical writing.

| Class Name                 | Property        | Value     |
| -------------------------- | --------------- | --------- |
| `.overflow-inline-auto`    | overflow-inline | `auto`    |
| `.overflow-inline-visible` | overflow-inline | `visible` |
| `.overflow-inline-hidden`  | overflow-inline | `hidden`  |
| `.overflow-inline-clip`    | overflow-inline | `clip`    |
| `.overflow-inline-scroll`  | overflow-inline | `scroll`  |

<live-example :source-code="exampleOverflowInline" options-position="top" example-class="min-h-10">
  <template #options>
    <div class="input-group">
      <label for="overflow-example-inline-writing-mode">Writing mode</label>
      <select id="overflow-example-inline-writing-mode" v-model="inlineWritingMode">
        <option value="horizontal-tb">Horizontal</option>
        <option value="vertical-rl">Vertical</option>
      </select>
    </div>
    <div class="input-group">
      <label for="overflow-example-inline">Overflow inline</label>
      <select id="overflow-example-inline" v-model="overflowInline">
        <option value="overflow-inline-auto">.overflow-inline-auto</option>
        <option value="overflow-inline-visible">.overflow-inline-visible</option>
        <option value="overflow-inline-hidden">.overflow-inline-hidden</option>
        <option value="overflow-inline-clip">.overflow-inline-clip</option>
        <option value="overflow-inline-scroll">.overflow-inline-scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Overflow Block

Block overflow follows the direction lines stack. It is vertical in horizontal writing and horizontal in vertical writing.

| Class Name                | Property       | Value     |
| ------------------------- | -------------- | --------- |
| `.overflow-block-auto`    | overflow-block | `auto`    |
| `.overflow-block-visible` | overflow-block | `visible` |
| `.overflow-block-hidden`  | overflow-block | `hidden`  |
| `.overflow-block-clip`    | overflow-block | `clip`    |
| `.overflow-block-scroll`  | overflow-block | `scroll`  |

<live-example :source-code="exampleOverflowBlock" options-position="top" example-class="min-h-10">
  <template #options>
    <div class="input-group">
      <label for="overflow-example-block-writing-mode">Writing mode</label>
      <select id="overflow-example-block-writing-mode" v-model="blockWritingMode">
        <option value="horizontal-tb">Horizontal</option>
        <option value="vertical-rl">Vertical</option>
      </select>
    </div>
    <div class="input-group">
      <label for="overflow-example-block">Overflow block</label>
      <select id="overflow-example-block" v-model="overflowBlock">
        <option value="overflow-block-auto">.overflow-block-auto</option>
        <option value="overflow-block-visible">.overflow-block-visible</option>
        <option value="overflow-block-hidden">.overflow-block-hidden</option>
        <option value="overflow-block-clip">.overflow-block-clip</option>
        <option value="overflow-block-scroll">.overflow-block-scroll</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/overflow.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/overflow.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/overflow.scss";
```

:::

## Customization

To customize the overflow utilities, you can use the following variables.

| Variable                              | Description                                                 | Default Value |
| ------------------------------------- | ----------------------------------------------------------- | ------------- |
| `$selector-base`                      | Base selector for utility classes.                          | `"."`         |
| `$selector-prefix`                    | The selector prefix for all utility classes.                | `""`          |
| `$selector-suffix`                    | The selector suffix for all utility classes.                | `""`          |
| `$selector-separator`                 | The selector separator for all utility classes.             | `"-"`         |
| `$use-important`                      | Appends `!important` to generated utility declarations.     | `true`        |
| `$generate-base-utilities`            | Generates the base utility classes.                         | `true`        |
| `$screen-aware`                       | Enables screen-aware utility variants.                      | `false`       |
| `$theme-aware`                        | Enables theme-aware utility variants.                       | `false`       |
| `$scheme-aware`                       | Enables scheme-aware utility variants.                      | `false`       |
| `$state-aware`                        | Enables state-aware utility variants.                       | `false`       |
| `$container-aware`                    | Enables container-aware utility variants.                   | `false`       |
| `$screen-aware-selector-prefix`       | Prefix to the screen-aware portion of utility selectors.    | `""`          |
| `$screen-aware-selector-suffix`       | Suffix to the screen-aware portion of utility selectors.    | `""`          |
| `$screen-aware-selector-separator`    | Separator inserted for screen-aware utility selectors.      | `"\\:"`       |
| `$theme-aware-selector-prefix`        | Prefix to the theme-aware portion of utility selectors.     | `""`          |
| `$theme-aware-selector-suffix`        | Suffix to the theme-aware portion of utility selectors.     | `"-theme"`    |
| `$theme-aware-selector-separator`     | Separator inserted for theme-aware utility selectors.       | `"\\:"`       |
| `$scheme-aware-selector-prefix`       | Prefix to the scheme-aware portion of utility selectors.    | `""`          |
| `$scheme-aware-selector-suffix`       | Suffix to the scheme-aware portion of utility selectors.    | `"-mode"`     |
| `$scheme-aware-selector-separator`    | Separator inserted for scheme-aware utility selectors.      | `"\\:"`       |
| `$state-aware-selector-prefix`        | Prefix to the state-aware portion of utility selectors.     | `""`          |
| `$state-aware-selector-suffix`        | Suffix to the state-aware portion of utility selectors.     | `""`          |
| `$state-aware-selector-separator`     | Separator inserted for state-aware utility selectors.       | `"\\:"`       |
| `$container-aware-selector-prefix`    | Prefix to the container-aware portion of utility selectors. | `"cq\\:"`     |
| `$container-aware-selector-suffix`    | Suffix to the container-aware portion of utility selectors. | `""`          |
| `$container-aware-selector-separator` | Separator inserted for container-aware utility selectors.   | `"\\:"`       |
| `$utility-properties`                 | Map of utility properties.                                  | `()`          |
| `$utility-values`                     | Map of utility values.                                      | `()`          |
| `$utility-map`                        | Map of utility property/value pairs.                        | `()`          |

## Responsive Variants

No responsive classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
