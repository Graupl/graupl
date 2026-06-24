<script setup>
  import { ref } from "vue";

  const inset = ref("inset-0");
  const insetX = ref("inset-x-0");
  const insetY = ref("inset-y-0");
  const insetInline = ref("inset-inline-0");
  const insetBlock = ref("inset-block-0");
  const insetInlineStart = ref("inset-inline-start-0");
  const insetInlineEnd = ref("inset-inline-end-0");
  const insetBlockStart = ref("inset-block-start-0");
  const insetBlockEnd = ref("inset-block-end-0");
  const top = ref("top-0");
  const right = ref("right-0");
  const bottom = ref("bottom-0");
  const left = ref("left-0");
</script>

# Inset Utilities

The inset utilities provide a set of classes to adjust the `inset`, `inset-inline`, `inset-block`, `inset-inline-start`, `inset-inline-end`, `inset-block-start`, `inset-block-end`, `top`, `right`, `bottom` and `left` properties of elements.

## Inset

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-0` | inset | `0` |
| `.inset-auto` | inset | `auto` |
| `.inset-full` | inset | `100%` |
| `.inset-quarter` | inset | `25%` |
| `.inset-half` | inset | `50%` |
| `.inset-three-quarters` | inset | `75%` |
| `.inset-third` | inset | `calc(100%/ 3)` |
| `.inset-two-thirds` | inset | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-relative bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${inset} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ inset }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset">Inset property</label>
    <select id="select-inset" v-model="inset">
      <option value="inset-0">0</option>
      <option value="inset-auto">Auto</option>
      <option value="inset-full">Full</option>
      <option value="inset-quarter">Quarter</option>
      <option value="inset-half">Half</option>
      <option value="inset-three-quarters">Three Quarters</option>
      <option value="inset-third">Third</option>
      <option value="inset-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Inset X

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-x-0` | inset-x | `0` |
| `.inset-x-auto` | inset-x | `auto` |
| `.inset-x-full` | inset-x | `100%` |
| `.inset-x-quarter` | inset-x | `25%` |
| `.inset-x-half` | inset-x | `50%` |
| `.inset-x-three-quarters` | inset-x | `75%` |
| `.inset-x-third` | inset-x | `calc(100%/ 3)` |
| `.inset-x-two-thirds` | inset-x | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-absolute bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${insetX} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ insetX }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset-x">Inset X property</label>
    <select id="select-inset-x" v-model="insetX">
      <option value="inset-x-0">0</option>
      <option value="inset-x-auto">Auto</option>
      <option value="inset-x-full">Full</option>
      <option value="inset-x-quarter">Quarter</option>
      <option value="inset-x-half">Half</option>
      <option value="inset-x-three-quarters">Three Quarters</option>
      <option value="inset-x-third">Third</option>
      <option value="inset-x-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Inset Y

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-y-0` | inset-y | `0` |
| `.inset-y-auto` | inset-y | `auto` |
| `.inset-y-full` | inset-y | `100%` |
| `.inset-y-quarter` | inset-y | `25%` |
| `.inset-y-half` | inset-y | `50%` |
| `.inset-y-three-quarters` | inset-y | `75%` |
| `.inset-y-third` | inset-y | `calc(100%/ 3)` |
| `.inset-y-two-thirds` | inset-y | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-relative bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${insetY} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ insetY }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset-y">Inset Y property</label>
    <select id="select-inset-y" v-model="insetY">
      <option value="inset-y-0">0</option>
      <option value="inset-y-auto">Auto</option>
      <option value="inset-y-full">Full</option>
      <option value="inset-y-quarter">Quarter</option>
      <option value="inset-y-half">Half</option>
      <option value="inset-y-three-quarters">Three Quarters</option>
      <option value="inset-y-third">Third</option>
      <option value="inset-y-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Inset Inline

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-inline-0` | inset-inline | `0` |
| `.inset-inline-auto` | inset-inline | `auto` |
| `.inset-inline-full` | inset-inline | `100%` |
| `.inset-inline-quarter` | inset-inline | `25%` |
| `.inset-inline-half` | inset-inline | `50%` |
| `.inset-inline-three-quarters` | inset-inline | `75%` |
| `.inset-inline-third` | inset-inline | `calc(100%/ 3)` |
| `.inset-inline-two-thirds` | inset-inline | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-absolute bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${insetInline} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ insetInline }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset-inline">Inset Inline property</label>
    <select id="select-inset-inline" v-model="insetInline">
      <option value="inset-inline-0">0</option>
      <option value="inset-inline-auto">Auto</option>
      <option value="inset-inline-full">Full</option>
      <option value="inset-inline-quarter">Quarter</option>
      <option value="inset-inline-half">Half</option>
      <option value="inset-inline-three-quarters">Three Quarters</option>
      <option value="inset-inline-third">Third</option>
      <option value="inset-inline-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Inset Block

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-block-0` | inset-block | `0` |
| `.inset-block-auto` | inset-block | `auto` |
| `.inset-block-full` | inset-block | `100%` |
| `.inset-block-quarter` | inset-block | `25%` |
| `.inset-block-half` | inset-block | `50%` |
| `.inset-block-three-quarters` | inset-block | `75%` |
| `.inset-block-third` | inset-block | `calc(100%/ 3)` |
| `.inset-block-two-thirds` | inset-block | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-relative bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${insetBlock} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ insetBlock }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset-block">Inset Block property</label>
    <select id="select-inset-block" v-model="insetBlock">
      <option value="inset-block-0">0</option>
      <option value="inset-block-auto">Auto</option>
      <option value="inset-block-full">Full</option>
      <option value="inset-block-quarter">Quarter</option>
      <option value="inset-block-half">Half</option>
      <option value="inset-block-three-quarters">Three Quarters</option>
      <option value="inset-block-third">Third</option>
      <option value="inset-block-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Inset Inline Start

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-inline-start-0` | inset-inline-start | `0` |
| `.inset-inline-start-auto` | inset-inline-start | `auto` |
| `.inset-inline-start-full` | inset-inline-start | `100%` |
| `.inset-inline-start-quarter` | inset-inline-start | `25%` |
| `.inset-inline-start-half` | inset-inline-start | `50%` |
| `.inset-inline-start-three-quarters` | inset-inline-start | `75%` |
| `.inset-inline-start-third` | inset-inline-start | `calc(100%/ 3)` |
| `.inset-inline-start-two-thirds` | inset-inline-start | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-absolute bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${insetInlineStart} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ insetInlineStart }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset-inline-start">Inset Inline Start property</label>
    <select id="select-inset-inline-start" v-model="insetInlineStart">
      <option value="inset-inline-start-0">0</option>
      <option value="inset-inline-start-auto">Auto</option>
      <option value="inset-inline-start-full">Full</option>
      <option value="inset-inline-start-quarter">Quarter</option>
      <option value="inset-inline-start-half">Half</option>
      <option value="inset-inline-start-three-quarters">Three Quarters</option>
      <option value="inset-inline-start-third">Third</option>
      <option value="inset-inline-start-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Inset Inline End

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-inline-end-0` | inset-inline-end | `0` |
| `.inset-inline-end-auto` | inset-inline-end | `auto` |
| `.inset-inline-end-full` | inset-inline-end | `100%` |
| `.inset-inline-end-quarter` | inset-inline-end | `25%` |
| `.inset-inline-end-half` | inset-inline-end | `50%` |
| `.inset-inline-end-three-quarters` | inset-inline-end | `75%` |
| `.inset-inline-end-third` | inset-inline-end | `calc(100%/ 3)` |
| `.inset-inline-end-two-thirds` | inset-inline-end | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-absolute bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${insetInlineEnd} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ insetInlineEnd }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset-inline-end">Inset Inline End property</label>
    <select id="select-inset-inline-end" v-model="insetInlineEnd">
      <option value="inset-inline-end-0">0</option>
      <option value="inset-inline-end-auto">Auto</option>
      <option value="inset-inline-end-full">Full</option>
      <option value="inset-inline-end-quarter">Quarter</option>
      <option value="inset-inline-end-half">Half</option>
      <option value="inset-inline-end-three-quarters">Three Quarters</option>
      <option value="inset-inline-end-third">Third</option>
      <option value="inset-inline-end-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Inset Block Start

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-block-start-0` | inset-block-start | `0` |
| `.inset-block-start-auto` | inset-block-start | `auto` |
| `.inset-block-start-full` | inset-block-start | `100%` |
| `.inset-block-start-quarter` | inset-block-start | `25%` |
| `.inset-block-start-half` | inset-block-start | `50%` |
| `.inset-block-start-three-quarters` | inset-block-start | `75%` |
| `.inset-block-start-third` | inset-block-start | `calc(100%/ 3)` |
| `.inset-block-start-two-thirds` | inset-block-start | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-relative bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${insetBlockStart} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ insetBlockStart }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset-block-start">Inset Block Start property</label>
    <select id="select-inset-block-start" v-model="insetBlockStart">
      <option value="inset-block-start-0">0</option>
      <option value="inset-block-start-auto">Auto</option>
      <option value="inset-block-start-full">Full</option>
      <option value="inset-block-start-quarter">Quarter</option>
      <option value="inset-block-start-half">Half</option>
      <option value="inset-block-start-three-quarters">Three Quarters</option>
      <option value="inset-block-start-third">Third</option>
      <option value="inset-block-start-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Inset Block End

