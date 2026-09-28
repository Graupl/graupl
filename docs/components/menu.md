<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const exampleMenus = computed(() => {
    return `
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
    `
  });
</script>

# Menus

<live-example :source-code="exampleMenus">
</live-example>

<br/>

The menu component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.menu` | The menu container. |
| `.submenu` | The submenu container. |
| `.menu-item` | A menu item. |
| `.menu-link` | The menu link inside a menu item. |
| `.submenu-toggle` | The submenu toggle control. |
| `.show` | Modifier applied when menus/submenus are shown. |
| `.hide` | Modifier applied when menus/submenus are hidden. |

## .menu properties

These are the default values for the `.menu` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-menu-flex-direction` | Value for menu flex direction. | `row` |
| `--graupl-menu-padding-x` | Value for menu padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-menu-padding-y` | Value for menu padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-menu-padding` | Value for menu padding. | `var(--graupl-menu-padding-y) var(--graupl-menu-padding-x)` |
| `--graupl-menu-column-gap` | Value for menu column gap. | `var(--graupl-spacer-0)` |
| `--graupl-menu-row-gap` | Value for menu row gap. | `var(--graupl-spacer-0)` |
| `--graupl-menu-gap` | Value for menu gap. | `var(--graupl-menu-column-gap) var(--graupl-menu-row-gap)` |
| `--graupl-menu-show-display` | Value for menu show display. | `flex` |
| `--graupl-menu-hide-display` | Value for menu hide display. | `none` |
| `--graupl-menu-display` | Value for menu display. | `flex` |
| `--graupl-menu-background` | Value for menu background. | `var(--graupl-background)` |
| `--graupl-menu-color` | Value for menu color. | `var(--graupl-color)` |
| `--graupl-menu-border-color` | Value for menu border color. | `var(--graupl-menu-color)` |
| `--graupl-menu-border-top-left-radius` | Value for menu border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-menu-border-top-right-radius` | Value for menu border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-menu-border-bottom-left-radius` | Value for menu border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-menu-border-bottom-right-radius` | Value for menu border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-menu-border-radius` | Value for menu border radius. | `var(--graupl-menu-border-top-left-radius) var(--graupl-menu-border-top-right-radius) var(--graupl-menu-border-bottom-right-radius) var(--graupl-menu-border-bottom-left-radius)` |
| `--graupl-menu-border-top-width` | Value for menu border top width. | `0` |
| `--graupl-menu-border-right-width` | Value for menu border right width. | `0` |
| `--graupl-menu-border-bottom-width` | Value for menu border bottom width. | `0` |
| `--graupl-menu-border-left-width` | Value for menu border left width. | `0` |
| `--graupl-menu-border-width` | Value for menu border width. | `var(--graupl-menu-border-top-width) var(--graupl-menu-border-right-width) var(--graupl-menu-border-bottom-width) var(--graupl-menu-border-left-width)` |
| `--graupl-menu-border-top-style` | Value for menu border top style. | `var(--graupl-border-top-style)` |
| `--graupl-menu-border-right-style` | Value for menu border right style. | `var(--graupl-border-right-style)` |
| `--graupl-menu-border-bottom-style` | Value for menu border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-menu-border-left-style` | Value for menu border left style. | `var(--graupl-border-left-style)` |
| `--graupl-menu-border-style` | Value for menu border style. | `var(--graupl-menu-border-top-style) var(--graupl-menu-border-right-style) var(--graupl-menu-border-bottom-style) var(--graupl-menu-border-left-style)` |

## .submenu properties

These are the default values for the `.submenu` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-submenu-flex-direction` | Value for menu submenu flex direction. | `column` |
| `--graupl-submenu-z-index` | Value for menu submenu depth index. | `2` |
| `--graupl-submenu-padding-x` | Value for menu submenu padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-submenu-padding-y` | Value for menu submenu padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-submenu-padding` | Value for menu submenu padding. | `var(--graupl-submenu-padding-y) var(--graupl-submenu-padding-x)` |
| `--graupl-submenu-column-gap` | Value for menu submenu column gap. | `var(--graupl-menu-column-gap)` |
| `--graupl-submenu-row-gap` | Value for menu submenu row gap. | `var(--graupl-menu-row-gap)` |
| `--graupl-submenu-gap` | Value for menu submenu gap. | `var(--graupl-submenu-column-gap) var(--graupl-submenu-row-gap)` |
| `--graupl-submenu-show-display` | Value for menu submenu show display. | `flex` |
| `--graupl-submenu-hide-display` | Value for menu submenu hide display. | `none` |
| `--graupl-submenu-display` | Value for menu submenu display. | `none` |
| `--graupl-submenu-background` | Value for menu submenu background. | `var(--graupl-menu-background)` |
| `--graupl-submenu-color` | Value for menu submenu color. | `var(--graupl-menu-color)` |
| `--graupl-submenu-border-color` | Value for menu submenu border color. | `var(--graupl-menu-border-color)` |
| `--graupl-submenu-border-top-left-radius` | Value for menu submenu border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-submenu-border-top-right-radius` | Value for menu submenu border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-submenu-border-bottom-left-radius` | Value for menu submenu border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-submenu-border-bottom-right-radius` | Value for menu submenu border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-submenu-border-radius` | Value for menu submenu border radius. | `var(--graupl-submenu-border-top-left-radius) var(--graupl-submenu-border-top-right-radius) var(--graupl-submenu-border-bottom-right-radius) var(--graupl-submenu-border-bottom-left-radius)` |
| `--graupl-submenu-border-top-width` | Value for menu submenu border top width. | `var(--graupl-border-top-width)` |
| `--graupl-submenu-border-right-width` | Value for menu submenu border right width. | `var(--graupl-border-right-width)` |
| `--graupl-submenu-border-bottom-width` | Value for menu submenu border bottom width. | `var(--graupl-border-bottom-width)` |
| `--graupl-submenu-border-left-width` | Value for menu submenu border left width. | `var(--graupl-border-left-width)` |
| `--graupl-submenu-border-width` | Value for menu submenu border width. | `var(--graupl-submenu-border-top-width) var(--graupl-submenu-border-right-width) var(--graupl-submenu-border-bottom-width) var(--graupl-submenu-border-left-width)` |
| `--graupl-submenu-border-top-style` | Value for menu submenu border top style. | `var(--graupl-border-top-style)` |
| `--graupl-submenu-border-right-style` | Value for menu submenu border right style. | `var(--graupl-border-right-style)` |
| `--graupl-submenu-border-bottom-style` | Value for menu submenu border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-submenu-border-left-style` | Value for menu submenu border left style. | `var(--graupl-border-left-style)` |
| `--graupl-submenu-border-style` | Value for menu submenu border style. | `var(--graupl-submenu-border-top-style) var(--graupl-submenu-border-right-style) var(--graupl-submenu-border-bottom-style) var(--graupl-submenu-border-left-style)` |
| `--graupl-submenu-position` | Value for menu submenu position. | `absolute` |
| `--graupl-submenu-top` | Value for menu submenu top. | `100%` |
| `--graupl-submenu-right` | Value for menu submenu right. | `auto` |
| `--graupl-submenu-bottom` | Value for menu submenu bottom. | `auto` |
| `--graupl-submenu-left` | Value for menu submenu left. | `0` |
| `--graupl-submenu-inset` | Value for menu submenu inset. | `100% auto auto 0` |
| `--graupl-submenu-item-width` | Value for menu submenu item width. | `100%` |

## .menu-item properties

These are the default values for the `.menu` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-menu-item-min-width` | Value for menu item min width. | `min-content` |
| `--graupl-menu-item-max-width` | Value for menu item max width. | `100%` |
| `--graupl-menu-item-padding-x` | Value for menu item padding horizontal. | `var(--graupl-spacer-0)` |
| `--graupl-menu-item-padding-y` | Value for menu item padding vertical. | `var(--graupl-spacer-0)` |
| `--graupl-menu-item-padding` | Value for menu item padding. | `var(--graupl-menu-item-padding-y) var(--graupl-menu-item-padding-x)` |

