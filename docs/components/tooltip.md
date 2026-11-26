<script setup>
  import { computed, onBeforeUnmount, ref, useTemplateRef } from "vue";
  import Tooltip from "@graupl/core/src/tooltip/Tooltip.js";
  import exampleCopy from "../vue-components/exampleCopy.js";
  import LiveExample from "../vue-components/LiveExample.vue";

  const preview = useTemplateRef("preview");
  const optionsPreview = useTemplateRef("options-preview");
  const instances = new Map();

  const exampleTooltip = computed(() => `
<div class="tooltip">
  <span class="tooltip-description hide">${exampleCopy.html("tooltip.body")}</span>
  <button type="button" class="tooltip-toggle" aria-label="${exampleCopy.html("tooltip.label")}"></button>
</div>
  `);

  const optionsControls = [
    {
      name: "expandOnFocus",
      defaultValue: true,
      label: "Expand on keyboard focus",
      help: "Show the tooltip when you tab to its trigger. Enabled by default.",
    },
    {
      name: "hoverType",
      defaultValue: "on",
      checkedValue: "on",
      uncheckedValue: "off",
      label: "Expand on mouse hover",
      help: "Show the tooltip when you move the mouse over its trigger. Enabled by default.",
    },
  ];

  const optionsAttribute = "data-graupl-tooltip-options";
  const defaultOptions = Object.fromEntries(
    optionsControls.map(({ name, defaultValue }) => [name, defaultValue])
  );
  const optionValues = ref({ ...defaultOptions });
  const optionsError = ref("");

  const exampleWithOptions = computed(() =>
    exampleTooltip.value
      .replace('class="tooltip', `data-graupl-tooltip-options='${JSON.stringify(optionValues.value)}' class="tooltip`));

  function initializePreview(wrapper) {
    const element = wrapper?.querySelector(".example .tooltip");
    const previous = instances.get(wrapper);

    // Form and status updates can run this hook without replacing the markup.
    if (previous?.dom.tooltip === element) return;

    previous?.dispose();
    instances.delete(wrapper);

    const isOptionsPreview = wrapper === optionsPreview.value;
    if (isOptionsPreview) optionsError.value = "";
    if (!element) return;

    let options = {};
    const attribute = isOptionsPreview ? element.getAttribute(optionsAttribute) : null;

    if (attribute) {
      // An edit can leave incomplete JSON until the next keystroke.
      try {
        options = JSON.parse(attribute);
      } catch {
        options = null;
      }

      if (!options || typeof options !== "object" || Array.isArray(options)) {
        optionsError.value = `Enter a JSON object in ${optionsAttribute}.`;
        return;
      }
    }

    instances.set(wrapper, new Tooltip({
      ...options,
      tooltipElement: element,
      tooltipToggleElement: element.querySelector(".tooltip-toggle"),
      tooltipDescriptionElement: element.querySelector(".tooltip-description"),
      initialize: true,
    }));
  }

  onBeforeUnmount(() => instances.forEach((instance) => instance.dispose()));
</script>

# Tooltips

The tooltip component provides a set of classes to show a short description alongside a button. Use it for supplemental information and keep essential instructions visible on the page.

Tooltips implement the spec found in the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/).

## Base classes

Wrap the description and its button in `.tooltip`. Use `.tooltip-description` for the text and `.tooltip-toggle` on a button with an accessible name. Initialization gives the description the tooltip role and associates it with the button through `aria-describedby`.

By default, the tooltip opens when you hover over the button or Tab to it. Click the button or press Enter or Space to toggle it. Press Escape to close it.

::: info Note
The preview limits the description width so it fits beside the button on narrow screens.
:::

<div ref="preview">
  <live-example :source-code="exampleTooltip" example-class="tooltip-preview" @updated="initializePreview(preview)" />
</div>

## Initialization

Run the tooltip generator after the markup is in the DOM.

```js
import generateTooltips from "@graupl/core/tooltip/generator";

generateTooltips();
```

## JavaScript customization

Use `data-graupl-tooltip-options` to customize a tooltip. The example below shows how `expandOnFocus` and `hoverType` change its behavior.

