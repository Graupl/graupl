<script setup>
  import { computed, onBeforeUnmount, ref, useTemplateRef } from "vue";
  import Disclosure from "@graupl/core/src/disclosure/Disclosure.js";
  import exampleCopy from "../vue-components/exampleCopy.js";
  import LiveExample from "../vue-components/LiveExample.vue";

  const preview = useTemplateRef("preview");
  const optionsPreview = useTemplateRef("options-preview");
  const instances = new Map();

  const exampleDisclosure = computed(() => `
<button type="button" class="disclosure-toggle"
  data-graupl-disclosure-target="example-disclosure"
  aria-controls="example-disclosure" aria-expanded="false">
  ${exampleCopy.html("disclosure.title")}
</button>
<div id="example-disclosure" class="disclosure hide">
  <div class="disclosure-content" inert>
    <p>${exampleCopy.html("disclosure.body")}</p>
  </div>
</div>
  `);

  const optionsControls = [
    {
      name: "expandOnFocus",
      defaultValue: false,
      label: "Expand on keyboard focus",
      help: "Open the panel when you tab to its toggle button. Disabled by default.",
    },
    {
      name: "collapseOnBlur",
      defaultValue: false,
      label: "Collapse when focus leaves",
      help: "Open the panel and press Tab. With this enabled, the panel closes as focus moves outside. Disabled by default.",
    },
  ];

  const optionsAttribute = "data-graupl-disclosure-options";
  const defaultOptions = Object.fromEntries(
    optionsControls.map(({ name, defaultValue }) => [name, defaultValue])
  );
  const optionValues = ref({ ...defaultOptions });
  const optionsError = ref("");

  const exampleWithOptions = computed(() =>
    exampleDisclosure.value
      .replace('class="disclosure hide"', `data-graupl-disclosure-options='${JSON.stringify(optionValues.value)}' class="disclosure hide"`)
      .replaceAll("example-disclosure", "options-disclosure"));

  function initializePreview(wrapper) {
    const element = wrapper?.querySelector(".example .disclosure");
    const previous = instances.get(wrapper);

    // Form and status updates can run this hook without replacing the markup.
    if (previous?.dom.disclosure === element) return;

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

    // The toggle sits outside the panel, so find it by its target ID within this preview.
    const controllerElement = Array.from(
      wrapper.querySelectorAll(".example [data-graupl-disclosure-target]")
    ).find((button) => button.dataset.grauplDisclosureTarget === element.id);
    if (!controllerElement) return;

    instances.set(wrapper, new Disclosure({
      ...options,
      disclosureElement: element,
      controllerElement,
      initialize: true,
    }));
  }

  onBeforeUnmount(() => instances.forEach((instance) => instance.dispose()));
</script>

# Disclosures

The disclosure component provides a set of classes to show and hide content with a button.

Disclosures implement the spec found in the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

## Base classes

Use `.disclosure` for the panel and `.disclosure-content` for the wrapper around its contents. Give the panel a unique `id` and use that ID as the `.disclosure-toggle` button's `data-graupl-disclosure-target`.

Once initialized, click the button or press Enter or Space while it has focus to expand or collapse the panel.

<div ref="preview">
  <live-example :source-code="exampleDisclosure" @updated="initializePreview(preview)" />
</div>

## Initialization

Run the disclosure generator after the markup is in the DOM.

```js
import generateDisclosures from "@graupl/core/disclosure/generator";

generateDisclosures();
```

During initialization, Disclosure sets the button's `aria-controls` to the panel's ID.

To start expanded, set `aria-expanded="true"` on the button and add `.show` to the panel. To start collapsed, set `aria-expanded="false"` and add `.hide`. Add `inert` to the collapsed panel's `.disclosure-content` so its contents stay out of the tab order before initialization. Disclosure updates the button state and removes `inert` when the panel opens.

<!-- TODO: Document how to animate Disclosure height in both directions while keeping the expanded panel sized to its contents and respecting reduced motion. -->

## JavaScript customization

Use `data-graupl-disclosure-options` to customize a disclosure. The example below shows how `expandOnFocus` and `collapseOnBlur` change its behavior.

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
          <legend>Disclosure options</legend>
          <div v-for="control in optionsControls" :key="control.name" class="input-group left">
            <input
              :id="`disclosure-option-${control.name}`"
              type="checkbox"
              :aria-describedby="`disclosure-option-${control.name}-help`"
              v-model="optionValues[control.name]"
            >
            <label :for="`disclosure-option-${control.name}`">{{ control.label }}</label>
            <small :id="`disclosure-option-${control.name}-help`" class="help-text">{{ control.help }}</small>
          </div>
        </fieldset>
      </form>
    </template>
  </live-example>
  <div role="status">{{ optionsError }}</div>
