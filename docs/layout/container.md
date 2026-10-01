<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const count = ref("container");

  const exampleContainer = computed(() => {

    const sidebarChildLeft = !count.value.includes("right") & count.value.includes("sidebar") ? `<div class="sidebar-left z-1 align-content-stretch">
    <div class="bg-secondary-200 py-5"></div>
  </div>`  : "";
    const sidebarChildRight = !count.value.includes("left") & count.value.includes("sidebar") ? `<div class="sidebar-right z-1 align-content-stretch">
    <div class="bg-secondary-200 py-5"></div>
  </div>`  : "";

    const classes = count.value.includes("sidebar") ? "container content" : count.value;

    const sidebar = count.value.includes("sidebars") ? ( "sidebars") : count.value.includes("sidebar") ? "contain sidebars" : "";

  return `
<div class="container bg-tertiary-400 text-primary-100 ${sidebar}">
  ${sidebarChildLeft}
  ${sidebarChildRight}
  <div class="bg-primary ${classes}">
    <div class="py-7 px-5">${count.value}</div>
  </div>
</div>
    `
  });
</script>

<style>
  .example .container {
    grid-template-columns: [full-width-start] 2fr [feature-start] 1fr [breakout-start] 0.5fr [content-start] 5fr [content-end] 0.5fr [breakout-end] 1fr [feature-end] 2fr [full-width-end]
  }
</style>

# Container

The container component is a grid container that provides a layout for the main content of a page.
It is divided into four sections:
- Full-width: A full-width section that spans the entire width of the container.
- Feature: A feature section that is used for feature content.
- Breakout: A breakout section that is used for breakout content.
- Content: The main content section that contains all other content.

<br />

Optionally, the container component can have sidebars, which divides the content section into five sections:
- Sidebar-left: A left sidebar section that is used for sidebar content.
- Sidebar-right: A right sidebar section that is used for sidebar content.
- Inner-content: A section that contains the main content of the page.
- Content-left: A section that contains the sidebar-left and inner-content sections.
- Content-right: A section that contains the inner-content and sidebar-right sections.

The container layout is as follows:

| full-width | feature | breakout | content | breakout | feature | full-width |

<br />

Nesting a container directly inside of another container will cause the
nested container to inherit the grid columns of the parent container.

<br/>

| Class Name | Description |
| --- | --- |
| `.container` | The main container component. |
| `.full-width` | A full-width container component. |
| `.feature` | A feature container component. |
| `.breakout` | A breakout container component. |
| `.contain` | A utility class to contain child elements to the content section of the container grid. This also works when added to a sidebars container to contain the sidebar itself to the container section. |
| `.sidebars` | A utility class to enable two sidebars in the container. |
| `.sidebars-left` | A utility class to enable a left sidebar in the container. |
| `.sidebars-right` | A utility class to enable a right sidebar in the container. |
| `.sidebar-left` | A left sidebar container component used directly inside of a container with sidebars. |
| `.sidebar-right` | A right sidebar container component used directly inside of a container with sidebars. |
| `.sidebar` | A sidebar container component used  directly inside of a container with sidebars. |
| `.content` | A content container component used  directly inside of a container with sidebars. |

<live-example :source-code="exampleContainer" :key="count">
  <template #options>
    <div class="input-group">
      <select id="select-container-count" v-model="count">
        <option value="container">Container</option>
        <option value="full-width">Full Width</option>
        <option value="feature">Feature</option>
        <option value="breakout">Breakout</option>
        <option value="sidebars">Sidebars</option>
        <option value="sidebars-left">Sidebars Left</option>
        <option value="sidebars-right">Sidebars Right</option>
        <option value="contain sidebar">Contained Sidebars</option>
        <option value="contain sidebar-left">Contained Sidebars Left</option>
        <option value="contain sidebar-right">Contained Sidebars Right</option>
        <option value="content">Content</option>
      </select>
    <p class="help-text">Select the alignment you would like displayed.</p>
    </div>
  </template>
</live-example>

## .container properties

