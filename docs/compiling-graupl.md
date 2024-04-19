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
