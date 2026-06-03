# Z Index Utilities

The z-index utilities provide a set of classes to adjust the `z-index` properties of elements.

## Z Index

| Class Name | Property | Value |
| --- | --- | --- |
| [`.z-n1`](#z-n1) | `z-index` | `-1` |
| [`.z-0`](#z-0) | `z-index` | `0` |
| [`.z-1`](#z-1) | `z-index` | `1` |

### `.z-n1`

Sets the `z-index` property to `-1`.

### `.z-0`

Sets the `z-index` property to `0`.

### `.z-1`

Sets the `z-index` property to `0`.

<br><br>

<div class="w-full display-block g-4 gradient gradient-direction-to-top from-transparent to-primary-100 bordered border-primary-700 p-5 h-9 position-relative">
  <div class="bg-tertiary-200 bordered border-tertiary-700 bottom-full pl-3 h-8 m-2 position-relative z-n1">Z Index -1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 w-two-thirds p-4 position-absolute bottom-quarter left-quarter z-0">Z Index 0</div>
  <div class="bg-secondary-400 text-primary-100 bordered border-tertiary-700 p-4 w-10 h-10 left-half top-0 z-1
  position-absolute">Z Index 1</div>
</div>
<br><br>

```html
<div class="p-4 z-0">
  Z Index 0
</div>
```

## Customization

To customize the z-index utilities, you can use the following variables.

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

To generate responsive z-index utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$z-index-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
