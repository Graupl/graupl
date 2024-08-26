# Theme

## Color

Defaults

```sass
// Colours.
$default-colors: (
  primary: (
    100: hsl(219deg 100% 95%),
    200: hsl(219deg 90% 80%),
    300: hsl(219deg 80% 65%),
    400: hsl(219deg 75% 55%),
    500: hsl(219deg 75% 50%),
    600: hsl(219deg 75% 45%),
    700: hsl(219deg 80% 35%),
    800: hsl(219deg 90% 20%),
    900: hsl(219deg 100% 10%),
  ),
  secondary: (
    100: hsl(235deg 40% 95%),
    200: hsl(235deg 30% 80%),
    300: hsl(235deg 20% 65%),
    400: hsl(235deg 15% 55%),
    500: hsl(235deg 15% 50%),
    600: hsl(235deg 15% 45%),
    700: hsl(235deg 20% 35%),
    800: hsl(235deg 30% 20%),
    900: hsl(235deg 40% 10%),
  ),
  tertiary: (
    100: hsl(340deg 85% 95%),
    200: hsl(340deg 75% 80%),
    300: hsl(340deg 65% 65%),
    400: hsl(340deg 60% 55%),
    500: hsl(340deg 60% 50%),
    600: hsl(340deg 60% 45%),
    700: hsl(340deg 65% 35%),
    800: hsl(340deg 75% 20%),
    900: hsl(340deg 85% 10%),
  ),
);
$custom-colors: () !default;
$colors: map.merge($default-colors, $custom-colors);

// A map for reversing the shade values of the dark theme.
$base-dark-map: (
  100: 900,
  200: 800,
  300: 700,
  400: 600,
  500: 500,
  600: 400,
  700: 300,
  800: 200,
  900: 100,
);
$custom-dark-map: () !default;
$dark-map: map.merge($base-dark-map, $custom-dark-map);

```

Variables

```sass
// A custom variable is defined for each color and shade.
--#{root-defaults.$prefix}-#{$color}--#{$shade}

// There are three modes for the theme.
// Active is what is currently being used.
--#{root-defaults.$prefix}-theme-active--#{$color}--#{$shade}
// Theme dark is the color used when dark mode is active.
--#{root-defaults.$prefix}-theme-dark--#{$color}--#{$shade}
// Light theme is the color active whne light mode is active
--#{root-defaults.$prefix}-theme-light--#{$color}--#{$shade}

// Globaly defined root color and root background.
--#{root-defaults.$prefix}-root-color
--#{root-defaults.$prefix}-root-background
```

## Typography

Defaults

```sass
// font properties.
$font-size-base: 1rem !default;
$root-font-size: clamp(0.85rem, calc(0.8rem + 0.5vw), 1.25rem) !default;
$line-height: 1.2em !default;

// Multipliers for font sizes.
// This uses a minor third scale.
// See: https://typescale.com/?size=16&scale=1.250&text=A%20Visual%20Type%20Scale&font=Lato&fontweight=400&bodyfont=body_font_default&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000
$base-font-size-multipliers: (
  xs: 0.694,
  sm: 0.833,
  base: 1,
  lg: 1.2,
  xl: 1.44,
  2xl: 1.728,
  3xl: 2.074,
  4xl: 2.488,
  5xl: 2.986,
);
$custom-font-size-multipliers: () !default;
$font-size-multipliers: map.merge(
  $base-font-size-multipliers,
  $custom-font-size-multipliers
);

// Weights.
$base-font-weights: (
  light: 300,
  normal: 400,
  bold: 700,
);
$custom-font-weights: () !default;
$font-weights: map.merge($base-font-weights, $custom-font-weights);

/* stylelint-disable-next-line scss/dollar-variable-colon-space-after */
$root-font-family:
  system-ui,
  -apple-system,
  blinkmacsystemfont,
  "Segoe UI",
  roboto,
  "Helvetica Neue",
  arial,
  sans-serif !default;
```

Variables

The font properties:

```scss
--#{root-defaults.$prefix}-font-size-base
--#{root-defaults.$prefix}-line-height

```

The font size properties:

```scss
--#{root-defaults.$prefix}-font-#{$key}

```

The font weight properties:

```scss
--#{root-defaults.$prefix}-font-weight-#{$key}
--#{root-defaults.$prefix}-font-weight-bold

```

The root properties:

```scss
--#{root-defaults.$prefix}-root-font-family
--#{root-defaults.$prefix}-root-font-size

```

The typography properties:

```scss
--#{root-defaults.$prefix}-body-font-size
--#{root-defaults.$prefix}-body-line-height
--#{root-defaults.$prefix}-body-font-weight
--#{root-defaults.$prefix}-paragraph-font-size
--#{root-defaults.$prefix}-paragraph-line-height
--#{root-defaults.$prefix}-paragraph-margin
--#{root-defaults.$prefix}-paragraph-font-weight
--#{root-defaults.$prefix}-small-font-size
--#{root-defaults.$prefix}-small-line-height
--#{root-defaults.$prefix}-small-margin
--#{root-defaults.$prefix}-small-font-weight

```

The heading properties:

```scss
--#{root-defaults.$prefix}-heading-font-family
--#{root-defaults.$prefix}-heading-line-height
--#{root-defaults.$prefix}-heading-margin
--#{root-defaults.$prefix}-heading-font-weight

```

The H1 properties:

```scss
--#{root-defaults.$prefix}-h1-font-size
--#{root-defaults.$prefix}-h1-line-height
--#{root-defaults.$prefix}-h1-margin
--#{root-defaults.$prefix}-h1-font-family
--#{root-defaults.$prefix}-h1-font-weight

```

The H2 properties:

```scss
--#{root-defaults.$prefix}-h2-font-size
--#{root-defaults.$prefix}-h2-line-height
--#{root-defaults.$prefix}-h2-margin
--#{root-defaults.$prefix}-h2-font-family
--#{root-defaults.$prefix}-h2-font-weight

```

The H3 properties:

```scss
--#{root-defaults.$prefix}-h3-font-size
--#{root-defaults.$prefix}-h3-line-height
--#{root-defaults.$prefix}-h3-margin
--#{root-defaults.$prefix}-h3-font-family
--#{root-defaults.$prefix}-h3-font-weight

```

The H4 properties:

```scss
--#{root-defaults.$prefix}-h4-font-size
--#{root-defaults.$prefix}-h4-line-height
--#{root-defaults.$prefix}-h4-margin
--#{root-defaults.$prefix}-h4-font-family
--#{root-defaults.$prefix}-h4-font-weight

```

The H5 properties:

```scss
--#{root-defaults.$prefix}-h5-font-size
--#{root-defaults.$prefix}-h5-line-height
--#{root-defaults.$prefix}-h5-margin
--#{root-defaults.$prefix}-h5-font-family
--#{root-defaults.$prefix}-h5-font-weight

```

The H6 properties:

```scss
--#{root-defaults.$prefix}-h6-font-size
--#{root-defaults.$prefix}-h6-line-height
--#{root-defaults.$prefix}-h6-margin
--#{root-defaults.$prefix}-h6-font-family
--#{root-defaults.$prefix}-h6-font-weight

```
