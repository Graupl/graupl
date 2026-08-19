<script setup>
  import { ref, computed, onMounted } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import AccordionGenerator from "@graupl/core/src/accordion/generator.js";

  onMounted(() => {AccordionGenerator()});

  const exampleAccordion = computed(() => {
    return `
<div class="accordion">
  <div class="accordion-control-container">
    <button class="accordion-control expand-all">Expand All</button>
    <button class="accordion-control collapse-all">Collapse All</button>
  </div>
  <div class="accordion-item show">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="true" class="accordion-item-toggle">
          Accordion 1
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item hide">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="false" class="accordion-item-toggle">
          Accordion 2
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
        <p>This one has some extra text in it to make it longer.</p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
        <p>There is more info in the footer too.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item hide">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="false" class="accordion-item-toggle">
          Accordion 3
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
        <p>
          This one is even longer than the second one. Why? Because it
          needs to be. That's why.
        </p>
        <p>It's also a bit more verbose than the other two.</p>
        <p>But that's okay. It's just an example.</p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
      </div>
    </div>
  </div>
</div>
    `;
  });
</script>

# Accordions

<div class="accordion">
  <div class="accordion-control-container">
    <button class="accordion-control expand-all">Expand All</button>
    <button class="accordion-control collapse-all">Collapse All</button>
  </div>
  <div class="accordion-item show">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="true" class="accordion-item-toggle">
          Accordion 1
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item hide">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="false" class="accordion-item-toggle">
          Accordion 2
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
        <p>This one has some extra text in it to make it longer.</p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
        <p>There is more info in the footer too.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item hide">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="false" class="accordion-item-toggle">
          Accordion 3
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
        <p>
          This one is even longer than the second one. Why? Because it
          needs to be. That's why.
        </p>
        <p>It's also a bit more verbose than the other two.</p>
        <p>But that's okay. It's just an example.</p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
      </div>
    </div>
  </div>
</div>

<br/>

The accordion component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.accordion` | The accordion container. |
| `.accordion-control-container` | The accordion control container. |
| `.accordion-control` | The accordion control wrapper. |
| `.accordion-item` | The accordion item wrapper. |
| `.accordion-item-header` | The accordion item header. |
| `.accordion-item-title` | The accordion item title row. |
| `.accordion-item-toggle` | The accordion item toggle control. |
| `.accordion-item-content` | The collapsible content wrapper. |
| `.accordion-item-body` | The main body region inside the content wrapper. |
| `.accordion-item-footer` | The footer region inside the content wrapper. |
| `.show` | Modifier applied to an item when open. |
| `.hide` | Modifier applied to an item when closed. |
| `.collapse-all` | Modifier applied to collapse control. |
| `.expand-all` | Modifier applied to expand control. |
| `.transitioning` | Modifier applied while an item is transitioning. |

<br/>

## .accordion custom properties

These are the default values for the `.accordion ` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-padding-x`| Value for accordion padding horizontal. | `var(--graupl-spacer-0)`|
| `--graupl-accordion-padding-y`| Value for accordion padding vertical. | `var(--graupl-spacer-0)`|
| `--graupl-accordion-padding`| Value for accordion padding.| `var(--graupl-accordion-padding-y) var(--graupl-accordion-padding-x)`|
| `--graupl-accordion-column-gap` | Value for accordion column gap. | `var(--graupl-spacer-0)`|
| `--graupl-accordion-row-gap`| Value for accordion row gap.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-gap`| Value for accordion gap.| `var(--graupl-accordion-column-gap) var(--graupl-accordion-row-gap)`|
| `--graupl-accordion-color`| Value for accordion color.| `var(--graupl-color)`|
| `--graupl-accordion-background` | Value for accordion background. | `var(--graupl-background)`|
| `--graupl-accordion-border-color` | Value for accordion border color. | `var(--graupl-accordion-color)`|
| `--graupl-accordion-transition-duration` | Value for accordion transition duration. | `var(--graupl-transition-duration-slow)` |
| `--graupl-accordion-transition-timing-function` | Value for accordion transition timing function. | `var(--graupl-transition-timing-function)` |


## .accordion-control-container custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-control-container-padding-x` | Value for accordion control container padding horizontal. | `0` |
| `--graupl-accordion-control-container-padding-y` | Value for accordion control container padding vertical. | `0` |
| `--graupl-accordion-control-container-padding` | Value for accordion control container padding. | `var(--graupl-accordion-control-container-padding-y) var(--graupl-accordion-control-container-padding-x)` |
| `--graupl-accordion-control-container-column-gap` | Value for accordion control container column gap. | `var(--graupl-spacer-3)` |
| `--graupl-accordion-control-container-row-gap` | Value for accordion control container row gap. | `var(--graupl-spacer-3)` |
| `--graupl-accordion-control-container-gap` | Value for accordion control container gap. | `var(--graupl-accordion-control-container-column-gap) var(--graupl-accordion-control-container-row-gap)` |


