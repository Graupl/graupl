# Buttons

Buttons draw attention to the actions your interface offers. The button base component gives every button the same spacing, typography, colour handling, and motion so you can drop it anywhere and get a polished call-to-action right away.

## Why use the base button?

- `.button` is the shared class that unlocks the sizing, alignment, and state handling that ships with the design system.
- Simple modifiers like `.primary`, `.secondary`, `.tertiary`, and `.link` sit on top of the base class so you can switch emphasis levels without rewriting CSS.
- Every visual decision is exposed as a CSS custom property and a Sass variable, which keeps quick tweaks approachable for beginners while leaving room for deeper customisation later on.

## Quick start

1. Pick the right HTML element (`<button>` when submitting forms, `<a>` for links that navigate).
2. Add the `.button` class.
3. Layer on the variant you need.
4. Provide an accessible label (`type="button"`, `type="submit"`, `aria-label`, etc.).

```html
<button type="button" class="button">Neutral button</button>
<button type="submit" class="button primary">Save changes</button>
<a class="button secondary" href="/settings">Account settings</a>
<a class="button link" href="/docs/buttons">Learn more</a>
```

<div class="display-flex g-3 flex-wrap">
  <button :class="[$style.button, $style.primary]">Primary</button>
  <button :class="[$style.button, $style.secondary]">Secondary</button>
  <button :class="[$style.button, $style.tertiary]">Tertiary</button>
  <button :class="[$style.button, $style.link]">Link</button>
</div>

## Variant cheat sheet

- `.primary` — Prominent actions such as “Save”, “Continue”, or “Start”.
- `.secondary` — Supporting actions that still need a border and background.
- `.tertiary` — Low-emphasis actions that sit in the background.
- `.link` — Button spacing with a link-style appearance.

> **Tip:** combine modifiers with utilities (e.g. `.button.primary.w-100`) when you need responsive layouts.

## Custom properties (CSS)

If you only need a small tweak, change the custom properties in the scope you care about. The design system sets sensible defaults, so you can safely ignore this section until you want to customise something.

### Layout & spacing

<div class="responsive-table">
  <table class="table collapsed hoverable bordered">
    <thead class="secondary">
      <tr>
        <th>Property</th>
        <th>What it controls</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--graupl-button-min-width</td>
        <td>Smallest width the button should shrink to.</td>
        <td><code>var(--graupl-interactive-min-width)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-min-height</td>
        <td>Minimum button height.</td>
        <td><code>var(--graupl-interactive-min-height)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-padding-x</td>
        <td>Horizontal breathing room.</td>
        <td><code>var(--graupl-spacer-5)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-padding-y</td>
        <td>Vertical breathing room.</td>
        <td><code>var(--graupl-spacer-3)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-padding</td>
        <td>Shorthand if you prefer a single rule.</td>
        <td><code>var(--graupl-button-padding-y) var(--graupl-button-padding-x)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-font-size</td>
        <td>Font size for button labels.</td>
        <td><code>var(--graupl-font-size-base)</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Motion & transforms

<div class="responsive-table">
  <table class="table collapsed hoverable bordered">
    <thead class="secondary">
      <tr>
        <th>Property</th>
        <th>What it controls</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--graupl-button-transition</td>
        <td>Timing and easing when motion is allowed.</td>
        <td><code>background var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), color var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-transition-reduced-motion</td>
        <td>Softer transitions for users who request reduced motion.</td>
        <td><code>background var(--graupl-transition-duration-none) var(--graupl-transition-timing-function), color var(--graupl-transition-duration-none) var(--graupl-transition-timing-function)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-transform</td>
        <td>Base transform when the button is idle.</td>
        <td><code>none</code></td>
      </tr>
      <tr>
        <td>--graupl-button-visited-transform</td>
        <td>Transform for visited buttons.</td>
        <td><code>var(--graupl-button-transform)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-focus-transform</td>
        <td>Transform when the button is focused.</td>
        <td><code>var(--graupl-button-transform)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-hover-transform</td>
        <td>Transform during hover.</td>
        <td><code>var(--graupl-button-transform)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-active-transform</td>
        <td>Transform while the button is pressed.</td>
        <td><code>scale(0.95)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-disabled-transform</td>
        <td>Transform while disabled.</td>
        <td><code>none</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Background colour by state

