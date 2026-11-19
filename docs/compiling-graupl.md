# Compiling Graupl

If you need even more control over the way Graupl's defaults are set or choose which styles to include before you build your stylesheet, you can compile your own version of Graupl using Sass.

::: info Graupl Core
[Quick Start](./quick-start.md) uses `@graupl/graupl` for ready-to-use CSS and JavaScript. To build your own stylesheet, use `@graupl/core`, which provides the Sass files and settings.
:::

## Build your stylesheet

You'll need Dart Sass available as `sass` in your terminal. In your project folder, install Graupl's Sass package.

```sh
npm install @graupl/core
```

Create a file named `styles.scss` in the same folder. Add this line to load all of Graupl's styles with their default settings.

```scss
@use "pkg:@graupl/core";
```

Run this command from the folder that contains `styles.scss`. The `--pkg-importer=node` option tells Sass to look in your installed packages when it sees a `pkg:` import. The command reads `styles.scss` and writes `graupl.css`.

```sh
sass --pkg-importer=node styles.scss graupl.css
```

Replace the stylesheet from [Quick Start](./quick-start.md) with the generated `graupl.css`. You can also change styles after compilation using CSS custom properties. See [Customizing Graupl](./customizing-graupl.md).

## Overriding Graupl's default variables

Sass variables marked with `!default` have a value you can replace. To replace one, load its defaults module with `@use ... with` before importing the main Graupl stylesheet. Replace the contents of `styles.scss` with this example and run the same build command. The new CSS uses `--custom-` as the prefix for its custom properties.

```scss
@use "pkg:@graupl/core/src/defaults.scss" with (
  $id: "custom",
);

@use "pkg:@graupl/core";
```

## Adding a theme color palette

A palette is a named group of colors. Add one to the color module's `$colors` map, which stores palettes by name. This version of `styles.scss` adds a palette named `ice` with nine shades, from the lightest at `100` to the darkest at `900`.

```scss
@use "pkg:@graupl/core/src/theme/color/defaults.scss" with (
  $colors: (
    "ice": (
      "100": #eff8ff,
      "200": #dbeefb,
      "300": #b9dff5,
      "400": #90c8e8,
      "500": #65acd6,
      "600": #3e86b0,
      "700": #2c6486,
      "800": #214a65,
      "900": #162f42,
    ),
  ),
);

@use "pkg:@graupl/core";
```

Compiling this palette adds custom properties and utility classes such as `.bg-ice-100` and `.text-ice-900`.

Adding a colour palette also generates a new colour variant for components with theme variants enabled. Add `.ice` alongside `.button` to use the new palette on a button.

```html
<button type="button" class="button ice">Reserve skates</button>
```

Each component's theme map chooses which shades its variant uses. See [Theme Colors](./theme/colors.md) for more on palettes.

::: info Replacing an existing palette
You can also replace Graupl's default palettes by setting them to different values in your `@use ... with` statement. Try renaming "ice" to "primary" and see what happens!
:::