## .accordion-control custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-control-color` | Value for accordion control color. | `var(--graupl-accordion-color)` |
| `--graupl-accordion-control-visited-color` | Value for accordion control visited color. | `var(--graupl-accordion-control-color)` |
| `--graupl-accordion-control-focus-color` | Value for accordion control focus color. | `var(--graupl-accordion-control-color)` |
| `--graupl-accordion-control-hover-color` | Value for accordion control hover color. | `var(--graupl-accordion-background)` |
| `--graupl-accordion-control-active-color` | Value for accordion control active color. | `var(--graupl-accordion-control-hover-color)` |
| `--graupl-accordion-control-disabled-color` | Value for accordion control disabled color. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-accordion-control-background` | Value for accordion control background. | `var(--graupl-accordion-background)` |
| `--graupl-accordion-control-visited-background` | Value for accordion control visited background. | `var(--graupl-accordion-control-background)` |
| `--graupl-accordion-control-focus-background` | Value for accordion control focus background. | `var(--graupl-accordion-control-background)` |
| `--graupl-accordion-control-hover-background` | Value for accordion control hover background. | `var(--graupl-accordion-color)` |
| `--graupl-accordion-control-active-background` | Value for accordion control active background. | `var(--graupl-accordion-control-hover-background)` |
| `--graupl-accordion-control-disabled-background` | Value for accordion control disabled background. | `var(--graupl-accordion-background)` |
| `--graupl-accordion-control-border-color` | Value for accordion control border color. | `var(--graupl-accordion-border-color)` |
| `--graupl-accordion-control-visited-border-color` | Value for accordion control visited border color. | `var(--graupl-accordion-control-border-color)` |
| `--graupl-accordion-control-focus-border-color` | Value for accordion control focus border color. | `var(--graupl-accordion-control-border-color)` |
| `--graupl-accordion-control-hover-border-color` | Value for accordion control hover border color. | `var(--graupl-accordion-border-color)` |
| `--graupl-accordion-control-active-border-color` | Value for accordion control active border color. | `var(--graupl-accordion-control-hover-border-color)` |
| `--graupl-accordion-control-disabled-border-color` | Value for accordion control disabled border color. | `var(--graupl-theme-active--primary--200)` |


## .accordion-item custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-item-color` | Value for accordion item color. | `var(--graupl-accordion-color)`|
| `--graupl-accordion-item-background` | Value for accordion item background. | `var(--graupl-accordion-background)`|
| `--graupl-accordion-item-border-color`   | Value for accordion item border color.   | `var(--graupl-accordion-border-color)`|
| `--graupl-accordion-item-border-top-left-radius`| Value for accordion item border top left radius.| `var(--graupl-border-top-left-radius)`|
| `--graupl-accordion-item-border-top-right-radius`| Value for accordion item border top right radius.| `var(--graupl-border-top-right-radius)`|
| `--graupl-accordion-item-border-bottom-right-radius`| Value for accordion item border bottom right radius.| `var(--graupl-border-bottom-right-radius)`|
| `--graupl-accordion-item-border-bottom-left-radius`| Value for accordion item border bottom left radius.| `var(--graupl-border-bottom-left-radius)`|
| `--graupl-accordion-item-border-radius`  | Value for accordion item border radius.  | `var(--graupl-accordion-item-border-top-left-radius) var(--graupl-accordion-item-border-top-right-radius) var(--graupl-accordion-item-border-bottom-right-radius) var(--graupl-accordion-item-border-bottom-left-radius)`|
| `--graupl-accordion-item-border-top-width`| Value for accordion item border top width.| `var(--graupl-border-top-width)`|
| `--graupl-accordion-item-border-right-width`| Value for accordion item border right width.| `var(--graupl-border-right-width)`|
| `--graupl-accordion-item-border-bottom-width`| Value for accordion item border bottom width.| `var(--graupl-border-bottom-width)`|
| `--graupl-accordion-item-border-left-width`| Value for accordion item border left width.| `var(--graupl-border-left-width)`|
| `--graupl-accordion-item-border-width`   | Value for accordion item border width.   | `var(--graupl-accordion-item-border-top-width) var(--graupl-accordion-item-border-right-width) var(--graupl-accordion-item-border-bottom-width) var(--graupl-accordion-item-border-left-width)`|
| `--graupl-accordion-item-border-top-style`| Value for accordion item border top style.| `var(--graupl-border-top-style)`|
| `--graupl-accordion-item-border-right-style`| Value for accordion item border right style.| `var(--graupl-border-right-style)`|
| `--graupl-accordion-item-border-bottom-style`| Value for accordion item border bottom style.| `var(--graupl-border-bottom-style)`|
| `--graupl-accordion-item-border-left-style`| Value for accordion item border left style.| `var(--graupl-border-left-style)`|
| `--graupl-accordion-item-border-style`   | Value for accordion item border style.   | `var(--graupl-accordion-item-border-top-style) var(--graupl-accordion-item-border-right-style) var(--graupl-accordion-item-border-bottom-style) var(--graupl-accordion-item-border-left-style)`|
| `--graupl-accordion-item-transition-reduced-motion`| Value for accordion item transition reduced motion.| `none`|
| `--graupl-accordion-item-transition` | Value for accordion item transition. | `height var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function)` |


