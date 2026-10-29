<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import generate from "../../packages/core/src/js/tabs/generator.js";

  const exampleTabs = computed(() => {
    return `
<div class="tabs">
  <div class="tab-list">
    <button class="tab-toggle">Tab 1 with text</button>
    <button class="tab-toggle">Tab 2 with more text</button>
    <button class="tab-toggle">
      Tab 3 this is the longest title of them all!
    </button>
    <button class="tab-toggle">
      Tab 4 and this has a longer title
    </button>
    <button class="tab-toggle">Tab 5 this has some text too</button>
  </div>
  <div class="tab-content">
    <p>This is the content of the first tab.</p>
    <p>This is the content of the first tab.</p>
    <p>This is the content of the first tab.</p>
  </div>
  <div class="tab-content">
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
    <p>This is the content of the second tab.</p>
  </div>
  <div class="tab-content">
    <p>This is the content of the third tab.</p>
    <p>This is the content of the third tab.</p>
    <p>This is the content of the third tab.</p>
    <p>This is the content of the third tab.</p>
    <p>This is the content of the third tab.</p>
    <p>This is the content of the third tab.</p>
    <p>This is the content of the third tab.</p>
    <p>This is the content of the third tab.</p>
  </div>
  <div class="tab-content">
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
    <p>This is the content of the fourth tab.</p>
  </div>
  <div class="tab-content">
    <p>This is the content of the fifth tab.</p>
    <p>This is the content of the fifth tab.</p>
    <p>This is the content of the fifth tab.</p>
    <p>This is the content of the fifth tab.</p>
    <p>This is the content of the fifth tab.</p>
    <p>This is the content of the fifth tab.</p>
  </div>
</div>
    `
  });
</script>

# Tabs

<live-example :source-code="exampleTabs" @mounted="generate()" @updated="generate()">
</live-example>

<br/>

The tab component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.tabs` | The tabs component. |
| `.tab-list` | The list of tabs in the tabs component. |
| `.tab-toggle` | The individual tab toggle component. |
| `.tab-content` | The individual tab content component. |
| `.primary` | A component modifier to use the primary colour for the tabs component. |
| `.secondary` | A component modifier to use the secondary colour for the tabs component. |
| `.tertiary` | A component modifier to use the tertiary colour for the tabs component. |

## .tabs properties

These are the default values for the `.tabs` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-tabs-padding-x` | The horizontal padding of the tabs component. | `var(--graupl-spacer-0)` |
| `--graupl-tabs-padding-y` | The vertical padding of the tabs component. | `var(--graupl-spacer-0)` |
| `--graupl-tabs-padding` | The padding of the tabs component (combines y and x padding). | `var(--graupl-tabs-padding-y) var(--graupl-tabs-padding-x)` |
| `--graupl-tabs-color` | The text colour of the tabs component. | `var(--graupl-color)` |
| `--graupl-tabs-background` | The background colour of the tabs component. | `var(--graupl-background)` |
| `--graupl-tabs-border-color` | The border colour of the tabs component. | `var(--graupl-tabs-color)` |
| `--graupl-tabs-border-top-left-radius` | The top left border radius of the tabs component. | `var(--graupl-border-top-left-radius)` |
| `--graupl-tabs-border-top-right-radius` | The top right border radius of the tabs component. | `var(--graupl-border-top-right-radius)` |
| `--graupl-tabs-border-bottom-right-radius` | The bottom right border radius of the tabs component. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-tabs-border-bottom-left-radius` | The bottom left border radius of the tabs component. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-tabs-border-radius` | The border radius of the tabs component (combines top-left, top-right, bottom-right, and bottom-left). | `var(--graupl-tabs-border-top-left-radius) var(--graupl-tabs-border-top-right-radius) var(--graupl-tabs-border-bottom-right-radius) var(--graupl-tabs-border-bottom-left-radius)` |
| `--graupl-tabs-border-top-width` | The top border width of the tabs component. | `0rem` |
| `--graupl-tabs-border-right-width` | The right border width of the tabs component. | `0rem` |
| `--graupl-tabs-border-bottom-width` | The bottom border width of the tabs component. | `0rem` |
| `--graupl-tabs-border-left-width` | The left border width of the tabs component. | `0rem` |
| `--graupl-tabs-border-width` | The border width of the tabs component (combines top, right, bottom, and left widths). | `var(--graupl-tabs-border-top-width) var(--graupl-tabs-border-right-width) var(--graupl-tabs-border-bottom-width) var(--graupl-tabs-border-left-width)` |
| `--graupl-tabs-border-top-style` | The top border style of the tabs component. | `var(--graupl-border-top-style)` |
| `--graupl-tabs-border-right-style` | The right border style of the tabs component. | `var(--graupl-border-right-style)` |
| `--graupl-tabs-border-bottom-style` | The bottom border style of the tabs component. | `var(--graupl-border-bottom-style)` |
| `--graupl-tabs-border-left-style` | The left border style of the tabs component. | `var(--graupl-border-left-style)` |
| `--graupl-tabs-border-style` | The border style of the tabs component (combines top, right, bottom, and left styles). | `var(--graupl-tabs-border-top-style) var(--graupl-tabs-border-right-style) var(--graupl-tabs-border-bottom-style) var(--graupl-tabs-border-left-style)` |

