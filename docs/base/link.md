# Links

The link base component provides a set of classes to style links consistently across your application. It includes various states and modifiers to handle different link types and interactions.

The link component is a `<a>` element.

## Base element

The base `<a>` element is styled to handle the different states ( Visited, Focused, Hovered, Active, Disabled ).

<li><a href="https://graupl.dev/page-that-cant-be-visited">Link</a></li>

```html
<a href="https://graupl.dev/page-that-cant-be-visited">Link</a>
```

## Variants

There are 6 link state variants provided by default: `.visited`, `.focus`, `.hover`, `.active` and `.disabled`.

<div class="display-flex g-3 flex-wrap">
  <a> Default Link</a>
  <a :class="[$style.visited]">Visited Link</a>
  <a :class="[$style.focus]">Focused Link</a>
  <a :class="[$style.hover]">Hovered Link</a>
  <a :class="[$style.active]">Active Link</a>
  <a :class="[$style.disabled]">Disabled Link</a>
</div>

```html
  <a> Default Link</a>
  <a :class="[$style.visited]">Visited Link</a>
  <a :class="[$style.focus]">Focused Link</a>
  <a :class="[$style.hover]">Hovered Link</a>
  <a :class="[$style.active]">Active Link</a>
  <a :class="[$style.disabled]">Disabled Link</a>
```

## Custom Properties

The following custom properties can be used to customize the link element:

