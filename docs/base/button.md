<script setup>
  import { ref, computed } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const state = ref("default");
  const variant = ref("default");

  const exampleButtonState = computed(() => {
    const classes = [
      "button",
      state.value !== "default" ? state.value : null,
    ].filter(c => c !== null).join(' ');

    return `<button class="${classes}">Click me!</button>`;
  });

  const exampleButtonVariant = computed(() => {
    const classes = [
      "button",
      variant.value !== "default" ? variant.value : null,
    ].filter(c => c !== null).join(' ');

    return `<button class="${classes}">Click me!</button>`;
  });
</script>

# Buttons

The button base component provides a set of classes to style buttons consistently across your application. It includes various states and modifiers to handle different button types and interactions.

The button component is meant to be used on `<button>` or `<a>` elements, but can be applied to anything.

## Base class

The `.button` class is the base class for all button styles.

<live-example>
  <button class="button">Click me!</button>
</live-example>

## Variants

There are 4 button variants provided by default: `.primary`, `.secondary`, `.tertiary`, and `.link`.

<live-example :source-code="exampleButtonVariant" :key="variant">
  <template #options>
    <div class="input-group">
      <label for="select-button-variant">Button variant</label>
      <select id="select-button-variant" v-model="variant">
        <option value="default">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="tertiary">Tertiary</option>
        <option value="link">Link</option>
      </select>
      <p class="help-text">Select the button variant you would like displayed.</p>
    </div>
  </template>
</live-example>

If you are compiling your own version of Graupl, you can set the `$themeable` variable to `false` to disable variants.

## States

Buttons handle the following states by default: visited, focus, hover, active, disabled, selected, and current (though not all will have visual differences out-of-the-box).

You can manually apply these states with the helper classes `.visited`, `.focus`, `.hover`, `.active`, `.disabled`, `.selected`, and `.current` respectively.

<live-example :source-code="exampleButtonState" :key="state">
  <template #options>
    <div class="input-group">
      <label for="select-button-state">Button state</label>
      <select id="select-button-state" v-model="state">
        <option value="default">Default</option>
        <option value="visited">Visited</option>
        <option value="focus">Focus</option>
        <option value="hover">Hover</option>
        <option value="active">Active</option>
        <option value="disabled">Disabled</option>
        <option value="selected">Selected</option>
        <option value="current">Current</option>
      </select>
      <p class="help-text">Select the button state you would like displayed.</p>
    </div>
  </template>
</live-example>

## Custom Properties

The following custom properties can be used to customize the button component:

| Property                                     | Description                                                                                                    | Default Value                                                                                                                                                                                                                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--graupl-button-min-width`                  | The minimum width of the button component.                                                                     | `44px`                                                                                                                                                                                                                                                                         |
| `--graupl-button-min-height`                 | The minimum height of the button component.                                                                    | `44px`                                                                                                                                                                                                                                                                         |
| `--graupl-button-padding-x`                  | The horizontal padding of the button component.                                                                | `var(--graupl-spacer-5)`                                                                                                                                                                                                                                                       |
| `--graupl-button-padding-y`                  | The vertical padding of the button component.                                                                  | `var(--graupl-spacer-3)`                                                                                                                                                                                                                                                       |
| `--graupl-button-padding`                    | The padding of the button component (combines x and y padding).                                                | `var(--graupl-button-padding-y) var(--graupl-button-padding-x)`                                                                                                                                                                                                                |
| `--graupl-button-font-size`                  | The font size of the button component.                                                                         | `var(--graupl-font-size-base)`                                                                                                                                                                                                                                                 |
| `--graupl-button-transition`                 | The transition of the button component.                                                                        | `background var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), color var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)` |
| `--graupl-button-transition-reduced-motion`  | The transition of the button component when reduced motion is enabled.                                         | `background var(--graupl-transition-duration-none) var(--graupl-transition-timing-function), color var(--graupl-transition-duration-none) var(--graupl-transition-timing-function)`                                                                                            |
| `--graupl-button-transform`                  | The transform of the button component.                                                                         | `none`                                                                                                                                                                                                                                                                         |
| `--graupl-button-visited-transform`          | The transform of a visited button component.                                                                   | `var(--graupl-button-transform)`                                                                                                                                                                                                                                               |
| `--graupl-button-focus-transform`            | The transform of a focused button component.                                                                   | `var(--graupl-button-transform)`                                                                                                                                                                                                                                               |
| `--graupl-button-hover-transform`            | The transform of a hovered button component.                                                                   | `var(--graupl-button-transform)`                                                                                                                                                                                                                                               |
| `--graupl-button-active-transform`           | The transform of an active button component.                                                                   | `scale(0.95)`                                                                                                                                                                                                                                                                  |
| `--graupl-button-disabled-transform`         | The transform of a disabled button component.                                                                  | `none`                                                                                                                                                                                                                                                                         |
| `--graupl-button-background`                 | The background colour of the button component.                                                                 | `var(--graupl-background)`                                                                                                                                                                                                                                                     |
| `--graupl-button-visited-background`         | The background colour of a visited button component.                                                           | `var(--graupl-button-background)`                                                                                                                                                                                                                                              |
| `--graupl-button-focus-background`           | The background colour of a focused button component.                                                           | `var(--graupl-button-background)`                                                                                                                                                                                                                                              |
| `--graupl-button-hover-background`           | The background colour of a hovered button component.                                                           | `var(--graupl-color)`                                                                                                                                                                                                                                                          |
| `--graupl-button-active-background`          | The background colour of an active button component.                                                           | `var(--graupl-button-hover-background)`                                                                                                                                                                                                                                        |
| `--graupl-button-disabled-background`        | The background colour of a disabled button component.                                                          | `var(--graupl-background)`                                                                                                                                                                                                                                                     |
| `--graupl-button-color`                      | The text colour of the button component.                                                                       | `var(--graupl-color)`                                                                                                                                                                                                                                                          |
| `--graupl-button-visited-color`              | The text colour of a visited button component.                                                                 | `var(--graupl-button-color)`                                                                                                                                                                                                                                                   |
| `--graupl-button-focus-color`                | The text colour of a focused button component.                                                                 | `var(--graupl-button-color)`                                                                                                                                                                                                                                                   |
| `--graupl-button-hover-color`                | The text colour of a hovered button component.                                                                 | `var(--graupl-background)`                                                                                                                                                                                                                                                     |
| `--graupl-button-active-color`               | The text colour of an active button component.                                                                 | `var(--graupl-button-hover-color)`                                                                                                                                                                                                                                             |
| `--graupl-button-disabled-color`             | The text colour of a disabled button component.                                                                | `var(--graupl-theme-active--primary--200)`                                                                                                                                                                                                                                     |
| `--graupl-button-border-top-width`           | The top border width of the button component.                                                                  | `var(--graupl-border-top-width)`                                                                                                                                                                                                                                               |
| `--graupl-button-border-right-width`         | The right border width of the button component.                                                                | `var(--graupl-border-right-width)`                                                                                                                                                                                                                                             |
| `--graupl-button-border-bottom-width`        | The bottom border width of the button component.                                                               | `var(--graupl-border-bottom-width)`                                                                                                                                                                                                                                            |
| `--graupl-button-border-left-width`          | The left border width of the button component.                                                                 | `var(--graupl-border-left-width)`                                                                                                                                                                                                                                              |
| `--graupl-button-border-width`               | The border width of the button component (combines top, right, bottom, and left widths).                       | `var(--graupl-button-border-top-width) var(--graupl-button-border-right-width) var(--graupl-button-border-bottom-width) var(--graupl-button-border-left-width)`                                                                                                                |
| `--graupl-button-border-top-style`           | The top border style of the button component.                                                                  | `var(--graupl-border-top-style)`                                                                                                                                                                                                                                               |
| `--graupl-button-border-right-style`         | The right border style of the button component.                                                                | `var(--graupl-border-right-style)`                                                                                                                                                                                                                                             |
| `--graupl-button-border-bottom-style`        | The bottom border style of the button component.                                                               | `var(--graupl-border-bottom-style)`                                                                                                                                                                                                                                            |
| `--graupl-button-border-left-style`          | The left border style of the button component.                                                                 | `var(--graupl-border-left-style)`                                                                                                                                                                                                                                              |
| `--graupl-button-border-style`               | The border style of the button component (combines top, right, bottom, and left styles).                       | `var(--graupl-button-border-top-style) var(--graupl-button-border-right-style) var(--graupl-button-border-bottom-style) var(--graupl-button-border-left-style)`                                                                                                                |
| `--graupl-button-border-top-left-radius`     | The top left border radius of the button component.                                                            | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                                                                         |
| `--graupl-button-border-top-right-radius`    | The top right border radius of the button component.                                                           | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                                                                        |
| `--graupl-button-border-bottom-right-radius` | The bottom right border radius of the button component.                                                        | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                                                                     |
| `--graupl-button-border-bottom-left-radius`  | The bottom left border radius of the button component.                                                         | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                                                                      |
| `--graupl-button-border-radius`              | The border radius of the button component (combines top-left, top-right, bottom-right, and bottom-left radii). | `var(--graupl-button-border-top-left-radius) var(--graupl-button-border-top-right-radius) var(--graupl-button-border-bottom-right-radius) var(--graupl-button-border-bottom-left-radius)`                                                                                      |
| `--graupl-button-border-color`               | The border colour of the button component.                                                                     | `var(--graupl-border-color)`                                                                                                                                                                                                                                                   |
| `--graupl-button-visited-border-color`       | The border colour of a visited button component.                                                               | `var(--graupl-button-border-color)`                                                                                                                                                                                                                                            |
| `--graupl-button-focus-border-color`         | The border colour of a focused button component.                                                               | `var(--graupl-button-border-color)`                                                                                                                                                                                                                                            |
| `--graupl-button-hover-border-color`         | The border colour of a hovered button component.                                                               | `var(--graupl-border-color)`                                                                                                                                                                                                                                                   |
| `--graupl-button-active-border-color`        | The border colour of an active button component.                                                               | `var(--graupl-button-hover-border-color)`                                                                                                                                                                                                                                      |
| `--graupl-button-disabled-border-color`      | The border colour of a disabled button component.                                                              | `var(--graupl-theme-active--primary--200)`                                                                                                                                                                                                                                     |

## Sass variables

The following Sass variables can be used to customize the generation of the button component:

| Variable                        | Description                                                                             | Default Value |
| ------------------------------- | --------------------------------------------------------------------------------------- | ------------- |
| `$selector-base`                | The selector base for the component.                                                    | `"."`         |
| `$modifier-selector-base`       | The selector base for component modifiers.                                              | `"."`         |
| `$generate-base-theme-map`      | A flag to generate the base theme maps for button variants.                             | `true`        |
| `$themeable`                    | A flag that determines whether theme modifiers are generated.                           | `true`        |
| `$button-selector-base`         | The selector base for the button component.                                             | `"."`         |
| `$button-selector`              | The button component selector.                                                          | `"button"`    |
| `$button-link-selector-base`    | The selector base for the button link component modifier.                               | `"."`         |
| `$button-link-selector`         | The button link component modifier selector.                                            | `"link"`      |
| `$button-theme-selector-base`   | The selector base for the button theme component modifiers.                             | `"."`         |
| `$button-theme-selector-prefix` | The button theme component modifier selector prefix.                                    | `""`          |
| `$button-initial-transform`     | The initial transform of the button.                                                    | `none`        |
| `$button-final-transform`       | The final transform of the button.                                                      | `scale(0.95)` |
| `$button-disabled-transform`    | The disabled transform of the button.                                                   | `none`        |
| `$button-theme-mappings`        | A map of properties and color shades used generate all button variants.                 | `()`          |
| `$button-theme-map`             | A map of all properties, colors, and color shades used to generate all button variants. | `()`          |
