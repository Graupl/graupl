# Compiling your own version of Graupl

If you want to compile your own version of Graupl, you can! Here's how:

```scss
// Import Graupl.
@forward '@graupl/graupl';

// Import your own theme...
```

## Overriding Graupl's default variables

Graupl's sass variables are all declared with `!default` flag. This means you can override them in your own theme file.

```scss
// Import the file containing the variables you want to override.
@forward '@graupl/graupl/defaults' with (
  $prefix: 'custom',
);

// Import Graupl.
@forward '@graupl/graupl';

// Import your own theme...
```

## Adding new theme colours

You can add new colours to Graupl by adding to the `$custom-colours` map.

```scss
// Import the theme's defaults.
@forward "@graupl/graupl/theme/defaults" with (
  $custom-colors: (
    custom: (
      100: #f0f0f0,
      200: #e0e0e0,
      300: #d0d0d0,
      400: #c0c0c0,
      500: #b0b0b0,
      600: #a0a0a0,
      700: #909090,
      800: #808080,
      900: #707070,
    ),
  ),
);

// Import Graupl.
@forward '@graupl/graupl';

// Import your own theme...
```

These colours will have new classes generated for them, e.g. `background-custom-100`, `color-custom-100`, etc. as well as component variants, e.g. `button custom`, and full dark-mode support.