## .accordion-item-header custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-item-header-padding-x`| Value for accordion item header padding horizontal.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-header-padding-y`| Value for accordion item header padding vertical.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-header-padding` | Value for accordion item header padding. | `var(--graupl-accordion-item-header-padding-y) var(--graupl-accordion-item-header-padding-x)`|
| `--graupl-accordion-item-header-margin`  | Value for accordion item header margin.  | `calc(-1 * min(var(--graupl-accordion-item-border-top-width), var(--graupl-accordion-item-border-bottom-width), var(--graupl-accordion-item-border-left-width), var(--graupl-accordion-item-border-right-width)))` |

## .accordion-item-title custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-item-title-padding-x`| Value for accordion item title padding horizontal.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-title-padding-y`| Value for accordion item title padding vertical.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-title-padding`  | Value for accordion item title padding.  | `var(--graupl-accordion-item-title-padding-y) var(--graupl-accordion-item-title-padding-x)`|
| `--graupl-accordion-item-title-margin-x` | Value for accordion item title margin horizontal.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-title-margin-y` | Value for accordion item title margin vertical.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-title-margin`   | Value for accordion item title margin.   | `var(--graupl-accordion-item-title-margin-y) var(--graupl-accordion-item-title-margin-x)`|
| `--graupl-accordion-item-title-color` | Value for accordion item title color. | `var(--graupl-accordion-item-color)`|
| `--graupl-accordion-item-title-background`| Value for accordion item title background.| `var(--graupl-accordion-item-background)`|
| `--graupl-accordion-item-title-border-color`| Value for accordion item title border color.| `var(--graupl-accordion-item-border-color)`|
| `--graupl-accordion-item-title-font-size`| Value for accordion item title font size.| `var(--graupl-h5-font-size)`|
| `--graupl-accordion-item-title-font-weight`| Value for accordion item title font weight.| `var(--graupl-h5-font-weight)`|
| `--graupl-accordion-item-title-font-family`| Value for accordion item title font family.| `var(--graupl-h5-font-family)`|
| `--graupl-accordion-item-title-line-height`| Value for accordion item title line height.| `var(--graupl-h5-line-height)`|

