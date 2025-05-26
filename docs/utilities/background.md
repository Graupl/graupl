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
| `$selector-base` | `"."` | The base selector for the utility classes. |
| `$use-important` | `true` | A flag to determine if the `!important` flag should be added to the utility classes. |
| `$screen-aware` | `false` | A flag to generate screen-aware utility classes. |
| `$theme-aware` | `false` | A flag to generate theme-aware utility classes. |
| `$state-aware` | `false` | A flag to generate state-aware utility classes. |
| `$container-aware` | `false` | A flag to generate container-aware utility classes. |
| `$screen-aware-separator` | `":"` | The separator for screen-aware utility classes. |
| `$theme-aware-separator` | `":"` | The separator for theme-aware utility classes. |
| `$state-aware-separator` | `":"` | The separator for state-aware utility classes. |
| `$container-aware-separator` | `":"` | The separator for container-aware utility classes. |
| `$screen-aware-selector-prefix` | `""` | The prefix for the screen-aware utility classes. |
| `$theme-aware-selector-prefix` | `""` | The prefix for the theme-aware utility classes. |
| `$state-aware-selector-prefix` | `""` | The prefix for the state-aware utility classes. |
| `$container-aware-selector-prefix` | `"cq:"` | The prefix for the container-aware utility classes. |
| `$background-attachment-selector-prefix` | `"bg-attachment-"` | The prefix for the background attachment utility classes. |
| `$custom-background-attachment-properties` | `()` | The custom properties and values for the background attachment utility classes. |
| `$background-clip-selector-prefix` | `"bg-clip-"` | The prefix for the background clip utility classes. |
| `$custom-background-clip-properties` | `()` | The custom properties and values for the background clip utility classes. |
| `$background-image-selector-prefix` | `"bg-image-"` | The prefix for the background image utility classes. |
| `$custom-background-image-properties` | `()` | The custom properties and values for the background image utility classes. |
| `$background-origin-selector-prefix` | `"bg-origin-"` | The prefix for the background origin utility classes. |
| `$custom-background-origin-properties` | `()` | The custom properties and values for the background origin utility classes. |
| `$background-position-selector-prefix` | `"bg-position-"` | The prefix for the background position utility classes. |
| `$custom-background-position-properties` | `()` | The custom properties and values for the background position utility classes. |
| `$background-repeat-selector-prefix` | `"bg-repeat-"` | The prefix for the background repeat utility classes. |
| `$custom-background-repeat-properties` | `()` | The custom properties and values for the background repeat utility classes. |
| `$background-size-selector-prefix` | `"bg-size-"` | The prefix for the background size utility classes. |
| `$custom-background-size-properties` | `()` | The custom properties and values for the background size utility classes. |

## Responsive variants

To generate responsive background utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
