<script setup>
  import LiveExample from "../vue-components/LiveExample.vue";

  const exampleList = `
<ul class="list" role="list">
  <li class="list-item">Rope</li>
  <li class="list-item">Lantern</li>
  <li class="list-item">Basilisk mirror</li>
</ul>
  `;

  const exampleLinks = `
<ul class="list" role="list">
  <li class="list-item"><a class="stretched" href="#custom-properties">List custom properties</a></li>
  <li class="list-item"><a class="stretched" href="#sass-variables">List Sass variables</a></li>
</ul>
  `;
</script>

# Lists

The list component provides a set of classes to style a group of related items with spacing and borders.

## Base classes

Add `.list` to the list and `.list-item` to each item. The default styles remove the markers.

::: warning Safari list semantics
Use `role="list"` to preserve [list semantics in Safari](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/list-style#accessibility) when the markers are removed.
:::

<live-example :source-code="exampleList" />

See [List utilities](../utilities/list.md) for classes that change marker style and position.

## Lists with links

Use a [stretched link](../base/link.md#stretched-links) to make the whole list item clickable. Each item in this layout should have a single link and no other interactive controls.

<live-example :source-code="exampleLinks" />

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the list module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants.

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/component/list.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/component/list.css">
```

```scss [Sass]
@use "pkg:@graupl/core/component/list.scss";
```

:::

## Custom Properties

The following custom properties can be used to customize the list component:

| Property                                        | Description                                                                    | Default Value                                                                                                                                                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-list-padding-x`                       | The horizontal padding of the list.                                            | `var(--graupl-spacer-0)`                                                                                                                                                                              |
| `--graupl-list-padding-y`                       | The vertical padding of the list.                                              | `var(--graupl-spacer-0)`                                                                                                                                                                              |
| `--graupl-list-padding`                         | The padding of the list.                                                       | `var(--graupl-list-padding-y) var(--graupl-list-padding-x)`                                                                                                                                           |
| `--graupl-list-margin-x`                        | The horizontal margin of the list.                                             | `var(--graupl-spacer-0)`                                                                                                                                                                              |
| `--graupl-list-margin-y`                        | The vertical margin of the list.                                               | `var(--graupl-spacer-0)`                                                                                                                                                                              |
| `--graupl-list-margin`                          | The margin of the list.                                                        | `var(--graupl-list-margin-y) var(--graupl-list-margin-x)`                                                                                                                                             |
| `--graupl-list-column-gap`                      | The column gap of the list.                                                    | `var(--graupl-spacer-2)`                                                                                                                                                                              |
| `--graupl-list-row-gap`                         | The row gap of the list.                                                       | `var(--graupl-spacer-2)`                                                                                                                                                                              |
| `--graupl-list-gap`                             | The gap of the list.                                                           | `var(--graupl-list-row-gap) var(--graupl-list-column-gap)`                                                                                                                                            |
| `--graupl-list-background`                      | The background colour of the list.                                             | `var(--graupl-background)`                                                                                                                                                                            |
| `--graupl-list-color`                           | The text colour of the list.                                                   | `var(--graupl-color)`                                                                                                                                                                                 |
| `--graupl-list-border-color`                    | The border colour of the list.                                                 | `var(--graupl-list-color)`                                                                                                                                                                            |
| `--graupl-list-border-top-left-radius`          | The border top left radius of the list.                                        | `var(--graupl-border-top-left-radius)`                                                                                                                                                                |
| `--graupl-list-border-top-right-radius`         | The border top right radius of the list.                                       | `var(--graupl-border-top-right-radius)`                                                                                                                                                               |
| `--graupl-list-border-bottom-left-radius`       | The border bottom left radius of the list.                                     | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                             |
| `--graupl-list-border-bottom-right-radius`      | The border bottom right radius of the list.                                    | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                            |
| `--graupl-list-border-radius`                   | The border radius of the list.                                                 | `var(--graupl-list-border-top-left-radius) var(--graupl-list-border-top-right-radius) var(--graupl-list-border-bottom-right-radius) var(--graupl-list-border-bottom-left-radius)`                     |
| `--graupl-list-border-top-width`                | The border top width of the list.                                              | `0`                                                                                                                                                                                                   |
| `--graupl-list-border-right-width`              | The border right width of the list.                                            | `0`                                                                                                                                                                                                   |
| `--graupl-list-border-bottom-width`             | The border bottom width of the list.                                           | `0`                                                                                                                                                                                                   |
| `--graupl-list-border-left-width`               | The border left width of the list.                                             | `0`                                                                                                                                                                                                   |
| `--graupl-list-border-width`                    | The border width of the list.                                                  | `var(--graupl-list-border-top-width) var(--graupl-list-border-right-width) var(--graupl-list-border-bottom-width) var(--graupl-list-border-left-width)`                                               |
| `--graupl-list-border-top-style`                | The border top style of the list.                                              | `var(--graupl-border-top-style)`                                                                                                                                                                      |
| `--graupl-list-border-right-style`              | The border right style of the list.                                            | `var(--graupl-border-right-style)`                                                                                                                                                                    |
| `--graupl-list-border-bottom-style`             | The border bottom style of the list.                                           | `var(--graupl-border-bottom-style)`                                                                                                                                                                   |
| `--graupl-list-border-left-style`               | The border left style of the list.                                             | `var(--graupl-border-left-style)`                                                                                                                                                                     |
| `--graupl-list-border-style`                    | The border style of the list.                                                  | `var(--graupl-list-border-top-style) var(--graupl-list-border-right-style) var(--graupl-list-border-bottom-style) var(--graupl-list-border-left-style)`                                               |
| `--graupl-list-item-padding-x`                  | The horizontal padding of the list item.                                       | `var(--graupl-spacer-5)`                                                                                                                                                                              |
| `--graupl-list-item-padding-y`                  | The vertical padding of the list item.                                         | `var(--graupl-spacer-3)`                                                                                                                                                                              |
| `--graupl-list-item-padding`                    | The padding of the list item.                                                  | `var(--graupl-list-item-padding-y) var(--graupl-list-item-padding-x)`                                                                                                                                 |
| `--graupl-list-item-transition`                 | The transition of the list item.                                               | `transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)`                                                                                                           |
| `--graupl-list-item-transition-reduced-motion`  | The transition of the list item when reduced motion is enabled.                | `none`                                                                                                                                                                                                |
| `--graupl-list-item-transform`                  | The transform of the list item.                                                | `none`                                                                                                                                                                                                |
| `--graupl-list-item-hover-transform`            | The transform on hover of the list item.                                       | `none`                                                                                                                                                                                                |
| `--graupl-list-item-background`                 | The background colour of the list item.                                        | `var(--graupl-background)`                                                                                                                                                                            |
| `--graupl-list-item-color`                      | The text colour of the list item.                                              | `var(--graupl-color)`                                                                                                                                                                                 |
| `--graupl-list-item-border-color`               | The border colour of the list item.                                            | `var(--graupl-list-item-color)`                                                                                                                                                                       |
| `--graupl-list-item-border-top-left-radius`     | The border top left radius of the list item.                                   | `var(--graupl-border-top-left-radius)`                                                                                                                                                                |
| `--graupl-list-item-border-top-right-radius`    | The border top right radius of the list item.                                  | `var(--graupl-border-top-right-radius)`                                                                                                                                                               |
| `--graupl-list-item-border-bottom-left-radius`  | The border bottom left radius of the list item.                                | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                             |
| `--graupl-list-item-border-bottom-right-radius` | The border bottom right radius of the list item.                               | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                            |
| `--graupl-list-item-border-radius`              | The border radius of the list item.                                            | `var(--graupl-list-item-border-top-left-radius) var(--graupl-list-item-border-top-right-radius) var(--graupl-list-item-border-bottom-right-radius) var(--graupl-list-item-border-bottom-left-radius)` |
| `--graupl-list-item-border-top-width`           | The border top width of the list item.                                         | `var(--graupl-border-top-width)`                                                                                                                                                                      |
| `--graupl-list-item-border-right-width`         | The border right width of the list item.                                       | `var(--graupl-border-right-width)`                                                                                                                                                                    |
| `--graupl-list-item-border-bottom-width`        | The border bottom width of the list item.                                      | `var(--graupl-border-bottom-width)`                                                                                                                                                                   |
| `--graupl-list-item-border-left-width`          | The border left width of the list item.                                        | `var(--graupl-border-left-width)`                                                                                                                                                                     |
| `--graupl-list-item-border-width`               | The border width of the list item.                                             | `var(--graupl-list-item-border-top-width) var(--graupl-list-item-border-right-width) var(--graupl-list-item-border-bottom-width) var(--graupl-list-item-border-left-width)`                           |
| `--graupl-list-item-border-top-style`           | The border top style of the list item.                                         | `var(--graupl-border-top-style)`                                                                                                                                                                      |
| `--graupl-list-item-border-right-style`         | The border right style of the list item.                                       | `var(--graupl-border-right-style)`                                                                                                                                                                    |
| `--graupl-list-item-border-bottom-style`        | The border bottom style of the list item.                                      | `var(--graupl-border-bottom-style)`                                                                                                                                                                   |
| `--graupl-list-item-border-left-style`          | The border left style of the list item.                                        | `var(--graupl-border-left-style)`                                                                                                                                                                     |
| `--graupl-list-item-border-style`               | The border style of the list item.                                             | `var(--graupl-list-item-border-top-style) var(--graupl-list-item-border-right-style) var(--graupl-list-item-border-bottom-style) var(--graupl-list-item-border-left-style)`                           |

## Sass variables

The following Sass variables can be used to customize the generation of the list component:

| Variable                      | Description                                                                           | Default Value |
| ----------------------------- | ------------------------------------------------------------------------------------- | ------------- |
| `$selector-base`              | The selector base for the component.                                                  | `"."`         |
| `$modifier-selector-base`     | The selector base for component modifiers.                                            | `"."`         |
| `$generate-base-theme-map`    | Flag to generate the base theme map.                                                  | `true`        |
| `$themeable`                  | Flag to generate theme modifiers.                                                     | `false`       |
| `$list-selector-base`         | The list selector base.                                                               | `"."`         |
| `$list-selector`              | The list selector.                                                                    | `"list"`      |
| `$list-theme-selector-base`   | The list theme selector base.                                                         | `"."`         |
| `$list-theme-selector-prefix` | The list theme selector prefix.                                                       | `""`          |
| `$list-item-selector-base`    | The list item selector base.                                                          | `"."`         |
| `$list-item-selector`         | The list item selector.                                                               | `"list-item"` |
| `$list-item-transform`        | The list item transform.                                                              | `none`        |
| `$list-item-hover-transform`  | The list item hover transform.                                                        | `none`        |
| `$list-theme-mappings`        | A map of properties and color shades used to generate all list variants.              | `()`          |
| `$list-theme-map`             | A map of all properties, colors, and color shades used to generate all list variants. | `()`          |