These are the default values for the `.container` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-container-sidebar-width` | The width of the sidebar sections. | `26ch` |
| `--graupl-container-breakout-width` | The width that the breakout section will extend beyond the content. | `4ch` |
| `--graupl-container-feature-width` | The width that the feature section will extend beyond the breakout. | `10ch` |
| `--graupl-container-content-max-width` | The maximum width of the content section. | `var(--graupl-content-max-width)` |
| `--graupl-container-breakout-max-width` | The maximum width of the breakout section. | `calc(var(--graupl-container-content-max-width) + var(--graupl-container-breakout-width))` |
| `--graupl-container-feature-max-width` | The maximum width of the feature section. | `calc(var(--graupl-container-breakout-max-width) + var(--graupl-container-feature-width))` |
| `--graupl-container-full-width-section-min-width` | The minimum width of one side of the full-width section. | `var(--graupl-spacer-5)` |
| `--graupl-container-full-width-section-max-width` | The maximum width of one side of the full-width section. | `1fr` |
| `--graupl-container-feature-section-min-width` | The minimum width of one side of the feature section. | `0rem` |
| `--graupl-container-feature-section-max-width` | The maximum width of one side of the feature section. | `calc((var(--graupl-container-feature-max-width) - var(--graupl-container-breakout-max-width)) / 2)` |
| `--graupl-container-breakout-section-min-width` | The minimum width of one side of the breakout section. | `0rem` |
| `--graupl-container-breakout-section-max-width` | The maximum width of one side of the breakout section. | `calc((var(--graupl-container-breakout-max-width) - var(--graupl-container-content-max-width)) / 2)` |
| `--graupl-container-content-section-min-width` | The minimum width of the content section. | `calc(100% - (var(--graupl-container-full-width-section-min-width) * 2) - (var(--graupl-container-feature-section-min-width) * 2) - (var(--graupl-container-breakout-section-min-width) * 2))` |
| `--graupl-container-content-section-max-width` | The maximum width of the content section. | `var(--graupl-container-content-max-width)` |
| `--graupl-container-full-width-section-width` | The calculated minmax width of the full-width section. | `minmax(var(--graupl-container-full-width-section-min-width), var(--graupl-container-full-width-section-max-width))` |
| `--graupl-container-feature-section-width` | The calculated minmax width of the feature section. | `minmax(var(--graupl-container-feature-section-min-width), var(--graupl-container-feature-section-max-width))` |
| `--graupl-container-breakout-section-width` | The calculated minmax width of the breakout section. | `minmax(var(--graupl-container-breakout-section-min-width), var(--graupl-container-breakout-section-max-width))` |
| `--graupl-container-content-section-width` | The calculated width of the content section. | `min(var(--graupl-container-content-section-min-width), var(--graupl-container-content-section-max-width))` |
| `--graupl-container-sidebar-left-section-width` | The width of the left sidebar section. | `max(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width))` |
| `--graupl-container-sidebar-right-section-width` | The width of the right sidebar section. | `max(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width))` |
| `--graupl-container-sidebars-breakout-section-width` | The breakout width between the content and sidebar areas. | `var(--graupl-container-breakout-section-max-width)` |
| `--graupl-container-sidebars-content-section-min-width` | The minimum width of the content section when both sidebars are enabled. | `calc(100% - (var(--graupl-container-full-width-section-min-width) * 2) - (var(--graupl-container-feature-section-min-width) * 2) - (var(--graupl-container-sidebars-breakout-section-width) * 2) - var(--graupl-container-sidebar-left-section-width) - var(--graupl-container-sidebar-right-section-width))` |
| `--graupl-container-sidebars-content-section-max-width` | The maximum width of the content section when both sidebars are enabled. | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-sidebar-left-section-width) - var(--graupl-container-sidebar-right-section-width) + min(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width)) + min(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width)))` |
| `--graupl-container-sidebars-content-section-width` | The calculated width of the content section when both sidebars are enabled. | `min(var(--graupl-container-sidebars-content-section-min-width), var(--graupl-container-sidebars-content-section-max-width))` |
| `--graupl-container-sidebars-right-content-section-min-width` | The minimum width of the content section when only the right sidebar is enabled. | `calc(100% - (var(--graupl-container-full-width-section-min-width) * 2) - (var(--graupl-container-feature-section-min-width) * 2) - var(--graupl-container-breakout-section-min-width) - var(--graupl-container-sidebars-breakout-section-width) - var(--graupl-container-sidebar-right-section-width))` |
| `--graupl-container-sidebars-right-content-section-max-width` | The maximum width of the content section when only the right sidebar is enabled. | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-sidebar-right-section-width) + min(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width)))` |
| `--graupl-container-sidebars-right-content-section-width` | The calculated width of the content section when only the right sidebar is enabled. | `min(var(--graupl-container-sidebars-right-content-section-min-width), var(--graupl-container-sidebars-right-content-section-max-width))` |
| `--graupl-container-sidebars-left-content-section-min-width` | The minimum width of the content section when only the left sidebar is enabled. | `calc(100% - (var(--graupl-container-full-width-section-min-width) * 2) - (var(--graupl-container-feature-section-min-width) * 2) - var(--graupl-container-breakout-section-min-width) - var(--graupl-container-sidebars-breakout-section-width) - var(--graupl-container-sidebar-left-section-width))` |
| `--graupl-container-sidebars-left-content-section-max-width` | The maximum width of the content section when only the left sidebar is enabled. | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-sidebar-left-section-width) + min(var(--graupl-container-sidebar-width), var(--graupl-container-feature-section-max-width)))` |
| `--graupl-container-sidebars-left-content-section-width` | The calculated width of the content section when only the left sidebar is enabled. | `min(var(--graupl-container-sidebars-left-content-section-min-width), var(--graupl-container-sidebars-left-content-section-max-width))` |
| `--graupl-container-contained-sidebar-left-section-width` | The width of the left contained sidebar section. | `var(--graupl-container-sidebar-left-section-width)` |
| `--graupl-container-contained-sidebar-right-section-width` | The width of the right contained sidebar section. | `var(--graupl-container-sidebar-right-section-width)` |
| `--graupl-container-sidebars-contained-spacer-section-width` | The spacer width between the content and sidebar areas. | `var(--graupl-container-sidebars-breakout-section-width)` |
| `--graupl-container-sidebars-contained-content-section-max-width` | The maximum width of the content section when both contained sidebars are enabled. | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-contained-sidebar-left-section-width) - var(--graupl-container-contained-sidebar-right-section-width) - var(--graupl-container-sidebars-contained-spacer-section-width) * 2)` |
| `--graupl-container-sidebars-contained-content-section-width` | The calculated width of the content section when both contained sidebars are enabled. | `min(var(--graupl-container-sidebars-content-section-min-width), var(--graupl-container-sidebars-contained-content-section-max-width))` |
| `--graupl-container-sidebars-contained-right-content-section-max-width` | The maximum width of the content section when only the contained right sidebar is enabled. | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-contained-sidebar-right-section-width) - var(--graupl-container-sidebars-contained-spacer-section-width))` |
| `--graupl-container-sidebars-contained-right-content-section-width` | The calculated width of the content section when only the contained right sidebar is enabled. | `min(var(--graupl-container-sidebars-right-content-section-min-width), var(--graupl-container-sidebars-contained-right-content-section-max-width))` |
| `--graupl-container-sidebars-contained-left-content-section-max-width` | The maximum width of the content section when only the contained left sidebar is enabled. | `calc(var(--graupl-container-content-section-max-width) - var(--graupl-container-contained-sidebar-left-section-width) - var(--graupl-container-sidebars-contained-spacer-section-width))` |
| `--graupl-container-sidebars-contained-left-content-section-width` | The calculated width of the content section when only the contained left sidebar is enabled. | `min(var(--graupl-container-sidebars-left-content-section-min-width), var(--graupl-container-sidebars-contained-left-content-section-max-width))` |
| `--graupl-container-background` | The background of the container component. | `var(--graupl-background)` |
| `--graupl-container-color` | The text color of the container component. | `var(--graupl-color)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | The selector base for the component. | `"."` |
| `$modifier-selector-base` | The selector base for component modifiers. | `"."` |
| `$generate-base-theme-map` | Flag to generate the base theme map. | `true` |
| `$themeable` | Flag to generate theme modifiers. | `false` |
| `$force-container-chaining` | A flag to force container chaining in all containers. | `false` |
| `$generate-forced-container-selectors` | A flag to generate a set of default selectors for forced container chaining. | `true` |
| `$show-warnings` | A flag to show any built-in warnings that may be output during compiling. | `true` |
| `$container-selector-base` | The base selector for the container component. | `"."` |
| `$container-selector` | The selector for the container component. | `"container"` |
| `$container-theme-selector-base` | The selector base for container theme modifiers. | `"."` |
| `$container-theme-selector-prefix` | The container theme modifier selector prefix. | `""` |
| `$container-breakout-selector-base` | The base selector for the breakout container component. | `"."` |
| `$container-breakout-selector` | The selector for the breakout container component. | `"breakout"` |
| `$container-feature-selector-base` | The base selector for the feature container component. | `"."` |
| `$container-feature-selector` | The selector for the feature container component. | `"feature"` |
| `$container-full-width-selector-base` | The base selector for the full-width container component. | `"."` |
| `$container-full-width-selector` | The selector for the full-width container component. | `"full-width"` |
| `$container-contain-selector-base` | The base selector for the contain utility class. | `"."` |
| `$container-contain-selector` | The selector for the contain utility class. | `"contain"` |
| `$container-sidebars-selector-base` | The base selector for the sidebars utility class. | `"."` |
| `$container-sidebars-selector` | The selector for the sidebars utility class. | `"sidebars"` |
| `$container-content-selector-base` | The base selector for the content container component. | `"."` |
| `$container-content-selector` | The selector for the content container component. | `"content"` |
| `$container-sidebar-selector-base` | The base selector for the sidebar container component. | `"."` |
| `$container-sidebar-selector` | The selector for the sidebar container component. | `"sidebar"` |
| `$container-left-selector-suffix` | The suffix for the left sidebar selector. | `"-left"` |
| `$container-right-selector-suffix` | The suffix for the right sidebar selector. | `"-right"` |
| `$container-inner-selector-prefix` | The prefix for the inner content selector. | `"inner-"` |
| `$container-breakout-width` | The width of the breakout section will extend from the content section. | `4ch` |
| `$container-feature-width` | The width of the feature section will extend from the breakout section. | `10ch` |
| `$container-sidebar-width` | The width of the sidebar sections. | `26ch` |
| `$forced-container-selectors` | Additional selectors included in forced container chaining. | `()` |
| `$container-theme-mappings` | Map of properties/shades for container themes. | `()` |
| `$container-theme-map` | Expanded map of properties/colors/shades. | `()` |


## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
