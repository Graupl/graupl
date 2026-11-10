<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const variant = ref("default");
  const modifiers = ref([]);

  function questTable(classes = "", highlight = false) {
    return `<table${classes ? ` class="${classes}"` : ""}>
  <caption>Guild supply list</caption>
  <thead>
    <tr>
      <th scope="col">Supply</th>
      <th scope="col">Quantity</th>
      <th scope="col">Use</th>
    </tr>
  </thead>
  <tbody>
    <tr${highlight ? ' class="highlight"' : ""}>
      <th scope="row">Torch</th>
      <td>4</td>
      <td>Light</td>
    </tr>
    <tr>
      <th scope="row">Rope</th>
      <td>2</td>
      <td>Climbing</td>
    </tr>
    <tr>
      <th scope="row">Healing potion</th>
      <td>6</td>
      <td>Healing</td>
    </tr>
  </tbody>
</table>`;
  }

  const exampleTable = questTable();
  const exampleTableVariant = computed(() => {
    const responsive = modifiers.value.includes("responsive-table");
    const classes = [
      variant.value === "default" ? "" : variant.value,
      responsive ? "min-w-full-screen" : "",
      ...modifiers.value.filter((modifier) => modifier !== "highlight" && modifier !== "responsive-table"),
    ].filter(Boolean).join(" ");

    const table = questTable(classes, modifiers.value.includes("highlight"));
    return responsive
      ? `<div class="responsive-table" role="region" aria-label="Scrollable guild supply list" tabindex="0">
  ${table.replaceAll("\n", "\n  ")}
</div>`
      : table;
  });
</script>

# Tables

The table base component provides a set of styles for tables, captions, rows, and cells. Use modifiers to change borders, stripes, and colours.

## Base elements

The styles apply directly to the table and its elements by default.

<live-example :source-code="exampleTable" layout="side-by-side" />

## Variants and modifiers

There are three table colour variants provided by default: `.primary`, `.secondary`, and `.tertiary`. Add the variant class to the table. Set `$themeable` to `false` when compiling Graupl to skip generating theme variants for tables.

| Class               | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `.bordered`         | Adds borders to the table and its cells.             |
| `.collapsed`        | Collapses the borders between cells.                 |
| `.striped-columns`  | Styles odd cells in each row of the table body.      |
| `.striped-rows`     | Styles odd rows in the table body.                   |
| `.hoverable`        | Changes the colour of body rows on hover.            |
| `.highlight`        | Highlights a row or cell inside the table.           |
| `.responsive-table` | Lets a wrapper around the table scroll horizontally. |

Add the border, stripe, and hover classes to the table. Add `.highlight` to the row or cell you want to highlight. For a wide table, add `.responsive-table` to a wrapper. Give the wrapper a label and `tabindex="0"` so keyboard users can focus it and scroll. The responsive preview uses `.min-w-full-screen` to make the table wide enough to scroll.

<live-example :source-code="exampleTableVariant" options-position="top" layout="side-by-side">
  <template #options>
    <div class="input-group">
      <label for="select-table-variant">Table variant</label>
      <select id="select-table-variant" v-model="variant">
        <option value="default">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="tertiary">Tertiary</option>
      </select>
    </div>
    <fieldset>
      <legend>Table modifiers</legend>
      <label><input type="checkbox" v-model="modifiers" value="bordered"> Bordered</label>
      <label><input type="checkbox" v-model="modifiers" value="collapsed"> Collapsed</label>
      <label><input type="checkbox" v-model="modifiers" value="striped-columns"> Striped columns</label>
      <label><input type="checkbox" v-model="modifiers" value="striped-rows"> Striped rows</label>
      <label><input type="checkbox" v-model="modifiers" value="hoverable"> Hoverable</label>
      <label><input type="checkbox" v-model="modifiers" value="highlight"> Highlight</label>
      <label><input type="checkbox" v-model="modifiers" value="responsive-table"> Responsive table</label>
    </fieldset>
  </template>
</live-example>

## Custom Properties

The following custom properties can be used to customize the table component:

