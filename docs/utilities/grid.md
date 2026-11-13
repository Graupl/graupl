<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const columnStart = ref("column-start-1");
  const columnEnd = ref("column-end-4");
  const rowStart = ref("row-start-1");
  const rowEnd = ref("row-end-4");
  const columns = ref("grid-cols-3");
  const rows = ref("grid-rows-3");
  const columnSpanClass = ref("col-span-3");
  const rowSpanClass = ref("row-span-3");
  const frame = "display-grid g-2 bordered border-dashed border-tertiary-700";
  const block = "bordered border-primary-700 bg-primary-300 text-primary-900 min-h-7";
  const highlight = "bordered border-tertiary-700 bg-tertiary-300 text-tertiary-900 min-h-7";

  function renderGrid(classes, itemClass = "", highlightFirst = false) {
    const blocks = Array.from({ length: 12 }, (_, index) => {
      const style = index === 0 && highlightFirst ? `${highlight} ${itemClass}` : block;

      return `  <div class="${style}">${index + 1}</div>`;
    }).join("\n");

    return `<div class="${frame} ${classes}">
${blocks}
</div>`;
  }

  function renderTrackGrid(axis, className) {
    const columns = axis === "cols";
    const classes = columns ? className : `grid-cols-3 ${className}`;
    const grid = renderGrid(classes);

    if (className !== `grid-${axis}-subgrid`) {
      return grid;
    }

    const parentTracks = columns ? "grid-cols-3" : "grid-rows-4";
    const span = columns ? "col-span-full" : "row-span-full";
    const subgrid = renderGrid(`${classes} ${span}`).replaceAll("\n", "\n  ");

    return `<div class="display-grid ${parentTracks}">
  ${subgrid}
</div>`;
  }

  const columnPlacement = computed(() => renderGrid("grid-cols-12", `${columnStart.value} ${columnEnd.value}`, true));
  const rowPlacement = computed(() => renderGrid("grid-cols-3 grid-rows-12", `${rowStart.value} ${rowEnd.value}`, true));
  const exampleColumns = computed(() => renderTrackGrid("cols", columns.value));
  const exampleRows = computed(() => renderTrackGrid("rows", rows.value));
  const columnSpan = computed(() => renderGrid("grid-cols-12", columnSpanClass.value, true));
  const rowSpan = computed(() => renderGrid("grid-cols-3 grid-rows-12", rowSpanClass.value, true));
</script>

# Grid Utilities

The grid utilities provide classes for setting up CSS Grid tracks and placing items on them. Use `.display-grid` on the container, then set its rows and columns or place individual items. Use the [Columns layout](../layout/column.md) when you want the column count to adjust automatically.

## Grid Columns

Use column start and end classes on an item to place it between column lines.

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

<live-example :source-code="columnPlacement" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="grid-example-columnStart">Column start class</label>
      <select id="grid-example-columnStart" v-model="columnStart">
        <option value="column-start-first">.column-start-first</option>
        <option value="column-start-last">.column-start-last</option>
        <option value="column-start-auto">.column-start-auto</option>
        <option value="column-start-1">.column-start-1</option>
        <option value="column-start-2">.column-start-2</option>
        <option value="column-start-3">.column-start-3</option>
        <option value="column-start-4">.column-start-4</option>
        <option value="column-start-5">.column-start-5</option>
        <option value="column-start-6">.column-start-6</option>
        <option value="column-start-7">.column-start-7</option>
        <option value="column-start-8">.column-start-8</option>
        <option value="column-start-9">.column-start-9</option>
        <option value="column-start-10">.column-start-10</option>
        <option value="column-start-11">.column-start-11</option>
        <option value="column-start-12">.column-start-12</option>
      </select>
    </div>
    <div class="input-group">
      <label for="grid-example-columnEnd">Column end class</label>
      <select id="grid-example-columnEnd" v-model="columnEnd">
        <option value="column-end-first">.column-end-first</option>
        <option value="column-end-last">.column-end-last</option>
        <option value="column-end-auto">.column-end-auto</option>
        <option value="column-end-1">.column-end-1</option>
        <option value="column-end-2">.column-end-2</option>
        <option value="column-end-3">.column-end-3</option>
        <option value="column-end-4">.column-end-4</option>
        <option value="column-end-5">.column-end-5</option>
        <option value="column-end-6">.column-end-6</option>
        <option value="column-end-7">.column-end-7</option>
        <option value="column-end-8">.column-end-8</option>
        <option value="column-end-9">.column-end-9</option>
        <option value="column-end-10">.column-end-10</option>
        <option value="column-end-11">.column-end-11</option>
        <option value="column-end-12">.column-end-12</option>
      </select>
    </div>
  </template>
