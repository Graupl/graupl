<script setup>
  import { ref } from "vue";

  const gap = ref("g-auto");
  const rowGap = ref("rg-auto");
  const columnGap = ref("cg-auto");
  const padding = ref("p-auto");
  const paddingTop = ref("pt-auto");
  const paddingRight = ref("pr-auto");
  const paddingBottom = ref("pb-auto");
  const paddingLeft = ref("pl-auto");
  const paddingX = ref("px-auto");
  const paddingY = ref("py-auto");
  const paddingBlockStart = ref("pbs-auto");
  const paddingBlockEnd = ref("pbe-auto");
  const paddingBlock = ref("pbse-auto");
  const paddingInlineStart = ref("pis-auto");
  const paddingInlineEnd = ref("pie-auto");
  const paddingInline = ref("pise-auto");
  const margin = ref("m-auto");
  const marginTop = ref("mt-auto");
  const marginRight = ref("mr-auto");
  const marginBottom = ref("mb-auto");
  const marginLeft = ref("ml-auto");
  const marginX = ref("mx-auto");
  const marginY = ref("my-auto");
  const marginBlockStart = ref("mbs-auto");
  const marginBlockEnd = ref("mbe-auto");
  const marginBlock = ref("mbse-auto");
  const marginInlineStart = ref("mis-auto");
  const marginInlineEnd = ref("mie-auto");
  const marginInline = ref("mise-auto");
</script>

# Spacing Utilities