## .tabs-tab-list properties

These are the default values for the `.tabs-tab-list` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-tabs-tab-list-column-gap` | The column gap between tab toggles. | `var(--graupl-spacer-0)` |
| `--graupl-tabs-tab-list-row-gap` | The row gap between tab toggles. | `var(--graupl-spacer-2)` |
| `--graupl-tabs-tab-list-gap` | The gap between tab toggles (combines column and row gaps). | `var(--graupl-tabs-tab-list-column-gap) var(--graupl-tabs-tab-list-row-gap)` |
| `--graupl-tabs-tab-list-background` | The background colour of the tab list component. | `var(--graupl-tabs-background)` |
| `--graupl-tabs-tab-list-color` | The text colour of the tab list component. | `var(--graupl-tabs-color)` |
| `--graupl-tabs-tab-list-border-color` | The border colour of the tab list component. | `var(--graupl-tabs-border-color)` |
| `--graupl-tabs-tab-list-border-top-left-radius` | The top left border radius of the tab list component. | `var(--graupl-border-top-left-radius)` |
| `--graupl-tabs-tab-list-border-top-right-radius` | The top right border radius of the tab list component. | `var(--graupl-border-top-right-radius)` |
| `--graupl-tabs-tab-list-border-bottom-right-radius` | The bottom right border radius of the tab list component. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-tabs-tab-list-border-bottom-left-radius` | The bottom left border radius of the tab list component. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-tabs-tab-list-border-radius` | The border radius of the tab list component. | `var(--graupl-tabs-tab-list-border-top-left-radius) var(--graupl-tabs-tab-list-border-top-right-radius) var(--graupl-tabs-tab-list-border-bottom-right-radius) var(--graupl-tabs-tab-list-border-bottom-left-radius)` |
| `--graupl-tabs-tab-list-border-top-width` | The top border width of the tab list component. | `0rem` |
| `--graupl-tabs-tab-list-border-right-width` | The right border width of the tab list component. | `0rem` |
| `--graupl-tabs-tab-list-border-bottom-width` | The bottom border width of the tab list component. | `0rem` |
| `--graupl-tabs-tab-list-border-left-width` | The left border width of the tab list component. | `0rem` |
| `--graupl-tabs-tab-list-border-width` | The border width of the tab list component (combines top, right, bottom, and left widths). | `var(--graupl-tabs-tab-list-border-top-width) var(--graupl-tabs-tab-list-border-right-width) var(--graupl-tabs-tab-list-border-bottom-width) var(--graupl-tabs-tab-list-border-left-width)` |
| `--graupl-tabs-tab-list-border-top-style` | The top border style of the tab list component. | `var(--graupl-border-top-style)` |
| `--graupl-tabs-tab-list-border-right-style` | The right border style of the tab list component. | `var(--graupl-border-right-style)` |
| `--graupl-tabs-tab-list-border-bottom-style` | The bottom border style of the tab list component. | `var(--graupl-border-bottom-style)` |
| `--graupl-tabs-tab-list-border-left-style` | The left border style of the tab list component. | `var(--graupl-border-left-style)` |
| `--graupl-tabs-tab-list-border-style` | The border style of the tab list component (combines top, right, bottom, and left styles). | `var(--graupl-tabs-tab-list-border-top-style) var(--graupl-tabs-tab-list-border-right-style) var(--graupl-tabs-tab-list-border-bottom-style) var(--graupl-tabs-tab-list-border-left-style)` |
| `--graupl-tabs-tab-list-padding-x` | The horizontal padding of the tab list component. | `var(--graupl-spacer-0)` |
| `--graupl-tabs-tab-list-padding-y` | The vertical padding of the tab list component. | `var(--graupl-spacer-0)` |
| `--graupl-tabs-tab-list-padding` | The padding of the tab list component (combines y and x padding). | `var(--graupl-tabs-tab-list-padding-y) var(--graupl-tabs-tab-list-padding-x)` |
| `--graupl-tabs-tab-list-margin` | The margin of the tab list component. | `0 0 calc(-1 * max(var(--graupl-tabs-tab-list-border-bottom-width), var(--graupl-tabs-tab-toggle-border-bottom-width))) 0` |

## .tabs-tab-toggle properties

These are the default values for the `.tabs-tab-toggle` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-tabs-tab-toggle-padding-x` | The horizontal padding of the tab toggle component. | `var(--graupl-spacer-5)` |
| `--graupl-tabs-tab-toggle-padding-y` | The vertical padding of the tab toggle component. | `var(--graupl-spacer-3)` |
| `--graupl-tabs-tab-toggle-padding` | The padding of the tab toggle component (combines y and x padding). | `var(--graupl-tabs-tab-toggle-padding-y) var(--graupl-tabs-tab-toggle-padding-x)` |
| `--graupl-tabs-tab-toggle-border-top-left-radius` | The top left border radius of the tab toggle component. | `var(--graupl-border-top-left-radius)` |
| `--graupl-tabs-tab-toggle-border-top-right-radius` | The top right border radius of the tab toggle component. | `var(--graupl-border-top-right-radius)` |
| `--graupl-tabs-tab-toggle-border-bottom-right-radius` | The bottom right border radius of the tab toggle component. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-tabs-tab-toggle-border-bottom-left-radius` | The bottom left border radius of the tab toggle component. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-tabs-tab-toggle-border-radius` | The border radius of the tab toggle component. | `var(--graupl-tabs-tab-toggle-border-top-left-radius) var(--graupl-tabs-tab-toggle-border-top-right-radius) var(--graupl-tabs-tab-toggle-border-bottom-right-radius) var(--graupl-tabs-tab-toggle-border-bottom-left-radius)` |
| `--graupl-tabs-tab-toggle-border-top-width` | The top border width of the tab toggle component. | `var(--graupl-border-top-width)` |
| `--graupl-tabs-tab-toggle-border-right-width` | The right border width of the tab toggle component. | `var(--graupl-border-right-width)` |
| `--graupl-tabs-tab-toggle-border-bottom-width` | The bottom border width of the tab toggle component. | `var(--graupl-border-bottom-width)` |
| `--graupl-tabs-tab-toggle-border-left-width` | The left border width of the tab toggle component. | `var(--graupl-border-left-width)` |
| `--graupl-tabs-tab-toggle-border-width` | The border width of the tab toggle component (combines top, right, bottom, and left widths). | `var(--graupl-tabs-tab-toggle-border-top-width) var(--graupl-tabs-tab-toggle-border-right-width) var(--graupl-tabs-tab-toggle-border-bottom-width) var(--graupl-tabs-tab-toggle-border-left-width)` |
| `--graupl-tabs-tab-toggle-border-top-style` | The top border style of the tab toggle component. | `var(--graupl-border-top-style)` |
| `--graupl-tabs-tab-toggle-border-right-style` | The right border style of the tab toggle component. | `var(--graupl-border-right-style)` |
| `--graupl-tabs-tab-toggle-border-bottom-style` | The bottom border style of the tab toggle component. | `var(--graupl-border-bottom-style)` |
| `--graupl-tabs-tab-toggle-border-left-style` | The left border style of the tab toggle component. | `var(--graupl-border-left-style)` |
| `--graupl-tabs-tab-toggle-border-style` | The border style of the tab toggle component (combines top, right, bottom, and left styles). | `var(--graupl-tabs-tab-toggle-border-top-style) var(--graupl-tabs-tab-toggle-border-right-style) var(--graupl-tabs-tab-toggle-border-bottom-style) var(--graupl-tabs-tab-toggle-border-left-style)` |
| `--graupl-tabs-tab-toggle-background` | The background colour of the tab toggle component. | `var(--graupl-tabs-tab-list-background)` |
| `--graupl-tabs-tab-toggle-visited-background` | The background colour of a visited tab toggle component. | `var(--graupl-tabs-tab-toggle-background)` |
| `--graupl-tabs-tab-toggle-focus-background` | The background colour of a focused tab toggle component. | `var(--graupl-tabs-tab-toggle-background)` |
| `--graupl-tabs-tab-toggle-hover-background` | The background colour of a hovered tab toggle component. | `var(--graupl-tabs-tab-list-color)` |
| `--graupl-tabs-tab-toggle-active-background` | The background colour of an active tab toggle component. | `var(--graupl-tabs-tab-toggle-hover-background)` |
| `--graupl-tabs-tab-toggle-selected-background` | The background colour of a selected tab toggle component. | `var(--graupl-tabs-tab-toggle-hover-background)` |
| `--graupl-tabs-tab-toggle-disabled-background` | The background colour of a disabled tab toggle component. | `var(--graupl-tabs-tab-list-background)` |
| `--graupl-tabs-tab-toggle-color` | The text colour of the tab toggle component. | `var(--graupl-tabs-tab-list-color)` |
| `--graupl-tabs-tab-toggle-visited-color` | The text colour of a visited tab toggle component. | `var(--graupl-tabs-tab-toggle-color)` |
| `--graupl-tabs-tab-toggle-focus-color` | The text colour of a focused tab toggle component. | `var(--graupl-tabs-tab-toggle-color)` |
| `--graupl-tabs-tab-toggle-hover-color` | The text colour of a hovered tab toggle component. | `var(--graupl-tabs-tab-list-background)` |
| `--graupl-tabs-tab-toggle-active-color` | The text colour of an active tab toggle component. | `var(--graupl-tabs-tab-toggle-hover-color)` |
| `--graupl-tabs-tab-toggle-selected-color` | The text colour of a selected tab toggle component. | `var(--graupl-tabs-tab-toggle-hover-color)` |
| `--graupl-tabs-tab-toggle-disabled-color` | The text colour of a disabled tab toggle component. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-tabs-tab-toggle-border-color` | The border colour of the tab toggle component. | `var(--graupl-tabs-tab-list-border-color)` |
| `--graupl-tabs-tab-toggle-visited-border-color` | The border colour of a visited tab toggle component. | `var(--graupl-tabs-tab-toggle-border-color)` |
| `--graupl-tabs-tab-toggle-focus-border-color` | The border colour of a focused tab toggle component. | `var(--graupl-tabs-tab-toggle-border-color)` |
| `--graupl-tabs-tab-toggle-hover-border-color` | The border colour of a hovered tab toggle component. | `var(--graupl-tabs-tab-list-border-color)` |
| `--graupl-tabs-tab-toggle-active-border-color` | The border colour of an active tab toggle component. | `var(--graupl-tabs-tab-toggle-hover-border-color)` |
| `--graupl-tabs-tab-toggle-selected-border-color` | The border colour of a selected tab toggle component. | `var(--graupl-tabs-tab-toggle-hover-border-color)` |
| `--graupl-tabs-tab-toggle-disabled-border-color` | The border colour of a disabled tab toggle component. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-tabs-tab-toggle-transform` | The transform applied to the tab toggle component. | `none` |
| `--graupl-tabs-tab-toggle-visited-transform` | The transform applied to a visited tab toggle component. | `var(--graupl-tabs-tab-toggle-transform)` |
| `--graupl-tabs-tab-toggle-focus-transform` | The transform applied to a focused tab toggle component. | `var(--graupl-tabs-tab-toggle-transform)` |
| `--graupl-tabs-tab-toggle-hover-transform` | The transform applied to a hovered tab toggle component. | `var(--graupl-tabs-tab-toggle-transform)` |
| `--graupl-tabs-tab-toggle-active-transform` | The transform applied to an active tab toggle component. | `none` |
| `--graupl-tabs-tab-toggle-selected-transform` | The transform applied to a selected tab toggle component. | `none` |
| `--graupl-tabs-tab-toggle-disabled-transform` | The transform applied to a disabled tab toggle component. | `none` |