<table class="table bordered condensed striped-columns">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--graupl-button-min-width</code></td>
      <td>The minimum width of the button component.</td>
      <td><code>var(--graupl-interactive-min-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-min-height</code></td>
      <td>The minimum height of the button component.</td>
      <td><code>var(--graupl-interactive-min-height)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-padding-x</code></td>
      <td>The horizontal padding of the button component.</td>
      <td><code>var(--graupl-spacer-5)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-padding-y</code></td>
      <td>The vertical padding of the button component.</td>
      <td><code>var(--graupl-spacer-3)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-padding</code></td>
      <td>The padding of the button component (combines x and y padding)</td>
      <td><code>var(--graupl-button-padding-x) var(--graupl-button-padding-y)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-font-size</code></td>
      <td>The font size of the button component.</td>
      <td><code>var(--graupl-font-size-base)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-transition</code></td>
      <td>The transition of the button component.</td>
      <td><code>background var(--graupl-transition-duration-fast), color var(--graupl-transition-duration-fast), transform var(--graupl-transition-duration-fast)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-transition-reduced-motion</code></td>
      <td>The transition of the button component when reduced motion is enabled.</td>
      <td><code>background var(--graupl-transition-duration-none), color var(--graupl-transition-duration-none)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-transform</code></td>
      <td>The transform of the button component.</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-visited-transform</code></td>
      <td>The transform of a visited button component.</td>
      <td><code>var(--graupl-button-transform)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-focus-transform</code></td>
      <td>The transform of a focused button component.</td>
      <td><code>var(--graupl-button-transform)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-hover-transform</code></td>
      <td>The transform of a hovered button component.</td>
      <td><code>var(--graupl-button-transform)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-active-transform</code></td>
      <td>The transform of an active button component.</td>
      <td><code>scale(0.95)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-disabled-transform</code></td>
      <td>The transform of a disabled button component.</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-background</code></td>
      <td>The background colour of the button component.</td>
      <td><code>var(--graupl-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-visited-background</code></td>
      <td>The background colour of a visited button component.</td>
      <td><code>var(--graupl-button-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-focus-background</code></td>
      <td>The background colour of a focused button component.</td>
      <td><code>var(--graupl-button-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-hover-background</code></td>
      <td>The background colour of a hovered button component.</td>
      <td><code>var(--graupl-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-active-background</code></td>
      <td>The background colour of an active button component.</td>
      <td><code>var(--graupl-button-hover-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-disabled-background</code></td>
      <td>The background colour of a disabled button component.</td>
      <td><code>var(--graupl-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-color</code></td>
      <td>The text colour of the button component.</td>
      <td><code>var(--graupl-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-visited-color</code></td>
      <td>The text colour of a visited button component.</td>
      <td><code>var(--graupl-button-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-focus-color</code></td>
      <td>The text colour of a focused button component.</td>
      <td><code>var(--graupl-button-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-hover-color</code></td>
      <td>The text colour of a hovered button component.</td>
      <td><code>var(--graupl-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-active-color</code></td>
      <td>The text colour of an active button component.</td>
      <td><code>var(--graupl-button-hover-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-disabled-color</code></td>
      <td>The text colour of a disabled button component.</td>
      <td><code>var(--graupl-theme-active--primary--200)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-top-width</code></td>
      <td>The top border width of the button component.</td>
      <td><code>var(--graupl-border-top-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-right-width</code></td>
      <td>The right border width of the button component.</td>
      <td><code>var(--graupl-border-right-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-bottom-width</code></td>
      <td>The bottom border width of the button component.</td>
      <td><code>var(--graupl-border-bottom-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-left-width</code></td>
      <td>The left border width of the button component.</td>
      <td><code>var(--graupl-border-left-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-width</code></td>
      <td>The border width of the button component (combines top, right, bottom, and left widths)</td>
      <td><code>var(--graupl-button-border-top-width) var(--graupl-button-border-right-width) var(--graupl-button-border-bottom-width) var(--graupl-button-border-left-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-top-style</code></td>
      <td>The top border style of the button component.</td>
      <td><code>var(--graupl-border-top-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-right-style</code></td>
      <td>The right border style of the button component.</td>
      <td><code>var(--graupl-border-right-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-bottom-style</code></td>
      <td>The bottom border style of the button component.</td>
      <td><code>var(--graupl-border-bottom-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-left-style</code></td>
      <td>The left border style of the button component.</td>
      <td><code>var(--graupl-border-left-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-style</code></td>
      <td>The border style of the button component (combines top, right, bottom, and left styles)</td>
      <td><code>var(--graupl-button-border-top-style) var(--graupl-button-border-right-style) var(--graupl-button-border-bottom-style) var(--graupl-button-border-left-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-top-left-radius</code></td>
      <td>The top left border radius of the button component.</td>
      <td><code>var(--graupl-border-top-left-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-top-right-radius</code></td>
      <td>The top right border radius of the button component.</td>
      <td><code>var(--graupl-border-top-right-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-bottom-right-radius</code></td>
      <td>The bottom right border radius of the button component.</td>
      <td><code>var(--graupl-border-bottom-right-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-bottom-left-radius</code></td>
      <td>The bottom left border radius of the button component.</td>
      <td><code>var(--graupl-border-bottom-left-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-radius</code></td>
      <td>The border radius of the button component (combines top-left, top-right, bottom-right, and bottom-left radii)</td>
      <td><code>var(--graupl-button-border-top-left-radius) var(--graupl-button-border-top-right-radius) var(--graupl-button-border-bottom-right-radius) var(--graupl-button-border-bottom-left-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-border-color</code></td>
      <td>The border colour of the button component.</td>
      <td><code>var(--graupl-border-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-visited-border-color</code></td>
      <td>The border colour of a visited button component.</td>
      <td><code>var(--graupl-button-border-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-focus-border-color</code></td>
      <td>The border colour of a focused button component.</td>
      <td><code>var(--graupl-button-border-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-hover-border-color</code></td>
      <td>The border colour of a hovered button component.</td>
      <td><code>var(--graupl-border-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-active-border-color</code></td>
      <td>The border colour of an active button component.</td>
      <td><code>var(--graupl-button-hover-border-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-button-disabled-border-color</code></td>
      <td>The border colour of a disabled button component.</td>
      <td><code>var(--graupl-theme-active--primary--200)</code></td>
    </tr>
  </tbody>
</table>


## Sass variables

The following Sass variables can be used to customize the generation of the button component:

<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
      <th>Default Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>$selector-base</code></td>
      <td>The selector base for the component.</td>
      <td><code>.</code></td>
    </tr>
    <tr>
      <td><code>$modifier-selector-base</code></td>
      <td>The selector base for component modifiers.</td>
      <td><code>.</code></td>
    </tr>
    <tr>
      <td><code>$button-selector-base</code></td>
      <td>The selector base for the button component.</td>
      <td><code>.</code></td>
    </tr>
    <tr>
      <td><code>$button-selector</code></td>
      <td>The button component selector.</td>
      <td><code>button</code></td>
    </tr>
    <tr>
      <td><code>$button-link-selector-base</code></td>
      <td>The selector base for the button link component modifier.</td>
      <td><code>.</code></td>
    </tr>
    <tr>
      <td><code>$button-link-selector</code></td>
      <td>The button link component modifier selector.</td>
      <td><code>link</code></td>
    </tr>
    <tr>
      <td><code>$button-theme-selector-base</code></td>
      <td>The selector base for the button theme component modifiers.</td>
      <td><code>.</code></td>
    </tr>
    <tr>
      <td><code>$button-theme-selector-prefix</code></td>
      <td>The button theme component modifier selector prefix.</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>$button-initial-transform</code></td>
      <td>The initial transform of the button.</td>
      <td><code>none</code></td>
    </tr>
    <tr>
      <td><code>$button-final-transform</code></td>
      <td>The final transform of the button.</td>
      <td><code>scale(0.95)</code></td>
    </tr>
    <tr>
      <td><code>$button-disabled-transform</code></td>
      <td>The disabled transform of the button.</td>
      <td><code>none</code></td>
    </tr>
    <tr>
      <td><code>$custom-button-state-theme-map</code></td>
      <td>A map of custom button state theme values.</td>
      <td><code>()</code></td>
    </tr>
  </tbody>
</table>

<style module lang="scss">
  @use "../../packages/core/src/scss/defaults" as graupl-defaults with (
    $use-layers: false,
  );
  @use "../../packages/core/src/scss/base/button" as graupl-button;
</style>