## .menu-link properties

These are the default values for the `.menu` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-menu-link-padding-x` | Value for menu link padding horizontal. | `var(--graupl-spacer-5)` |
| `--graupl-menu-link-padding-y` | Value for menu link padding vertical. | `var(--graupl-spacer-3)` |
| `--graupl-menu-link-padding` | Value for menu link padding. | `var(--graupl-menu-link-padding-y) var(--graupl-menu-link-padding-x)` |
| `--graupl-menu-link-transition` | Value for menu link transition. | `background var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function), color var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)` |
| `--graupl-menu-link-transition-reduced-motion` | Value for menu link transition reduced motion. | `background var(--graupl-transition-duration-none) var(--graupl-transition-timing-function), color var(--graupl-transition-duration-none) var(--graupl-transition-timing-function)` |
| `--graupl-menu-link-transform` | Value for menu link transform. | `none` |
| `--graupl-menu-link-visited-transform` | Value for menu link visited transform. | `var(--graupl-menu-link-transform)` |
| `--graupl-menu-link-focus-transform` | Value for menu link focus transform. | `var(--graupl-menu-link-transform)` |
| `--graupl-menu-link-hover-transform` | Value for menu link hover transform. | `none` |
| `--graupl-menu-link-active-transform` | Value for menu link active transform. | `var(--graupl-menu-link-hover-transform)` |
| `--graupl-menu-link-disabled-transform` | Value for menu link disabled transform. | `none` |
| `--graupl-menu-link-column-gap` | Value for menu link column gap. | `var(--graupl-menu-link-padding-x)` |
| `--graupl-menu-link-row-gap` | Value for menu link row gap. | `var(--graupl-spacer-0)` |
| `--graupl-menu-link-gap` | Value for menu link gap. | `var(--graupl-menu-link-column-gap) var(--graupl-menu-link-row-gap)` |
| `--graupl-menu-link-background` | Value for menu link background. | `var(--graupl-menu-background)` |
| `--graupl-menu-link-visited-background` | Value for menu link visited background. | `var(--graupl-menu-link-background)` |
| `--graupl-menu-link-focus-background` | Value for menu link focus background. | `var(--graupl-menu-link-background)` |
| `--graupl-menu-link-hover-background` | Value for menu link hover background. | `var(--graupl-menu-color)` |
| `--graupl-menu-link-active-background` | Value for menu link active background. | `var(--graupl-menu-link-hover-background)` |
| `--graupl-menu-link-disabled-background` | Value for menu link disabled background. | `var(--graupl-background)` |
| `--graupl-menu-link-color` | Value for menu link color. | `var(--graupl-menu-color)` |
| `--graupl-menu-link-visited-color` | Value for menu link visited color. | `var(--graupl-menu-link-color)` |
| `--graupl-menu-link-focus-color` | Value for menu link focus color. | `var(--graupl-menu-link-color)` |
| `--graupl-menu-link-hover-color` | Value for menu link hover color. | `var(--graupl-menu-background)` |
| `--graupl-menu-link-active-color` | Value for menu link active color. | `var(--graupl-menu-link-hover-color)` |
| `--graupl-menu-link-disabled-color` | Value for menu link disabled color. | `var(--graupl-theme-active--primary--200)` |
| `--graupl-menu-link-text-decoration` | Value for menu link text decoration. | `none` |
| `--graupl-menu-link-visited-text-decoration` | Value for menu link visited text decoration. | `var(--graupl-menu-link-text-decoration)` |
| `--graupl-menu-link-focus-text-decoration` | Value for menu link focus text decoration. | `var(--graupl-menu-link-text-decoration)` |
| `--graupl-menu-link-hover-text-decoration` | Value for menu link hover text decoration. | `none` |
| `--graupl-menu-link-active-text-decoration` | Value for menu link active text decoration. | `var(--graupl-menu-link-hover-text-decoration)` |
| `--graupl-menu-link-disabled-text-decoration` | Value for menu link disabled text decoration. | `none` |
| `--graupl-menu-link-text-decoration-thickness` | Value for menu link text decoration thickness. | `var(--graupl-border-width)` |
| `--graupl-menu-link-visited-text-decoration-thickness` | Value for menu link visited text decoration thickness. | `var(--graupl-menu-link-text-decoration-thickness)` |
| `--graupl-menu-link-focus-text-decoration-thickness` | Value for menu link focus text decoration thickness. | `var(--graupl-menu-link-text-decoration-thickness)` |
| `--graupl-menu-link-hover-text-decoration-thickness` | Value for menu link hover text decoration thickness. | `var(--graupl-border-width)` |
| `--graupl-menu-link-active-text-decoration-thickness` | Value for menu link active text decoration thickness. | `var(--graupl-menu-link-hover-text-decoration-thickness)` |
| `--graupl-menu-link-disabled-text-decoration-thickness` | Value for menu link disabled text decoration thickness. | `var(--graupl-border-width)` |
| `--graupl-menu-link-text-decoration-style` | Value for menu link text decoration style. | `solid` |
| `--graupl-menu-link-visited-text-decoration-style` | Value for menu link visited text decoration style. | `var(--graupl-menu-link-text-decoration-style)` |
| `--graupl-menu-link-focus-text-decoration-style` | Value for menu link focus text decoration style. | `var(--graupl-menu-link-text-decoration-style)` |
| `--graupl-menu-link-hover-text-decoration-style` | Value for menu link hover text decoration style. | `solid` |
| `--graupl-menu-link-active-text-decoration-style` | Value for menu link active text decoration style. | `var(--graupl-menu-link-hover-text-decoration-style)` |
| `--graupl-menu-link-disabled-text-decoration-style` | Value for menu link disabled text decoration style. | `solid` |
| `--graupl-menu-link-text-decoration-color` | Value for menu link text decoration color. | `var(--graupl-menu-link-color)` |
| `--graupl-menu-link-visited-text-decoration-color` | Value for menu link visited text decoration color. | `var(--graupl-menu-link-visited-color)` |
| `--graupl-menu-link-focus-text-decoration-color` | Value for menu link focus text decoration color. | `var(--graupl-menu-link-focus-color)` |
| `--graupl-menu-link-hover-text-decoration-color` | Value for menu link hover text decoration color. | `var(--graupl-menu-link-hover-color)` |
| `--graupl-menu-link-active-text-decoration-color` | Value for menu link active text decoration color. | `var(--graupl-menu-link-active-color)` |
| `--graupl-menu-link-disabled-text-decoration-color` | Value for menu link disabled text decoration color. | `var(--graupl-menu-link-disabled-color)` |
| `--graupl-menu-link-border-top-left-radius` | Value for menu link border top left radius. | `var(--graupl-border-top-left-radius)` |
| `--graupl-menu-link-border-top-right-radius` | Value for menu link border top right radius. | `var(--graupl-border-top-right-radius)` |
| `--graupl-menu-link-border-bottom-left-radius` | Value for menu link border bottom left radius. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-menu-link-border-bottom-right-radius` | Value for menu link border bottom right radius. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-menu-link-border-radius` | Value for menu link border radius. | `var(--graupl-menu-link-border-top-left-radius) var(--graupl-menu-link-border-top-right-radius) var(--graupl-menu-link-border-bottom-right-radius) var(--graupl-menu-link-border-bottom-left-radius)` |
| `--graupl-menu-link-border-top-width` | Value for menu link border top width. | `0` |
| `--graupl-menu-link-border-right-width` | Value for menu link border right width. | `0` |
| `--graupl-menu-link-border-bottom-width` | Value for menu link border bottom width. | `0` |
| `--graupl-menu-link-border-left-width` | Value for menu link border left width. | `0` |
| `--graupl-menu-link-border-width` | Value for menu link border width. | `var(--graupl-menu-link-border-top-width) var(--graupl-menu-link-border-right-width) var(--graupl-menu-link-border-bottom-width) var(--graupl-menu-link-border-left-width)` |
| `--graupl-menu-link-border-top-style` | Value for menu link border top style. | `var(--graupl-border-top-style)` |
| `--graupl-menu-link-border-right-style` | Value for menu link border right style. | `var(--graupl-border-right-style)` |
| `--graupl-menu-link-border-bottom-style` | Value for menu link border bottom style. | `var(--graupl-border-bottom-style)` |
| `--graupl-menu-link-border-left-style` | Value for menu link border left style. | `var(--graupl-border-left-style)` |
| `--graupl-menu-link-border-style` | Value for menu link border style. | `var(--graupl-menu-link-border-top-style) var(--graupl-menu-link-border-right-style) var(--graupl-menu-link-border-bottom-style) var(--graupl-menu-link-border-left-style)` |
| `--graupl-menu-link-border-color` | Value for menu link border color. | `var(--graupl-menu-link-color)` |
| `--graupl-menu-link-visited-border-color` | Value for menu link visited border color. | `var(--graupl-menu-link-border-color)` |
| `--graupl-menu-link-focus-border-color` | Value for menu link focus border color. | `var(--graupl-menu-link-border-color)` |
| `--graupl-menu-link-hover-border-color` | Value for menu link hover border color. | `var(--graupl-menu-link-hover-color)` |
| `--graupl-menu-link-active-border-color` | Value for menu link active border color. | `var(--graupl-menu-link-hover-border-color)` |
| `--graupl-menu-link-disabled-border-color` | Value for menu link disabled border color. | `var(--graupl-menu-link-disabled-color)` |

## .submenu-toggle properties

These are the default values for the `.submenu-toggle` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-submenu-toggle-transform` | Value for menu submenu toggle transform. | `rotate(0deg)` |
| `--graupl-submenu-toggle-open-transform` | Value for menu submenu toggle open transform. | `rotate(-180deg)` |
| `--graupl-submenu-toggle-content` | Value for menu submenu toggle content. | `"'↓'"` |
| `--graupl-submenu-toggle-transition` | Value for menu submenu toggle transition. | `transform var(--graupl-transition-duration-fast) var(--graupl-transition-timing-function)` |
| `--graupl-submenu-toggle-transition-reduced-motion` | Value for menu submenu toggle transition reduced motion. | `none` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Default for selector base. | `"."` |
| `$modifier-selector-base` | Default for modifier selector base. | `"."` |
| `$generate-base-theme-map` | Default for generate base theme map. | `true` |
| `$themeable` | Default for themeable. | `false` |
| `$menu-selector-base` | Default for menu selector base. | `"."` |
| `$menu-selector` | Default for menu selector. | `"menu"` |
| `$menu-theme-selector-base` | Default for menu theme selector base. | `"."` |
| `$menu-theme-selector-prefix` | Default for menu theme selector prefix. | `""` |
| `$submenu-selector-base` | Default for submenu selector base. | `"."` |
| `$submenu-selector` | Default for submenu selector. | `"submenu"` |
| `$menu-item-selector-base` | Default for menu item selector base. | `"."` |
| `$menu-item-selector` | Default for menu item selector. | `"menu-item"` |
| `$menu-link-selector-base` | Default for menu link selector base. | `"."` |
| `$menu-link-selector` | Default for menu link selector. | `"menu-link"` |
| `$submenu-toggle-selector-base` | Default for submenu toggle selector base. | `"."` |
| `$submenu-toggle-selector` | Default for submenu toggle selector. | `"submenu-toggle"` |
| `$menu-show-selector-base` | Default for menu show selector base. | `"."` |
| `$menu-show-selector` | Default for menu show selector. | `"show"` |
| `$menu-hide-selector-base` | Default for menu hide selector base. | `"."` |
| `$menu-hide-selector` | Default for menu hide selector. | `"hide"` |
| `$menu-flex-direction` | Default for menu flex direction. | `row` |
| `$submenu-flex-direction` | Default for submenu flex direction. | `column` |
| `$menu-show-display` | Default for menu show display. | `flex` |
| `$menu-hide-display` | Default for menu hide display. | `none` |
| `$submenu-show-display` | Default for submenu show display. | `flex` |
| `$submenu-hide-display` | Default for submenu hide display. | `none` |
| `$menu-item-min-width` | Default for menu item min width. | `min-content` |
| `$menu-item-max-width` | Default for menu item max width. | `100%` |
| `$submenu-position` | Default for submenu position. | `absolute` |
| `$submenu-z-index` | Default for submenu z index. | `2` |
| `$submenu-top` | Default for submenu top. | `100%` |
| `$submenu-right` | Default for submenu right. | `auto` |
| `$submenu-bottom` | Default for submenu bottom. | `auto` |
| `$submenu-left` | Default for submenu left. | `0` |
| `$submenu-item-width` | Default for submenu item width. | `100%` |
| `$menu-link-initial-text-decoration` | Default for menu link initial text decoration. | `none` |
| `$menu-link-final-text-decoration` | Default for menu link final text decoration. | `none` |
| `$menu-link-disabled-text-decoration` | Default for menu link disabled text decoration. | `none` |
| `$menu-link-initial-text-decoration-style` | Default for menu link initial text decoration style. | `solid` |
| `$menu-link-final-text-decoration-style` | Default for menu link final text decoration style. | `solid` |
| `$menu-link-disabled-text-decoration-style` | Default for menu link disabled text decoration style. | `solid` |
| `$menu-link-initial-transform` | Default for menu link initial transform. | `none` |
| `$menu-link-final-transform` | Default for menu link final transform. | `none` |
| `$menu-link-disabled-transform` | Default for menu link disabled transform. | `none` |
| `$menu-border-width` | Default for menu border width. | `0` |
| `$menu-link-border-width` | Default for menu link border width. | `0` |
| `$submenu-toggle-transform` | Default for submenu toggle transform. | `rotate(0deg)` |
| `$submenu-toggle-open-transform` | Default for submenu toggle open transform. | `rotate(-180deg)` |
| `$submenu-toggle-content` | Default for submenu toggle content. | `"'↓'"` |
| `$menu-theme-mappings` | Default for menu theme mappings. | `map.merge($-menu-theme-mappings, $menu-theme-mappings)` |
| `$menu-theme-map` | Default for menu theme map. | `map.deep-merge($-menu-theme-map, $menu-theme-map)` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
