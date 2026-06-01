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

To generate responsive display utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$display-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
