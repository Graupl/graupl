<script setup>
  import { onBeforeUnmount, useTemplateRef } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import Disclosure from "../../packages/core/src/js/disclosure/Disclosure.js";

  const preview = useTemplateRef("disclosure-preview");
  let disclosure;

  const exampleDisclosure = `
<button type="button" class="disclosure-toggle"
  data-graupl-disclosure-target="griffin-field-notes"
  aria-controls="griffin-field-notes" aria-expanded="false">
  Griffin field notes
</button>
<div id="griffin-field-notes" class="disclosure hide">
  <div class="disclosure-content" inert>
    <p>Griffins nest on the upper ledges. Keep to the river trail during nesting season.</p>
  </div>
</div>
  `;

  function initializePreview() {
    const example = preview.value?.querySelector(".example");
    const disclosureElement = example?.querySelector(".disclosure");
    const controllerElement = example?.querySelector(".disclosure-toggle");

    if (disclosure?.dom.disclosure === disclosureElement &&
        disclosure?.dom.controller === controllerElement) return;

    disclosure?.dispose();
    disclosure = disclosureElement && controllerElement && new Disclosure({
      disclosureElement,
      controllerElement,
      initialize: true,
    });
  }

  onBeforeUnmount(() => disclosure?.dispose());
</script>

# Disclosures

The disclosure component provides a set of classes to show and hide content with a button.

## Base classes

Use `.disclosure` for the panel and `.disclosure-content` for the wrapper around its contents. Give the panel a unique `id` and use that ID as the `.disclosure-toggle` button's `data-graupl-disclosure-target`.

Once initialized, click the button or press Enter or Space while it has focus to expand or collapse the panel.

<div ref="disclosure-preview">
  <live-example :source-code="exampleDisclosure" @mounted="initializePreview" @updated="initializePreview" />
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
