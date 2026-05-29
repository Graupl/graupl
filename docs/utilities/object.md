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
| `$selector-base` | `"."` | The base selector for the utility classes. |
| `$use-important` | `true` | A flag to determine if the `!important` flag should be added to the utility classes. |
| `$generate-base-utilities` | `true` | A flag to determine if the base utility classes should be generated. |
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
| `$object-fit-selector-prefix` | `"object-fit-"` | The prefix for the object fit utility classes. |
| `$custom-object-fit-properties` | `()` | [DEPRECATED] The custom properties and values for the object fit utility classes. |
| `$object-position-selector-prefix` | `"object-position-"` | The prefix for the object position utility classes. |
| `$custom-object-position-properties` | `()` | [DEPRECATED] The custom properties and values for the object position utility classes. |

## Responsive variants

To generate responsive object utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