## .tabs-tab-content properties

These are the default values for the `.tabs-tab-content` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-tabs-tab-content-padding-x` | The horizontal padding of the tab content component. | `var(--graupl-spacer-3)` |
| `--graupl-tabs-tab-content-padding-y` | The vertical padding of the tab content component. | `var(--graupl-spacer-3)` |
| `--graupl-tabs-tab-content-padding` | The padding of the tab content component (combines y and x padding). | `var(--graupl-tabs-tab-content-padding-y) var(--graupl-tabs-tab-content-padding-x)` |
| `--graupl-tabs-tab-content-background` | The background colour of the tab content component. | `var(--graupl-tabs-background)` |
| `--graupl-tabs-tab-content-color` | The text colour of the tab content component. | `var(--graupl-tabs-color)` |
| `--graupl-tabs-tab-content-border-color` | The border colour of the tab content component. | `var(--graupl-tabs-border-color)` |
| `--graupl-tabs-tab-content-border-top-left-radius` | The top left border radius of the tab content component. | `var(--graupl-border-top-left-radius)` |
| `--graupl-tabs-tab-content-border-top-right-radius` | The top right border radius of the tab content component. | `var(--graupl-border-top-right-radius)` |
| `--graupl-tabs-tab-content-border-bottom-right-radius` | The bottom right border radius of the tab content component. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-tabs-tab-content-border-bottom-left-radius` | The bottom left border radius of the tab content component. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-tabs-tab-content-border-radius` | The border radius of the tab content component. | `var(--graupl-tabs-tab-content-border-top-left-radius) var(--graupl-tabs-tab-content-border-top-right-radius) var(--graupl-tabs-tab-content-border-bottom-right-radius) var(--graupl-tabs-tab-content-border-bottom-left-radius)` |
| `--graupl-tabs-tab-content-border-top-width` | The top border width of the tab content component. | `var(--graupl-border-top-width)` |
| `--graupl-tabs-tab-content-border-right-width` | The right border width of the tab content component. | `var(--graupl-border-right-width)` |
| `--graupl-tabs-tab-content-border-bottom-width` | The bottom border width of the tab content component. | `var(--graupl-border-bottom-width)` |
| `--graupl-tabs-tab-content-border-left-width` | The left border width of the tab content component. | `var(--graupl-border-left-width)` |
| `--graupl-tabs-tab-content-border-width` | The border width of the tab content component (combines top, right, bottom, and left widths). | `var(--graupl-tabs-tab-content-border-top-width) var(--graupl-tabs-tab-content-border-right-width) var(--graupl-tabs-tab-content-border-bottom-width) var(--graupl-tabs-tab-content-border-left-width)` |
| `--graupl-tabs-tab-content-border-top-style` | The top border style of the tab content component. | `var(--graupl-border-top-style)` |
| `--graupl-tabs-tab-content-border-right-style` | The right border style of the tab content component. | `var(--graupl-border-right-style)` |
| `--graupl-tabs-tab-content-border-bottom-style` | The bottom border style of the tab content component. | `var(--graupl-border-bottom-style)` |
| `--graupl-tabs-tab-content-border-left-style` | The left border style of the tab content component. | `var(--graupl-border-left-style)` |
| `--graupl-tabs-tab-content-border-style` | The border style of the tab content component (combines top, right, bottom, and left styles). | `var(--graupl-tabs-tab-content-border-top-style) var(--graupl-tabs-tab-content-border-right-style) var(--graupl-tabs-tab-content-border-bottom-style) var(--graupl-tabs-tab-content-border-left-style)` |
| `--graupl-tabs-tab-content-show-display` | The display value for tab content when shown. | `block` |
| `--graupl-tabs-tab-content-hide-display` | The display value for tab content when hidden. | `none` |
| `--graupl-tabs-tab-content-transitioning-display` | The display value for tab content while transitioning. | `var(--graupl-tabs-tab-content-show-display)` |
| `--graupl-tabs-tab-content-display` | The display value for tab content. | `var(--graupl-tabs-tab-content-hide-display)` |
| `--graupl-tabs-tab-content-show-opacity` | The opacity value for tab content when shown. | `1` |
| `--graupl-tabs-tab-content-hide-opacity` | The opacity value for tab content when hidden. | `0` |
| `--graupl-tabs-tab-content-transitioning-opacity` | The opacity value for tab content while transitioning. | `var(--graupl-tabs-tab-content-hide-opacity)` |
| `--graupl-tabs-tab-content-opacity` | The opacity value for tab content. | `var(--graupl-tabs-tab-content-hide-opacity)` |
| `--graupl-tabs-tab-content-transition-duration` | The transition duration for tab content. | `var(--graupl-transition-duration-fast)` |
| `--graupl-tabs-tab-content-transition-timing-function` | The transition timing function for tab content. | `var(--graupl-transition-timing-function)` |
| `--graupl-tabs-tab-content-transition` | The transition for tab content changes. | `opacity var(--graupl-tabs-tab-content-transition-duration) var(--graupl-tabs-tab-content-transition-timing-function)` |
| `--graupl-tabs-tab-content-transition-reduced-motion` | The transition for tab content changes when reduced motion is enabled. | `opacity var(--graupl-tabs-tab-content-transition-duration) var(--graupl-tabs-tab-content-transition-timing-function)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | The selector base for the component. | `"."` |
| `$modifier-selector-base` | The selector base for component modifiers. | `"."` |
| `$generate-base-theme-map` | A flag to generate the base theme maps for tabs variants. | `true` |
| `$themeable` | A flag that determines whether theme modifiers are generated. | `false` |
| `$tabs-selector-base` | The selector base for the tabs component. | `"."` |
| `$tabs-selector` | The tabs component selector. | `"tabs"` |
| `$tabs-tab-list-selector-base` | The selector base for the tabs list component. | `"."` |
| `$tabs-tab-list-selector` | The tab list component selector. | `"tab-list"` |
| `$tabs-tab-toggle-selector-base` | The selector base for the individual tab toggle component. | `"."` |
| `$tabs-tab-toggle-selector` | The individual tab toggle component selector. | `"tab-toggle"` |
| `$tabs-tab-content-selector-base` | The selector base for the individual tab content component. | `"."` |
| `$tabs-tab-content-selector` | The individual tab content component selector. | `"tab-content"` |
| `$tabs-theme-selector-base` | The selector base for the tabs theme component modifiers. | `"."` |
| `$tabs-theme-selector-prefix` | The tabs theme component modifier selector prefix. | `""` |
| `$tabs-tab-content-open-selector-base` | The selector base applied to the open modifier. | `"."` |
| `$tabs-tab-content-open-selector` | The selector applied to the open modifier. | `"show"` |
| `$tabs-tab-content-closed-selector-base` | The selector base applied to the closed modifier. | `"."` |
| `$tabs-tab-content-closed-selector` | The selector applied to the closed modifier. | `"hide"` |
| `$tabs-tab-content-transitioning-selector-base` | The selector base applied to the transitioning modifier. | `"."` |
| `$tabs-tab-content-transitioning-selector` | The selector applied to the transitioning modifier. | `"transitioning"` |
| `$tabs-tab-content-show-display` | The default display value for open tab contents. | `block` |
| `$tabs-tab-content-hide-display` | The default display value for closed tab contents. | `none` |
| `$tabs-tab-content-transitioning-display` | The default display value for transitioning tab contents. | `block` |
| `$tabs-tab-content-show-opacity` | The default opacity value for open tab contents. | `1` |
| `$tabs-tab-content-hide-opacity` | The default opacity value for closed tab contents. | `0` |
| `$tabs-tab-content-transitioning-opacity` | The default opacity value for transitioning tab contents. | `0` |
| `$tabs-tab-toggle-initial-transform` | The initial transform of the tab toggle component. | `none` |
| `$tabs-tab-toggle-final-transform` | The final transform of the tab toggle component. | `none` |
| `$tabs-tab-toggle-disabled-transform` | The disabled transform of the tab toggle component. | `none` |
| `$tabs-theme-mappings` | A map of properties and color shades used generate all tabs variants. | `map.merge($-tabs-theme-mappings, $tabs-theme-mappings)` |
| `$tabs-theme-map` | A map of all properties, colors, and color shades used to generate all tabs variants. | `map.deep-merge($-tabs-theme-map, $tabs-theme-map)` |