</div>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/component/disclosure.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/component/disclosure.css">
```

```scss [Sass]
@use "pkg:@graupl/core/component/disclosure.scss";
```

:::

### JavaScript

For a page that uses this component, include its generator script below. It finds and initializes matching markup when the page loads. If you already load the full `graupl.js` bundle, it runs the generator for you. To call the generator yourself, see [Initialization](#initialization).

::: code-group

```html [Local]
<script defer src="./dist/js/disclosure.js"></script>
```

```html [CDN]
<script defer src="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/js/disclosure.js"></script>
```

:::

## Custom Properties

The following custom properties can be used to customize the disclosure component:

| Property                                                 | Description                                                           | Default Value                                                                                                                                                                                                                             |
| -------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-disclosure-color`                              | Text color of the disclosure.                                         | `var(--graupl-color)`                                                                                                                                                                                                                     |
| `--graupl-disclosure-background`                         | Background of the disclosure.                                         | `var(--graupl-background)`                                                                                                                                                                                                                |
| `--graupl-disclosure-content-border-color`               | Border color of the disclosure content.                               | `var(--graupl-border-color)`                                                                                                                                                                                                              |
| `--graupl-disclosure-content-padding-x`                  | Horizontal padding of the disclosure content.                         | `var(--graupl-spacer-5)`                                                                                                                                                                                                                  |
| `--graupl-disclosure-content-padding-y`                  | Vertical padding of the disclosure content.                           | `var(--graupl-spacer-5)`                                                                                                                                                                                                                  |
| `--graupl-disclosure-content-padding`                    | Padding of the disclosure content.                                    | `var(--graupl-disclosure-content-padding-y) var(--graupl-disclosure-content-padding-x)`                                                                                                                                                   |
| `--graupl-disclosure-show-display`                       | Display of the expanded disclosure.                                   | `flex`                                                                                                                                                                                                                                    |
| `--graupl-disclosure-hide-display`                       | Display of the collapsed disclosure.                                  | `flex`                                                                                                                                                                                                                                    |
| `--graupl-disclosure-transitioning-display`              | Display of the transitioning disclosure.                              | `flex`                                                                                                                                                                                                                                    |
| `--graupl-disclosure-display`                            | Display of the disclosure.                                            | `flex`                                                                                                                                                                                                                                    |
| `--graupl-disclosure-show-block-size`                    | Block size of the expanded disclosure.                                | `auto`                                                                                                                                                                                                                                    |
| `--graupl-disclosure-hide-block-size`                    | Block size of the collapsed disclosure.                               | `0`                                                                                                                                                                                                                                       |
| `--graupl-disclosure-transitioning-block-size`           | Block size of the transitioning disclosure.                           | `0`                                                                                                                                                                                                                                       |
| `--graupl-disclosure-block-size`                         | Block size of the disclosure.                                         | `0`                                                                                                                                                                                                                                       |
| `--graupl-disclosure-show-opacity`                       | Opacity of the expanded disclosure.                                   | `1`                                                                                                                                                                                                                                       |
| `--graupl-disclosure-hide-opacity`                       | Opacity of the collapsed disclosure.                                  | `0`                                                                                                                                                                                                                                       |
| `--graupl-disclosure-transitioning-opacity`              | Opacity of the transitioning disclosure.                              | `0`                                                                                                                                                                                                                                       |
| `--graupl-disclosure-opacity`                            | Opacity of the disclosure.                                            | `var(--graupl-disclosure-hide-opacity)`                                                                                                                                                                                                   |
| `--graupl-disclosure-transition-duration`                | Transition duration of the disclosure.                                | `var(--graupl-transition-duration-fast)`                                                                                                                                                                                                  |
| `--graupl-disclosure-transition-timing-function`         | Transition timing function of the disclosure.                         | `var(--graupl-transition-timing-function)`                                                                                                                                                                                                |
| `--graupl-disclosure-transition`                         | Transition of the disclosure.                                         | `opacity var(--graupl-disclosure-transition-duration) var(--graupl-disclosure-transition-timing-function), block-size var(--graupl-disclosure-transition-duration) var(--graupl-disclosure-transition-timing-function)`                   |
| `--graupl-disclosure-transition-reduced-motion`          | Transition of the disclosure when reduced motion is requested.        | `opacity var(--graupl-disclosure-transition-duration) var(--graupl-disclosure-transition-timing-function)`                                                                                                                                |
| `--graupl-disclosure-content-border-top-width`           | Border top width of the disclosure content.                           | `var(--graupl-border-top-width)`                                                                                                                                                                                                          |
| `--graupl-disclosure-content-border-right-width`         | Border right width of the disclosure content.                         | `var(--graupl-border-right-width)`                                                                                                                                                                                                        |
| `--graupl-disclosure-content-border-bottom-width`        | Border bottom width of the disclosure content.                        | `var(--graupl-border-bottom-width)`                                                                                                                                                                                                       |
| `--graupl-disclosure-content-border-left-width`          | Border left width of the disclosure content.                          | `var(--graupl-border-left-width)`                                                                                                                                                                                                         |
| `--graupl-disclosure-content-border-width`               | Border width of the disclosure content.                               | `var(--graupl-disclosure-content-border-top-width) var(--graupl-disclosure-content-border-right-width) var(--graupl-disclosure-content-border-bottom-width) var(--graupl-disclosure-content-border-left-width)`                           |
| `--graupl-disclosure-content-border-top-style`           | Border top style of the disclosure content.                           | `var(--graupl-border-top-style)`                                                                                                                                                                                                          |
| `--graupl-disclosure-content-border-right-style`         | Border right style of the disclosure content.                         | `var(--graupl-border-right-style)`                                                                                                                                                                                                        |
| `--graupl-disclosure-content-border-bottom-style`        | Border bottom style of the disclosure content.                        | `var(--graupl-border-bottom-style)`                                                                                                                                                                                                       |
| `--graupl-disclosure-content-border-left-style`          | Border left style of the disclosure content.                          | `var(--graupl-border-left-style)`                                                                                                                                                                                                         |
| `--graupl-disclosure-content-border-style`               | Border style of the disclosure content.                               | `var(--graupl-disclosure-content-border-top-style) var(--graupl-disclosure-content-border-right-style) var(--graupl-disclosure-content-border-bottom-style) var(--graupl-disclosure-content-border-left-style)`                           |
| `--graupl-disclosure-content-border-top-left-radius`     | Border top left radius of the disclosure content.                     | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                                    |
| `--graupl-disclosure-content-border-top-right-radius`    | Border top right radius of the disclosure content.                    | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                                   |
| `--graupl-disclosure-content-border-bottom-right-radius` | Border bottom right radius of the disclosure content.                 | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                                |
| `--graupl-disclosure-content-border-bottom-left-radius`  | Border bottom left radius of the disclosure content.                  | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                                 |
| `--graupl-disclosure-content-border-radius`              | Border radius of the disclosure content.                              | `var(--graupl-disclosure-content-border-top-left-radius) var(--graupl-disclosure-content-border-top-right-radius) var(--graupl-disclosure-content-border-bottom-right-radius) var(--graupl-disclosure-content-border-bottom-left-radius)` |
| `--graupl-disclosure-toggle-transform`                   | Transform of the disclosure toggle.                                   | `rotate(0deg)`                                                                                                                                                                                                                            |
| `--graupl-disclosure-toggle-open-transform`              | Expanded indicator transform of the disclosure toggle.                | `rotate(-180deg)`                                                                                                                                                                                                                         |
| `--graupl-disclosure-toggle-content`                     | Indicator content of the disclosure toggle.                           | `'↓'`                                                                                                                                                                                                                                     |
| `--graupl-disclosure-toggle-transition`                  | Transition of the disclosure toggle.                                  | `transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)`                                                                                                                                               |
| `--graupl-disclosure-toggle-transition-reduced-motion`   | Transition of the disclosure toggle when reduced motion is requested. | `none`                                                                                                                                                                                                                                    |