</live-example>

## Grid Rows

Use row start and end classes on an item to place it between row lines.

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

<live-example :source-code="rowPlacement" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="grid-example-rowStart">Row start class</label>
      <select id="grid-example-rowStart" v-model="rowStart">
        <option value="row-start-first">.row-start-first</option>
        <option value="row-start-last">.row-start-last</option>
        <option value="row-start-auto">.row-start-auto</option>
        <option value="row-start-1">.row-start-1</option>
        <option value="row-start-2">.row-start-2</option>
        <option value="row-start-3">.row-start-3</option>
        <option value="row-start-4">.row-start-4</option>
        <option value="row-start-5">.row-start-5</option>
        <option value="row-start-6">.row-start-6</option>
        <option value="row-start-7">.row-start-7</option>
        <option value="row-start-8">.row-start-8</option>
        <option value="row-start-9">.row-start-9</option>
        <option value="row-start-10">.row-start-10</option>
        <option value="row-start-11">.row-start-11</option>
        <option value="row-start-12">.row-start-12</option>
      </select>
    </div>
    <div class="input-group">
      <label for="grid-example-rowEnd">Row end class</label>
      <select id="grid-example-rowEnd" v-model="rowEnd">
        <option value="row-end-first">.row-end-first</option>
        <option value="row-end-last">.row-end-last</option>
        <option value="row-end-auto">.row-end-auto</option>
        <option value="row-end-1">.row-end-1</option>
        <option value="row-end-2">.row-end-2</option>
        <option value="row-end-3">.row-end-3</option>
        <option value="row-end-4">.row-end-4</option>
        <option value="row-end-5">.row-end-5</option>
        <option value="row-end-6">.row-end-6</option>
        <option value="row-end-7">.row-end-7</option>
        <option value="row-end-8">.row-end-8</option>
        <option value="row-end-9">.row-end-9</option>
        <option value="row-end-10">.row-end-10</option>
        <option value="row-end-11">.row-end-11</option>
        <option value="row-end-12">.row-end-12</option>
      </select>
    </div>
  </template>
</live-example>

## Grid Template Columns

Set the number of equal-width columns on the grid container. Use `.grid-cols-subgrid` to follow the parent grid’s column tracks.

| Class Name | Property | Value |
| --- | --- | --- |
| `.grid-cols-auto` | `grid-template-columns` | `auto` |
| `.grid-cols-subgrid` | `grid-template-columns` | `subgrid` |
| `.grid-cols-1` | `grid-template-columns` | `repeat(1, minmax(0, 1fr))` |
| `.grid-cols-2` | `grid-template-columns` | `repeat(2, minmax(0, 1fr))` |
| `.grid-cols-3` | `grid-template-columns` | `repeat(3, minmax(0, 1fr))` |
| `.grid-cols-4` | `grid-template-columns` | `repeat(4, minmax(0, 1fr))` |
| `.grid-cols-5` | `grid-template-columns` | `repeat(5, minmax(0, 1fr))` |
| `.grid-cols-6` | `grid-template-columns` | `repeat(6, minmax(0, 1fr))` |
| `.grid-cols-7` | `grid-template-columns` | `repeat(7, minmax(0, 1fr))` |
| `.grid-cols-8` | `grid-template-columns` | `repeat(8, minmax(0, 1fr))` |
| `.grid-cols-9` | `grid-template-columns` | `repeat(9, minmax(0, 1fr))` |
| `.grid-cols-10` | `grid-template-columns` | `repeat(10, minmax(0, 1fr))` |
| `.grid-cols-11` | `grid-template-columns` | `repeat(11, minmax(0, 1fr))` |
| `.grid-cols-12` | `grid-template-columns` | `repeat(12, minmax(0, 1fr))` |

