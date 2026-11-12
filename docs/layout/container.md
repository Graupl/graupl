---
highlightContainerAreas: true
---

<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const exampleSections = `
<div class="container" style="--graupl-container-content-max-width: 55%; --graupl-container-breakout-width: 12%; --graupl-container-feature-width: 16%">
  <div class="full-width text-primary-900">Full width</div>
  <div class="full-width bg-secondary-300 text-tertiary-900 contain py-2">
    <div class="feature text-primary-900">Feature</div>
    <div class="feature contain bg-tertiary-300 text-tertiary-900 py-2">
      <div class="breakout text-primary-900">Breakout</div>
      <div class="breakout contain bg-primary-300 text-primary-900 py-2">
        <div>Content</div>
        <div class="bg-primary-100 text-primary-900 p-5"></div>
      </div>
    </div>
  </div>
</div>
  `;

  const highlightAreas = ref(false);
  const sidebars = ref("sidebars");
  const contained = ref(false);
  const exampleSidebars = computed(() => {
    const both = sidebars.value === "sidebars";
    const left = both || sidebars.value === "sidebars-left";
    const right = both || sidebars.value === "sidebars-right";
    const sections = [
      left ? `  <div class="${both ? "sidebar-left" : "sidebar"}">\n    <div class="bg-secondary-200 text-secondary-900 p-3">Left</div>\n  </div>` : "",
      '  <div class="content">\n    <div class="bg-primary-700 text-primary-100 p-3">Content</div>\n  </div>',
      right ? `  <div class="${both ? "sidebar-right" : "sidebar"}">\n    <div class="bg-secondary-200 text-secondary-900 p-3">Right</div>\n  </div>` : "",
    ].filter(Boolean).join("\n");

    return `<div class="container ${sidebars.value}${contained.value ? " contain" : ""}" style="--graupl-container-content-max-width: 75%; --graupl-container-sidebar-width: 14%">
${sections}
</div>`;
  });
</script>

# Container

The container component is a grid container that provides a layout for the main content of a page. It keeps content aligned and lets individual sections extend beyond the main content area.

## Base class

Add `.container` to a page wrapper. Its direct children sit in the content area by default. A `.container` nested directly inside another spans the parent grid and shares its columns.

## Section widths

Add a class to a section to control how far it extends across the container.

| Class         | Description                       |
| ------------- | --------------------------------- |
| `.breakout`   | Extends beyond the content area.  |
| `.feature`    | Extends beyond the breakout area. |
| `.full-width` | Spans the entire container.       |

Add `.contain` to a wide section to keep its inner content aligned with the main content area.

::: info Note
The container normally uses `--graupl-content-max-width` for the content area and fixed lengths for the breakout, feature, and sidebar widths. These previews override `--graupl-container-content-max-width` and the relevant section widths with percentages so the layout scales to the space available in the preview.
:::

<live-example :source-code="exampleSections" />

### View the live container

This page uses Graupl's container for its own layout. To see it in action, click the button below. It highlights the page's actual container areas without the percentage-based width overrides used in the previews.

<div class="container-page-example">
  <p id="container-highlight-note">The available width changes when you resize the window or lock the sidebar open. If there isn't enough room for a wider section, its edges can line up with the content area.</p>
  <button type="button" class="button my-5" aria-describedby="container-highlight-note" :aria-pressed="highlightAreas" @click="highlightAreas = !highlightAreas">
    Highlight container areas
  </button>
  <ul class="display-flex flex-wrap g-3 list-style-none m-0 p-0">
    <li><span class="container-area-key area-full-width">Full width</span></li>
    <li><span class="container-area-key area-feature">Feature</span></li>
    <li><span class="container-area-key area-breakout">Breakout</span></li>
    <li><span class="container-area-key area-content">Content</span></li>
  </ul>
</div>

## Sidebars

Add `.sidebars-left` or `.sidebars-right` to the container for one sidebar, and give the sidebar itself the `.sidebar` class. For two sidebars, use `.sidebars` on the container and `.sidebar-left` and `.sidebar-right` on the respective children. Mark the main section with `.content`.

Sidebars sit beside the content from the large screen breakpoint and stack with it on smaller screens. Add `.contain` alongside the sidebar modifier to keep the sidebars within the content area.

<live-example :source-code="exampleSidebars" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-container-sidebars">Sidebars</label>
      <select id="select-container-sidebars" v-model="sidebars">
        <option value="sidebars">Both</option>
        <option value="sidebars-left">Left</option>
        <option value="sidebars-right">Right</option>
      </select>
    </div>
    <label><input type="checkbox" v-model="contained"> Contain sidebars</label>
  </template>
