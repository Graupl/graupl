<script setup>
  import { ref } from "vue";

  const flex = ref("flex-auto");
  const flexDirection = ref("flex-row");
  const flexGrow = ref("flex-grow");
  const flexShrink = ref("flex-shrink");
  const flexWrap = ref("flex-wrap");
</script>

# Flex Utilities

The flex utilities provide a set of classes to adjust the `flex-basis`, `flex-direction`,`flex-grow`, `flex-shrink`, and `flex-wrap` properties of elements.

## Flex Basis

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-auto` | flex-basis | `auto` |
| `.flex-fit-content` | flex-basis | `fit-content` |
| `.flex-max-content` | flex-basis | `max-content` |
| `.flex-min-content` | flex-basis | `min-content` |
| `.flex-content` | flex-basis | `content` |
| `.flex-0` | flex-basis | `0` |
| `.flex-full` | flex-basis | `100%` |
| `.flex-quarter` | flex-basis | `25%` |
| `.flex-half` | flex-basis | `50%` |
| `.flex-three-quarters` | flex-basis | `75%` |
| `.flex-third` | flex-basis | `33.3333%` |
| `.flex-two-thirds` | flex-basis | `66.6667%` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex g-5 h-full`">
        <div :class="`bordered text-primary-100 border-primary-700 py-5 bg-primary-300 p-5 ${flex}`">Test Item</div>
        <div class="bordered text-primary-100 border-primary-700 py-5 bg-primary-300 p-5 flex-auto w-auto bg-tertiary-300">Auto Item</div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="display-flex"&gt;&lt;div class="{{ flex }}"&gt;&lt;/div&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-flex">Flex property</label>
    <select id="select-flex" v-model="flex">
      <option value="flex-auto">Auto</option>
      <option value="flex-fit-content">Fit Content</option>
      <option value="flex-max-content">Max Content</option>
      <option value="flex-min-content">Min Content</option>
      <option value="flex-stretch">Stretch</option>
      <option value="flex-full">Full</option>
      <option value="flex-quarter">Quarter</option>
      <option value="flex-half">Half</option>
      <option value="flex-three-quarters">Three Quarters</option>
      <option value="flex-third">Third</option>
      <option value="flex-two-thirds">Two Thirds</option>
    </select>
  </div>
</div>

## Flex Direction

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-row` | flex-direction | `row` |
| `.flex-row-reverse` | flex-direction | `row-reverse` |
| `.flex-col` | flex-direction | `column` |
| `.flex-col-reverse` | flex-direction | `column-reverse` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex g-5 ${flexDirection} `">
        <div :class="`bordered text-primary-100 border-primary-700 py-5 bg-primary-300 p-5 w-5 `"></div>
        <div :class="`bordered text-secondary-100 border-secondary-700 py-5 bg-secondary-300 p-5 w-5 `"></div>
        <div :class="`bordered text-tertiary-100 border-tertiary-700 py-5 bg-tertiary-300 p-5 w-5 `"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="display-flex {{ flexDirection }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-flex-direction">Flex Direction property</label>
    <select id="select-flex-direction" v-model="flexDirection">
      <option value="flex-row">Row</option>
      <option value="flex-row-reverse">Row Reverse</option>
      <option value="flex-col">Column</option>
      <option value="flex-col-reverse">Column Reverse</option>
    </select>
  </div>
</div>

## Flex Grow

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-grow` | flex-grow | `1` |
| `.flex-no-grow` | flex-grow | `0` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex g-5 `">
        <div :class="`bordered text-tertiary-100 border-tertiary-700 py-5 bg-tertiary-300 p-5 w-quarter ${flexGrow} `"></div>
        <div :class="`bordered text-primary-100 border-primary-700 py-5 bg-primary-300 p-5 w-quarter `"></div>
        <div :class="`bordered text-primary-100 border-primary-700 py-5 bg-primary-300 p-5 w-quarter `"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ flexGrow }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-flex-grow">Flex Grow property</label>
    <select id="select-flex-grow" v-model="flexGrow">
      <option value="flex-grow">Grow</option>
      <option value="flex-no-grow">No Grow</option>
    </select>
  </div>
</div>

## Flex Shrink

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-shrink` | flex-shrink | `1` |
| `.flex-no-shrink` | flex-shrink | `0` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex g-5 `">
        <div :class="`bordered text-tertiary-100 border-tertiary-700 py-5 bg-tertiary-300 p-5 w-half ${flexShrink} `"></div>
        <div :class="`bordered text-primary-100 border-primary-700 py-5 bg-primary-300 p-5 w-half `"></div>
        <div :class="`bordered text-primary-100 border-primary-700 py-5 bg-primary-300 p-5 w-half `"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ flexShrink }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-flex-shrink">Flex Shrink property</label>
    <select id="select-flex-shrink" v-model="flexShrink">
      <option value="flex-shrink">Shrink</option>
      <option value="flex-no-shrink">No Shrink</option>
    </select>
  </div>
</div>

## Flex Wrap

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-wrap` | flex-wrap | `wrap` |
| `.flex-wrap-reverse` | flex-wrap | `wrap-reverse` |
| `.flex-nowrap` | flex-wrap | `nowrap` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div :class="`display-flex g-5 ${flexWrap} `">
        <div :class="`bordered text-tertiary-100 border-tertiary-700 py-5 bg-tertiary-300 p-5 w-third `"></div>
        <div :class="`bordered text-secondary-100 border-secondary-700 py-5 bg-secondary-300 p-5 w-half `"></div>
        <div :class="`bordered text-primary-100 border-primary-700 py-5 bg-primary-300 p-5 w-half `"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ flexWrap }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-flex-wrap">Flex Wrap property</label>
    <select id="select-flex-wrap" v-model="flexWrap">
      <option value="flex-wrap">Wrap</option>
      <option value="flex-wrap-reverse">Wrap Reverse</option>
      <option value="flex-no-wrap">No Wrap</option>
    </select>
  </div>
</div>

## Customization

To customize the flex utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for flex.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