## .accordion-item-toggle custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-item-toggle-padding-x` | Value for accordion item toggle padding horizontal. | `var(--graupl-button-padding-x)` |
| `--graupl-accordion-item-toggle-padding-y` | Value for accordion item toggle padding vertical. | `var(--graupl-button-padding-y)` |
| `--graupl-accordion-item-toggle-padding` | Value for accordion item toggle padding. | `var(--graupl-accordion-item-toggle-padding-y) var(--graupl-accordion-item-toggle-padding-x)` |
| `--graupl-accordion-item-toggle-transform` | Value for accordion item toggle transform. | `none` |
| `--graupl-accordion-item-toggle-visited-transform` | Value for accordion item toggle visited transform. | `var(--graupl-accordion-item-toggle-transform)` |
| `--graupl-accordion-item-toggle-focus-transform` | Value for accordion item toggle focus transform. | `var(--graupl-accordion-item-toggle-transform)` |
| `--graupl-accordion-item-toggle-hover-transform` | Value for accordion item toggle hover transform. | `var(--graupl-accordion-item-toggle-transform)` |
| `--graupl-accordion-item-toggle-active-transform` | Value for accordion item toggle active transform. | `none` |
| `--graupl-accordion-item-toggle-disabled-transform` | Value for accordion item toggle disabled transform. | `none` |
| `--graupl-accordion-item-toggle-pseudo-transform` | Value for accordion item toggle pseudo transform. | `none` |
| `--graupl-accordion-item-toggle-pseudo-open-transform` | Value for accordion item toggle pseudo open transform. | `rotate(-180deg)` |
| `--graupl-accordion-item-toggle-pseudo-transition` | Value for accordion item toggle pseudo transition. | `transform var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function)` |
| `--graupl-accordion-item-toggle-pseudo-transition-reduced-motion` | Value for accordion item toggle pseudo transition reduced motion. | `none` |
| `--graupl-accordion-item-toggle-transition`| Value for accordion item toggle transition.| `background var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function), color var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function), transform var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function)` |
| `--graupl-accordion-item-toggle-transition-reduced-motion` | Value for accordion item toggle transition reduced motion. | `background var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function), color var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function)` |
| `--graupl-accordion-item-toggle-color`   | Value for accordion item toggle color.   | `var(--graupl-accordion-color)`|
| `--graupl-accordion-item-toggle-visited-color`| Value for accordion item toggle visited color.| `var(--graupl-accordion-item-toggle-color)`|
| `--graupl-accordion-item-toggle-focus-color`| Value for accordion item toggle focus color.| `var(--graupl-accordion-item-toggle-color)`|
| `--graupl-accordion-item-toggle-hover-color`| Value for accordion item toggle hover color.| `var(--graupl-accordion-background)`|
| `--graupl-accordion-item-toggle-active-color`| Value for accordion item toggle active color.| `var(--graupl-accordion-item-toggle-hover-color)`|
| `--graupl-accordion-item-toggle-disabled-color`| Value for accordion item toggle disabled color.| `var(--graupl-theme-active--primary--200)`|
| `--graupl-accordion-item-toggle-background`| Value for accordion item toggle background.| `var(--graupl-accordion-background)`|
| `--graupl-accordion-item-toggle-visited-background`| Value for accordion item toggle visited background.| `var(--graupl-accordion-item-toggle-background)`|
| `--graupl-accordion-item-toggle-focus-background`| Value for accordion item toggle focus background.| `var(--graupl-accordion-item-toggle-background)`|
| `--graupl-accordion-item-toggle-hover-background`| Value for accordion item toggle hover background.| `var(--graupl-accordion-color)`|
| `--graupl-accordion-item-toggle-active-background`| Value for accordion item toggle active background.| `var(--graupl-accordion-item-toggle-hover-background)`|
| `--graupl-accordion-item-toggle-disabled-background`| Value for accordion item toggle disabled background.| `var(--graupl-accordion-background)`|
| `--graupl-accordion-item-toggle-border-color`| Value for accordion item toggle border color.| `var(--graupl-accordion-item-border-color)`|
| `--graupl-accordion-item-toggle-visited-border-color`| Value for accordion item toggle visited border color.| `var(--graupl-accordion-item-toggle-border-color)`|
| `--graupl-accordion-item-toggle-focus-border-color`| Value for accordion item toggle focus border color.| `var(--graupl-accordion-item-toggle-border-color)`|
| `--graupl-accordion-item-toggle-hover-border-color`| Value for accordion item toggle hover border color.| `var(--graupl-accordion-item-border-color)`|
| `--graupl-accordion-item-toggle-active-border-color`| Value for accordion item toggle active border color.| `var(--graupl-accordion-item-toggle-hover-border-color)` |
| `--graupl-accordion-item-toggle-disabled-border-color`| Value for accordion item toggle disabled border color.| `var(--graupl-theme-active--primary--200)`|


