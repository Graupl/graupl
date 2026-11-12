<script setup>
  import { computed, onBeforeUnmount, ref, useTemplateRef } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import Alert from "../../packages/core/src/js/alert/Alert.js";

  const preview = useTemplateRef("alert-preview");
  let alert;

  const variant = ref("default");
  const exampleVariant = computed(() => {
    const classes = variant.value === "default" ? "alert" : `alert ${variant.value}`;

    return `<div class="${classes}">
  <div class="alert-body">A dragon is circling the ridge trail.</div>
</div>`;
  });

  const exampleAlert = `
<div class="alert">
  <div class="alert-header">
    <p class="alert-title">Dragon on the ridge</p>
  </div>
  <div class="alert-body">
    <p>A dragon is circling the ridge trail.</p>
  </div>
  <div class="alert-footer">
    <small>Take the river path until the trail is clear.</small>
  </div>
  <button type="button" class="alert-dismisser" aria-label="Dismiss dragon warning">×</button>
</div>
  `;

  function initializePreview() {
    const alertElement = preview.value?.querySelector(".example .alert");

    if (alert?.dom.alert === alertElement) return;

    alert?.dispose();
    alert = alertElement && new Alert({
      alertElement,
      controllerElement: alertElement.querySelector(".alert-dismisser"),
      initialize: true,
    });
  }

  onBeforeUnmount(() => alert?.dispose());
</script>

# Alerts

The alert component provides a set of classes to highlight messages that readers need to see, such as a warning or a change that affects their next step.

Alerts implement the spec found in the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).

## Base classes

Wrap the message in `.alert` and put its main content in `.alert-body`. Use `.alert-header` with `.alert-title` for an optional title, and `.alert-footer` for a follow-up action or additional information.

To make an alert dismissible, add a button with the `.alert-dismisser` class and an accessible name. Once initialized, the alert can be dismissed by clicking the button or pressing Enter or Space while it has focus.

<div ref="alert-preview">
  <live-example :source-code="exampleAlert" resettable @updated="initializePreview" />
</div>

## Initialization

Run the alert generator after the markup is in the DOM.

```js
import generateAlerts from "@graupl/core/alert/generator";

generateAlerts();
```

The alert is visible by default. To start with the alert hidden, add `.hide` and set `data-graupl-alert-options='{"expanded":false}'` on the alert. The component uses `.show`, `.hide`, and `.transitioning` to manage visibility and transitions.

::: info Note
For urgent messages that appear while someone is using the page, add `role="alert"` to the message text so assistive technology can announce it.
:::

## Variants

There are three alert variants provided by default. Add `.primary`, `.secondary`, or `.tertiary` alongside `.alert`.

<live-example :source-code="exampleVariant">
  <template #options>
    <div class="input-group">
      <label for="select-alert-variant">Alert variant</label>
      <select id="select-alert-variant" v-model="variant">
        <option value="default">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="tertiary">Tertiary</option>
      </select>
    </div>
  </template>
</live-example>

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the alert module’s `$themeable` variable to `false` to skip generating theme variants.

## Custom Properties

The following custom properties can be used to customize the alert component:

