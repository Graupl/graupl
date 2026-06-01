# Float Utilities

The float utilities provide a set of classes to adjust the `float` properties of elements.

## `.float`

Applies the default float styling to an element.

## Float

| Class Name | Property | Value |
| --- | --- | --- |
| [`.float-none`](#float-none) | `float` | `none` |
| [`.float-left`](#float-left) | `float` | `left` |
| [`.float-right`](#float-right) | `float` | `right` |
| [`.float-inline-start`](#float-inline-start) | `float` | `inline-start` |
| [`.float-inline-end`](#float-inline-end) | `float` | `inline-end` |

### `.float-none`

Sets the `float` property to `none`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-half">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 float-none">Item Float none</div>
</div>

```html
<div class="p-4 float-none">
  Item Float None
</div>
```

### `.float-left`

Sets the `float` property to `left`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-half">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 float-left">Item Float left</div>
</div>

```html
<div class="p-4 float-left">
  Item Float left
</div>
```

### `.float-right`

Sets the `float` property to `right`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-half">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 float-right">Item Float right</div>
</div>

```html
<div class="p-4 float-right">
  Item Float right
</div>
```

### `.float-inline-start`

Sets the `float` property to `inline-start`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-half">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 float-inline-start">Item Float Inline Start</div>
</div>

```html
<div class="p-4 float-inline-start">
  Item Float Inline Start
</div>
```

### `.float-inline-end`

Sets the `float` property to `inline-end`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-half">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 float-inline-end">Item Float Inline End</div>
</div>

```html
<div class="p-4 float-inline-end">
  Item Float Inline End
</div>
```

## Customization

To customize the float utilities, you can use the following variables.

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

To generate responsive float utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
