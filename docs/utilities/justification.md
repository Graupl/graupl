# Justification Utilities

The justification utilities provide a set of classes to adjust the `justify-content`, `justify-items`, and `justify-self` properties of elements.

## Justify content

| Class Name | Property | Value |
| --- | --- | --- |
| [`.justify-content-normal`](#justify-content-normal) | justify-content | normal |
| [`.justify-content-start`](#justify-content-start) | justify-content | block-start |
| [`.justify-content-end`](#justify-content-end) | justify-content | block-end |
| [`.justify-content-center`](#justify-content-center) | justify-content | center |
| [`.justify-content-between`](#justify-content-between) | justify-content | space-between |
| [`.justify-content-around`](#justify-content-around) | justify-content | space-around |
| [`.justify-content-evenly`](#justify-content-evenly) | justify-content | space-evenly |
| [`.justify-content-stretch`](#justify-content-stretch) | justify-content | stretch |

### `.justify-content-normal`

Sets the `justify-content` property to `normal`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 justify-content-normal p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid justify-content-normal">
  <!-- Content here -->
</div>
```

### `.justify-content-start`

Sets the `justify-content` property to `block-start`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 justify-content-start p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid justify-content-start">
  <!-- Content here -->
</div>
```

### `.justify-content-end`

Sets the `justify-content` property to `block-end`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 justify-content-end p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid justify-content-end">
  <!-- Content here -->
</div>
```

### `.justify-content-center`

Sets the `justify-content` property to `center`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 justify-content-center p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid justify-content-center">
  <!-- Content here -->
</div>
```

### `.justify-content-between`

Sets the `justify-content` property to `space-between`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 justify-content-between p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid justify-content-between">
  <!-- Content here -->
</div>
```

### `.justify-content-around`

Sets the `justify-content` property to `space-around`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 justify-content-around p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid justify-content-around">
  <!-- Content here -->
</div>
```

### `.justify-content-evenly`

Sets the `justify-content` property to `space-evenly`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 justify-content-evenly p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid justify-content-evenly">
  <!-- Content here -->
</div>
```

### `.justify-content-stretch`

Sets the `justify-content` property to `stretch`.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 justify-content-stretch p-5 h-10" style="grid-template-columns: repeat(3, auto); grid-template-rows: min-content;">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-grid justify-content-start">
  <!-- Content here -->
</div>
```

## Justify items

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-items-start` | justify-items | start |
| `.justify-items-end` | justify-items | end |
| `.justify-items-center` | justify-items | center |
| `.justify-items-stretch` | justify-items | stretch |

### `.justify-items-start`

Sets the `justify-items` property to `start`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 justify-items-start p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-block justify-items-start">
  <!-- Content here -->
</div>
```

### `.justify-items-end`

Sets the `justify-items` property to `end`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 justify-items-end p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-block justify-items-end">
  <!-- Content here -->
</div>
```

### `.justify-items-center`

Sets the `justify-items` property to `center`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 justify-items-center p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-block justify-items-center">
  <!-- Content here -->
</div>
```

### `.justify-items-stretch`

Sets the `justify-items` property to `stretch`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 justify-items-stretch p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
  <div class="bg-primary-200 bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-block justify-items-stretch">
  <!-- Content here -->
</div>
```

## Justify self

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-self-auto` | justify-self | auto |
| `.justify-self-start` | justify-self | start |
| `.justify-self-end` | justify-self | end |
| `.justify-self-center` | justify-self | center |
| `.justify-self-stretch` | justify-self | stretch |

### `.justify-self-auto`

Sets the `justify-self` property to `auto`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 justify-self-auto">Item</div>
</div>

```html
<div class="display-block">
  <div class="justify-self-auto">
    <!-- Content here -->
  </div>
</div>
```

### `.justify-self-start`

Sets the `justify-self` property to `start`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 justify-self-start">Item</div>
</div>

```html
<div class="display-block">
  <div class="justify-self-start">
    <!-- Content here -->
  </div>
</div>
```

### `.justify-self-end`

Sets the `justify-self` property to `end`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 justify-self-end">Item</div>
</div>

```html
<div class="display-block">
  <div class="justify-self-end">
    <!-- Content here -->
  </div>
</div>
```

### `.justify-self-end`

Sets the `justify-self` property to `end`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 justify-self-end">Item</div>
</div>

```html
<div class="display-block">
  <div class="justify-self-end">
    <!-- Content here -->
  </div>
</div>
```

### `.justify-self-center`

Sets the `justify-self` property to `center`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 justify-self-center">Item</div>
</div>

```html
<div class="display-block">
  <div class="justify-self-center">
    <!-- Content here -->
  </div>
</div>
```

### `.justify-self-stretch`

Sets the `justify-self` property to `stretch`.

<div class="w-full display-block g-4 bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 justify-self-stretch">Item</div>
</div>

```html
<div class="display-block">
  <div class="justify-self-stretch">
    <!-- Content here -->
  </div>
</div>
```

## Customization

To customize the justification utilities, you can use the following variables.

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
| `$justify-content-selector-prefix` | `"justify-content-"` | The prefix for the justify content utility classes. |
| `$custom-justify-content-properties` | `()` | [DEPRECATED] The custom properties and values for the justify content utility classes. |
| `$justify-items-selector-prefix` | `"justify-items-"` | The prefix for the `.justify-items-utility` utility classes. |
| `$custom-justify-items-properties` | `()` | [DEPRECATED] The custom properties and values for the `.justify-items-utility` utility classes. |
| `$justify-self-selector-prefix` | `"justify-self-"` | The prefix for the `.justify-self-utility` utility classes. |
| `$custom-justify-self-properties` | `()` | [DEPRECATED] The custom properties and values for the `.justify-self-utility` utility classes. |

## Responsive variants

To generate responsive justification utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive justification utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
