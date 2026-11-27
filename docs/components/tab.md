<script setup>
  import { computed, onBeforeUnmount, ref, useTemplateRef } from "vue";
  import Tabs from "@graupl/core/src/tabs/Tabs.js";
  import exampleCopy from "../vue-components/exampleCopy.js";
  import LiveExample from "../vue-components/LiveExample.vue";

  const preview = useTemplateRef("preview");
  const optionsPreview = useTemplateRef("options-preview");
  const instances = new Map();

  const exampleTabs = computed(() => `
<div class="tabs">
  <div class="tab-list" aria-label="${exampleCopy.html("carousel.title")}">
    <button type="button" class="tab-toggle" aria-selected="true">${exampleCopy.html("carousel.firstTitle")}</button>
    <button type="button" class="tab-toggle">${exampleCopy.html("carousel.secondTitle")}</button>
    <button type="button" class="tab-toggle">${exampleCopy.html("carousel.thirdTitle")}</button>
  </div>
  <div class="tab-content show" tabindex="0">
    <p>${exampleCopy.html("carousel.firstBody")}</p>
  </div>
  <div class="tab-content" tabindex="0">
    <p>${exampleCopy.html("carousel.secondBody")}</p>
  </div>
  <div class="tab-content" tabindex="0">
    <p>${exampleCopy.html("carousel.thirdBody")}</p>
  </div>
</div>
  `);

  const optionsControls = [
    {
      name: "automaticActivation",
      defaultValue: false,
      label: "Activate tabs on focus",
      help: "Press Right Arrow on the selected tab to move focus. With this enabled, the next tab opens as it receives focus. Disabled by default.",
    },
  ];

  const optionsAttribute = "data-graupl-tabs-options";
  const defaultOptions = Object.fromEntries(
    optionsControls.map(({ name, defaultValue }) => [name, defaultValue])
  );
  const optionValues = ref({ ...defaultOptions });
  const optionsError = ref("");

  const exampleWithOptions = computed(() =>
    exampleTabs.value
      .replace('class="tabs', `data-graupl-tabs-options='${JSON.stringify(optionValues.value)}' class="tabs`));

  function initializePreview(wrapper) {
    const element = wrapper?.querySelector(".example .tabs");
    const previous = instances.get(wrapper);

    // Form and status updates can run this hook without replacing the markup.
    if (previous?.dom.tabs === element) return;

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

    instances.set(wrapper, new Tabs({
      ...options,
      tabsElement: element,
      initialize: true,
    }));
  }

  onBeforeUnmount(() => instances.forEach((instance) => instance.dispose()));
</script>

# Tabs

The tabs component provides a set of classes to group related content into panels and show one panel at a time.

Tabs implement the spec found in the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

## Base classes

The `.tabs` class wraps the tab list and its panels. Use `.tab-list` for the list and give it an accessible name with `aria-label` or `aria-labelledby`. Add one `.tab-toggle` button for each `.tab-content` panel, keeping the buttons and panels in the same order. If a panel starts with text, add `tabindex="0"` so readers can reach it by pressing Tab.

<div ref="preview">
  <live-example :source-code="exampleTabs" @updated="initializePreview(preview)" />
</div>

## Initialization

Run the tabs generator after the markup is in the DOM.

```js
import generateTabs from "@graupl/core/tabs/generator";

generateTabs();
```

The generator sets the roles and ARIA attributes that link each button to its panel. To select a tab initially, set `aria-selected="true"` on its button and add `.show` to its panel so it is visible before initialization. If no tab is marked as selected, the first tab is selected during initialization.

## JavaScript customization

Use `data-graupl-tabs-options` to customize a set of tabs. The example below shows how `automaticActivation` changes their behavior.

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
          <legend>Tabs options</legend>
          <div v-for="control in optionsControls" :key="control.name" class="input-group left">
            <input
              :id="`tabs-option-${control.name}`"
              type="checkbox"
              :aria-describedby="`tabs-option-${control.name}-help`"
              v-model="optionValues[control.name]"
            >
            <label :for="`tabs-option-${control.name}`">{{ control.label }}</label>
            <small :id="`tabs-option-${control.name}-help`" class="help-text">{{ control.help }}</small>
          </div>
        </fieldset>
      </form>
    </template>
  </live-example>
  <div role="status">{{ optionsError }}</div>