| Class Name | Property | Value |
| --- | --- | --- |
| `.inset-block-end-0` | inset-block-end | `0` |
| `.inset-block-end-auto` | inset-block-end | `auto` |
| `.inset-block-end-full` | inset-block-end | `100%` |
| `.inset-block-end-quarter` | inset-block-end | `25%` |
| `.inset-block-end-half` | inset-block-end | `50%` |
| `.inset-block-end-three-quarters` | inset-block-end | `75%` |
| `.inset-block-end-third` | inset-block-end | `calc(100%/ 3)` |
| `.inset-block-end-two-thirds` | inset-block-end | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents `">
        <div :class="` position-relative bordered text-primary-100 border-primary-700 py-3 bg-primary-300 p-3 w-fit-content ${insetBlockEnd} mt-10`">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ insetBlockEnd }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inset-block-end">Inset Block End property</label>
    <select id="select-inset-block-end" v-model="insetBlockEnd">
      <option value="inset-block-end-0">0</option>
      <option value="inset-block-end-auto">Auto</option>
      <option value="inset-block-end-full">Full</option>
      <option value="inset-block-end-quarter">Quarter</option>
      <option value="inset-block-end-half">Half</option>
      <option value="inset-block-end-three-quarters">Three Quarters</option>
      <option value="inset-block-end-third">Third</option>
      <option value="inset-block-end-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Top

| Class Name | Property | Value |
| --- | --- | --- |
| `.top-0` | top | `0` |
| `.top-auto` | top | `auto` |
| `.top-full` | top | `100%` |
| `.top-quarter` | top | `25%` |
| `.top-half` | top | `50%` |
| `.top-three-quarters` | top | `75%` |
| `.top-third` | top | `calc(100%/ 3)` |
| `.top-two-thirds` | top | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-relative bordered text-primary-100 border-primary-700 py-3 bg-primary-300 w-fit-content ${top} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ top }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-top">Top property</label>
    <select id="select-top" v-model="top">
      <option value="top-0">0</option>
      <option value="top-auto">Auto</option>
      <option value="top-full">Full</option>
      <option value="top-quarter">Quarter</option>
      <option value="top-half">Half</option>
      <option value="top-three-quarters">Three Quarters</option>
      <option value="top-third">Third</option>
      <option value="top-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Right

| Class Name | Property | Value |
| --- | --- | --- |
| `.right-0` | right | `0` |
| `.right-auto` | right | `auto` |
| `.right-full` | right | `100%` |
| `.right-quarter` | right | `25%` |
| `.right-half` | right | `50%` |
| `.right-three-quarters` | right | `75%` |
| `.right-third` | right | `calc(100%/ 3)` |
| `.right-two-thirds` | right | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-absolute bordered text-primary-100 border-primary-700 p-3 bg-primary-300 w-fit-content ${right} ml-auto`">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ right }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-right">Right property</label>
    <select id="select-right" v-model="right">
      <option value="right-0">0</option>
      <option value="right-auto">Auto</option>
      <option value="right-full">Full</option>
      <option value="right-quarter">Quarter</option>
      <option value="right-half">Half</option>
      <option value="right-three-quarters">Three Quarters</option>
      <option value="right-third">Third</option>
      <option value="right-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Bottom

