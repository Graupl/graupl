# Content

## Table

Default Values

```jsx
// Table selectors.
$table-selector: "table" !default;
$table-caption-selector: "caption" !default;
$table-header-selector: "th" !default;
$table-cell-selector: "td" !default;
$table-row-selector: "tr" !default;
$table-head-selector: "thead" !default;
$table-body-selector: "tbody" !default;
$table-foot-selector: "tfoot" !default;
$table-theme-prefix-selector: "." !default;
$table-bordered-selector: ".bordered" !default;
$table-collapsed-selector: ".collapsed" !default;
$table-striped-columns-selector: ".striped-columns" !default;
$table-striped-rows-selector: ".striped-rows" !default;
$table-hoverable-selector: ".hoverable" !default;
$table-highlight-selector: ".highlight" !default;
$table-responsive-selector: ".responsive-table" !default;

// Table properties.
$table-caption-side: bottom !default;

// Table theme defaults.
// This map is used to define the default colour shades for the
// themed table bases.
//
// e.g.
// Primary tables will use primary--700 as the header background,
// and primary--100 as the header text colour.
//
// Secondary/tertiary tables will use the same shade for their respective colours.
$base-table-theme-map: (
  header-background: 700,
  header-color: 100,
  striped-background: 200,
  striped-color: 900,
  hover-background: 300,
  hover-color: 900,
  border-color: 900,
  highlight-background: 500,
  highlight-color: 100,
);
$custom-table-theme-map: () !default;
$table-theme-map: map.merge($base-table-theme-map, $custom-table-theme-map);
```

Table Caption Properties

```jsx
--#{root-defaults.$prefix}-table-caption-side
--#{root-defaults.$prefix}-table-caption-padding-x
--#{root-defaults.$prefix}-table-caption-padding-y
```

Table Header Properties

```jsx
--#{root-defaults.$prefix}-table-header-font-weight
--#{root-defaults.$prefix}-table-header-padding-x
--#{root-defaults.$prefix}-table-header-padding-y
--#{root-defaults.$prefix}-table-header-background
--#{root-defaults.$prefix}-table-header-color
```

Table Cell Properties

```jsx
--#{root-defaults.$prefix}-table-cell-padding-x
--#{root-defaults.$prefix}-table-cell-padding-y
--#{root-defaults.$prefix}-table-cell-background
--#{root-defaults.$prefix}-table-cell-color
```

Table Border Properties

```jsx
--#{root-defaults.$prefix}-table-border-width
--#{root-defaults.$prefix}-table-border-style
--#{root-defaults.$prefix}-table-border
--#{root-defaults.$prefix}-table-border-color
```

Table cell border properties

```jsx
--#{root-defaults.$prefix}-table-cell-border-width
--#{root-defaults.$prefix}-table-cell-border-style
--#{root-defaults.$prefix}-table-cell-border
--#{root-defaults.$prefix}-table-cell-border-color
```

Table striped properties

```jsx
--#{root-defaults.$prefix}-table-striped-background
--#{root-defaults.$prefix}-table-striped-color
```

Table hover properties

```jsx
--#{root-defaults.$prefix}-table-hover-background
--#{root-defaults.$prefix}-table-hover-color
```

Table highlight properties

```jsx
--#{root-defaults.$prefix}-table-highlight-background
--#{root-defaults.$prefix}-table-highlight-color
```

## Link

Default Values

```jsx
// Link selectors.
$link-selector: "a" !default;
$stretched-link-selector: ".stretched" !default;
$stretched-link-pseudo-selector: "before" !default;

// Link properties.
$link-text-decoration: underline !default;
$link-visited-text-decoration: $link-text-decoration !default;
$link-active-text-decoration: $link-text-decoration !default;
$link-hover-text-decoration: $link-text-decoration !default;
$link-focus-text-decoration: $link-text-decoration !default;
$link-disabled-text-decoration: $link-text-decoration !default;
$link-text-decoration-style: solid !default;
$link-visited-text-decoration-style: $link-text-decoration-style !default;
$link-active-text-decoration-style: $link-text-decoration-style !default;
$link-hover-text-decoration-style: $link-text-decoration-style !default;
$link-focus-text-decoration-style: $link-text-decoration-style !default;
$link-disabled-text-decoration-style: $link-text-decoration-style !default;
$link-transform: none !default;
$link-visited-transform: $link-transform !default;
$link-focus-transform: $link-transform !default;
$link-hover-transform: $link-transform !default;
$link-active-transform: $link-transform !default;
$link-disabled-transform: $link-transform !default;
$link-border-width: 0 !default;
$link-border-color: transparent !default;
$link-visited-border-color: $link-border-color !default;
$link-focus-border-color: $link-border-color !default;
$link-hover-border-color: $link-border-color !default;
$link-active-border-color: $link-border-color !default;
$link-disabled-border-color: $link-border-color !default;
$link-background: transparent !default;
$link-visited-background: $link-background !default;
$link-focus-background: $link-background !default;
$link-hover-background: $link-background !default;
$link-active-background: $link-background !default;
$link-disabled-background: $link-background !default;
$link-min-width: auto;
$link-min-height: auto;

// Stretched link properties.
$stretched-link-z-index: 5 !default;

```

