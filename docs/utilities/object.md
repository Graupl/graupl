# Object Utilities

The object utilities provide a set of classes to adjust the `object-fit`, and `object-position` properties of elements.

## Object Fit

| Class Name | Property | Value |
| --- | --- | --- |
| [`.object-fill`](#object-fill) | `object-fit` | `fill` |
| [`.object-contain`](#object-contain) | `object-fit` | `contain` |
| [`.object-cover`](#object-cover) | `object-fit` | `cover` |
| [`.object-none`](#object-none) | `object-fit` | `none` |
| [`.object-scale-down`](#object-scale-down) | `object-fit` | `scale-down` |

### `.object-fill`

Sets the `object-fit` property to `scroll`.

### `.object-contain`

Sets the `object-fit` property to `contain`.

### `.object-cover`

Sets the `object-fit` property to `cover`.

### `.object-none`

Sets the `object-fit` property to `none`.

### `.object-scale-down`

Sets the `object-fit` property to `scale-down`.

## Object Position

| Class Name | Property | Value |
| --- | --- | --- |
| [`.object-position-top`](#object-position-top) | `object-position` | `top` |
| [`.object-position-right`](#object-position-right) | `object-position` | `right` |
| [`.object-position-bottom`](#object-position-bottom) | `object-position` | `bottom` |
| [`.object-position-left`](#object-position-left) | `object-position` | `left` |
| [`.object-position-center`](#object-position-center) | `object-position` | `center` |

### `.object-position-top`

Sets the `object-position` property to `top`.

### `.object-position-right`

Sets the `object-position` property to `right`.

### `.object-position-bottom`

Sets the `object-position` property to `bottom`.

### `.object-position-left`

Sets the `object-position` property to `left`.

### `.object-position-center`

Sets the `object-position` property to `center`.

## Customization

To customize the object utilities, you can use the following variables.

| Variable | Default Value | Description |
| --- | --- | --- |
| `$selector-base` | `"."` | The base selector for the utility | `$selector-base` | Base selector for utility classes. | `"."` |
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

## Responsive variants

To generate responsive object utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
