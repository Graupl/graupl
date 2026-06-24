<script setup>
  import { ref } from "vue";

  const gridColumn = ref("column-start-first");
  const gridRow = ref("row-start-first");
  const gridTemplateColumns = ref("grid-cols-auto");
  const gridTemplateRows = ref("grid-rows-auto");
</script>

# Grid Utilities

The grid utilities provide a set of classes to adjust the `grid-column`, `grid-row`, `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`, `grid-template-columns`, and `grid-template-rows` properties of elements.

## Grid Columns

| Class Name | Property | Value |
| --- | --- | --- |
| `.column-start-first` | `grid-column-start` | `1` |
| `.column-start-last` | `grid-column-start` | `-1` |
| `.column-start-auto` | `grid-column-start` | `auto` |
| `.column-start-1` | `grid-column-start` | `1` |
| `.column-start-2` | `grid-column-start` | `2` |
| `.column-start-3` | `grid-column-start` | `3` |
| `.column-start-4` | `grid-column-start` | `4` |
| `.column-start-5` | `grid-column-start` | `5` |
| `.column-start-6` | `grid-column-start` | `6` |
| `.column-start-7` | `grid-column-start` | `7` |
| `.column-start-8` | `grid-column-start` | `8` |
| `.column-start-9` | `grid-column-start` | `9` |
| `.column-start-10` | `grid-column-start` | `10` |
| `.column-start-11` | `grid-column-start` | `11` |
| `.column-start-12` | `grid-column-start` | `12` |
| `.column-end-first` | `grid-column-end` | `1` |
| `.column-end-last` | `grid-column-end` | `-1` |
| `.column-end-auto` | `grid-column-end` | `auto` |
| `.column-end-1` | `grid-column-end` | `1` |
| `.column-end-2` | `grid-column-end` | `2` |
| `.column-end-3` | `grid-column-end` | `3` |
| `.column-end-4` | `grid-column-end` | `4` |
| `.column-end-5` | `grid-column-end` | `5` |
| `.column-end-6` | `grid-column-end` | `6` |
| `.column-end-7` | `grid-column-end` | `7` |
| `.column-end-8` | `grid-column-end` | `8` |
| `.column-end-9` | `grid-column-end` | `9` |
| `.column-end-10` | `grid-column-end` | `10` |
| `.column-end-11` | `grid-column-end` | `11` |
| `.column-end-12` | `grid-column-end` | `12` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class=" display-grid g-3 bg-primary-200 " style="grid-template-columns: repeat(12, minmax(0,1fr)); grid-template-rows: repeat(auto-fill, auto);">
        <div :class="`bordered border-tertiary-700 bg-tertiary-300 p-5 ${gridColumn} `"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="` bordered border-secondary-700 bg-secondary-300 p-5 ${gridColumn} `"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gridColumn }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-grid-columns">Grid Columns property</label>
    <select id="select-grid-columns" v-model="gridColumn">
      <option value="column-start-first">Start First</option>
      <option value="column-start-last">Start Last</option>
      <option value="column-start-auto">Start Auto</option>
      <option value="column-start-1">Start 1</option>
      <option value="column-start-2">Start 2</option>
      <option value="column-start-3">Start 3</option>
      <option value="column-start-4">Start 4</option>
      <option value="column-start-5">Start 5</option>
      <option value="column-start-6">Start 6</option>
      <option value="column-start-7">Start 7</option>
      <option value="column-start-8">Start 8</option>
      <option value="column-start-9">Start 9</option>
      <option value="column-start-10">Start 10</option>
      <option value="column-start-11">Start 11</option>
      <option value="column-start-12">Start 12</option>
      <option value="column-end-first">End First</option>
      <option value="column-end-last">End Last</option>
      <option value="column-end-auto">End Auto</option>
      <option value="column-end-1">End 1</option>
      <option value="column-end-2">End 2</option>
      <option value="column-end-3">End 3</option>
      <option value="column-end-4">End 4</option>
      <option value="column-end-5">End 5</option>
      <option value="column-end-6">End 6</option>
      <option value="column-end-7">End 7</option>
      <option value="column-end-8">End 8</option>
      <option value="column-end-9">End 9</option>
      <option value="column-end-10">End 10</option>
      <option value="column-end-11">End 11</option>
      <option value="column-end-12">End 12</option>
    </select>
  </div>
</div>

## Grid Rows

