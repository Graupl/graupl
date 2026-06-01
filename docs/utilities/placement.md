# Placement Utilities

The placement utilities provide a set of classes to adjust the `place-content`, `place-items`, and `place-self` properties of elements.

## Place content

| Class Name | Property | Value |
| --- | --- | --- |
| [`.place-content-center`](#place-content-center) | place-content | center |
| [`.place-content-start`](#place-content-start) | place-content | start |
| [`.place-content-end`](#place-content-end) | place-content | end |
| [`.place-content-between`](#place-content-between) | place-content | space-between |
| [`.place-content-around`](#place-content-around) | place-content | space-around |
| [`.place-content-evenly`](#place-content-evenly) | place-content | space-evenly |
| [`.place-content-baseline`](#place-content-baseline) | place-content | baseline |
| [`.place-content-stretch`](#place-content-stretch) | place-content | stretch |

### `.place-content-center`

Sets the `place-content` property to `center`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 place-content-center p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid place-content-center">
  <!-- Content here -->
</div>
```

### `.place-content-start`

Sets the `place-content` property to `start`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 place-content-start p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid place-content-start">
  <!-- Content here -->
</div>
```

### `.place-content-end`

Sets the `place-content` property to `end`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 place-content-end p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid place-content-end">
  <!-- Content here -->
</div>
```

### `.place-content-between`

Sets the `place-content` property to `space-between`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 place-content-between p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid place-content-between">
  <!-- Content here -->
</div>
```

### `.place-content-around`

Sets the `place-content` property to `space-around`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 place-content-around p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid place-content-around">
  <!-- Content here -->
</div>
```

### `.place-content-evenly`

Sets the `place-content` property to `space-evenly`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 place-content-evenly p-5 h-10" style="grid-template-columns: repeat(3, min-content); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid place-content-evenly">
  <!-- Content here -->
</div>
```

### `.place-content-baseline`

Sets the `place-content` property to `baseline`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 place-content-baseline p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid place-content-baseline">
  <!-- Content here -->
</div>
```

### `.place-content-stretch`

Sets the `place-content` property to `stretch`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 place-content-stretch p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid place-content-start">
  <!-- Content here -->
</div>
```

## Place items

| Class Name | Property | Value |
| --- | --- | --- |
| `.place-items-center` | place-items | center |
| `.place-items-start` | place-items | start |
| `.place-items-end` | place-items | end |
| `.place-items-baseline` | place-items | baseline |
| `.place-items-stretch` | place-items | stretch |

### `.place-items-center`

Sets the `place-items` property to `center`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 place-items-center p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex place-items-center">
  <!-- Content here -->
</div>
```

### `.place-items-start`

Sets the `place-items` property to `start`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 place-items-start p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex place-items-start">
  <!-- Content here -->
</div>
```

### `.place-items-end`

Sets the `place-items` property to `end`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 place-items-end p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex place-items-end">
  <!-- Content here -->
</div>
```

### `.place-items-baseline`

Sets the `place-items` property to `baseline`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 place-items-baseline p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex place-items-baseline">
  <!-- Content here -->
</div>
```

### `.place-items-stretch`

Sets the `place-items` property to `stretch`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 place-items-stretch p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex place-items-stretch">
  <!-- Content here -->
</div>
```

## Place self

| Class Name | Property | Value |
| --- | --- | --- |
| `.place-self-auto` | place-self | auto |
| `.place-self-center` | place-self | center |
| `.place-self-start` | place-self | start |
| `.place-self-end` | place-self | end |
| `.place-self-baseline` | place-self | baseline |
| `.place-self-stretch` | place-self | stretch |

### `.place-self-auto`

Sets the `place-self` property to `auto`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 place-self-auto">Item</div>
</div>

```html
<div class="display-flex">
  <div class="place-self-auto">
    <!-- Content here -->
  </div>
</div>
```

### `.place-self-center`

Sets the `place-self` property to `center`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 place-self-center">Item</div>
</div>

```html
<div class="display-flex">
  <div class="place-self-center">
    <!-- Content here -->
  </div>
</div>
```

### `.place-self-start`

Sets the `place-self` property to `start`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 place-self-start">Item</div>
</div>

```html
<div class="display-flex">
  <div class="place-self-start">
    <!-- Content here -->
  </div>
</div>
```

### `.place-self-end`

Sets the `place-self` property to `end`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 place-self-end">Item</div>
</div>

```html
<div class="display-flex">
  <div class="place-self-end">
    <!-- Content here -->
  </div>
</div>
```

### `.place-self-end`

Sets the `place-self` property to `end`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 place-self-end">Item</div>
</div>

```html
<div class="display-flex">
  <div class="place-self-end">
    <!-- Content here -->
  </div>
</div>
```

### `.place-self-baseline`

Sets the `place-self` property to `baseline`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 place-self-baseline">Item</div>
</div>

```html
<div class="display-flex">
  <div class="place-self-baseline">
    <!-- Content here -->
  </div>
</div>
```

### `.place-self-stretch`

Sets the `place-self` property to `stretch`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 place-self-stretch">Item</div>
</div>

```html
<div class="display-flex">
  <div class="place-self-stretch">
    <!-- Content here -->
  </div>
</div>
```

## Customization

To customize the placement utilities, you can use the following variables.

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

To generate responsive placement utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive placement utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
