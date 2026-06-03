# Typography Utilities

The typography utilities provide a set of classes to adjust the `font-size`, `font-weight`, `font-style`, `text-transform` properties of elements.

The following classes apply typography classes to an element.

## `.text-paragraph`

Applies the default `paragraph` styling to an element.

```css
  .text-paragraph {
    font-size: var(--graupl-paragraph-font-size, inherit);
    margin: var(--graupl-paragraph-margin, 0 0 0.25rem 0);
    font-weight: var(--graupl-paragraph-font-weight, inherit);
    line-height: var(--graupl-paragraph-line-height, 1.2em);
  }
```

## `.text-small`

Applies the default `small text` styling to an element.

```css
  .text-small {
    font-size: var(--graupl-paragraph-font-size, inherit);
    margin: var(--graupl-paragraph-margin, 0 0 0.25rem 0);
    font-weight: var(--graupl-paragraph-font-weight, inherit);
    line-height: var(--graupl-paragraph-line-height, 1.2em);
  }
```

## `.text-h1`

Applies the default `heading 1` styling to an element.

```css
  .text-h1 {
    font-size: var(--graupl-h1-font-size, calc(2.986 * var(--graupl-docs-font-size-base, 1rem)));
    margin: var(--graupl-h1-margin, 1rem 0 0.25rem 0);
    font-family: var(--graupl-h1-font-family, inherit);
    font-weight: var(--graupl-h1-font-weight, 700);
    line-height: var(--graupl-h1-line-height, 1.2em);
  }
```

## `.text-h2`

Applies the default `heading 2` styling to an element.

```css
  .text-h2 {
    font-size: var(--graupl-h2-font-size, calc(2.488 * var(--graupl-docs-font-size-base, 1rem)));
    margin: var(--graupl-h2-margin, 1rem 0 0.25rem 0);
    font-family: var(--graupl-h2-font-family, inherit);
    font-weight: var(--graupl-h2-font-weight, 700);
    line-height: var(--graupl-h2-line-height, 1.2em);
  }
```

## `.text-h3`

Applies the default `heading 3` styling to an element.

```css
  .text-h3 {
    font-size: var(--graupl-h3-font-size, calc(2.074 * var(--graupl-docs-font-size-base, 1rem)));
    margin: var(--graupl-h3-margin, 1rem 0 0.25rem 0);
    font-family: var(--graupl-h3-font-family, inherit);
    font-weight: var(--graupl-h3-font-weight, 700);
    line-height: var(--graupl-h3-line-height, 1.2em);
  }
```

## `.text-h4`

Applies the default `heading 4` styling to an element.

```css
  .text-h4 {
    font-size: var(--graupl-h4-font-size, calc(1.728 * var(--graupl-docs-font-size-base, 1rem)));
    margin: var(--graupl-h4-margin, 1rem 0 0.25rem 0);
    font-family: var(--graupl-h4-font-family, inherit);
    font-weight: var(--graupl-h4-font-weight, 700);
    line-height: var(--graupl-h4-line-height, 1.2em);
  }
```

## `.text-h5`

Applies the default `heading 5` styling to an element.

```css
  .text-h5 {
    font-size: var(--graupl-h5-font-size, calc(1.44 * var(--graupl-docs-font-size-base, 1rem)));
    margin: var(--graupl-h5-margin, 1rem 0 0.25rem 0);
    font-family: var(--graupl-h5-font-family, inherit);
    font-weight: var(--graupl-h5-font-weight, 700);
    line-height: var(--graupl-h5-line-height, 1.2em);
  }
```

## `.text-h6`

Applies the default `heading 6` styling to an element.

```css
  .text-h6 {
    font-size: var(--graupl-h6-font-size, calc(1.2 * var(--graupl-docs-font-size-base, 1rem)));
    margin: var(--graupl-h6-margin, 1rem 0 0.25rem 0);
    font-family: var(--graupl-h6-font-family, inherit);
    font-weight: var(--graupl-h6-font-weight, 700);
    line-height: var(--graupl-h6-line-height, 1.2em);
  }
```

## Font size

