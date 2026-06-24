<script setup>
  import { ref } from "vue";

  const gap = ref("g-0");
  const rowGap = ref("rg-0");
  const columnGap = ref("cg-0");
  const padding = ref("p-0");
  const topPadding = ref("pt-0");
  const rightPadding = ref("pr-0");
  const bottomPadding = ref("pb-0");
  const leftPadding = ref("pl-0");
  const xPadding = ref("px-0");
  const yPadding = ref("py-0");
  const blockStartPadding = ref("pbs-0");
  const blockEndPadding = ref("pbe-0");
  const blockPadding = ref("pbse-0");
  const inlineStartPadding = ref("pis-0");
  const inlineEndPadding = ref("pie-0");
  const inlinePadding = ref("pise-0");
  const margin = ref("m-0");
  const topMargin = ref("mt-0");
  const rightMargin = ref("mr-0");
  const bottomMargin = ref("mb-0");
  const leftMargin = ref("ml-0");
  const xMargin = ref("mx-0");
  const yMargin = ref("my-0");
  const blockStartMargin = ref("mbs-0");
  const blockEndMargin = ref("mbe-0");
  const blockMargin = ref("mbse-0");
  const inlineStartMargin = ref("mis-0");
  const inlineEndMargin = ref("mie-0");
  const inlineMargin = ref("mise-0");
</script>

# Spacing Utilities

The spacing utilities provide a set of classes to adjust the `gap`, `row-gap`, `column-gap`, `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`, `padding-block-start`, `padding-block`, `padding-inline-start`, `padding-inline-end`, `padding-inline`, `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `margin-block-start`, `margin-block`, `margin-inline-start`, `margin-inline-end` and `margin-inline` properties of elements.

## Gap

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.g-auto` | row-gap | `auto`|

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`${gap} display-grid h-full`" style="grid-template-columns: repeat(3, min-content); grid-template-rows: auto;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gap }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-gap">Gap property</label>
    <select id="select-gap" v-model="gap">
      <option value="g-0">Spacer 0</option>
      <option value="g-1">Spacer 1</option>
      <option value="g-2">Spacer 2</option>
      <option value="g-3">Spacer 3</option>
      <option value="g-4">Spacer 4</option>
      <option value="g-5">Spacer 5</option>
      <option value="g-6">Spacer 6</option>
      <option value="g-7">Spacer 7</option>
      <option value="g-8">Spacer 8</option>
      <option value="g-9">Spacer 9</option>
      <option value="g-10">Spacer 10</option>
    </select>
  </div>
</div>

## Row Gap

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.rg-auto` | row-gap | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`${rowGap} display-grid h-full`" style="grid-template-columns: repeat(3, min-content); grid-template-rows: auto;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ rowGap }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-row-gap">Row Gap property</label>
    <select id="select-row-gap" v-model="rowGap">
      <option value="rg-0">Spacer 0</option>
      <option value="rg-1">Spacer 1</option>
      <option value="rg-2">Spacer 2</option>
      <option value="rg-3">Spacer 3</option>
      <option value="rg-4">Spacer 4</option>
      <option value="rg-5">Spacer 5</option>
      <option value="rg-6">Spacer 6</option>
      <option value="rg-7">Spacer 7</option>
      <option value="rg-8">Spacer 8</option>
      <option value="rg-9">Spacer 9</option>
      <option value="rg-10">Spacer 10</option>
    </select>
  </div>
</div>

## Column Gap

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.cg-auto` | column-gap | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`${columnGap} display-grid h-full`" style="grid-template-columns: repeat(3, min-content); grid-template-rows: auto;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ columnGap }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-column-gap">Column Gap property</label>
    <select id="select-column-gap" v-model="columnGap">
      <option value="cg-0">Spacer 0</option>
      <option value="cg-1">Spacer 1</option>
      <option value="cg-2">Spacer 2</option>
      <option value="cg-3">Spacer 3</option>
      <option value="cg-4">Spacer 4</option>
      <option value="cg-5">Spacer 5</option>
      <option value="cg-6">Spacer 6</option>
      <option value="cg-7">Spacer 7</option>
      <option value="cg-8">Spacer 8</option>
      <option value="cg-9">Spacer 9</option>
      <option value="cg-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.p-auto` | padding | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 ${padding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ padding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-padding">Padding property</label>
    <select id="select-padding" v-model="padding">
      <option value="p-0">Spacer 0</option>
      <option value="p-1">Spacer 1</option>
      <option value="p-2">Spacer 2</option>
      <option value="p-5">Spacer 3</option>
      <option value="p-4">Spacer 4</option>
      <option value="p-5">Spacer 5</option>
      <option value="p-6">Spacer 6</option>
      <option value="p-7">Spacer 7</option>
      <option value="p-8">Spacer 8</option>
      <option value="p-9">Spacer 9</option>
      <option value="p-10">Spacer 10</option>
    </select>
  </div>