## Sass variables

The following Sass variables can be used to customize the generation of the disclosure component:

| Variable                                  | Description                                            | Default Value          |
| ----------------------------------------- | ------------------------------------------------------ | ---------------------- |
| `$selector-base`                          | The selector base for the component.                   | `"."`                  |
| `$modifier-selector-base`                 | The selector base for component modifiers.             | `"."`                  |
| `$disclosure-selector-base`               | Selector base for the disclosure.                      | `"."`                  |
| `$disclosure-selector`                    | Selector for the disclosure.                           | `"disclosure"`         |
| `$disclosure-content-selector-base`       | Selector base for the disclosure content.              | `"."`                  |
| `$disclosure-content-selector`            | Selector for the disclosure content.                   | `"disclosure-content"` |
| `$disclosure-toggle-selector-base`        | Selector base for the disclosure toggle.               | `"."`                  |
| `$disclosure-toggle-selector`             | Selector for the disclosure toggle.                    | `"disclosure-toggle"`  |
| `$disclosure-open-selector-base`          | Selector base for the expanded disclosure.             | `"."`                  |
| `$disclosure-open-selector`               | Selector for the expanded disclosure.                  | `"show"`               |
| `$disclosure-closed-selector-base`        | Selector base for the collapsed disclosure.            | `"."`                  |
| `$disclosure-closed-selector`             | Selector for the collapsed disclosure.                 | `"hide"`               |
| `$disclosure-transitioning-selector-base` | Selector base for the transitioning disclosure.        | `"."`                  |
| `$disclosure-transitioning-selector`      | Selector for the transitioning disclosure.             | `"transitioning"`      |
| `$disclosure-show-display`                | Display of the expanded disclosure.                    | `flex`                 |
| `$disclosure-hide-display`                | Display of the collapsed disclosure.                   | `flex`                 |
| `$disclosure-transitioning-display`       | Display of the transitioning disclosure.               | `flex`                 |
| `$disclosure-show-block-size`             | Block size of the expanded disclosure.                 | `auto`                 |
| `$disclosure-hide-block-size`             | Block size of the collapsed disclosure.                | `0`                    |
| `$disclosure-transitioning-block-size`    | Block size of the transitioning disclosure.            | `0`                    |
| `$disclosure-show-opacity`                | Opacity of the expanded disclosure.                    | `1`                    |
| `$disclosure-hide-opacity`                | Opacity of the collapsed disclosure.                   | `0`                    |
| `$disclosure-transitioning-opacity`       | Opacity of the transitioning disclosure.               | `0`                    |
| `$disclosure-toggle-content`              | Indicator content of the disclosure toggle.            | `"'↓'"`                |
| `$disclosure-toggle-transform`            | Transform of the disclosure toggle.                    | `rotate(0deg)`         |
| `$disclosure-toggle-open-transform`       | Expanded indicator transform of the disclosure toggle. | `rotate(-180deg)`      |

