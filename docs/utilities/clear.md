# Clear Utilities

The clear utilities provide a set of classes to adjust the `clear` properties of elements while using `float` on an above element.

## `.clear`

Applies the default clear styling to an element.

## Clear

| Class Name | Property | Value |
| --- | --- | --- |
| [`.clear-none`](#clear-none) | `clear` | `none` |
| [`.clear-left`](#clear-left) | `clear` | `left` |
| [`.clear-right`](#clear-right) | `clear` | `right` |
| [`.clear-both`](#clear-both) | `clear` | `both` |
| [`.clear-inline-start`](#clear-inline-start) | `clear` | `inline-start` |
| [`.clear-inline-end`](#clear-inline-end) | `clear` | `inline-end` |

### `.clear-none`

Sets the `clear` property to `none`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-5 float-left w-half">Item Float Left</div>
  <div class="bg-primary-200 bordered border-tertiary-700 float-right w-quarter p-6">Item Float right</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 clear-none">Item Clear none</div>
</div>

```html
<div class="p-4 clear-none">
  Item Clear None
</div>
```

### `.clear-left`

Sets the `clear` property to `left`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-5 float-left w-half">Item Float Left</div>
  <div class="bg-primary-200 bordered border-tertiary-700 float-right w-quarter p-6">Item Float Right</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 clear-left">Item Clear left</div>
</div>

```html
<div class="p-4 clear-left">
  Item Clear left
</div>
```

### `.clear-right`

Sets the `clear` property to `right`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-5 float-left w-half">Item Float Left</div>
  <div class="bg-primary-200 bordered border-tertiary-700 float-right w-quarter p-6">Item Float Right</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 clear-right">Item Clear right</div>
</div>

```html
<div class="p-4 clear-right">
  Item Clear right
</div>
```

### `.clear-both`

Sets the `clear` property to `both`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-5 float-left w-half">Item Float Left</div>
  <div class="bg-primary-200 bordered border-tertiary-700 float-right w-quarter p-6">Item Float right</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 clear-both">Item Clear both</div>
</div>

```html
<div class="p-4 clear-both">
  Item Clear both
</div>
```

### `.clear-inline-start`

Sets the `clear` property to `inline-start`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-5 float-left w-half">Item Float Left</div>
  <div class="bg-primary-200 bordered border-tertiary-700 float-right w-quarter p-6">Item Float Right</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 clear-inline-start">Item Clear Inline Start</div>
</div>

```html
<div class="p-4 clear-inline-start">
  Item Clear Inline Start
</div>
```

### `.clear-inline-end`

Sets the `clear` property to `inline-end`.

<div class="w-full display-flow-root g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-5 float-left w-half">Item Float Left</div>
  <div class="bg-primary-200 bordered border-tertiary-700 float-right w-quarter p-6">Item Float Right</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 clear-inline-end">Item Clear Inline End</div>
</div>

```html
<div class="p-4 clear-inline-end">
  Item Clear Inline End
</div>
```

## Customization

To customize the clear utilities, you can use the following variables.

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

To generate responsive clear utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