<live-example :source-code="exampleColumns" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="grid-example-columns">Column tracks class</label>
      <select id="grid-example-columns" v-model="columns">
        <option value="grid-cols-auto">.grid-cols-auto</option>
        <option value="grid-cols-subgrid">.grid-cols-subgrid</option>
        <option value="grid-cols-1">.grid-cols-1</option>
        <option value="grid-cols-2">.grid-cols-2</option>
        <option value="grid-cols-3">.grid-cols-3</option>
        <option value="grid-cols-4">.grid-cols-4</option>
        <option value="grid-cols-5">.grid-cols-5</option>
        <option value="grid-cols-6">.grid-cols-6</option>
        <option value="grid-cols-7">.grid-cols-7</option>
        <option value="grid-cols-8">.grid-cols-8</option>
        <option value="grid-cols-9">.grid-cols-9</option>
        <option value="grid-cols-10">.grid-cols-10</option>
        <option value="grid-cols-11">.grid-cols-11</option>
        <option value="grid-cols-12">.grid-cols-12</option>
      </select>
    </div>
  </template>
</live-example>

## Grid Template Rows

Set the number of equal-sized rows on the grid container. Use `.grid-rows-subgrid` to follow the parent grid’s row tracks.

| Class Name | Property | Value |
| --- | --- | --- |
| `.grid-rows-auto` | `grid-template-rows` | `auto` |
| `.grid-rows-subgrid` | `grid-template-rows` | `subgrid` |
| `.grid-rows-1` | `grid-template-rows` | `repeat(1, minmax(0, 1fr))` |
| `.grid-rows-2` | `grid-template-rows` | `repeat(2, minmax(0, 1fr))` |
| `.grid-rows-3` | `grid-template-rows` | `repeat(3, minmax(0, 1fr))` |
| `.grid-rows-4` | `grid-template-rows` | `repeat(4, minmax(0, 1fr))` |
| `.grid-rows-5` | `grid-template-rows` | `repeat(5, minmax(0, 1fr))` |
| `.grid-rows-6` | `grid-template-rows` | `repeat(6, minmax(0, 1fr))` |
| `.grid-rows-7` | `grid-template-rows` | `repeat(7, minmax(0, 1fr))` |
| `.grid-rows-8` | `grid-template-rows` | `repeat(8, minmax(0, 1fr))` |
| `.grid-rows-9` | `grid-template-rows` | `repeat(9, minmax(0, 1fr))` |
| `.grid-rows-10` | `grid-template-rows` | `repeat(10, minmax(0, 1fr))` |
| `.grid-rows-11` | `grid-template-rows` | `repeat(11, minmax(0, 1fr))` |
| `.grid-rows-12` | `grid-template-rows` | `repeat(12, minmax(0, 1fr))` |

<live-example :source-code="exampleRows" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="grid-example-rows">Row tracks class</label>
      <select id="grid-example-rows" v-model="rows">
        <option value="grid-rows-auto">.grid-rows-auto</option>
        <option value="grid-rows-subgrid">.grid-rows-subgrid</option>
        <option value="grid-rows-1">.grid-rows-1</option>
        <option value="grid-rows-2">.grid-rows-2</option>
        <option value="grid-rows-3">.grid-rows-3</option>
        <option value="grid-rows-4">.grid-rows-4</option>
        <option value="grid-rows-5">.grid-rows-5</option>
        <option value="grid-rows-6">.grid-rows-6</option>
        <option value="grid-rows-7">.grid-rows-7</option>
        <option value="grid-rows-8">.grid-rows-8</option>
        <option value="grid-rows-9">.grid-rows-9</option>
        <option value="grid-rows-10">.grid-rows-10</option>
        <option value="grid-rows-11">.grid-rows-11</option>
        <option value="grid-rows-12">.grid-rows-12</option>
      </select>
    </div>
  </template>
</live-example>

## Column Span

Use column span classes on an item to set how many columns it covers. The full span runs from the first to the last explicit column line.

