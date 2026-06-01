# Alignment Utilities

The alignment utilities provide a set of classes to adjust the `align-content`, `align-items`, and `align-self` properties of elements.

## Align content

| Class Name | Property | Value |
| --- | --- | --- |
| [`.align-content-normal`](#align-content-normal) | align-content | normal |
| [`.align-content-start`](#align-content-start) | align-content | flex-start |
| [`.align-content-end`](#align-content-end) | align-content | flex-end |
| [`.align-content-center`](#align-content-center) | align-content | center |
| [`.align-content-between`](#align-content-between) | align-content | space-between |
| [`.align-content-around`](#align-content-around) | align-content | space-around |
| [`.align-content-evenly`](#align-content-evenly) | align-content | space-evenly |
| [`.align-content-baseline`](#align-content-baseline) | align-content | baseline |
| [`.align-content-stretch`](#align-content-stretch) | align-content | stretch |

### `.align-content-normal`

Sets the `align-content` property to `normal`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-normal">
  <!-- Content here -->
</div>
```

### `.align-content-start`

Sets the `align-content` property to `flex-start`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-start p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-start">
  <!-- Content here -->
</div>
```

### `.align-content-end`

Sets the `align-content` property to `flex-end`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-end p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-end">
  <!-- Content here -->
</div>
```

### `.align-content-center`

Sets the `align-content` property to `center`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-center p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-center">
  <!-- Content here -->
</div>
```

### `.align-content-between`

Sets the `align-content` property to `space-between`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-between p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-between">
  <!-- Content here -->
</div>
```

### `.align-content-around`

Sets the `align-content` property to `space-around`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-around p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-around">
  <!-- Content here -->
</div>
```

### `.align-content-evenly`

Sets the `align-content` property to `space-evenly`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-evenly p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-evenly">
  <!-- Content here -->
</div>
```

### `.align-content-baseline`

Sets the `align-content` property to `baseline`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-baseline p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-baseline">
  <!-- Content here -->
</div>
```

### `.align-content-stretch`

Sets the `align-content` property to `stretch`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 align-content-stretch p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid align-content-start">
  <!-- Content here -->
</div>
```

## Align items

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-items-start` | align-items | start |
| `.align-items-end` | align-items | end |
| `.align-items-center` | align-items | center |
| `.align-items-baseline` | align-items | baseline |
| `.align-items-stretch` | align-items | stretch |

### `.align-items-start`

Sets the `align-items` property to `start`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-items-start p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex align-items-start">
  <!-- Content here -->
</div>
```

### `.align-items-end`

Sets the `align-items` property to `end`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-items-end p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex align-items-end">
  <!-- Content here -->
</div>
```

### `.align-items-center`

Sets the `align-items` property to `center`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-items-center p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex align-items-center">
  <!-- Content here -->
</div>
```

### `.align-items-baseline`

Sets the `align-items` property to `baseline`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-items-baseline p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex align-items-baseline">
  <!-- Content here -->
</div>
```

### `.align-items-stretch`

Sets the `align-items` property to `stretch`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-items-stretch p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex align-items-stretch">
  <!-- Content here -->
</div>
```

## Align self

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-self-auto` | align-self | auto |
| `.align-self-start` | align-self | start |
| `.align-self-end` | align-self | end |
| `.align-self-center` | align-self | center |
| `.align-self-baseline` | align-self | baseline |
| `.align-self-stretch` | align-self | stretch |

### `.align-self-auto`

Sets the `align-self` property to `auto`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 align-self-auto">Item</div>
</div>

```html
<div class="display-flex">
  <div class="align-self-auto">
    <!-- Content here -->
  </div>
</div>
```

### `.align-self-start`

Sets the `align-self` property to `start`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 align-self-start">Item</div>
</div>

```html
<div class="display-flex">
  <div class="align-self-start">
    <!-- Content here -->
  </div>
</div>
```

### `.align-self-end`

Sets the `align-self` property to `end`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 align-self-end">Item</div>
</div>

```html
<div class="display-flex">
  <div class="align-self-end">
    <!-- Content here -->
  </div>
</div>
```

### `.align-self-end`

Sets the `align-self` property to `end`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 align-self-end">Item</div>
</div>

```html
<div class="display-flex">
  <div class="align-self-end">
    <!-- Content here -->
  </div>
</div>
```

### `.align-self-center`

Sets the `align-self` property to `center`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 align-self-center">Item</div>
</div>

```html
<div class="display-flex">
  <div class="align-self-center">
    <!-- Content here -->
  </div>
</div>
```

### `.align-self-baseline`

Sets the `align-self` property to `baseline`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 align-self-baseline">Item</div>
</div>

```html
<div class="display-flex">
  <div class="align-self-baseline">
    <!-- Content here -->
  </div>
</div>
```

### `.align-self-stretch`

Sets the `align-self` property to `stretch`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 align-self-stretch">Item</div>
</div>

```html
<div class="display-flex">
  <div class="align-self-stretch">
    <!-- Content here -->
  </div>
</div>
```

## Customization

To customize the alignment utilities, you can use the following variables.

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

To generate responsive alignment utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
