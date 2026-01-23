# Links

The link base component provides a set of classes to style links consistently across your application. It includes various states and modifiers to handle different link types and interactions.

## Base element

The base `<a>` element is styled to handle the different states ( Visited, Focused, Hovered, Active, Disabled ).
<div class="display-flex g-3 flex-wrap">
<ul class="list-style-none m-0 p-0 display-flex g-3">
  <li><a href="/"> Default Link</a></li>
  <li><a href="/" class="visited">Visited Link</a></li>
  <li><a href="/" class="focus">Focused Link</a></li>
  <li><a href="/" class="hover">Hovered Link</a></li>
  <li><a href="/" class="active">Active Link</a></li>
  <li><a href="/" class="disabled">Disabled Link</a></li>
</ul>
</div>

```html
  <a href="/"> Default Link</a>
  <a href="/" class="visited">Visited Link</a>
  <a href="/" class="focus">Focused Link</a>
  <a href="/" class="hover">Hovered Link</a>
  <a href="/" class="active">Active Link</a>
  <a href="/" class="disabled">Disabled Link</a>
```

## States

Links are set up to handle different states by default: visited, focus, hover, active and disabled.

You can manually apply these states with the helper classes `.visited`, `.focus`, `.hover`, `.active` and `.disabled`, respectively.

<div class="display-flex g-3 flex-wrap">
<ul class="list-style-none m-0 p-0 display-flex flex-col g-3">
  <li><a href="/"> Default Link</a></li>
  <li><a href="/" class="visited">Visited Link</a></li>
  <li><a href="/" class="focus">Focused Link</a></li>
  <li><a href="/" class="hover">Hovered Link</a></li>
  <li><a href="/" class="active">Active Link</a></li>
  <li><a href="/" class="disabled">Disabled Link</a></li>
</ul>
</div>

