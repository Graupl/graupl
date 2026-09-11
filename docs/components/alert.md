<script setup>
  import { ref, computed, onMounted } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import AlertGenerator from "@graupl/core/src/alert/generator.js";

  onMounted(() => {AlertGenerator()});

  const background = ref("bg-primary-200");
  const content = ref("text-secondary-900");

  const exampleAlerts = computed(() => {

    const backgroundClasses = [
      background.value,
    ].filter(c => c !== null).join(" ");

    const contentClasses = [
      content.value
    ].filter(c => c !== null).join(" ");

    return `
<div class="alert ${backgroundClasses} ${contentClasses}">
  <div class="alert-header">
    <h3 class="alert-title">Alert</h3>
  </div>
  <div class="alert-body">
    <p>This is some text that describes the alert.</p>
  </div>
  <div class="alert-footer">
    <a href="#">Action</a>
  </div>
  <button class="alert-dismisser">x</button>
</div>
    `;
  });
</script>

# Alerts

<div class="alert">
  <div class="alert-header">
    <h3 class="alert-title">Alert</h3>
  </div>
  <div class="alert-body">
    <p>This is some text that describes the alert.</p>
  </div>
  <div class="alert-footer">
    <a href="#">Action</a>
  </div>
  <button class="alert-dismisser">x</button>
</div>

<br/>

The alert component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.alert` | The alert container |
| `.alert-body` | The alert body content |
| `.alert-header` | The alert header content |
| `.alert-footer` | The alert footer content |
| `.alert-title` | The alert title element |
| `.alert-dismisser` | The alert dismisser control |
| `.show` | Modifier applied when the alert is shown |
| `.hide` | Modifier applied when the alert is hidden |
| `.transitioning` | Modifier applied while the alert is transitioning |

<br/>

## .alert custom properties

These are the default values for the `.alert` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-alert-padding-x` | Value for alert padding horizontal. | `var(--graupl-spacer-5)` |
| `--graupl-alert-padding-y` | Value for alert padding vertical. | `var(--graupl-spacer-5)` |
| `--graupl-alert-padding` | Value for alert padding. | `var(--graupl-alert-padding-y) var(--graupl-alert-padding-x)` |
| `--graupl-alert-column-gap` | Value for alert column gap. | `var(--graupl-spacer-0)` |
| `--graupl-alert-row-gap` | Value for alert row gap. | `var(--graupl-spacer-3)` |
| `--graupl-alert-gap` | Value for alert gap. | `var(--graupl-alert-column-gap) var(--graupl-alert-row-gap)` |
| `--graupl-alert-background` | Value for alert background. | `var(--graupl-background)` |
| `--graupl-alert-color` | Value for alert color. | `var(--graupl-color)` |
| `--graupl-alert-link-color` | Value for alert link color. | `link-variables.var(--graupl-link-color)` |
| `--graupl-alert-link-visited-color` | Value for alert link visited color. | `var(--graupl-alert-link-color)` |
| `--graupl-alert-link-focus-color` | Value for alert link focus color. | `var(--graupl-alert-link-color)` |
| `--graupl-alert-link-hover-color` | Value for alert link hover color. | `link-variables.var(--graupl-link-hover-color)` |
| `--graupl-alert-link-active-color` | Value for alert link active color. | `var(--graupl-alert-link-hover-color)` |
| `--graupl-alert-link-disabled-color` | Value for alert link disabled color. | `link-variables.var(--graupl-link-disabled-color)` |
| `--graupl-alert-border-color` | Value for alert border color. | `var(--graupl-alert-color)` |
| `--graupl-alert-border-top-left-radius` | Value for alert border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-alert-border-top-right-radius` | Value for alert border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-alert-border-bottom-left-radius` | Value for alert border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-alert-border-bottom-right-radius` | Value for alert border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-alert-border-radius` | Value for alert border radius. | `var(--graupl-alert-border-top-left-radius) var(--graupl-alert-border-top-right-radius) var(--graupl-alert-border-bottom-right-radius) var(--graupl-alert-border-bottom-left-radius)` |
| `--graupl-alert-border-top-width` | Value for alert border top width. | `var(--graupl-border-top-width)` |
| `--graupl-alert-border-right-width` | Value for alert border right width. | `var(--graupl-border-right-width)` |
| `--graupl-alert-border-bottom-width` | Value for alert border bottom width. | `var(--graupl-border-bottom-width)` |
| `--graupl-alert-border-left-width` | Value for alert border left width. | `var(--graupl-border-left-width)` |
| `--graupl-alert-border-width` | Value for alert border width. | `var(--graupl-alert-border-top-width) var(--graupl-alert-border-right-width) var(--graupl-alert-border-bottom-width) var(--graupl-alert-border-left-width)` |
| `--graupl-alert-border-top-style` | Value for alert border top style. | `var(--graupl-border-top-style)` |
| `--graupl-alert-border-right-style` | Value for alert border right style. | `var(--graupl-border-right-style)` |
| `--graupl-alert-border-bottom-style` | Value for alert border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-alert-border-left-style` | Value for alert border left style. | `var(--graupl-border-left-style)` |
| `--graupl-alert-border-style` | Value for alert border style. | `var(--graupl-alert-border-top-style) var(--graupl-alert-border-right-style) var(--graupl-alert-border-bottom-style) var(--graupl-alert-border-left-style)` |
| `--graupl-alert-transition` | Value for alert transition. | `opacity var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)` |
| `--graupl-alert-transition-reduced-motion` | Value for alert transition reduced motion. | `opacity var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)` |

## .alert-header custom properties

These are the default values for the `.alert-header` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-alert-header-padding-x` | Value for alert header padding horizontal. | `0` |
| `--graupl-alert-header-padding-y` | Value for alert header padding vertical. | `0` |
| `--graupl-alert-header-padding` | Value for alert header padding. | `var(--graupl-alert-header-padding-y) var(--graupl-alert-header-padding-x)` |

