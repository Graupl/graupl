# Gradient Utilities

The gradient utilities provide a set of classes to adjust the color `gradient` properties of elements.

## Gradient Type

| Class Name | Property | Value |
| --- | --- | --- |
| [`.gradient`](#gradient) | `background-image` | `linear-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |
| [`.gradient-linear`](#gradient-linear) | `background-image` | `linear-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |
| [`.gradient-radial`](#gradient-radial) | `background-image` | `radial-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |

### `.gradient`

Applies the default gradient styling to an element.
Sets the `background-image` property to `linear-gradient`.

```css
.gradient {
    background-image: linear-gradient(
      var(--graupl-gradient-direction, to right),
      var(--graupl-gradient-from, transparent) var(--graupl-gradient-from-position, 0%),
      var(--graupl-gradient-to, transparent) var(--graupl-gradient-to-position, 100%)
    )
  }
```

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient from-primary-200 to-primary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient from-primary-200 to-primary-400">Item</div>
</div>
```

### `.gradient-linear`

Applies the default gradient-linear styling to an element.
Sets the `background-image` property to `linear-gradient`.

```css
.gradient-linear {
    background-image: linear-gradient(
      var(--graupl-gradient-direction, to right),
      var(--graupl-gradient-from, transparent) var(--graupl-gradient-from-position, 0%),
      var(--graupl-gradient-to, transparent) var(--graupl-gradient-to-position, 100%)
    )
  }
```

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-linear from-secondary-200 to-secondary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-linear from-secondary-200 to-secondary-400">Item</div>
</div>
```

### `.gradient-radial`

Applies the default gradient-radial styling to an element.
Sets the `background-image` property to `radial-gradient`.

```css
.gradient-radial {
    background-image: radial-gradient(
      var(--graupl-gradient-direction, circle),
      var(--graupl-gradient-from, transparent) var(--graupl-gradient-from-position, 0%),
      var(--graupl-gradient-to, transparent) var(--graupl-gradient-to-position, 100%)
    )
  }
```

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

## Custom Gradient Properties

Used to customize gradient types.

| Class Name | Property | Value |
| --- | --- | --- |
| `--graupl-gradient-from` | `Starting color used by generated gradients` | `transparent` |
| `--graupl-gradient-from-position` | `Start color stop position used for generated gradients` | `0%` |
| `--graupl-gradient-to` | `Ending color used by generated gradients` | `transparent` |
| `--graupl-gradient-to-position`| `End color stop position used for generated gradients` | `100%` |
| `--graupl-gradient-direction` | `Direction/shape keyword consumed by gradient utilities` | `to right` (gradient-linear), `circle` (gradient-radial) |

## Gradient Direction

| Class Name | Property | Value |
| --- | --- | --- |
| [`.gradient-direction-to-top`](#gradient-direction-to-top) | `--graupl-gradient-direction` | `to top` |
| [`.gradient-direction-to-right`](#gradient-direction-to-right) | `--graupl-gradient-direction` | `to right` |
| [`.gradient-direction-to-bottom`](#gradient-direction-to-bottom) | `--graupl-gradient-direction` | `to bottom` |
| [`.gradient-direction-to-left`](#gradient-direction-to-left) | `--graupl-gradient-direction` | `to left` |
| [`.gradient-direction-circle`](#gradient-direction-circle) | `--graupl-gradient-direction` | `circle` |
| [`.gradient-direction-circle-at-top`](#gradient-direction-circle-at-top) | `--graupl-gradient-direction` | `circle at top` |
| [`.gradient-direction-circle-at-right`](#gradient-direction-circle-at-right) | `--graupl-gradient-direction` | `circle at right` |
| [`.gradient-direction-circle-at-bottom`](#gradient-direction-circle-at-bottom) | `--graupl-gradient-direction` | `circle at bottom` |
| [`.gradient-direction-circle-at-left`](#gradient-direction-circle-at-left) | `--graupl-gradient-direction` | `circle at left` |
| [`.gradient-direction-ellipse`](#gradient-direction-ellipse) | `--graupl-gradient-direction` | `ellipse` |
| [`.gradient-direction-ellipse-at-top`](#gradient-direction-ellipse-at-top) | `--graupl-gradient-direction` | `ellipse at top` |
| [`.gradient-direction-ellipse-at-right`](#gradient-direction-ellipse-at-right) | `--graupl-gradient-direction` | `ellipse at right` |
| [`.gradient-direction-ellipse-at-bottom`](#gradient-direction-ellipse-at-bottom) | `--graupl-gradient-direction` | `ellipse at bottom` |
| [`.gradient-direction-ellipse-at-left`](#gradient-direction-ellipse-at-left) | `--graupl-gradient-direction` | `ellipse at left` |
| [`.gradient-direction-closest-side`]( #gradient-direction-closest-side) | `--graupl-gradient-direction` | `closest-side` |
| [`.gradient-direction-closest-corner`]( #gradient-direction-closest-corner) | `--graupl-gradient-direction` | `closest-corner` |
| [`.gradient-direction-farthest-side`]( #gradient-direction-farthest-side) | `--graupl-gradient-direction` | `farthest-side` |
| [`.gradient-direction-farthest-corner`]( #gradient-direction-farthest-corner) | `--graupl-gradient-direction` | `farthest-corner` |

### `.gradient-direction-to-top`

Sets the `--graupl-gradient-direction` property to `to top`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient gradient-direction-to-top from-primary-200 to-primary-600 w-half bordered border-primary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient gradient-direction-to-top from-primary-200 to-primary-400">Item</div>
</div>
```

### `.gradient-direction-to-right`

Sets the `--graupl-gradient-direction` property to `to right`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient gradient-direction-to-right from-primary-200 to-primary-600 w-half bordered border-primary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient gradient-direction-to-right from-primary-200 to-primary-400">Item</div>
</div>
```

### `.gradient-direction-to-bottom`

Sets the `--graupl-gradient-direction` property to `to bottom`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient gradient-direction-to-bottom from-primary-200 to-primary-600 w-half bordered border-primary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient gradient-direction-to-bottom from-primary-200 to-primary-400">Item</div>
</div>
```

### `.gradient-direction-to-left`

Sets the `--graupl-gradient-direction` property to `to left`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient gradient-direction-to-left from-primary-200 to-primary-600 w-half bordered border-primary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient gradient-direction-to-left from-primary-200 to-primary-400">Item</div>
</div>
```

### `.gradient-direction-circle`

Sets the `--graupl-gradient-direction` property to `circle`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-circle from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-circle from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-circle-at-top`

Sets the `--graupl-gradient-direction` property to `circle at top`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-circle-at-top from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-circle-at-top from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-circle-at-right`

Sets the `--graupl-gradient-direction` property to `circle at right`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-circle-at-right from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-circle-at-right from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-circle-at-bottom`

Sets the `--graupl-gradient-direction` property to `circle at bottom`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-circle-at-bottom from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-circle-at-bottom from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-circle-at-left`

Sets the `--graupl-gradient-direction` property to `circle at left`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-circle-at-left from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-circle-at-left from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-ellipse`

Sets the `--graupl-gradient-direction` property to `ellipse`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-ellipse from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-ellipse from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-ellipse-at-top`

Sets the `--graupl-gradient-direction` property to `ellipse at top`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-ellipse-at-top from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-ellipse-at-top from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-ellipse-at-right`

Sets the `--graupl-gradient-direction` property to `ellipse at right`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-ellipse-at-right from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-ellipse-at-right from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-ellipse-at-bottom`

Sets the `--graupl-gradient-direction` property to `ellipse at bottom`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-ellipse-at-bottom from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-ellipse-at-bottom from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-ellipse-at-left`

Sets the `--graupl-gradient-direction` property to `ellipse at left`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-ellipse-at-left from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-ellipse-at-left from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-closest-side`

Sets the `--graupl-gradient-direction` property to `closest-side`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-closest-side from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-closest-side from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-closest-corner`

Sets the `--graupl-gradient-direction` property to `closest-corner`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-closest-corner from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-closest-corner from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-farthest-side`

Sets the `--graupl-gradient-direction` property to `farthest-side`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-ellipse from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-ellipse from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

### `.gradient-direction-farthest-corner`

Sets the `--graupl-gradient-direction` property to `farthest-corner`.

<div class="w-full display-flex g-4 bg-primary-100 bordered border-primary-700 align-content-normal p-5 h-10">
  <div class="gradient-radial gradient-direction-farthest-corner from-tertiary-200 to-tertiary-600 w-half bordered border-tertiary-700 p-4">Item</div>
</div>

```html
<div class="display-flex">
  <div class="gradient-radial gradient-direction-farthest-corner from-tertiary-200 to-tertiary-400">Item</div>
</div>
```

## Gradient From Color

| Class Name | Property | Value |
| --- | --- | --- |
| [`.from-transparent`](#from-transparent) | `--graupl-gradient-from` | `transparent` |
| [`.from-primary`](#from-primary) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary)` |
| [`.from-primary-100`](#from-primary-100) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--100)` |
| [`.from-primary-200`](#from-primary-200) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--200)` |
| [`.from-primary-300`](#from-primary-300) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--300)` |
| [`.from-primary-400`](#from-primary-400) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--400)` |
| [`.from-primary-500`](#from-primary-500) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--500)` |
| [`.from-primary-600`](#from-primary-600) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--600)` |
| [`.from-primary-700`](#from-primary-700) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--700)` |
| [`.from-primary-800`](#from-primary-800) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--800)` |
| [`.from-primary-900`](#from-primary-900) | `--graupl-gradient-from` | `var(--graupl-theme-active--primary--900)` |
| [`.from-secondary`](#from-secondary) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary)` |
| [`.from-secondary-100`](#from-secondary-100) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--100)` |
| [`.from-secondary-200`](#from-secondary-200) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--200)` |
| [`.from-secondary-300`](#from-secondary-300) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--300)` |
| [`.from-secondary-400`](#from-secondary-400) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--400)` |
| [`.from-secondary-500`](#from-secondary-500) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--500)` |
| [`.from-secondary-600`](#from-secondary-600) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--600)` |
| [`.from-secondary-700`](#from-secondary-700) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--700)` |
| [`.from-secondary-800`](#from-secondary-800) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--800)` |
| [`.from-secondary-900`](#from-secondary-900) | `--graupl-gradient-from` | `var(--graupl-theme-active--secondary--900)` |
| [`.from-tertiary`](#from-tertiary) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary)` |
| [`.from-tertiary-100`](#from-tertiary-100) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--100)` |
| [`.from-tertiary-200`](#from-tertiary-200) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--200)` |
| [`.from-tertiary-300`](#from-tertiary-300) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--300)` |
| [`.from-tertiary-400`](#from-tertiary-400) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--400)` |
| [`.from-tertiary-500`](#from-tertiary-500) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--500)` |
| [`.from-tertiary-600`](#from-tertiary-600) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--600)` |
| [`.from-tertiary-700`](#from-tertiary-700) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--700)` |
| [`.from-tertiary-800`](#from-tertiary-800) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--800)` |
| [`.from-tertiary-900`](#from-tertiary-900) | `--graupl-gradient-from` | `var(--graupl-theme-active--tertiary--900)` |

### `.from-transparent`

Sets the `--graupl-gradient-from` property to `transparent`.

### `.from-primary`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary)`.

### `.from-primary-100`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--100)`.

### `.from-primary-200`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--200)`.

### `.from-primary-300`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--300)`.

### `.from-primary-400`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--400)`.

### `.from-primary-500`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--500)`.

### `.from-primary-600`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--600)`.

### `.from-primary-700`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--700)`.

### `.from-primary-800`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--800)`.

### `.from-primary-900`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--primary--900)`.

### `.from-secondary`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary)`.

### `.from-secondary-100`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--100)`.

### `.from-secondary-200`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--200)`.

### `.from-secondary-300`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--300)`.

### `.from-secondary-400`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--400)`.

### `.from-secondary-500`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--500)`.

### `.from-secondary-600`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--600)`.

### `.from-secondary-700`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--700)`.

### `.from-secondary-800`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--800)`.

### `.from-secondary-900`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--secondary--900)`.

### `.from-tertiary`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary)`.

### `.from-tertiary-100`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--100)`.

### `.from-tertiary-200`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--200)`.

### `.from-tertiary-300`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--300)`.

### `.from-tertiary-400`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--400)`.

### `.from-tertiary-500`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--500)`.

### `.from-tertiary-600`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--600)`.

### `.from-tertiary-700`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--700)`.

### `.from-tertiary-800`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--800)`.

### `.from-tertiary-900`

Sets the `--graupl-gradient-from` property to `var(--graupl-theme-active--tertiary--900)`.

## Gradient To Color

| Class Name | Property | Value |
| --- | --- | --- |
| [`.to-transparent`](#to-transparent) | `--graupl-gradient-to` | `transparent` |
| [`.to-primary`](#to-primary) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary)` |
| [`.to-primary-100`](#to-primary-100) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--100)` |
| [`.to-primary-200`](#to-primary-200) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--200)` |
| [`.to-primary-300`](#to-primary-300) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--300)` |
| [`.to-primary-400`](#to-primary-400) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--400)` |
| [`.to-primary-500`](#to-primary-500) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--500)` |
| [`.to-primary-600`](#to-primary-600) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--600)` |
| [`.to-primary-700`](#to-primary-700) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--700)` |
| [`.to-primary-800`](#to-primary-800) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--800)` |
| [`.to-primary-900`](#to-primary-900) | `--graupl-gradient-to` | `var(--graupl-theme-active--primary--900)` |
| [`.to-secondary`](#to-secondary) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary)` |
| [`.to-secondary-100`](#to-secondary-100) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--100)` |
| [`.to-secondary-200`](#to-secondary-200) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--200)` |
| [`.to-secondary-300`](#to-secondary-300) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--300)` |
| [`.to-secondary-400`](#to-secondary-400) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--400)` |
| [`.to-secondary-500`](#to-secondary-500) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--500)` |
| [`.to-secondary-600`](#to-secondary-600) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--600)` |
| [`.to-secondary-700`](#to-secondary-700) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--700)` |
| [`.to-secondary-800`](#to-secondary-800) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--800)` |
| [`.to-secondary-900`](#to-secondary-900) | `--graupl-gradient-to` | `var(--graupl-theme-active--secondary--900)` |
| [`.to-tertiary`](#to-tertiary) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary)` |
| [`.to-tertiary-100`](#to-tertiary-100) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--100)` |
| [`.to-tertiary-200`](#to-tertiary-200) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--200)` |
| [`.to-tertiary-300`](#to-tertiary-300) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--300)` |
| [`.to-tertiary-400`](#to-tertiary-400) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--400)` |
| [`.to-tertiary-500`](#to-tertiary-500) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--500)` |
| [`.to-tertiary-600`](#to-tertiary-600) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--600)` |
| [`.to-tertiary-700`](#to-tertiary-700) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--700)` |
| [`.to-tertiary-800`](#to-tertiary-800) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--800)` |
| [`.to-tertiary-900`](#to-tertiary-900) | `--graupl-gradient-to` | `var(--graupl-theme-active--tertiary--900)` |

### `.to-transparent`

Sets the `--graupl-gradient-to` property to `transparent`.

### `.to-primary`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary)`.

### `.to-primary-100`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--100)`.

### `.to-primary-200`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--200)`.

### `.to-primary-300`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--300)`.

### `.to-primary-400`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--400)`.

### `.to-primary-500`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--500)`.

### `.to-primary-600`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--600)`.

### `.to-primary-700`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--700)`.

### `.to-primary-800`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--800)`.

### `.to-primary-900`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--primary--900)`.

### `.to-secondary`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary)`.

### `.to-secondary-100`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--100)`.

### `.to-secondary-200`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--200)`.

### `.to-secondary-300`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--300)`.

### `.to-secondary-400`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--400)`.

### `.to-secondary-500`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--500)`.

### `.to-secondary-600`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--600)`.

### `.to-secondary-700`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--700)`.

### `.to-secondary-800`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--800)`.

### `.to-secondary-900`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--secondary--900)`.

### `.to-tertiary`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary)`.

### `.to-tertiary-100`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--100)`.

### `.to-tertiary-200`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--200)`.

### `.to-tertiary-300`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--300)`.

### `.to-tertiary-400`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--400)`.

### `.to-tertiary-500`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--500)`.

### `.to-tertiary-600`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--600)`.

### `.to-tertiary-700`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--700)`.

### `.to-tertiary-800`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--800)`.

### `.to-tertiary-900`

Sets the `--graupl-gradient-to` property to `var(--graupl-theme-active--tertiary--900)`.

## Customization

To customize the gradient utilities, you can use the following variables.

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

To generate responsive color utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, theme-aware and state-aware utility classes are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