## .accordion-item-content custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-item-content-color`  | Value for accordion item content color.  | `var(--graupl-accordion-item-color)`|
| `--graupl-accordion-item-content-background`| Value for accordion item content background.| `var(--graupl-accordion-item-background)`|
| `--graupl-accordion-item-content-padding-x`| Value for accordion item content padding horizontal.| `var(--graupl-spacer-5)`|
| `--graupl-accordion-item-content-padding-y`| Value for accordion item content padding vertical.| `var(--graupl-spacer-5)`|
| `--graupl-accordion-item-content-padding`| Value for accordion item content padding.| `var(--graupl-accordion-item-content-padding-y) var(--graupl-accordion-item-content-padding-x)`|
| `--graupl-accordion-item-content-column-gap`| Value for accordion item content column gap.| `var(--graupl-spacer-3)`|
| `--graupl-accordion-item-content-row-gap`| Value for accordion item content row gap.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-content-gap` | Value for accordion item content gap. | `var(--graupl-accordion-item-content-column-gap) var(--graupl-accordion-item-content-row-gap)`|
| `--graupl-accordion-item-content-transform` | Value for accordion item content transform. | `translateY(-100%)` |
| `--graupl-accordion-item-content-open-transform` | Value for accordion item content open transform. | `translateY(0)` |
| `--graupl-accordion-item-content-transition` | Value for accordion item content transition. | `opacity var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function) transform var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function)` |
| `--graupl-accordion-item-content-transition-reduced-motion` | Value for accordion item content transition reduced motion. | `opacity var(--graupl-accordion-transition-duration) var(--graupl-accordion-transition-timing-function)` |

## .accordion-item-body custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-item-body-padding-x` | Value for accordion item body padding horizontal.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-body-padding-y` | Value for accordion item body padding vertical.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-body-padding`   | Value for accordion item body padding.   | `var(--graupl-accordion-item-body-padding-y) var(--graupl-accordion-item-body-padding-x)`|

## .accordion-item-footer custom properties

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-accordion-item-footer-padding-x`| Value for accordion item footer padding horizontal.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-footer-padding-y`| Value for accordion item footer padding vertical.| `var(--graupl-spacer-0)`|
| `--graupl-accordion-item-footer-padding` | Value for accordion item footer padding. | `var(--graupl-accordion-item-footer-padding-y) var(--graupl-accordion-item-footer-padding-x)`|


## Accordion Live Example