## .alert-title custom properties

These are the default values for the `.alert-title` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-alert-title-color` | Value for alert title color. | `var(--graupl-alert-color)` |
| `--graupl-alert-title-font-size` | Value for alert title font size. | `var(--graupl-h4-font-size)` |
| `--graupl-alert-title-font-weight` | Value for alert title font weight. | `var(--graupl-h4-font-weight)` |
| `--graupl-alert-title-font-family` | Value for alert title font family. | `var(--graupl-h4-font-family)` |
| `--graupl-alert-title-line-height` | Value for alert title line height. | `var(--graupl-h4-line-height)` |
| `--graupl-alert-title-margin` | Value for alert title margin. | `0 0 0 0` |

## .alert-body custom properties

These are the default values for the `.alert-body` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-alert-body-padding-x` | Value for alert body padding horizontal. | `0` |
| `--graupl-alert-body-padding-y` | Value for alert body padding vertical. | `0` |
| `--graupl-alert-body-padding` | Value for alert body padding. | `var(--graupl-alert-body-padding-y) var(--graupl-alert-body-padding-x)` |

## .alert-footer custom properties

These are the default values for the `.alert-footer` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-alert-footer-padding-x` | Value for alert footer padding horizontal. | `0` |
| `--graupl-alert-footer-padding-y` | Value for alert footer padding vertical. | `0` |
| `--graupl-alert-footer-padding` | Value for alert footer padding. | `var(--graupl-alert-footer-padding-y) var(--graupl-alert-footer-padding-x)` |


## Alerts Live Example

<live-example :source-code="exampleAlerts" :key="background-content">
  <template #options>
    <div class="input-group">
      <label for="background">Alert Background Property</label>
      <select id="background" v-model="background">
        <option value="bg-primary">Primary</option>
        <option value="bg-primary-100">Primary 100</option>
        <option value="bg-primary-200">Primary 200</option>
        <option value="bg-primary-300">Primary 300</option>
        <option value="bg-primary-400">Primary 400</option>
        <option value="bg-primary-500">Primary 500</option>
        <option value="bg-primary-600">Primary 600</option>
        <option value="bg-primary-700">Primary 700</option>
        <option value="bg-primary-800">Primary 800</option>
        <option value="bg-primary-900">Primary 900</option>
        <option value="bg-secondary">Secondary</option>
        <option value="bg-secondary-100">Secondary 100</option>
        <option value="bg-secondary-200">Secondary 200</option>
        <option value="bg-secondary-300">Secondary 300</option>
        <option value="bg-secondary-400">Secondary 400</option>
        <option value="bg-secondary-500">Secondary 500</option>
        <option value="bg-secondary-600">Secondary 600</option>
        <option value="bg-secondary-700">Secondary 700</option>
        <option value="bg-secondary-800">Secondary 800</option>
        <option value="bg-secondary-900">Secondary 900</option>
        <option value="bg-tertiary">Tertiary</option>
        <option value="bg-tertiary-100">Tertiary 100</option>
        <option value="bg-tertiary-200">Tertiary 200</option>
        <option value="bg-tertiary-300">Tertiary 300</option>
        <option value="bg-tertiary-400">Tertiary 400</option>
        <option value="bg-tertiary-500">Tertiary 500</option>
        <option value="bg-tertiary-600">Tertiary 600</option>
        <option value="bg-tertiary-700">Tertiary 700</option>
        <option value="bg-tertiary-800">Tertiary 800</option>
        <option value="bg-tertiary-900">Tertiary 900</option>
        <option value="bg-inherit">Inherit</option>
        <option value="bg-current">Current</option>
        <option value="bg-transparent">Transparent</option>
      </select>
    </div>
    <div class="input-group">
      <label for="content">Alert Color Property</label>
      <select id="content" v-model="content">
        <option value="text-primary">Primary</option>
        <option value="text-primary-100">Primary 100</option>
        <option value="text-primary-200">Primary 200</option>
        <option value="text-primary-300">Primary 300</option>
        <option value="text-primary-400">Primary 400</option>
        <option value="text-primary-500">Primary 500</option>
        <option value="text-primary-600">Primary 600</option>
        <option value="text-primary-700">Primary 700</option>
        <option value="text-primary-800">Primary 800</option>
        <option value="text-primary-900">Primary 900</option>
        <option value="text-secondary">Secondary</option>
        <option value="text-secondary-100">Secondary 100</option>
        <option value="text-secondary-200">Secondary 200</option>
        <option value="text-secondary-300">Secondary 300</option>
        <option value="text-secondary-400">Secondary 400</option>
        <option value="text-secondary-500">Secondary 500</option>
        <option value="text-secondary-600">Secondary 600</option>
        <option value="text-secondary-700">Secondary 700</option>
        <option value="text-secondary-800">Secondary 800</option>
        <option value="text-secondary-900">Secondary 900</option>
        <option value="text-tertiary">Tertiary</option>
        <option value="text-tertiary-100">Tertiary 100</option>
        <option value="text-tertiary-200">Tertiary 200</option>
        <option value="text-tertiary-300">Tertiary 300</option>
        <option value="text-tertiary-400">Tertiary 400</option>
        <option value="text-tertiary-500">Tertiary 500</option>
        <option value="text-tertiary-600">Tertiary 600</option>
        <option value="text-tertiary-700">Tertiary 700</option>
        <option value="text-tertiary-800">Tertiary 800</option>
        <option value="text-tertiary-900">Tertiary 900</option>
        <option value="text-inherit">Inherit</option>
        <option value="text-current">Current</option>
        <option value="text-transparent">Transparent</option>
      </select>
    </div>
  </template>
</live-example>

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Default for selector base. | `"."` |
| `$modifier-selector-base` | Default for modifier selector base. | `"."` |
| `$generate-base-theme-map` | Default for generate base theme map. | `true` |
| `$themeable` | Default for themeable. | `false` |
| `$accordion-selector-base` | Default for accordion selector base. | `"."` |
| `$accordion-selector` | Default for accordion selector. | `"accordion"` |
| `$accordion-theme-selector-base` | Default for accordion theme selector base. | `"."` |
| `$accordion-theme-selector-prefix` | Default for accordion theme selector prefix. | `""` |
| `$accordion-item-selector-base` | Default for accordion item selector base. | `"."` |
| `$accordion-item-selector` | Default for accordion item selector. | `"accordion-item"` |
| `$accordion-item-header-selector-base` | Default for accordion item header selector base. | `"."` |
| `$accordion-item-header-selector` | Default for accordion item header selector. | `"accordion-item-header"` |
| `$accordion-item-title-selector-base` | Default for accordion item title selector base. | `"."` |
| `$accordion-item-title-selector` | Default for accordion item title selector. | `"accordion-item-title"` |
| `$accordion-item-toggle-selector-base` | Default for accordion item toggle selector base. | `"."` |
| `$accordion-item-toggle-selector` | Default for accordion item toggle selector. | `"accordion-item-toggle"` |
| `$accordion-item-content-selector-base` | Default for accordion item content selector base. | `"."` |
| `$accordion-item-content-selector` | Default for accordion item content selector. | `"accordion-item-content"` |
| `$accordion-item-body-selector-base` | Default for accordion item body selector base. | `"."` |
| `$accordion-item-body-selector` | Default for accordion item body selector. | `"accordion-item-body"` |
| `$accordion-item-footer-selector-base` | Default for accordion item footer selector base. | `"."` |
| `$accordion-item-footer-selector` | Default for accordion item footer selector. | `"accordion-item-footer"` |
| `$accordion-item-open-selector-base` | Default for accordion item open selector base. | `"."` |
| `$accordion-item-open-selector` | Default for accordion item open selector. | `"show"` |
| `$accordion-item-close-selector-base` | Default for accordion item close selector base. | `"."` |
| `$accordion-item-close-selector` | Default for accordion item close selector. | `"hide"` |
| `$accordion-item-transition-selector-base` | Default for accordion item transition selector base. | `"."` |
| `$accordion-item-transition-selector` | Default for accordion item transition selector. | `"transitioning"` |
| `$accordion-item-toggle-pseudo-selector` | Default for accordion item toggle pseudo selector. | `"after"` |
| `$accordion-expand-selector-base` | Default for accordion expand selector base. | `"."` |
| `$accordion-expand-selector` | Default for accordion expand selector. | `".expand-all"` |
| `$accordion-collapse-selector-base` | Default for accordion collapse selector base. | `"."` |
| `$accordion-collapse-selector` | Default for accordion collapse selector. | `".collapse-all"` |
| `$accordion-control-selector-base` | Default for accordion control selector base. | `"."` |
| `$accordion-control-selector` | Default for accordion control selector. | `"accordion-control"` |
| `$accordion-control-container-selector-base` | Default for accordion control container selector base. | `"."` |
| `$accordion-control-container-selector` | Default for accordion control container selector. | `"accordion-control-container"` |
| `$accordion-item-toggle-initial-transform` | Default for accordion item toggle initial transform. | `none` |
| `$accordion-item-toggle-final-transform` | Default for accordion item toggle final transform. | `none` |
| `$accordion-item-toggle-disabled-transform` | Default for accordion item toggle disabled transform. | `none` |
| `$accordion-item-toggle-pseudo-initial-transform` | Default for accordion item toggle pseudo initial transform. | `none` |
| `$accordion-item-toggle-pseudo-content` | Default for accordion item toggle pseudo content. | `"▼"` |
| `$accordion-item-content-initial-transform` | Default for accordion item content initial transform. | `translateY(-100%)` |
| `$accordion-item-content-final-transform` | Default for accordion item content final transform. | `translateY(0)` |
| `$accordion-theme-mappings` | Default for accordion theme mappings. | `()` |
| `$accordion-theme-map` | Default for accordion theme map. | `()` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