| Class Name | Property | Value |
| --- | --- | --- |
| `.row-start-first` | `grid-row-start` | `1` |
| `.row-start-last` | `grid-row-start` | `-1` |
| `.row-start-auto` | `grid-row-start` | `auto` |
| `.row-start-1` | `grid-row-start` | `1` |
| `.row-start-2` | `grid-row-start` | `2` |
| `.row-start-3` | `grid-row-start` | `3` |
| `.row-start-4` | `grid-row-start` | `4` |
| `.row-start-5` | `grid-row-start` | `5` |
| `.row-start-6` | `grid-row-start` | `6` |
| `.row-start-7` | `grid-row-start` | `7` |
| `.row-start-8` | `grid-row-start` | `8` |
| `.row-start-9` | `grid-row-start` | `9` |
| `.row-start-10` | `grid-row-start` | `10` |
| `.row-start-11` | `grid-row-start` | `11` |
| `.row-start-12` | `grid-row-start` | `12` |
| `.row-end-first` | `grid-row-end` | `1` |
| `.row-end-last` | `grid-row-end` | `-1` |
| `.row-end-auto` | `grid-row-end` | `auto` |
| `.row-end-1` | `grid-row-end` | `1` |
| `.row-end-2` | `grid-row-end` | `2` |
| `.row-end-3` | `grid-row-end` | `3` |
| `.row-end-4` | `grid-row-end` | `4` |
| `.row-end-5` | `grid-row-end` | `5` |
| `.row-end-6` | `grid-row-end` | `6` |
| `.row-end-7` | `grid-row-end` | `7` |
| `.row-end-8` | `grid-row-end` | `8` |
| `.row-end-9` | `grid-row-end` | `9` |
| `.row-end-10` | `grid-row-end` | `10` |
| `.row-end-11` | `grid-row-end` | `11` |
| `.row-end-12` | `grid-row-end` | `12` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div class=" display-grid g-3 bg-primary-200 " style="grid-template-columns: repeat(12, minmax(0,1fr)); grid-template-rows: repeat(auto-fill, auto);">
        <div :class="`bordered border-tertiary-700 bg-tertiary-300 p-5 ${gridRow} `"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="` bordered border-secondary-700 bg-secondary-300 p-5 ${gridRow} `"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gridRow }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-grid-rows">Grid Rows property</label>
    <select id="select-grid-rows" v-model="gridRow">
      <option value="row-start-first">Start First</option>
      <option value="row-start-last">Start Last</option>
      <option value="row-start-auto">Start Auto</option>
      <option value="row-start-1">Start 1</option>
      <option value="row-start-2">Start 2</option>
      <option value="row-start-3">Start 3</option>
      <option value="row-start-4">Start 4</option>
      <option value="row-start-5">Start 5</option>
      <option value="row-start-6">Start 6</option>
      <option value="row-start-7">Start 7</option>
      <option value="row-start-8">Start 8</option>
      <option value="row-start-9">Start 9</option>
      <option value="row-start-10">Start 10</option>
      <option value="row-start-11">Start 11</option>
      <option value="row-start-12">Start 12</option>
      <option value="row-end-first">End First</option>
      <option value="row-end-last">End Last</option>
      <option value="row-end-auto">End Auto</option>
      <option value="row-end-1">End 1</option>
      <option value="row-end-2">End 2</option>
      <option value="row-end-3">End 3</option>
      <option value="row-end-4">End 4</option>
      <option value="row-end-5">End 5</option>
      <option value="row-end-6">End 6</option>
      <option value="row-end-7">End 7</option>
      <option value="row-end-8">End 8</option>
      <option value="row-end-9">End 9</option>
      <option value="row-end-10">End 10</option>
      <option value="row-end-11">End 11</option>
      <option value="row-end-12">End 12</option>
    </select>
  </div>
</div>

## Grid Template Columns

| Class Name | Property | Value |
| --- | --- | --- |
| `.grid-cols-auto` | `grid-template-columns` | `auto` |
| `.grid-cols-subgrid` | `grid-template-columns` | `subgrid` |
| `.grid-cols-1` | `grid-template-columns` | `1` |
| `.grid-cols-2` | `grid-template-columns` | `2` |
| `.grid-cols-3` | `grid-template-columns` | `3` |
| `.grid-cols-4` | `grid-template-columns` | `4` |
| `.grid-cols-5` | `grid-template-columns` | `5` |
| `.grid-cols-6` | `grid-template-columns` | `6` |
| `.grid-cols-7` | `grid-template-columns` | `7` |
| `.grid-cols-8` | `grid-template-columns` | `8` |
| `.grid-cols-9` | `grid-template-columns` | `9` |
| `.grid-cols-10` | `grid-template-columns` | `10` |
| `.grid-cols-11` | `grid-template-columns` | `11` |
| `.grid-cols-12` | `grid-template-columns` | `12` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="` display-grid g-3 bg-primary-200  ${gridTemplateColumns} `" style="grid-template-rows: repeat(auto-fill, auto);">
        <div :class="`bordered border-tertiary-700 bg-tertiary-300 p-5 `"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="` bordered border-secondary-700 bg-secondary-300 p-5 `"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gridTemplateColumns }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-grid-template-columns">Grid Template Columns property</label>
    <select id="select-grid-template-columns" v-model="gridTemplateColumns">
      <option value="grid-cols-auto">Auto</option>
      <option value="grid-cols-first">Subgrid</option>
      <option value="grid-cols-1">1 Column</option>
      <option value="grid-cols-2">2 Columns</option>
      <option value="grid-cols-3">3 Columns</option>
      <option value="grid-cols-4">4 Columns</option>
      <option value="grid-cols-5">5 Columns</option>
      <option value="grid-cols-6">6 Columns</option>
      <option value="grid-cols-7">7 Columns</option>
      <option value="grid-cols-8">8 Columns</option>
      <option value="grid-cols-9">9 Columns</option>
      <option value="grid-cols-10">10 Columns</option>
      <option value="grid-cols-11">11 Columns</option>
      <option value="grid-cols-12">12 Columns</option>
    </select>
  </div>