<div ref="options-preview">
  <live-example
    :source-code="exampleWithOptions"
    options-position="top"
    resettable
    @updated="initializePreview(optionsPreview)"
    @reset="optionValues = { ...defaultOptions }"
  >
    <template #options>
      <form @submit.prevent>
        <fieldset>
          <legend>Tooltip options</legend>
          <div v-for="control in optionsControls" :key="control.name" class="input-group left">
            <input
              :id="`tooltip-option-${control.name}`"
              type="checkbox"
              :aria-describedby="`tooltip-option-${control.name}-help`"
              v-model="optionValues[control.name]"
              :true-value="control.checkedValue ?? true"
              :false-value="control.uncheckedValue ?? false"
            >
            <label :for="`tooltip-option-${control.name}`">{{ control.label }}</label>
            <small :id="`tooltip-option-${control.name}-help`" class="help-text">{{ control.help }}</small>
          </div>
        </fieldset>
      </form>
    </template>
  </live-example>
  <div role="status">{{ optionsError }}</div>
</div>

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the tooltip module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants.

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/component/tooltip.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/component/tooltip.css">
```

```scss [Sass]
@use "pkg:@graupl/core/component/tooltip.scss";
```

:::

### JavaScript

For a page that uses this component, include its generator script below. It finds and initializes matching markup when the page loads. If you already load the full `graupl.js` bundle, it runs the generator for you. To call the generator yourself, see [Initialization](#initialization).

::: code-group

```html [Local]
<script defer src="./dist/js/tooltip.js"></script>
```

```html [CDN]
<script defer src="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/js/tooltip.js"></script>
```

:::

## Custom Properties

The following custom properties can be used to customize the tooltip component:

| Property                                                  | Description                                                         | Default Value                                                                                                                                                                                                                                 |
| --------------------------------------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-tooltip-padding-x`                              | The horizontal padding of the tooltip.                              | `var(--graupl-spacer-0)`                                                                                                                                                                                                                      |
| `--graupl-tooltip-padding-y`                              | The vertical padding of the tooltip.                                | `var(--graupl-spacer-0)`                                                                                                                                                                                                                      |
| `--graupl-tooltip-padding`                                | The padding of the tooltip.                                         | `var(--graupl-tooltip-padding-y) var(--graupl-tooltip-padding-x)`                                                                                                                                                                             |
| `--graupl-tooltip-display`                                | The display of the tooltip.                                         | `inline`                                                                                                                                                                                                                                      |
| `--graupl-tooltip-width`                                  | The width of the tooltip.                                           | `fit-content`                                                                                                                                                                                                                                 |
| `--graupl-tooltip-background`                             | The background of the tooltip.                                      | `var(--graupl-background)`                                                                                                                                                                                                                    |
| `--graupl-tooltip-color`                                  | The color of the tooltip.                                           | `var(--graupl-color)`                                                                                                                                                                                                                         |
| `--graupl-tooltip-border-color`                           | The border color of the tooltip.                                    | `var(--graupl-tooltip-color)`                                                                                                                                                                                                                 |
| `--graupl-tooltip-border-top-left-radius`                 | The border top left radius of the tooltip.                          | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                                        |
| `--graupl-tooltip-border-top-right-radius`                | The border top right radius of the tooltip.                         | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                                       |
| `--graupl-tooltip-border-bottom-left-radius`              | The border bottom left radius of the tooltip.                       | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                                     |
| `--graupl-tooltip-border-bottom-right-radius`             | The border bottom right radius of the tooltip.                      | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                                    |
| `--graupl-tooltip-border-radius`                          | The border radius of the tooltip.                                   | `var(--graupl-tooltip-border-top-left-radius) var(--graupl-tooltip-border-top-right-radius) var(--graupl-tooltip-border-bottom-right-radius) var(--graupl-tooltip-border-bottom-left-radius)`                                                 |
| `--graupl-tooltip-border-top-width`                       | The border top width of the tooltip.                                | `0`                                                                                                                                                                                                                                           |
| `--graupl-tooltip-border-right-width`                     | The border right width of the tooltip.                              | `0`                                                                                                                                                                                                                                           |
| `--graupl-tooltip-border-bottom-width`                    | The border bottom width of the tooltip.                             | `0`                                                                                                                                                                                                                                           |
| `--graupl-tooltip-border-left-width`                      | The border left width of the tooltip.                               | `0`                                                                                                                                                                                                                                           |
| `--graupl-tooltip-border-width`                           | The border width of the tooltip.                                    | `var(--graupl-tooltip-border-top-width) var(--graupl-tooltip-border-right-width) var(--graupl-tooltip-border-bottom-width) var(--graupl-tooltip-border-left-width)`                                                                           |
| `--graupl-tooltip-border-top-style`                       | The border top style of the tooltip.                                | `var(--graupl-border-top-style)`                                                                                                                                                                                                              |
| `--graupl-tooltip-border-right-style`                     | The border right style of the tooltip.                              | `var(--graupl-border-right-style)`                                                                                                                                                                                                            |
| `--graupl-tooltip-border-bottom-style`                    | The border bottom style of the tooltip.                             | `var(--graupl-border-bottom-style)`                                                                                                                                                                                                           |
| `--graupl-tooltip-border-left-style`                      | The border left style of the tooltip.                               | `var(--graupl-border-left-style)`                                                                                                                                                                                                             |
| `--graupl-tooltip-border-style`                           | The border style of the tooltip.                                    | `var(--graupl-tooltip-border-top-style) var(--graupl-tooltip-border-right-style) var(--graupl-tooltip-border-bottom-style) var(--graupl-tooltip-border-left-style)`                                                                           |
| `--graupl-tooltip-description-width`                      | The width of the tooltip description.                               | `30ch`                                                                                                                                                                                                                                        |
| `--graupl-tooltip-description-color`                      | The color of the tooltip description.                               | `var(--graupl-tooltip-color)`                                                                                                                                                                                                                 |
| `--graupl-tooltip-description-background`                 | The background of the tooltip description.                          | `var(--graupl-tooltip-background)`                                                                                                                                                                                                            |
| `--graupl-tooltip-description-font-size`                  | The tooltip description font size.                                  | `inherit`                                                                                                                                                                                                                                     |
| `--graupl-tooltip-description-font-weight`                | The font weight of the tooltip description.                         | `var(--graupl-root-font-weight)`                                                                                                                                                                                                              |
| `--graupl-tooltip-description-font-family`                | The font family of the tooltip description.                         | `var(--graupl-root-font-family)`                                                                                                                                                                                                              |
| `--graupl-tooltip-description-line-height`                | The line height of the tooltip description.                         | `var(--graupl-root-line-height)`                                                                                                                                                                                                              |
| `--graupl-tooltip-description-margin`                     | The margin of the tooltip description.                              | `0 0 0 0`                                                                                                                                                                                                                                     |
| `--graupl-tooltip-description-padding-x`                  | The horizontal padding of the tooltip description.                  | `var(--graupl-spacer-3)`                                                                                                                                                                                                                      |
| `--graupl-tooltip-description-padding-y`                  | The vertical padding of the tooltip description.                    | `var(--graupl-spacer-2)`                                                                                                                                                                                                                      |
| `--graupl-tooltip-description-padding`                    | The padding of the tooltip description.                             | `var(--graupl-tooltip-description-padding-y) var(--graupl-tooltip-description-padding-x)`                                                                                                                                                     |
| `--graupl-tooltip-description-indent`                     | The indent of the tooltip description.                              | `calc(var(--graupl-tooltip-toggle-width) + var(--graupl-spacer-2))`                                                                                                                                                                           |
| `--graupl-tooltip-description-top`                        | The top inset of the tooltip description.                           | `auto`                                                                                                                                                                                                                                        |
| `--graupl-tooltip-description-right`                      | The right inset of the tooltip description.                         | `auto`                                                                                                                                                                                                                                        |
| `--graupl-tooltip-description-bottom`                     | The bottom inset of the tooltip description.                        | `auto`                                                                                                                                                                                                                                        |
| `--graupl-tooltip-description-left`                       | The left inset of the tooltip description.                          | `var(--graupl-tooltip-description-indent)`                                                                                                                                                                                                    |
| `--graupl-tooltip-description-inset`                      | The inset of the tooltip description.                               | `var(--graupl-tooltip-description-top) var(--graupl-tooltip-description-right) var(--graupl-tooltip-description-bottom) var(--graupl-tooltip-description-left)`                                                                               |
| `--graupl-tooltip-description-border-color`               | The border color of the tooltip description.                        | `var(--graupl-tooltip-border-color)`                                                                                                                                                                                                          |
| `--graupl-tooltip-description-border-top-left-radius`     | The border top left radius of the tooltip description.              | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                                        |
| `--graupl-tooltip-description-border-top-right-radius`    | The border top right radius of the tooltip description.             | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                                       |
| `--graupl-tooltip-description-border-bottom-left-radius`  | The border bottom left radius of the tooltip description.           | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                                     |
| `--graupl-tooltip-description-border-bottom-right-radius` | The border bottom right radius of the tooltip description.          | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                                    |
| `--graupl-tooltip-description-border-radius`              | The border radius of the tooltip description.                       | `var(--graupl-tooltip-description-border-top-left-radius) var(--graupl-tooltip-description-border-top-right-radius) var(--graupl-tooltip-description-border-bottom-right-radius) var(--graupl-tooltip-description-border-bottom-left-radius)` |
| `--graupl-tooltip-description-border-top-width`           | The border top width of the tooltip description.                    | `var(--graupl-border-top-width)`                                                                                                                                                                                                              |
| `--graupl-tooltip-description-border-right-width`         | The border right width of the tooltip description.                  | `var(--graupl-border-right-width)`                                                                                                                                                                                                            |
| `--graupl-tooltip-description-border-bottom-width`        | The border bottom width of the tooltip description.                 | `var(--graupl-border-bottom-width)`                                                                                                                                                                                                           |
| `--graupl-tooltip-description-border-left-width`          | The border left width of the tooltip description.                   | `var(--graupl-border-left-width)`                                                                                                                                                                                                             |
| `--graupl-tooltip-description-border-width`               | The border width of the tooltip description.                        | `var(--graupl-tooltip-description-border-top-width) var(--graupl-tooltip-description-border-right-width) var(--graupl-tooltip-description-border-bottom-width) var(--graupl-tooltip-description-border-left-width)`                           |
| `--graupl-tooltip-description-border-top-style`           | The border top style of the tooltip description.                    | `var(--graupl-border-top-style)`                                                                                                                                                                                                              |
| `--graupl-tooltip-description-border-right-style`         | The border right style of the tooltip description.                  | `var(--graupl-border-right-style)`                                                                                                                                                                                                            |
| `--graupl-tooltip-description-border-bottom-style`        | The border bottom style of the tooltip description.                 | `var(--graupl-border-bottom-style)`                                                                                                                                                                                                           |
| `--graupl-tooltip-description-border-left-style`          | The border left style of the tooltip description.                   | `var(--graupl-border-left-style)`                                                                                                                                                                                                             |
| `--graupl-tooltip-description-border-style`               | The border style of the tooltip description.                        | `var(--graupl-tooltip-description-border-top-style) var(--graupl-tooltip-description-border-right-style) var(--graupl-tooltip-description-border-bottom-style) var(--graupl-tooltip-description-border-left-style)`                           |
| `--graupl-tooltip-toggle-width`                           | The width of the tooltip toggle.                                    | `var(--graupl-button-min-width)`                                                                                                                                                                                                              |
| `--graupl-tooltip-toggle-height`                          | The height of the tooltip toggle.                                   | `var(--graupl-button-min-height)`                                                                                                                                                                                                             |
| `--graupl-tooltip-toggle-content`                         | The content of the tooltip toggle.                                  | `"i"`                                                                                                                                                                                                                                         |
| `--graupl-tooltip-toggle-font-family`                     | The font family of the tooltip toggle.                              | `serif`                                                                                                                                                                                                                                       |
| `--graupl-tooltip-toggle-font-size`                       | The font size of the tooltip toggle.                                | `var(--graupl-font-size-sm)`                                                                                                                                                                                                                  |
| `--graupl-tooltip-toggle-font-weight`                     | The font weight of the tooltip toggle.                              | `var(--graupl-font-weight-bold)`                                                                                                                                                                                                              |
| `--graupl-tooltip-toggle-padding-x`                       | The horizontal padding of the tooltip toggle.                       | `var(--graupl-spacer-1)`                                                                                                                                                                                                                      |
| `--graupl-tooltip-toggle-padding-y`                       | The vertical padding of the tooltip toggle.                         | `var(--graupl-spacer-1)`                                                                                                                                                                                                                      |
| `--graupl-tooltip-toggle-padding`                         | The padding of the tooltip toggle.                                  | `var(--graupl-tooltip-toggle-padding-y) var(--graupl-tooltip-toggle-padding-x)`                                                                                                                                                               |
| `--graupl-tooltip-toggle-border-top-left-radius`          | The border top left radius of the tooltip toggle.                   | `100vw`                                                                                                                                                                                                                                       |
| `--graupl-tooltip-toggle-border-top-right-radius`         | The border top right radius of the tooltip toggle.                  | `100vw`                                                                                                                                                                                                                                       |
| `--graupl-tooltip-toggle-border-bottom-left-radius`       | The border bottom left radius of the tooltip toggle.                | `100vw`                                                                                                                                                                                                                                       |
| `--graupl-tooltip-toggle-border-bottom-right-radius`      | The border bottom right radius of the tooltip toggle.               | `100vw`                                                                                                                                                                                                                                       |
| `--graupl-tooltip-toggle-border-radius`                   | The border radius of the tooltip toggle.                            | `var(--graupl-tooltip-toggle-border-top-left-radius) var(--graupl-tooltip-toggle-border-top-right-radius) var(--graupl-tooltip-toggle-border-bottom-right-radius) var(--graupl-tooltip-toggle-border-bottom-left-radius)`                     |
| `--graupl-tooltip-toggle-background`                      | The background of the tooltip toggle.                               | `var(--graupl-tooltip-background)`                                                                                                                                                                                                            |
| `--graupl-tooltip-toggle-visited-background`              | The visited background of the tooltip toggle.                       | `var(--graupl-tooltip-toggle-background)`                                                                                                                                                                                                     |
| `--graupl-tooltip-toggle-focus-background`                | The focus background of the tooltip toggle.                         | `var(--graupl-tooltip-toggle-background)`                                                                                                                                                                                                     |
| `--graupl-tooltip-toggle-hover-background`                | The hover background of the tooltip toggle.                         | `var(--graupl-tooltip-color)`                                                                                                                                                                                                                 |
| `--graupl-tooltip-toggle-active-background`               | The active background of the tooltip toggle.                        | `var(--graupl-tooltip-toggle-hover-background)`                                                                                                                                                                                               |
| `--graupl-tooltip-toggle-selected-background`             | The selected background of the tooltip toggle.                      | `var(--graupl-tooltip-toggle-hover-background)`                                                                                                                                                                                               |
| `--graupl-tooltip-toggle-disabled-background`             | The disabled background of the tooltip toggle.                      | `var(--graupl-tooltip-background)`                                                                                                                                                                                                            |
| `--graupl-tooltip-toggle-color`                           | The color of the tooltip toggle.                                    | `var(--graupl-tooltip-color)`                                                                                                                                                                                                                 |
| `--graupl-tooltip-toggle-visited-color`                   | The visited color of the tooltip toggle.                            | `var(--graupl-tooltip-toggle-color)`                                                                                                                                                                                                          |
| `--graupl-tooltip-toggle-focus-color`                     | The focus color of the tooltip toggle.                              | `var(--graupl-tooltip-toggle-color)`                                                                                                                                                                                                          |
| `--graupl-tooltip-toggle-hover-color`                     | The hover color of the tooltip toggle.                              | `var(--graupl-tooltip-background)`                                                                                                                                                                                                            |
| `--graupl-tooltip-toggle-active-color`                    | The active color of the tooltip toggle.                             | `var(--graupl-tooltip-toggle-hover-color)`                                                                                                                                                                                                    |
| `--graupl-tooltip-toggle-selected-color`                  | The selected color of the tooltip toggle.                           | `var(--graupl-tooltip-toggle-hover-color)`                                                                                                                                                                                                    |
| `--graupl-tooltip-toggle-disabled-color`                  | The disabled color of the tooltip toggle.                           | `var(--graupl-theme-active--primary--200)`                                                                                                                                                                                                    |
| `--graupl-tooltip-toggle-border-color`                    | The border color of the tooltip toggle.                             | `var(--graupl-tooltip-border-color)`                                                                                                                                                                                                          |
| `--graupl-tooltip-toggle-visited-border-color`            | The visited border color of the tooltip toggle.                     | `var(--graupl-tooltip-toggle-border-color)`                                                                                                                                                                                                   |
| `--graupl-tooltip-toggle-focus-border-color`              | The focus border color of the tooltip toggle.                       | `var(--graupl-tooltip-toggle-border-color)`                                                                                                                                                                                                   |
| `--graupl-tooltip-toggle-hover-border-color`              | The hover border color of the tooltip toggle.                       | `var(--graupl-tooltip-border-color)`                                                                                                                                                                                                          |
| `--graupl-tooltip-toggle-active-border-color`             | The active border color of the tooltip toggle.                      | `var(--graupl-tooltip-toggle-hover-border-color)`                                                                                                                                                                                             |
| `--graupl-tooltip-toggle-selected-border-color`           | The selected border color of the tooltip toggle.                    | `var(--graupl-tooltip-toggle-hover-border-color)`                                                                                                                                                                                             |
| `--graupl-tooltip-toggle-disabled-border-color`           | The disabled border color of the tooltip toggle.                    | `var(--graupl-theme-active--primary--200)`                                                                                                                                                                                                    |
| `--graupl-tooltip-toggle-transform`                       | The transform of the tooltip toggle.                                | `none`                                                                                                                                                                                                                                        |
| `--graupl-tooltip-toggle-visited-transform`               | The visited transform of the tooltip toggle.                        | `var(--graupl-tooltip-toggle-transform)`                                                                                                                                                                                                      |
| `--graupl-tooltip-toggle-focus-transform`                 | The focus transform of the tooltip toggle.                          | `var(--graupl-tooltip-toggle-transform)`                                                                                                                                                                                                      |
| `--graupl-tooltip-toggle-hover-transform`                 | The hover transform of the tooltip toggle.                          | `var(--graupl-tooltip-toggle-transform)`                                                                                                                                                                                                      |
| `--graupl-tooltip-toggle-active-transform`                | The active transform of the tooltip toggle.                         | `none`                                                                                                                                                                                                                                        |
| `--graupl-tooltip-toggle-selected-transform`              | The selected transform of the tooltip toggle.                       | `none`                                                                                                                                                                                                                                        |
| `--graupl-tooltip-toggle-disabled-transform`              | The disabled transform of the tooltip toggle.                       | `none`                                                                                                                                                                                                                                        |

