# Global Defaults and Variables

## Defaults

```sass
// Prefix for custom properties and other naming conventions.
$prefix: "graupl" !default;

// Settings.
$use-important: true !default;

// Layout properties.
$content-max-width: 96ch !default;

// Screen sizes.
$base-screen-sizes: (
  xs: "(width <= 48ch)",
  sm: "(48ch < width)",
  md: "(72ch < width)",
  lg: "(108ch < width)",
  xl: "(156ch < width)",
);
$custom-screen-sizes: () !default;
$screen-sizes: map.merge($base-screen-sizes, $custom-screen-sizes);
$base-screen-size-triggers: (
  navigation-collapse: "(width <= 72ch)",
  navigation-expand: "(72ch < width)",
  force-vertical-card: "(width <= 72ch)",
);
$custom-screen-size-triggers: () !default;
$screen-size-triggers: map.merge(
  $base-screen-size-triggers,
  $custom-screen-size-triggers
);

// Spacing properties.
$spacer: 1rem !default;
$base-spacer-multipliers: (
  0: 0,
  1: 0.125,
  2: 0.25,
  3: 0.5,
  4: 0.75,
  5: 1,
  6: 1.5,
  7: 2,
  8: 3,
  9: 5,
  10: 10,
);
$custom-spacer-multipliers: () !default;
$spacer-multipliers: map.merge(
  $base-spacer-multipliers,
  $custom-spacer-multipliers
);

// Size properties.
$interactive-min-width: 44px !default;
$interactive-min-height: 44px !default;

// Border properties.
$border-radius: 0.125rem !default;
$border-width: 2px !default;
$border-style: solid !default;

// Transition properties.
$transition-duration-base: 100 !default;
$transition-timing-function: ease !default;
$base-transition-durations: (
  fast: #{$transition-duration-base * 1.5}ms,
  default: #{$transition-duration-base * 2.5}ms,
  slow: #{$transition-duration-base * 3}ms,
);
$custom-transition-durations: () !default;
$transition-durations: map.merge(
  $base-transition-durations,
  $custom-transition-durations
);
```

## Variables

The layout properties:

```scss
--#{defaults.$prefix}-content-max-width

```

The spacing properties:

```scss
--#{defaults.$prefix}-spacer
--#{defaults.$prefix}-spacer-#{$key}

```

The border properties:

```scss
--#{defaults.$prefix}-border-radius
--#{defaults.$prefix}-border-width
--#{defaults.$prefix}-border-style

```

The transition duration properties:

```scss
--#{defaults.$prefix}-transition-duration-fast
--#{defaults.$prefix}-transition-duration-default
--#{defaults.$prefix}-transition-duration-slow

```

The transition timing function property:

```scss
--#{defaults.$prefix}-transition-timing-function

```