| Class Name       | Property      | Value     |
| ---------------- | ------------- | --------- |
| `.col-span-auto` | `grid-column` | `auto`    |
| `.col-span-full` | `grid-column` | `1 / -1`  |
| `.col-span-1`    | `grid-column` | `span 1`  |
| `.col-span-2`    | `grid-column` | `span 2`  |
| `.col-span-3`    | `grid-column` | `span 3`  |
| `.col-span-4`    | `grid-column` | `span 4`  |
| `.col-span-5`    | `grid-column` | `span 5`  |
| `.col-span-6`    | `grid-column` | `span 6`  |
| `.col-span-7`    | `grid-column` | `span 7`  |
| `.col-span-8`    | `grid-column` | `span 8`  |
| `.col-span-9`    | `grid-column` | `span 9`  |
| `.col-span-10`   | `grid-column` | `span 10` |
| `.col-span-11`   | `grid-column` | `span 11` |
| `.col-span-12`   | `grid-column` | `span 12` |

<live-example :source-code="columnSpan" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="grid-example-columnSpan">Column span class</label>
      <select id="grid-example-columnSpan" v-model="columnSpanClass">
        <option value="col-span-auto">.col-span-auto</option>
        <option value="col-span-full">.col-span-full</option>
        <option value="col-span-1">.col-span-1</option>
        <option value="col-span-2">.col-span-2</option>
        <option value="col-span-3">.col-span-3</option>
        <option value="col-span-4">.col-span-4</option>
        <option value="col-span-5">.col-span-5</option>
        <option value="col-span-6">.col-span-6</option>
        <option value="col-span-7">.col-span-7</option>
        <option value="col-span-8">.col-span-8</option>
        <option value="col-span-9">.col-span-9</option>
        <option value="col-span-10">.col-span-10</option>
        <option value="col-span-11">.col-span-11</option>
        <option value="col-span-12">.col-span-12</option>
      </select>
    </div>
  </template>
</live-example>

## Row Span

Use row span classes on an item to set how many rows it covers. The full span runs from the first to the last explicit row line.

| Class Name       | Property   | Value     |
| ---------------- | ---------- | --------- |
| `.row-span-auto` | `grid-row` | `auto`    |
| `.row-span-full` | `grid-row` | `1 / -1`  |
| `.row-span-1`    | `grid-row` | `span 1`  |
| `.row-span-2`    | `grid-row` | `span 2`  |
| `.row-span-3`    | `grid-row` | `span 3`  |
| `.row-span-4`    | `grid-row` | `span 4`  |
| `.row-span-5`    | `grid-row` | `span 5`  |
| `.row-span-6`    | `grid-row` | `span 6`  |
| `.row-span-7`    | `grid-row` | `span 7`  |
| `.row-span-8`    | `grid-row` | `span 8`  |
| `.row-span-9`    | `grid-row` | `span 9`  |
| `.row-span-10`   | `grid-row` | `span 10` |
| `.row-span-11`   | `grid-row` | `span 11` |
| `.row-span-12`   | `grid-row` | `span 12` |

<live-example :source-code="rowSpan" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="grid-example-rowSpan">Row span class</label>
      <select id="grid-example-rowSpan" v-model="rowSpanClass">
        <option value="row-span-auto">.row-span-auto</option>
        <option value="row-span-full">.row-span-full</option>
        <option value="row-span-1">.row-span-1</option>
        <option value="row-span-2">.row-span-2</option>
        <option value="row-span-3">.row-span-3</option>
        <option value="row-span-4">.row-span-4</option>
        <option value="row-span-5">.row-span-5</option>
        <option value="row-span-6">.row-span-6</option>
        <option value="row-span-7">.row-span-7</option>
        <option value="row-span-8">.row-span-8</option>
        <option value="row-span-9">.row-span-9</option>
        <option value="row-span-10">.row-span-10</option>
        <option value="row-span-11">.row-span-11</option>
        <option value="row-span-12">.row-span-12</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/grid.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/grid.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/grid.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the grid utilities.

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
| `$grid-column-min-count` | The minimum column count for generated utilities. | `1` |
| `$grid-column-max-count` | The maximum column count for generated utilities. | `12` |
| `$grid-row-min-count` | The minimum row count for generated utilities. | `1` |
| `$grid-row-max-count` | The maximum row count for generated utilities. | `12` |

## Responsive Variants

No responsive classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
