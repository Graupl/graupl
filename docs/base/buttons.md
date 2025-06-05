# Buttons

The button base component provides a set of classes to style buttons consistently across your application. It includes various states and modifiers to handle different button types and interactions.

The button component is meant to be used on a `<button>` or `<a>` element, but can be applied to anything.

## Base class

The `.button` class is the base class for all button styles.

<button class="button">Click me!</button>

```html
<button type="button" class="button">Click me!</button>
```
## Variants

There are 4 button variants provided by default: `.primary`, `.secondary`, `.tertiary`, and `.link`.


<div style="display: flex; gap: 1rem;">
  <button type="button" class="button primary">Primary Button</button>
  <button type="button" class="button secondary">Secondary Button</button>
  <button type="button" class="button tertiary">Tertiary Button</button>
  <button type="button" class="button link">Link Button</button>
</div>

```html
<button type="button" class="button primary">Primary Button</button>
<button type="button" class="button secondary">Secondary Button</button>
<button type="button" class="button tertiary">Tertiary Button</button>
<button type="button" class="button link">Link Button</button>
