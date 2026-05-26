# Block Size Utilities

The block-size utilities provide a set of classes to adjust the `block`, `max-block`, and `min-block` properties of elements.

In a grid there are two axes: the block or column axis; and the inline or row axis. The inline (or row, or main) axis is the direction along which regular text flows. The block (or column, or cross) axis is the axis used when laying out blocks of text.

## Block

| Class Name | Property | Value |
| --- | --- | --- |
| [`.block-auto`](#block-auto) | block-size | auto |
| [`.block-fit-content`](#block-fit-content) | block-size | fit-content |
| [`.block-max-content`](#block-max-content) | block-size | max-content |
| [`.block-min-content`](#block-min-content) | block-size | min-content |
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
| [`.block-three-quarters-screen`](#block-three-quarters-screen) | block-size | 75vh |
| [`.block-full-screen`](#block-full-screen) | block-size | 100vh |
| [`.block-0`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 0 value |
| [`.block-1`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 1 value |
| [`.block-2`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 2 value |
| [`.block-3`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 3 value |
| [`.block-4`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 4 value |
| [`.block-5`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 5 value |
| [`.block-6`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 6 value |
| [`.block-7`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 7 value |
| [`.block-8`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 8 value |
| [`.block-9`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 9 value |
| [`.block-10`](#block-0) | block-size | Sets the block-size property to Graupl's spacer 10 value |

### `.block-auto`

Sets the `block` property to `auto`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-auto">Item Block Auto</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 block-auto">
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
<div class="p-4 block-fit-content">
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
<div class="p-4 block-max-content">
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
<div class="p-4 block-min-content">
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
<div class="p-4 block-stretch">
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
<div class="p-4 block-full">
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
<div class="p-4 block-quarter">
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
<div class="p-4 block-half">
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
<div class="p-4 block-three-quarters">
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
<div class="p-4 block-third">
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
<div class="p-4 block-two-thirds">
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
<div class="p-4 block-half-screen">
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
<div class="p-4 block-third-screen">
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
<div class="p-4 block-two-thirds-screen">
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
<div class="p-4 block-quarter-screen">
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
<div class="p-4 block-three-quarters-screen">
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
<div class="p-4 block-full-screen">
  Item Block Full Screen
</div>
```

### `.block-0`

Uses `Graupl-spacer` such as `0` to set the `block` property to a `spacer`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-0">0</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-1">1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-2">2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-3">3</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-4">4</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-5">5</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-6">6</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-7">7</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-8">Item 8</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-9">Item 9</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 block-10">Item 10</div>
</div>

```html
<div class="m-2 block-0">
   0
</div>
<div class="m-2 block-10">
   Item 10
</div>
```

## Max-block

| Class Name | Property | Value |
| --- | --- | --- |
| [`.max-block-auto`](#max-block-auto) | max-block-size | auto |
| [`.max-block-fit-content`](#max-block-fit-content) | max-block-size | fit-content |
| [`.max-block-max-content`](#max-block-max-content) | max-block-size | max-content |
| [`.max-block-min-content`](#max-block-min-content) | max-block-size | min-content |
| [`.max-block-stretch`](#max-block-stretch) | max-block-size | stretch |
| [`.max-block-full`](#max-block-full) | max-block-size | 100% |
| [`.max-block-quarter`](#max-block-quarter) | max-block-size | 25% |
| [`.max-block-half`](#max-block-half) | max-block-size | 50% |
| [`.max-block-three-quarters`](#max-block-three-quarters) | max-block-size | 75% |
| [`.max-block-third`](#max-block-third) | max-block-size | calc(100%/ 3) |
| [`.max-block-two-thirds`](#max-block-two-thirds) | max-block-size | calc(100%/ 1.5) |
| [`.max-block-half-screen`](#max-block-half-screen) | max-block-size | 50vh |
| [`.max-block-third-screen`](#max-block-third-screen) | max-block-size | calc(100vh/ 3) |
| [`.max-block-two-thirds-screen`](#max-block-two-thirds-screen) | max-block-size | calc(100vh/ 1.5) |
| [`.max-block-quarter-screen`](#max-block-quarter-screen) | max-block-size | 25vh |
| [`.max-block-three-quarters-screen`](#max-block-three-quarters-screen) | max-block-size | 75vh |
| [`.max-block-full-screen`](#max-block-full-screen) | max-block-size | 100vh |
| [`.max-block-0`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 0 value |
| [`.max-block-1`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 1 value |
| [`.max-block-2`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 2 value |
| [`.max-block-3`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 3 value |
| [`.max-block-4`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 4 value |
| [`.max-block-5`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 5 value |
| [`.max-block-6`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 6 value |
| [`.max-block-7`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 7 value |
| [`.max-block-8`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 8 value |
| [`.max-block-9`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 9 value |
| [`.max-block-10`](#max-block-0) | max-block-size | Sets the max-block-size property to Graupl's spacer 10 value |

### `.max-block-auto`

Sets the `max-block` property to `auto`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-auto">Item Max Block Auto</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-auto">
  Item Max Block Auto
</div>
```

### `.max-block-fit-content`

Sets the `max-block` property to `fit-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-fit-content">Item Max Block Fit Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-fit-content">
  Item Max Block Fit Content
</div>
```

### `.max-block-max-content`

Sets the `max-block` property to `max-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-max-content">Item Max Block Max Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-max-content">
  Item Max Block Max Content
</div>
```

### `.max-block-min-content`

Sets the `max-block` property to `min-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-min-content">Item Max Block Min Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-min-content">
  Item Max Block Min Content
</div>
```

### `.max-block-stretch`

Sets the `max-block` property to `stretch`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-stretch">Item Max Block Stretch</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-stretch">
  <!-- Content here -->
</div>
```

### `.max-block-full`

Sets the `max-block` property to `full`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-full">Item Max Block Full</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-full">
  Item Max Block Full
</div>
```

### `.max-block-quarter`

Sets the `max-block` property to `quarter`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-quarter">Item Max Block Quarter</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-quarter">
  Item Max Block Quarter
</div>
```

### `.max-block-half`

Sets the `max-block` property to `half`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-half">Item Max Block Half</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-half">
  Item Max Block Half
</div>
```

### `.max-block-three-quarters`

Sets the `max-block` property to `three-quarters`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-three-quarters">Item Max Block three quarters</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-three-quarters">
  Item Max Block three quarters
</div>
```

### `.max-block-third`

Sets the `max-block` property to `third`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-third">Item Max Block Third </div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-third">
  Item Max Block Third
</div>
```

### `.max-block-two-thirds`

Sets the `max-block` property to `two-thirds`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-two-thirds">Item Max Block two thirds</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-two-thirds">
  Item Max Block two thirds
</div>
```

### `.max-block-half-screen`

Sets the `max-block` property to `half-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-half-screen">Item Max Block Half Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-half-screen">
  Item Max Block Half Screen
</div>
```

### `.max-block-third-screen`

Sets the `max-block` property to `third-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-third-screen">Item Max Block third Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-third-screen">
  Item Max Block third Screen
</div>
```

### `.max-block-two-thirds-screen`

Sets the `max-block` property to `two-thirds-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-two-thirds-screen">Item Max Block Two Thirds Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-two-thirds-screen">
  Item Max Block Two Thirds Screen
</div>
```

### `.max-block-quarter-screen`

Sets the `max-block` property to `quarter-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-quarter-screen">Item Max Block quarter Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-quarter-screen">
  Item Max Block quarter Screen
</div>
```

### `.max-block-three-quarters-screen`

Sets the `max-block` property to `three-quarters-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-three-quarters-screen">Item Max Block Three Quarters Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-three-quarters-screen">
  Item Max Block Three Quarters Screen
</div>
```

### `.max-block-full-screen`

Sets the `max-block` property to `full-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-full-screen">Item Max Block Full Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 max-block-full-screen">
  Item Max Block Full Screen
</div>
```

### `.max-block-0`

Uses `Graupl-spacer` such as `0` to set the `max-block` property to a `spacer`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: max-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-0">0</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-1">1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-2">2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-3">3</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-4">4</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-5">5</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-6">6</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-7">7</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-8">Item 8</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-9">Item 9</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 max-block-10">Item 10</div>
</div>

```html
<div class="m-2 max-block-0">
   0
</div>
<div class="m-2 max-block-10">
   Item 10
</div>
```

## Min-block

| Class Name | Property | Value |
| --- | --- | --- |
| [`.min-block-auto`](#min-block-auto) | min-block-size | auto |
| [`.min-block-fit-content`](#min-block-fit-content) | min-block-size | fit-content |
| [`.min-block-max-content`](#min-block-max-content) | min-block-size | max-content |
| [`.min-block-min-content`](#min-block-min-content) | min-block-size | min-content |
| [`.min-block-stretch`](#min-block-stretch) | min-block-size | stretch |
| [`.min-block-full`](#min-block-full) | min-block-size | 100% |
| [`.min-block-quarter`](#min-block-quarter) | min-block-size | 25% |
| [`.min-block-half`](#min-block-half) | min-block-size | 50% |
| [`.min-block-three-quarters`](#min-block-three-quarters) | min-block-size | 75% |
| [`.min-block-third`](#min-block-third) | min-block-size | calc(100%/ 3) |
| [`.min-block-two-thirds`](#min-block-two-thirds) | min-block-size | calc(100%/ 1.5) |
| [`.min-block-half-screen`](#min-block-half-screen) | min-block-size | 50vh |
| [`.min-block-third-screen`](#min-block-third-screen) | min-block-size | calc(100vh/ 3) |
| [`.min-block-two-thirds-screen`](#min-block-two-thirds-screen) | min-block-size | calc(100vh/ 1.5) |
| [`.min-block-quarter-screen`](#min-block-quarter-screen) | min-block-size | 25vh |
| [`.min-block-three-quarter-screen`](#min-block-three-quarters-screen) | min-block-size | 75vh |
| [`.min-block-full-screen`](#min-block-full-screen) | min-block-size | 100vh |
| [`.min-block-0`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 0 value |
| [`.min-block-1`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 1 value |
| [`.min-block-2`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 2 value |
| [`.min-block-3`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 3 value |
| [`.min-block-4`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 4 value |
| [`.min-block-5`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 5 value |
| [`.min-block-6`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 6 value |
| [`.min-block-7`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 7 value |
| [`.min-block-8`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 8 value |
| [`.min-block-9`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 9 value |
| [`.min-block-10`](#min-block-0) | min-block-size | Sets the min-block-size property to Graupl's spacer 10 value |

### `.min-block-auto`

Sets the `min-block` property to `auto`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-auto">Item Min Block Auto</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-auto">
  Item Min Block Auto
</div>
```

### `.min-block-fit-content`

Sets the `min-block` property to `fit-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-fit-content">Item Min Block Fit Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-fit-content">
  Item Min Block Fit Content
</div>
```

### `.min-block-max-content`

Sets the `min-block` property to `max-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-max-content">Item Min Block Max Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-min-content">
  Item Min Block Max Content
</div>
```

### `.min-block-min-content`

Sets the `min-block` property to `min-content`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-min-content">Item Min Block Min Content</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-min-content">
  Item Min Block Min Content
</div>
```

### `.min-block-stretch`

Sets the `min-block` property to `stretch`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-stretch">Item Min Block Stretch</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-stretch">
  <!-- Content here -->
</div>
```

### `.min-block-full`

Sets the `min-block` property to `full`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-full">Item Min Block Full</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-full">
  Item Min Block Full
</div>
```

### `.min-block-quarter`

Sets the `min-block` property to `quarter`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-quarter">Item Min Block Quarter</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-quarter">
  Item Min Block Quarter
</div>
```

### `.min-block-half`

Sets the `min-block` property to `half`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-half">Item Min Block Half</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-half">
  Item Min Block Half
</div>
```

### `.min-block-three-quarters`

Sets the `min-block` property to `three-quarters`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-three-quarters">Item Min Block three quarters</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-three-quarters">
  Item Min Block three quarters
</div>
```

### `.min-block-third`

Sets the `min-block` property to `third`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-third">Item Min Block Third </div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-third">
  Item Min Block Third
</div>
```

### `.min-block-two-thirds`

Sets the `min-block` property to `two-thirds`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-two-thirds">Item Min Block two thirds</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-two-thirds">
  Item Min Block two thirds
</div>
```

### `.min-block-half-screen`

Sets the `min-block` property to `half-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-half-screen">Item Min Block Half Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-half-screen">
  Item Min Block Half Screen
</div>
```

### `.min-block-third-screen`

Sets the `min-block` property to `third-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-third-screen">Item Min Block third Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-third-screen">
  Item Min Block third Screen
</div>
```

### `.min-block-two-thirds-screen`

Sets the `min-block` property to `two-thirds-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-two-thirds-screen">Item Min Block Two Thirds Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-two-thirds-screen">
  Item Min Block Two Thirds Screen
</div>
```

### `.min-block-quarter-screen`

Sets the `min-block` property to `quarter-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-quarter-screen">Item Min Block quarter Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-quarter-screen">
  Item Min Block quarter Screen
</div>
```

### `.min-block-three-quarters-screen`

Sets the `min-block` property to `three-quarters-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-three-quarters-screen">Item Min Block Three Quarters Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-three-quarters-screen">
  Item Min Block Three Quarters Screen
</div>
```

### `.min-block-full-screen`

Sets the `min-block` property to `full-screen`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-full-screen">Item Min Block Full Screen</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="p-4 min-block-full-screen">
  Item Min Block Full Screen
</div>
```

### `.min-block-0`

Uses `Graupl-spacer` such as `0` to set the `min-block` property to a `spacer`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: repeat(3, min-content); grid-template-rows: max-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-0">0</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-1">1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-2">2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-3">3</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-4">4</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-5">5</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-6">6</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-7">7</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-8">Item 8</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-9">Item 9</div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 min-block-10">Item 10</div>
</div>

```html
<div class="m-2 min-block-0">
   0
</div>
<div class="m-2 min-block-10">
   Item 10
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
| `$screen-aware-separator` | `"\\:"` | The separator for screen-aware utility classes. |
| `$theme-aware-separator` | `"\\:"` | The separator for theme-aware utility classes. |
| `$state-aware-separator` | `"\\:"` | The separator for state-aware utility classes. |
| `$container-aware-separator` | `"\\:"` | The separator for container-aware utility classes. |
| `$screen-aware-selector-prefix` | `""` | The prefix for the screen-aware utility classes. |
| `$theme-aware-selector-prefix` | `""` | The prefix for the theme-aware utility classes. |
| `$state-aware-selector-prefix` | `""` | The prefix for the state-aware utility classes. |
| `$container-aware-selector-prefix` | `"cq\\:"` | The prefix for the container-aware utility classes. |
| `$block-size-selector-prefix` | `"block-"` | The prefix for the `.block` utility classes. |
| `$max-block-size-selector-prefix` | `"max-block-"` | The prefix for the `.max-block` utility classes. |
| `$min-block-size-selector-prefix` | `"min-block-"` | The prefix for the `.min-block` utility classes. |
| `$block-size-values` | `()` | Map of the `.block` utility classes. |

## Responsive variants

To generate responsive alignment utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
