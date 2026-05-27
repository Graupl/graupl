# Flex Utilities

The flex utilities provide a set of classes to adjust the `flex-direction`,`flex-grow`, `flex-shrink`, `flex-wrap` and `flex-basis` properties of elements.

## `.flex`

Applies the default flex styling to an element.

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

## Flex Basis

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

## Customization

To customize the flex utilities, you can use the following variables.

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
| `$flex-direction-selector-prefix` | `"flex-"` | The prefix for the flex-direction utility classes. |
| `$flex-direction-properties` | `()` | Map of the flex-direction utility values. |
| `$flex-wrap-selector-prefix` | `"flex-"` | The prefix for the flex-wrap utility classes. |
| `$flex-wrap-properties` | `()` | Map of the flex-wrap utility values. |
| `$flex-grow-selector-prefix` | `"flex-"` | The prefix for the flex-grow utility classes. |
| `$flex-grow-properties` | `()` | Map of the flex-grow utility values. |
| `$flex-shrink-selector-prefix` | `"flex-"` | The prefix for the flex-shrink utility classes. |
| `$flex-shrink-properties` | `()` | Map of the flex-shrink utility values. |
| `$flex-basis-selector-prefix` | `"flex-"` | The prefix for the flex-basis utility classes. |
| `$flex-basis-properties` | `()` | Map of the flex-basis utility values. |

## Responsive variants

To generate responsive flex utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
