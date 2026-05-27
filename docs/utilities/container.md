# Container Utilities

The container utilities provide a set of classes to adjust the `container-type` properties of elements.

## `.container`

Applies the default container styling to an element.

## Container

| Class Name | Property | Value |
| --- | --- | --- |
| [`.container-type-inline`](#container-type-inline) | `container` | inline-size |
| [`.container-type-normal`](#container-type-normal) | `container` | normal |
| [`.container-type-size`](#container-type-size) | `container` | size |
| [`.container-type-scroll`](#container-type-scroll) | `container` | scroll-state |

### `.container-type-inline`

Sets the `container-type` property to `inline-size`.

### `.container-type-normal`

Sets the `container-type` property to `normal`.

### `.container-type-size`

Sets the `container-type` property to `size`.

### `.container-type-scroll`

Sets the `container-type` property to `scroll-state`.

## Customization

To customize the container utilities, you can use the following variables.

| Variable | Default Value | Description |
| --- | --- | --- |
| `$selector-base` | `"."` | The base selector for the utility classes. |
| `$use-important` | `true` | A flag to determine if the `!important` flag should be added to the utility classes. |
| `$generate-base-utilities` | `true` | A flag to determine if the base utility classes should be generated. |
| `$screen-aware` | `true` | A flag to generate screen-aware utility classes. |
| `$theme-aware` | `false` | A flag to generate theme-aware utility classes. |
| `$state-aware` | `false` | A flag to generate state-aware utility classes. |
| `$container-aware` | `true` | A flag to generate container-aware utility classes. |
| `$screen-aware-separator` | `"\\:"` | The separator for screen-aware utility classes. |
| `$theme-aware-separator` | `"\\:"` | The separator for theme-aware utility classes. |
| `$state-aware-separator` | `"\\:"` | The separator for state-aware utility classes. |
| `$container-aware-separator` | `"\\:"` | The separator for container-aware utility classes. |
| `$screen-aware-selector-prefix` | `""` | The prefix for the screen-aware utility classes. |
| `$theme-aware-selector-prefix` | `""` | The prefix for the theme-aware utility classes. |
| `$state-aware-selector-prefix` | `""` | The prefix for the state-aware utility classes. |
| `$container-aware-selector-prefix` | `"cq\\:"` | The prefix for the container-aware utility classes. |
| `$container-type-selector-prefix` | `"container-type-"` | The prefix for the container utility classes. |
| `$container-type-properties` | `()` | Map of the container utility values. |

## Responsive variants

To generate responsive container utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
