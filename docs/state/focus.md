<script setup>
  import LiveExample from "../vue-components/LiveExample.vue";

  const exampleFocus = '<button type="button" class="button">Open the quest log</button>';
</script>

# Focus

Graupl provides a set of styles that make it easier to see which element has focus. By default, the styles apply when an element matches `:focus-visible`.

## Example

Use Tab to move focus to the button and see the focus outline.

<live-example :source-code="exampleFocus" />

The `.focus` class applies the same styles. It changes the appearance without moving focus.

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/state/focus.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/state/focus.css">
```

```scss [Sass]
@use "pkg:@graupl/core/state/focus.scss";
```

:::

## Custom Properties

The following custom properties can be used to customize the focus state:

| Property                          | Description                                         | Default Value                                                                                           |
| --------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `--graupl-focus-width`            | The width of both the focus outline and box shadow. | `var(--graupl-border-width)`                                                                            |
| `--graupl-focus-outline-color`    | The color of the focus outline.                     | `var(--graupl-color)`                                                                                   |
| `--graupl-focus-outline-width`    | The width of the focus outline.                     | `var(--graupl-focus-width)`                                                                             |
| `--graupl-focus-outline-style`    | The style of the focus outline.                     | `dotted`                                                                                                |
| `--graupl-focus-outline`          | The outline applied in the focus state.             | `var(--graupl-focus-outline-width) var(--graupl-focus-outline-style) var(--graupl-focus-outline-color)` |
| `--graupl-focus-outline-offset`   | The offset of the focus outline.                    | `calc(-1 * var(--graupl-focus-outline-width))`                                                          |
| `--graupl-focus-box-shadow-color` | The color of the focus box shadow.                  | `var(--graupl-background)`                                                                              |
| `--graupl-focus-border-color`     | The color applied to the border in the focus state. | `var(--graupl-background)`                                                                              |
| `--graupl-focus-box-shadow`       | The box shadow of the focus state.                  | `0 0 0 var(--graupl-focus-width) inset var(--graupl-focus-box-shadow-color)`                            |

## Sass variables

The following Sass variables can be used to customize the generation of the focus state:

| Variable               | Description                     | Default Value |
| ---------------------- | ------------------------------- | ------------- |
| `$focus-outline-style` | The style of the focus outline. | `dotted`      |
