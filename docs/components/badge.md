<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const variant = ref("default");
  const exampleBadge = '<span class="badge w-fit-content">Hydra spotted</span>';
  const exampleBadgeVariant = computed(() =>
    variant.value === "default"
      ? exampleBadge
      : `<span class="badge ${variant.value} w-fit-content">Hydra spotted</span>`
  );
</script>

# Badges

The badge component provides a set of classes to style short labels, such as a status or a count.

## Base class

The `.badge` class is the base class for all badge styles. Use `.w-fit-content` if you want the badge to fit its label.

<live-example :source-code="exampleBadge" />

## Variants

There are three badge colour variants provided by default: `.primary`, `.secondary`, and `.tertiary`. Add the variant class alongside `.badge` to change the text and border colours.

<live-example :source-code="exampleBadgeVariant" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-badge-variant">Badge variant</label>
      <select id="select-badge-variant" v-model="variant">
        <option value="default">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="tertiary">Tertiary</option>
      </select>
    </div>
  </template>
</live-example>

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the badge module’s `$themeable` variable to `false` to skip generating theme variants.

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/component/badge.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/component/badge.css">
```

```scss [Sass]
@use "pkg:@graupl/core/component/badge.scss";
```

:::

## Custom Properties

The following custom properties can be used to customize the badge component:

| Property                                    | Description                                                                                                   | Default Value                                                                                                                                                                         |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-badge-font-size`                  | The font size of the badge component.                                                                         | `var(--graupl-font-size-sm)`                                                                                                                                                          |
| `--graupl-badge-background`                 | The background colour of the badge component.                                                                 | `var(--graupl-background)`                                                                                                                                                            |
| `--graupl-badge-color`                      | The text colour of the badge component.                                                                       | `var(--graupl-color)`                                                                                                                                                                 |
| `--graupl-badge-border-color`               | The border colour of the badge component.                                                                     | `var(--graupl-border-color)`                                                                                                                                                          |
| `--graupl-badge-padding-x`                  | The horizontal padding of the badge component.                                                                | `var(--graupl-spacer-5)`                                                                                                                                                              |
| `--graupl-badge-padding-y`                  | The vertical padding of the badge component.                                                                  | `var(--graupl-spacer-3)`                                                                                                                                                              |
| `--graupl-badge-padding`                    | The padding of the badge component (combines y and x padding).                                                | `var(--graupl-badge-padding-y) var(--graupl-badge-padding-x)`                                                                                                                         |
| `--graupl-badge-border-top-width`           | The top border width of the badge component.                                                                  | `var(--graupl-border-top-width)`                                                                                                                                                      |
| `--graupl-badge-border-right-width`         | The right border width of the badge component.                                                                | `var(--graupl-border-right-width)`                                                                                                                                                    |
| `--graupl-badge-border-bottom-width`        | The bottom border width of the badge component.                                                               | `var(--graupl-border-bottom-width)`                                                                                                                                                   |
| `--graupl-badge-border-left-width`          | The left border width of the badge component.                                                                 | `var(--graupl-border-left-width)`                                                                                                                                                     |
| `--graupl-badge-border-width`               | The border width of the badge component (combines top, right, bottom, and left widths).                       | `var(--graupl-badge-border-top-width) var(--graupl-badge-border-right-width) var(--graupl-badge-border-bottom-width) var(--graupl-badge-border-left-width)`                           |
| `--graupl-badge-border-top-style`           | The top border style of the badge component.                                                                  | `var(--graupl-border-top-style)`                                                                                                                                                      |
| `--graupl-badge-border-right-style`         | The right border style of the badge component.                                                                | `var(--graupl-border-right-style)`                                                                                                                                                    |
| `--graupl-badge-border-bottom-style`        | The bottom border style of the badge component.                                                               | `var(--graupl-border-bottom-style)`                                                                                                                                                   |
| `--graupl-badge-border-left-style`          | The left border style of the badge component.                                                                 | `var(--graupl-border-left-style)`                                                                                                                                                     |
| `--graupl-badge-border-style`               | The border style of the badge component (combines top, right, bottom, and left styles).                       | `var(--graupl-badge-border-top-style) var(--graupl-badge-border-right-style) var(--graupl-badge-border-bottom-style) var(--graupl-badge-border-left-style)`                           |
| `--graupl-badge-border-top-left-radius`     | The top-left border radius of the badge component.                                                            | `var(--graupl-border-top-left-radius)`                                                                                                                                                |
| `--graupl-badge-border-top-right-radius`    | The top-right border radius of the badge component.                                                           | `var(--graupl-border-top-right-radius)`                                                                                                                                               |
| `--graupl-badge-border-bottom-right-radius` | The bottom-right border radius of the badge component.                                                        | `var(--graupl-border-bottom-right-radius)`                                                                                                                                            |
| `--graupl-badge-border-bottom-left-radius`  | The bottom-left border radius of the badge component.                                                         | `var(--graupl-border-bottom-left-radius)`                                                                                                                                             |
| `--graupl-badge-border-radius`              | The border radius of the badge component (combines top-left, top-right, bottom-right, and bottom-left radii). | `var(--graupl-badge-border-top-left-radius) var(--graupl-badge-border-top-right-radius) var(--graupl-badge-border-bottom-right-radius) var(--graupl-badge-border-bottom-left-radius)` |

## Sass variables

The following Sass variables can be used to customize the generation of the badge component:

| Variable                       | Description                                                                            | Default Value |
| ------------------------------ | -------------------------------------------------------------------------------------- | ------------- |
| `$selector-base`               | The selector base for the component.                                                   | `"."`         |
| `$modifier-selector-base`      | The selector base for component modifiers.                                             | `"."`         |
| `$themeable`                   | Flag to generate theme modifiers.                                                      | `true`        |
| `$generate-base-theme-map`     | A flag to generate the base theme maps for badge variants.                             | `true`        |
| `$badge-selector-base`         | The selector base for the badge component.                                             | `"."`         |
| `$badge-selector`              | The badge component selector.                                                          | `"badge"`     |
| `$badge-theme-selector-base`   | The selector base for the badge theme component modifiers.                             | `"."`         |
| `$badge-theme-selector-prefix` | The badge theme component modifier selector prefix.                                    | `""`          |
| `$badge-theme-mappings`        | A map of properties and color shades used to generate all badge variants.              | `()`          |
| `$badge-theme-map`             | A map of all properties, colors, and color shades used to generate all badge variants. | `()`          |
