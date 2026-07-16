# Background Utilities

The background utilities provide a set of classes to adjust the `background-attachment`, `background-clip`, `background-image`, `background-origin`, `background-position`, `background-repeat`, and `background-size` properties of elements.

::: tip :pencil2: Note
For `background-color` utility classes, please refer to the [color utilities](./color).
:::

## Background Attachment

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-attachment-scroll` | background-attachment | `scroll` |
| `.bg-attachment-fixed` | background-attachment | `fixed` |
| `.bg-attachment-local` | background-attachment | `local` |

## Background Clip

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-clip-border-box` | background-clip | `border-box` |
| `.bg-clip-padding-box` | background-clip | `padding-box` |
| `.bg-clip-content-box` | background-clip | `content-box` |
| `.bg-clip-text` | background-clip | `text` |
| `.bg-clip-border-area` | background-clip | `border-area` |

## Background Image

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-image-none` | background-image | `none` |

## Background Origin

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-origin-border-box` | background-origin | `border-box` |
| `.bg-origin-padding-box` | background-origin | `padding-box` |
| `.bg-origin-content-box` | background-origin | `content-box` |

## Background Position

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-position-top` | background-position | `top` |
| `.bg-position-right` | background-position | `right` |
| `.bg-position-bottom` | background-position | `bottom` |
| `.bg-position-left` | background-position | `left` |
| `.bg-position-center` | background-position | `center` |

## Background Repeat

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-repeat-repeat` | background-repeat | `repeat` |
| `.bg-repeat-repeat-x` | background-repeat | `repeat-x` |
| `.bg-repeat-repeat-y` | background-repeat | `repeat-y` |
| `.bg-repeat-space` | background-repeat | `space` |
| `.bg-repeat-round` | background-repeat | `round` |
| `.bg-repeat-no-repeat` | background-repeat | `no-repeat` |

## Background Size

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-size-auto` | background-size | `auto` |
| `.bg-size-cover` | background-size | `cover` |
| `.bg-size-contain` | background-size | `contain` |

## Customization

To customize the background utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for background.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