| Property                                           | Description                                                                                                          | Default Value                                                                                                                                                                                                     |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-table-caption-side`                      | The caption side of the table component.                                                                             | `bottom`                                                                                                                                                                                                          |
| `--graupl-table-caption-padding-x`                 | The horizontal padding of the table caption component.                                                               | `var(--graupl-spacer-3)`                                                                                                                                                                                          |
| `--graupl-table-caption-padding-y`                 | The vertical padding of the table caption component.                                                                 | `var(--graupl-spacer-3)`                                                                                                                                                                                          |
| `--graupl-table-caption-padding`                   | The padding of the table caption component (combines x and y padding).                                               | `var(--graupl-table-caption-padding-y) var(--graupl-table-caption-padding-x)`                                                                                                                                     |
| `--graupl-table-header-font-weight`                | The font weight of the table header component.                                                                       | `var(--graupl-font-weight-bold)`                                                                                                                                                                                  |
| `--graupl-table-header-padding-x`                  | The horizontal padding of the table header component.                                                                | `var(--graupl-spacer-3)`                                                                                                                                                                                          |
| `--graupl-table-header-padding-y`                  | The vertical padding of the table header component.                                                                  | `var(--graupl-spacer-3)`                                                                                                                                                                                          |
| `--graupl-table-header-padding`                    | The padding of the table header component (combines x and y padding).                                                | `var(--graupl-table-header-padding-y) var(--graupl-table-header-padding-x)`                                                                                                                                       |
| `--graupl-table-header-background`                 | The background colour of the table header component.                                                                 | `var(--graupl-background)`                                                                                                                                                                                        |
| `--graupl-table-header-color`                      | The text colour of the table header component.                                                                       | `var(--graupl-color)`                                                                                                                                                                                             |
| `--graupl-table-cell-padding-x`                    | The horizontal padding of the table cell component.                                                                  | `var(--graupl-spacer-3)`                                                                                                                                                                                          |
| `--graupl-table-cell-padding-y`                    | The vertical padding of the table cell component.                                                                    | `var(--graupl-spacer-3)`                                                                                                                                                                                          |
| `--graupl-table-cell-padding`                      | The padding of the table cell component (combines x and y padding).                                                  | `var(--graupl-table-cell-padding-y) var(--graupl-table-cell-padding-x)`                                                                                                                                           |
| `--graupl-table-cell-background`                   | The background colour of the table cell component.                                                                   | `var(--graupl-background)`                                                                                                                                                                                        |
| `--graupl-table-cell-color`                        | The text colour of the table cell component.                                                                         | `var(--graupl-color)`                                                                                                                                                                                             |
| `--graupl-table-border-top-width`                  | The top border width of the table component.                                                                         | `var(--graupl-border-top-width)`                                                                                                                                                                                  |
| `--graupl-table-border-right-width`                | The right border width of the table component.                                                                       | `var(--graupl-border-right-width)`                                                                                                                                                                                |
| `--graupl-table-border-bottom-width`               | The bottom border width of the table component.                                                                      | `var(--graupl-border-bottom-width)`                                                                                                                                                                               |
| `--graupl-table-border-left-width`                 | The left border width of the table component.                                                                        | `var(--graupl-border-left-width)`                                                                                                                                                                                 |
| `--graupl-table-border-width`                      | The border width of the table component (combines top, right, bottom, and left widths).                              | `var(--graupl-table-border-top-width) var(--graupl-table-border-right-width) var(--graupl-table-border-bottom-width) var(--graupl-table-border-left-width)`                                                       |
| `--graupl-table-border-top-style`                  | The top border style of the table component.                                                                         | `var(--graupl-border-top-style)`                                                                                                                                                                                  |
| `--graupl-table-border-right-style`                | The right border style of the table component.                                                                       | `var(--graupl-border-right-style)`                                                                                                                                                                                |
| `--graupl-table-border-bottom-style`               | The bottom border style of the table component.                                                                      | `var(--graupl-border-bottom-style)`                                                                                                                                                                               |
| `--graupl-table-border-left-style`                 | The left border style of the table component.                                                                        | `var(--graupl-border-left-style)`                                                                                                                                                                                 |
| `--graupl-table-border-style`                      | The border style of the table component (combines top, right, bottom, and left styles).                              | `var(--graupl-table-border-top-style) var(--graupl-table-border-right-style) var(--graupl-table-border-bottom-style) var(--graupl-table-border-left-style)`                                                       |
| `--graupl-table-border-top-left-radius`            | The top left border radius of the table component.                                                                   | `var(--graupl-border-top-left-radius)`                                                                                                                                                                            |
| `--graupl-table-border-top-right-radius`           | The top right border radius of the table component.                                                                  | `var(--graupl-border-top-right-radius)`                                                                                                                                                                           |
| `--graupl-table-border-bottom-right-radius`        | The bottom right border radius of the table component.                                                               | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                        |
| `--graupl-table-border-bottom-left-radius`         | The bottom left border radius of the table component.                                                                | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                         |
| `--graupl-table-border-radius`                     | The border radius of the table component (combines top left, top right, bottom right, and bottom left radii).        | `var(--graupl-table-border-top-left-radius) var(--graupl-table-border-top-right-radius) var(--graupl-table-border-bottom-right-radius) var(--graupl-table-border-bottom-left-radius)`                             |
| `--graupl-table-border-color`                      | The border colour of the table component.                                                                            | `var(--graupl-border-color)`                                                                                                                                                                                      |
| `--graupl-table-cell-border-top-width`             | The top border width of the table cell component.                                                                    | `var(--graupl-border-top-width)`                                                                                                                                                                                  |
| `--graupl-table-cell-border-right-width`           | The right border width of the table cell component.                                                                  | `var(--graupl-border-right-width)`                                                                                                                                                                                |
| `--graupl-table-cell-border-bottom-width`          | The bottom border width of the table cell component.                                                                 | `var(--graupl-border-bottom-width)`                                                                                                                                                                               |
| `--graupl-table-cell-border-left-width`            | The left border width of the table cell component.                                                                   | `var(--graupl-border-left-width)`                                                                                                                                                                                 |
| `--graupl-table-cell-border-width`                 | The border width of the table cell component (combines top, right, bottom, and left widths).                         | `var(--graupl-table-cell-border-top-width) var(--graupl-table-cell-border-right-width) var(--graupl-table-cell-border-bottom-width) var(--graupl-table-cell-border-left-width)`                                   |
| `--graupl-table-cell-border-top-style`             | The top border style of the table cell component.                                                                    | `var(--graupl-border-top-style)`                                                                                                                                                                                  |
| `--graupl-table-cell-border-right-style`           | The right border style of the table cell component.                                                                  | `var(--graupl-border-right-style)`                                                                                                                                                                                |
| `--graupl-table-cell-border-bottom-style`          | The bottom border style of the table cell component.                                                                 | `var(--graupl-border-bottom-style)`                                                                                                                                                                               |
| `--graupl-table-cell-border-left-style`            | The left border style of the table cell component.                                                                   | `var(--graupl-border-left-style)`                                                                                                                                                                                 |
| `--graupl-table-cell-border-style`                 | The border style of the table cell component (combines top, right, bottom, and left styles).                         | `var(--graupl-table-cell-border-top-style) var(--graupl-table-cell-border-right-style) var(--graupl-table-cell-border-bottom-style) var(--graupl-table-cell-border-left-style)`                                   |
| `--graupl-table-cell-border-top-left-radius`       | The top left border radius of the table cell component.                                                              | `var(--graupl-border-top-left-radius)`                                                                                                                                                                            |
| `--graupl-table-cell-border-top-right-radius`      | The top right border radius of the table cell component.                                                             | `var(--graupl-border-top-right-radius)`                                                                                                                                                                           |
| `--graupl-table-cell-border-bottom-right-radius`   | The bottom right border radius of the table cell component.                                                          | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                        |
| `--graupl-table-cell-border-bottom-left-radius`    | The bottom left border radius of the table cell component.                                                           | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                         |
| `--graupl-table-cell-border-radius`                | The border radius of the table cell component (combines top left, top right, bottom right, and bottom left radii).   | `var(--graupl-table-cell-border-top-left-radius) var(--graupl-table-cell-border-top-right-radius) var(--graupl-table-cell-border-bottom-right-radius) var(--graupl-table-cell-border-bottom-left-radius)`         |
| `--graupl-table-cell-border-color`                 | The border colour of the table cell component.                                                                       | `var(--graupl-table-border-color)`                                                                                                                                                                                |
| `--graupl-table-header-border-top-width`           | The top border width of the table header component.                                                                  | `var(--graupl-table-cell-border-top-width)`                                                                                                                                                                       |
| `--graupl-table-header-border-right-width`         | The right border width of the table header component.                                                                | `var(--graupl-table-cell-border-right-width)`                                                                                                                                                                     |
| `--graupl-table-header-border-bottom-width`        | The bottom border width of the table header component.                                                               | `var(--graupl-table-cell-border-bottom-width)`                                                                                                                                                                    |
| `--graupl-table-header-border-left-width`          | The left border width of the table header component.                                                                 | `var(--graupl-table-cell-border-left-width)`                                                                                                                                                                      |
| `--graupl-table-header-border-width`               | The border width of the table header component (combines top, right, bottom, and left widths).                       | `var(--graupl-table-header-border-top-width) var(--graupl-table-header-border-right-width) var(--graupl-table-header-border-bottom-width) var(--graupl-table-header-border-left-width)`                           |
| `--graupl-table-header-border-top-style`           | The top border style of the table header component.                                                                  | `var(--graupl-table-cell-border-top-style)`                                                                                                                                                                       |
| `--graupl-table-header-border-right-style`         | The right border style of the table header component.                                                                | `var(--graupl-table-cell-border-right-style)`                                                                                                                                                                     |
| `--graupl-table-header-border-bottom-style`        | The bottom border style of the table header component.                                                               | `var(--graupl-table-cell-border-bottom-style)`                                                                                                                                                                    |
| `--graupl-table-header-border-left-style`          | The left border style of the table header component.                                                                 | `var(--graupl-table-cell-border-left-style)`                                                                                                                                                                      |
| `--graupl-table-header-border-style`               | The border style of the table header component (combines top, right, bottom, and left styles).                       | `var(--graupl-table-header-border-top-style) var(--graupl-table-header-border-right-style) var(--graupl-table-header-border-bottom-style) var(--graupl-table-header-border-left-style)`                           |
| `--graupl-table-header-border-top-left-radius`     | The top left border radius of the table header component.                                                            | `var(--graupl-table-cell-border-top-left-radius)`                                                                                                                                                                 |
| `--graupl-table-header-border-top-right-radius`    | The top right border radius of the table header component.                                                           | `var(--graupl-table-cell-border-top-right-radius)`                                                                                                                                                                |
| `--graupl-table-header-border-bottom-right-radius` | The bottom right border radius of the table header component.                                                        | `var(--graupl-table-cell-border-bottom-right-radius)`                                                                                                                                                             |
| `--graupl-table-header-border-bottom-left-radius`  | The bottom left border radius of the table header component.                                                         | `var(--graupl-table-cell-border-bottom-left-radius)`                                                                                                                                                              |
| `--graupl-table-header-border-radius`              | The border radius of the table header component (combines top left, top right, bottom right, and bottom left radii). | `var(--graupl-table-header-border-top-left-radius) var(--graupl-table-header-border-top-right-radius) var(--graupl-table-header-border-bottom-right-radius) var(--graupl-table-header-border-bottom-left-radius)` |
| `--graupl-table-header-border-color`               | The border colour of the table header component.                                                                     | `var(--graupl-table-border-color)`                                                                                                                                                                                |
| `--graupl-table-striped-background`                | The background colour of the striped table component modifier.                                                       | `var(--graupl-theme-active--secondary--200)`                                                                                                                                                                      |
| `--graupl-table-cell-striped-background`           | The background colour of striped table cell components.                                                              | `var(--graupl-table-striped-background)`                                                                                                                                                                          |
| `--graupl-table-header-striped-background`         | The background colour of striped table header components.                                                            | `var(--graupl-table-striped-background)`                                                                                                                                                                          |
| `--graupl-table-striped-color`                     | The text colour of the striped table component modifier.                                                             | `var(--graupl-theme-active--secondary--900)`                                                                                                                                                                      |
| `--graupl-table-cell-striped-color`                | The text colour of striped table cell components.                                                                    | `var(--graupl-table-striped-color)`                                                                                                                                                                               |
| `--graupl-table-header-striped-color`              | The text colour of striped table header components.                                                                  | `var(--graupl-table-striped-color)`                                                                                                                                                                               |
| `--graupl-table-hover-background`                  | The background colour of the hoverable table component modifier.                                                     | `var(--graupl-theme-active--secondary--300)`                                                                                                                                                                      |
| `--graupl-table-cell-hover-background`             | The background colour of hoverable table cell components.                                                            | `var(--graupl-table-hover-background)`                                                                                                                                                                            |
| `--graupl-table-header-hover-background`           | The background colour of hoverable table header components.                                                          | `var(--graupl-table-hover-background)`                                                                                                                                                                            |
| `--graupl-table-hover-color`                       | The text colour of the hoverable table component modifier.                                                           | `var(--graupl-theme-active--secondary--900)`                                                                                                                                                                      |
| `--graupl-table-cell-hover-color`                  | The text colour of hoverable table cell components.                                                                  | `var(--graupl-table-hover-color)`                                                                                                                                                                                 |
| `--graupl-table-header-hover-color`                | The text colour of hoverable table header components.                                                                | `var(--graupl-table-hover-color)`                                                                                                                                                                                 |
| `--graupl-table-highlight-background`              | The background colour of the highlighted table component modifier.                                                   | `var(--graupl-theme-active--secondary--700)`                                                                                                                                                                      |
| `--graupl-table-cell-highlight-background`         | The background colour of highlighted table cell components.                                                          | `var(--graupl-table-highlight-background)`                                                                                                                                                                        |
| `--graupl-table-header-highlight-background`       | The background colour of highlighted table header components.                                                        | `var(--graupl-table-highlight-background)`                                                                                                                                                                        |
| `--graupl-table-highlight-color`                   | The text colour of the highlighted table component modifier.                                                         | `var(--graupl-theme-active--secondary--100)`                                                                                                                                                                      |
| `--graupl-table-cell-highlight-color`              | The text colour of highlighted table cell components.                                                                | `var(--graupl-table-highlight-color)`                                                                                                                                                                             |
| `--graupl-table-header-highlight-color`            | The text colour of highlighted table header components.                                                              | `var(--graupl-table-highlight-color)`                                                                                                                                                                             |

## Sass variables

The following Sass variables can be used to customize the generation of the table component:

| Variable                               | Description                                                                            | Default Value        |
| -------------------------------------- | -------------------------------------------------------------------------------------- | -------------------- |
| `$selector-base`                       | The selector base for the component.                                                   | `""`                 |
| `$modifier-selector-base`              | The selector base for component modifiers.                                             | `"."`                |
| `$generate-base-theme-map`             | A flag to generate the base theme maps for table variants.                             | `true`               |
| `$themeable`                           | A flag that determines whether theme modifiers are generated.                          | `true`               |
| `$table-selector-base`                 | The selector base for the table component.                                             | `""`                 |
| `$table-selector`                      | The selector for the table component.                                                  | `"table"`            |
| `$table-caption-selector-base`         | The selector base for the table caption component.                                     | `""`                 |
| `$table-caption-selector`              | The selector for the table caption component.                                          | `"caption"`          |
| `$table-header-selector-base`          | The selector base for the table header cell component.                                 | `""`                 |
| `$table-header-selector`               | The selector for the table header cell component.                                      | `"th"`               |
| `$table-cell-selector-base`            | The selector base for the table cell component.                                        | `""`                 |
| `$table-cell-selector`                 | The selector for the table cell component.                                             | `"td"`               |
| `$table-row-selector-base`             | The selector base for the table row component.                                         | `""`                 |
| `$table-row-selector`                  | The selector for the table row component.                                              | `"tr"`               |
| `$table-body-selector-base`            | The selector base for the table body component.                                        | `""`                 |
| `$table-body-selector`                 | The selector for the table body component.                                             | `"tbody"`            |
| `$table-theme-prefix-selector-base`    | The selector base for the themed table component modifiers.                            | `"."`                |
| `$table-theme-prefix-selector`         | The selector prefix for the themed table component modifiers.                          | `""`                 |
| `$table-bordered-selector-base`        | The selector base for the bordered table component modifier.                           | `"."`                |
| `$table-bordered-selector`             | The selector for the bordered table component modifier.                                | `"bordered"`         |
| `$table-collapsed-selector-base`       | The selector base for the collapsed table component modifier.                          | `"."`                |
| `$table-collapsed-selector`            | The selector for the collapsed table component modifier.                               | `"collapsed"`        |
| `$table-striped-columns-selector-base` | The selector base for the striped columns table component modifier.                    | `"."`                |
| `$table-striped-columns-selector`      | The selector for the striped columns table component modifier.                         | `"striped-columns"`  |
| `$table-striped-rows-selector-base`    | The selector base for the striped rows table component modifier.                       | `"."`                |
| `$table-striped-rows-selector`         | The selector for the striped rows table component modifier.                            | `"striped-rows"`     |
| `$table-hoverable-selector-base`       | The selector base for the hoverable table component modifier.                          | `"."`                |
| `$table-hoverable-selector`            | The selector for the hoverable table component modifier.                               | `"hoverable"`        |
| `$table-highlight-selector-base`       | The selector base for the highlighted table component modifier.                        | `"."`                |
| `$table-highlight-selector`            | The selector for the highlighted table component modifier.                             | `"highlight"`        |
| `$table-responsive-selector-base`      | The selector base for the responsive table component modifier.                         | `"."`                |
| `$table-responsive-selector`           | The selector for the responsive table component modifier.                              | `"responsive-table"` |
| `$table-caption-side`                  | The side of the table used to render the caption.                                      | `bottom`             |
| `$table-theme-mappings`                | A map of properties and color shades used to generate all table variants.              | `()`                 |
| `$table-theme-map`                     | A map of all properties, colors, and color shades used to generate all table variants. | `()`                 |