<div class="responsive-table">
  <table class="table collapsed hoverable bordered">
    <thead class="secondary">
      <tr>
        <th>Property</th>
        <th>What it controls</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--graupl-button-background</td>
        <td>Default background colour.</td>
        <td><code>var(--graupl-background)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-visited-background</td>
        <td>Background after a link-style button has been visited.</td>
        <td><code>var(--graupl-button-background)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-focus-background</td>
        <td>Focus background.</td>
        <td><code>var(--graupl-button-background)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-hover-background</td>
        <td>Hover background.</td>
        <td><code>var(--graupl-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-active-background</td>
        <td>Pressed background.</td>
        <td><code>var(--graupl-button-hover-background)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-disabled-background</td>
        <td>Disabled background.</td>
        <td><code>var(--graupl-background)</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Text colour by state

<div class="responsive-table">
  <table class="table collapsed hoverable bordered">
    <thead class="secondary">
      <tr>
        <th>Property</th>
        <th>What it controls</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--graupl-button-color</td>
        <td>Default text colour.</td>
        <td><code>var(--graupl-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-visited-color</td>
        <td>Visited state text colour.</td>
        <td><code>var(--graupl-button-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-focus-color</td>
        <td>Focus state text colour.</td>
        <td><code>var(--graupl-button-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-hover-color</td>
        <td>Hover text colour.</td>
        <td><code>var(--graupl-background)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-active-color</td>
        <td>Pressed text colour.</td>
        <td><code>var(--graupl-button-hover-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-disabled-color</td>
        <td>Disabled text colour.</td>
        <td><code>var(--graupl-theme-active--primary--200)</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Borders & shape

<div class="responsive-table">
  <table class="table collapsed hoverable bordered">
    <thead class="secondary">
      <tr>
        <th>Property</th>
        <th>What it controls</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--graupl-button-border-top-width</td>
        <td>Top border width.</td>
        <td><code>var(--graupl-border-top-width)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-right-width</td>
        <td>Right border width.</td>
        <td><code>var(--graupl-border-right-width)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-bottom-width</td>
        <td>Bottom border width.</td>
        <td><code>var(--graupl-border-bottom-width)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-left-width</td>
        <td>Left border width.</td>
        <td><code>var(--graupl-border-left-width)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-width</td>
        <td>Border shorthand if you prefer one value.</td>
        <td><code>var(--graupl-button-border-top-width) var(--graupl-button-border-right-width) var(--graupl-button-border-bottom-width) var(--graupl-button-border-left-width)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-top-style</td>
        <td>Top border style (solid, dashed, etc.).</td>
        <td><code>var(--graupl-border-top-style)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-right-style</td>
        <td>Right border style.</td>
        <td><code>var(--graupl-border-right-style)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-bottom-style</td>
        <td>Bottom border style.</td>
        <td><code>var(--graupl-border-bottom-style)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-left-style</td>
        <td>Left border style.</td>
        <td><code>var(--graupl-border-left-style)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-style</td>
        <td>Shorthand border style.</td>
        <td><code>var(--graupl-button-border-top-style) var(--graupl-button-border-right-style) var(--graupl-button-border-bottom-style) var(--graupl-button-border-left-style)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-top-left-radius</td>
        <td>Top-left corner radius.</td>
        <td><code>var(--graupl-border-top-left-radius)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-top-right-radius</td>
        <td>Top-right corner radius.</td>
        <td><code>var(--graupl-border-top-right-radius)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-bottom-right-radius</td>
        <td>Bottom-right corner radius.</td>
        <td><code>var(--graupl-border-bottom-right-radius)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-bottom-left-radius</td>
        <td>Bottom-left corner radius.</td>
        <td><code>var(--graupl-border-bottom-left-radius)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-border-radius</td>
        <td>Corner radius shorthand.</td>
        <td><code>var(--graupl-button-border-top-left-radius) var(--graupl-button-border-top-right-radius) var(--graupl-button-border-bottom-right-radius) var(--graupl-button-border-bottom-left-radius)</code></td>
      </tr>
    </tbody>
  </table>
</div>

### Border colour by state

<div class="responsive-table">
  <table class="table collapsed hoverable bordered">
    <thead class="secondary">
      <tr>
        <th>Property</th>
        <th>What it controls</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--graupl-button-border-color</td>
        <td>Default border colour.</td>
        <td><code>var(--graupl-border-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-visited-border-color</td>
        <td>Visited border colour.</td>
        <td><code>var(--graupl-button-border-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-focus-border-color</td>
        <td>Focus border colour.</td>
        <td><code>var(--graupl-button-border-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-hover-border-color</td>
        <td>Hover border colour.</td>
        <td><code>var(--graupl-border-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-active-border-color</td>
        <td>Pressed border colour.</td>
        <td><code>var(--graupl-button-hover-border-color)</code></td>
      </tr>
      <tr>
        <td>--graupl-button-disabled-border-color</td>
        <td>Disabled border colour.</td>
        <td><code>var(--graupl-theme-active--primary--200)</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Sass variables (build-time options)

When you have to generate a different set of selectors or adjust the default theme mapping for every project, reach for these Sass variables before you import the button module.

<div class="responsive-table">
  <table class="table collapsed hoverable bordered">
    <thead class="secondary">
      <tr>
        <th>Variable</th>
        <th>Helpful when you want to…</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>$selector-base</td>
        <td>Change the prefix applied to every component selector.</td>
        <td><code>.</code></td>
      </tr>
      <tr>
        <td>$modifier-selector-base</td>
        <td>Change the prefix for modifier selectors.</td>
        <td><code>.</code></td>
      </tr>
      <tr>
        <td>$generate-base-theme-map</td>
        <td>Disable automatic generation of theme modifiers.</td>
        <td><code>true</code></td>
      </tr>
      <tr>
        <td>$button-selector-base</td>
        <td>Rename the base button selector prefix.</td>
        <td><code>.</code></td>
      </tr>
      <tr>
        <td>$button-selector</td>
        <td>Rename the `.button` selector itself.</td>
        <td><code>button</code></td>
      </tr>
      <tr>
        <td>$button-link-selector-base</td>
        <td>Rename the `.link` modifier prefix.</td>
        <td><code>.</code></td>
      </tr>
      <tr>
        <td>$button-link-selector</td>
        <td>Rename the modifier that produces link styling.</td>
        <td><code>link</code></td>
      </tr>
      <tr>
        <td>$button-theme-selector-base</td>
        <td>Adjust how variant selectors are generated.</td>
        <td><code>.</code></td>
      </tr>
      <tr>
        <td>$button-theme-selector-prefix</td>
        <td>Add extra text before each theme name (e.g. `.is-primary`).</td>
        <td><code>""</code></td>
      </tr>
      <tr>
        <td>$button-initial-transform</td>
        <td>Change the resting state transform.</td>
        <td><code>none</code></td>
      </tr>
      <tr>
        <td>$button-final-transform</td>
        <td>Change how far the button “presses” in the active state.</td>
        <td><code>scale(0.95)</code></td>
      </tr>
      <tr>
        <td>$button-disabled-transform</td>
        <td>Adjust the transform while disabled.</td>
        <td><code>none</code></td>
      </tr>
      <tr>
        <td>$button-theme-mappings</td>
        <td>Choose which shades power `.primary`, `.secondary`, etc.</td>
        <td><code>(color: 900, border-color: 700, hover-color: 100, hover-background: 700, hover-border-color: 700, disabled-color: 200, disabled-border-color: 200)</code></td>
      </tr>
      <tr>
        <td>$custom-button-state-theme-map</td>
        <td><strong>Deprecated.</strong> Prefer `$button-theme-mappings`.</td>
        <td><code>()</code></td>
      </tr>
      <tr>
        <td>$button-state-theme-map</td>
        <td><strong>Deprecated.</strong> Prefer `$button-theme-mappings`.</td>
        <td><code>()</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Advanced customisation

Ready to go beyond the defaults? Here are three common patterns to get you started. Copy the one you need and tweak the custom properties first—only reach for Sass when you want to change the generated CSS for the entire project.

### Local overrides with CSS custom properties

<div class="display-flex g-3 flex-wrap">
  <button :class="[$style.button, $style.primary, $style.demoPill]">Rounded CTA</button>
</div>

```scss
// Inside the consuming component stylesheet
.call-to-action {
  --graupl-button-border-radius: 9999px;
  --graupl-button-padding-x: var(--graupl-spacer-6);
  --graupl-button-transition: background 120ms ease, color 120ms ease;
}
```

### Compose an icon button with Sass

```scss
@use "../../packages/core/src/scss/base/button" as button;

.icon-button {
  @include button.apply();
  --graupl-button-padding-x: var(--graupl-spacer-2);
  --graupl-button-padding-y: var(--graupl-spacer-2);
  --graupl-button-min-width: var(--graupl-spacer-8);
  --graupl-button-border-radius: 9999px;

  svg {
    inline-size: 1rem;
    block-size: 1rem;
  }
}
```

### Change theme shading at build time

```scss
@use "../../packages/core/src/scss/base/button/defaults" as button-defaults with (
  $button-theme-mappings: (
    color: 1000,
    border-color: 800,
    hover-color: 100,
    hover-background: 800,
    hover-border-color: 800,
    disabled-color: 300,
    disabled-border-color: 300,
  ),
);
@use "../../packages/core/src/scss/base/button" as button;
```

<style module lang="scss">
  @use "../../packages/core/src/scss/defaults" as graupl-defaults with (
    $use-layers: false,
  );
  @use "../../packages/core/src/scss/base/button" as graupl-button;

  .demoPill {
    --graupl-button-border-radius: 9999px;
    --graupl-button-padding-x: var(--graupl-spacer-6);
  }
</style>
