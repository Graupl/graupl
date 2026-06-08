# Flex Utilities

The flex utilities provide a set of classes to adjust the `flex-basis`, `flex-direction`,`flex-grow`, `flex-shrink`, and `flex-wrap` properties of elements.

## Flex Basis

| Class Name | Property | Value |
| --- | --- | --- |
| [`.flex-auto`](#flex-auto) | `flex-basis` | `auto` |
| [`.flex-fit-content`](#flex-fit-content) | `flex-basis` | `fit-content` |
| [`.flex-max-content`](#flex-max-content) | `flex-basis` | `max-content` |
| [`.flex-min-content`](#flex-min-content) | `flex-basis` | `min-content` |
| [`.flex-content`](#flex-content) | `flex-basis` | `content` |
| [`.flex-0`](#flex-0) | `flex-basis` | `0` |
| [`.flex-full`](#flex-full) | `flex-basis` | `100%` |
| [`.flex-quarter`](#flex-quarter) | `flex-basis` | `25%` |
| [`.flex-half`](#flex-half) | `flex-basis` | `50%` |
| [`.flex-three-quarters`](#flex-three-quarters) | `flex-basis` | `75%` |
| [`.flex-third`](#flex-third) | `flex-basis` | `33.3333%` |
| [`.flex-two-thirds`](#flex-two-thirds) | `flex-basis` | `66.6667%` |

### `.flex-auto`

Sets the `flex` property to `auto`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-auto" style="width:400px">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-auto"> Item 2</div>
</div>
```

### `.flex-fit-content`

Sets the `flex` property to `fit-content`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-fit-content">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-fit-content"> Item 2</div>
</div>
```

### `.flex-max-content`

Sets the `flex` property to `max-content`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-max-content">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-max-content"> Item 2</div>
</div>
```

### `.flex-min-content`

Sets the `flex` property to `min-content`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-min-content">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-min-content"> Item 2</div>
</div>
```

### `.flex-content`

Sets the `flex` property to `content`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-content">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-content"> Item 2</div>
</div>
```

### `.flex-0`

Sets the `flex` property to `0`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-0">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-0"> Item 2</div>
</div>
```

### `.flex-full`

Sets the `flex` property to `full`.

<div class="display-flex flex-wrap g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-full">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex flex-wrap">
  <div class="flex-full"> Item 2</div>
</div>
```

### `.flex-quarter`

Sets the `flex` property to `quarter`.

<div class="display-flex flex-wrap g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-quarter">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex flex-wrap">
  <div class="flex-quarter"> Item 2</div>
</div>
```

### `.flex-half`

Sets the `flex` property to `half`.

<div class="display-flex flex-wrap g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-half">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex flex-wrap">
  <div class="flex-half"> Item 2</div>
</div>
```

### `.flex-three-quarters`

Sets the `flex` property to `three-quarters`.

<div class="display-flex flex-wrap g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-three-quarters">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex flex-wrap">
  <div class="flex-three-quarters"> Item 2</div>
</div>
```

### `.flex-third`

Sets the `flex` property to `third`.

<div class="display-flex flex-wrap g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-third">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex flex-wrap">
  <div class="flex-third"> Item 2</div>
</div>
```

### `.flex-two-thirds`

Sets the `flex` property to `two-thirds`.

<div class="display-flex flex-wrap g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-two-thirds">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex flex-wrap">
  <div class="flex-two-thirds"> Item 2</div>
</div>
```

## Flex Direction

| Class Name | Property | Value |
| --- | --- | --- |
| [`.flex-row`](#flex-row) | `flex-direction` | `row` |
| [`.flex-row-reverse`](#flex-row-reverse) | `flex-direction` | `row-reverse` |
| [`.flex-col`](#flex-col) | `flex-direction` | `col` |
| [`.flex-col-reverse`](#flex-col-reverse) | `flex-direction` | `column-reverse` |

### `.flex-row`

Sets the `flex` property to `row`.

<div class="display-flex flex-row g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 3</div>
</div>

```html
<div class="display-flex flex-row">
  --Items Here--
</div>
```

### `.flex-row-reverse`

Sets the `flex` property to `row-reverse`.

<div class="display-flex flex-row-reverse g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 3</div>
</div>

```html
<div class="display-flex flex-row-reverse">
  --Items Here--
</div>
```

### `.flex-col`

Sets the `flex` property to `col`.

<div class="display-flex flex-col g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 3</div>
</div>

```html
<div class="display-flex flex-col">
  --Items Here--
</div>
```

### `.flex-col-reverse`

Sets the `flex` property to `col-reverse`.

<div class="display-flex flex-col-reverse g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 3</div>
</div>

```html
<div class="display-flex flex-col-reverse">
  --Items Here--
</div>
```

## Flex Grow
| [`.flex-grow`](#flex-grow) | `flex-grow` | `1` |
| [`.flex-no-grow`](#flex-no-grow) | `flex-grow` | `0` |

### `.flex-grow`

Sets the `flex` property to `grow`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content flex-grow">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-grow">Item 2</div>
</div>
```

### `.flex-no-grow`

Sets the `flex` property to `no-grow`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content flex-no-grow">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-no-grow"> Item 2</div>
</div>
```

## Flex Shrink

| [`.flex-shrink`](#flex-shrink) | `flex-shrink` | `1` |
| [`.flex-no-shrink`](#flex-no-shrink) | `flex-shrink` | `0` |

### `.flex-shrink`

Sets the `flex` property to `shrink`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-shrink" style="width:400px">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-shrink"> Item 2</div>
</div>
```

### `.flex-no-shrink`

Sets the `flex` property to `no-shrink`.

<div class="display-flex g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 flex-no-shrink" style="width:400px">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex">
  <div class="flex-no-shrink"> Item 2</div>
</div>
```

## Flex Wrap

| [`.flex-wrap`](#flex-wrap) | `flex-wrap` | `wrap` |
| [`.flex-wrap-reverse`](#flex-wrap-reverse) | `flex-wrap` | `wrap-reverse` |
| [`.flex-nowrap`](#flex-nowrap) | `flex-wrap` | `nowrap` |

### `.flex-wrap`

Sets the `flex` property to `wrap`.

<div class="display-flex flex-wrap g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-half">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex flex-wrap">
  --Items Here--
</div>
```

### `.flex-nowrap`

Sets the `flex` property to `nowrap`.

<div class="display-flex flex-nowrap g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 1</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-half">Item 2</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-quarter">Item 3</div>
</div>

```html
<div class="display-flex flex-nowrap">
  --Items Here--
</div>
```

## Customization

To customize the flex utilities, you can use the following variables.

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

To generate responsive flex utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
