<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const exampleTextInput = `
<label for="adventurer-name">Adventurer name</label>
<input id="adventurer-name" type="text">
  `;

  const exampleSelect = `
<label for="quest-region">Region</label>
<select id="quest-region">
  <option>North woods</option>
  <option>Silver marsh</option>
</select>
  `;

  const exampleCheckbox = `
<label><input type="checkbox" name="supplies" value="torch"> Pack a torch</label>
  `;

  const exampleTextarea = `
<label for="quest-notes">Quest notes</label>
<textarea id="quest-notes" rows="3"></textarea>
  `;

  const exampleFieldset = `
<fieldset>
  <legend>Departure time</legend>
  <label><input type="radio" name="departure" value="dawn"> Dawn</label>
  <label><input type="radio" name="departure" value="dusk"> Dusk</label>
</fieldset>
  `;
  const variant = ref("default");
  const exampleFormVariant = computed(() => {
    const variantClass = variant.value === "default" ? "" : ` class="${variant.value}"`;

    return `<fieldset${variantClass}>
  <legend>Quest registration</legend>
  <label for="quest-party-name">Party name</label>
  <input id="quest-party-name" type="text">
</fieldset>`;
  });
</script>

# Forms

The form base component provides a set of styles for inputs, textareas, selects, labels, and fieldsets.

::: info Note

Form elements and inputs alone are only a portion of Graupl's feature set for forms. For a complete setup of labels, form items, and help text please see the [Input Group](../components/input-group.md) component.

:::

## Base elements

The base `<input>`, `<textarea>`, `<select>`, `<fieldset>`, and `<label>` elements are styled by default with no need for classes.

### Text input

<live-example :source-code="exampleTextInput" />

### Select

<live-example :source-code="exampleSelect" />

### Checkbox

<live-example :source-code="exampleCheckbox" />

### Text area

<live-example :source-code="exampleTextarea" />

### Fieldsets

Use a fieldset and legend to group related controls, such as a set of radio buttons.

<live-example :source-code="exampleFieldset" />

## Variants

There are three form colour variants provided by default: `.primary`, `.secondary`, and `.tertiary`. Add the variant class to an input, textarea, select, label, or fieldset.

<live-example :source-code="exampleFormVariant" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-form-variant">Form variant</label>
      <select id="select-form-variant" v-model="variant">
        <option value="default">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="tertiary">Tertiary</option>
      </select>
    </div>
  </template>
</live-example>

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the form module’s `$themeable` variable to `false` to skip generating theme variants.

## Custom Properties

The following custom properties can be used to customize the form components:

