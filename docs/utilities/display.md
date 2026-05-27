# Display Utilities

The display utilities provide a set of classes to adjust the `display` properties of elements.

## `.display`

Applies the default display styling to an element.

## Display

| Class Name | Property | Value |
| --- | --- | --- |
| [`.display-block`](#display-block) | `display` | block |
| [`.display-inline-block`](#display-inline-block) | `display` | inline-block |
| [`.display-inline`](#display-inline) | `display` | inline |
| [`.display-flex`](#display-flex) | `display` | flex |
| [`.display-inline-flex`](#display-inline-flex) | `display` | inline-flex |
| [`.display-grid`](#display-grid) | `display` | grid |
| [`.display-inline-grid`](#display-inline-grid) | `display` | inline-grid |
| [`.display-flow-root`](#display-flow-root) | `display` | flow-root |
| [`.display-none`](#display-none) | `display` | none |
| [`.display-contents`](#display-contents) | `display` | contents |
| [`.display-list-item`](#display-list-item) | `display` | list-item |

### `.display-block`

Sets the `display-type` property to `block`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
  <div class="display-block bordered border-secondary-700">
    Block
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-block">
  --Items Here--
</div>
```

### `.display-inline-block`

Sets the `display-type` property to `inline-block`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
  <div class="display-inline-block bordered border-secondary-700">
    Inline Block
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-inline-block">
  --Items Here--
</div>
```

### `.display-inline`

Sets the `display-type` property to `inline`.

<div class="bg-primary-100 bordered border-primary-700 p-4">
  <div class="display-inline bordered border-secondary-700">
    Inline
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-inline">
  --Items Here--
</div>
```

### `.display-flex`

Sets the `display-type` property to `flex`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
<div class="display-flex bordered border-secondary-700">
    Flex
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-flex">
  --Items Here--
</div>
```

### `.display-inline-flex`

Sets the `display-type` property to `flex-inline`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
  <div class="display-inline-flex bordered border-secondary-700">
    Inline Flex
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-inline-flex">
  --Items Here--
</div>
```

### `.display-grid`

Sets the `display-type` property to `grid`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
    Grid
    <div class="display-grid bordered border-secondary-700" style="grid-template-columns: repeat(3, auto); grid-template-rows: max-content;">
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-grid">
  --Items Here--
</div>
```

### `.display-inline-grid`

Sets the `display-type` property to `inline-grid`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
    Inline Grid
    <div class="display-inline-grid bordered border-secondary-700" style="grid-template-columns: repeat(2, auto); grid-template-rows: max-content;">
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-inline-grid">
  --Items Here--
</div>
```

### `.display-flow-root`

Sets the `display-type` property to `flow-root`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
<div class="display-flow-root bordered border-secondary-700">
    Flow Root
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-flow-root">
  --Items Here--
</div>
```

### `.display-none`

Sets the `display-type` property to `none`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 1 </div>
  <div class="display-none bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 2 </div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">Item 3 </div>
</div>

```html
<div class="p-4">
   <div class="p-4">Item 1</div>
   <div class="display-none p-4">Item 2</div>
   <div class="p-4">Item 3</div>
</div>
```

### `.display-contents`

Sets the `display-type` property to `contents`.

<div class="bg-primary-100 bordered border-primary-700 p-4 h-auto">
<div class="display-contents bordered border-secondary-700">
    Contents
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
    <div class="bg-primary-200 bordered border-tertiary-700 p-4 w-min-content">Item </div>
  </div>
</div>

```html
<div class="display-contents">
  --Items Here--
</div>
```

### `.display-list-item`

Sets the `display-type` property to `list-item`.

<div class="bg-primary-100 bordered border-primary-700 pl-7 p-4 g-4 h-auto">
  <div class="display-list-item bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">List Item </div>
  <div class="display-list-item bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">List Item </div>
  <div class="display-list-item bg-primary-200 bordered border-tertiary-700 p-4 w-fit-content">List Item </div>
</div>

```html
<div class="pl-7 p-4 g-4">
   <div class="display-list-item p-4">List Item</div>
   <div class="display-list-item p-4">List Item</div>
   <div class="display-list-item p-4">List Item</div>
</div>
```

## Customization

To customize the display utilities, you can use the following variables.

| Variable | Default Value | Description |
| --- | --- | --- |
| `$selector-base` | `"."` | The base selector for the utility classes. |
| `$use-important` | `true` | A flag to determine if the `!important` flag should be added to the utility classes. |
| `$generate-base-utilities` | `true` | A flag to determine if the base utility classes should be generated. |
| `$screen-aware` | `true` | A flag to generate screen-aware utility classes. |
| `$theme-aware` | `false` | A flag to generate theme-aware utility classes. |
| `$state-aware` | `false` | A flag to generate state-aware utility classes. |
| `$display-aware` | `true` | A flag to generate display-aware utility classes. |
| `$screen-aware-separator` | `"\\:"` | The separator for screen-aware utility classes. |
| `$theme-aware-separator` | `"\\:"` | The separator for theme-aware utility classes. |
| `$state-aware-separator` | `"\\:"` | The separator for state-aware utility classes. |
| `$display-aware-separator` | `"\\:"` | The separator for display-aware utility classes. |
| `$screen-aware-selector-prefix` | `""` | The prefix for the screen-aware utility classes. |
| `$theme-aware-selector-prefix` | `""` | The prefix for the theme-aware utility classes. |
| `$state-aware-selector-prefix` | `""` | The prefix for the state-aware utility classes. |
| `$display-aware-selector-prefix` | `"cq\\:"` | The prefix for the display-aware utility classes. |
| `$display-selector-prefix` | `"display-"` | The prefix for the display utility classes. |
| `$display-properties` | `map.merge($-display-properties, $display-properties)` | Map of the display utility values. |

## Responsive variants

To generate responsive display utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$display-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
