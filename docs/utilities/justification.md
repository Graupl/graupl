<script setup>
  import { ref } from "vue";

  const content = ref("justify-content-normal");
  const items = ref("justify-items-start");
  const self = ref("justify-self-auto");
</script>

# Justification Utilities

The justification utilities provide a set of classes to adjust the `justify-content`, `justify-items`, and `justify-self` properties of elements.

## Justify Content

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-content-normal` | justify-content | `normal` |
| `.justify-content-start` | justify-content | `flex-start` |
| `.justify-content-end` | justify-content | `flex-end` |
| `.justify-content-center` | justify-content | `center` |
| `.justify-content-between` | justify-content | `space-between` |
| `.justify-content-around` | justify-content | `space-around` |
| `.justify-content-evenly` | justify-content | `space-evenly` |
| `.justify-content-stretch` | justify-content | `stretch` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="position-relative">
        <div :class="`display-flex w-full g-5 position-absolute z-0`">
            <div class="bordered border-primary-700 bg-primary-300 is-7 bs-7 "></div>
            <div class="bordered border-primary-700 bg-primary-300 is-7 bs-7 "></div>
            <div class="bordered border-primary-700 bg-primary-300 is-7 bs-7"> </div>
        </div>
      </div>
      <div :class="`${content} display-grid g-5 h-auto position-relative z-1 `" style="grid-template-columns: repeat(3, min-content); grid-template-rows: auto;">
        <div class="bordered border-tertiary-700 bg-tertiary-300 is-7 bs-7"></div>
        <div class="bordered border-tertiary-700 bg-tertiary-300 is-7 bs-7"></div>
        <div class="bordered border-tertiary-700 bg-tertiary-300 is-7 bs-7"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ content }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-justify-content">Justify Content property</label>
    <select id="select-justify-content" v-model="content">
      <option value="justify-content-normal">Normal</option>
      <option value="justify-content-start">Start</option>
      <option value="justify-content-end">End</option>
      <option value="justify-content-center">Center</option>
      <option value="justify-content-between">Space Between</option>
      <option value="justify-content-around">Space Around</option>
      <option value="justify-content-evenly">Space Evenly</option>
      <option value="justify-content-stretch">Stretch</option>
    </select>
  </div>
</div>

## Justify Items

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-items-start` | justify-items | `start` |
| `.justify-items-end` | justify-items | `end` |
| `.justify-items-center` | justify-items | `center` |
| `.justify-items-stretch` | justify-items | `stretch` |

<div class="static-example">
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
      <div :class="`display-grid border-dotted g-5 ${items} position-relative z-1`" style="grid-template-columns: repeat(3, auto); grid-template-rows: auto;">
        <div class="bordered border-tertiary-700 bg-tertiary-300">
          <div class=" w-7 h-7 "></div>
        </div>
        <div class="bordered border-tertiary-700 bg-tertiary-300">
          <div class=" w-7 h-7 "></div>
        </div><div class="bordered border-tertiary-700 bg-tertiary-300">
          <div class=" w-7 bs-7 "></div>
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ items }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-justify-items">Justify Items property</label>
    <select id="select-justify-items" v-model="items">
      <option value="justify-items-start">Start</option>
      <option value="justify-items-end">End</option>
      <option value="justify-items-center">Center</option>
      <option value="justify-items-stretch">Stretch</option>
    </select>
  </div>
</div>

## Justify Self

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-self-auto` | justify-self | `auto` |
| `.justify-self-start` | justify-self | `start` |
| `.justify-self-end` | justify-self | `end` |
| `.justify-self-center` | justify-self | `center` |
| `.justify-self-stretch` | justify-self | `stretch` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-grid g-5`" style="grid-template-columns: repeat(3, auto); grid-template-rows: auto;">
        <div :class="` bordered border-tertiary-700 bg-tertiary-300 ${self} `">
          <div class=" w-7 h-7 "></div>
        </div>
        <div class="bordered border-primary-700 bg-primary-300"><div class=" w-7 h-7 "></div></div>
        <div class="bordered border-primary-700 bg-primary-300"><div class=" w-7 h-7 "></div></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ self }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-justify-self">Justify Self property</label>
    <select id="select-justify-self" v-model="self">
      <option value="justify-self-auto">Auto</option>
      <option value="justify-self-start">Start</option>
      <option value="justify-self-end">End</option>
      <option value="justify-self-center">Center</option>
      <option value="justify-self-stretch">Stretch</option>
    </select>
  </div>
</div>

## Customization

To customize the justification utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for justification.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
