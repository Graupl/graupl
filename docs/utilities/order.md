# Order Utilities

The order utilities provide a set of classes to adjust the `order` properties of elements. These must be used alongside another `order` property-holding element in order to work properly.

## Order

| Class Name | Property | Value |
| --- | --- | --- |
| [`.order-none`](#order-none) | order | `0` |
| [`.order-first`](#order-first) | order | `-9999` |
| [`.order-last`](#order-last) | order | `9999` |
| [`.order-1`](#order-1) | order | `1` |
| [`.order-2`](#order-1) | order | `2` |
| [`.order-3`](#order-1) | order | `3` |
| [`.order-4`](#order-1) | order | `4` |
| [`.order-5`](#order-1) | order | `5` |
| [`.order-6`](#order-1) | order | `6` |
| [`.order-7`](#order-1) | order | `7` |
| [`.order-8`](#order-1) | order | `8` |
| [`.order-9`](#order-1) | order | `9` |
| [`.order-10`](#order-1) | order | `10` |
| [`.order-11`](#order-1) | order | `11` |
| [`.order-12`](#order-1) | order | `12` |

### `.order-none`

Sets the `order` property to `none`.

<div class="display-flex bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-none">Item Order 0 None</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item 2</div>
</div>

```html
<div class="p-4 order-none">
  Item Order None
</div>
```


### `.order-first`

Sets the `order` property to `first`.

<div class="display-flex bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-first">Item Order First </div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item 2</div>
</div>


```html
<div class="p-4 order-first">
  Item Order first
</div>
```

### `.order-last`

Sets the `order` property to `last`.

<div class="display-flex bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-last">Item Order Last</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item 2</div>
</div>

```html
<div class="p-4 order-last">
  Item Order last
</div>
```

### `.order-1`

Uses `1` to `12` to set the `order` property to the corresponding number.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-none" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-none">Item 0 Order none</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-2">Item 1 Order 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-1">Item 2 Order 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-3">Item 3</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-4">Item 4</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-5">Item 5</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-6">Item 6</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-7">Item 7</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-10">Item 8 Order 10</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-9">Item 9</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-11">Item 10 Order 11</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-8">Item 11 Order 8</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 order-12">Item 12</div>
</div>

```html
<div class="p-4 order-1">
  Item 2 Order 1
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
| `$display-flex-aware` | `false` | A flag to generate display-flex-aware utility classes. |
| `$screen-aware-separator` | `"\\:"` | The separator for screen-aware utility classes. |
| `$theme-aware-separator` | `"\\:"` | The separator for theme-aware utility classes. |
| `$state-aware-separator` | `"\\:"` | The separator for state-aware utility classes. |
| `$display-flex-aware-separator` | `"\\:"` | The separator for display-flex-aware utility classes. |
| `$screen-aware-selector-prefix` | `""` | The prefix for the screen-aware utility classes. |
| `$theme-aware-selector-prefix` | `""` | The prefix for the theme-aware utility classes. |
| `$state-aware-selector-prefix` | `""` | The prefix for the state-aware utility classes. |
| `$display-flex-aware-selector-prefix` | `"cq\\:"` | The prefix for the display-flex-aware utility classes. |
| `$order-selector-prefix` | `"order-"` | The prefix for the `.order` utility classes. |
| `$order-values` | `()` | Map of the `.order` utility classes. |

## Responsive variants

To generate responsive alignment utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$display-flex-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
