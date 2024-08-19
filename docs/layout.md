# Layout Documentation

## Layout

### Columns

Default Values

```jsx
// Columns selectors.
$columns-selector: ".columns" !default;
$columns-count-selector-prefix: ".count-" !default;
$columns-span-selector-prefix: ".span-" !default;

// Columns properties.
$columns-max-width: 1fr !default;
$columns-count: 3 !default;
$columns-min-count: 1 !default;
$columns-max-count: 6 !default;
$columns-span: 1 !default;
```

Variables

The columns row and column gap properties:

```scss
--#{root-defaults.$prefix}-columns-row-gap
--#{root-defaults.$prefix}-columns-column-gap

```

The columns count property:

```scss
--#{root-defaults.$prefix}-columns-count

```

The columns min-width property:

```scss
--#{root-defaults.$prefix}-columns-min-width

```

The columns max-width property:

```scss
--#{root-defaults.$prefix}-columns-max-width

```

The columns grid template columns property:

```scss
--#{root-defaults.$prefix}-columns-grid-template-columns

```

The columns span property:

```scss
--#{root-defaults.$prefix}-columns-span

```

### Container

Defaults

```jsx
// Container selectors.
$container-selector: ".container" !default;
$container-breakout-selector: ".breakout" !default;
$container-feature-selector: ".feature" !default;
$container-full-width-selector: ".full-width" !default;

// Container properties.
$container-breakout-width: 15ch !default;
$container-feature-width: 20ch !default;
```

Variables

The container gap property:

```scss
--#{root-defaults.$prefix}-container-gap
```

The container content max width property:

```scss
--#{root-defaults.$prefix}-container-content-max-width
```

The container breakout max width property:

```scss
--#{root-defaults.$prefix}-container-breakout-max-width
```

The container breakout width property:

```scss
--#{root-defaults.$prefix}-container-breakout-width
```

The container feature max width property:

```scss
--#{root-defaults.$prefix}-container-feature-max-width
```

The container feature width property:

```scss
--#{root-defaults.$prefix}-container-feature-width
```

The container content section width property:

```scss
--#{root-defaults.$prefix}-container-content-section-width
```

The container full width section width property:

```scss
--#{root-defaults.$prefix}-container-full-width-section-width
```

The container breakout section width property:

```scss
--#{root-defaults.$prefix}-container-breakout-section-width
```

The container feature section width property:

```scss
--#{root-defaults.$prefix}-container-feature-section-width
```

### Flex Columns

Defaults

```jsx
// Flex columns selectors.
$flex-columns-selector: ".flex-columns" !default;
$flex-columns-column-selector-prefix: ".col-" !default;
$flex-columns-fill-selector: ".fill" !default;

// Flex columns properties.
$flex-columns-min-count: 1 !default;
$flex-columns-max-count: 12 !default;
$flex-columns-size: auto !default;
$flex-columns-max-width: unset !default;
```

Variables

```jsx
--#{root-defaults.$prefix}-flex-columns-row-gap
--#{root-defaults.$prefix}-flex-columns-column-gap
--#{root-defaults.$prefix}-flex-columns-size
--#{root-defaults.$prefix}-flex-columns-max-width
```

Markup

```jsx
    <div class="py-10 full-width container">
      <h2>Flex columns</h2>
      <div class="flex-columns py-5">
        <div class="col-6 col-md-8 col-xl-9 py-7 bg-primary-700 text-primary-100 px-5">
          <div class="flex-columns">
            <div class="col-6 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
            <div class="col-6 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
          </div>
        </div>
        <div class="col-6 col-md-4 col-xl-3 py-7 bg-primary-700 text-primary-100 px-5"></div>
        <div class="col-12 py-7 bg-primary-700 text-primary-100 px-5">
          <div class="flex-columns">
            <div class="col-6 col-md-9 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
            <div class="col-6 col-md-3 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
          </div>
        </div>
        <div class="col-8 py-7 bg-primary-700 text-primary-100 px-5">
          <div class="flex-columns">
            <div class="col-3 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
            <div class="col-9 py-7 bg-tertiary-700 text-primary-100 px-5"></div>
          </div>
        </div>
        <div class="col-4 py-7 bg-primary-700 text-primary-100 px-5"></div>
      </div>
    </div>
```
