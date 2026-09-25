<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import generate from "../../packages/core/src/js/disclosure/generator.js";

  const background = ref("default");

  const exampleDisclosures = computed(() => {
    return `
  <button
    class="disclosure-toggle"
    type="button"
    data-graupl-disclosure-target="disclosure"
    aria-label="Toggle disclosure example"
  ></button>
  <div id="disclosure" class="disclosure">
    <div class="disclosure-content">
      <p>This content is hidden until the disclosure is open.</p>
    </div>
  </div>
    `
  });
</script>

# Disclosures

<live-example :source-code="exampleDisclosures" :key="background" @mounted="generate()" @updated="generate()">
</live-example>

<br/>

The disclosure component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.disclosure` | The disclosure root container that manages layout, overflow, and transitions |
| `.disclosure.show` | A modifier that forces the disclosure container into the open state |
| `.disclosure.hide` | A modifier that forces the disclosure container into the closed state |
| `.disclosure.transitioning` | A modifier that applies the transitioning state to the container |
| `.disclosure-content` | The disclosure content wrapper that receives padding and border style |
| `.disclosure-toggle` | The disclosure toggle control that inherits the button base styles |

## .disclosure properties

These are the default values for the `.disclosure` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-disclosure-color` | Value for color. | `var(--graupl-color)` |
| `--graupl-disclosure-background` | Value for background. | `var(--graupl-background)` |
| `--graupl-disclosure-display` | Value for display. | `flex` |
| `--graupl-disclosure-block-size` | Value for block size. | `0` |
| `--graupl-disclosure-opacity` | Value for opacity. | `0` |

## .disclosure.show properties

These are the default values for the `.disclosure.show` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-disclosure-show-display` | Value for show display. | `flex` |
| `--graupl-disclosure-show-block-size` | Value for show block size. | `100%` |
| `--graupl-disclosure-show-opacity` | Value for show opacity. | `1` |

## .disclosure.hide properties

These are the default values for the `.disclosure.hide` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-disclosure-hide-display` | Value for hide display. | `flex` |
| `--graupl-disclosure-hide-block-size` | Value for hide block size. | `0` |
| `--graupl-disclosure-hide-block-size` | Value for hide block size. | `0` |
| `--graupl-disclosure-hide-opacity` | Value for hide opacity. | `0` |

## .disclosure.transition properties