## Generator options

The following options can be used to customize the disclosure component generator.

| Option | Default | Description |
| --- | --- | --- |
| `context` | `document` | Document or element whose descendants the generator searches. |
| `selector` | `.disclosure` | CSS selector for disclosure elements. |
| `options` | `{}` | Settings passed to the constructor for each match. A JSON object in `data-graupl-disclosure-options` overrides matching settings for that element. Pass element references through JavaScript. |

## Constructor options

The following options can be used to customize the disclosure component during construction.

| Option | Default | Description |
| --- | --- | --- |
| `disclosureElement` | Required | Root element for the disclosure. The generator supplies this element. |
| `controllerElement` | Required | Disclosure toggle button. The generator finds it in `context` by matching its `data-graupl-disclosure-target` to the disclosure's ID. |
| `disclosureContentSelector` | `.disclosure-content` | CSS selector for the disclosure content. |
| `lockClass` | `locked` | Class names applied when locked. |
| `unlockClass` | `unlocked` | Class names applied when unlocked. |
| `expandClass` | `show` | Class names applied in the expanded state. |
| `collapseClass` | `hide` | Class names applied in the collapsed state. |
| `transitionClass` | `transitioning` | Class names applied during a transition. |
| `transitionDuration` | `250` | Default expand and collapse duration in milliseconds. |
| `expandDuration` | `-1` | Expand duration in milliseconds. `-1` uses `transitionDuration`. |
| `collapseDuration` | `-1` | Collapse duration in milliseconds. `-1` uses `transitionDuration`. |
| `expandOnFocus` | `false` | Expand when a user tabs to the trigger or when you call the component's `focus()` method. |
| `collapseOnBlur` | `false` | Collapse when keyboard focus moves outside, when a user clicks outside while the component has focus, or when you call its `blur()` method. |
| `breakpoint` | `""` | CSS length used to create a media query that matches at or below this width. |
| `expandInsideBreakpoint` | `false` | Expand the component when the media query matches. |
| `expandOutsideBreakpoint` | `false` | Expand the component when the media query does not match. |
| `collapseInsideBreakpoint` | `false` | Collapse the component when the media query matches. |
| `collapseOutsideBreakpoint` | `false` | Collapse the component when the media query does not match. |
| `lockInsideBreakpoint` | `false` | Lock the component when the media query matches. |
| `lockOutsideBreakpoint` | `false` | Lock the component when the media query does not match. |
| `unlockInsideBreakpoint` | `false` | Unlock the component when the media query matches. |
| `unlockOutsideBreakpoint` | `false` | Unlock the component when the media query does not match. |
| `locked` | `false` | Start with the component locked in its current state. Responsive settings can change the lock. |
| `mediaQuery` | `""` | Explicit media query. An empty string falls back to `breakpoint`. Leave both empty to disable responsive updates. |
| `prefix` | `graupl-` | Prefix for generated CSS custom properties and attributes. |
| `key` | `null` | Key used to generate IDs. A `null` or empty key produces a random key. |
| `initializeClass` | `initializing` | Class names applied during initialization. Class options accept a string, an array of class names, or `null` for no class. |
| `initialize` | `false` | Initialize the instance when it is constructed. The generator defaults this to `true`. |