| Class Name | Property | Value |
| --- | --- | --- |
| `.bottom-0` | bottom | `0` |
| `.bottom-auto` | bottom | `auto` |
| `.bottom-full` | bottom | `100%` |
| `.bottom-quarter` | bottom | `25%` |
| `.bottom-half` | bottom | `50%` |
| `.bottom-three-quarters` | bottom | `75%` |
| `.bottom-third` | bottom | `calc(100%/ 3)` |
| `.bottom-two-thirds` | bottom | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-relative bordered text-primary-100 border-primary-700 py-3 bg-primary-300 w-fit-content ${bottom} mt-10`">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ bottom }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-bottom">Bottom property</label>
    <select id="select-bottom" v-model="bottom">
      <option value="bottom-0">0</option>
      <option value="bottom-auto">Auto</option>
      <option value="bottom-full">Full</option>
      <option value="bottom-quarter">Quarter</option>
      <option value="bottom-half">Half</option>
      <option value="bottom-three-quarters">Three Quarters</option>
      <option value="bottom-third">Third</option>
      <option value="bottom-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Left

| Class Name | Property | Value |
| --- | --- | --- |
| `.left-0` | left | `0` |
| `.left-auto` | left | `auto` |
| `.left-full` | left | `100%` |
| `.left-quarter` | left | `25%` |
| `.left-half` | left | `50%` |
| `.left-three-quarters` | left | `75%` |
| `.left-third` | left | `calc(100%/ 3)` |
| `.left-two-thirds` | left | `calc(100%/ 1.5)` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-0">
      <div :class="` display-contents h-auto `">
        <div :class="` position-absolute bordered text-primary-100 border-primary-700 py-3 bg-primary-300 w-fit-content ${left} `">The Test Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ left }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-left">Left property</label>
    <select id="select-left" v-model="left">
      <option value="left-0">0</option>
      <option value="left-auto">Auto</option>
      <option value="left-full">Full</option>
      <option value="left-quarter">Quarter</option>
      <option value="left-half">Half</option>
      <option value="left-three-quarters">Three Quarters</option>
      <option value="left-third">Third</option>
      <option value="left-two-thirds">Two Thirds</option>
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

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, screen-aware responsive utility classes are generated for inset.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