These are the default values for the `.disclosure.transition` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-disclosure-transitioning-display` | Value for transitioning display. | `flex` |
| `--graupl-disclosure-transitioning-block-size` | Value for transitioning block size. | `0` |
| `--graupl-disclosure-transitioning-opacity` | Value for transitioning opacity. | `0` |
| `--graupl-disclosure-transition-duration` | Value for transition duration. | `var(--graupl-transition-duration-fast)` |
| `--graupl-disclosure-transition-timing-function` | Value for transition timing function. | `var(--graupl-transition-timing-function)` |
| `--graupl-disclosure-transition` | Value for transition. | `opacity var(--graupl-disclosure-transition-duration) var(--graupl-disclosure-transition-timing-function), block-size var(--graupl-disclosure-transition-duration) var(--graupl-disclosure-transition-timing-function)` |
| `--graupl-disclosure-transition-reduced-motion` | Value for transition reduced motion. | `opacity var(--graupl-disclosure-transition-duration) var(--graupl-disclosure-transition-timing-function)` |

## .disclosure-content properties

These are the default values for the `.disclosure-content` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-disclosure-content-border-color` | Value for content border color. | `var(--graupl-border-color)` |
| `--graupl-disclosure-content-padding-x` | Value for content padding (horizontal). | `var(--graupl-spacer-5)` |
| `--graupl-disclosure-content-padding-y` | Value for content padding (vertical). | `var(--graupl-spacer-5)` |
| `--graupl-disclosure-content-padding` | Value for content padding. | `var(--graupl-disclosure-content-padding-y) var(--graupl-disclosure-content-padding-x)` |
| `--graupl-disclosure-content-border-top-width` | Value for content border top width. | `var(--graupl-border-top-width)` |
| `--graupl-disclosure-content-border-right-width` | Value for content border right width. | `var(--graupl-border-right-width)` |
| `--graupl-disclosure-content-border-bottom-width` | Value for content border bottom width. | `var(--graupl-border-bottom-width)` |
| `--graupl-disclosure-content-border-left-width` | Value for content border left width. | `var(--graupl-border-left-width)` |
| `--graupl-disclosure-content-border-width` | Value for content border width. | `var(--graupl-disclosure-content-border-top-width) var(--graupl-disclosure-content-border-right-width) var(--graupl-disclosure-content-border-bottom-width) var(--graupl-disclosure-content-border-left-width)` |
| `--graupl-disclosure-content-border-top-style` | Value for content border top style. | `var(--graupl-border-top-style)` |
| `--graupl-disclosure-content-border-right-style` | Value for content border right style. | `var(--graupl-border-right-style)` |
| `--graupl-disclosure-content-border-bottom-style` | Value for content border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-disclosure-content-border-left-style` | Value for content border left style. | `var(--graupl-border-left-style)` |
| `--graupl-disclosure-content-border-style` | Value for content border style. | `var(--graupl-disclosure-content-border-top-style) var(--graupl-disclosure-content-border-right-style) var(--graupl-disclosure-content-border-bottom-style) var(--graupl-disclosure-content-border-left-style)` |
| `--graupl-disclosure-content-border-top-left-radius` | Value for content border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-disclosure-content-border-top-right-radius` | Value for content border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-disclosure-content-border-bottom-right-radius` | Value for content border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-disclosure-content-border-bottom-left-radius` | Value for content border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-disclosure-content-border-radius` | Value for content border radius. | `var(--graupl-disclosure-content-border-top-left-radius) var(--graupl-disclosure-content-border-top-right-radius) var(--graupl-disclosure-content-border-bottom-right-radius) var(--graupl-disclosure-content-border-bottom-left-radius)` |

## .disclosure-toggle properties

These are the default values for the `.disclosure-toggle` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-disclosure-toggle-transform` | Value for toggle transform. | `rotate(0deg)` |
| `--graupl-disclosure-toggle-open-transform` | Value for toggle open transform. | `rotate(-180deg)` |
| `--graupl-disclosure-toggle-content` | Value for toggle content. | `"'↓'"` |
| `--graupl-disclosure-toggle-transition` | Value for toggle transition. | `transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)` |
| `--graupl-disclosure-toggle-transition-reduced-motion` | Value for toggle transition reduced motion. | `none` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Default for selector base. | `"."` |
| `$modifier-selector-base` | Default for modifier selector base. | `"."` |
| `$disclosure-selector-base` | Default for disclosure selector base. | `"."` |
| `$disclosure-selector` | Default for disclosure selector. | `"disclosure"` |
| `$disclosure-content-selector-base` | Default for disclosure content selector base. | `"."` |
| `$disclosure-content-selector` | Default for disclosure content selector. | `"disclosure-content"` |
| `$disclosure-toggle-selector-base` | Default for disclosure toggle selector base. | `"."` |
| `$disclosure-toggle-selector` | Default for disclosure toggle selector. | `"disclosure-toggle"` |
| `$disclosure-open-selector-base` | Default for disclosure open selector base. | `"."` |
| `$disclosure-open-selector` | Default for disclosure open selector. | `"show"` |
| `$disclosure-closed-selector-base` | Default for disclosure closed selector base. | `"."` |
| `$disclosure-closed-selector` | Default for disclosure closed selector. | `"hide"` |
| `$disclosure-transitioning-selector-base` | Default for disclosure transitioning selector base. | `"."` |
| `$disclosure-transitioning-selector` | Default for disclosure transitioning selector. | `"transitioning"` |
| `$disclosure-show-display` | Default for disclosure show display. | `flex` |
| `$disclosure-hide-display` | Default for disclosure hide display. | `flex` |
| `$disclosure-transitioning-display` | Default for disclosure transitioning display. | `flex` |
| `$disclosure-show-block-size` | Default for disclosure show block size. | `100%` |
| `$disclosure-hide-block-size` | Default for disclosure hide block size. | `0` |
| `$disclosure-transitioning-block-size` | Default for disclosure transitioning block size. | `0` |
| `$disclosure-show-opacity` | Default for disclosure show opacity. | `1` |
| `$disclosure-hide-opacity` | Default for disclosure hide opacity. | `0` |
| `$disclosure-transitioning-opacity` | Default for disclosure transitioning opacity. | `0` |
| `$disclosure-toggle-content` | Default for disclosure toggle content. | `"'↓'"` |
| `$disclosure-toggle-transform` | Default for disclosure toggle transform. | `rotate(0deg)` |
| `$disclosure-toggle-open-transform` | Default for disclosure toggle open transform. | `rotate(-180deg)` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