Link Properties

```jsx
--#{root-defaults.$prefix}-link-text-decoration
--#{root-defaults.$prefix}-link-visited-text-decoration
--#{root-defaults.$prefix}-link-focus-text-decoration
--#{root-defaults.$prefix}-link-hover-text-decoration
--#{root-defaults.$prefix}-link-active-text-decoration
--#{root-defaults.$prefix}-link-disabled-text-decoration
--#{root-defaults.$prefix}-link-text-decoration-thickness
--#{root-defaults.$prefix}-link-visited-text-decoration-thickness
--#{root-defaults.$prefix}-link-focus-text-decoration-thickness
--#{root-defaults.$prefix}-link-hover-text-decoration-thickness
--#{root-defaults.$prefix}-link-active-text-decoration-thickness
--#{root-defaults.$prefix}-link-disabled-text-decoration-thickness
--#{root-defaults.$prefix}-link-text-decoration-style
--#{root-defaults.$prefix}-link-visited-text-decoration-style
--#{root-defaults.$prefix}-link-focus-text-decoration-style
--#{root-defaults.$prefix}-link-hover-text-decoration-style
--#{root-defaults.$prefix}-link-active-text-decoration-style
--#{root-defaults.$prefix}-link-disabled-text-decoration-style
--#{root-defaults.$prefix}-link-color
--#{root-defaults.$prefix}-link-visited-color
--#{root-defaults.$prefix}-link-focus-color
--#{root-defaults.$prefix}-link-hover-color
--#{root-defaults.$prefix}-link-active-color
--#{root-defaults.$prefix}-link-disabled-color
--#{root-defaults.$prefix}-link-text-decoration-color
--#{root-defaults.$prefix}-link-visited-text-decoration-color
--#{root-defaults.$prefix}-link-focus-text-decoration-color
--#{root-defaults.$prefix}-link-hover-text-decoration-color
--#{root-defaults.$prefix}-link-active-text-decoration-color
--#{root-defaults.$prefix}-link-disabled-text-decoration-color
--#{root-defaults.$prefix}-link-background
--#{root-defaults.$prefix}-link-visited-background
--#{root-defaults.$prefix}-link-focus-background
--#{root-defaults.$prefix}-link-hover-background
--#{root-defaults.$prefix}-link-active-background
--#{root-defaults.$prefix}-link-disabled-background
--#{root-defaults.$prefix}-link-padding-x
--#{root-defaults.$prefix}-link-padding-y
--#{root-defaults.$prefix}-link-padding
--#{root-defaults.$prefix}-link-transition
--#{root-defaults.$prefix}-link-transition-reduced-motion
--#{root-defaults.$prefix}-link-transform
--#{root-defaults.$prefix}-link-visited-transform
--#{root-defaults.$prefix}-link-focus-transform
--#{root-defaults.$prefix}-link-hover-transform
--#{root-defaults.$prefix}-link-active-transform
--#{root-defaults.$prefix}-link-disabled-transform
--#{root-defaults.$prefix}-link-border-width
--#{root-defaults.$prefix}-link-border-style
--#{root-defaults.$prefix}-link-border
--#{root-defaults.$prefix}-link-border-radius
--#{root-defaults.$prefix}-link-border-color
--#{root-defaults.$prefix}-link-visited-border-color
--#{root-defaults.$prefix}-link-focus-border-color
--#{root-defaults.$prefix}-link-hover-border-color
--#{root-defaults.$prefix}-link-active-border-color
--#{root-defaults.$prefix}-link-disabled-border-color
--#{root-defaults.$prefix}-link-min-width
--#{root-defaults.$prefix}-link-min-height
```

Stretch Link

```jsx
--#{root-defaults.$prefix}-stretched-link-z-index
```
