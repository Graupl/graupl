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
| `$clear-selector-prefix` | `"clear-"` | The prefix for the clear utility classes. |
| `$clear-properties` | `()` | Map of the clear utility values. |

## Responsive variants

To generate responsive clear utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