## Sass variables

The following Sass variables can be used to customize the generation of the tooltip component:

| Variable                               | Description                                                                              | Default Value                       |
| -------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------- |
| `$selector-base`                       | Default for selector base.                                                               | `"."`                               |
| `$modifier-selector-base`              | Default for modifier selector base.                                                      | `"."`                               |
| `$generate-base-theme-map`             | Default for generate base theme map.                                                     | `true`                              |
| `$themeable`                           | Default for themeable.                                                                   | `false`                             |
| `$tooltip-selector-base`               | Default for tooltip selector base.                                                       | `"."`                               |
| `$tooltip-selector`                    | Default for tooltip selector.                                                            | `"tooltip"`                         |
| `$tooltip-theme-selector-base`         | Default for tooltip theme selector base.                                                 | `"."`                               |
| `$tooltip-theme-selector-prefix`       | Default for tooltip theme selector prefix.                                               | `""`                                |
| `$tooltip-toggle-selector-base`        | Default for tooltip button selector base.                                                | `"."`                               |
| `$tooltip-toggle-selector`             | Default for tooltip button selector.                                                     | `"tooltip-toggle"`                  |
| `$tooltip-description-selector-base`   | Default for tooltip description selector base.                                           | `"."`                               |
| `$tooltip-description-selector`        | Default for tooltip description selector.                                                | `"tooltip-description"`             |
| `$tooltip-hidden-selector-base`        | Default for tooltip hidden selector base.                                                | `"."`                               |
| `$tooltip-hidden-selector`             | Default for tooltip hidden selector.                                                     | `"hide"`                            |
| `$tooltip-shown-selector-base`         | Default for tooltip shown selector base.                                                 | `"."`                               |
| `$tooltip-shown-selector`              | Default for tooltip shown selector.                                                      | `"show"`                            |
| `$tooltip-transitioning-selector-base` | Default for tooltip transitioning selector base.                                         | `"."`                               |
| `$tooltip-transitioning-selector`      | Default for tooltip transitioning selector.                                              | `"transitioning"`                   |
| `$tooltip-theme-mappings`              | A map of properties and color shades used to generate all tooltip variants.              | `()`                                |
| `$tooltip-theme-map`                   | A map of all properties, colors, and color shades used to generate all tooltip variants. | `()`                                |
| `$tooltip-toggle-initial-transform`    | Default for tooltip toggle initial transform.                                            | `none`                              |
| `$tooltip-toggle-final-transform`      | Default for tooltip toggle final transform.                                              | `none`                              |
| `$tooltip-toggle-disabled-transform`   | Default for tooltip toggle disabled transform.                                           | `$tooltip-toggle-initial-transform` |
| `$tooltip-display`                     | Default for tooltip display.                                                             | `inline`                            |
| `$tooltip-width`                       | Default for tooltip width.                                                               | `fit-content`                       |
| `$tooltip-description-width`           | Default for tooltip description width.                                                   | `30ch`                              |

