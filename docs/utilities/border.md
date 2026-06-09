# Border Utilities

The border utilities provide a set of classes to adjust the `border-color`, `border-radius`, `border-style`, and `border-width` properties of elements.

## Bordered

Applies the default border styling to an element.

```css
  .bordered {
    border-width:
      var(--graupl-border-top-width)
      var(--graupl-border-right-width)
      var(--graupl-border-bottom-width)
      var(--graupl-border-left-width);
    border-radius:
      var(--graupl-border-top-left-radius)
      var(--graupl-border-top-right-radius)
      var(--graupl-border-bottom-right-radius)
      var(--graupl-border-bottom-left-radius);
    border-style:
      var(--graupl-border-top-style)
      var(--graupl-border-right-style)
      var(--graupl-border-bottom-style)
      var(--graupl-border-left-style)
  }
```

## Border Color

| Class Name | Property | Value |
| --- | --- | --- |
| `.border-primary` | border-color | `var(--graupl-theme-active--primary)` |
| `.border-primary-100` | border-color | `var(--graupl-theme-active--primary--100)` |
| `.border-primary-200` | border-color | `var(--graupl-theme-active--primary--200)` |
| `.border-primary-300` | border-color | `var(--graupl-theme-active--primary--300)` |
| `.border-primary-400` | border-color | `var(--graupl-theme-active--primary--400)` |
| `.border-primary-500` | border-color | `var(--graupl-theme-active--primary--500)` |
| `.border-primary-600` | border-color | `var(--graupl-theme-active--primary--600)` |
| `.border-primary-700` | border-color | `var(--graupl-theme-active--primary--700)` |
| `.border-primary-800` | border-color | `var(--graupl-theme-active--primary--800)` |
| `.border-primary-900` | border-color | `var(--graupl-theme-active--primary--900)` |
| `.border-secondary` | border-color | `var(--graupl-theme-active--secondary)` |
| `.border-secondary-100` | border-color | `var(--graupl-theme-active--secondary--100)` |
| `.border-secondary-200` | border-color | `var(--graupl-theme-active--secondary--200)` |
| `.border-secondary-300` | border-color | `var(--graupl-theme-active--secondary--300)` |
| `.border-secondary-400` | border-color | `var(--graupl-theme-active--secondary--400)` |
| `.border-secondary-500` | border-color | `var(--graupl-theme-active--secondary--500)` |
| `.border-secondary-600` | border-color | `var(--graupl-theme-active--secondary--600)` |
| `.border-secondary-700` | border-color | `var(--graupl-theme-active--secondary--700)` |
| `.border-secondary-800` | border-color | `var(--graupl-theme-active--secondary--800)` |
| `.border-secondary-900` | border-color | `var(--graupl-theme-active--secondary--900)` |
| `.border-tertiary` | border-color | `var(--graupl-theme-active--tertiary)` |
| `.border-tertiary-100` | border-color | `var(--graupl-theme-active--tertiary--100)` |
| `.border-tertiary-200` | border-color | `var(--graupl-theme-active--tertiary--200)` |
| `.border-tertiary-300` | border-color | `var(--graupl-theme-active--tertiary--300)` |
| `.border-tertiary-400` | border-color | `var(--graupl-theme-active--tertiary--400)` |
| `.border-tertiary-500` | border-color | `var(--graupl-theme-active--tertiary--500)` |
| `.border-tertiary-600` | border-color | `var(--graupl-theme-active--tertiary--600)` |
| `.border-tertiary-700` | border-color | `var(--graupl-theme-active--tertiary--700)` |
| `.border-tertiary-800` | border-color | `var(--graupl-theme-active--tertiary--800)` |
| `.border-tertiary-900` | border-color | `var(--graupl-theme-active--tertiary--900)` |
| `.border-transparent` | border-color | `transparent` |

## Border Radius

| Class Name | Property | Value |
| --- | --- | --- |
| `.border-radius-rounded` | border-radius | `100vw` |
| `.border-radius-squared` | border-radius | `0` |
| `.border-radius-0` | border-radius | `var(--graupl-spacer-0)` |
| `.border-radius-1` | border-radius | `var(--graupl-spacer-1)` |
| `.border-radius-2` | border-radius | `var(--graupl-spacer-2)` |
| `.border-radius-3` | border-radius | `var(--graupl-spacer-3)` |
| `.border-radius-4` | border-radius | `var(--graupl-spacer-4)` |
| `.border-radius-5` | border-radius | `var(--graupl-spacer-5)` |
| `.border-radius-6` | border-radius | `var(--graupl-spacer-6)` |
| `.border-radius-7` | border-radius | `var(--graupl-spacer-7)` |
| `.border-radius-8` | border-radius | `var(--graupl-spacer-8)` |
| `.border-radius-9` | border-radius | `var(--graupl-spacer-9)` |
| `.border-radius-10` | border-radius | `var(--graupl-spacer-10)` |

## Border Style

| Class Name | Property | Value |
| --- | --- | --- |
| `.border-solid` | border-style | `solid` |
| `.border-dashed` | border-style | `dashed` |
| `.border-dotted` | border-style | `dotted` |
| `.border-double` | border-style | `double` |
| `.border-groove` | border-style | `groove` |
| `.border-ridge` | border-style | `ridge` |
| `.border-inset` | border-style | `inset` |
| `.border-outset` | border-style | `outset` |
| `.border-none` | border-style | `none` |

## Border Width

| Class Name | Property | Value |
| --- | --- | --- |
| `.border-thick` | border-width | `thick` |
| `.border-thin` | border-width | `thin` |
| `.border-medium` | border-width | `medium` |
| `.border-0` | border-width | `var(--graupl-spacer-0)` |
| `.border-1` | border-width | `var(--graupl-spacer-1)` |
| `.border-2` | border-width | `var(--graupl-spacer-2)` |
| `.border-3` | border-width | `var(--graupl-spacer-3)` |
| `.border-4` | border-width | `var(--graupl-spacer-4)` |
| `.border-5` | border-width | `var(--graupl-spacer-5)` |
| `.border-6` | border-width | `var(--graupl-spacer-6)` |
| `.border-7` | border-width | `var(--graupl-spacer-7)` |
| `.border-8` | border-width | `var(--graupl-spacer-8)` |
| `.border-9` | border-width | `var(--graupl-spacer-9)` |
| `.border-10` | border-width | `var(--graupl-spacer-10)` |

## Customization

To customize the border utilities, you can use the following variables.

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
| `$bordered-selector` | The selector for the bordered class. | `"bordered"` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for border.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
