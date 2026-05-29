# Position Utilities

The position utilities provide a set of classes to adjust the `position` properties of elements.

## Position

| Class Name | Property | Value |
| --- | --- | --- |
| [`.position-static`](#position-static) | `position` | static |
| [`.position-fixed`](#position-fixed) | `position` | fixed |
| [`.position-absolute`](#position-absolute) | `position-absolute` | absolute |
| [`.position-relative`](#position-relative) | `position` | relative |
| [`.position-sticky`](#position-sticky) | `position` | sticky |

### `.position-static`

Sets the `position` property to `static`.

### `.position-fixed`

Sets the `position` property to `fixed`.

### `.position-absolute`

Sets the `position-absolute` property to `absolute`.

### `.position-relative`

Sets the `position` property to `relative`.

### `.position-sticky`

Sets the `position` property to `sticky`.

## Customization

To customize the position utilities, you can use the following variables.

| Variable | Default Value | Description |
| --- | --- | --- |
| `$selector-base` | `"."` | The base selector for the utility classes. |
| `$use-important` | `true` | A flag to determine if the `!important` flag should be added to the utility classes. |
| `$generate-base-utilities` | `true` | A flag to determine if the base utility classes should be generated. |
| `$screen-aware` | `true` | A flag to generate screen-aware utility classes. |
| `$theme-aware` | `false` | A flag to generate theme-aware utility classes. |
| `$state-aware` | `false` | A flag to generate state-aware utility classes. |
| `$position-aware` | `true` | A flag to generate position-aware utility classes. |
| `$screen-aware-separator` | `"\\:"` | The separator for screen-aware utility classes. |
| `$theme-aware-separator` | `"\\:"` | The separator for theme-aware utility classes. |
| `$state-aware-separator` | `"\\:"` | The separator for state-aware utility classes. |
| `$position-aware-separator` | `"\\:"` | The separator for position-aware utility classes. |
| `$screen-aware-selector-prefix` | `""` | The prefix for the screen-aware utility classes. |
| `$theme-aware-selector-prefix` | `""` | The prefix for the theme-aware utility classes. |
| `$state-aware-selector-prefix` | `""` | The prefix for the state-aware utility classes. |
| `$position-aware-selector-prefix` | `"cq\\:"` | The prefix for the position-aware utility classes. |
| `$position-selector-prefix` | `"position-"` | The prefix for the position utility classes. |
| `$position-properties` | `()` | Map of the position utility values. |

## Responsive variants

To generate responsive position utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$position-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
