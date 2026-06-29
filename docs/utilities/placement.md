<script setup>
  import { ref } from "vue";

  const content = ref("place-content-center");
  const items = ref("place-items-center");
  const self = ref("place-self-center");
</script>

# Placement Utilities

The placement utilities provide a set of classes to adjust the `place-content`, `place-items`, and `place-self` properties of elements.

## Place Content

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

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="position-absolute z-0 display-flex g-5">
        <div class="bordered border-primary-700 bg-primary-300 w-7 h-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 w-7 h-7"></div>
        <div class="bordered border-primary-700 bg-primary-300 w-7 h-7"></div>
      </div>
      <div :class="`position-relative z-1 ${content} display-grid g-5 h-full`" style="grid-template-columns: repeat(3, min-content); grid-template-rows: auto;">
        <div class="bordered border-tertiary-700 bg-tertiary-300 w-7 h-7"></div>
        <div class="bordered border-tertiary-700 bg-tertiary-300 w-7 h-7"></div>
        <div class="bordered border-tertiary-700 bg-tertiary-300 w-7 h-7"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ content }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-place-content">Place content property</label>
    <select id="select-place-content" v-model="content">
      <option value="place-content-center">Center</option>
      <option value="place-content-start">Start</option>
      <option value="place-content-end">End</option>
      <option value="place-content-between">Between</option>
      <option value="place-content-around">Around</option>
      <option value="place-content-evenly">Evenly</option>
      <option value="place-content-baseline">Baseline</option>
      <option value="place-content-stretch">Stretch</option>
    </select>
  </div>
</div>

## Place Items

| Class Name | Property | Value |
| --- | --- | --- |
| `.place-items-center` | place-items | `center` |
| `.place-items-start` | place-items | `start` |
| `.place-items-end` | place-items | `end` |
| `.place-items-baseline` | place-items | `baseline` |
| `.place-items-stretch` | place-items | `stretch` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class="position-relative">
        <div :class="`display-grid g-5 position-absolute bordered border-transparent w-full z-1`" style="grid-template-columns: repeat(3, auto); grid-template-rows: auto;">
        <div class="w-fit-content bordered border-primary-700 bg-primary-300">
          <div class=" w-7 h-7 "></div>
        </div>
        <div class="w-fit-content bordered border-primary-700 bg-primary-300">
          <div class=" w-7 h-7 "></div>
        </div>
        <div class="w-fit-content bordered border-primary-700 bg-primary-300">
          <div class=" w-7 h-7 "></div>
        </div>
      </div>
      </div>
      <div :class="`display-grid border-dotted g-5 ${items} position-relative z-1`" style="grid-template-columns: repeat(3, auto); grid-template-rows: 80px;">
        <div class="bordered border-tertiary-700 bg-tertiary-300">
          <div class=" w-7 h-7 "></div>
        </div>
        <div class="bordered border-tertiary-700 bg-tertiary-300">
          <div class=" w-7 h-7 "></div>
        </div><div class="bordered border-tertiary-700 bg-tertiary-300">
          <div class=" w-7 h-7 "></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ items }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-place-items">Place Items property</label>
    <select id="select-place-items" v-model="items">
      <option value="place-items-center">Center</option>
      <option value="place-items-start">Start</option>
      <option value="place-items-end">End</option>
      <option value="place-items-baseline">Baseline</option>
      <option value="place-items-stretch">Stretch</option>
    </select>
  </div>
</div>

## Place Self

| Class Name | Property | Value |
| --- | --- | --- |
| `.place-self-auto` | place-self | `auto` |
| `.place-self-center` | place-self | `center` |
| `.place-self-start` | place-self | `start` |
| `.place-self-end` | place-self | `end` |
| `.place-self-baseline` | place-self | `baseline` |
| `.place-self-stretch` | place-self | `stretch` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-grid g-5`" style="grid-template-columns: repeat(3, auto); grid-template-rows: 80px;">
        <div :class="` bordered border-tertiary-700 bg-tertiary-300 ${self} `">
          <div class=" w-7 h-7 "></div>
        </div>
        <div class="bordered border-primary-700 bg-primary-300 "><div class=" w-7 h-7 "></div></div>
        <div class="bordered border-primary-700 bg-primary-300 "><div class=" w-7 h-7 "></div></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ self }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-place-self">Place Self property</label>
    <select id="select-place-self" v-model="self">
      <option value="place-self-center">Center</option>
      <option value="place-self-start">Start</option>
      <option value="place-self-end">End</option>
      <option value="place-self-baseline">Baseline</option>
      <option value="place-self-stretch">Stretch</option>
    </select>
  </div>
</div>

## Customization

To customize the placement utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for placement.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