## Javascript options for customization

| Property Name | Description | Default Value |
| --- | --- | --- |
| `context` | The element that scopes the selector when locating tabs. | `document` |
| `selector` | The selector used to find tabs in the DOM. | `.tabs` |
| `options` | An object of options passed through to the `Tabs` constructor (see below). | `{}` |
| `options.tabListSelector` | The selector for the tab list element. | `.tab-list` |
| `options.tabToggleSelector` | The selector for tab toggle elements. | `.tab-toggle` |
| `options.tabContentSelector` | The selector for tab content elements. | `.tab-content` |
| `options.openClass` | The class(es) applied when a tab is open. | `show` |
| `options.closeClass` | The class(es) applied when a tab is closed. | `hide` |
| `options.transitionClass` | The class(es) applied while a tab is transitioning. | `null` |
| `options.transitionDuration` | Duration (ms) for transitions between open/closed states. | `300` |
| `options.openDuration` | Duration (ms) for closed → open; `-1` uses `transitionDuration`. | `-1` |
| `options.closeDuration` | Duration (ms) for open → closed; `-1` uses `transitionDuration`. | `-1` |
| `options.automaticActivation` | When `true`, focusing a tab toggle also activates it. | `false` |
| `options.prefix` | Prefix for generated CSS custom properties. | `graupl-` |
| `options.key` | Key used when generating IDs; `null` auto-generates a random key. | `null` |
| `options.initializeClass` | The class applied while the tabs are initializing. | `initializing` |
| `options.initialize` | When `true`, initializes the tabs immediately on creation. | `false` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
