# Block Size Utilities

The block-size utilities provide a set of classes to adjust the `block`, `max-block`, and `min-block` properties of elements.

In a grid there are two axes: the block or column axis; and the inline or row axis. The inline (or row, or main) axis is the direction along which regular text flows. The block (or column, or cross) axis is the axis used when laying out blocks of text.

## Block

| Class Name | Property | Value |
| --- | --- | --- |
| [`.block-auto`](#block-normal) | block-size | auto |
| [`.block-fit-content`](#block-fit-content) | block-size | fit-content |
| [`.block-max-content`](#block-max-content) | block-size | max-content |
| [`.block-min-content`](#block--min-content) | block-size | min-content |
| [`.block-stretch`](#block-stretch) | block-size | stretch |
| [`.block-full`](#block-full) | block-size | 100% |
| [`.block-quarter`](#block-quarter) | block-size | 25% |
| [`.block-half`](#block-half) | block-size | 50% |
| [`.block-three-quarters`](#block-three-quarters) | block-size | 75% |
| [`.block-third`](#block-third) | block-size | calc(100%/ 3) |
| [`.block-two-thirds`](#block-two-thirds) | block-size | calc(100%/ 1.5)|
| [`.block-half-screen`](#block-half-screen) | block-size | 50vh |
| [`.block-third-screen`](#block-third-screen) | block-size | calc(100vh/ 3) |
| [`.block-two-thirds-screen`](#block-two-thirds-screen) | block-size | calc(100vh/ 1.5) |
| [`.block-quarter-screen`](#block-quarter-screen) | block-size | 25vh |
| [`.block-three-quarter-screen`](#block-three-quarter-screen) | block-size | 75vh |
| [`.block-full-screen`](#block-full-screen) | block-size | 100vh |


### `.block-auto`

Sets the `block` property to `auto`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-auto">Item Block Auto</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-auto">
  Item Block Auto
</div>
```


### `.block-fit-content`

Sets the `block` property to `fit-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-fit-content">Item Block Fit Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-fit-content">
  Item Block Fit Content
</div>
```

### `.block-max-content`

Sets the `block` property to `max-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-max-content">Item Block Max Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-max-content">
  Item Block Max Content
</div>
```

### `.block-min-content`

Sets the `block` property to `min-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-min-content">Item Block Min Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-min-content">
  Item Block Min Content
</div>
```

### `.block-stretch`

Sets the `block` property to `stretch`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-stretch">Item Block Stretch</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-stretch">
  <!-- Content here -->
</div>
```

### `.block-full`

Sets the `block` property to `full`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-full">Item Block Full</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-full">
  Item Block Full
</div>
```

### `.block-quarter`

Sets the `block` property to `quarter`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-quarter">Item Block Quarter</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-quarter">
  Item Block Quarter
</div>
```

### `.block-half`

Sets the `block` property to `half`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-half">Item Block Half</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-half">
  Item Block Half
</div>
```

### `.block-three-quarters`

Sets the `block` property to `three-quarters`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-three-quarters">Item Block three quarters</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-three-quarters">
  Item Block three quarters
</div>
```

### `.block-third`

Sets the `block` property to `third`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-third">Item Block Third </div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-third">
  Item Block Third
</div>
```

### `.block-two-thirds`

Sets the `block` property to `two-thirds`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-two-thirds">Item Block two thirds</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-two-thirds">
  Item Block two thirds
</div>
```

### `.block-half-screen`

Sets the `block` property to `half-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-half-screen">Item Block Half Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-half-screen">
  Item Block Half Screen
</div>
```
### `.block-third-screen`

Sets the `block` property to `third-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-third-screen">Item Block third Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-third-screen">
  Item Block third Screen
</div>
```

### `.block-two-thirds-screen`

Sets the `block` property to `two-thirds-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-two-thirds-screen">Item Block Two Thirds Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-two-thirds-screen">
  Item Block Two Thirds Screen
</div>
```

### `.block-quarter-screen`

Sets the `block` property to `quarter-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-quarter-screen">Item Block quarter Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-quarter-screen">
  Item Block quarter Screen
</div>
```

### `.block-three-quarters-screen`

Sets the `block` property to `three-quarters-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-three-quarters-screen">Item Block Three Quarters Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-three-quarters-screen">
  Item Block Three Quarters Screen
</div>
```

### `.block-full-screen`

Sets the `block` property to `full-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-full-screen">Item Block Full Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="block-full-screen">
  Item Block Full Screen
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
| `$align-content-selector-prefix` | `"align-content-"` | The prefix for the align content utility classes. |
| `$custom-align-content-properties` | `()` | [DEPRECATED] The custom properties and values for the align content utility classes. |
| `$align-items-selector-prefix` | `"align-items-"` | The prefix for the `.align-items-utility` utility classes. |
| `$custom-align-items-properties` | `()` | [DEPRECATED] The custom properties and values for the `.align-items-utility` utility classes. |
| `$align-self-selector-prefix` | `"align-self-"` | The prefix for the `.align-self-utility` utility classes. |
| `$custom-align-self-properties` | `()` | [DEPRECATED] The custom properties and values for the `.align-self-utility` utility classes. |

## Responsive variants

To generate responsive alignment utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