</live-example>

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the container module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants.

## Custom Properties

The following custom properties can be used to customize the container component:

| Property                                                                | Description                                                                                   | Default Value                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-container-sidebar-width`                                      | The width of the sidebar sections.                                                            | `26ch`                                                                                                                                                                                                                                                                                                                                                               |
| `--graupl-container-breakout-width`                                     | The width that the breakout section will extend beyond the content.                           | `4ch`                                                                                                                                                                                                                                                                                                                                                                |
| `--graupl-container-feature-width`                                      | The width that the feature section will extend beyond the breakout.                           | `10ch`                                                                                                                                                                                                                                                                                                                                                               |
| `--graupl-container-content-max-width`                                  | The maximum width of the content section.                                                     | `var(--graupl-content-max-width)`                                                                                                                                                                                                                                                                                                                                    |
| `--graupl-container-breakout-max-width`                                 | The maximum width of the breakout section.                                                    | `calc(var(--graupl-container-content-max-width) + var(--graupl-container-breakout-width))`                                                                                                                                                                                                                                                                           |
| `--graupl-container-feature-max-width`                                  | The maximum width of the feature section.                                                     | `calc(var(--graupl-container-breakout-max-width) + var(--graupl-container-feature-width))`                                                                                                                                                                                                                                                                           |
| `--graupl-container-full-width-section-min-width`                       | The minimum width of one side of the full-width section.                                      | `var(--graupl-spacer-5)`                                                                                                                                                                                                                                                                                                                                             |
| `--graupl-container-full-width-section-max-width`                       | The maximum width of one side of the full-width section.                                      | `1fr`                                                                                                                                                                                                                                                                                                                                                                |
| `--graupl-container-feature-section-min-width`                          | The minimum width of one side of the feature section.                                         | `0rem`                                                                                                                                                                                                                                                                                                                                                               |
| `--graupl-container-feature-section-max-width`                          | The maximum width of one side of the feature section.                                         | `calc((var(--graupl-container-feature-max-width) - var(--graupl-container-breakout-max-width)) / 2)`                                                                                                                                                                                                                                                                 |
| `--graupl-container-breakout-section-min-width`                         | The minimum width of one side of the breakout section.                                        | `0rem`                                                                                                                                                                                                                                                                                                                                                               |
| `--graupl-container-breakout-section-max-width`                         | The maximum width of one side of the breakout section.                                        | `calc((var(--graupl-container-breakout-max-width) - var(--graupl-container-content-max-width)) / 2)`                                                                                                                                                                                                                                                                 |
| `--graupl-container-content-section-min-width`                          | The minimum width of the content section.                                                     | `calc(100% - (var(--graupl-container-full-width-section-min-width) * 2) - (var(--graupl-container-feature-section-min-width) * 2) - (var(--graupl-container-breakout-section-min-width) * 2))`                                                                                                                                                                       |
| `--graupl-container-content-section-max-width`                          | The maximum width of the content section.                                                     | `var(--graupl-container-content-max-width)`                                                                                                                                                                                                                                                                                                                          |
| `--graupl-container-full-width-section-width`                           | The calculated minmax width of the full-width section.                                        | `minmax(var(--graupl-container-full-width-section-min-width), var(--graupl-container-full-width-section-max-width))`                                                                                                                                                                                                                                                 |
| `--graupl-container-feature-section-width`                              | The calculated minmax width of the feature section.                                           | `minmax(var(--graupl-container-feature-section-min-width), var(--graupl-container-feature-section-max-width))`                                                                                                                                                                                                                                                       |
| `--graupl-container-breakout-section-width`                             | The calculated minmax width of the breakout section.                                          | `minmax(var(--graupl-container-breakout-section-min-width), var(--graupl-container-breakout-section-max-width))`                                                                                                                                                                                                                                                     |
| `--graupl-container-content-section-width`                              | The calculated width of the content section.                                                  | `min(var(--graupl-container-content-section-min-width), var(--graupl-container-content-section-max-width))`                                                                                                                                                                                                                                                          |
| `--graupl-container-sidebar-left-section-width`                         | The width of the left sidebar section.                                                        | `max(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width))`                                                                                                                                                                                                                                                                      |
| `--graupl-container-sidebar-right-section-width`                        | The width of the right sidebar section.                                                       | `max(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width))`                                                                                                                                                                                                                                                                      |
| `--graupl-container-sidebars-breakout-section-width`                    | The breakout width between the content and sidebar areas.                                     | `var(--graupl-container-breakout-section-max-width)`                                                                                                                                                                                                                                                                                                                 |
| `--graupl-container-sidebars-content-section-min-width`                 | The minimum width of the content section when both sidebars are enabled.                      | `calc(100% - (var(--graupl-container-full-width-section-min-width) * 2) - (var(--graupl-container-feature-section-min-width) * 2) - (var(--graupl-container-sidebars-breakout-section-width) * 2) - var(--graupl-container-sidebar-left-section-width) - var(--graupl-container-sidebar-right-section-width))`                                                       |
| `--graupl-container-sidebars-content-section-max-width`                 | The maximum width of the content section when both sidebars are enabled.                      | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-sidebar-left-section-width) - var(--graupl-container-sidebar-right-section-width) + min(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width)) + min(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width)))` |
| `--graupl-container-sidebars-content-section-width`                     | The calculated width of the content section when both sidebars are enabled.                   | `min(var(--graupl-container-sidebars-content-section-min-width), var(--graupl-container-sidebars-content-section-max-width))`                                                                                                                                                                                                                                        |
| `--graupl-container-sidebars-right-content-section-min-width`           | The minimum width of the content section when only the right sidebar is enabled.              | `calc(100% - (var(--graupl-container-full-width-section-min-width) * 2) - (var(--graupl-container-feature-section-min-width) * 2) - var(--graupl-container-breakout-section-min-width) - var(--graupl-container-sidebars-breakout-section-width) - var(--graupl-container-sidebar-right-section-width))`                                                             |
| `--graupl-container-sidebars-right-content-section-max-width`           | The maximum width of the content section when only the right sidebar is enabled.              | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-sidebar-right-section-width) + min(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width)))`                                                                                                                                                      |
| `--graupl-container-sidebars-right-content-section-width`               | The calculated width of the content section when only the right sidebar is enabled.           | `min(var(--graupl-container-sidebars-right-content-section-min-width), var(--graupl-container-sidebars-right-content-section-max-width))`                                                                                                                                                                                                                            |
| `--graupl-container-sidebars-left-content-section-min-width`            | The minimum width of the content section when only the left sidebar is enabled.               | `calc(100% - (var(--graupl-container-full-width-section-min-width) * 2) - (var(--graupl-container-feature-section-min-width) * 2) - var(--graupl-container-breakout-section-min-width) - var(--graupl-container-sidebars-breakout-section-width) - var(--graupl-container-sidebar-left-section-width))`                                                              |
| `--graupl-container-sidebars-left-content-section-max-width`            | The maximum width of the content section when only the left sidebar is enabled.               | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-sidebar-left-section-width) + min(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width)))`                                                                                                                                                       |
| `--graupl-container-sidebars-left-content-section-width`                | The calculated width of the content section when only the left sidebar is enabled.            | `min(var(--graupl-container-sidebars-left-content-section-min-width), var(--graupl-container-sidebars-left-content-section-max-width))`                                                                                                                                                                                                                              |
| `--graupl-container-contained-sidebar-left-section-width`               | The width of the left contained sidebar section.                                              | `var(--graupl-container-sidebar-left-section-width)`                                                                                                                                                                                                                                                                                                                 |
| `--graupl-container-contained-sidebar-right-section-width`              | The width of the right contained sidebar section.                                             | `var(--graupl-container-sidebar-right-section-width)`                                                                                                                                                                                                                                                                                                                |
| `--graupl-container-sidebars-contained-spacer-section-width`            | The spacer width between the content and sidebar areas.                                       | `var(--graupl-container-sidebars-breakout-section-width)`                                                                                                                                                                                                                                                                                                            |
| `--graupl-container-sidebars-contained-content-section-max-width`       | The maximum width of the content section when both contained sidebars are enabled.            | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-contained-sidebar-left-section-width) - var(--graupl-container-contained-sidebar-right-section-width) - var(--graupl-container-sidebars-contained-spacer-section-width) * 2)`                                                                                                       |
| `--graupl-container-sidebars-contained-content-section-width`           | The calculated width of the content section when both contained sidebars are enabled.         | `min(var(--graupl-container-sidebars-content-section-min-width), var(--graupl-container-sidebars-contained-content-section-max-width))`                                                                                                                                                                                                                              |
| `--graupl-container-sidebars-contained-right-content-section-max-width` | The maximum width of the content section when only the contained right sidebar is enabled.    | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-contained-sidebar-right-section-width) - var(--graupl-container-sidebars-contained-spacer-section-width))`                                                                                                                                                                          |
| `--graupl-container-sidebars-contained-right-content-section-width`     | The calculated width of the content section when only the contained right sidebar is enabled. | `min(var(--graupl-container-sidebars-right-content-section-min-width), var(--graupl-container-sidebars-contained-right-content-section-max-width))`                                                                                                                                                                                                                  |
| `--graupl-container-sidebars-contained-left-content-section-max-width`  | The maximum width of the content section when only the contained left sidebar is enabled.     | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-contained-sidebar-left-section-width) - var(--graupl-container-sidebars-contained-spacer-section-width))`                                                                                                                                                                           |
| `--graupl-container-sidebars-contained-left-content-section-width`      | The calculated width of the content section when only the contained left sidebar is enabled.  | `min(var(--graupl-container-sidebars-left-content-section-min-width), var(--graupl-container-sidebars-contained-left-content-section-max-width))`                                                                                                                                                                                                                    |
| `--graupl-container-background`                                         | The background of the container component.                                                    | No default                                                                                                                                                                                                                                                                                                                                                           |
| `--graupl-container-color`                                              | The text color of the container component.                                                    | No default                                                                                                                                                                                                                                                                                                                                                           |

## Sass variables

The following Sass variables can be used to customize the generation of the container component:

| Variable                               | Description                                                                                | Default Value  |
| -------------------------------------- | ------------------------------------------------------------------------------------------ | -------------- |
| `$selector-base`                       | The selector base for the component.                                                       | `"."`          |
| `$modifier-selector-base`              | The selector base for component modifiers.                                                 | `"."`          |
| `$generate-base-theme-map`             | Flag to generate the base theme map.                                                       | `true`         |
| `$themeable`                           | Flag to generate theme modifiers.                                                          | `false`        |
| `$force-container-chaining`            | A flag to force container chaining in all containers.                                      | `false`        |
| `$generate-forced-container-selectors` | A flag to generate a set of default selectors for forced container chaining.               | `true`         |
| `$show-warnings`                       | A flag to show any built-in warnings that may be output during compiling.                  | `true`         |
| `$container-selector-base`             | The base selector for the container component.                                             | `"."`          |
| `$container-selector`                  | The selector for the container component.                                                  | `"container"`  |
| `$container-theme-selector-base`       | The selector base for container theme modifiers.                                           | `"."`          |
| `$container-theme-selector-prefix`     | The container theme modifier selector prefix.                                              | `""`           |
| `$container-breakout-selector-base`    | The base selector for the breakout container component.                                    | `"."`          |
| `$container-breakout-selector`         | The selector for the breakout container component.                                         | `"breakout"`   |
| `$container-feature-selector-base`     | The base selector for the feature container component.                                     | `"."`          |
| `$container-feature-selector`          | The selector for the feature container component.                                          | `"feature"`    |
| `$container-full-width-selector-base`  | The base selector for the full-width container component.                                  | `"."`          |
| `$container-full-width-selector`       | The selector for the full-width container component.                                       | `"full-width"` |
| `$container-contain-selector-base`     | The base selector for the contain utility class.                                           | `"."`          |
| `$container-contain-selector`          | The selector for the contain utility class.                                                | `"contain"`    |
| `$container-sidebars-selector-base`    | The base selector for the sidebars utility class.                                          | `"."`          |
| `$container-sidebars-selector`         | The selector for the sidebars utility class.                                               | `"sidebars"`   |
| `$container-content-selector-base`     | The base selector for the content container component.                                     | `"."`          |
| `$container-content-selector`          | The selector for the content container component.                                          | `"content"`    |
| `$container-sidebar-selector-base`     | The base selector for the sidebar container component.                                     | `"."`          |
| `$container-sidebar-selector`          | The selector for the sidebar container component.                                          | `"sidebar"`    |
| `$container-left-selector-suffix`      | The suffix for the left sidebar selector.                                                  | `"-left"`      |
| `$container-right-selector-suffix`     | The suffix for the right sidebar selector.                                                 | `"-right"`     |
| `$container-breakout-width`            | The width of the breakout section will extend from the content section.                    | `4ch`          |
| `$container-feature-width`             | The width of the feature section will extend from the breakout section.                    | `10ch`         |
| `$container-sidebar-width`             | The width of the sidebar sections.                                                         | `26ch`         |
| `$forced-container-selectors`          | Additional selectors included in forced container chaining.                                | `()`           |
| `$container-theme-mappings`            | A map of properties and color shades used to generate all container variants.              | `()`           |
| `$container-theme-map`                 | A map of all properties, colors, and color shades used to generate all container variants. | `()`           |