</div>

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the tabs module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants. Add a variant class alongside `.tabs` to style the whole component or to an element inside it to style that part separately.

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/component/tabs.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/component/tabs.css">
```

```scss [Sass]
@use "pkg:@graupl/core/component/tabs.scss";
```

:::

### JavaScript

For a page that uses this component, include its generator script below. It finds and initializes matching markup when the page loads. If you already load the full `graupl.js` bundle, it runs the generator for you. To call the generator yourself, see [Initialization](#initialization).

::: code-group

```html [Local]
<script defer src="./dist/js/tabs.js"></script>
```

```html [CDN]
<script defer src="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/js/tabs.js"></script>
```

:::

## Custom Properties

The following custom properties can be used to customize the tabs component:

| Property Name                                          | Description                                                                                            | Default Value                                                                                                                                                                                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-tabs-padding-x`                              | The horizontal padding of the tabs component.                                                          | `var(--graupl-spacer-0)`                                                                                                                                                                                                          |
| `--graupl-tabs-padding-y`                              | The vertical padding of the tabs component.                                                            | `var(--graupl-spacer-0)`                                                                                                                                                                                                          |
| `--graupl-tabs-padding`                                | The padding of the tabs component (combines y and x padding).                                          | `var(--graupl-tabs-padding-y) var(--graupl-tabs-padding-x)`                                                                                                                                                                       |
| `--graupl-tabs-color`                                  | The text colour of the tabs component.                                                                 | `var(--graupl-color)`                                                                                                                                                                                                             |
| `--graupl-tabs-background`                             | The background colour of the tabs component.                                                           | `var(--graupl-background)`                                                                                                                                                                                                        |
| `--graupl-tabs-border-color`                           | The border colour of the tabs component.                                                               | `var(--graupl-tabs-color)`                                                                                                                                                                                                        |
| `--graupl-tabs-border-top-left-radius`                 | The top left border radius of the tabs component.                                                      | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                            |
| `--graupl-tabs-border-top-right-radius`                | The top right border radius of the tabs component.                                                     | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                           |
| `--graupl-tabs-border-bottom-right-radius`             | The bottom right border radius of the tabs component.                                                  | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                        |
| `--graupl-tabs-border-bottom-left-radius`              | The bottom left border radius of the tabs component.                                                   | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                         |
| `--graupl-tabs-border-radius`                          | The border radius of the tabs component (combines top-left, top-right, bottom-right, and bottom-left). | `var(--graupl-tabs-border-top-left-radius) var(--graupl-tabs-border-top-right-radius) var(--graupl-tabs-border-bottom-right-radius) var(--graupl-tabs-border-bottom-left-radius)`                                                 |
| `--graupl-tabs-border-top-width`                       | The top border width of the tabs component.                                                            | `0rem`                                                                                                                                                                                                                            |
| `--graupl-tabs-border-right-width`                     | The right border width of the tabs component.                                                          | `0rem`                                                                                                                                                                                                                            |
| `--graupl-tabs-border-bottom-width`                    | The bottom border width of the tabs component.                                                         | `0rem`                                                                                                                                                                                                                            |
| `--graupl-tabs-border-left-width`                      | The left border width of the tabs component.                                                           | `0rem`                                                                                                                                                                                                                            |
| `--graupl-tabs-border-width`                           | The border width of the tabs component (combines top, right, bottom, and left widths).                 | `var(--graupl-tabs-border-top-width) var(--graupl-tabs-border-right-width) var(--graupl-tabs-border-bottom-width) var(--graupl-tabs-border-left-width)`                                                                           |
| `--graupl-tabs-border-top-style`                       | The top border style of the tabs component.                                                            | `var(--graupl-border-top-style)`                                                                                                                                                                                                  |
| `--graupl-tabs-border-right-style`                     | The right border style of the tabs component.                                                          | `var(--graupl-border-right-style)`                                                                                                                                                                                                |
| `--graupl-tabs-border-bottom-style`                    | The bottom border style of the tabs component.                                                         | `var(--graupl-border-bottom-style)`                                                                                                                                                                                               |
| `--graupl-tabs-border-left-style`                      | The left border style of the tabs component.                                                           | `var(--graupl-border-left-style)`                                                                                                                                                                                                 |
| `--graupl-tabs-border-style`                           | The border style of the tabs component (combines top, right, bottom, and left styles).                 | `var(--graupl-tabs-border-top-style) var(--graupl-tabs-border-right-style) var(--graupl-tabs-border-bottom-style) var(--graupl-tabs-border-left-style)`                                                                           |
| `--graupl-tabs-tab-list-column-gap`                    | The column gap between tab toggles.                                                                    | `var(--graupl-spacer-0)`                                                                                                                                                                                                          |
| `--graupl-tabs-tab-list-row-gap`                       | The row gap between tab toggles.                                                                       | `var(--graupl-spacer-2)`                                                                                                                                                                                                          |
| `--graupl-tabs-tab-list-gap`                           | The gap between tab toggles (combines row and column gaps).                                            | `var(--graupl-tabs-tab-list-row-gap) var(--graupl-tabs-tab-list-column-gap)`                                                                                                                                                      |
| `--graupl-tabs-tab-list-background`                    | The background colour of the tab list component.                                                       | `var(--graupl-tabs-background)`                                                                                                                                                                                                   |
| `--graupl-tabs-tab-list-color`                         | The text colour of the tab list component.                                                             | `var(--graupl-tabs-color)`                                                                                                                                                                                                        |
| `--graupl-tabs-tab-list-border-color`                  | The border colour of the tab list component.                                                           | `var(--graupl-tabs-border-color)`                                                                                                                                                                                                 |
| `--graupl-tabs-tab-list-border-top-left-radius`        | The top left border radius of the tab list component.                                                  | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                            |
| `--graupl-tabs-tab-list-border-top-right-radius`       | The top right border radius of the tab list component.                                                 | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                           |
| `--graupl-tabs-tab-list-border-bottom-right-radius`    | The bottom right border radius of the tab list component.                                              | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-list-border-bottom-left-radius`     | The bottom left border radius of the tab list component.                                               | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                         |
| `--graupl-tabs-tab-list-border-radius`                 | The border radius of the tab list component.                                                           | `var(--graupl-tabs-tab-list-border-top-left-radius) var(--graupl-tabs-tab-list-border-top-right-radius) var(--graupl-tabs-tab-list-border-bottom-right-radius) var(--graupl-tabs-tab-list-border-bottom-left-radius)`             |
| `--graupl-tabs-tab-list-border-top-width`              | The top border width of the tab list component.                                                        | `0rem`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-list-border-right-width`            | The right border width of the tab list component.                                                      | `0rem`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-list-border-bottom-width`           | The bottom border width of the tab list component.                                                     | `0rem`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-list-border-left-width`             | The left border width of the tab list component.                                                       | `0rem`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-list-border-width`                  | The border width of the tab list component (combines top, right, bottom, and left widths).             | `var(--graupl-tabs-tab-list-border-top-width) var(--graupl-tabs-tab-list-border-right-width) var(--graupl-tabs-tab-list-border-bottom-width) var(--graupl-tabs-tab-list-border-left-width)`                                       |
| `--graupl-tabs-tab-list-border-top-style`              | The top border style of the tab list component.                                                        | `var(--graupl-border-top-style)`                                                                                                                                                                                                  |
| `--graupl-tabs-tab-list-border-right-style`            | The right border style of the tab list component.                                                      | `var(--graupl-border-right-style)`                                                                                                                                                                                                |
| `--graupl-tabs-tab-list-border-bottom-style`           | The bottom border style of the tab list component.                                                     | `var(--graupl-border-bottom-style)`                                                                                                                                                                                               |
| `--graupl-tabs-tab-list-border-left-style`             | The left border style of the tab list component.                                                       | `var(--graupl-border-left-style)`                                                                                                                                                                                                 |
| `--graupl-tabs-tab-list-border-style`                  | The border style of the tab list component (combines top, right, bottom, and left styles).             | `var(--graupl-tabs-tab-list-border-top-style) var(--graupl-tabs-tab-list-border-right-style) var(--graupl-tabs-tab-list-border-bottom-style) var(--graupl-tabs-tab-list-border-left-style)`                                       |
| `--graupl-tabs-tab-list-padding-x`                     | The horizontal padding of the tab list component.                                                      | `var(--graupl-spacer-0)`                                                                                                                                                                                                          |
| `--graupl-tabs-tab-list-padding-y`                     | The vertical padding of the tab list component.                                                        | `var(--graupl-spacer-0)`                                                                                                                                                                                                          |
| `--graupl-tabs-tab-list-padding`                       | The padding of the tab list component (combines y and x padding).                                      | `var(--graupl-tabs-tab-list-padding-y) var(--graupl-tabs-tab-list-padding-x)`                                                                                                                                                     |
| `--graupl-tabs-tab-list-margin`                        | The margin of the tab list component.                                                                  | `0 0 calc(-1 * max(var(--graupl-tabs-tab-list-border-bottom-width), var(--graupl-tabs-tab-toggle-border-bottom-width))) 0`                                                                                                        |
| `--graupl-tabs-tab-toggle-padding-x`                   | The horizontal padding of the tab toggle component.                                                    | `var(--graupl-spacer-5)`                                                                                                                                                                                                          |
| `--graupl-tabs-tab-toggle-padding-y`                   | The vertical padding of the tab toggle component.                                                      | `var(--graupl-spacer-3)`                                                                                                                                                                                                          |
| `--graupl-tabs-tab-toggle-padding`                     | The padding of the tab toggle component (combines y and x padding).                                    | `var(--graupl-tabs-tab-toggle-padding-y) var(--graupl-tabs-tab-toggle-padding-x)`                                                                                                                                                 |
| `--graupl-tabs-tab-toggle-border-top-left-radius`      | The top left border radius of the tab toggle component.                                                | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                            |
| `--graupl-tabs-tab-toggle-border-top-right-radius`     | The top right border radius of the tab toggle component.                                               | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                           |
| `--graupl-tabs-tab-toggle-border-bottom-right-radius`  | The bottom right border radius of the tab toggle component.                                            | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-toggle-border-bottom-left-radius`   | The bottom left border radius of the tab toggle component.                                             | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                         |
| `--graupl-tabs-tab-toggle-border-radius`               | The border radius of the tab toggle component.                                                         | `var(--graupl-tabs-tab-toggle-border-top-left-radius) var(--graupl-tabs-tab-toggle-border-top-right-radius) var(--graupl-tabs-tab-toggle-border-bottom-right-radius) var(--graupl-tabs-tab-toggle-border-bottom-left-radius)`     |
| `--graupl-tabs-tab-toggle-border-top-width`            | The top border width of the tab toggle component.                                                      | `var(--graupl-border-top-width)`                                                                                                                                                                                                  |
| `--graupl-tabs-tab-toggle-border-right-width`          | The right border width of the tab toggle component.                                                    | `var(--graupl-border-right-width)`                                                                                                                                                                                                |
| `--graupl-tabs-tab-toggle-border-bottom-width`         | The bottom border width of the tab toggle component.                                                   | `var(--graupl-border-bottom-width)`                                                                                                                                                                                               |
| `--graupl-tabs-tab-toggle-border-left-width`           | The left border width of the tab toggle component.                                                     | `var(--graupl-border-left-width)`                                                                                                                                                                                                 |
| `--graupl-tabs-tab-toggle-border-width`                | The border width of the tab toggle component (combines top, right, bottom, and left widths).           | `var(--graupl-tabs-tab-toggle-border-top-width) var(--graupl-tabs-tab-toggle-border-right-width) var(--graupl-tabs-tab-toggle-border-bottom-width) var(--graupl-tabs-tab-toggle-border-left-width)`                               |
| `--graupl-tabs-tab-toggle-border-top-style`            | The top border style of the tab toggle component.                                                      | `var(--graupl-border-top-style)`                                                                                                                                                                                                  |
| `--graupl-tabs-tab-toggle-border-right-style`          | The right border style of the tab toggle component.                                                    | `var(--graupl-border-right-style)`                                                                                                                                                                                                |
| `--graupl-tabs-tab-toggle-border-bottom-style`         | The bottom border style of the tab toggle component.                                                   | `var(--graupl-border-bottom-style)`                                                                                                                                                                                               |
| `--graupl-tabs-tab-toggle-border-left-style`           | The left border style of the tab toggle component.                                                     | `var(--graupl-border-left-style)`                                                                                                                                                                                                 |
| `--graupl-tabs-tab-toggle-border-style`                | The border style of the tab toggle component (combines top, right, bottom, and left styles).           | `var(--graupl-tabs-tab-toggle-border-top-style) var(--graupl-tabs-tab-toggle-border-right-style) var(--graupl-tabs-tab-toggle-border-bottom-style) var(--graupl-tabs-tab-toggle-border-left-style)`                               |
| `--graupl-tabs-tab-toggle-background`                  | The background colour of the tab toggle component.                                                     | `var(--graupl-tabs-tab-list-background)`                                                                                                                                                                                          |
| `--graupl-tabs-tab-toggle-visited-background`          | The background colour of a visited tab toggle component.                                               | `var(--graupl-tabs-tab-toggle-background)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-toggle-focus-background`            | The background colour of a focused tab toggle component.                                               | `var(--graupl-tabs-tab-toggle-background)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-toggle-hover-background`            | The background colour of a hovered tab toggle component.                                               | `var(--graupl-tabs-tab-list-color)`                                                                                                                                                                                               |
| `--graupl-tabs-tab-toggle-active-background`           | The background colour of an active tab toggle component.                                               | `var(--graupl-tabs-tab-toggle-hover-background)`                                                                                                                                                                                  |
| `--graupl-tabs-tab-toggle-selected-background`         | The background colour of a selected tab toggle component.                                              | `var(--graupl-tabs-tab-toggle-hover-background)`                                                                                                                                                                                  |
| `--graupl-tabs-tab-toggle-disabled-background`         | The background colour of a disabled tab toggle component.                                              | `var(--graupl-tabs-tab-list-background)`                                                                                                                                                                                          |
| `--graupl-tabs-tab-toggle-color`                       | The text colour of the tab toggle component.                                                           | `var(--graupl-tabs-tab-list-color)`                                                                                                                                                                                               |
| `--graupl-tabs-tab-toggle-visited-color`               | The text colour of a visited tab toggle component.                                                     | `var(--graupl-tabs-tab-toggle-color)`                                                                                                                                                                                             |
| `--graupl-tabs-tab-toggle-focus-color`                 | The text colour of a focused tab toggle component.                                                     | `var(--graupl-tabs-tab-toggle-color)`                                                                                                                                                                                             |
| `--graupl-tabs-tab-toggle-hover-color`                 | The text colour of a hovered tab toggle component.                                                     | `var(--graupl-tabs-tab-list-background)`                                                                                                                                                                                          |
| `--graupl-tabs-tab-toggle-active-color`                | The text colour of an active tab toggle component.                                                     | `var(--graupl-tabs-tab-toggle-hover-color)`                                                                                                                                                                                       |
| `--graupl-tabs-tab-toggle-selected-color`              | The text colour of a selected tab toggle component.                                                    | `var(--graupl-tabs-tab-toggle-hover-color)`                                                                                                                                                                                       |
| `--graupl-tabs-tab-toggle-disabled-color`              | The text colour of a disabled tab toggle component.                                                    | `var(--graupl-theme-active--primary--200)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-toggle-border-color`                | The border colour of the tab toggle component.                                                         | `var(--graupl-tabs-tab-list-border-color)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-toggle-visited-border-color`        | The border colour of a visited tab toggle component.                                                   | `var(--graupl-tabs-tab-toggle-border-color)`                                                                                                                                                                                      |
| `--graupl-tabs-tab-toggle-focus-border-color`          | The border colour of a focused tab toggle component.                                                   | `var(--graupl-tabs-tab-toggle-border-color)`                                                                                                                                                                                      |
| `--graupl-tabs-tab-toggle-hover-border-color`          | The border colour of a hovered tab toggle component.                                                   | `var(--graupl-tabs-tab-list-border-color)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-toggle-active-border-color`         | The border colour of an active tab toggle component.                                                   | `var(--graupl-tabs-tab-toggle-hover-border-color)`                                                                                                                                                                                |
| `--graupl-tabs-tab-toggle-selected-border-color`       | The border colour of a selected tab toggle component.                                                  | `var(--graupl-tabs-tab-toggle-hover-border-color)`                                                                                                                                                                                |
| `--graupl-tabs-tab-toggle-disabled-border-color`       | The border colour of a disabled tab toggle component.                                                  | `var(--graupl-theme-active--primary--200)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-toggle-transform`                   | The transform applied to the tab toggle component.                                                     | `none`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-toggle-visited-transform`           | The transform applied to a visited tab toggle component.                                               | `var(--graupl-tabs-tab-toggle-transform)`                                                                                                                                                                                         |
| `--graupl-tabs-tab-toggle-focus-transform`             | The transform applied to a focused tab toggle component.                                               | `var(--graupl-tabs-tab-toggle-transform)`                                                                                                                                                                                         |
| `--graupl-tabs-tab-toggle-hover-transform`             | The transform applied to a hovered tab toggle component.                                               | `var(--graupl-tabs-tab-toggle-transform)`                                                                                                                                                                                         |
| `--graupl-tabs-tab-toggle-active-transform`            | The transform applied to an active tab toggle component.                                               | `none`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-toggle-selected-transform`          | The transform applied to a selected tab toggle component.                                              | `none`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-toggle-disabled-transform`          | The transform applied to a disabled tab toggle component.                                              | `none`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-content-padding-x`                  | The horizontal padding of the tab content component.                                                   | `var(--graupl-spacer-3)`                                                                                                                                                                                                          |
| `--graupl-tabs-tab-content-padding-y`                  | The vertical padding of the tab content component.                                                     | `var(--graupl-spacer-3)`                                                                                                                                                                                                          |
| `--graupl-tabs-tab-content-padding`                    | The padding of the tab content component (combines y and x padding).                                   | `var(--graupl-tabs-tab-content-padding-y) var(--graupl-tabs-tab-content-padding-x)`                                                                                                                                               |
| `--graupl-tabs-tab-content-background`                 | The background colour of the tab content component.                                                    | `var(--graupl-tabs-background)`                                                                                                                                                                                                   |
| `--graupl-tabs-tab-content-color`                      | The text colour of the tab content component.                                                          | `var(--graupl-tabs-color)`                                                                                                                                                                                                        |
| `--graupl-tabs-tab-content-border-color`               | The border colour of the tab content component.                                                        | `var(--graupl-tabs-border-color)`                                                                                                                                                                                                 |
| `--graupl-tabs-tab-content-border-top-left-radius`     | The top left border radius of the tab content component.                                               | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                            |
| `--graupl-tabs-tab-content-border-top-right-radius`    | The top right border radius of the tab content component.                                              | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                           |
| `--graupl-tabs-tab-content-border-bottom-right-radius` | The bottom right border radius of the tab content component.                                           | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-content-border-bottom-left-radius`  | The bottom left border radius of the tab content component.                                            | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                         |
| `--graupl-tabs-tab-content-border-radius`              | The border radius of the tab content component.                                                        | `var(--graupl-tabs-tab-content-border-top-left-radius) var(--graupl-tabs-tab-content-border-top-right-radius) var(--graupl-tabs-tab-content-border-bottom-right-radius) var(--graupl-tabs-tab-content-border-bottom-left-radius)` |
| `--graupl-tabs-tab-content-border-top-width`           | The top border width of the tab content component.                                                     | `var(--graupl-border-top-width)`                                                                                                                                                                                                  |
| `--graupl-tabs-tab-content-border-right-width`         | The right border width of the tab content component.                                                   | `var(--graupl-border-right-width)`                                                                                                                                                                                                |
| `--graupl-tabs-tab-content-border-bottom-width`        | The bottom border width of the tab content component.                                                  | `var(--graupl-border-bottom-width)`                                                                                                                                                                                               |
| `--graupl-tabs-tab-content-border-left-width`          | The left border width of the tab content component.                                                    | `var(--graupl-border-left-width)`                                                                                                                                                                                                 |
| `--graupl-tabs-tab-content-border-width`               | The border width of the tab content component (combines top, right, bottom, and left widths).          | `var(--graupl-tabs-tab-content-border-top-width) var(--graupl-tabs-tab-content-border-right-width) var(--graupl-tabs-tab-content-border-bottom-width) var(--graupl-tabs-tab-content-border-left-width)`                           |
| `--graupl-tabs-tab-content-border-top-style`           | The top border style of the tab content component.                                                     | `var(--graupl-border-top-style)`                                                                                                                                                                                                  |
| `--graupl-tabs-tab-content-border-right-style`         | The right border style of the tab content component.                                                   | `var(--graupl-border-right-style)`                                                                                                                                                                                                |
| `--graupl-tabs-tab-content-border-bottom-style`        | The bottom border style of the tab content component.                                                  | `var(--graupl-border-bottom-style)`                                                                                                                                                                                               |
| `--graupl-tabs-tab-content-border-left-style`          | The left border style of the tab content component.                                                    | `var(--graupl-border-left-style)`                                                                                                                                                                                                 |
| `--graupl-tabs-tab-content-border-style`               | The border style of the tab content component (combines top, right, bottom, and left styles).          | `var(--graupl-tabs-tab-content-border-top-style) var(--graupl-tabs-tab-content-border-right-style) var(--graupl-tabs-tab-content-border-bottom-style) var(--graupl-tabs-tab-content-border-left-style)`                           |
| `--graupl-tabs-tab-content-show-display`               | The display value for tab content when shown.                                                          | `block`                                                                                                                                                                                                                           |
| `--graupl-tabs-tab-content-hide-display`               | The display value for tab content when hidden.                                                         | `none`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-content-transitioning-display`      | The display value for tab content while transitioning.                                                 | `block`                                                                                                                                                                                                                           |
| `--graupl-tabs-tab-content-display`                    | The display value for tab content.                                                                     | `none`                                                                                                                                                                                                                            |
| `--graupl-tabs-tab-content-show-opacity`               | The opacity value for tab content when shown.                                                          | `1`                                                                                                                                                                                                                               |
| `--graupl-tabs-tab-content-hide-opacity`               | The opacity value for tab content when hidden.                                                         | `0`                                                                                                                                                                                                                               |
| `--graupl-tabs-tab-content-transitioning-opacity`      | The opacity value for tab content while transitioning.                                                 | `0`                                                                                                                                                                                                                               |
| `--graupl-tabs-tab-content-opacity`                    | The opacity value for tab content.                                                                     | `var(--graupl-tabs-tab-content-hide-opacity)`                                                                                                                                                                                     |
| `--graupl-tabs-transition-duration`                    | The transition duration for tab content.                                                               | `var(--graupl-transition-duration-fast)                                    `                                                                                                                                                      |
| `--graupl-tabs-tab-content-transition-timing-function` | The transition timing function for tab content.                                                        | `var(--graupl-transition-timing-function)`                                                                                                                                                                                        |
| `--graupl-tabs-tab-content-transition`                 | The transition for tab content changes.                                                                | `opacity var(--graupl-tabs-transition-duration) var(--graupl-tabs-tab-content-transition-timing-function)`                                                                                                                        |
| `--graupl-tabs-tab-content-transition-reduced-motion`  | The transition for tab content changes when reduced motion is enabled.                                 | `opacity var(--graupl-tabs-transition-duration) var(--graupl-tabs-tab-content-transition-timing-function)`                                                                                                                        |

