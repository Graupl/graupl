<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const size = ref(6);
  const fill = ref(false);
  const itemCount = ref(3);

  const exampleBase = `
<div class="flex-columns">
  <div class="bg-primary-700 text-primary-100 p-1">1</div>
  <div class="bg-primary-700 text-primary-100 p-1">2</div>
  <div class="bg-primary-700 text-primary-100 p-1">3</div>
</div>
  `;

  const exampleWidth = computed(() => {
    const classes = `col-${size.value}${fill.value ? " fill" : ""}`;
    const items = Array.from({ length: itemCount.value }, (_, index) =>
      `  <div class="${classes} bg-primary-700 text-primary-100 p-1">${index + 1}</div>`
    ).join("\n");

    return `<div class="flex-columns">
${items}
</div>`;
  });

  const exampleResponsive = `
<div class="flex-columns">
  <div class="col-6 lg:col-4 bg-primary-700 text-primary-100 p-1">1</div>
  <div class="col-6 lg:col-4 bg-primary-700 text-primary-100 p-1">2</div>
  <div class="col-6 lg:col-4 bg-primary-700 text-primary-100 p-1">3</div>
</div>
  `;
</script>

# Flex columns

The flex columns layout provides a set of classes to arrange content in rows with Flexbox.

Flex columns use numbered widths on a 12-unit scale, similar to [Bootstrap's grid](https://getbootstrap.com/docs/5.3/layout/grid/). However, Bootstrap creates [gutters](https://getbootstrap.com/docs/5.3/layout/gutters/) with padding on each column, while Graupl uses the CSS `gap` property to space items apart. Flexbox sizes each row independently, so the gaps can fall in different places from row to row. Use the [Columns layout](./column.md) when gaps need to line up across rows.

## Base class

The `.flex-columns` class puts a container's direct children in a row. The items can grow to fill the available width and wrap onto another row if there isn't enough room.

<live-example :source-code="exampleBase" />

## Column widths

Use `.col-1` through `.col-12` on a direct child to size it in twelfths of the container's width, with room for the gaps between items. Add `.fill` alongside the width class to let an item grow into the space left on its row.

<live-example :source-code="exampleWidth" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-flex-column-width">Column width</label>
      <select id="select-flex-column-width" v-model.number="size">
        <option v-for="number in 12" :key="number" :value="number">{{ number }}</option>
      </select>
    </div>
    <div class="input-group">
      <label for="select-flex-column-items">Number of items</label>
      <select id="select-flex-column-items" v-model.number="itemCount">
        <option v-for="number in 12" :key="number" :value="number">{{ number }}</option>
      </select>
    </div>
    <label><input type="checkbox" v-model="fill"> Fill remaining space</label>
  </template>
</live-example>

## Responsive variants

Use a screen-size prefix on the item to change its width at that breakpoint and above. With `col-6 lg:col-4`, an item uses six units by default and four from the large screen breakpoint.

Graupl applies a single-column fallback to unprefixed width classes when the flex container is up to 575px wide. A responsive width class such as `lg:col-4` can override that fallback.

<live-example :source-code="exampleResponsive" />

See [responsive utility classes](../utilities/responsive-classes.md) for the available prefixes.

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the flex columns module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants.

## Custom Properties

The following custom properties can be used to customize the flex columns layout:

| Property                               | Description                                               | Default Value                      |
| -------------------------------------- | --------------------------------------------------------- | ---------------------------------- |
| `--graupl-flex-columns-row-gap`        | The gap between the rows of the flex columns.             | `var(--graupl-columns-row-gap)`    |
| `--graupl-flex-columns-column-gap`     | The gap between the columns of the flex columns.          | `var(--graupl-columns-column-gap)` |
| `--graupl-flex-columns-size`           | The size of a column.                                     | `auto`                             |
| `--graupl-flex-columns-max-width`      | The maximum width of a column.                            | `unset`                            |
| `--graupl-flex-columns-container-type` | The container type applied to the flex columns component. | `inline-size`                      |
| `--graupl-flex-columns-background`     | The background of the flex columns component.             | No default                         |
| `--graupl-flex-columns-color`          | The text color of the flex columns component.             | No default                         |

## Sass variables

The following Sass variables can be used to customize the generation of the flex columns layout:

| Variable                                           | Description                                                                                   | Default Value    |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------- |
| `$selector-base`                                   | The base selector for the component.                                                          | `"."`            |
| `$modifier-selector-base`                          | The base selector for component modifiers.                                                    | `"."`            |
| `$generate-base-theme-map`                         | Flag to generate the base theme map.                                                          | `true`           |
| `$themeable`                                       | Flag to generate theme modifiers.                                                             | `false`          |
| `$screen-aware`                                    | Enables screen-aware column variants.                                                         | `true`           |
| `$theme-aware`                                     | Enables theme-aware column variants.                                                          | `false`          |
| `$scheme-aware`                                    | Enables scheme-aware column variants.                                                         | `false`          |
| `$state-aware`                                     | Enables state-aware column variants.                                                          | `false`          |
| `$container-aware`                                 | Enables container-aware column variants.                                                      | `true`           |
| `$force-single-columns`                            | Flag to enable forced single column layout on small screens.                                  | `true`           |
| `$flex-columns-selector-base`                      | The base selector for the flex columns component.                                             | `"."`            |
| `$flex-columns-selector`                           | The selector for the flex columns component.                                                  | `"flex-columns"` |
| `$flex-columns-theme-selector-base`                | The selector base for flex columns theme modifiers.                                           | `"."`            |
| `$flex-columns-theme-selector-prefix`              | The flex columns theme modifier selector prefix.                                              | `""`             |
| `$flex-columns-column-selector-base`               | The base selector for the column class.                                                       | `"."`            |
| `$flex-columns-column-selector`                    | The selector for the column class.                                                            | `"col-"`         |
| `$flex-columns-fill-selector-base`                 | The base selector for the fill class.                                                         | `"."`            |
| `$flex-columns-fill-selector`                      | The selector for the fill class.                                                              | `"fill"`         |
| `$flex-columns-screen-aware-selector-prefix`       | Prefix to the screen-aware portion of column selectors.                                       | `""`             |
| `$flex-columns-screen-aware-selector-suffix`       | Suffix to the screen-aware portion of column selectors.                                       | `""`             |
| `$flex-columns-screen-aware-selector-separator`    | Separator inserted for screen-aware column selectors.                                         | `"\\:"`          |
| `$flex-columns-theme-aware-selector-prefix`        | Prefix to the theme-aware portion of column selectors.                                        | `""`             |
| `$flex-columns-theme-aware-selector-suffix`        | Suffix to the theme-aware portion of column selectors.                                        | `"-theme"`       |
| `$flex-columns-theme-aware-selector-separator`     | Separator inserted for theme-aware column selectors.                                          | `"\\:"`          |
| `$flex-columns-scheme-aware-selector-prefix`       | Prefix to the scheme-aware portion of column selectors.                                       | `""`             |
| `$flex-columns-scheme-aware-selector-suffix`       | Suffix to the scheme-aware portion of column selectors.                                       | `"-mode"`        |
| `$flex-columns-scheme-aware-selector-separator`    | Separator inserted for scheme-aware column selectors.                                         | `"\\:"`          |
| `$flex-columns-state-aware-selector-prefix`        | Prefix to the state-aware portion of column selectors.                                        | `""`             |
| `$flex-columns-state-aware-selector-suffix`        | Suffix to the state-aware portion of column selectors.                                        | `""`             |
| `$flex-columns-state-aware-selector-separator`     | Separator inserted for state-aware column selectors.                                          | `"\\:"`          |
| `$flex-columns-container-aware-selector-prefix`    | Prefix to the container-aware portion of column selectors.                                    | `"cq\\:"`        |
| `$flex-columns-container-aware-selector-suffix`    | Suffix to the container-aware portion of column selectors.                                    | `""`             |
| `$flex-columns-container-aware-selector-separator` | Separator inserted for container-aware column selectors.                                      | `"\\:"`          |
| `$flex-columns-min-count`                          | The minimum number of columns used to generate `.col-#` classes.                              | `1`              |
| `$flex-columns-max-count`                          | The maximum number of columns used to generate `.col-#` classes.                              | `12`             |
| `$flex-columns-size`                               | The default size of a column.                                                                 | `auto`           |
| `$flex-columns-max-width`                          | The default maximum width of a column.                                                        | `unset`          |
| `$flex-columns-container-type`                     | The container type applied to the flex columns component.                                     | `"inline-size"`  |
| `$flex-columns-theme-mappings`                     | A map of properties and color shades used to generate all flex columns variants.              | `()`             |
| `$flex-columns-theme-map`                          | A map of all properties, colors, and color shades used to generate all flex columns variants. | `()`             |
