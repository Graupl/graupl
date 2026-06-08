# Block Size Utilities

The block-size utilities provide a set of classes to adjust the `block-size`, `max-block-size`, and `min-block-size` properties of elements.

## Block Size

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
| [`.block-two-thirds`](#block-two-thirds) | block-size | calc(100%/ 1.5) |
| [`.block-half-screen`](#block-half-screen) | block-size | 50vh |
| [`.block-third-screen`](#block-third-screen) | block-size | calc(100vh/ 3) |
| [`.block-two-thirds-screen`](#block-two-thirds-screen) | block-size | calc(100vh/ 1.5) |
| [`.block-quarter-screen`](#block-quarter-screen) | block-size | 25vh |
| [`.block-three-quarters-screen`](#block-three-quarters-screen) | block-size | 75vh |
| [`.block-full-screen`](#block-full-screen) | block-size | 100vh |
| [`.block-0`](#block-spacer) | block-size | var(--graupl-spacer-0) |
| [`.block-1`](#block-spacer) | block-size | var(--graupl-spacer-1) |
| [`.block-2`](#block-spacer) | block-size | var(--graupl-spacer-2) |
| [`.block-3`](#block-spacer) | block-size | var(--graupl-spacer-3) |
| [`.block-4`](#block-spacer) | block-size | var(--graupl-spacer-4) |
| [`.block-5`](#block-spacer) | block-size | var(--graupl-spacer-5) |
| [`.block-6`](#block-spacer) | block-size | var(--graupl-spacer-6) |
| [`.block-7`](#block-spacer) | block-size | var(--graupl-spacer-7) |
| [`.block-8`](#block-spacer) | block-size | var(--graupl-spacer-8) |
| [`.block-9`](#block-spacer) | block-size | var(--graupl-spacer-9) |
| [`.block-10`](#block-spacer) | block-size | var(--graupl-spacer-10) |

### `.block-auto`

Sets the `block-size` property to `auto`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-auto">Auto</div>
</div>

```html
<div class="block-auto">
  Auto
</div>
```


### `.block-fit-content`

Sets the `block-size` property to `fit-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-fit-content">Fit-content</div>
</div>

```html
<div class="block-fit-content">
  Fit-content
</div>
```

### `.block-max-content`

Sets the `block-size` property to `max-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-max-content">Max-content</div>
</div>

```html
<div class="block-max-content">
  Max-content
</div>
```

### `.block-min-content`

Sets the `block-size` property to `min-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-min-content">Min-content</div>
</div>

```html
<div class="block-min-content">
  Min-content
</div>
```

### `.block-stretch`

Sets the `block-size` property to `stretch`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-stretch">Stretch</div>
</div>

```html
<div class="block-stretch">
  Stretch
</div>
```

### `.block-full`

Sets the `block-size` property to `100%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-full">Full</div>
</div>

```html
<div class="block-full">
  Full
</div>
```

### `.block-quarter`

Sets the `block-size` property to `25%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-quarter">Quarter</div>
</div>

```html
<div class="block-quarter">
  Quarter
</div>
```

### `.block-half`

Sets the `block-size` property to `50%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-half">Half</div>
</div>

```html
<div class="block-half">
  Half
</div>
```

### `.block-three-quarters`

Sets the `block-size` property to `75%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-three-quarters">Three-quarters</div>
</div>

```html
<div class="block-three-quarters">
  Three-quarters
</div>
```

### `.block-third`

Sets the `block-size` property to `calc(100%/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-third">Third</div>
</div>

```html
<div class="block-third">
  Third
</div>
```

### `.block-two-thirds`

Sets the `block-size` property to `calc(100%/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 block-two-thirds">Two-thirds</div>
</div>

```html
<div class="block-two-thirds">
  Two-thirds
</div>
```

### `.block-half-screen`

Sets the `block-size` property to `50vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 block-half-screen">Half-screen</div>
</div>

```html
<div class="block-half-screen">
  Half-screen
</div>
```

### `.block-third-screen`

Sets the `block-size` property to `calc(100vh/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 block-third-screen">Third-screen</div>
</div>

```html
<div class="block-third-screen">
  Third-screen
</div>
```

### `.block-two-thirds-screen`

Sets the `block-size` property to `calc(100vh/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 block-two-thirds-screen">Two-thirds-screen</div>
</div>

```html
<div class="block-two-thirds-screen">
  Two-thirds-screen
</div>
```

### `.block-quarter-screen`

Sets the `block-size` property to `25vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 block-quarter-screen">Quarter-screen</div>
</div>

```html
<div class="block-quarter-screen">
  Quarter-screen
</div>
```

### `.block-three-quarters-screen`

Sets the `block-size` property to `75vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 block-three-quarters-screen">Three-quarters-screen</div>
</div>

```html
<div class="block-three-quarters-screen">
  Three-quarters-screen
</div>
```

### `.block-full-screen`

Sets the `block-size` property to `100vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 block-full-screen">Full-screen</div>
</div>

```html
<div class="block-full-screen">
  Full-screen
</div>
```

### `.block-#{spacer}`

Uses `--graupl-spacer-0` through `--graupl-spacer-10` to set the `block-size` property to the corresponding value.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: 1fr; grid-template-rows: auto;">
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-0"><span class="position-absolute">0</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-1"><span class="position-absolute">1</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-2"><span class="position-absolute">2</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-3"><span class="position-absolute">3</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-4"><span class="position-absolute">4</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-5"><span class="position-absolute">5</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-6"><span class="position-absolute">6</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-7"><span class="position-absolute">7</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-8"><span class="position-absolute">8</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-9"><span class="position-absolute">9</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative block-10"><span class="position-absolute">10</span></div>
</div>

```html
<div class="block-0">
   0
</div>
<div class="block-10">
   10
</div>
```

## Max Block Size

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
| [`.max-block-0`](#max-block-spacer) | max-block-size | var(--graupl-spacer-0) |
| [`.max-block-1`](#max-block-spacer) | max-block-size | var(--graupl-spacer-1) |
| [`.max-block-2`](#max-block-spacer) | max-block-size | var(--graupl-spacer-2) |
| [`.max-block-3`](#max-block-spacer) | max-block-size | var(--graupl-spacer-3) |
| [`.max-block-4`](#max-block-spacer) | max-block-size | var(--graupl-spacer-4) |
| [`.max-block-5`](#max-block-spacer) | max-block-size | var(--graupl-spacer-5) |
| [`.max-block-6`](#max-block-spacer) | max-block-size | var(--graupl-spacer-6) |
| [`.max-block-7`](#max-block-spacer) | max-block-size | var(--graupl-spacer-7) |
| [`.max-block-8`](#max-block-spacer) | max-block-size | var(--graupl-spacer-8) |
| [`.max-block-9`](#max-block-spacer) | max-block-size | var(--graupl-spacer-9) |
| [`.max-block-10`](#max-block-spacer) | max-block-size | var(--graupl-spacer-10) |

### `.max-block-auto`

Sets the `max-block-size` property to `auto`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-auto">Auto</div>
</div>

```html
<div class="max-block-auto">
  Auto
</div>
```


### `.max-block-fit-content`

Sets the `max-block-size` property to `fit-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-fit-content">Fit-content</div>
</div>

```html
<div class="max-block-fit-content">
  Fit-content
</div>
```

### `.max-block-max-content`

Sets the `max-block-size` property to `max-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-max-content">Max-content</div>
</div>

```html
<div class="max-block-max-content">
  Max-content
</div>
```

### `.max-block-min-content`

Sets the `max-block-size` property to `min-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-min-content">Min-content</div>
</div>

```html
<div class="max-block-min-content">
  Min-content
</div>
```

### `.max-block-stretch`

Sets the `max-block-size` property to `stretch`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-stretch">Stretch</div>
</div>

```html
<div class="max-block-stretch">
  Stretch
</div>
```

### `.max-block-full`

Sets the `max-block-size` property to `100%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-full">Full</div>
</div>

```html
<div class="max-block-full">
  Full
</div>
```

### `.max-block-quarter`

Sets the `max-block-size` property to `25%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-quarter">Quarter</div>
</div>

```html
<div class="max-block-quarter">
  Quarter
</div>
```

### `.max-block-half`

Sets the `max-block-size` property to `50%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-half">Half</div>
</div>

```html
<div class="max-block-half">
  Half
</div>
```

### `.max-block-three-quarters`

Sets the `max-block-size` property to `75%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-three-quarters">Three-quarters</div>
</div>

```html
<div class="max-block-three-quarters">
  Three-quarters
</div>
```

### `.max-block-third`

Sets the `max-block-size` property to `calc(100%/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-third">Third</div>
</div>

```html
<div class="max-block-third">
  Third
</div>
```

### `.max-block-two-thirds`

Sets the `max-block-size` property to `calc(100%/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-block-two-thirds">Two-thirds</div>
</div>

```html
<div class="max-block-two-thirds">
  Two-thirds
</div>
```

### `.max-block-half-screen`

Sets the `max-block-size` property to `50vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-block-half-screen">Half-screen</div>
</div>

```html
<div class="max-block-half-screen">
  Half-screen
</div>
```

### `.max-block-third-screen`

Sets the `max-block-size` property to `calc(100vh/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-block-third-screen">Third-screen</div>
</div>

```html
<div class="max-block-third-screen">
  Third-screen
</div>
```

### `.max-block-two-thirds-screen`

Sets the `max-block-size` property to `calc(100vh/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-block-two-thirds-screen">Two-thirds-screen</div>
</div>

```html
<div class="max-block-two-thirds-screen">
  Two-thirds-screen
</div>
```

### `.max-block-quarter-screen`

Sets the `max-block-size` property to `25vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-block-quarter-screen">Quarter-screen</div>
</div>

```html
<div class="max-block-quarter-screen">
  Quarter-screen
</div>
```

### `.max-block-three-quarters-screen`

Sets the `max-block-size` property to `75vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-block-three-quarters-screen">Three-quarters-screen</div>
</div>

```html
<div class="max-block-three-quarters-screen">
  Three-quarters-screen
</div>
```

### `.max-block-full-screen`

Sets the `max-block-size` property to `100vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-block-full-screen">Full-screen</div>
</div>

```html
<div class="max-block-full-screen">
  Full-screen
</div>
```

### `.max-block-#{spacer}`

Uses `--graupl-spacer-0` through `--graupl-spacer-10` to set the `max-block-size` property to the corresponding value.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: 1fr; grid-template-rows: auto;">
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-0"><span class="position-absolute">0</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-1"><span class="position-absolute">1</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-2"><span class="position-absolute">2</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-3"><span class="position-absolute">3</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-4"><span class="position-absolute">4</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-5"><span class="position-absolute">5</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-6"><span class="position-absolute">6</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-7"><span class="position-absolute">7</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-8"><span class="position-absolute">8</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-9"><span class="position-absolute">9</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-block-10"><span class="position-absolute">10</span></div>
</div>

```html
<div class="max-block-0">
   0
</div>
<div class="max-block-10">
   10
</div>
```

## Min Block Size

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
| [`.min-block-three-quarters-screen`](#min-block-three-quarters-screen) | min-block-size | 75vh |
| [`.min-block-full-screen`](#min-block-full-screen) | min-block-size | 100vh |
| [`.min-block-0`](#min-block-spacer) | min-block-size | var(--graupl-spacer-0) |
| [`.min-block-1`](#min-block-spacer) | min-block-size | var(--graupl-spacer-1) |
| [`.min-block-2`](#min-block-spacer) | min-block-size | var(--graupl-spacer-2) |
| [`.min-block-3`](#min-block-spacer) | min-block-size | var(--graupl-spacer-3) |
| [`.min-block-4`](#min-block-spacer) | min-block-size | var(--graupl-spacer-4) |
| [`.min-block-5`](#min-block-spacer) | min-block-size | var(--graupl-spacer-5) |
| [`.min-block-6`](#min-block-spacer) | min-block-size | var(--graupl-spacer-6) |
| [`.min-block-7`](#min-block-spacer) | min-block-size | var(--graupl-spacer-7) |
| [`.min-block-8`](#min-block-spacer) | min-block-size | var(--graupl-spacer-8) |
| [`.min-block-9`](#min-block-spacer) | min-block-size | var(--graupl-spacer-9) |
| [`.min-block-10`](#min-block-spacer) | min-block-size | var(--graupl-spacer-10) |

### `.min-block-auto`

Sets the `min-block-size` property to `auto`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-auto">Auto</div>
</div>

```html
<div class="min-block-auto">
  Auto
</div>
```


### `.min-block-fit-content`

Sets the `min-block-size` property to `fit-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-fit-content">Fit-content</div>
</div>

```html
<div class="min-block-fit-content">
  Fit-content
</div>
```

### `.min-block-max-content`

Sets the `min-block-size` property to `max-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-max-content">Max-content</div>
</div>

```html
<div class="min-block-max-content">
  Max-content
</div>
```

### `.min-block-min-content`

Sets the `min-block-size` property to `min-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-min-content">Min-content</div>
</div>

```html
<div class="min-block-min-content">
  Min-content
</div>
```

### `.min-block-stretch`

Sets the `min-block-size` property to `stretch`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-stretch">Stretch</div>
</div>

```html
<div class="min-block-stretch">
  Stretch
</div>
```

### `.min-block-full`

Sets the `min-block-size` property to `100%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-full">Full</div>
</div>

```html
<div class="min-block-full">
  Full
</div>
```

### `.min-block-quarter`

Sets the `min-block-size` property to `25%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-quarter">Quarter</div>
</div>

```html
<div class="min-block-quarter">
  Quarter
</div>
```

### `.min-block-half`

Sets the `min-block-size` property to `50%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-half">Half</div>
</div>

```html
<div class="min-block-half">
  Half
</div>
```

### `.min-block-three-quarters`

Sets the `min-block-size` property to `75%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-three-quarters">Three-quarters</div>
</div>

```html
<div class="min-block-three-quarters">
  Three-quarters
</div>
```

### `.min-block-third`

Sets the `min-block-size` property to `calc(100%/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-third">Third</div>
</div>

```html
<div class="min-block-third">
  Third
</div>
```

### `.min-block-two-thirds`

Sets the `min-block-size` property to `calc(100%/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-block-two-thirds">Two-thirds</div>
</div>

```html
<div class="min-block-two-thirds">
  Two-thirds
</div>
```

### `.min-block-half-screen`

Sets the `min-block-size` property to `50vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-block-half-screen">Half-screen</div>
</div>

```html
<div class="min-block-half-screen">
  Half-screen
</div>
```

### `.min-block-third-screen`

Sets the `min-block-size` property to `calc(100vh/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-block-third-screen">Third-screen</div>
</div>

```html
<div class="min-block-third-screen">
  Third-screen
</div>
```

### `.min-block-two-thirds-screen`

Sets the `min-block-size` property to `calc(100vh/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-block-two-thirds-screen">Two-thirds-screen</div>
</div>

```html
<div class="min-block-two-thirds-screen">
  Two-thirds-screen
</div>
```

### `.min-block-quarter-screen`

Sets the `min-block-size` property to `25vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-block-quarter-screen">Quarter-screen</div>
</div>

```html
<div class="min-block-quarter-screen">
  Quarter-screen
</div>
```

### `.min-block-three-quarters-screen`

Sets the `min-block-size` property to `75vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-block-three-quarters-screen">Three-quarters-screen</div>
</div>

```html
<div class="min-block-three-quarters-screen">
  Three-quarters-screen
</div>
```

### `.min-block-full-screen`

Sets the `min-block-size` property to `100vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-block-full-screen">Full-screen</div>
</div>

```html
<div class="min-block-full-screen">
  Full-screen
</div>
```

### `.min-block-#{spacer}`

Uses `--graupl-spacer-0` through `--graupl-spacer-10` to set the `min-block-size` property to the corresponding value.

<div class="w-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: 1fr; grid-template-rows: auto;">
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-0"><span class="position-absolute">0</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-1"><span class="position-absolute">1</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-2"><span class="position-absolute">2</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-3"><span class="position-absolute">3</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-4"><span class="position-absolute">4</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-5"><span class="position-absolute">5</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-6"><span class="position-absolute">6</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-7"><span class="position-absolute">7</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-8"><span class="position-absolute">8</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-9"><span class="position-absolute">9</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-block-10"><span class="position-absolute">10</span></div>
</div>

```html
<div class="min-block-0">
   0
</div>
<div class="min-block-10">
   10
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

## Responsive variants

To generate responsive alignment utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$container-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
