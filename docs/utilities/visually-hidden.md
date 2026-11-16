<script setup>
  import LiveExample from "../vue-components/LiveExample.vue";

  const accessibleName = `<button type="button" class="button">
  <span aria-hidden="true">✕</span>
  <span class="visually-hidden">Close</span>
</button>`;

  const skipLink = `<div class="position-relative">
  <a class="visually-hidden focusable" href="#guild-supplies">
    Skip to guild supplies
  </a>
  <p><a href="#guild-map">View the guild map</a></p>
  <h3 id="guild-supplies" tabindex="-1">Guild supplies</h3>
  <p>Bring parchment, a quill, and a lantern.</p>
  <h3 id="guild-map">Guild map</h3>
  <p>The supply room is beside the entrance.</p>
</div>`;
</script>

# Visually Hidden Utilities

The visually hidden utilities provide classes for hiding content on screen while keeping it available to assistive technology.

## Accessible names

Use `.visually-hidden` for text that names a control without adding visible text. The button shows a close symbol. Its accessible name comes from the hidden text, and `aria-hidden="true"` keeps the symbol out of that name.

<live-example :source-code="accessibleName" />

## Focusable

Add `.focusable` alongside `.visually-hidden` to reveal an element when it or one of its descendants receives focus. Use it on a skip link so keyboard users can see where the link will take them. Tab to the link, then press Enter to move focus to the heading.

<live-example class="vp-raw" :source-code="skipLink" />

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/visually-hidden.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/visually-hidden.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/visually-hidden.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the visually hidden utilities.

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

By default, no responsive utility classes are generated for visually-hidden.

::: info Note
For more information on responsive variants, refer to the [Responsive classes](../responsive-classes) documentation.
:::