| Property                                             | Description                                               | Default Value                                                                                                                                                                         |
| ---------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-alert-padding-x`                           | The horizontal padding of the alert.                      | `var(--graupl-spacer-5)`                                                                                                                                                              |
| `--graupl-alert-padding-y`                           | The vertical padding of the alert.                        | `var(--graupl-spacer-5)`                                                                                                                                                              |
| `--graupl-alert-padding`                             | The padding of the alert.                                 | `var(--graupl-alert-padding-y) var(--graupl-alert-padding-x)`                                                                                                                         |
| `--graupl-alert-column-gap`                          | The gap between alert columns.                            | `var(--graupl-spacer-0)`                                                                                                                                                              |
| `--graupl-alert-row-gap`                             | The gap between alert rows.                               | `var(--graupl-spacer-3)`                                                                                                                                                              |
| `--graupl-alert-gap`                                 | The gap between alert rows and columns.                   | `var(--graupl-alert-row-gap) var(--graupl-alert-column-gap)`                                                                                                                          |
| `--graupl-alert-background`                          | The background of the alert.                              | `var(--graupl-background)`                                                                                                                                                            |
| `--graupl-alert-color`                               | The color of the alert.                                   | `var(--graupl-color)`                                                                                                                                                                 |
| `--graupl-alert-link-color`                          | The color of links in the alert.                          | `var(--graupl-link-color)`                                                                                                                                                            |
| `--graupl-alert-link-visited-color`                  | The color of visited links in the alert.                  | `var(--graupl-alert-link-color)`                                                                                                                                                      |
| `--graupl-alert-link-focus-color`                    | The color of focused links in the alert.                  | `var(--graupl-alert-link-color)`                                                                                                                                                      |
| `--graupl-alert-link-hover-color`                    | The color of hovered links in the alert.                  | `var(--graupl-link-hover-color)`                                                                                                                                                      |
| `--graupl-alert-link-active-color`                   | The color of active links in the alert.                   | `var(--graupl-alert-link-hover-color)`                                                                                                                                                |
| `--graupl-alert-link-disabled-color`                 | The color of disabled links in the alert.                 | `var(--graupl-link-disabled-color)`                                                                                                                                                   |
| `--graupl-alert-link-text-decoration-color`          | The text decoration color of links in the alert.          | `var(--graupl-alert-link-color)`                                                                                                                                                      |
| `--graupl-alert-link-visited-text-decoration-color`  | The text decoration color of visited links in the alert.  | `var(--graupl-alert-link-visited-color)`                                                                                                                                              |
| `--graupl-alert-link-focus-text-decoration-color`    | The text decoration color of focused links in the alert.  | `var(--graupl-alert-link-focus-color)`                                                                                                                                                |
| `--graupl-alert-link-hover-text-decoration-color`    | The text decoration color of hovered links in the alert.  | `var(--graupl-alert-link-hover-color)`                                                                                                                                                |
| `--graupl-alert-link-active-text-decoration-color`   | The text decoration color of active links in the alert.   | `var(--graupl-alert-link-active-color)`                                                                                                                                               |
| `--graupl-alert-link-disabled-text-decoration-color` | The text decoration color of disabled links in the alert. | `var(--graupl-alert-link-disabled-color)`                                                                                                                                             |
| `--graupl-alert-link-background`                     | The background of links in the alert.                     | `var(--graupl-link-background)`                                                                                                                                                       |
| `--graupl-alert-link-visited-background`             | The background of visited links in the alert.             | `var(--graupl-alert-link-background)`                                                                                                                                                 |
| `--graupl-alert-link-focus-background`               | The background of focused links in the alert.             | `var(--graupl-alert-link-background)`                                                                                                                                                 |
| `--graupl-alert-link-hover-background`               | The background of hovered links in the alert.             | `var(--graupl-link-hover-background)`                                                                                                                                                 |
| `--graupl-alert-link-active-background`              | The background of active links in the alert.              | `var(--graupl-alert-link-hover-background)`                                                                                                                                           |
| `--graupl-alert-link-disabled-background`            | The background of disabled links in the alert.            | `var(--graupl-link-disabled-background)`                                                                                                                                              |
| `--graupl-alert-link-border-color`                   | The border color of links in the alert.                   | `var(--graupl-link-border-color)`                                                                                                                                                     |
| `--graupl-alert-link-visited-border-color`           | The border color of visited links in the alert.           | `var(--graupl-alert-link-border-color)`                                                                                                                                               |
| `--graupl-alert-link-focus-border-color`             | The border color of focused links in the alert.           | `var(--graupl-alert-link-border-color)`                                                                                                                                               |
| `--graupl-alert-link-hover-border-color`             | The border color of hovered links in the alert.           | `var(--graupl-link-hover-border-color)`                                                                                                                                               |
| `--graupl-alert-link-active-border-color`            | The border color of active links in the alert.            | `var(--graupl-alert-link-hover-border-color)`                                                                                                                                         |
| `--graupl-alert-link-disabled-border-color`          | The border color of disabled links in the alert.          | `var(--graupl-link-disabled-border-color)`                                                                                                                                            |
| `--graupl-alert-border-color`                        | The border color of the alert.                            | `var(--graupl-alert-color)`                                                                                                                                                           |
| `--graupl-alert-border-top-left-radius`              | The border top left radius of the alert.                  | `var(--graupl-border-top-left-radius)`                                                                                                                                                |
| `--graupl-alert-border-top-right-radius`             | The border top right radius of the alert.                 | `var(--graupl-border-top-right-radius)`                                                                                                                                               |
| `--graupl-alert-border-bottom-left-radius`           | The border bottom left radius of the alert.               | `var(--graupl-border-bottom-left-radius)`                                                                                                                                             |
| `--graupl-alert-border-bottom-right-radius`          | The border bottom right radius of the alert.              | `var(--graupl-border-bottom-right-radius)`                                                                                                                                            |
| `--graupl-alert-border-radius`                       | The border radius of the alert.                           | `var(--graupl-alert-border-top-left-radius) var(--graupl-alert-border-top-right-radius) var(--graupl-alert-border-bottom-right-radius) var(--graupl-alert-border-bottom-left-radius)` |
| `--graupl-alert-border-top-width`                    | The border top width of the alert.                        | `var(--graupl-border-top-width)`                                                                                                                                                      |
| `--graupl-alert-border-right-width`                  | The border right width of the alert.                      | `var(--graupl-border-right-width)`                                                                                                                                                    |
| `--graupl-alert-border-bottom-width`                 | The border bottom width of the alert.                     | `var(--graupl-border-bottom-width)`                                                                                                                                                   |
| `--graupl-alert-border-left-width`                   | The border left width of the alert.                       | `var(--graupl-border-left-width)`                                                                                                                                                     |
| `--graupl-alert-border-width`                        | The border width of the alert.                            | `var(--graupl-alert-border-top-width) var(--graupl-alert-border-right-width) var(--graupl-alert-border-bottom-width) var(--graupl-alert-border-left-width)`                           |
| `--graupl-alert-border-top-style`                    | The border top style of the alert.                        | `var(--graupl-border-top-style)`                                                                                                                                                      |
| `--graupl-alert-border-right-style`                  | The border right style of the alert.                      | `var(--graupl-border-right-style)`                                                                                                                                                    |
| `--graupl-alert-border-bottom-style`                 | The border bottom style of the alert.                     | `var(--graupl-border-bottom-style)`                                                                                                                                                   |
| `--graupl-alert-border-left-style`                   | The border left style of the alert.                       | `var(--graupl-border-left-style)`                                                                                                                                                     |
| `--graupl-alert-border-style`                        | The border style of the alert.                            | `var(--graupl-alert-border-top-style) var(--graupl-alert-border-right-style) var(--graupl-alert-border-bottom-style) var(--graupl-alert-border-left-style)`                           |
| `--graupl-alert-transition`                          | The transition of the alert.                              | `opacity var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)`  |
| `--graupl-alert-transition-reduced-motion`           | The alert transition when reduced motion is enabled.      | `opacity var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)`                                                                                             |
| `--graupl-alert-header-padding-x`                    | The horizontal padding of the alert header.               | `0`                                                                                                                                                                                   |
| `--graupl-alert-header-padding-y`                    | The vertical padding of the alert header.                 | `0`                                                                                                                                                                                   |
| `--graupl-alert-header-padding`                      | The padding of the alert header.                          | `var(--graupl-alert-header-padding-y) var(--graupl-alert-header-padding-x)`                                                                                                           |
| `--graupl-alert-dismisser-border-color`              | The border color of the alert dismiss button.             | `transparent`                                                                                                                                                                         |
| `--graupl-alert-dismisser-visited-border-color`      | The border color of the visited alert dismiss button.     | `var(--graupl-alert-dismisser-border-color)`                                                                                                                                          |
| `--graupl-alert-dismisser-focus-border-color`        | The border color of the focused alert dismiss button.     | `var(--graupl-alert-dismisser-border-color)`                                                                                                                                          |
| `--graupl-alert-dismisser-hover-border-color`        | The border color of the hovered alert dismiss button.     | `transparent`                                                                                                                                                                         |
| `--graupl-alert-dismisser-active-border-color`       | The border color of the active alert dismiss button.      | `var(--graupl-alert-dismisser-hover-border-color)`                                                                                                                                    |
| `--graupl-alert-dismisser-disabled-border-color`     | The border color of the disabled alert dismiss button.    | `transparent`                                                                                                                                                                         |
| `--graupl-alert-dismisser-background`                | The default background of the alert dismiss button.       | `var(--graupl-alert-background)`                                                                                                                                                      |
| `--graupl-alert-dismisser-visited-background`        | The background of the visited alert dismiss button.       | `var(--graupl-alert-dismisser-background)`                                                                                                                                            |
| `--graupl-alert-dismisser-focus-background`          | The background of the focused alert dismiss button.       | `var(--graupl-alert-dismisser-background)`                                                                                                                                            |
| `--graupl-alert-dismisser-hover-background`          | The background of the hovered alert dismiss button.       | `var(--graupl-button-hover-background)`                                                                                                                                               |
| `--graupl-alert-dismisser-active-background`         | The background of the active alert dismiss button.        | `var(--graupl-alert-dismisser-hover-background)`                                                                                                                                      |
| `--graupl-alert-dismisser-disabled-background`       | The background of the disabled alert dismiss button.      | `var(--graupl-button-disabled-background)`                                                                                                                                            |
| `--graupl-alert-dismisser-color`                     | The default text color of the alert dismiss button.       | `var(--graupl-alert-color)`                                                                                                                                                           |
| `--graupl-alert-dismisser-visited-color`             | The text color of the visited alert dismiss button.       | `var(--graupl-alert-dismisser-color)`                                                                                                                                                 |
| `--graupl-alert-dismisser-focus-color`               | The text color of the focused alert dismiss button.       | `var(--graupl-alert-dismisser-color)`                                                                                                                                                 |
| `--graupl-alert-dismisser-hover-color`               | The text color of the hovered alert dismiss button.       | `var(--graupl-button-hover-color)`                                                                                                                                                    |
| `--graupl-alert-dismisser-active-color`              | The text color of the active alert dismiss button.        | `var(--graupl-alert-dismisser-hover-color)`                                                                                                                                           |
| `--graupl-alert-dismisser-disabled-color`            | The text color of the disabled alert dismiss button.      | `var(--graupl-button-disabled-color)`                                                                                                                                                 |
| `--graupl-alert-title-color`                         | The color of the alert title.                             | `var(--graupl-alert-color)`                                                                                                                                                           |
| `--graupl-alert-title-font-size`                     | The font size of the alert title.                         | `var(--graupl-h4-font-size)`                                                                                                                                                          |
| `--graupl-alert-title-font-weight`                   | The font weight of the alert title.                       | `var(--graupl-h4-font-weight)`                                                                                                                                                        |
| `--graupl-alert-title-font-family`                   | The font family of the alert title.                       | `var(--graupl-h4-font-family)`                                                                                                                                                        |
| `--graupl-alert-title-line-height`                   | The line height of the alert title.                       | `var(--graupl-h4-line-height)`                                                                                                                                                        |
| `--graupl-alert-title-margin`                        | The margin of the alert title.                            | `0 0 0 0`                                                                                                                                                                             |
| `--graupl-alert-body-padding-x`                      | The horizontal padding of the alert body.                 | `0`                                                                                                                                                                                   |
| `--graupl-alert-body-padding-y`                      | The vertical padding of the alert body.                   | `0`                                                                                                                                                                                   |
| `--graupl-alert-body-padding`                        | The padding of the alert body.                            | `var(--graupl-alert-body-padding-y) var(--graupl-alert-body-padding-x)`                                                                                                               |
| `--graupl-alert-footer-padding-x`                    | The horizontal padding of the alert footer.               | `0`                                                                                                                                                                                   |
| `--graupl-alert-footer-padding-y`                    | The vertical padding of the alert footer.                 | `0`                                                                                                                                                                                   |
| `--graupl-alert-footer-padding`                      | The padding of the alert footer.                          | `var(--graupl-alert-footer-padding-y) var(--graupl-alert-footer-padding-x)`                                                                                                           |

## Sass variables

The following Sass variables can be used to customize the generation of the alert component:

| Variable                          | Description                                                                            | Default Value                                              |
| --------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `$selector-base`                  | The selector base for the component.                                                   | `"."`                                                      |
| `$modifier-selector-base`         | The selector base for component modifiers.                                             | `"."`                                                      |
| `$generate-base-theme-map`        | Whether to include the default alert theme mappings.                                   | `true`                                                     |
| `$themeable`                      | Whether to generate theme variants for alerts.                                         | `true`                                                     |
| `$alert-selector-base`            | The selector base for the alert selector-base.                                         | `"."`                                                      |
| `$alert-selector`                 | The selector for the alert selector.                                                   | `"alert"`                                                  |
| `$alert-theme-selector-base`      | The selector base for alert theme variants.                                            | `"."`                                                      |
| `$alert-theme-selector-prefix`    | The selector prefix for alert theme variants.                                          | `""`                                                       |
| `$alert-body-selector-base`       | The selector base for the alert body.                                                  | `"."`                                                      |
| `$alert-body-selector`            | The selector for the alert body.                                                       | `"alert-body"`                                             |
| `$alert-header-selector-base`     | The selector base for the alert header.                                                | `"."`                                                      |
| `$alert-header-selector`          | The selector for the alert header.                                                     | `"alert-header"`                                           |
| `$alert-footer-selector-base`     | The selector base for the alert footer.                                                | `"."`                                                      |
| `$alert-footer-selector`          | The selector for the alert footer.                                                     | `"alert-footer"`                                           |
| `$alert-title-selector-base`      | The selector base for the alert title.                                                 | `"."`                                                      |
| `$alert-title-selector`           | The selector for the alert title.                                                      | `"alert-title"`                                            |
| `$alert-dismisser-selector-base`  | The selector base for the dismiss button.                                              | `"."`                                                      |
| `$alert-dismisser-selector`       | The selector for the dismiss button.                                                   | `"alert-dismisser"`                                        |
| `$alert-hidden-selector-base`     | The selector base for the hidden state.                                                | `"."`                                                      |
| `$alert-hidden-selector`          | The selector for the hidden state.                                                     | `"hide"`                                                   |
| `$alert-shown-selector-base`      | The selector base for the shown state.                                                 | `"."`                                                      |
| `$alert-shown-selector`           | The selector for the shown state.                                                      | `"show"`                                                   |
| `$alert-transition-selector-base` | The selector base for the transition state.                                            | `"."`                                                      |
| `$alert-transition-selector`      | The selector for the transition state.                                                 | `"transitioning"`                                          |
| `$alert-theme-mappings`           | A map of properties and color shades used to generate all alert variants.              | `map.merge($-alert-theme-mappings, $alert-theme-mappings)` |
| `$alert-theme-map`                | A map of all properties, colors, and color shades used to generate all alert variants. | `map.deep-merge($-alert-theme-map, $alert-theme-map)`      |