## Sass variables

The following Sass variables can be used to customize the generation of the tabs component.

| Variable                                        | Description                                                                           | Default Value                                            |
| ----------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `$selector-base`                                | The selector base for the component.                                                  | `"."`                                                    |
| `$modifier-selector-base`                       | The selector base for component modifiers.                                            | `"."`                                                    |
| `$generate-base-theme-map`                      | A flag to generate the base theme maps for tabs variants.                             | `true`                                                   |
| `$themeable`                                    | A flag that determines whether theme modifiers are generated.                         | `false`                                                  |
| `$tabs-selector-base`                           | The selector base for the tabs component.                                             | `"."`                                                    |
| `$tabs-selector`                                | The tabs component selector.                                                          | `"tabs"`                                                 |
| `$tabs-tab-list-selector-base`                  | The selector base for the tabs list component.                                        | `"."`                                                    |
| `$tabs-tab-list-selector`                       | The tab list component selector.                                                      | `"tab-list"`                                             |
| `$tabs-tab-toggle-selector-base`                | The selector base for the individual tab toggle component.                            | `"."`                                                    |
| `$tabs-tab-toggle-selector`                     | The individual tab toggle component selector.                                         | `"tab-toggle"`                                           |
| `$tabs-tab-content-selector-base`               | The selector base for the individual tab content component.                           | `"."`                                                    |
| `$tabs-tab-content-selector`                    | The individual tab content component selector.                                        | `"tab-content"`                                          |
| `$tabs-theme-selector-base`                     | The selector base for the tabs theme component modifiers.                             | `"."`                                                    |
| `$tabs-theme-selector-prefix`                   | The tabs theme component modifier selector prefix.                                    | `""`                                                     |
| `$tabs-tab-content-open-selector-base`          | The selector base applied to the open modifier.                                       | `"."`                                                    |
| `$tabs-tab-content-open-selector`               | The selector applied to the open modifier.                                            | `"show"`                                                 |
| `$tabs-tab-content-closed-selector-base`        | The selector base applied to the closed modifier.                                     | `"."`                                                    |
| `$tabs-tab-content-closed-selector`             | The selector applied to the closed modifier.                                          | `"hide"`                                                 |
| `$tabs-tab-content-transitioning-selector-base` | The selector base applied to the transitioning modifier.                              | `"."`                                                    |
| `$tabs-tab-content-transitioning-selector`      | The selector applied to the transitioning modifier.                                   | `"transitioning"`                                        |
| `$tabs-tab-content-show-display`                | The default display value for open tab contents.                                      | `block`                                                  |
| `$tabs-tab-content-hide-display`                | The default display value for closed tab contents.                                    | `none`                                                   |
| `$tabs-tab-content-transitioning-display`       | The default display value for transitioning tab contents.                             | `block`                                                  |
| `$tabs-tab-content-show-opacity`                | The default opacity value for open tab contents.                                      | `1`                                                      |
| `$tabs-tab-content-hide-opacity`                | The default opacity value for closed tab contents.                                    | `0`                                                      |
| `$tabs-tab-content-transitioning-opacity`       | The default opacity value for transitioning tab contents.                             | `0`                                                      |
| `$tabs-tab-toggle-initial-transform`            | The initial transform of the tab toggle component.                                    | `none`                                                   |
| `$tabs-tab-toggle-final-transform`              | The final transform of the tab toggle component.                                      | `none`                                                   |
| `$tabs-tab-toggle-disabled-transform`           | The disabled transform of the tab toggle component.                                   | `none`                                                   |
| `$tabs-theme-mappings`                          | A map of properties and color shades used generate all tabs variants.                 | `map.merge($-tabs-theme-mappings, $tabs-theme-mappings)` |
| `$tabs-theme-map`                               | A map of all properties, colors, and color shades used to generate all tabs variants. | `map.deep-merge($-tabs-theme-map, $tabs-theme-map)`      |

