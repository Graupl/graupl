<script setup>
  import LiveExample from "./vue-components/LiveExample.vue";

  const example = `<button type="button" class="button primary">Report a hydra spotting</button>`;
</script>

# Quick Start

Add Graupl to your project by loading its stylesheet and adding JavaScript for any interactive components you use. If your project already uses npm, follow the installation steps below. You can also load Graupl directly from a CDN.

## Installation

Run this command in your project folder to install Graupl with npm.

```sh
npm install @graupl/graupl
```

If your build tool supports CSS imports, add this line to the JavaScript file your app loads first.

```js
import "@graupl/graupl/dist/css/graupl.css";
```

For a plain HTML page, copy `node_modules/@graupl/graupl/dist/css/graupl.css` next to your HTML file and add this inside the page's `<head>`.

```html
<link rel="stylesheet" href="./graupl.css">
```

## Using Graupl from a CDN

A CDN hosts the stylesheet for you. To load it from jsDelivr, paste this link inside your HTML file's `<head>`.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/graupl.css">
```

## Setup

Once the stylesheet is loaded, add this button inside your page's `<body>`. The `.button` class applies the standard button styles. Add `.primary` to use the primary colour variant.

<live-example :source-code="example" />

## When to add JavaScript

Base styles such as [Buttons](./base/button.md), utilities, and components such as [Badges](./components/badge.md) work with CSS alone. Interactive components such as [Accordions](./components/accordion.md) also use JavaScript to open and close panels.

The full `graupl.js` bundle sets up interactive components when the page loads. Choose the tab that matches how you loaded the stylesheet. For a bundler, add the import to your browser entry file. For a local or CDN script, put the tag in your page's `<head>`.

::: code-group

```js [Bundler]
import "@graupl/graupl/dist/js/graupl.js";
```

```html [Local]
<script defer src="./graupl.js"></script>
```

```html [CDN]
<script defer src="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/js/graupl.js"></script>
```

:::

For the Local option, copy `node_modules/@graupl/graupl/dist/js/graupl.js` next to your HTML file.

::: info Note
Navigation needs [Accessible Menu](https://accessible-menu.dev/) for its interactive behavior. See the [Navigation page](./components/navigation.md#initialization) for setup instructions.
:::

## Next steps

Use [Customizing Graupl](./customizing-graupl.md) to change styles with CSS custom properties, or see [Compiling Graupl](./compiling-graupl.md) to build a stylesheet with your own Sass settings.