<live-example :source-code="exampleAccordion">
</live-example>

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base`| Default for selector base.| `"."`|
| `$modifier-selector-base`| Default for modifier selector base.| `"."`|
| `$generate-base-theme-map` | Default for generate base theme map. | `true`|
| `$themeable`| Default for themeable.| `false`|
| `$accordion-selector-base` | Default for accordion selector base. | `"."`|
| `$accordion-selector`| Default for accordion selector.| `"accordion"`|
| `$accordion-theme-selector-base`| Default for accordion theme selector base.| `"."`|
| `$accordion-theme-selector-prefix`| Default for accordion theme selector prefix.| `""`|
| `$accordion-item-selector-base`| Default for accordion item selector base.| `"."`|
| `$accordion-item-selector` | Default for accordion item selector. | `"accordion-item"`|
| `$accordion-item-header-selector-base`| Default for accordion item header selector base.| `"."`|
| `$accordion-item-header-selector`| Default for accordion item header selector.| `"accordion-item-header"`|
| `$accordion-item-title-selector-base`| Default for accordion item title selector base.| `"."`|
| `$accordion-item-title-selector`| Default for accordion item title selector.| `"accordion-item-title"`|
| `$accordion-item-toggle-selector-base`| Default for accordion item toggle selector base.| `"."`|
| `$accordion-item-toggle-selector`| Default for accordion item toggle selector.| `"accordion-item-toggle"`|
| `$accordion-item-content-selector-base`| Default for accordion item content selector base.| `"."`|
| `$accordion-item-content-selector`| Default for accordion item content selector.| `"accordion-item-content"`|
| `$accordion-item-body-selector-base`| Default for accordion item body selector base.| `"."`|
| `$accordion-item-body-selector`| Default for accordion item body selector.| `"accordion-item-body"`|
| `$accordion-item-footer-selector-base`| Default for accordion item footer selector base.| `"."`|
| `$accordion-item-footer-selector`| Default for accordion item footer selector.| `"accordion-item-footer"`|
| `$accordion-item-open-selector-base`| Default for accordion item open selector base.| `"."`|
| `$accordion-item-open-selector`| Default for accordion item open selector.| `"show"`|
| `$accordion-item-close-selector-base`| Default for accordion item close selector base.| `"."`|
| `$accordion-item-close-selector`| Default for accordion item close selector.| `"hide"`|
| `$accordion-item-transition-selector-base`| Default for accordion item transition selector base.| `"."`|
| `$accordion-item-transition-selector`| Default for accordion item transition selector.| `"transitioning"`|
| `$accordion-item-toggle-pseudo-selector`| Default for accordion item toggle pseudo selector.| `"after"`|
| `$accordion-expand-selector-base`| Default for accordion expand selector base.| `"."`|
| `$accordion-expand-selector`| Default for accordion expand selector.| `".expand-all"`|
| `$accordion-collapse-selector-base`| Default for accordion collapse selector base.| `"."`|
| `$accordion-collapse-selector`| Default for accordion collapse selector.| `".collapse-all"`|
| `$accordion-control-selector-base`| Default for accordion control selector base.| `"."`|
| `$accordion-control-selector`| Default for accordion control selector.| `"accordion-control"`|
| `$accordion-control-container-selector-base`| Default for accordion control container selector base.| `"."`|
| `$accordion-control-container-selector`| Default for accordion control container selector.| `"accordion-control-container"`|
| `$accordion-item-toggle-initial-transform`| Default for accordion item toggle initial transform.| `none`|
| `$accordion-item-toggle-final-transform`| Default for accordion item toggle final transform.| `none`|
| `$accordion-item-toggle-disabled-transform`| Default for accordion item toggle disabled transform.| `none`|
| `$accordion-item-toggle-pseudo-initial-transform` | Default for accordion item toggle pseudo initial transform. | `none`|
| `$accordion-item-toggle-pseudo-content`| Default for accordion item toggle pseudo content.| `"▼"`|
| `$accordion-item-content-initial-transform`| Default for accordion item content initial transform.| `translateY(-100%)`|
| `$accordion-item-content-final-transform`| Default for accordion item content final transform.| `translateY(0)`|
| `$accordion-theme-mappings`| Default for accordion theme mappings.| `()`|
| `$accordion-theme-map`| Default for accordion theme map.| `()`|

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
