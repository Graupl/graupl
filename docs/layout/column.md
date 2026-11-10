<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const count = ref(4);
  const fixed = ref(false);
  const span = ref(2);
  const spanColumnCount = ref(12);
  const countItems = ref(3);
  const spanItems = ref(4);
  const responsiveItems = ref(4);

  function columnsExample(classes, itemCount, firstSpan = null) {
    const items = Array.from({ length: itemCount }, (_, index) => {
      const spanClass = index === 0 && firstSpan !== null ? `span-${firstSpan} ` : "";
      return `  <div class="${spanClass}bg-primary-700 text-primary-100 p-1">${index + 1}</div>`;
    }).join("\n");

    return `<div class="${classes}" style="--graupl-columns-content-max-width: 100%">
${items}
</div>`;
  }

  const exampleColumns = columnsExample("columns", 3);
  const exampleCount = computed(() =>
    columnsExample(`columns count-${count.value}${fixed.value ? " fixed" : ""}`, countItems.value)
  );
  const exampleSpan = computed(() =>
    columnsExample(`columns count-${spanColumnCount.value}`, spanItems.value, span.value)
  );
  const exampleResponsive = computed(() =>
    columnsExample("columns count-2 lg:count-3", responsiveItems.value)
  );
</script>

# Columns

The columns layout provides a set of classes to arrange content in a responsive CSS grid.

## Base class

The `.columns` class puts a container's direct children in a grid with three columns by default. The grid will responsively use fewer columns if there isn't enough room.

<live-example :source-code="exampleColumns" />

::: info Note
Column widths are based on `--graupl-content-max-width` by default. These examples set `--graupl-columns-content-max-width` to `100%` so the column widths adjust to the space available in the preview.
:::

## Column count and width

Use `.count-1` through `.count-12` on the container to set how many columns the grid should fit when there's enough room.

When there are fewer items than columns, the occupied columns stretch to fill the unused space. Add `.fixed` to keep them at their calculated width.

<live-example :source-code="exampleCount" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-columns-count">Column count</label>
      <select id="select-columns-count" v-model.number="count">
        <option v-for="number in 12" :key="number" :value="number">{{ number }}</option>
      </select>
    </div>
    <div class="input-group">
      <label for="select-columns-count-items">Number of items</label>
      <select id="select-columns-count-items" v-model.number="countItems">
        <option v-for="number in 12" :key="number" :value="number">{{ number }}</option>
      </select>
    </div>
    <label><input type="checkbox" v-model="fixed"> Fixed columns</label>
  </template>
</live-example>

## Column spans

Use `.span-1` through `.span-12` on a direct child to set how many columns it spans.

<live-example :source-code="exampleSpan" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-columns-span-count">Column count</label>
      <select id="select-columns-span-count" v-model.number="spanColumnCount">
        <option v-for="number in 12" :key="number" :value="number">{{ number }}</option>
      </select>
    </div>
    <div class="input-group">
      <label for="select-columns-span">First item span</label>
      <select id="select-columns-span" v-model.number="span">
        <option v-for="number in 12" :key="number" :value="number">{{ number }}</option>
      </select>
    </div>
    <div class="input-group">
      <label for="select-columns-span-items">Number of items</label>
      <select id="select-columns-span-items" v-model.number="spanItems">
        <option v-for="number in 12" :key="number" :value="number">{{ number }}</option>
      </select>
    </div>
  </template>
</live-example>

## Responsive variants

A screen-size prefix applies a class at that breakpoint and above. Use prefixed count and fixed classes on the container, such as `md:count-2` or `md:fixed`, and prefixed span classes on the grid item, such as `md:span-2`.

Use `count-2 lg:count-3` to set two columns by default and three from the large screen breakpoint. A grid can still stack on a wide screen because Graupl applies a single-column fallback inside query containers up to 575px wide. A responsive span such as `md:span-2` can override the fallback for that item.

<live-example :source-code="exampleResponsive" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-columns-responsive-items">Number of items</label>
      <select id="select-columns-responsive-items" v-model.number="responsiveItems">
        <option v-for="number in 12" :key="number" :value="number">{{ number }}</option>
      </select>
    </div>
  </template>
</live-example>

See [responsive utility classes](../utilities/responsive-classes.md) for the available prefixes.

## Custom Properties

The following custom properties can be used to customize the columns layout:

| Property                                 | Description                                          | Default Value                                                                                                                                          |
| ---------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--graupl-columns-row-gap`               | The gap between the rows of the columns.             | `var(--graupl-spacer-5)`                                                                                                                               |
| `--graupl-columns-column-gap`            | The gap between the columns of the columns.          | `var(--graupl-spacer-5)`                                                                                                                               |
| `--graupl-columns-count`                 | The target column count used to calculate the minimum column width.                       | `3`                                                                                                                                                    |
| `--graupl-columns-content-max-width`     | The reference width used to calculate the minimum column width. | `var(--graupl-content-max-width)`                                                                                                                      |
| `--graupl-columns-min-width`             | The minimum width of each column.                    | `calc((var(--graupl-columns-content-max-width) - var(--graupl-columns-column-gap) * (var(--graupl-columns-count) - 1)) / var(--graupl-columns-count))` |
| `--graupl-columns-max-width`             | The maximum width of each column.                    | `1fr`                                                                                                                                                  |
| `--graupl-columns-grid-template-columns` | The grid template columns for the columns.           | `repeat(auto-fit, minmax(var(--graupl-columns-min-width), var(--graupl-columns-max-width)))`                                                           |
| `--graupl-columns-span`                  | The number of columns a grid item spans.                             | `1`                                                                                                                                                    |
| `--graupl-columns-background`            | The background of the columns component.             | Unset                                                                                                                                                  |
| `--graupl-columns-color`                 | The text color of the columns component.             | Unset                                                                                                                                                  |

## Sass variables

The following Sass variables can be used to customize the generation of the columns layout:

| Variable                                      | Description                                                            | Default Value    |
| --------------------------------------------- | ---------------------------------------------------------------------- | ---------------- |
| `$selector-base`                              | The base selector for the component.                                   | `"."`            |
| `$modifier-selector-base`                     | The base selector for component modifiers.                             | `"."`            |
| `$generate-base-theme-map`                    | Flag to generate the base theme map.                                   | `true`           |
| `$themeable`                                  | Flag to generate theme modifiers.                                      | `false`          |
| `$screen-aware`                               | Enables screen-aware column variants.                                  | `true`           |
| `$theme-aware`                                | Enables theme-aware column variants.                                   | `false`          |
| `$scheme-aware`                               | Enables scheme-aware column variants.                                  | `false`          |
| `$state-aware`                                | Enables state-aware column variants.                                   | `false`          |
| `$container-aware`                            | Allows container-aware variants when enabled globally.                               | `true`           |
| `$force-single-columns`                       | Enables a single column in narrow query containers.           | `true`           |
| `$columns-selector-base`                      | The base selector for the columns component.                           | `"."`            |
| `$columns-selector`                           | The selector for the columns component.                                | `"columns"`      |
| `$columns-theme-selector-base`                | The selector base for columns theme modifiers.                         | `"."`            |
| `$columns-theme-selector-prefix`              | The columns theme modifier selector prefix.                            | `""`             |
| `$columns-count-selector-base`                | The base selector for the count class.                                 | `"."`            |
| `$columns-count-selector-prefix`              | The prefix for the count class.                                        | `"count-"`       |
| `$columns-span-selector-base`                 | The base selector for the span class.                                  | `"."`            |
| `$columns-span-selector-prefix`               | The prefix for the span class.                                         | `"span-"`        |
| `$columns-fixed-selector-base`                | The base selector for the fixed class.                                 | `"."`            |
| `$columns-fixed-selector`                     | The selector for the fixed class.                                      | `"fixed"`        |
| `$columns-screen-aware-selector-prefix`       | Prefix to the screen-aware portion of column selectors.                | `""`             |
| `$columns-screen-aware-selector-suffix`       | Suffix to the screen-aware portion of column selectors.                | `""`             |
| `$columns-screen-aware-selector-separator`    | Separator inserted for screen-aware column selectors.                  | `"\\:"`          |
| `$columns-theme-aware-selector-prefix`        | Prefix to the theme-aware portion of column selectors.                 | `""`             |
| `$columns-theme-aware-selector-suffix`        | Suffix to the theme-aware portion of column selectors.                 | `"-theme"`       |
| `$columns-theme-aware-selector-separator`     | Separator inserted for theme-aware column selectors.                   | `"\\:"`          |
| `$columns-scheme-aware-selector-prefix`       | Prefix to the scheme-aware portion of column selectors.                | `""`             |
| `$columns-scheme-aware-selector-suffix`       | Suffix to the scheme-aware portion of column selectors.                | `"-mode"`        |
| `$columns-scheme-aware-selector-separator`    | Separator inserted for scheme-aware column selectors.                  | `"\\:"`          |
| `$columns-state-aware-selector-prefix`        | Prefix to the state-aware portion of column selectors.                 | `""`             |
| `$columns-state-aware-selector-suffix`        | Suffix to the state-aware portion of column selectors.                 | `""`             |
| `$columns-state-aware-selector-separator`     | Separator inserted for state-aware column selectors.                   | `"\\:"`          |
| `$columns-container-aware-selector-prefix`    | Prefix to the container-aware portion of column selectors.             | `"cq\\:"`        |
| `$columns-container-aware-selector-suffix`    | Suffix to the container-aware portion of column selectors.             | `""`             |
| `$columns-container-aware-selector-separator` | Separator inserted for container-aware column selectors.               | `"\\:"`          |
| `$columns-max-width`                          | The maximum width of each column.                                      | `1fr`            |
| `$columns-count`                              | The default number of columns.                                         | `3`              |
| `$columns-min-count`                          | The minimum number of columns used to generate `.count-#` classes.     | `1`              |
| `$columns-max-count`                          | The maximum number of columns used to generate `.count-#` classes.     | `12`             |
| `$columns-span`                               | The default span of each column.                                       | `1`              |
| `$columns-theme-mappings`                     | Map of properties/shades for columns themes.                           | `()`             |
| `$columns-theme-map`                          | Expanded map of properties/colors/shades.                              | `()`             |