</div>

## Grid Template Rows

| Class Name | Property | Value |
| --- | --- | --- |
| `.grid-rows-auto` | `grid-template-rows` | `auto` |
| `.grid-rows-subgrid` | `grid-template-rows` | `subgrid` |
| `.grid-rows-1` | `grid-template-rows` | `1` |
| `.grid-rows-2` | `grid-template-rows` | `2` |
| `.grid-rows-3` | `grid-template-rows` | `3` |
| `.grid-rows-4` | `grid-template-rows` | `4` |
| `.grid-rows-5` | `grid-template-rows` | `5` |
| `.grid-rows-6` | `grid-template-rows` | `6` |
| `.grid-rows-7` | `grid-template-rows` | `7` |
| `.grid-rows-8` | `grid-template-rows` | `8` |
| `.grid-rows-9` | `grid-template-rows` | `9` |
| `.grid-rows-10` | `grid-template-rows` | `10` |
| `.grid-rows-11` | `grid-template-rows` | `11` |
| `.grid-rows-12` | `grid-template-rows` | `12` |

<div class="example">
  <div class="example-container">
    <div class="example-display">
      <div :class="` display-grid g-3 bg-primary-200 ${gridTemplateRows} `" style="grid-template-columns: repeat(12, auto);">
        <div :class="`bordered border-tertiary-700 bg-tertiary-300 p-5 `"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div :class="` bordered border-secondary-700 bg-secondary-300 p-5 `"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
        <div class="bordered border-primary-700 bg-primary-300 p-5"></div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ gridTemplateRows }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-grid-template-rows">Grid Template Rows property</label>
    <select id="select-grid-template-rows" v-model="gridTemplateRows">
      <option value="grid-rows-auto">Auto</option>
      <option value="grid-rows-first">Subgrid</option>
      <option value="grid-rows-1">1 Row</option>
      <option value="grid-rows-2">2 Rows</option>
      <option value="grid-rows-3">3 Rows</option>
      <option value="grid-rows-4">4 Rows</option>
      <option value="grid-rows-5">5 Rows</option>
      <option value="grid-rows-6">6 Rows</option>
      <option value="grid-rows-7">7 Rows</option>
      <option value="grid-rows-8">8 Rows</option>
      <option value="grid-rows-9">9 Rows</option>
      <option value="grid-rows-10">10 Rows</option>
      <option value="grid-rows-11">11 Rows</option>
      <option value="grid-rows-12">12 Rows</option>
    </select>
  </div>
</div>

# Column Span

| Class Name | Property | Value |
| --- | --- | --- |
| `.col-span-auto` | `grid-column` | `span auto` |
| `.col-span-full` | `grid-column` | `1 / -1` |
| `.col-span-1` | `grid-column` | `span 1` |
| `.col-span-2` | `grid-column` | `span 2` |
| `.col-span-3` | `grid-column` | `span 3` |
| `.col-span-4` | `grid-column` | `span 4` |
| `.col-span-5` | `grid-column` | `span 5` |
| `.col-span-6` | `grid-column` | `span 6` |
| `.col-span-7` | `grid-column` | `span 7` |
| `.col-span-8` | `grid-column` | `span 8` |
| `.col-span-9` | `grid-column` | `span 9` |
| `.col-span-10` | `grid-column` | `span 10` |
| `.col-span-11` | `grid-column` | `span 11` |
| `.col-span-12` | `grid-column` | `span 12` |

## Row Span

| Class Name | Property | Value |
| --- | --- | --- |
| `.row-span-auto` | `grid-row` | `span auto` |
| `.row-span-full` | `grid-row` | `1 / -1` |
| `.row-span-1` | `grid-row` | `span 1` |
| `.row-span-2` | `grid-row` | `span 2` |
| `.row-span-3` | `grid-row` | `span 3` |
| `.row-span-4` | `grid-row` | `span 4` |
| `.row-span-5` | `grid-row` | `span 5` |
| `.row-span-6` | `grid-row` | `span 6` |
| `.row-span-7` | `grid-row` | `span 7` |
| `.row-span-8` | `grid-row` | `span 8` |
| `.row-span-9` | `grid-row` | `span 9` |
| `.row-span-10` | `grid-row` | `span 10` |
| `.row-span-11` | `grid-row` | `span 11` |
| `.row-span-12` | `grid-row` | `span 12` |

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
| `$grid-column-min-count` | The minimum column count for generated utilities. | `1` |
| `$grid-column-max-count` | The maximum column count for generated utilities. | `12` |
| `$grid-row-min-count` | The minimum row count for generated utilities. | `1` |
| `$grid-row-max-count` | The maximum row count for generated utilities. | `12` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for grid.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
