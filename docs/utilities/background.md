# Background Utilities

The background utilities provide a set of classes to adjust the `bg-attachment`, `bg-clip`, `bg-image`, `bg-origin`, `bg-position`, `bg-repeat`, and `bg-size` properties of elements.

::: tip :pencil2: Note
For `background-color` utility classes, please refer to the [color utilities](./color).
:::

## Background Attachment

| Class Name | Property | Value |
| --- | --- | --- |
| [`.bg-attachment-scroll`](#bg-attachment-scroll) | `background-attachment` | `scroll` |
| [`.bg-attachment-fixed`](#bg-attachment-fixed) | `background-attachment` | `fixed` |
| [`.bg-attachment-local`](#bg-attachment-local) | `background-attachment` | `local` |

### `.bg-attachment-scroll`

Sets the `background-attachment` property to `scroll`.

### `.bg-attachment-fixed`

Sets the `background-attachment` property to `fixed`.

### `.bg-attachment-local`

Sets the `background-attachment` property to `local`.

## Background Clip

| Class Name | Property | Value |
| --- | --- | --- |
| [`.bg-clip-border-box`](#bg-clip-border-box) | `background-clip` | `border-box` |
| [`.bg-clip-padding-box`](#bg-clip-padding-box) | `background-clip` | `padding-box` |
| [`.bg-clip-content-box`](#bg-clip-content-box) | `background-clip` | `content-box` |
| [`.bg-clip-text`](#bg-clip-text) | `background-clip` | `text` |

### `.bg-clip-border-box`

Sets the `background-clip` property to `border-box`.

### `.bg-clip-padding-box`

Sets the `background-clip` property to `padding-box`.

### `.bg-clip-content-box`

Sets the `background-clip` property to `content-box`.

### `.bg-clip-text`

Sets the `background-clip` property to `text`.

## Background Image

| Class Name | Property | Value |
| --- | --- | --- |
| [`.bg-image-none`](#bg-image-none) | `background-image` | `none` |

### `.bg-image-none`

Sets the `background-image` property to `none`.

## Background Position

| Class Name | Property | Value |
| --- | --- | --- |
| [`.bg-position-top`](#bg-position-top) | `background-position` | `top` |
| [`.bg-position-right`](#bg-position-right) | `background-position` | `right` |
| [`.bg-position-bottom`](#bg-position-bottom) | `background-position` | `bottom` |
| [`.bg-position-left`](#bg-position-left) | `background-position` | `left` |
| [`.bg-position-center`](#bg-position-center) | `background-position` | `center` |

### `.bg-position-top`

Sets the `background-position` property to `top`.

### `.bg-position-right`

Sets the `background-position` property to `right`.

### `.bg-position-bottom`

Sets the `background-position` property to `bottom`.

### `.bg-position-left`

Sets the `background-position` property to `left`.

### `.bg-position-center`

Sets the `background-position` property to `center`.

## Background Repeat

| Class Name | Property | Value |
| --- | --- | --- |
| [`.bg-repeat-repeat`](#bg-repeat-repeat) | `background-repeat` | `repeat` |
| [`.bg-repeat-repeat-x`](#bg-repeat-repeat-x) | `background-repeat` | `repeat-x` |
| [`.bg-repeat-repeat-y`](#bg-repeat-repeat-y) | `background-repeat` | `repeat-y` |
| [`.bg-repeat-space`](#bg-repeat-space) | `background-repeat` | `space` |
| [`.bg-repeat-round`](#bg-repeat-round) | `background-repeat` | `round` |
| [`.bg-repeat-no-repeat`](#bg-repeat-no-repeat) | `background-repeat` | `no-repeat` |

### `.bg-repeat-repeat`

Sets the `background-repeat` property to `repeat`.

### `.bg-repeat-repeat-x`

Sets the `background-repeat` property to `repeat-x`.

### `.bg-repeat-repeat-y`

Sets the `background-repeat` property to `repeat-y`.

### `.bg-repeat-space`

Sets the `background-repeat` property to `space`.

### `.bg-repeat-round`

Sets the `background-repeat` property to `round`.

### `.bg-repeat-no-repeat`

Sets the `background-repeat` property to `no-repeat`.

## Background Size

| Class Name | Property | Value |
| --- | --- | --- |
| [`.bg-size-auto`](#bg-size-auto) | `background-size` | `auto` |
| [`.bg-size-cover`](#bg-size-cover) | `background-size` | `cover` |
| [`.bg-size-contain`](#bg-size-contain) | `background-size` | `contain` |

### `.bg-size-auto`

Sets the `background-size` property to `auto`.

### `.bg-size-cover`

Sets the `background-size` property to `cover`.

### `.bg-size-contain`

Sets the `background-size` property to `contain`.

## Customization

To customize the background utilities, you can use the following variables.

| Variable | Default Value | Description |
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

## Responsive variants

To generate responsive background utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
