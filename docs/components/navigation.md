<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import generate from "../../packages/core/src/js/navigation/generator.js";

  const exampleNavigations = computed(() => {
    return `
<nav class="navigation">
  <a class="navigation-branding" href="#">Graupl</a>
  <button class="navigation-toggle"
    aria-label="Toggle navigation"></button>
  <ul class="menu">
    <li class="menu-item"><a class="menu-link" href="#">Home</a></li>
    <li class="menu-item submenu-item">
      <button class="menu-link button link submenu-toggle">
        About
      </button>
      <ul class="submenu">
        <li class="menu-item">
          <a class="menu-link" href="#">About Us</a>
        </li>
        <li class="menu-item">
          <a class="menu-link" href="#">Our Team</a>
        </li>
        <li class="menu-item">
          <a class="menu-link" href="#">Our Mission</a>
        </li>
      </ul>
    </li>
    <li class="menu-item"><a class="menu-link" href="#">Blog</a></li>
    <li class="menu-item">
      <a class="menu-link" href="#">Portfolio</a>
    </li>
    <li class="menu-item">
      <a class="menu-link button tertiary" href="#">Contact</a>
    </li>
  </ul>
</nav>
  `
  });
</script>

# Navigations

<live-example :source-code="exampleNavigations" @mounted="generate()" @updated="generate()">
</live-example>

<br/>

The navigation component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
|`.navigation` | The navigation container. |
|`.navigation-toggle` | The navigation toggle control. |
|`.navigation-branding` | The branding link/label. |

## .navigation properties

These are the default values for the `.navigation` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-navigation-background` | Value for navigation background. | `var(--graupl-background)` |
| `--graupl-navigation-color` | Value for navigation color. | `var(--graupl-color)` |

## .navigation-toggle properties

These are the default values for the `.navigation-toggle` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-navigation-toggle-min-width` | Value for navigation toggle min width. | `44px` |
| `--graupl-navigation-toggle-min-height` | Value for navigation toggle min height. | `44px` |
| `--graupl-navigation-toggle-padding-x` | Value for navigation toggle padding horizontal. | `var(--graupl-spacer-5)` |
| `--graupl-navigation-toggle-padding-y` | Value for navigation toggle padding vertical. | `var(--graupl-spacer-3)` |
| `--graupl-navigation-toggle-padding` | Value for navigation toggle padding. | `var(--graupl-navigation-toggle-padding-y) var(--graupl-navigation-toggle-padding-x)` |
| `--graupl-navigation-toggle-background` | Value for navigation toggle background. | `var(--graupl-navigation-background)` |
| `--graupl-navigation-toggle-visited-background` | Value for navigation toggle visited background. | `var(--graupl-navigation-toggle-background)` |
| `--graupl-navigation-toggle-focus-background` | Value for navigation toggle focus background. | `var(--graupl-navigation-toggle-background)` |
| `--graupl-navigation-toggle-hover-background` | Value for navigation toggle hover background. | `var(--graupl-navigation-color)` |
| `--graupl-navigation-toggle-active-background` | Value for navigation toggle active background. | `var(--graupl-navigation-toggle-hover-background)` |
| `--graupl-navigation-toggle-disabled-background` | Value for navigation toggle disabled background. | `var(--graupl-navigation-background)` |
| `--graupl-navigation-toggle-color` | Value for navigation toggle color. | `var(--graupl-navigation-color)` |
| `--graupl-navigation-toggle-visited-color` | Value for navigation toggle visited color. | `var(--graupl-navigation-background)` |
| `--graupl-navigation-toggle-focus-color` | Value for navigation toggle focus color. | `var(--graupl-navigation-background)` |
| `--graupl-navigation-toggle-hover-color` | Value for navigation toggle hover color. | `var(--graupl-navigation-background)` |
| `--graupl-navigation-toggle-active-color` | Value for navigation toggle active color. | `var(--graupl-navigation-background)` |
| `--graupl-navigation-toggle-disabled-color` | Value for navigation toggle disabled color. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-navigation-toggle-border-top-width` | Value for navigation toggle border top width. | `var(--graupl-border-top-width)` |
| `--graupl-navigation-toggle-border-right-width` | Value for navigation toggle border right width. | `var(--graupl-border-right-width)` |
| `--graupl-navigation-toggle-border-bottom-width` | Value for navigation toggle border bottom width. | `var(--graupl-border-bottom-width)` |
| `--graupl-navigation-toggle-border-left-width` | Value for navigation toggle border left width. | `var(--graupl-border-left-width)` |
| `--graupl-navigation-toggle-border-width` | Value for navigation toggle border width. | `var(--graupl-navigation-toggle-border-top-width) var(--graupl-navigation-toggle-border-right-width) var(--graupl-navigation-toggle-border-bottom-width) var(--graupl-navigation-toggle-border-left-width)` |
| `--graupl-navigation-toggle-border-top-style` | Value for navigation toggle border top style. | `var(--graupl-border-top-style)` |
| `--graupl-navigation-toggle-border-right-style` | Value for navigation toggle border right style. | `var(--graupl-border-right-style)` |
| `--graupl-navigation-toggle-border-bottom-style` | Value for navigation toggle border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-navigation-toggle-border-left-style` | Value for navigation toggle border left style. | `var(--graupl-border-left-style)` |
| `--graupl-navigation-toggle-border-style` | Value for navigation toggle border style. | `var(--graupl-navigation-toggle-border-top-style) var(--graupl-navigation-toggle-border-right-style) var(--graupl-navigation-toggle-border-bottom-style) var(--graupl-navigation-toggle-border-left-style)` |
| `--graupl-navigation-toggle-border-color` | Value for navigation toggle border color. | `var(--graupl-navigation-toggle-color)` |
| `--graupl-navigation-toggle-visited-border-color` | Value for navigation toggle visited border color. | `var(--graupl-navigation-toggle-border-color)` |
| `--graupl-navigation-toggle-focus-border-color` | Value for navigation toggle focus border color. | `var(--graupl-navigation-toggle-border-color)` |
| `--graupl-navigation-toggle-hover-border-color` | Value for navigation toggle hover border color. | `var(--graupl-navigation-toggle-hover-color)` |
| `--graupl-navigation-toggle-active-border-color` | Value for navigation toggle active border color. | `var(--graupl-navigation-toggle-hover-border-color)` |
| `--graupl-navigation-toggle-disabled-border-color` | Value for navigation toggle disabled border color. | `var(--graupl-navigation-toggle-disabled-color)` |
| `--graupl-navigation-toggle-border-top-left-radius` | Value for navigation toggle border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-navigation-toggle-border-top-right-radius` | Value for navigation toggle border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-navigation-toggle-border-bottom-right-radius` | Value for navigation toggle border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-navigation-toggle-border-bottom-left-radius` | Value for navigation toggle border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-navigation-toggle-border-radius` | Value for navigation toggle border radius. | `var(--graupl-navigation-toggle-border-top-left-radius) var(--graupl-navigation-toggle-border-top-right-radius) var(--graupl-navigation-toggle-border-bottom-right-radius) var(--graupl-navigation-toggle-border-bottom-left-radius)` |
| `--graupl-navigation-toggle-content` | Value for navigation toggle content. | `'☰'` |