The spacing utilities provide a set of classes to adjust the `gap`, `row-gap`, `column-gap`, `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`, `padding-block-start`, `padding-block`, `padding-inline-start`, `padding-inline-end`, `padding-inline`, `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `margin-block-start`, `margin-block`, `margin-inline-start`, `margin-inline-end` and `margin-inline` properties of elements.

## Gap

| Class Name | Property | Value |
| --- | --- | --- |
| `.g-auto` | gap | `auto` |
| `.g-0` | gap | `var(--graupl-spacer-0)` |
| `.g-1` | gap | `var(--graupl-spacer-1)` |
| `.g-2` | gap | `var(--graupl-spacer-2)` |
| `.g-3` | gap | `var(--graupl-spacer-3)` |
| `.g-4` | gap | `var(--graupl-spacer-4)` |
| `.g-5` | gap | `var(--graupl-spacer-5)` |
| `.g-6` | gap | `var(--graupl-spacer-6)` |
| `.g-7` | gap | `var(--graupl-spacer-7)` |
| `.g-8` | gap | `var(--graupl-spacer-8)` |
| `.g-9` | gap | `var(--graupl-spacer-9)` |
| `.g-10` | gap | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`${gap} display-grid bg-tertiary-200 grid-cols-3 grid-rows-auto is-fit-content bs-fit-content`">
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gap }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-gap">Gap property</label>
    <select id="select-gap" v-model="gap">
      <option value="g-auto">Auto</option>
      <option value="g-0">0</option>
      <option value="g-1">1</option>
      <option value="g-2">2</option>
      <option value="g-3">3</option>
      <option value="g-4">4</option>
      <option value="g-5">5</option>
      <option value="g-6">6</option>
      <option value="g-7">7</option>
      <option value="g-8">8</option>
      <option value="g-9">9</option>
      <option value="g-10">10</option>
    </select>
  </div>
</div>

## Row Gap

| Class Name | Property | Value |
| --- | --- | --- |
| `.rg-auto` | row-gap | `auto` |
| `.rg-0` | row-gap | `var(--graupl-spacer-0)` |
| `.rg-1` | row-gap | `var(--graupl-spacer-1)` |
| `.rg-2` | row-gap | `var(--graupl-spacer-2)` |
| `.rg-3` | row-gap | `var(--graupl-spacer-3)` |
| `.rg-4` | row-gap | `var(--graupl-spacer-4)` |
| `.rg-5` | row-gap | `var(--graupl-spacer-5)` |
| `.rg-6` | row-gap | `var(--graupl-spacer-6)` |
| `.rg-7` | row-gap | `var(--graupl-spacer-7)` |
| `.rg-8` | row-gap | `var(--graupl-spacer-8)` |
| `.rg-9` | row-gap | `var(--graupl-spacer-9)` |
| `.rg-10` | row-gap | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`${rowGap} display-grid bg-tertiary-200 grid-cols-3 grid-rows-auto is-fit-content bs-fit-content`">
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ rowGap }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-row-gap">Row gap property</label>
    <select id="select-row-gap" v-model="rowGap">
      <option value="rg-auto">Auto</option>
      <option value="rg-0">0</option>
      <option value="rg-1">1</option>
      <option value="rg-2">2</option>
      <option value="rg-3">3</option>
      <option value="rg-4">4</option>
      <option value="rg-5">5</option>
      <option value="rg-6">6</option>
      <option value="rg-7">7</option>
      <option value="rg-8">8</option>
      <option value="rg-9">9</option>
      <option value="rg-10">10</option>
    </select>
  </div>
</div>

## Column Gap

| Class Name | Property | Value |
| --- | --- | --- |
| `.cg-auto` | column-gap | `auto` |
| `.cg-0` | column-gap | `var(--graupl-spacer-0)` |
| `.cg-1` | column-gap | `var(--graupl-spacer-1)` |
| `.cg-2` | column-gap | `var(--graupl-spacer-2)` |
| `.cg-3` | column-gap | `var(--graupl-spacer-3)` |
| `.cg-4` | column-gap | `var(--graupl-spacer-4)` |
| `.cg-5` | column-gap | `var(--graupl-spacer-5)` |
| `.cg-6` | column-gap | `var(--graupl-spacer-6)` |
| `.cg-7` | column-gap | `var(--graupl-spacer-7)` |
| `.cg-8` | column-gap | `var(--graupl-spacer-8)` |
| `.cg-9` | column-gap | `var(--graupl-spacer-9)` |
| `.cg-10` | column-gap | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`${columnGap} display-grid bg-tertiary-200 grid-cols-3 grid-rows-auto is-fit-content bs-fit-content`">
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 bs-7 is-7"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ columnGap }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-column-gap">Column gap property</label>
    <select id="select-column-gap" v-model="columnGap">
      <option value="cg-auto">Auto</option>
      <option value="cg-0">0</option>
      <option value="cg-1">1</option>
      <option value="cg-2">2</option>
      <option value="cg-3">3</option>
      <option value="cg-4">4</option>
      <option value="cg-5">5</option>
      <option value="cg-6">6</option>
      <option value="cg-7">7</option>
      <option value="cg-8">8</option>
      <option value="cg-9">9</option>
      <option value="cg-10">10</option>
    </select>
  </div>
</div>

## Padding

| Class Name | Property | Value |
| --- | --- | --- |
| `.p-auto` | padding | `auto` |
| `.p-0` | padding | `var(--graupl-spacer-0)` |
| `.p-1` | padding | `var(--graupl-spacer-1)` |
| `.p-2` | padding | `var(--graupl-spacer-2)` |
| `.p-5` | padding | `var(--graupl-spacer-3)` |
| `.p-4` | padding | `var(--graupl-spacer-4)` |
| `.p-5` | padding | `var(--graupl-spacer-5)` |
| `.p-6` | padding | `var(--graupl-spacer-6)` |
| `.p-7` | padding | `var(--graupl-spacer-7)` |
| `.p-8` | padding | `var(--graupl-spacer-8)` |
| `.p-9` | padding | `var(--graupl-spacer-9)` |
| `.p-10` | padding | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${padding}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ padding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding">Padding property</label>
    <select id="select-padding" v-model="padding">
      <option value="p-auto">Auto</option>
      <option value="p-0">0</option>
      <option value="p-1">1</option>
      <option value="p-2">2</option>
      <option value="p-3">3</option>
      <option value="p-4">4</option>
      <option value="p-5">5</option>
      <option value="p-6">6</option>
      <option value="p-7">7</option>
      <option value="p-8">8</option>
      <option value="p-9">9</option>
      <option value="p-10">10</option>
    </select>
  </div>
</div>


## Padding Top

| Class Name | Property | Value |
| --- | --- | --- |
| `.pt-auto` | padding-top | `auto` |
| `.pt-0` | padding-top | `var(--graupl-spacer-0)` |
| `.pt-1` | padding-top | `var(--graupl-spacer-1)` |
| `.pt-2` | padding-top | `var(--graupl-spacer-2)` |
| `.pt-3` | padding-top | `var(--graupl-spacer-3)` |
| `.pt-4` | padding-top | `var(--graupl-spacer-4)` |
| `.pt-5` | padding-top | `var(--graupl-spacer-5)` |
| `.pt-6` | padding-top | `var(--graupl-spacer-6)` |
| `.pt-7` | padding-top | `var(--graupl-spacer-7)` |
| `.pt-8` | padding-top | `var(--graupl-spacer-8)` |
| `.pt-9` | padding-top | `var(--graupl-spacer-9)` |
| `.pt-10` | padding-top | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingTop}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingTop }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-top">Padding top property</label>
    <select id="select-padding-top" v-model="paddingTop">
      <option value="pt-auto">Auto</option>
      <option value="pt-0">0</option>
      <option value="pt-1">1</option>
      <option value="pt-2">2</option>
      <option value="pt-3">3</option>
      <option value="pt-4">4</option>
      <option value="pt-5">5</option>
      <option value="pt-6">6</option>
      <option value="pt-7">7</option>
      <option value="pt-8">8</option>
      <option value="pt-9">9</option>
      <option value="pt-10">10</option>
    </select>
  </div>
</div>

## Padding Right

| Class Name | Property | Value |
| --- | --- | --- |
| `.pr-auto` | padding-right | `auto` |
| `.pr-0` | padding-right | `var(--graupl-spacer-0)` |
| `.pr-1` | padding-right | `var(--graupl-spacer-1)` |
| `.pr-2` | padding-right | `var(--graupl-spacer-2)` |
| `.pr-3` | padding-right | `var(--graupl-spacer-3)` |
| `.pr-4` | padding-right | `var(--graupl-spacer-4)` |
| `.pr-5` | padding-right | `var(--graupl-spacer-5)` |
| `.pr-6` | padding-right | `var(--graupl-spacer-6)` |
| `.pr-7` | padding-right | `var(--graupl-spacer-7)` |
| `.pr-8` | padding-right | `var(--graupl-spacer-8)` |
| `.pr-9` | padding-right | `var(--graupl-spacer-9)` |
| `.pr-10` | padding-right | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingRight}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingRight }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-right">Padding right property</label>
    <select id="select-padding-right" v-model="paddingRight">
      <option value="pr-auto">Auto</option>
      <option value="pr-0">0</option>
      <option value="pr-1">1</option>
      <option value="pr-2">2</option>
      <option value="pr-3">3</option>
      <option value="pr-4">4</option>
      <option value="pr-5">5</option>
      <option value="pr-6">6</option>
      <option value="pr-7">7</option>
      <option value="pr-8">8</option>
      <option value="pr-9">9</option>
      <option value="pr-10">10</option>
    </select>
  </div>
</div>

## Padding Bottom

| Class Name | Property | Value |
| --- | --- | --- |
| `.pb-auto` | padding-bottom | `auto` |
| `.pb-0` | padding-bottom | `var(--graupl-spacer-0)` |
| `.pb-1` | padding-bottom | `var(--graupl-spacer-1)` |
| `.pb-2` | padding-bottom | `var(--graupl-spacer-2)` |
| `.pb-3` | padding-bottom | `var(--graupl-spacer-3)` |
| `.pb-4` | padding-bottom | `var(--graupl-spacer-4)` |
| `.pb-5` | padding-bottom | `var(--graupl-spacer-5)` |
| `.pb-6` | padding-bottom | `var(--graupl-spacer-6)` |
| `.pb-7` | padding-bottom | `var(--graupl-spacer-7)` |
| `.pb-8` | padding-bottom | `var(--graupl-spacer-8)` |
| `.pb-9` | padding-bottom | `var(--graupl-spacer-9)` |
| `.pb-10` | padding-bottom | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingBottom}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingBottom }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-bottom">Padding bottom property</label>
    <select id="select-padding-bottom" v-model="paddingBottom">
      <option value="pb-auto">Auto</option>
      <option value="pb-0">0</option>
      <option value="pb-1">1</option>
      <option value="pb-2">2</option>
      <option value="pb-3">3</option>
      <option value="pb-4">4</option>
      <option value="pb-5">5</option>
      <option value="pb-6">6</option>
      <option value="pb-7">7</option>
      <option value="pb-8">8</option>
      <option value="pb-9">9</option>
      <option value="pb-10">10</option>
    </select>
  </div>
</div>

## Padding Left

| Class Name | Property | Value |
| --- | --- | --- |
| `.pl-auto` | padding-left | `auto` |
| `.pl-0` | padding-left | `var(--graupl-spacer-0)` |
| `.pl-1` | padding-left | `var(--graupl-spacer-1)` |
| `.pl-2` | padding-left | `var(--graupl-spacer-2)` |
| `.pl-3` | padding-left | `var(--graupl-spacer-3)` |
| `.pl-4` | padding-left | `var(--graupl-spacer-4)` |
| `.pl-5` | padding-left | `var(--graupl-spacer-5)` |
| `.pl-6` | padding-left | `var(--graupl-spacer-6)` |
| `.pl-7` | padding-left | `var(--graupl-spacer-7)` |
| `.pl-8` | padding-left | `var(--graupl-spacer-8)` |
| `.pl-9` | padding-left | `var(--graupl-spacer-9)` |
| `.pl-10` | padding-left | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingLeft}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingLeft }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-left">Padding left property</label>
    <select id="select-padding-left" v-model="paddingLeft">
      <option value="pl-auto">Auto</option>
      <option value="pl-0">0</option>
      <option value="pl-1">1</option>
      <option value="pl-2">2</option>
      <option value="pl-3">3</option>
      <option value="pl-4">4</option>
      <option value="pl-5">5</option>
      <option value="pl-6">6</option>
      <option value="pl-7">7</option>
      <option value="pl-8">8</option>
      <option value="pl-9">9</option>
      <option value="pl-10">10</option>
    </select>
  </div>
</div>

## Padding X

| Class Name | Property | Value |
| --- | --- | --- |
| `.px-auto` | padding-left, padding-right | `auto` |
| `.px-0` | padding-left, padding-right | `var(--graupl-spacer-0)` |
| `.px-1` | padding-left, padding-right | `var(--graupl-spacer-1)` |
| `.px-2` | padding-left, padding-right | `var(--graupl-spacer-2)` |
| `.px-3` | padding-left, padding-right | `var(--graupl-spacer-3)` |
| `.px-4` | padding-left, padding-right | `var(--graupl-spacer-4)` |
| `.px-5` | padding-left, padding-right | `var(--graupl-spacer-5)` |
| `.px-6` | padding-left, padding-right | `var(--graupl-spacer-6)` |
| `.px-7` | padding-left, padding-right | `var(--graupl-spacer-7)` |
| `.px-8` | padding-left, padding-right | `var(--graupl-spacer-8)` |
| `.px-9` | padding-left, padding-right | `var(--graupl-spacer-9)` |
| `.px-10` | padding-left, padding-right | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingX}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingX }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-x">Padding X property</label>
    <select id="select-padding-x" v-model="paddingX">
      <option value="px-auto">Auto</option>
      <option value="px-0">0</option>
      <option value="px-1">1</option>
      <option value="px-2">2</option>
      <option value="px-3">3</option>
      <option value="px-4">4</option>
      <option value="px-5">5</option>
      <option value="px-6">6</option>
      <option value="px-7">7</option>
      <option value="px-8">8</option>
      <option value="px-9">9</option>
      <option value="px-10">10</option>
    </select>
  </div>
</div>

## Padding Y

| Class Name | Property | Value |
| --- | --- | --- |
| `.py-auto` | padding-top, padding-bottom | `auto` |
| `.py-0` | padding-top, padding-bottom | `var(--graupl-spacer-0)` |
| `.py-1` | padding-top, padding-bottom | `var(--graupl-spacer-1)` |
| `.py-2` | padding-top, padding-bottom | `var(--graupl-spacer-2)` |
| `.py-3` | padding-top, padding-bottom | `var(--graupl-spacer-3)` |
| `.py-4` | padding-top, padding-bottom | `var(--graupl-spacer-4)` |
| `.py-5` | padding-top, padding-bottom | `var(--graupl-spacer-5)` |
| `.py-6` | padding-top, padding-bottom | `var(--graupl-spacer-6)` |
| `.py-7` | padding-top, padding-bottom | `var(--graupl-spacer-7)` |
| `.py-8` | padding-top, padding-bottom | `var(--graupl-spacer-8)` |
| `.py-9` | padding-top, padding-bottom | `var(--graupl-spacer-9)` |
| `.py-10` | padding-top, padding-bottom | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingY}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingY }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-y">Padding Y property</label>
    <select id="select-padding-y" v-model="paddingY">
      <option value="py-auto">Auto</option>
      <option value="py-0">0</option>
      <option value="py-1">1</option>
      <option value="py-2">2</option>
      <option value="py-3">3</option>
      <option value="py-4">4</option>
      <option value="py-5">5</option>
      <option value="py-6">6</option>
      <option value="py-7">7</option>
      <option value="py-8">8</option>
      <option value="py-9">9</option>
      <option value="py-10">10</option>
    </select>
  </div>
</div>

## Padding Block Start

| Class Name | Property | Value |
| --- | --- | --- |
| `.pbs-auto` | padding-block-start | `auto` |
| `.pbs-0` | padding-block-start | `var(--graupl-spacer-0)` |
| `.pbs-1` | padding-block-start | `var(--graupl-spacer-1)` |
| `.pbs-2` | padding-block-start | `var(--graupl-spacer-2)` |
| `.pbs-3` | padding-block-start | `var(--graupl-spacer-3)` |
| `.pbs-4` | padding-block-start | `var(--graupl-spacer-4)` |
| `.pbs-5` | padding-block-start | `var(--graupl-spacer-5)` |
| `.pbs-6` | padding-block-start | `var(--graupl-spacer-6)` |
| `.pbs-7` | padding-block-start | `var(--graupl-spacer-7)` |
| `.pbs-8` | padding-block-start | `var(--graupl-spacer-8)` |
| `.pbs-9` | padding-block-start | `var(--graupl-spacer-9)` |
| `.pbs-10` | padding-block-start | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingBlockStart}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingBlockStart }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-block-start">Padding block start property</label>
    <select id="select-padding-block-start" v-model="paddingBlockStart">
      <option value="pbs-auto">Auto</option>
      <option value="pbs-0">0</option>
      <option value="pbs-1">1</option>
      <option value="pbs-2">2</option>
      <option value="pbs-3">3</option>
      <option value="pbs-4">4</option>
      <option value="pbs-5">5</option>
      <option value="pbs-6">6</option>
      <option value="pbs-7">7</option>
      <option value="pbs-8">8</option>
      <option value="pbs-9">9</option>
      <option value="pbs-10">10</option>
    </select>
  </div>
</div>


## Padding Block End

| Class Name | Property | Value |
| --- | --- | --- |
| `.pbe-auto` | padding-block-end | `auto` |
| `.pbe-0` | padding-block-end | `var(--graupl-spacer-0)` |
| `.pbe-1` | padding-block-end | `var(--graupl-spacer-1)` |
| `.pbe-2` | padding-block-end | `var(--graupl-spacer-2)` |
| `.pbe-3` | padding-block-end | `var(--graupl-spacer-3)` |
| `.pbe-4` | padding-block-end | `var(--graupl-spacer-4)` |
| `.pbe-5` | padding-block-end | `var(--graupl-spacer-5)` |
| `.pbe-6` | padding-block-end | `var(--graupl-spacer-6)` |
| `.pbe-7` | padding-block-end | `var(--graupl-spacer-7)` |
| `.pbe-8` | padding-block-end | `var(--graupl-spacer-8)` |
| `.pbe-9` | padding-block-end | `var(--graupl-spacer-9)` |
| `.pbe-10` | padding-block-end | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingBlockEnd}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingBlockEnd }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-block-end">Padding block end property</label>
    <select id="select-padding-block-end" v-model="paddingBlockEnd">
      <option value="pbe-auto">Auto</option>
      <option value="pbe-0">0</option>
      <option value="pbe-1">1</option>
      <option value="pbe-2">2</option>
      <option value="pbe-3">3</option>
      <option value="pbe-4">4</option>
      <option value="pbe-5">5</option>
      <option value="pbe-6">6</option>
      <option value="pbe-7">7</option>
      <option value="pbe-8">8</option>
      <option value="pbe-9">9</option>
      <option value="pbe-10">10</option>
    </select>
  </div>
</div>

## Padding Block

| Class Name | Property | Value |
| --- | --- | --- |
| `.pbse-auto` | padding-block | `auto` |
| `.pbse-0` | padding-block | `var(--graupl-spacer-0)` |
| `.pbse-1` | padding-block | `var(--graupl-spacer-1)` |
| `.pbse-2` | padding-block | `var(--graupl-spacer-2)` |
| `.pbse-3` | padding-block | `var(--graupl-spacer-3)` |
| `.pbse-4` | padding-block | `var(--graupl-spacer-4)` |
| `.pbse-5` | padding-block | `var(--graupl-spacer-5)` |
| `.pbse-6` | padding-block | `var(--graupl-spacer-6)` |
| `.pbse-7` | padding-block | `var(--graupl-spacer-7)` |
| `.pbse-8` | padding-block | `var(--graupl-spacer-8)` |
| `.pbse-9` | padding-block | `var(--graupl-spacer-9)` |
| `.pbse-10` | padding-block | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingBlock}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingBlock }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-block">Padding block property</label>
    <select id="select-padding-block" v-model="paddingBlock">
      <option value="pbse-auto">Auto</option>
      <option value="pbse-0">0</option>
      <option value="pbse-1">1</option>
      <option value="pbse-2">2</option>
      <option value="pbse-3">3</option>
      <option value="pbse-4">4</option>
      <option value="pbse-5">5</option>
      <option value="pbse-6">6</option>
      <option value="pbse-7">7</option>
      <option value="pbse-8">8</option>
      <option value="pbse-9">9</option>
      <option value="pbse-10">10</option>
    </select>
  </div>
</div>

## Padding Inline Start

| Class Name | Property | Value |
| --- | --- | --- |
| `.pis-auto` | padding-inline-start | `auto` |
| `.pis-0` | padding-inline-start | `var(--graupl-spacer-0)` |
| `.pis-1` | padding-inline-start | `var(--graupl-spacer-1)` |
| `.pis-2` | padding-inline-start | `var(--graupl-spacer-2)` |
| `.pis-3` | padding-inline-start | `var(--graupl-spacer-3)` |
| `.pis-4` | padding-inline-start | `var(--graupl-spacer-4)` |
| `.pis-5` | padding-inline-start | `var(--graupl-spacer-5)` |
| `.pis-6` | padding-inline-start | `var(--graupl-spacer-6)` |
| `.pis-7` | padding-inline-start | `var(--graupl-spacer-7)` |
| `.pis-8` | padding-inline-start | `var(--graupl-spacer-8)` |
| `.pis-9` | padding-inline-start | `var(--graupl-spacer-9)` |
| `.pis-10` | padding-inline-start | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingInlineStart}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingInlineStart }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-inline-start">Padding inline start property</label>
    <select id="select-padding-inline-start" v-model="paddingInlineStart">
      <option value="pis-auto">Auto</option>
      <option value="pis-0">0</option>
      <option value="pis-1">1</option>
      <option value="pis-2">2</option>
      <option value="pis-3">3</option>
      <option value="pis-4">4</option>
      <option value="pis-5">5</option>
      <option value="pis-6">6</option>
      <option value="pis-7">7</option>
      <option value="pis-8">8</option>
      <option value="pis-9">9</option>
      <option value="pis-10">10</option>
    </select>
  </div>
</div>

## Padding Inline End

| Class Name | Property | Value |
| --- | --- | --- |
| `.pie-auto` | padding-inline-end | `auto` |
| `.pie-0` | padding-inline-end | `var(--graupl-spacer-0)` |
| `.pie-1` | padding-inline-end | `var(--graupl-spacer-1)` |
| `.pie-2` | padding-inline-end | `var(--graupl-spacer-2)` |
| `.pie-3` | padding-inline-end | `var(--graupl-spacer-3)` |
| `.pie-4` | padding-inline-end | `var(--graupl-spacer-4)` |
| `.pie-5` | padding-inline-end | `var(--graupl-spacer-5)` |
| `.pie-6` | padding-inline-end | `var(--graupl-spacer-6)` |
| `.pie-7` | padding-inline-end | `var(--graupl-spacer-7)` |
| `.pie-8` | padding-inline-end | `var(--graupl-spacer-8)` |
| `.pie-9` | padding-inline-end | `var(--graupl-spacer-9)` |
| `.pie-10` | padding-inline-end | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingInlineEnd}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingInlineEnd }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-inline-end">Padding inline end property</label>
    <select id="select-padding-inline-end" v-model="paddingInlineEnd">
      <option value="pie-auto">Auto</option>
      <option value="pie-0">0</option>
      <option value="pie-1">1</option>
      <option value="pie-2">2</option>
      <option value="pie-3">3</option>
      <option value="pie-4">4</option>
      <option value="pie-5">5</option>
      <option value="pie-6">6</option>
      <option value="pie-7">7</option>
      <option value="pie-8">8</option>
      <option value="pie-9">9</option>
      <option value="pie-10">10</option>
    </select>
  </div>
</div>

## Padding Inline

| Class Name | Property | Value |
| --- | --- | --- |
| `.pise-auto` | padding-inline | `auto` |
| `.pise-0` | padding-inline | `var(--graupl-spacer-0)` |
| `.pise-1` | padding-inline | `var(--graupl-spacer-1)` |
| `.pise-2` | padding-inline | `var(--graupl-spacer-2)` |
| `.pise-3` | padding-inline | `var(--graupl-spacer-3)` |
| `.pise-4` | padding-inline | `var(--graupl-spacer-4)` |
| `.pise-5` | padding-inline | `var(--graupl-spacer-5)` |
| `.pise-6` | padding-inline | `var(--graupl-spacer-6)` |
| `.pise-7` | padding-inline | `var(--graupl-spacer-7)` |
| `.pise-8` | padding-inline | `var(--graupl-spacer-8)` |
| `.pise-9` | padding-inline | `var(--graupl-spacer-9)` |
| `.pise-10` | padding-inline | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div :class="`bordered border-primary-700 bg-tertiary-200 ${paddingInline}`">
          <div class="bg-primary-300 bs-7 is-7"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ paddingInline }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding-inline">Padding inline property</label>
    <select id="select-padding-inline" v-model="paddingInline">
      <option value="pise-auto">Auto</option>
      <option value="pise-0">0</option>
      <option value="pise-1">1</option>
      <option value="pise-2">2</option>
      <option value="pise-3">3</option>
      <option value="pise-4">4</option>
      <option value="pise-5">5</option>
      <option value="pise-6">6</option>
      <option value="pise-7">7</option>
      <option value="pise-8">8</option>
      <option value="pise-9">9</option>
      <option value="pise-10">10</option>
    </select>
  </div>
</div>

## Margin

| Class Name | Property | Value |
| --- | --- | --- |
| `.m-auto` | margin | `auto` |
| `.m-0` | margin | `var(--graupl-spacer-0)` |
| `.m-1` | margin | `var(--graupl-spacer-1)` |
| `.m-2` | margin | `var(--graupl-spacer-2)` |
| `.m-5` | margin | `var(--graupl-spacer-3)` |
| `.m-4` | margin | `var(--graupl-spacer-4)` |
| `.m-5` | margin | `var(--graupl-spacer-5)` |
| `.m-6` | margin | `var(--graupl-spacer-6)` |
| `.m-7` | margin | `var(--graupl-spacer-7)` |
| `.m-8` | margin | `var(--graupl-spacer-8)` |
| `.m-9` | margin | `var(--graupl-spacer-9)` |
| `.m-10` | margin | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${margin}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ margin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin">Margin property</label>
    <select id="select-margin" v-model="margin">
      <option value="m-auto">Auto</option>
      <option value="m-0">0</option>
      <option value="m-1">1</option>
      <option value="m-2">2</option>
      <option value="m-3">3</option>
      <option value="m-4">4</option>
      <option value="m-5">5</option>
      <option value="m-6">6</option>
      <option value="m-7">7</option>
      <option value="m-8">8</option>
      <option value="m-9">9</option>
      <option value="m-10">10</option>
    </select>
  </div>
</div>

## Margin Top

| Class Name | Property | Value |
| --- | --- | --- |
| `.mt-auto` | margin-top | `auto` |
| `.mt-0` | margin-top | `var(--graupl-spacer-0)` |
| `.mt-1` | margin-top | `var(--graupl-spacer-1)` |
| `.mt-2` | margin-top | `var(--graupl-spacer-2)` |
| `.mt-3` | margin-top | `var(--graupl-spacer-3)` |
| `.mt-4` | margin-top | `var(--graupl-spacer-4)` |
| `.mt-5` | margin-top | `var(--graupl-spacer-5)` |
| `.mt-6` | margin-top | `var(--graupl-spacer-6)` |
| `.mt-7` | margin-top | `var(--graupl-spacer-7)` |
| `.mt-8` | margin-top | `var(--graupl-spacer-8)` |
| `.mt-9` | margin-top | `var(--graupl-spacer-9)` |
| `.mt-10` | margin-top | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginTop}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginTop }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-top">Margin top property</label>
    <select id="select-margin-top" v-model="marginTop">
      <option value="mt-auto">Auto</option>
      <option value="mt-0">0</option>
      <option value="mt-1">1</option>
      <option value="mt-2">2</option>
      <option value="mt-3">3</option>
      <option value="mt-4">4</option>
      <option value="mt-5">5</option>
      <option value="mt-6">6</option>
      <option value="mt-7">7</option>
      <option value="mt-8">8</option>
      <option value="mt-9">9</option>
      <option value="mt-10">10</option>
    </select>
  </div>
</div>

## Margin Right

| Class Name | Property | Value |
| --- | --- | --- |
| `.mr-auto` | margin-right | `auto` |
| `.mr-0` | margin-right | `var(--graupl-spacer-0)` |
| `.mr-1` | margin-right | `var(--graupl-spacer-1)` |
| `.mr-2` | margin-right | `var(--graupl-spacer-2)` |
| `.mr-3` | margin-right | `var(--graupl-spacer-3)` |
| `.mr-4` | margin-right | `var(--graupl-spacer-4)` |
| `.mr-5` | margin-right | `var(--graupl-spacer-5)` |
| `.mr-6` | margin-right | `var(--graupl-spacer-6)` |
| `.mr-7` | margin-right | `var(--graupl-spacer-7)` |
| `.mr-8` | margin-right | `var(--graupl-spacer-8)` |
| `.mr-9` | margin-right | `var(--graupl-spacer-9)` |
| `.mr-10` | margin-right | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginRight}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginRight }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-right">Margin right property</label>
    <select id="select-margin-right" v-model="marginRight">
      <option value="mr-auto">Auto</option>
      <option value="mr-0">0</option>
      <option value="mr-1">1</option>
      <option value="mr-2">2</option>
      <option value="mr-3">3</option>
      <option value="mr-4">4</option>
      <option value="mr-5">5</option>
      <option value="mr-6">6</option>
      <option value="mr-7">7</option>
      <option value="mr-8">8</option>
      <option value="mr-9">9</option>
      <option value="mr-10">10</option>
    </select>
  </div>
</div>

## Margin Bottom

| Class Name | Property | Value |
| --- | --- | --- |
| `.mb-auto` | margin-bottom | `auto` |
| `.mb-0` | margin-bottom | `var(--graupl-spacer-0)` |
| `.mb-1` | margin-bottom | `var(--graupl-spacer-1)` |
| `.mb-2` | margin-bottom | `var(--graupl-spacer-2)` |
| `.mb-3` | margin-bottom | `var(--graupl-spacer-3)` |
| `.mb-4` | margin-bottom | `var(--graupl-spacer-4)` |
| `.mb-5` | margin-bottom | `var(--graupl-spacer-5)` |
| `.mb-6` | margin-bottom | `var(--graupl-spacer-6)` |
| `.mb-7` | margin-bottom | `var(--graupl-spacer-7)` |
| `.mb-8` | margin-bottom | `var(--graupl-spacer-8)` |
| `.mb-9` | margin-bottom | `var(--graupl-spacer-9)` |
| `.mb-10` | margin-bottom | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginBottom}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginBottom }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-bottom">Margin bottom property</label>
    <select id="select-margin-bottom" v-model="marginBottom">
      <option value="mb-auto">Auto</option>
      <option value="mb-0">0</option>
      <option value="mb-1">1</option>
      <option value="mb-2">2</option>
      <option value="mb-3">3</option>
      <option value="mb-4">4</option>
      <option value="mb-5">5</option>
      <option value="mb-6">6</option>
      <option value="mb-7">7</option>
      <option value="mb-8">8</option>
      <option value="mb-9">9</option>
      <option value="mb-10">10</option>
    </select>
  </div>
</div>

## Margin Left

| Class Name | Property | Value |
| --- | --- | --- |
| `.ml-auto` | margin-left | `auto` |
| `.ml-0` | margin-left | `var(--graupl-spacer-0)` |
| `.ml-1` | margin-left | `var(--graupl-spacer-1)` |
| `.ml-2` | margin-left | `var(--graupl-spacer-2)` |
| `.ml-3` | margin-left | `var(--graupl-spacer-3)` |
| `.ml-4` | margin-left | `var(--graupl-spacer-4)` |
| `.ml-5` | margin-left | `var(--graupl-spacer-5)` |
| `.ml-6` | margin-left | `var(--graupl-spacer-6)` |
| `.ml-7` | margin-left | `var(--graupl-spacer-7)` |
| `.ml-8` | margin-left | `var(--graupl-spacer-8)` |
| `.ml-9` | margin-left | `var(--graupl-spacer-9)` |
| `.ml-10` | margin-left | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginLeft}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginLeft }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-left">Margin left property</label>
    <select id="select-margin-left" v-model="marginLeft">
      <option value="ml-auto">Auto</option>
      <option value="ml-0">0</option>
      <option value="ml-1">1</option>
      <option value="ml-2">2</option>
      <option value="ml-3">3</option>
      <option value="ml-4">4</option>
      <option value="ml-5">5</option>
      <option value="ml-6">6</option>
      <option value="ml-7">7</option>
      <option value="ml-8">8</option>
      <option value="ml-9">9</option>
      <option value="ml-10">10</option>
    </select>
  </div>
</div>

## Margin X

| Class Name | Property | Value |
| --- | --- | --- |
| `.mx-auto` | margin-left, margin-right | `auto` |
| `.mx-0` | margin-left, margin-right | `var(--graupl-spacer-0)` |
| `.mx-1` | margin-left, margin-right | `var(--graupl-spacer-1)` |
| `.mx-2` | margin-left, margin-right | `var(--graupl-spacer-2)` |
| `.mx-3` | margin-left, margin-right | `var(--graupl-spacer-3)` |
| `.mx-4` | margin-left, margin-right | `var(--graupl-spacer-4)` |
| `.mx-5` | margin-left, margin-right | `var(--graupl-spacer-5)` |
| `.mx-6` | margin-left, margin-right | `var(--graupl-spacer-6)` |
| `.mx-7` | margin-left, margin-right | `var(--graupl-spacer-7)` |
| `.mx-8` | margin-left, margin-right | `var(--graupl-spacer-8)` |
| `.mx-9` | margin-left, margin-right | `var(--graupl-spacer-9)` |
| `.mx-10` | margin-left, margin-right | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginX}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginX }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-x">Margin X property</label>
    <select id="select-margin-x" v-model="marginX">
      <option value="mx-auto">Auto</option>
      <option value="mx-0">0</option>
      <option value="mx-1">1</option>
      <option value="mx-2">2</option>
      <option value="mx-3">3</option>
      <option value="mx-4">4</option>
      <option value="mx-5">5</option>
      <option value="mx-6">6</option>
      <option value="mx-7">7</option>
      <option value="mx-8">8</option>
      <option value="mx-9">9</option>
      <option value="mx-10">10</option>
    </select>
  </div>
</div>

## Margin Y

| Class Name | Property | Value |
| --- | --- | --- |
| `.my-auto` | margin-top, margin-bottom | `auto` |
| `.my-0` | margin-top, margin-bottom | `var(--graupl-spacer-0)` |
| `.my-1` | margin-top, margin-bottom | `var(--graupl-spacer-1)` |
| `.my-2` | margin-top, margin-bottom | `var(--graupl-spacer-2)` |
| `.my-3` | margin-top, margin-bottom | `var(--graupl-spacer-3)` |
| `.my-4` | margin-top, margin-bottom | `var(--graupl-spacer-4)` |
| `.my-5` | margin-top, margin-bottom | `var(--graupl-spacer-5)` |
| `.my-6` | margin-top, margin-bottom | `var(--graupl-spacer-6)` |
| `.my-7` | margin-top, margin-bottom | `var(--graupl-spacer-7)` |
| `.my-8` | margin-top, margin-bottom | `var(--graupl-spacer-8)` |
| `.my-9` | margin-top, margin-bottom | `var(--graupl-spacer-9)` |
| `.my-10` | margin-top, margin-bottom | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginY}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginY }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-y">Margin Y property</label>
    <select id="select-margin-y" v-model="marginY">
      <option value="my-auto">Auto</option>
      <option value="my-0">0</option>
      <option value="my-1">1</option>
      <option value="my-2">2</option>
      <option value="my-3">3</option>
      <option value="my-4">4</option>
      <option value="my-5">5</option>
      <option value="my-6">6</option>
      <option value="my-7">7</option>
      <option value="my-8">8</option>
      <option value="my-9">9</option>
      <option value="my-10">10</option>
    </select>
  </div>
</div>

## Margin Block Start

| Class Name | Property | Value |
| --- | --- | --- |
| `.mbs-auto` | margin-block-start | `auto` |
| `.mbs-0` | margin-block-start | `var(--graupl-spacer-0)` |
| `.mbs-1` | margin-block-start | `var(--graupl-spacer-1)` |
| `.mbs-2` | margin-block-start | `var(--graupl-spacer-2)` |
| `.mbs-3` | margin-block-start | `var(--graupl-spacer-3)` |
| `.mbs-4` | margin-block-start | `var(--graupl-spacer-4)` |
| `.mbs-5` | margin-block-start | `var(--graupl-spacer-5)` |
| `.mbs-6` | margin-block-start | `var(--graupl-spacer-6)` |
| `.mbs-7` | margin-block-start | `var(--graupl-spacer-7)` |
| `.mbs-8` | margin-block-start | `var(--graupl-spacer-8)` |
| `.mbs-9` | margin-block-start | `var(--graupl-spacer-9)` |
| `.mbs-10` | margin-block-start | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginBlockStart}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginBlockStart }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-block-start">Margin block start property</label>
    <select id="select-margin-block-start" v-model="marginBlockStart">
      <option value="mbs-auto">Auto</option>
      <option value="mbs-0">0</option>
      <option value="mbs-1">1</option>
      <option value="mbs-2">2</option>
      <option value="mbs-3">3</option>
      <option value="mbs-4">4</option>
      <option value="mbs-5">5</option>
      <option value="mbs-6">6</option>
      <option value="mbs-7">7</option>
      <option value="mbs-8">8</option>
      <option value="mbs-9">9</option>
      <option value="mbs-10">10</option>
    </select>
  </div>
</div>


## Margin Block End

| Class Name | Property | Value |
| --- | --- | --- |
| `.mbe-auto` | margin-block-end | `auto` |
| `.mbe-0` | margin-block-end | `var(--graupl-spacer-0)` |
| `.mbe-1` | margin-block-end | `var(--graupl-spacer-1)` |
| `.mbe-2` | margin-block-end | `var(--graupl-spacer-2)` |
| `.mbe-3` | margin-block-end | `var(--graupl-spacer-3)` |
| `.mbe-4` | margin-block-end | `var(--graupl-spacer-4)` |
| `.mbe-5` | margin-block-end | `var(--graupl-spacer-5)` |
| `.mbe-6` | margin-block-end | `var(--graupl-spacer-6)` |
| `.mbe-7` | margin-block-end | `var(--graupl-spacer-7)` |
| `.mbe-8` | margin-block-end | `var(--graupl-spacer-8)` |
| `.mbe-9` | margin-block-end | `var(--graupl-spacer-9)` |
| `.mbe-10` | margin-block-end | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginBlockEnd}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginBlockEnd }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-block-end">Margin block end property</label>
    <select id="select-margin-block-end" v-model="marginBlockEnd">
      <option value="mbe-auto">Auto</option>
      <option value="mbe-0">0</option>
      <option value="mbe-1">1</option>
      <option value="mbe-2">2</option>
      <option value="mbe-3">3</option>
      <option value="mbe-4">4</option>
      <option value="mbe-5">5</option>
      <option value="mbe-6">6</option>
      <option value="mbe-7">7</option>
      <option value="mbe-8">8</option>
      <option value="mbe-9">9</option>
      <option value="mbe-10">10</option>
    </select>
  </div>
</div>

## Margin Block

| Class Name | Property | Value |
| --- | --- | --- |
| `.mbse-auto` | margin-block | `auto` |
| `.mbse-0` | margin-block | `var(--graupl-spacer-0)` |
| `.mbse-1` | margin-block | `var(--graupl-spacer-1)` |
| `.mbse-2` | margin-block | `var(--graupl-spacer-2)` |
| `.mbse-3` | margin-block | `var(--graupl-spacer-3)` |
| `.mbse-4` | margin-block | `var(--graupl-spacer-4)` |
| `.mbse-5` | margin-block | `var(--graupl-spacer-5)` |
| `.mbse-6` | margin-block | `var(--graupl-spacer-6)` |
| `.mbse-7` | margin-block | `var(--graupl-spacer-7)` |
| `.mbse-8` | margin-block | `var(--graupl-spacer-8)` |
| `.mbse-9` | margin-block | `var(--graupl-spacer-9)` |
| `.mbse-10` | margin-block | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginBlock}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginBlock }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-block">Margin block property</label>
    <select id="select-margin-block" v-model="marginBlock">
      <option value="mbse-auto">Auto</option>
      <option value="mbse-0">0</option>
      <option value="mbse-1">1</option>
      <option value="mbse-2">2</option>
      <option value="mbse-3">3</option>
      <option value="mbse-4">4</option>
      <option value="mbse-5">5</option>
      <option value="mbse-6">6</option>
      <option value="mbse-7">7</option>
      <option value="mbse-8">8</option>
      <option value="mbse-9">9</option>
      <option value="mbse-10">10</option>
    </select>
  </div>
</div>

## Margin Inline Start

| Class Name | Property | Value |
| --- | --- | --- |
| `.mis-auto` | margin-inline-start | `auto` |
| `.mis-0` | margin-inline-start | `var(--graupl-spacer-0)` |
| `.mis-1` | margin-inline-start | `var(--graupl-spacer-1)` |
| `.mis-2` | margin-inline-start | `var(--graupl-spacer-2)` |
| `.mis-3` | margin-inline-start | `var(--graupl-spacer-3)` |
| `.mis-4` | margin-inline-start | `var(--graupl-spacer-4)` |
| `.mis-5` | margin-inline-start | `var(--graupl-spacer-5)` |
| `.mis-6` | margin-inline-start | `var(--graupl-spacer-6)` |
| `.mis-7` | margin-inline-start | `var(--graupl-spacer-7)` |
| `.mis-8` | margin-inline-start | `var(--graupl-spacer-8)` |
| `.mis-9` | margin-inline-start | `var(--graupl-spacer-9)` |
| `.mis-10` | margin-inline-start | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginInlineStart}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginInlineStart }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-inline-start">Margin inline start property</label>
    <select id="select-margin-inline-start" v-model="marginInlineStart">
      <option value="mis-auto">Auto</option>
      <option value="mis-0">0</option>
      <option value="mis-1">1</option>
      <option value="mis-2">2</option>
      <option value="mis-3">3</option>
      <option value="mis-4">4</option>
      <option value="mis-5">5</option>
      <option value="mis-6">6</option>
      <option value="mis-7">7</option>
      <option value="mis-8">8</option>
      <option value="mis-9">9</option>
      <option value="mis-10">10</option>
    </select>
  </div>
</div>

## Margin Inline End

| Class Name | Property | Value |
| --- | --- | --- |
| `.mie-auto` | margin-inline-end | `auto` |
| `.mie-0` | margin-inline-end | `var(--graupl-spacer-0)` |
| `.mie-1` | margin-inline-end | `var(--graupl-spacer-1)` |
| `.mie-2` | margin-inline-end | `var(--graupl-spacer-2)` |
| `.mie-3` | margin-inline-end | `var(--graupl-spacer-3)` |
| `.mie-4` | margin-inline-end | `var(--graupl-spacer-4)` |
| `.mie-5` | margin-inline-end | `var(--graupl-spacer-5)` |
| `.mie-6` | margin-inline-end | `var(--graupl-spacer-6)` |
| `.mie-7` | margin-inline-end | `var(--graupl-spacer-7)` |
| `.mie-8` | margin-inline-end | `var(--graupl-spacer-8)` |
| `.mie-9` | margin-inline-end | `var(--graupl-spacer-9)` |
| `.mie-10` | margin-inline-end | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginInlineEnd}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginInlineEnd }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-inline-end">Margin inline end property</label>
    <select id="select-margin-inline-end" v-model="marginInlineEnd">
      <option value="mie-auto">Auto</option>
      <option value="mie-0">0</option>
      <option value="mie-1">1</option>
      <option value="mie-2">2</option>
      <option value="mie-3">3</option>
      <option value="mie-4">4</option>
      <option value="mie-5">5</option>
      <option value="mie-6">6</option>
      <option value="mie-7">7</option>
      <option value="mie-8">8</option>
      <option value="mie-9">9</option>
      <option value="mie-10">10</option>
    </select>
  </div>
</div>

## Margin Inline

| Class Name | Property | Value |
| --- | --- | --- |
| `.mise-auto` | margin-inline | `auto` |
| `.mise-0` | margin-inline | `var(--graupl-spacer-0)` |
| `.mise-1` | margin-inline | `var(--graupl-spacer-1)` |
| `.mise-2` | margin-inline | `var(--graupl-spacer-2)` |
| `.mise-3` | margin-inline | `var(--graupl-spacer-3)` |
| `.mise-4` | margin-inline | `var(--graupl-spacer-4)` |
| `.mise-5` | margin-inline | `var(--graupl-spacer-5)` |
| `.mise-6` | margin-inline | `var(--graupl-spacer-6)` |
| `.mise-7` | margin-inline | `var(--graupl-spacer-7)` |
| `.mise-8` | margin-inline | `var(--graupl-spacer-8)` |
| `.mise-9` | margin-inline | `var(--graupl-spacer-9)` |
| `.mise-10` | margin-inline | `var(--graupl-spacer-10)` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex is-fit-content bs-fit-content">
        <div class="bg-tertiary-200">
          <div :class="`bordered border-primary-700 bg-primary-300 bs-7 is-7 ${marginInline}`"></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ marginInline }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin-inline">Margin inline property</label>
    <select id="select-margin-inline" v-model="marginInline">
      <option value="mise-auto">Auto</option>
      <option value="mise-0">0</option>
      <option value="mise-1">1</option>
      <option value="mise-2">2</option>
      <option value="mise-3">3</option>
      <option value="mise-4">4</option>
      <option value="mise-5">5</option>
      <option value="mise-6">6</option>
      <option value="mise-7">7</option>
      <option value="mise-8">8</option>
      <option value="mise-9">9</option>
      <option value="mise-10">10</option>
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

By default, screen-aware responsive utility classes are generated for spacing.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