## Generator options

The following options can be used to customize the tooltip component generator.

| Option | Default | Description |
| --- | --- | --- |
| `context` | `document` | Document or element whose descendants the generator searches. |
| `selector` | `.tooltip` | CSS selector for tooltip elements. |
| `controllerSelector` | `.tooltip-toggle` | CSS selector for the tooltip trigger inside each component. |
| `descriptionSelector` | `.tooltip-description` | CSS selector for the description inside each tooltip. |
| `options` | `{}` | Settings passed to the constructor for each match. A JSON object in `data-graupl-tooltip-options` overrides matching settings for that element. Pass element references through JavaScript. |

## Constructor options

The following options can be used to customize the tooltip component during construction.

| Option | Default | Description |
| --- | --- | --- |
| `tooltipElement` | Required | Root element for the tooltip. The generator supplies this element. |
| `tooltipToggleElement` | Required | Tooltip trigger. The generator finds it using `controllerSelector`. |
| `tooltipDescriptionElement` | Required | Element containing the tooltip text. The generator finds it using `descriptionSelector`. |
| `expandClass` | `show` | Class names applied in the expanded state. |
| `collapseClass` | `hide` | Class names applied in the collapsed state. |
| `transitionClass` | `transitioning` | Class names applied during a transition. |
| `transitionDuration` | `150` | Default expand and collapse duration in milliseconds. |
| `expandDuration` | `-1` | Expand duration in milliseconds. `-1` uses `transitionDuration`. |
| `collapseDuration` | `-1` | Collapse duration in milliseconds. `-1` uses `transitionDuration`. |
| `expandOnFocus` | `true` | Expand when a user tabs to the trigger or when you call the component's `focus()` method. |
| `collapseOnBlur` | `true` | Collapse when keyboard focus moves outside, when a user clicks outside while the component has focus, or when you call its `blur()` method. |
| `hoverType` | `on` | Use `off` to disable mouse hover. Both `on` and `dynamic` enable it. With `off` or `dynamic`, the document-level Escape handler requires the tooltip's focus state to be `self`. |
| `hoverDelay` | `250` | Default delay for mouse entry and exit in milliseconds. |
| `enterDelay` | `-1` | Delay before expanding on mouse entry in milliseconds. `-1` uses `hoverDelay`. |
| `leaveDelay` | `-1` | Delay before collapsing on mouse exit in milliseconds. `-1` uses `hoverDelay`. |
| `prefix` | `graupl-` | Prefix for generated CSS custom properties and attributes. |
| `key` | `null` | Key used to generate IDs. A `null` or empty key produces a random key. |
| `initializeClass` | `initializing` | Class names applied during initialization. Class options accept a string, an array of class names, or `null` for no class. |
| `initialize` | `false` | Initialize the instance when it is constructed. The generator defaults this to `true`. |