## Generator options

The following options can be used to customize the tabs component generator.

| Option | Default | Description |
| --- | --- | --- |
| `context` | `document` | Document or element whose descendants the generator searches. |
| `selector` | `.tabs` | CSS selector for tabs. |
| `options` | `{}` | Settings passed to the constructor for each match. A JSON object in `data-graupl-tabs-options` overrides matching settings for that element. Pass element references through JavaScript. |

## Constructor options

The following options can be used to customize the tabs component during construction.

| Option | Default | Description |
| --- | --- | --- |
| `tabsElement` | Required | Root element for the tabs. The generator supplies this element. |
| `tabListSelector` | `.tab-list` | CSS selector for the tab list. |
| `tabTogglesSelector` | `.tab-toggle` | CSS selector for tab toggles. |
| `tabContentsSelector` | `.tab-content` | CSS selector for tab panels. |
| `expandClass` | `show` | Class names applied when an individual tab panel is expanded. |
| `collapseClass` | `hide` | Class names applied when an individual tab panel is collapsed. |
| `transitionClass` | `null` | Class names applied while an individual tab panel is expanding or collapsing. |
| `transitionDuration` | `300` | Default expand and collapse duration in milliseconds. |
| `expandDuration` | `-1` | Expand duration in milliseconds. `-1` uses `transitionDuration`. |
| `collapseDuration` | `-1` | Collapse duration in milliseconds. `-1` uses `transitionDuration`. |
| `automaticActivation` | `false` | Activate a tab when its toggle receives focus. |
| `prefix` | `graupl-` | Prefix for generated CSS custom properties and attributes. |
| `key` | `null` | Key used to generate IDs. A `null` or empty key produces a random key. |
| `initializeClass` | `initializing` | Class names applied during initialization. Class options accept a string, an array of class names, or `null` for no class. |
| `initialize` | `false` | Initialize the instance when it is constructed. The generator defaults this to `true`. |
