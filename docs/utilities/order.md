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
| `$order-max-count` | The maximum number for generated order classes. | `12` |

## Responsive variants

To generate responsive alignment utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$display-flex-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