```html
  <a href="/"> Default Link</a>
  <a href="/" class="visited">Visited Link</a>
  <a href="/" class="focus">Focused Link</a>
  <a href="/" class="hover">Hovered Link</a>
  <a href="/" class="active">Active Link</a>
  <a href="/" class="disabled">Disabled Link</a>
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
      <td><code>--graupl-link-text-decoration</code></td>
      <td>The text decoration of the link component.</td>
      <td><code>underline</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-visited-text-decoration</code></td>
      <td>The text decoration of a visited link component.</td>
      <td><code>var(--graupl-link-text-decoration)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-focus-text-decoration</code></td>
      <td>The text decoration of a focused link component.</td>
      <td><code>var(--graupl-link-text-decoration)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-hover-text-decoration</code></td>
      <td>The text decoration of a hovered link component.</td>
      <td><code>underline</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-active-text-decoration</code></td>
      <td>The text decoration of an active link component.</td>
      <td><code>var(--graupl-link-hover-text-decoration)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-disabled-text-decoration</code></td>
      <td>The text decoration of a disabled link component.</td>
      <td><code>underline</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-text-decoration-thickness</code></td>
      <td>The text decoration thickness of the link component.</td>
      <td><code>var(--graupl-border-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-visited-text-decoration-thickness</code></td>
      <td>The text decoration thickness of a visited link component.</td>
      <td><code>var(--graupl-link-text-decoration-thickness)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-focus-text-decoration-thickness</code></td>
      <td>The text decoration thickness of a focused link component.</td>
      <td><code>var(--graupl-link-text-decoration-thickness)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-hover-text-decoration-thickness</code></td>
      <td>The text decoration thickness of a hovered link component.</td>
      <td><code>var(--graupl-border-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-active-text-decoration-thickness</code></td>
      <td>The text decoration thickness of an active link component.</td>
      <td><code>var(--graupl-link-hover-text-decoration-thickness)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-disabled-text-decoration-thickness</code></td>
      <td>The text decoration thickness of a disabled link component.</td>
      <td><code>var(--graupl-border-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-text-decoration-style</code></td>
      <td>The text decoration style of the link component.</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-visited-text-decoration-style</code></td>
      <td>The text decoration style of a visited link component.</td>
      <td><code>var(--graupl-link-text-decoration-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-focus-text-decoration-style</code></td>
      <td>The text decoration style of a focused link component.</td>
      <td><code>var(--graupl-link-text-decoration-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-hover-text-decoration-style</code></td>
      <td>The text decoration style of a hovered link component.</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-active-text-decoration-style</code></td>
      <td>The text decoration style of an active link component.</td>
      <td><code>var(--graupl-link-hover-text-decoration-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-disabled-text-decoration-style</code></td>
      <td>The text decoration style of a disabled link component.</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-color</code></td>
      <td>The text colour of the link component.</td>
      <td><code>var(--graupl-theme-active--primary--700)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-visited-color</code></td>
      <td>The text colour of a visited link component.</td>
      <td><code>var(--graupl-link-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-focus-color</code></td>
      <td>The text colour of a focused link component.</td>
      <td><code>var(--graupl-link-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-hover-color</code></td>
      <td>The text colour of a hovered link component.</td>
      <td><code>var(--graupl-theme-active--primary--700)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-active-color</code></td>
      <td>The text colour of an active link component.</td>
      <td><code>var(--graupl-link-hover-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-disabled-color</code></td>
      <td>The text colour of a disabled link component.</td>
      <td><code>var(--graupl-theme-active--primary--200)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-text-decoration-color</code></td>
      <td>The text decoration colour of the link component.</td>
      <td><code>var(--graupl-link-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-visited-text-decoration-color</code></td>
      <td>The text decoration colour of a visited link component.</td>
      <td><code>var(--graupl-link-visited-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-focus-text-decoration-color</code></td>
      <td>The text decoration colour of a focused link component.</td>
      <td><code>var(--graupl-link-focus-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-hover-text-decoration-color</code></td>
      <td>The text decoration colour of a hovered link component.</td>
      <td><code>var(--graupl-link-hover-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-active-text-decoration-color</code></td>
      <td>The text decoration colour of an active link component.</td>
      <td><code>var(--graupl-link-active-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-disabled-text-decoration-color</code></td>
      <td>The text decoration colour of a disabled link component.</td>
      <td><code>var(--graupl-link-disabled-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-background</code></td>
      <td>The background colour of the link component.</td>
      <td><code>vtransparent</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-visited-background</code></td>
      <td>The background colour of a visited link component.</td>
      <td><code>var(--graupl-link-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-focus-background</code></td>
      <td>The background colour of a focused link component.</td>
      <td><code>var(--graupl-link-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-hover-background</code></td>
      <td>The background colour of a hovered link component.</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-active-background</code></td>
      <td>The background colour of an active link component.</td>
      <td><code>var(--graupl-link-hover-background)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-disabled-background</code></td>
      <td>The background colour of a disabled link component.</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-padding-x</code></td>
      <td>The horizontal padding of the link component.</td>
      <td><code>var(--graupl-spacer-0)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-padding-y</code></td>
      <td>The vertical padding of the link component.</td>
      <td><code>var(--graupl-spacer-0)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-padding</code></td>
      <td>The padding of the link component (combines x and y padding)</td>
      <td><code>var(--graupl-link-padding-y) var(--graupl-link-padding-x)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-transition</code></td>
      <td>The transition of the link component.</td>
      <td><code>background var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), color var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-transition-reduced-motion</code></td>
      <td>The transition of the link component when reduced motion is enabled.</td>
      <td><code>background var(--graupl-transition-duration-none) var(--graupl-transition-timing-function), color var(--graupl-transition-duration-none) var(--graupl-transition-timing-function)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-transform</code></td>
      <td>The transform of the link component.</td>
      <td><code>none</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-visited-transform</code></td>
      <td>The transform of a visited link component.</td>
      <td><code>var(--graupl-link-transform)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-focus-transform</code></td>
      <td>The transform of a focused link component.</td>
      <td><code>var(--graupl-link-transform)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-hover-transform</code></td>
      <td>The transform of a hovered link component.</td>
      <td><code>none</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-active-transform</code></td>
      <td>The transform of an active link component.</td>
      <td><code>var(--graupl-link-hover-transform)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-disabled-transform</code></td>
      <td>The transform of a disabled link component.</td>
      <td><code>none</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-top-width</code></td>
      <td>The top border width of the link component.</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-right-width</code></td>
      <td>The right border width of the link component.</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-bottom-width</code></td>
      <td>The bottom border width of the link component.</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-left-width</code></td>
      <td>The left border width of the link component.</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-width</code></td>
      <td>The border width of the link component (combines top, right, bottom, and left widths)</td>
      <td><code>var(--graupl-link-border-top-width) var(--graupl-link-border-right-width) var(--graupl-link-border-bottom-width) var(--graupl-link-border-left-width)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-top-style</code></td>
      <td>The top border style of the link component.</td>
      <td><code>var(--graupl-border-top-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-right-style</code></td>
      <td>The right border style of the link component.</td>
      <td><code>var(--graupl-border-right-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-bottom-style</code></td>
      <td>The bottom border style of the link component.</td>
      <td><code>var(--graupl-border-bottom-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-left-style</code></td>
      <td>The left border style of the link component.</td>
      <td><code>var(--graupl-border-left-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-style</code></td>
      <td>The border style of the link component (combines top, right, bottom, and left styles)</td>
      <td><code>var(--graupl-link-border-top-style) var(--graupl-link-border-right-style) var(--graupl-link-border-bottom-style) var(--graupl-link-border-left-style)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-top-left-radius</code></td>
      <td>The top left border radius of the link component.</td>
      <td><code>var(--graupl-border-top-left-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-top-right-radius</code></td>
      <td>The top right border radius of the link component.</td>
      <td><code>var(--graupl-border-top-right-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-bottom-right-radius</code></td>
      <td>The bottom right border radius of the link component.</td>
      <td><code>var(--graupl-border-bottom-right-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-bottom-left-radius</code></td>
      <td>The bottom left border radius of the link component.</td>
      <td><code>var(--graupl-border-bottom-left-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-radius</code></td>
      <td>The border radius of the link component (combines top-left, top-right, bottom-right, and bottom-left radii)</td>
      <td><code>var(--graupl-link-border-top-left-radius) var(--graupl-link-border-top-right-radius) var(--graupl-link-border-bottom-right-radius) var(--graupl-link-border-bottom-left-radius)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-border-color</code></td>
      <td>The border colour of the link component.</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-visited-border-color</code></td>
      <td>The border colour of a visited link component.</td>
      <td><code>var(--graupl-link-border-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-focus-border-color</code></td>
      <td>The border colour of a focused link component.</td>
      <td><code>var(--graupl-link-border-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-hover-border-color</code></td>
      <td>The border colour of a hovered link component.</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-active-border-color</code></td>
      <td>The border colour of an active link component.</td>
      <td><code>var(--graupl-link-hover-border-color)</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-disabled-border-color</code></td>
      <td>The border colour of a disabled link component.</td>
      <td><code>transparent</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-min-width</code></td>
      <td>The minimum width for the link component.</td>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-min-height</code></td>
      <td>The minimum height for the link component.</td>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <td><code>--graupl-link-stretched-link-z-index</code></td>
      <td>The z-index for the stretched link component modifier.</td>
      <td><code>5</code></td>
    </tr>
  </tbody>
</table>


## Sass variables

The following Sass variables can be used to customize the generation of the button component:

<table class="table hoverable">
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
      <td><code>$link-selector-base</code></td>
      <td>The selector base for the link component.</td>
      <td><code>.</code></td>
    </tr>
    <tr>
      <td><code>$link-selector</code></td>
      <td>The link component selector.</td>
      <td><code>a</code></td>
    </tr>
    <tr>
      <td><code>$link-theme-prefix-selector-base</code></td>
      <td>The selector base for the link theme modifiers.</td>
      <td><code>.</code></td>
    </tr>
    <tr>
      <td><code>$link-theme-prefix-selector</code></td>
      <td>Selector prefix used for link theme modifiers.</td>
      <td><code>""</code></td>
    </tr>
    <tr>
      <td><code>$stretched-link-selector-base</code></td>
      <td>The selector base for the link theme modifiers.</td>
      <td><code>.</code></td>
    </tr>
    <tr>
      <td><code>$stretched-link-selector</code></td>
      <td>Selector prefix used for link theme modifiers.</td>
      <td><code>stretched</code></td>
    </tr>
    <tr>
      <td><code>$stretched-link--pseudo-selector</code></td>
      <td>The pseudo selector for the stretched link component modifier.</td>
      <td><code>before</code></td>
    </tr>
    <tr>
      <td><code>$stretched-link-z-index</code></td>
      <td>The z-index for the stretched link component modifier.</td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>$link-initial-text-decoration</code></td>
      <td>The initial text decoration for the link.</td>
      <td><code>underline</code></td>
    </tr>
    <tr>
      <td><code>$link-final-text-decoration</code></td>
      <td>The final text decoration for the link.</td>
      <td><code>underline</code></td>
    </tr>
    <tr>
      <td><code>$link-disabled-text-decoration</code></td>
      <td>The disabled text decoration for the link.</td>
      <td><code>underline</code></td>
    </tr>
    <tr>
      <td><code>$link-initial-text-decoration-style</code></td>
      <td>The initial text decoration style for the link.</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>$link-final-text-decoration-style</code></td>
      <td>The final text decoration style for the link.</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>$link-disabled-text-decoration-style</code></td>
      <td>The disabled text decoration style for the link.</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>$link-initial-transform</code></td>
      <td>The initial transform for the link.</td>
      <td><code>none</code></td>
    </tr>
    <tr>
      <td><code>$link-final-transform</code></td>
      <td>The final transform for the link.</td>
      <td><code>$link-initial-transform</code></td>
    </tr>
    <tr>
      <td><code>$link-disabled-transform</code></td>
      <td>The disabled transform for the link.</td>
      <td><code>$link-initial-transform</code></td>
    </tr>
    <tr>
      <td><code>$link-border-width</code></td>
      <td>The border width for the link.</td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>$link-min-width</code></td>
      <td>The minimum width for the link.</td>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <td><code>$link-min-height</code></td>
      <td>The minimum height for the link.</td>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <td><code>$link-theme-mappings</code></td>
      <td>Map of properties and shade values applied to themed links.</td>
      <td><code>()</code></td>
    </tr>
    <tr>
      <td><code>$link-theme-map</code></td>
      <td>Fully expanded properties and shade values applied to themed links.</td>
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
