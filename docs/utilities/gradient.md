# Gradient Utilities

The gradient utilities provide a set of classes to adjust the color `gradient` properties of elements.

## Gradient colors

### Gradient Color Direction

| Class Name | Property | Value |
| --- | --- | --- |
| [`.gradient`](#gradient) | `background-image` | `linear-gradient` |
| [`.linear`](#linear) | `background-image` | `linear-gradient` |
| [`.radial`](#radial) | `background-image` | `radial-gradient` |
| [`.to-top`](#to-top) | `--graupl-gradient-direction` | `to top` |
| [`.to-right`](#to-right) | `--graupl-gradient-direction` | `to right` |
| [`.to-bottom`](#to-bottom) | `--graupl-gradient-direction` | `to bottom` |
| [`.to-left`](#to-left) | `--graupl-gradient-direction` | `to left` |
| [`.circle`](#circle) | `--graupl-gradient-direction` | `circle` |
| [`.circle-at-top`](#circle-at-top) | `--graupl-gradient-direction` | `circle at top` |
| [`.circle-at-right`](#circle-at-right) | `--graupl-gradient-direction` | `circle at right` |
| [`.circle-at-bottom`](#circle-at-bottom) | `--graupl-gradient-direction` | `circle at bottom` |
| [`.circle-at-left`](#circle-at-left) | `--graupl-gradient-direction` | `circle at left` |
| [`.ellipse`](#ellipse) | `--graupl-gradient-direction` | `ellipse` |
| [`.ellipse-at-top`](#ellipse-at-top) | `--graupl-gradient-direction` | `ellipse at top` |
| [`.ellipse-at-right`](#ellipse-at-right) | `--graupl-gradient-direction` | `ellipse at right` |
| [`.ellipse-at-bottom`](#ellipse-at-bottom) | `--graupl-gradient-direction` | `ellipse at bottom` |
| [`.ellipse-at-left`](#ellipse-at-left) | `--graupl-gradient-direction` | `ellipse at left` |
| [`.ellipse-at-left`](#ellipse-at-left) | `--graupl-gradient-direction` | `ellipse at left` |
| [`.closest-side`](#closest-side) | `--graupl-gradient-direction` | `closest-side` |
| [`.closest-corner`](#closest-corner) | `--graupl-gradient-direction` | `closest-corner` |
| [`.farthest-side`](#farthest-side) | `--graupl-gradient-direction` | `farthest-side` |
| [`.farthest-corner`](#farthest-corner) | `--graupl-gradient-direction` | `farthest-corner` |

## Gradient From Color

| Class Name | Property | Value |
| --- | --- | --- |
| [`.from-transparent`](#from-transparent) | `background` | `transparent` |
| [`.from-primary-100`](#from-primary-100) | `background` | `var(--graupl-theme-active--primary--100)` |
| [`.from-primary-200`](#from-primary-200) | `background` | `var(--graupl-theme-active--primary--200)` |
| [`.from-primary-300`](#from-primary-300) | `background` | `var(--graupl-theme-active--primary--300)` |
| [`.from-primary-400`](#from-primary-400) | `background` | `var(--graupl-theme-active--primary--400)` |
| [`.from-primary-500`](#from-primary-500) | `background` | `var(--graupl-theme-active--primary--500)` |
| [`.from-primary-600`](#from-primary-600) | `background` | `var(--graupl-theme-active--primary--600)` |
| [`.from-primary-700`](#from-primary-700) | `background` | `var(--graupl-theme-active--primary--700)` |
| [`.from-primary-800`](#from-primary-800) | `background` | `var(--graupl-theme-active--primary--800)` |
| [`.from-primary-900`](#from-primary-900) | `background` | `var(--graupl-theme-active--primary--900)` |
| [`.from-secondary-100`](#from-secondary-100) | `background` | `var(--graupl-theme-active--secondary--100)` |
| [`.from-secondary-200`](#from-secondary-200) | `background` | `var(--graupl-theme-active--secondary--200)` |
| [`.from-secondary-300`](#from-secondary-300) | `background` | `var(--graupl-theme-active--secondary--300)` |
| [`.from-secondary-400`](#from-secondary-400) | `background` | `var(--graupl-theme-active--secondary--400)` |
| [`.from-secondary-500`](#from-secondary-500) | `background` | `var(--graupl-theme-active--secondary--500)` |
| [`.from-secondary-600`](#from-secondary-600) | `background` | `var(--graupl-theme-active--secondary--600)` |
| [`.from-secondary-700`](#from-secondary-700) | `background` | `var(--graupl-theme-active--secondary--700)` |
| [`.from-secondary-800`](#from-secondary-800) | `background` | `var(--graupl-theme-active--secondary--800)` |
| [`.from-secondary-900`](#from-secondary-900) | `background` | `var(--graupl-theme-active--secondary--900)` |
| [`.from-tertiary-100`](#from-tertiary-100) | `background` | `var(--graupl-theme-active--tertiary--100)` |
| [`.from-tertiary-200`](#from-tertiary-200) | `background` | `var(--graupl-theme-active--tertiary--200)` |
| [`.from-tertiary-300`](#from-tertiary-300) | `background` | `var(--graupl-theme-active--tertiary--300)` |
| [`.from-tertiary-400`](#from-tertiary-400) | `background` | `var(--graupl-theme-active--tertiary--400)` |
| [`.from-tertiary-500`](#from-tertiary-500) | `background` | `var(--graupl-theme-active--tertiary--500)` |
| [`.from-tertiary-600`](#from-tertiary-600) | `background` | `var(--graupl-theme-active--tertiary--600)` |
| [`.from-tertiary-700`](#from-tertiary-700) | `background` | `var(--graupl-theme-active--tertiary--700)` |
| [`.from-tertiary-800`](#from-tertiary-800) | `background` | `var(--graupl-theme-active--tertiary--800)` |
| [`.from-tertiary-900`](#from-tertiary-900) | `background` | `var(--graupl-theme-active--tertiary--900)` |

### `.from-transparent`

Sets the `background` property to `transparent`.

### `.from-primary-100`

Sets the `background` property to `var(--graupl-theme-active--primary--100)`.

### `.from-primary-200`

Sets the `background` property to `var(--graupl-theme-active--primary--200)`.

### `.from-primary-300`

Sets the `background` property to `var(--graupl-theme-active--primary--300)`.

### `.from-primary-400`

Sets the `background` property to `var(--graupl-theme-active--primary--400)`.

### `.from-primary-500`

Sets the `background` property to `var(--graupl-theme-active--primary--500)`.

### `.from-primary-600`

Sets the `background` property to `var(--graupl-theme-active--primary--600)`.

### `.from-primary-700`

Sets the `background` property to `var(--graupl-theme-active--primary--700)`.

### `.from-primary-800`

Sets the `background` property to `var(--graupl-theme-active--primary--800)`.

### `.from-primary-900`

Sets the `background` property to `var(--graupl-theme-active--primary--900)`.

### `.from-secondary-100`

Sets the `background` property to `var(--graupl-theme-active--secondary--100)`.

### `.from-secondary-200`

Sets the `background` property to `var(--graupl-theme-active--secondary--200)`.

### `.from-secondary-300`

Sets the `background` property to `var(--graupl-theme-active--secondary--300)`.

### `.from-secondary-400`

Sets the `background` property to `var(--graupl-theme-active--secondary--400)`.

### `.from-secondary-500`

Sets the `background` property to `var(--graupl-theme-active--secondary--500)`.

### `.from-secondary-600`

Sets the `background` property to `var(--graupl-theme-active--secondary--600)`.

### `.from-secondary-700`

Sets the `background` property to `var(--graupl-theme-active--secondary--700)`.

### `.from-secondary-800`

Sets the `background` property to `var(--graupl-theme-active--secondary--800)`.

### `.from-secondary-900`

Sets the `background` property to `var(--graupl-theme-active--secondary--900)`.

### `.from-tertiary-100`

Sets the `background` property to `var(--graupl-theme-active--tertiary--100)`.

### `.from-tertiary-200`

Sets the `background` property to `var(--graupl-theme-active--tertiary--200)`.

### `.from-tertiary-300`

Sets the `background` property to `var(--graupl-theme-active--tertiary--300)`.

### `.from-tertiary-400`

Sets the `background` property to `var(--graupl-theme-active--tertiary--400)`.

### `.from-tertiary-500`

Sets the `background` property to `var(--graupl-theme-active--tertiary--500)`.

### `.from-tertiary-600`

Sets the `background` property to `var(--graupl-theme-active--tertiary--600)`.

### `.from-tertiary-700`

Sets the `background` property to `var(--graupl-theme-active--tertiary--700)`.

### `.from-tertiary-800`

Sets the `background` property to `var(--graupl-theme-active--tertiary--800)`.

### `.from-tertiary-900`

Sets the `background` property to `var(--graupl-theme-active--tertiary--900)`.


## Gradient To Color

| Class Name | Property | Value |
| --- | --- | --- |
| [`.to-transparent`](#to-transparent) | `background` | `transparent` |
| [`.to-primary-100`](#to-primary-100) | `background` | `var(--graupl-theme-active--primary--100)` |
| [`.to-primary-200`](#to-primary-200) | `background` | `var(--graupl-theme-active--primary--200)` |
| [`.to-primary-300`](#to-primary-300) | `background` | `var(--graupl-theme-active--primary--300)` |
| [`.to-primary-400`](#to-primary-400) | `background` | `var(--graupl-theme-active--primary--400)` |
| [`.to-primary-500`](#to-primary-500) | `background` | `var(--graupl-theme-active--primary--500)` |
| [`.to-primary-600`](#to-primary-600) | `background` | `var(--graupl-theme-active--primary--600)` |
| [`.to-primary-700`](#to-primary-700) | `background` | `var(--graupl-theme-active--primary--700)` |
| [`.to-primary-800`](#to-primary-800) | `background` | `var(--graupl-theme-active--primary--800)` |
| [`.to-primary-900`](#to-primary-900) | `background` | `var(--graupl-theme-active--primary--900)` |
| [`.to-secondary-100`](#to-secondary-100) | `background` | `var(--graupl-theme-active--secondary--100)` |
| [`.to-secondary-200`](#to-secondary-200) | `background` | `var(--graupl-theme-active--secondary--200)` |
| [`.to-secondary-300`](#to-secondary-300) | `background` | `var(--graupl-theme-active--secondary--300)` |
| [`.to-secondary-400`](#to-secondary-400) | `background` | `var(--graupl-theme-active--secondary--400)` |
| [`.to-secondary-500`](#to-secondary-500) | `background` | `var(--graupl-theme-active--secondary--500)` |
| [`.to-secondary-600`](#to-secondary-600) | `background` | `var(--graupl-theme-active--secondary--600)` |
| [`.to-secondary-700`](#to-secondary-700) | `background` | `var(--graupl-theme-active--secondary--700)` |
| [`.to-secondary-800`](#to-secondary-800) | `background` | `var(--graupl-theme-active--secondary--800)` |
| [`.to-secondary-900`](#to-secondary-900) | `background` | `var(--graupl-theme-active--secondary--900)` |
| [`.to-tertiary-100`](#to-tertiary-100) | `background` | `var(--graupl-theme-active--tertiary--100)` |
| [`.to-tertiary-200`](#to-tertiary-200) | `background` | `var(--graupl-theme-active--tertiary--200)` |
| [`.to-tertiary-300`](#to-tertiary-300) | `background` | `var(--graupl-theme-active--tertiary--300)` |
| [`.to-tertiary-400`](#to-tertiary-400) | `background` | `var(--graupl-theme-active--tertiary--400)` |
| [`.to-tertiary-500`](#to-tertiary-500) | `background` | `var(--graupl-theme-active--tertiary--500)` |
| [`.to-tertiary-600`](#to-tertiary-600) | `background` | `var(--graupl-theme-active--tertiary--600)` |
| [`.to-tertiary-700`](#to-tertiary-700) | `background` | `var(--graupl-theme-active--tertiary--700)` |
| [`.to-tertiary-800`](#to-tertiary-800) | `background` | `var(--graupl-theme-active--tertiary--800)` |
| [`.to-tertiary-900`](#to-tertiary-900) | `background` | `var(--graupl-theme-active--tertiary--900)` |

### `.to-transparent`

Sets the `color` property to `transparent`.

### `.to-primary-100`

Sets the `color` property to `var(--graupl-theme-active--primary--100)`.

### `.to-primary-200`

Sets the `color` property to `var(--graupl-theme-active--primary--200)`.

### `.to-primary-300`

Sets the `color` property to `var(--graupl-theme-active--primary--300)`.

### `.to-primary-400`

Sets the `color` property to `var(--graupl-theme-active--primary--400)`.

### `.to-primary-500`

Sets the `color` property to `var(--graupl-theme-active--primary--500)`.

### `.to-primary-600`

Sets the `color` property to `var(--graupl-theme-active--primary--600)`.

### `.to-primary-700`

Sets the `color` property to `var(--graupl-theme-active--primary--700)`.

### `.to-primary-800`

Sets the `color` property to `var(--graupl-theme-active--primary--800)`.

### `.to-primary-900`

Sets the `color` property to `var(--graupl-theme-active--primary--900)`.

### `.to-secondary-100`

Sets the `color` property to `var(--graupl-theme-active--secondary--100)`.

### `.to-secondary-200`

Sets the `color` property to `var(--graupl-theme-active--secondary--200)`.

### `.to-secondary-300`

Sets the `color` property to `var(--graupl-theme-active--secondary--300)`.

### `.to-secondary-400`

Sets the `color` property to `var(--graupl-theme-active--secondary--400)`.

### `.to-secondary-500`

Sets the `color` property to `var(--graupl-theme-active--secondary--500)`.

### `.to-secondary-600`

Sets the `color` property to `var(--graupl-theme-active--secondary--600)`.

### `.to-secondary-700`

Sets the `color` property to `var(--graupl-theme-active--secondary--700)`.

### `.to-secondary-800`

Sets the `color` property to `var(--graupl-theme-active--secondary--800)`.

### `.to-secondary-900`

Sets the `color` property to `var(--graupl-theme-active--secondary--900)`.

### `.to-tertiary-100`

Sets the `color` property to `var(--graupl-theme-active--tertiary--100)`.

### `.to-tertiary-200`

Sets the `color` property to `var(--graupl-theme-active--tertiary--200)`.

### `.to-tertiary-300`

Sets the `color` property to `var(--graupl-theme-active--tertiary--300)`.

### `.to-tertiary-400`

Sets the `color` property to `var(--graupl-theme-active--tertiary--400)`.

### `.to-tertiary-500`

Sets the `color` property to `var(--graupl-theme-active--tertiary--500)`.

### `.to-tertiary-600`

Sets the `color` property to `var(--graupl-theme-active--tertiary--600)`.

### `.to-tertiary-700`

Sets the `color` property to `var(--graupl-theme-active--tertiary--700)`.

### `.to-tertiary-800`

Sets the `color` property to `var(--graupl-theme-active--tertiary--800)`.

### `.to-tertiary-900`

Sets the `color` property to `var(--graupl-theme-active--tertiary--900)`.

## Custom Gradient Properties

| Class Name | Property | Value |
| --- | --- | --- |
| [`---graupl-gradient-from`](#--graupl-gradient-from) | `Starting color used by generated gradients` | `transparent` |
| [`---graupl-gradient-from-position`](#--graupl-gradient-from-position) | `Start color stop position used for generated gradients` | `0%` |
| [`---graupl-gradient-to`](#--graupl-gradient-to) | `Ending color used by generated gradients` | `transparent` |
| [`---graupl-gradient-to-position`](#--graupl-gradient-to-position) | `End color stop position used for generated gradients` | `100%` |
| [`---graupl-gradient-direction`](#--graupl-gradient-direction) | `Direction/shape keyword consumed by gradient utilities` | `to right` (linear), `circle` (radial) |

## Customization

To customize the color utilities, you can use the following variables.

| Variable | Default Value | Description |
| --- | --- | --- |
| `$selector-base` | `"."` | The base selector for the utility classes. |
| `$use-important` | `true` | A flag to determine if the `!important` flag should be added to the utility classes. |
| `$generate-base-utilities` | `true` | A flag to determine if the base utility classes should be generated. |
| `$screen-aware` | `false` | A flag to generate screen-aware utility classes. |
| `$theme-aware` | `true` | A flag to generate theme-aware utility classes. |
| `$state-aware` | `true` | A flag to generate state-aware utility classes. |
| `$container-aware` | `false` | A flag to generate container-aware utility classes. |
| `$screen-aware-separator` | `":"` | The separator for screen-aware utility classes. |
| `$theme-aware-separator` | `":"` | The separator for theme-aware utility classes. |
| `$state-aware-separator` | `":"` | The separator for state-aware utility classes. |
| `$container-aware-separator` | `":"` | The separator for container-aware utility classes. |
| `$screen-aware-selector-prefix` | `""` | The prefix for the screen-aware utility classes. |
| `$theme-aware-selector-prefix` | `""` | The prefix for the theme-aware utility classes. |
| `$state-aware-selector-prefix` | `""` | The prefix for the state-aware utility classes. |
| `$container-aware-selector-prefix` | `"cq:"` | The prefix for the container-aware utility classes. |
| `$gradient-selector` | Selector for the base gradient utility. | `"gradient"` |
| `$gradient-type-selector-prefix` | Prefix for gradient type utilities. | `""` |
| `$gradient-direction-selector-prefix`| Prefix for gradient direction utilities. | `""` |
| `$gradient-color-selector-prefix`| Prefix for gradient color utilities. | `""` |
| `$gradient-color-from-selector-` | Prefix for gradient “from” color utilities. | `"from-"` |
| `$gradient-color-to-selector-` | Prefix for gradient “to" color utilities. | `"to-"` |
| `$gradient-types` | Map of gradient types. | `map.. ($-gradien-types, $gradient-types)` |
| `$gradient-directions` | Map of gradient direction keywords. | `map. merge($gradient-directions, $gradient-directions)` |
| `$gradient-colors` | Map of gradient colours (includes theme shades and transparent) | `map.merge($-gradient-colors, $gradient-colors)` |

## Responsive variants

To generate responsive color utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, theme-aware and state-aware utility classes are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