| Property                                       | Description                                                                                                    | Default Value                                                                                                                                                                                     |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-input-padding-x`                     | The horizontal padding for input components.                                                                   | `var(--graupl-spacer-5)`                                                                                                                                                                          |
| `--graupl-input-padding-y`                     | The vertical padding for input components.                                                                     | `var(--graupl-spacer-3)`                                                                                                                                                                          |
| `--graupl-input-padding`                       | The padding for input components (combines x and y padding).                                                   | `var(--graupl-input-padding-y) var(--graupl-input-padding-x)`                                                                                                                                     |
| `--graupl-input-font-size`                     | The font size for input components.                                                                            | `var(--graupl-font-size-base)`                                                                                                                                                                    |
| `--graupl-label-font-size`                     | The font size for label components.                                                                            | `var(--graupl-input-font-size)`                                                                                                                                                                   |
| `--graupl-fieldset-direction`                  | The direction of fieldset items- controls the `flex-direction` property.                                       | `column`                                                                                                                                                                                          |
| `--graupl-fieldset-gap`                        | The gap between fieldset items.                                                                                | `var(--graupl-spacer-2)`                                                                                                                                                                          |
| `--graupl-fieldset-padding-x`                  | The horizontal padding for fieldset components.                                                                | `var(--graupl-input-padding-x)`                                                                                                                                                                   |
| `--graupl-fieldset-padding-y`                  | The vertical padding for fieldset components.                                                                  | `var(--graupl-input-padding-y)`                                                                                                                                                                   |
| `--graupl-fieldset-padding`                    | The padding for fieldset components (combines x and y padding).                                                | `var(--graupl-fieldset-padding-y) var(--graupl-fieldset-padding-x)`                                                                                                                               |
| `--graupl-fieldset-font-size`                  | The font size for fieldset components.                                                                         | `var(--graupl-input-font-size)`                                                                                                                                                                   |
| `--graupl-input-background`                    | The background color for input components.                                                                     | `var(--graupl-background)`                                                                                                                                                                        |
| `--graupl-label-background`                    | The background color for label components.                                                                     | `transparent`                                                                                                                                                                                     |
| `--graupl-fieldset-background`                 | The background color for fieldset components.                                                                  | `var(--graupl-input-background)`                                                                                                                                                                  |
| `--graupl-input-color`                         | The text color for input components.                                                                           | `var(--graupl-color)`                                                                                                                                                                             |
| `--graupl-input-placeholder-color`             | The placeholder text color for input components.                                                               | `var(--graupl-theme-active--secondary--600)`                                                                                                                                                      |
| `--graupl-label-color`                         | The text color for label components.                                                                           | `var(--graupl-input-color)`                                                                                                                                                                       |
| `--graupl-fieldset-color`                      | The text color for fieldset components.                                                                        | `var(--graupl-input-color)`                                                                                                                                                                       |
| `--graupl-input-disabled-color`                | The text color for disabled input components.                                                                  | `var(--graupl-theme-active--secondary--400)`                                                                                                                                                      |
| `--graupl-input-placeholder-disabled-color`    | The placeholder text color for disabled input components.                                                      | `var(--graupl-input-disabled-color)`                                                                                                                                                              |
| `--graupl-label-disabled-color`                | The text color for labels for disabled components.                                                             | `var(--graupl-input-disabled-color)`                                                                                                                                                              |
| `--graupl-fieldset-disabled-color`             | The text color for disabled fieldset components.                                                               | `var(--graupl-input-disabled-color)`                                                                                                                                                              |
| `--graupl-input-border-top-width`              | The top border width for input components.                                                                     | `var(--graupl-border-top-width)`                                                                                                                                                                  |
| `--graupl-input-border-right-width`            | The right border width for input components.                                                                   | `var(--graupl-border-right-width)`                                                                                                                                                                |
| `--graupl-input-border-bottom-width`           | The bottom border width for input components.                                                                  | `var(--graupl-border-bottom-width)`                                                                                                                                                               |
| `--graupl-input-border-left-width`             | The left border width for input components.                                                                    | `var(--graupl-border-left-width)`                                                                                                                                                                 |
| `--graupl-input-border-width`                  | The border width for input components (combines top, right, bottom, and left widths).                          | `var(--graupl-input-border-top-width) var(--graupl-input-border-right-width) var(--graupl-input-border-bottom-width) var(--graupl-input-border-left-width)`                                       |
| `--graupl-input-border-top-style`              | The top border style for input components.                                                                     | `var(--graupl-border-top-style)`                                                                                                                                                                  |
| `--graupl-input-border-right-style`            | The right border style for input components.                                                                   | `var(--graupl-border-right-style)`                                                                                                                                                                |
| `--graupl-input-border-bottom-style`           | The bottom border style for input components.                                                                  | `var(--graupl-border-bottom-style)`                                                                                                                                                               |
| `--graupl-input-border-left-style`             | The left border style for input components.                                                                    | `var(--graupl-border-left-style)`                                                                                                                                                                 |
| `--graupl-input-border-style`                  | The border style for input components (combines top, right, bottom, and left styles).                          | `var(--graupl-input-border-top-style) var(--graupl-input-border-right-style) var(--graupl-input-border-bottom-style) var(--graupl-input-border-left-style)`                                       |
| `--graupl-input-border-top-left-radius`        | The top-left border radius for input components.                                                               | `var(--graupl-border-top-left-radius)`                                                                                                                                                            |
| `--graupl-input-border-top-right-radius`       | The top-right border radius for input components.                                                              | `var(--graupl-border-top-right-radius)`                                                                                                                                                           |
| `--graupl-input-border-bottom-right-radius`    | The bottom-right border radius for input components.                                                           | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                        |
| `--graupl-input-border-bottom-left-radius`     | The bottom-left border radius for input components.                                                            | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                         |
| `--graupl-input-border-radius`                 | The border radius for input components (combines top-left, top-right, bottom-right, and bottom-left radii).    | `var(--graupl-input-border-top-left-radius) var(--graupl-input-border-top-right-radius) var(--graupl-input-border-bottom-right-radius) var(--graupl-input-border-bottom-left-radius)`             |
| `--graupl-fieldset-border-top-width`           | The top border width for fieldset components.                                                                  | `var(--graupl-input-border-top-width)`                                                                                                                                                            |
| `--graupl-fieldset-border-right-width`         | The right border width for fieldset components.                                                                | `var(--graupl-input-border-right-width)`                                                                                                                                                          |
| `--graupl-fieldset-border-bottom-width`        | The bottom border width for fieldset components.                                                               | `var(--graupl-input-border-bottom-width)`                                                                                                                                                         |
| `--graupl-fieldset-border-left-width`          | The left border width for fieldset components.                                                                 | `var(--graupl-input-border-left-width)`                                                                                                                                                           |
| `--graupl-fieldset-border-width`               | The border width for fieldset components (combines top, right, bottom, and left widths).                       | `var(--graupl-fieldset-border-top-width) var(--graupl-fieldset-border-right-width) var(--graupl-fieldset-border-bottom-width) var(--graupl-fieldset-border-left-width)`                           |
| `--graupl-fieldset-border-top-style`           | The top border style for fieldset components.                                                                  | `var(--graupl-input-border-top-style)`                                                                                                                                                            |
| `--graupl-fieldset-border-right-style`         | The right border style for fieldset components.                                                                | `var(--graupl-input-border-right-style)`                                                                                                                                                          |
| `--graupl-fieldset-border-bottom-style`        | The bottom border style for fieldset components.                                                               | `var(--graupl-input-border-bottom-style)`                                                                                                                                                         |
| `--graupl-fieldset-border-left-style`          | The left border style for fieldset components.                                                                 | `var(--graupl-input-border-left-style)`                                                                                                                                                           |
| `--graupl-fieldset-border-style`               | The border style for fieldset components (combines top, right, bottom, and left styles).                       | `var(--graupl-fieldset-border-top-style) var(--graupl-fieldset-border-right-style) var(--graupl-fieldset-border-bottom-style) var(--graupl-fieldset-border-left-style)`                           |
| `--graupl-fieldset-border-top-left-radius`     | The top-left border radius for fieldset components.                                                            | `var(--graupl-input-border-top-left-radius)`                                                                                                                                                      |
| `--graupl-fieldset-border-top-right-radius`    | The top-right border radius for fieldset components.                                                           | `var(--graupl-input-border-top-right-radius)`                                                                                                                                                     |
| `--graupl-fieldset-border-bottom-right-radius` | The bottom-right border radius for fieldset components.                                                        | `var(--graupl-input-border-bottom-right-radius)`                                                                                                                                                  |
| `--graupl-fieldset-border-bottom-left-radius`  | The bottom-left border radius for fieldset components.                                                         | `var(--graupl-input-border-bottom-left-radius)`                                                                                                                                                   |
| `--graupl-fieldset-border-radius`              | The border radius for fieldset components (combines top-left, top-right, bottom-right, and bottom-left radii). | `var(--graupl-fieldset-border-top-left-radius) var(--graupl-fieldset-border-top-right-radius) var(--graupl-fieldset-border-bottom-right-radius) var(--graupl-fieldset-border-bottom-left-radius)` |
| `--graupl-input-border-color`                  | The border color for input components.                                                                         | `var(--graupl-border-color)`                                                                                                                                                                      |
| `--graupl-input-disabled-border-color`         | The border color for disabled input components.                                                                | `var(--graupl-theme-active--secondary--200)`                                                                                                                                                      |
| `--graupl-label-border-color`                  | The border color for label components.                                                                         | `currentcolor`                                                                                                                                                                                    |
| `--graupl-fieldset-border-color`               | The border color for fieldset components.                                                                      | `var(--graupl-input-border-color)`                                                                                                                                                                |
| `--graupl-fieldset-disabled-border-color`      | The border color for disabled fieldset components.                                                             | `var(--graupl-input-disabled-border-color)`                                                                                                                                                       |
| `--graupl-input-accent-color`                  | The accent color for input components.                                                                         | `var(--graupl-fieldset-accent-color, var(--graupl-input-color))`                                                                                                                                  |
| `--graupl-fieldset-accent-color`               | The accent color for fieldsets and the controls inside them.                                                   | `inherit`                                                                                                                                                                                         |

## Sass variables

The following Sass variables can be used to customize the generation of the form components:

| Variable                               | Description                                                                               | Default Value |
| -------------------------------------- | ----------------------------------------------------------------------------------------- | ------------- |
| `$selector-base`                       | The selector base for the component.                                                      | `""`          |
| `$modifier-selector-base`              | The selector base for component modifiers.                                                | `"."`         |
| `$generate-base-theme-map`             | Flag to generate the base theme maps for form elements.                                   | `true`        |
| `$themeable`                           | Flag to generate theme modifiers.                                                         | `true`        |
| `$input-selector-base`                 | The base selector for the input component.                                                | `""`          |
| `$input-selector`                      | The input component selector.                                                             | `"input"`     |
| `$input-theme-prefix-selector-base`    | Selector base used for input theme modifiers.                                             | `"."`         |
| `$input-theme-prefix-selector`         | Selector prefix used for input theme modifiers.                                           | `""`          |
| `$textarea-selector-base`              | The base selector for the textarea component.                                             | `""`          |
| `$textarea-selector`                   | The textarea component selector.                                                          | `"textarea"`  |
| `$select-selector-base`                | The base selector for the select component.                                               | `""`          |
| `$select-selector`                     | The select component selector.                                                            | `"select"`    |
| `$label-selector-base`                 | The base selector for the label component.                                                | `""`          |
| `$label-selector`                      | The label component selector.                                                             | `"label"`     |
| `$label-theme-prefix-selector-base`    | Selector base used for label theme modifiers.                                             | `"."`         |
| `$label-theme-prefix-selector`         | Selector prefix used for label theme modifiers.                                           | `""`          |
| `$fieldset-selector-base`              | The base selector for the fieldset component.                                             | `""`          |
| `$fieldset-selector`                   | The fieldset component selector.                                                          | `"fieldset"`  |
| `$fieldset-theme-prefix-selector-base` | Selector base used for fieldset theme modifiers.                                          | `"."`         |
| `$fieldset-theme-prefix-selector`      | Selector prefix used for fieldset theme modifiers.                                        | `""`          |
| `$fieldset-direction`                  | The direction of fieldset component items.                                                | `column`      |
| `$input-type-selectors`                | Map of input types and their selectors.                                                   | `()`          |
| `$input-theme-mappings`                | A map of properties and color shades used to generate all input variants.                 | `()`          |
| `$input-theme-map`                     | A map of all properties, colors, and color shades used to generate all input variants.    | `()`          |
| `$label-theme-mappings`                | A map of properties and color shades used to generate all label variants.                 | `()`          |
| `$label-theme-map`                     | A map of all properties, colors, and color shades used to generate all label variants.    | `()`          |
| `$fieldset-theme-mappings`             | A map of properties and color shades used to generate all fieldset variants.              | `()`          |
| `$fieldset-theme-map`                  | A map of all properties, colors, and color shades used to generate all fieldset variants. | `()`          |
