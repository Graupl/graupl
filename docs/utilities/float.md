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
| `$float-selector-prefix` | `"float-"` | The prefix for the float utility classes. |
| `$float-properties` | `()` | Map of the float utility values. |

## Responsive variants

To generate responsive float utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