</div>


## Padding Top

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pt-auto` | padding-top | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${topPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ topPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-top-padding">Top Padding property</label>
    <select id="select-top-padding" v-model="topPadding">
      <option value="pt-0">Spacer 0</option>
      <option value="pt-1">Spacer 1</option>
      <option value="pt-2">Spacer 2</option>
      <option value="pt-3">Spacer 3</option>
      <option value="pt-4">Spacer 4</option>
      <option value="pt-5">Spacer 5</option>
      <option value="pt-6">Spacer 6</option>
      <option value="pt-7">Spacer 7</option>
      <option value="pt-8">Spacer 8</option>
      <option value="pt-9">Spacer 9</option>
      <option value="pt-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Right

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pr-auto` | padding-right | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 py-5 ${rightPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ rightPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-right-padding">right Padding property</label>
    <select id="select-right-padding" v-model="rightPadding">
      <option value="pr-0">Spacer 0</option>
      <option value="pr-1">Spacer 1</option>
      <option value="pr-2">Spacer 2</option>
      <option value="pr-3">Spacer 3</option>
      <option value="pr-4">Spacer 4</option>
      <option value="pr-5">Spacer 5</option>
      <option value="pr-6">Spacer 6</option>
      <option value="pr-7">Spacer 7</option>
      <option value="pr-8">Spacer 8</option>
      <option value="pr-9">Spacer 9</option>
      <option value="pr-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Bottom

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pb-auto` | padding-bottom | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${bottomPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ bottomPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-bottom-padding">Bottom Padding property</label>
    <select id="select-bottom-padding" v-model="bottomPadding">
      <option value="pb-0">Spacer 0</option>
      <option value="pb-1">Spacer 1</option>
      <option value="pb-2">Spacer 2</option>
      <option value="pb-3">Spacer 3</option>
      <option value="pb-4">Spacer 4</option>
      <option value="pb-5">Spacer 5</option>
      <option value="pb-6">Spacer 6</option>
      <option value="pb-7">Spacer 7</option>
      <option value="pb-8">Spacer 8</option>
      <option value="pb-9">Spacer 9</option>
      <option value="pb-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Left

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pl-auto` | padding-left | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 py-5 ${leftPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ leftPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-left-padding">Left Padding property</label>
    <select id="select-left-padding" v-model="leftPadding">
      <option value="pl-0">Spacer 0</option>
      <option value="pl-1">Spacer 1</option>
      <option value="pl-2">Spacer 2</option>
      <option value="pl-3">Spacer 3</option>
      <option value="pl-4">Spacer 4</option>
      <option value="pl-5">Spacer 5</option>
      <option value="pl-6">Spacer 6</option>
      <option value="pl-7">Spacer 7</option>
      <option value="pl-8">Spacer 8</option>
      <option value="pl-9">Spacer 9</option>
      <option value="pl-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding X

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.px-auto` | padding-left, padding-right | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 py-5 ${xPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ xPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-x-padding">X Padding property</label>
    <select id="select-x-padding" v-model="xPadding">
      <option value="px-0">Spacer 0</option>
      <option value="px-1">Spacer 1</option>
      <option value="px-2">Spacer 2</option>
      <option value="px-3">Spacer 3</option>
      <option value="px-4">Spacer 4</option>
      <option value="px-5">Spacer 5</option>
      <option value="px-6">Spacer 6</option>
      <option value="px-7">Spacer 7</option>
      <option value="px-8">Spacer 8</option>
      <option value="px-9">Spacer 9</option>
      <option value="px-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Y

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.py-auto` | padding-top, padding-bottom | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${yPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ yPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-y-padding">Y Padding property</label>
    <select id="select-y-padding" v-model="yPadding">
      <option value="py-0">Spacer 0</option>
      <option value="py-1">Spacer 1</option>
      <option value="py-2">Spacer 2</option>
      <option value="py-3">Spacer 3</option>
      <option value="py-4">Spacer 4</option>
      <option value="py-5">Spacer 5</option>
      <option value="py-6">Spacer 6</option>
      <option value="py-7">Spacer 7</option>
      <option value="py-8">Spacer 8</option>
      <option value="py-9">Spacer 9</option>
      <option value="py-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Block Start

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pbs-auto` | padding-block-start | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${blockStartPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ blockStartPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-block-start-padding">Block Start Padding property</label>
    <select id="select-block-start-padding" v-model="blockStartPadding">
      <option value="pbs-0">Spacer 0</option>
      <option value="pbs-1">Spacer 1</option>
      <option value="pbs-2">Spacer 2</option>
      <option value="pbs-3">Spacer 3</option>
      <option value="pbs-4">Spacer 4</option>
      <option value="pbs-5">Spacer 5</option>
      <option value="pbs-6">Spacer 6</option>
      <option value="pbs-7">Spacer 7</option>
      <option value="pbs-8">Spacer 8</option>
      <option value="pbs-9">Spacer 9</option>
      <option value="pbs-10">Spacer 10</option>
    </select>
  </div>
</div>


## Padding Block End

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pbe-auto` | padding-block-end | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${blockEndPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ blockEndPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-block-end-padding">Block End Padding property</label>
    <select id="select-block-end-padding" v-model="blockEndPadding">
      <option value="pbe-0">Spacer 0</option>
      <option value="pbe-1">Spacer 1</option>
      <option value="pbe-2">Spacer 2</option>
      <option value="pbe-3">Spacer 3</option>
      <option value="pbe-4">Spacer 4</option>
      <option value="pbe-5">Spacer 5</option>
      <option value="pbe-6">Spacer 6</option>
      <option value="pbe-7">Spacer 7</option>
      <option value="pbe-8">Spacer 8</option>
      <option value="pbe-9">Spacer 9</option>
      <option value="pbe-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Block

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pbse-auto` | padding-block | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${blockPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ blockPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-block-padding">Block Padding property</label>
    <select id="select-block-padding" v-model="blockPadding">
      <option value="pbse-0">Spacer 0</option>
      <option value="pbse-1">Spacer 1</option>
      <option value="pbse-2">Spacer 2</option>
      <option value="pbse-3">Spacer 3</option>
      <option value="pbse-4">Spacer 4</option>
      <option value="pbse-5">Spacer 5</option>
      <option value="pbse-6">Spacer 6</option>
      <option value="pbse-7">Spacer 7</option>
      <option value="pbse-8">Spacer 8</option>
      <option value="pbse-9">Spacer 9</option>
      <option value="pbse-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Inline Start

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pis-auto` | padding-inline-start | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 py-5 ${inlineStartPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ inlineStartPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inline-start-padding">Inline Start Padding property</label>
    <select id="select-inline-start-padding" v-model="inlineStartPadding">
      <option value="pis-0">Spacer 0</option>
      <option value="pis-1">Spacer 1</option>
      <option value="pis-2">Spacer 2</option>
      <option value="pis-3">Spacer 3</option>
      <option value="pis-4">Spacer 4</option>
      <option value="pis-5">Spacer 5</option>
      <option value="pis-6">Spacer 6</option>
      <option value="pis-7">Spacer 7</option>
      <option value="pis-8">Spacer 8</option>
      <option value="pis-9">Spacer 9</option>
      <option value="pis-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Inline End

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pie-auto` | padding-inline-end | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 py-5 ${inlineEndPadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ inlineEndPadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inline-end-padding">Inline End Padding property</label>
    <select id="select-inline-end-padding" v-model="inlineEndPadding">
      <option value="pie-0">Spacer 0</option>
      <option value="pie-1">Spacer 1</option>
      <option value="pie-2">Spacer 2</option>
      <option value="pie-3">Spacer 3</option>
      <option value="pie-4">Spacer 4</option>
      <option value="pie-5">Spacer 5</option>
      <option value="pie-6">Spacer 6</option>
      <option value="pie-7">Spacer 7</option>
      <option value="pie-8">Spacer 8</option>
      <option value="pie-9">Spacer 9</option>
      <option value="pie-10">Spacer 10</option>
    </select>
  </div>
</div>

## Padding Inline

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.pise-auto` | padding-inline | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 py-5 ${inlinePadding}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 py-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ inlinePadding }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inline-padding">Inline Padding property</label>
    <select id="select-inline-padding" v-model="inlinePadding">
      <option value="pise-0">Spacer 0</option>
      <option value="pise-1">Spacer 1</option>
      <option value="pise-2">Spacer 2</option>
      <option value="pise-3">Spacer 3</option>
      <option value="pise-4">Spacer 4</option>
      <option value="pise-5">Spacer 5</option>
      <option value="pise-6">Spacer 6</option>
      <option value="pise-7">Spacer 7</option>
      <option value="pise-8">Spacer 8</option>
      <option value="pise-9">Spacer 9</option>
      <option value="pise-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin

| Class Name | Property | Value |
| --- | --- | --- |
| `.m-0` | margin | `var(--graupl-spacer-0)` |
| `.m-1` | margin | `var(--graupl-spacer-1)` |
| `.m-2` | margin | `var(--graupl-spacer-2)` |
| `.m-3` | margin | `var(--graupl-spacer-3)` |
| `.m-4` | margin | `var(--graupl-spacer-4)` |
| `.m-5` | margin | `var(--graupl-spacer-5)` |
| `.m-6` | margin | `var(--graupl-spacer-6)` |
| `.m-7` | margin | `var(--graupl-spacer-7)` |
| `.m-8` | margin | `var(--graupl-spacer-8)` |
| `.m-9` | margin | `var(--graupl-spacer-9)` |
| `.m-10` | margin | `var(--graupl-spacer-10)` |
| `.m-auto` | margin | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${margin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ margin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-margin">Margin property</label>
    <select id="select-margin" v-model="margin">
      <option value="m-0">Spacer 0</option>
      <option value="m-1">Spacer 1</option>
      <option value="m-2">Spacer 2</option>
      <option value="m-3">Spacer 3</option>
      <option value="m-4">Spacer 4</option>
      <option value="m-5">Spacer 5</option>
      <option value="m-6">Spacer 6</option>
      <option value="m-7">Spacer 7</option>
      <option value="m-8">Spacer 8</option>
      <option value="m-9">Spacer 9</option>
      <option value="m-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Top

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mt-auto` | margin-top | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${topMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ topMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-top-margin">Top Margin property</label>
    <select id="select-top-margin" v-model="topMargin">
      <option value="mt-0">Spacer 0</option>
      <option value="mt-1">Spacer 1</option>
      <option value="mt-2">Spacer 2</option>
      <option value="mt-3">Spacer 3</option>
      <option value="mt-4">Spacer 4</option>
      <option value="mt-5">Spacer 5</option>
      <option value="mt-6">Spacer 6</option>
      <option value="mt-7">Spacer 7</option>
      <option value="mt-8">Spacer 8</option>
      <option value="mt-9">Spacer 9</option>
      <option value="mt-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Right

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mr-auto` | margin-right | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${rightMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ rightMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-right-margin">Right Margin property</label>
    <select id="select-right-margin" v-model="rightMargin">
      <option value="mr-0">Spacer 0</option>
      <option value="mr-1">Spacer 1</option>
      <option value="mr-2">Spacer 2</option>
      <option value="mr-3">Spacer 3</option>
      <option value="mr-4">Spacer 4</option>
      <option value="mr-5">Spacer 5</option>
      <option value="mr-6">Spacer 6</option>
      <option value="mr-7">Spacer 7</option>
      <option value="mr-8">Spacer 8</option>
      <option value="mr-9">Spacer 9</option>
      <option value="mr-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Bottom

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mb-auto` | margin-bottom | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${bottomMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ bottomMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-bottom-margin">Bottom Margin property</label>
    <select id="select-bottom-margin" v-model="bottomMargin">
      <option value="mb-0">Spacer 0</option>
      <option value="mb-1">Spacer 1</option>
      <option value="mb-2">Spacer 2</option>
      <option value="mb-3">Spacer 3</option>
      <option value="mb-4">Spacer 4</option>
      <option value="mb-5">Spacer 5</option>
      <option value="mb-6">Spacer 6</option>
      <option value="mb-7">Spacer 7</option>
      <option value="mb-8">Spacer 8</option>
      <option value="mb-9">Spacer 9</option>
      <option value="mb-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Left

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.ml-auto` | margin-left | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${leftMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ leftMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-left-margin">Left Margin property</label>
    <select id="select-left-margin" v-model="leftMargin">
      <option value="ml-0">Spacer 0</option>
      <option value="ml-1">Spacer 1</option>
      <option value="ml-2">Spacer 2</option>
      <option value="ml-3">Spacer 3</option>
      <option value="ml-4">Spacer 4</option>
      <option value="ml-5">Spacer 5</option>
      <option value="ml-6">Spacer 6</option>
      <option value="ml-7">Spacer 7</option>
      <option value="ml-8">Spacer 8</option>
      <option value="ml-9">Spacer 9</option>
      <option value="ml-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin X

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mx-auto` | margin-left, margin-right | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${xMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ xMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-x-margin">X Margin property</label>
    <select id="select-x-margin" v-model="xMargin">
      <option value="mx-0">Spacer 0</option>
      <option value="mx-1">Spacer 1</option>
      <option value="mx-2">Spacer 2</option>
      <option value="mx-3">Spacer 3</option>
      <option value="mx-4">Spacer 4</option>
      <option value="mx-5">Spacer 5</option>
      <option value="mx-6">Spacer 6</option>
      <option value="mx-7">Spacer 7</option>
      <option value="mx-8">Spacer 8</option>
      <option value="mx-9">Spacer 9</option>
      <option value="mx-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Y

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.my-auto` | margin-top, margin-bottom | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${yMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ yMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-y-margin">Y Margin property</label>
    <select id="select-y-margin" v-model="yMargin">
      <option value="my-0">Spacer 0</option>
      <option value="my-1">Spacer 1</option>
      <option value="my-2">Spacer 2</option>
      <option value="my-3">Spacer 3</option>
      <option value="my-4">Spacer 4</option>
      <option value="my-5">Spacer 5</option>
      <option value="my-6">Spacer 6</option>
      <option value="my-7">Spacer 7</option>
      <option value="my-8">Spacer 8</option>
      <option value="my-9">Spacer 9</option>
      <option value="my-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Block Start

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mbs-auto` | margin-block-start | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${blockStartMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ blockStartMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-block-start-margin">Block Start Margin property</label>
    <select id="select-block-start-margin" v-model="blockStartMargin">
      <option value="mbs-0">Spacer 0</option>
      <option value="mbs-1">Spacer 1</option>
      <option value="mbs-2">Spacer 2</option>
      <option value="mbs-3">Spacer 3</option>
      <option value="mbs-4">Spacer 4</option>
      <option value="mbs-5">Spacer 5</option>
      <option value="mbs-6">Spacer 6</option>
      <option value="mbs-7">Spacer 7</option>
      <option value="mbs-8">Spacer 8</option>
      <option value="mbs-9">Spacer 9</option>
      <option value="mbs-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Block End

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mbe-auto` | margin-block-end | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${blockEndMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ blockEndMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-block-end-margin">Block End Margin property</label>
    <select id="select-block-end-margin" v-model="blockEndMargin">
      <option value="mbe-0">Spacer 0</option>
      <option value="mbe-1">Spacer 1</option>
      <option value="mbe-2">Spacer 2</option>
      <option value="mbe-3">Spacer 3</option>
      <option value="mbe-4">Spacer 4</option>
      <option value="mbe-5">Spacer 5</option>
      <option value="mbe-6">Spacer 6</option>
      <option value="mbe-7">Spacer 7</option>
      <option value="mbe-8">Spacer 8</option>
      <option value="mbe-9">Spacer 9</option>
      <option value="mbe-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Block

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mbse-auto` | margin-block | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 px-5 ${blockMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 px-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ blockMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-block-margin">Block Margin property</label>
    <select id="select-block-margin" v-model="blockMargin">
      <option value="mbse-0">Spacer 0</option>
      <option value="mbse-1">Spacer 1</option>
      <option value="mbse-2">Spacer 2</option>
      <option value="mbse-3">Spacer 3</option>
      <option value="mbse-4">Spacer 4</option>
      <option value="mbse-5">Spacer 5</option>
      <option value="mbse-6">Spacer 6</option>
      <option value="mbse-7">Spacer 7</option>
      <option value="mbse-8">Spacer 8</option>
      <option value="mbse-9">Spacer 9</option>
      <option value="mbse-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Inline Start

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mis-auto` | margin-inline-start | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${inlineStartMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ inlineStartMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inline-start-margin">Inline Start Margin property</label>
    <select id="select-inline-start-margin" v-model="inlineStartMargin">
      <option value="mis-0">Spacer 0</option>
      <option value="mis-1">Spacer 1</option>
      <option value="mis-2">Spacer 2</option>
      <option value="mis-3">Spacer 3</option>
      <option value="mis-4">Spacer 4</option>
      <option value="mis-5">Spacer 5</option>
      <option value="mis-6">Spacer 6</option>
      <option value="mis-7">Spacer 7</option>
      <option value="mis-8">Spacer 8</option>
      <option value="mis-9">Spacer 9</option>
      <option value="mis-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Inline End

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mie-auto` | margin-inline-end | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${inlineEndMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ inlineEndMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inline-end-margin">Inline End Margin property</label>
    <select id="select-inline-end-margin" v-model="inlineEndMargin">
      <option value="mie-0">Spacer 0</option>
      <option value="mie-1">Spacer 1</option>
      <option value="mie-2">Spacer 2</option>
      <option value="mie-3">Spacer 3</option>
      <option value="mie-4">Spacer 4</option>
      <option value="mie-5">Spacer 5</option>
      <option value="mie-6">Spacer 6</option>
      <option value="mie-7">Spacer 7</option>
      <option value="mie-8">Spacer 8</option>
      <option value="mie-9">Spacer 9</option>
      <option value="mie-10">Spacer 10</option>
    </select>
  </div>
</div>

## Margin Inline

| Class Name | Property | Value |
| --- | --- | --- |
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
| `.mise-auto` | margin-inline | `auto` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-grid h-full g-3" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="`bordered border-primary-700 bg-primary-300 p-5 ${inlineMargin}`"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ inlineMargin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-inline-margin">Inline Margin property</label>
    <select id="select-inline-margin" v-model="inlineMargin">
      <option value="mise-0">Spacer 0</option>
      <option value="mise-1">Spacer 1</option>
      <option value="mise-2">Spacer 2</option>
      <option value="mise-3">Spacer 3</option>
      <option value="mise-4">Spacer 4</option>
      <option value="mise-5">Spacer 5</option>
      <option value="mise-6">Spacer 6</option>
      <option value="mise-7">Spacer 7</option>
      <option value="mise-8">Spacer 8</option>
      <option value="mise-9">Spacer 9</option>
      <option value="mise-10">Spacer 10</option>
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
