# Height Utilities

The height utilities provide a set of classes to adjust the `height`, `max-height`, and `min-height` properties of elements.

## Height

| Class Name | Property | Value |
| --- | --- | --- |
| [`.h-auto`](#h-auto) | height | auto |
| [`.h-fit-content`](#h-fit-content) | height | fit-content |
| [`.h-max-content`](#h-max-content) | height | max-content |
| [`.h-min-content`](#h-min-content) | height | min-content |
| [`.h-stretch`](#h-stretch) | height | stretch |
| [`.h-full`](#h-full) | height | 100% |
| [`.h-quarter`](#h-quarter) | height | 25% |
| [`.h-half`](#h-half) | height | 50% |
| [`.h-three-quarters`](#h-three-quarters) | height | 75% |
| [`.h-third`](#h-third) | height | calc(100%/ 3) |
| [`.h-two-thirds`](#h-two-thirds) | height | calc(100%/ 1.5) |
| [`.h-half-screen`](#h-half-screen) | height | 50vh |
| [`.h-third-screen`](#h-third-screen) | height | calc(100vh/ 3) |
| [`.h-two-thirds-screen`](#h-two-thirds-screen) | height | calc(100vh/ 1.5) |
| [`.h-quarter-screen`](#h-quarter-screen) | height | 25vh |
| [`.h-three-quarters-screen`](#h-three-quarters-screen) | height | 75vh |
| [`.h-full-screen`](#h-full-screen) | height | 100vh |
| [`.h-0`](#h-spacer) | height | var(--graupl-spacer-0) |
| [`.h-1`](#h-spacer) | height | var(--graupl-spacer-1) |
| [`.h-2`](#h-spacer) | height | var(--graupl-spacer-2) |
| [`.h-3`](#h-spacer) | height | var(--graupl-spacer-3) |
| [`.h-4`](#h-spacer) | height | var(--graupl-spacer-4) |
| [`.h-5`](#h-spacer) | height | var(--graupl-spacer-5) |
| [`.h-6`](#h-spacer) | height | var(--graupl-spacer-6) |
| [`.h-7`](#h-spacer) | height | var(--graupl-spacer-7) |
| [`.h-8`](#h-spacer) | height | var(--graupl-spacer-8) |
| [`.h-9`](#h-spacer) | height | var(--graupl-spacer-9) |
| [`.h-10`](#h-spacer) | height | var(--graupl-spacer-10) |

### `.h-auto`

Sets the `height` property to `auto`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-auto">Auto</div>
</div>

```html
<div class="h-auto">
  Auto
</div>
```


### `.h-fit-content`

Sets the `height` property to `fit-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-fit-content">Fit-content</div>
</div>

```html
<div class="h-fit-content">
  Fit-content
</div>
```

### `.h-max-content`

Sets the `height` property to `max-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-max-content">Max-content</div>
</div>

```html
<div class="h-max-content">
  Max-content
</div>
```

### `.h-min-content`

Sets the `height` property to `min-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-min-content">Min-content</div>
</div>

```html
<div class="h-min-content">
  Min-content
</div>
```

### `.h-stretch`

Sets the `height` property to `stretch`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-stretch">Stretch</div>
</div>

```html
<div class="h-stretch">
  Stretch
</div>
```

### `.h-full`

Sets the `height` property to `100%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-full">Full</div>
</div>

```html
<div class="h-full">
  Full
</div>
```

### `.h-quarter`

Sets the `height` property to `25%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-quarter">Quarter</div>
</div>

```html
<div class="h-quarter">
  Quarter
</div>
```

### `.h-half`

Sets the `height` property to `50%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-half">Half</div>
</div>

```html
<div class="h-half">
  Half
</div>
```

### `.h-three-quarters`

Sets the `height` property to `75%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-three-quarters">Three-quarters</div>
</div>

```html
<div class="h-three-quarters">
  Three-quarters
</div>
```

### `.h-third`

Sets the `height` property to `calc(100%/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-third">Third</div>
</div>

```html
<div class="h-third">
  Third
</div>
```

### `.h-two-thirds`

Sets the `height` property to `calc(100%/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 h-two-thirds">Two-thirds</div>
</div>

```html
<div class="h-two-thirds">
  Two-thirds
</div>
```

### `.h-half-screen`

Sets the `height` property to `50vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 p-4 m-4 block-half-screen">Half-screen</div>
</div>

```html
<div class="h-half-screen">
  Half-screen
</div>
```

### `.h-third-screen`

Sets the `height` property to `calc(100vh/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 p-4 m-4 block-third-screen">Third-screen</div>
</div>

```html
<div class="h-third-screen">
  Third-screen
</div>
```

### `.h-two-thirds-screen`

Sets the `height` property to `calc(100vh/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 p-4 m-4 block-two-thirds-screen">Two-thirds-screen</div>
</div>

```html
<div class="h-two-thirds-screen">
  Two-thirds-screen
</div>
```

### `.h-quarter-screen`

Sets the `height` property to `25vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 p-4 m-4 block-quarter-screen">Quarter-screen</div>
</div>

```html
<div class="h-quarter-screen">
  Quarter-screen
</div>
```

### `.h-three-quarters-screen`

Sets the `height` property to `75vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 p-4 m-4 block-three-quarters-screen">Three-quarters-screen</div>
</div>

```html
<div class="h-three-quarters-screen">
  Three-quarters-screen
</div>
```

### `.h-full-screen`

Sets the `height` property to `100vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 p-4 m-4 block-full-screen">Full-screen</div>
</div>

```html
<div class="h-full-screen">
  Full-screen
</div>
```

### `.h-#{spacer}`

Uses `--graupl-spacer-0` through `--graupl-spacer-10` to set the `height` property to the corresponding value.

<div class="h-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: 1fr; grid-template-rows: auto;">
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
<div class="h-0">
   0
</div>
<div class="h-10">
   10
</div>
```

## Max Height

| Class Name | Property | Value |
| --- | --- | --- |
| [`.max-h-auto`](#max-h-auto) | max-height | auto |
| [`.max-h-fit-content`](#max-h-fit-content) | max-height | fit-content |
| [`.max-h-max-content`](#max-h-max-content) | max-height | max-content |
| [`.max-h-min-content`](#max-h-min-content) | max-height | min-content |
| [`.max-h-stretch`](#max-h-stretch) | max-height | stretch |
| [`.max-h-full`](#max-h-full) | max-height | 100% |
| [`.max-h-quarter`](#max-h-quarter) | max-height | 25% |
| [`.max-h-half`](#max-h-half) | max-height | 50% |
| [`.max-h-three-quarters`](#max-h-three-quarters) | max-height | 75% |
| [`.max-h-third`](#max-h-third) | max-height | calc(100%/ 3) |
| [`.max-h-two-thirds`](#max-h-two-thirds) | max-height | calc(100%/ 1.5) |
| [`.max-h-half-screen`](#max-h-half-screen) | max-height | 50vh |
| [`.max-h-third-screen`](#max-h-third-screen) | max-height | calc(100vh/ 3) |
| [`.max-h-two-thirds-screen`](#max-h-two-thirds-screen) | max-height | calc(100vh/ 1.5) |
| [`.max-h-quarter-screen`](#max-h-quarter-screen) | max-height | 25vh |
| [`.max-h-three-quarters-screen`](#max-h-three-quarters-screen) | max-height | 75vh |
| [`.max-h-full-screen`](#max-h-full-screen) | max-height | 100vh |
| [`.max-h-0`](#max-h-spacer) | max-height | var(--graupl-spacer-0) |
| [`.max-h-1`](#max-h-spacer) | max-height | var(--graupl-spacer-1) |
| [`.max-h-2`](#max-h-spacer) | max-height | var(--graupl-spacer-2) |
| [`.max-h-3`](#max-h-spacer) | max-height | var(--graupl-spacer-3) |
| [`.max-h-4`](#max-h-spacer) | max-height | var(--graupl-spacer-4) |
| [`.max-h-5`](#max-h-spacer) | max-height | var(--graupl-spacer-5) |
| [`.max-h-6`](#max-h-spacer) | max-height | var(--graupl-spacer-6) |
| [`.max-h-7`](#max-h-spacer) | max-height | var(--graupl-spacer-7) |
| [`.max-h-8`](#max-h-spacer) | max-height | var(--graupl-spacer-8) |
| [`.max-h-9`](#max-h-spacer) | max-height | var(--graupl-spacer-9) |
| [`.max-h-10`](#max-h-spacer) | max-height | var(--graupl-spacer-10) |

### `.max-h-auto`

Sets the `max-height` property to `auto`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-auto">Auto</div>
</div>

```html
<div class="max-h-auto">
  Auto
</div>
```


### `.max-h-fit-content`

Sets the `max-height` property to `fit-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-fit-content">Fit-content</div>
</div>

```html
<div class="max-h-fit-content">
  Fit-content
</div>
```

### `.max-h-max-content`

Sets the `max-height` property to `max-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-max-content">Max-content</div>
</div>

```html
<div class="max-h-max-content">
  Max-content
</div>
```

### `.max-h-min-content`

Sets the `max-height` property to `min-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-min-content">Min-content</div>
</div>

```html
<div class="max-h-min-content">
  Min-content
</div>
```

### `.max-h-stretch`

Sets the `max-height` property to `stretch`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-stretch">Stretch</div>
</div>

```html
<div class="max-h-stretch">
  Stretch
</div>
```

### `.max-h-full`

Sets the `max-height` property to `100%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-full">Full</div>
</div>

```html
<div class="max-h-full">
  Full
</div>
```

### `.max-h-quarter`

Sets the `max-height` property to `25%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-quarter">Quarter</div>
</div>

```html
<div class="max-h-quarter">
  Quarter
</div>
```

### `.max-h-half`

Sets the `max-height` property to `50%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-half">Half</div>
</div>

```html
<div class="max-h-half">
  Half
</div>
```

### `.max-h-three-quarters`

Sets the `max-height` property to `75%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-three-quarters">Three-quarters</div>
</div>

```html
<div class="max-h-three-quarters">
  Three-quarters
</div>
```

### `.max-h-third`

Sets the `max-height` property to `calc(100%/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-third">Third</div>
</div>

```html
<div class="max-h-third">
  Third
</div>
```

### `.max-h-two-thirds`

Sets the `max-height` property to `calc(100%/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 max-h-two-thirds">Two-thirds</div>
</div>

```html
<div class="max-h-two-thirds">
  Two-thirds
</div>
```

### `.max-h-half-screen`

Sets the `max-height` property to `50vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-h-half-screen">Half-screen</div>
</div>

```html
<div class="max-h-half-screen">
  Half-screen
</div>
```

### `.max-h-third-screen`

Sets the `max-height` property to `calc(100vh/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-h-third-screen">Third-screen</div>
</div>

```html
<div class="max-h-third-screen">
  Third-screen
</div>
```

### `.max-h-two-thirds-screen`

Sets the `max-height` property to `calc(100vh/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-h-two-thirds-screen">Two-thirds-screen</div>
</div>

```html
<div class="max-h-two-thirds-screen">
  Two-thirds-screen
</div>
```

### `.max-h-quarter-screen`

Sets the `max-height` property to `25vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-h-quarter-screen">Quarter-screen</div>
</div>

```html
<div class="max-h-quarter-screen">
  Quarter-screen
</div>
```

### `.max-h-three-quarters-screen`

Sets the `max-height` property to `75vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-h-three-quarters-screen">Three-quarters-screen</div>
</div>

```html
<div class="max-h-three-quarters-screen">
  Three-quarters-screen
</div>
```

### `.max-h-full-screen`

Sets the `max-height` property to `100vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 max-h-full-screen">Full-screen</div>
</div>

```html
<div class="max-h-full-screen">
  Full-screen
</div>
```

### `.max-h-#{spacer}`

Uses `--graupl-spacer-0` through `--graupl-spacer-10` to set the `max-height` property to the corresponding value.

<div class="h-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: 1fr; grid-template-rows: auto;">
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-0"><span class="position-absolute">0</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-1"><span class="position-absolute">1</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-2"><span class="position-absolute">2</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-3"><span class="position-absolute">3</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-4"><span class="position-absolute">4</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-5"><span class="position-absolute">5</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-6"><span class="position-absolute">6</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-7"><span class="position-absolute">7</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-8"><span class="position-absolute">8</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-9"><span class="position-absolute">9</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative max-h-10"><span class="position-absolute">10</span></div>
</div>

```html
<div class="max-h-0">
   0
</div>
<div class="max-h-10">
   10
</div>
```

## Min Height

| Class Name | Property | Value |
| --- | --- | --- |
| [`.min-h-auto`](#min-h-auto) | min-height | auto |
| [`.min-h-fit-content`](#min-h-fit-content) | min-height | fit-content |
| [`.min-h-max-content`](#min-h-max-content) | min-height | max-content |
| [`.min-h-min-content`](#min-h-min-content) | min-height | min-content |
| [`.min-h-stretch`](#min-h-stretch) | min-height | stretch |
| [`.min-h-full`](#min-h-full) | min-height | 100% |
| [`.min-h-quarter`](#min-h-quarter) | min-height | 25% |
| [`.min-h-half`](#min-h-half) | min-height | 50% |
| [`.min-h-three-quarters`](#min-h-three-quarters) | min-height | 75% |
| [`.min-h-third`](#min-h-third) | min-height | calc(100%/ 3) |
| [`.min-h-two-thirds`](#min-h-two-thirds) | min-height | calc(100%/ 1.5) |
| [`.min-h-half-screen`](#min-h-half-screen) | min-height | 50vh |
| [`.min-h-third-screen`](#min-h-third-screen) | min-height | calc(100vh/ 3) |
| [`.min-h-two-thirds-screen`](#min-h-two-thirds-screen) | min-height | calc(100vh/ 1.5) |
| [`.min-h-quarter-screen`](#min-h-quarter-screen) | min-height | 25vh |
| [`.min-h-three-quarters-screen`](#min-h-three-quarters-screen) | min-height | 75vh |
| [`.min-h-full-screen`](#min-h-full-screen) | min-height | 100vh |
| [`.min-h-0`](#min-h-spacer) | min-height | var(--graupl-spacer-0) |
| [`.min-h-1`](#min-h-spacer) | min-height | var(--graupl-spacer-1) |
| [`.min-h-2`](#min-h-spacer) | min-height | var(--graupl-spacer-2) |
| [`.min-h-3`](#min-h-spacer) | min-height | var(--graupl-spacer-3) |
| [`.min-h-4`](#min-h-spacer) | min-height | var(--graupl-spacer-4) |
| [`.min-h-5`](#min-h-spacer) | min-height | var(--graupl-spacer-5) |
| [`.min-h-6`](#min-h-spacer) | min-height | var(--graupl-spacer-6) |
| [`.min-h-7`](#min-h-spacer) | min-height | var(--graupl-spacer-7) |
| [`.min-h-8`](#min-h-spacer) | min-height | var(--graupl-spacer-8) |
| [`.min-h-9`](#min-h-spacer) | min-height | var(--graupl-spacer-9) |
| [`.min-h-10`](#min-h-spacer) | min-height | var(--graupl-spacer-10) |

### `.min-h-auto`

Sets the `min-height` property to `auto`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-auto">Auto</div>
</div>

```html
<div class="min-h-auto">
  Auto
</div>
```


### `.min-h-fit-content`

Sets the `min-height` property to `fit-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-fit-content">Fit-content</div>
</div>

```html
<div class="min-h-fit-content">
  Fit-content
</div>
```

### `.min-h-max-content`

Sets the `min-height` property to `max-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-max-content">Max-content</div>
</div>

```html
<div class="min-h-max-content">
  Max-content
</div>
```

### `.min-h-min-content`

Sets the `min-height` property to `min-content`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-min-content">Min-content</div>
</div>

```html
<div class="min-h-min-content">
  Min-content
</div>
```

### `.min-h-stretch`

Sets the `min-height` property to `stretch`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-stretch">Stretch</div>
</div>

```html
<div class="min-h-stretch">
  Stretch
</div>
```

### `.min-h-full`

Sets the `min-height` property to `100%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-full">Full</div>
</div>

```html
<div class="min-h-full">
  Full
</div>
```

### `.min-h-quarter`

Sets the `min-height` property to `25%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-quarter">Quarter</div>
</div>

```html
<div class="min-h-quarter">
  Quarter
</div>
```

### `.min-h-half`

Sets the `min-height` property to `50%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-half">Half</div>
</div>

```html
<div class="min-h-half">
  Half
</div>
```

### `.min-h-three-quarters`

Sets the `min-height` property to `75%`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-three-quarters">Three-quarters</div>
</div>

```html
<div class="min-h-three-quarters">
  Three-quarters
</div>
```

### `.min-h-third`

Sets the `min-height` property to `calc(100%/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-third">Third</div>
</div>

```html
<div class="min-h-third">
  Third
</div>
```

### `.min-h-two-thirds`

Sets the `min-height` property to `calc(100%/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-10">
  <div class="bg-primary-200 bordered border-tertiary-700 p-4 min-h-two-thirds">Two-thirds</div>
</div>

```html
<div class="min-h-two-thirds">
  Two-thirds
</div>
```

### `.min-h-half-screen`

Sets the `min-height` property to `50vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-h-half-screen">Half-screen</div>
</div>

```html
<div class="min-h-half-screen">
  Half-screen
</div>
```

### `.min-h-third-screen`

Sets the `min-height` property to `calc(100vh/ 3)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-h-third-screen">Third-screen</div>
</div>

```html
<div class="min-h-third-screen">
  Third-screen
</div>
```

### `.min-h-two-thirds-screen`

Sets the `min-height` property to `calc(100vh/ 1.5)`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-h-two-thirds-screen">Two-thirds-screen</div>
</div>

```html
<div class="min-h-two-thirds-screen">
  Two-thirds-screen
</div>
```

### `.min-h-quarter-screen`

Sets the `min-height` property to `25vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-h-quarter-screen">Quarter-screen</div>
</div>

```html
<div class="min-h-quarter-screen">
  Quarter-screen
</div>
```

### `.min-h-three-quarters-screen`

Sets the `min-height` property to `75vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-h-three-quarters-screen">Three-quarters-screen</div>
</div>

```html
<div class="min-h-three-quarters-screen">
  Three-quarters-screen
</div>
```

### `.min-h-full-screen`

Sets the `min-height` property to `100vh`.

<div class="container bg-primary-100 bordered border-primary-700 p-5 h-auto responsive-table">
  <div class="gradient from-primary-200 to-primary-400 bordered border-tertiary-700 m-4 p-4 min-h-full-screen">Full-screen</div>
</div>

```html
<div class="min-h-full-screen">
  Full-screen
</div>
```

### `.min-h-#{spacer}`

Uses `--graupl-spacer-0` through `--graupl-spacer-10` to set the `min-height` property to the corresponding value.

<div class="h-full display-grid g-4 bg-primary-100 bordered border-primary-700 p-5 h-auto" style="grid-template-columns: 1fr; grid-template-rows: auto;">
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-0"><span class="position-absolute">0</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-1"><span class="position-absolute">1</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-2"><span class="position-absolute">2</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-3"><span class="position-absolute">3</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-4"><span class="position-absolute">4</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-5"><span class="position-absolute">5</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-6"><span class="position-absolute">6</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-7"><span class="position-absolute">7</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-8"><span class="position-absolute">8</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-9"><span class="position-absolute">9</span></div>
  <div class="bg-primary-200 bordered border-tertiary-700 m-2 position-relative min-h-10"><span class="position-absolute">10</span></div>
</div>

```html
<div class="min-h-0">
   0
</div>
<div class="min-h-10">
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