| Class Name | Property | Value |
| --- | --- | --- |
| [`.text-xs`](#text-xs) | `font-size` | `var(--graupl-font-xs, calc(0.694 * var(--graupl-docs-font-size-base, 1rem)))` |
| [`.text-sm`](#text-sm) | `font-size` | `var(--graupl-font-sm, calc(0.833 * var(--graupl-docs-font-size-base, 1rem)))` |
| [`.text-base`](#text-base) | `font-size` | `var(--graupl-font-base, 1rem))` |
| [`.text-xl`](#text-xl) | `font-size` | `var(--graupl-font-xl, , calc(1.44 * var(--graupl-docs-font-size-base, 1rem)))` |
| [`.text-2xl`](#text-2xl) | `font-size` | `var(--graupl-font-2xl, , calc(1.728 * var(--graupl-docs-font-size-base, 1rem)))` |
| [`.text-3xl`](#text-3xl) | `font-size` | `var(--graupl-font-3xl, , calc(2.074 * var(--graupl-docs-font-size-base, 1rem)))` |
| [`.text-4xl`](#text-4xl) | `font-size` | `var(--graupl-font-4xl, , calc(2.488 * var(--graupl-docs-font-size-base, 1rem)))` |
| [`.text-5xl`](#text-5xl) | `font-size` | `var(--graupl-font-5xl, , calc(2.986 * var(--graupl-docs-font-size-base, 1rem)))` |

### `.text-xs`

Sets the `font-size` property to `calc(0.694 * var(--graupl-docs-font-size-base, 1rem))`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-xs">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-xs">Item</div>
</div>
```

### `.text-sm`

Sets the `font-size` property to `calc(0.833 * var(--graupl-docs-font-size-base, 1rem))`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-sm">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-sm">Item</div>
</div>
```

### `.text-base`

Sets the `font-size` property to `(--graupl-docs-font-size-base, 1rem)`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-base">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-base">Item</div>
</div>
```

### `.text-xl`

Sets the `font-size` property to `calc(1.44 * var(--graupl-docs-font-size-base, 1rem))`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-xl">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-xl">Item</div>
</div>
```

### `.text-2xl`

Sets the `font-size` property to `calc(1.728 * var(--graupl-docs-font-size-base, 1rem))`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-2xl">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-2xl">Item</div>
</div>
```

### `.text-3xl`

Sets the `font-size` property to `calc(2.074 * var(--graupl-docs-font-size-base, 1rem))`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-3xl">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-3xl">Item</div>
</div>
```

### `.text-4xl`

Sets the `font-size` property to `calc(2.488 * var(--graupl-docs-font-size-base, 1rem))`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-4xl">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-4xl">Item</div>
</div>
```

### `.text-5xl`

Sets the `font-size` property to `calc(2.986 * var(--graupl-docs-font-size-base, 1rem))`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-5xl">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-5xl">Item</div>
</div>
```

## Font Weight

| Class Name | Property | Value |
| --- | --- | --- |
| [`.font-weight-light`](#font-weight-light) | `font-weight` | `300` |
| [`.font-weight-normal`](#font-weight-normal) | `font-weight` | `400` |
| [`.font-weight-bold`](#font-weight-bold) | `font-weight` | `700` |

### `.font-weight-light`

Sets the `font-size` property to `300`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 font-weight-light">Item</div>
</div>

```html
<div class="display-flex">
  <div class="font-weight-light">Item</div>
</div>
```

### `.font-weight-normal`

Sets the `font-size` property to `400`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 font-weight-normal">Item</div>
</div>

```html
<div class="display-flex">
  <div class="font-weight-normal">Item</div>
</div>
```

### `.font-weight-bold`

Sets the `font-size` property to `700`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 font-weight-bold">Item</div>
</div>

```html
<div class="display-flex">
  <div class="font-weight-bold">Item</div>
</div>
```

## Font Style

| Class Name | Property | Value |
| --- | --- | --- |
| [`.font-style-normal`](#font-style-normal) | `font-style` | `300` |
| [`.font-style-normal`](#font-style-normal) | `font-style` | `400` |

### `.font-style-normal`

Sets the `font-size` property to `300`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 font-style-normal">Item</div>
</div>

```html
<div class="display-flex">
  <div class="font-style-normal">Item</div>
</div>
```

### `.font-style-italic`

Sets the `font-size` property to `400`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-italic p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 font-style-italic">Item</div>
</div>

```html
<div class="display-flex">
  <div class="font-style-italic">Item</div>
</div>
```

## Text Transform

| Class Name | Property | Value |
| --- | --- | --- |
| [`.text-uppercase`](#text-uppercase) | `text-transform` | `uppercase` |
| [`.text-lowercase`](#text-lowercase) | `text-transform` | `lowercase` |
| [`.text-capitalize`](#text-capitalize) | `text-transform` | `capitalize` |
| [`.text-none`](#text-none) | `text-transform` | `none` |

### `.text-uppercase`

Sets the `text-transform` property to `uppercase`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-lowercase p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-uppercase">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-uppercase">Item</div>
</div>
```

### `.text-lowercase`

Sets the `text-transform` property to `lowercase`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-lowercase p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-lowercase">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-lowercase">Item</div>
</div>
```

### `.text-capitalize`

Sets the `text-transform` property to `capitalize`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-capitalize">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-capitalize">Item</div>
</div>
```

### `.text-none`

Sets the `text-transform` property to `none`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-auto">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 text-none">Item</div>
</div>

```html
<div class="display-flex">
  <div class="text-none">Item</div>
</div>
```

## Customization

To customize the typography utilities, you can use the following variables.

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

To generate responsive typography utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