## .navigation-branding properties

These are the default values for the `.navigation-branding` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-navigation-branding-padding-x` | Value for navigation branding padding horizontal. | `var(--graupl-spacer-3)` |
| `--graupl-navigation-branding-padding-y` | Value for navigation branding padding vertical. | `var(--graupl-spacer-2)` |
| `--graupl-navigation-branding-padding` | Value for navigation branding padding. | `var(--graupl-navigation-branding-padding-y) var(--graupl-navigation-branding-padding-x)` |
| `--graupl-navigation-branding-font-size` | Value for navigation branding font size. | `var(--graupl-font-size-lg)` |
| `--graupl-navigation-branding-font-weight` | Value for navigation branding font weight. | `var(--graupl-font-weight-bold)` |
| `--graupl-navigation-branding-color` | Value for navigation branding color. | `var(--graupl-navigation-color)` |
| `--graupl-navigation-branding-visited-color` | Value for navigation branding visited color. | `var(--graupl-navigation-branding-color)` |
| `--graupl-navigation-branding-focus-color` | Value for navigation branding focus color. | `var(--graupl-navigation-branding-color)` |
| `--graupl-navigation-branding-hover-color` | Value for navigation branding hover color. | `var(--graupl-navigation-color)` |
| `--graupl-navigation-branding-active-color` | Value for navigation branding active color. | `var(--graupl-navigation-branding-hover-color)` |
| `--graupl-navigation-branding-disabled-color` | Value for navigation branding disabled color. | `var(--graupl-navigation-color)` |
| `--graupl-navigation-branding-text-decoration` | Value for navigation branding text decoration. | `none` |
| `--graupl-navigation-branding-visited-text-decoration` | Value for navigation branding visited text decoration. | `var(--graupl-navigation-branding-text-decoration)` |
| `--graupl-navigation-branding-focus-text-decoration` | Value for navigation branding focus text decoration. | `var(--graupl-navigation-branding-text-decoration)` |
| `--graupl-navigation-branding-hover-text-decoration` | Value for navigation branding hover text decoration. | `none` |
| `--graupl-navigation-branding-active-text-decoration` | Value for navigation branding active text decoration. | `var(--graupl-navigation-branding-hover-text-decoration)` |
| `--graupl-navigation-branding-disabled-text-decoration` | Value for navigation branding disabled text decoration. | `none` |
| `--graupl-navigation-branding-text-decoration-style` | Value for navigation branding text decoration style. | `solid` |
| `--graupl-navigation-branding-visited-text-decoration-style` | Value for navigation branding visited text decoration style. | `var(--graupl-navigation-branding-text-decoration-style)` |
| `--graupl-navigation-branding-focus-text-decoration-style` | Value for navigation branding focus text decoration style. | `var(--graupl-navigation-branding-text-decoration-style)` |
| `--graupl-navigation-branding-hover-text-decoration-style` | Value for navigation branding hover text decoration style. | `solid` |
| `--graupl-navigation-branding-active-text-decoration-style` | Value for navigation branding active text decoration style. | `var(--graupl-navigation-branding-hover-text-decoration-style)` |
| `--graupl-navigation-branding-disabled-text-decoration-style` | Value for navigation branding disabled text decoration style. | `solid` |
| `--graupl-navigation-branding-text-decoration-thickness` | Value for navigation branding text decoration thickness. | `var(--graupl-border-width)` |
| `--graupl-navigation-branding-visited-text-decoration-thickness` | Value for navigation branding visited text decoration thickness. | `var(--graupl-navigation-branding-text-decoration-thickness)` |
| `--graupl-navigation-branding-focus-text-decoration-thickness` | Value for navigation branding focus text decoration thickness. | `var(--graupl-navigation-branding-text-decoration-thickness)` |
| `--graupl-navigation-branding-hover-text-decoration-thickness` | Value for navigation branding hover text decoration thickness. | `var(--graupl-border-width)` |
| `--graupl-navigation-branding-active-text-decoration-thickness` | Value for navigation branding active text decoration thickness. | `var(--graupl-navigation-branding-hover-text-decoration-thickness)` |
| `--graupl-navigation-branding-disabled-text-decoration-thickness` | Value for navigation branding disabled text decoration thickness. | `var(--graupl-border-width)` |
| `--graupl-navigation-branding-text-decoration-color` | Value for navigation branding text decoration color. | `var(--graupl-navigation-branding-color)` |
| `--graupl-navigation-branding-visited-text-decoration-color` | Value for navigation branding visited text decoration color. | `var(--graupl-navigation-branding-visited-color)` |
| `--graupl-navigation-branding-focus-text-decoration-color` | Value for navigation branding focus text decoration color. | `var(--graupl-navigation-branding-focus-color)` |
| `--graupl-navigation-branding-hover-text-decoration-color` | Value for navigation branding hover text decoration color. | `var(--graupl-navigation-branding-hover-color)` |
| `--graupl-navigation-branding-active-text-decoration-color` | Value for navigation branding active text decoration color. | `var(--graupl-navigation-branding-active-color)` |
| `--graupl-navigation-branding-disabled-text-decoration-color` | Value for navigation branding disabled text decoration color. | `var(--graupl-navigation-branding-disabled-color)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Default for selector base. | `"."` |
| `$modifier-selector-base` | Default for modifier selector base. | `"."` |
| `$generate-base-theme-map` | Default for generate base theme map. | `true` |
| `$themeable` | Default for themeable. | `false` |
| `$navigation-selector-base` | Default for navigation selector base. | `"."` |
| `$navigation-selector` | Default for navigation selector. | `"navigation"` |
| `$navigation-theme-selector-base` | Default for navigation theme selector base. | `"."` |
| `$navigation-theme-selector-prefix` | Default for navigation theme selector prefix. | `""` |
| `$navigation-toggle-selector-base` | Default for navigation toggle selector base. | `"."` |
| `$navigation-toggle-selector` | Default for navigation toggle selector. | `"navigation-toggle"` |
| `$navigation-branding-selector-base` | Default for navigation branding selector base. | `"."` |
| `$navigation-branding-selector` | Default for navigation branding selector. | `"navigation-branding"` |
| `$navigation-toggle-content` | Default for navigation toggle content. | `"'☰'"` |
| `$navigation-branding-initial-text-decoration` | Default for navigation branding initial text decoration. | `none` |
| `$navigation-branding-final-text-decoration` | Default for navigation branding final text decoration. | `none` |
| `$navigation-branding-disabled-text-decoration` | Default for navigation branding disabled text decoration. | `none` |
| `$navigation-branding-initial-text-decoration-style` | Default for navigation branding initial text decoration style. | `solid` |
| `$navigation-branding-final-text-decoration-style` | Default for navigation branding final text decoration style. | `solid` |
| `$navigation-branding-disabled-text-decoration-style` | Default for navigation branding disabled text decoration style. | `solid` |
| `$navigation-theme-mappings` | Default for navigation theme mappings. | `()` |
| `$navigation-theme-map` | Default for navigation theme map. | `()` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
