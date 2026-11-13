<script setup>
  import { useTemplateRef } from "vue";
  import DisclosureMenu from "accessible-menu/disclosure-menu";
  import LiveExample from "../vue-components/LiveExample.vue";

  const preview = useTemplateRef("navigation-preview");
  const initialized = new WeakSet();

  const exampleNavigation = `
<nav class="navigation" data-graupl-menu-type="DisclosureMenu" aria-label="Adventurers’ Guild">
  <a class="navigation-branding" href="#">Adventurers’ Guild</a>
  <button type="button" class="navigation-toggle"
    aria-label="Toggle navigation"></button>
  <ul class="menu">
    <li class="menu-item"><a class="menu-link" href="#">Guild hall</a></li>
    <li class="menu-item submenu-item">
      <button type="button" class="menu-link button link submenu-toggle">
        Quests
      </button>
      <ul class="submenu">
        <li class="menu-item">
          <a class="menu-link" href="#">Dragon sightings</a>
        </li>
        <li class="menu-item">
          <a class="menu-link" href="#">Ogre patrols</a>
        </li>
        <li class="menu-item">
          <a class="menu-link" href="#">Griffin rescue</a>
        </li>
      </ul>
    </li>
    <li class="menu-item"><a class="menu-link" href="#">Bestiary</a></li>
    <li class="menu-item">
      <a class="menu-link" href="#">Maps</a>
    </li>
    <li class="menu-item">
      <a class="menu-link button tertiary" href="#">Join the guild</a>
    </li>
  </ul>
</nav>
  `;

  function initializePreview() {
    const navigation = preview.value?.querySelector(".example .navigation");
    if (!navigation || initialized.has(navigation)) return;

    const menuElement = navigation.querySelector(".menu");
    const controllerElement = navigation.querySelector(".navigation-toggle");
    if (!menuElement || !controllerElement) return;

    new DisclosureMenu({
      menuElement,
      controllerElement,
      containerElement: navigation,
      menuItemSelector: ".menu-item",
      menuLinkSelector: ".menu-link",
      submenuItemSelector: ".submenu-item",
      submenuToggleSelector: ".submenu-toggle",
    });

    initialized.add(navigation);
  }
</script>

# Navigations

The navigation component provides a set of classes to arrange a site's branding and menu, with a toggle for smaller screens. It uses [Menu](./menu.md) for the list and submenu styles, and [Accessible Menu](https://accessible-menu.dev) adds the interactive behaviour.

Navigations implement the spec found in the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).

## Base classes

Use `.navigation` on a navigation landmark and place the branding and menu directly inside it. Add `.navigation-branding` to the site name or home link. Give the `.navigation-toggle` button an accessible name, and use the [Menu classes](./menu.md) for the list of links and any submenus.

<div ref="navigation-preview">
  <live-example :source-code="exampleNavigation" example-class="navigation-preview" @mounted="initializePreview" @updated="initializePreview" />
</div>

## Initialization

The navigation generator uses [Accessible Menu](https://accessible-menu.dev/disclosure-menus.html) to handle the navigation's interactivity. The generator looks for a `.menu` inside each `.navigation` and uses a `.navigation-toggle` button if one is present. Use `.submenu-item` on each list item that contains a submenu and `.submenu-toggle` on its button.

Use `data-graupl-menu-type` to choose an Accessible Menu constructor. `DisclosureMenu` is recommended and is the default when the attribute is omitted. Run the generator once the chosen constructor is available on `window` under that name and the navigation markup is in the DOM.

```js
import DisclosureMenu from "accessible-menu/disclosure-menu";
import generateNavigations from "@graupl/core/navigation/generator";

window.DisclosureMenu = DisclosureMenu;
generateNavigations();
```

::: info Note
If you load `disclosure-menu.iife.js` as a classic script, it already provides `window.DisclosureMenu`. With the full `accessible-menu.iife.js` bundle, set `window.DisclosureMenu = window.AccessibleMenu.DisclosureMenu` before calling the generator. See the [Accessible Menu quick start](https://accessible-menu.dev/quick-start.html).
:::

## Responsive behaviour

Below the `md` breakpoint, use the toggle to open or close the vertical menu. Open submenus take up space in the list and push the items below them down. At `md` (768px) and above, the menu stays visible beside the branding and the toggle is hidden.

## Variants

By default, no theme variants are generated.

If you are [compiling your own version of Graupl](../compiling-graupl.md), you can set the navigation module’s `$themeable` variable to `true` to generate the `.primary`, `.secondary`, and `.tertiary` variants. Add the variant class alongside `.navigation` to set the navigation’s background and text color. The nested menu uses those colors by default. To style the menu separately, enable [Menu variants](./menu.md#variants) and add a variant class alongside `.menu`. The Menu variant sets its own text, border, and link hover colors.

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/component/navigation.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/component/navigation.css">
```

```scss [Sass]
@use "pkg:@graupl/core/component/navigation.scss";
```

:::

### JavaScript

For a page that uses this component, include its generator script below. It finds and initializes matching markup when the page loads. If you already load the full `graupl.js` bundle, it runs the generator for you. To call the generator yourself, see [Initialization](#initialization).

Load Accessible Menu's `DisclosureMenu` script before the Graupl script, including when you use the full bundle. If you host it locally, copy `dist/disclosure-menu.iife.js` from the `accessible-menu` package to the path shown.

::: code-group

```html [Local]
<script defer src="./accessible-menu/dist/disclosure-menu.iife.js"></script>
<script defer src="./dist/js/navigation.js"></script>
```

```html [CDN]
<script defer src="https://cdn.jsdelivr.net/npm/accessible-menu@4.4.0/dist/disclosure-menu.iife.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/js/navigation.js"></script>
```

:::

## Custom Properties

The following custom properties can be used to customize the navigation component.

| Property Name                                                     | Description                                                    | Default Value                                                                                                                                                                                                                         |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--graupl-navigation-background`                                  | Background of the navigation.                                  | `var(--graupl-background)`                                                                                                                                                                                                            |
| `--graupl-navigation-color`                                       | Text color of the navigation.                                  | `var(--graupl-color)`                                                                                                                                                                                                                 |
| `--graupl-navigation-toggle-min-width`                            | Minimum width of the navigation toggle.                        | `44px`                                                                                                                                                                                                                                |
| `--graupl-navigation-toggle-min-height`                           | Minimum height of the navigation toggle.                       | `44px`                                                                                                                                                                                                                                |
| `--graupl-navigation-toggle-padding-x`                            | Horizontal padding of the navigation toggle.                   | `var(--graupl-spacer-5)`                                                                                                                                                                                                              |
| `--graupl-navigation-toggle-padding-y`                            | Vertical padding of the navigation toggle.                     | `var(--graupl-spacer-3)`                                                                                                                                                                                                              |
| `--graupl-navigation-toggle-padding`                              | Padding of the navigation toggle.                              | `var(--graupl-navigation-toggle-padding-y) var(--graupl-navigation-toggle-padding-x)`                                                                                                                                                 |
| `--graupl-navigation-toggle-background`                           | Background of the navigation toggle.                           | `var(--graupl-navigation-background)`                                                                                                                                                                                                 |
| `--graupl-navigation-toggle-visited-background`                   | Background of the visited navigation toggle.                   | `var(--graupl-navigation-toggle-background)`                                                                                                                                                                                          |
| `--graupl-navigation-toggle-focus-background`                     | Background of the focused navigation toggle.                   | `var(--graupl-navigation-toggle-background)`                                                                                                                                                                                          |
| `--graupl-navigation-toggle-hover-background`                     | Background of the hovered navigation toggle.                   | `var(--graupl-navigation-color)`                                                                                                                                                                                                      |
| `--graupl-navigation-toggle-active-background`                    | Background of the active navigation toggle.                    | `var(--graupl-navigation-toggle-hover-background)`                                                                                                                                                                                    |
| `--graupl-navigation-toggle-disabled-background`                  | Background of the disabled navigation toggle.                  | `var(--graupl-navigation-background)`                                                                                                                                                                                                 |
| `--graupl-navigation-toggle-color`                                | Icon color of the navigation toggle.                           | `var(--graupl-navigation-color)`                                                                                                                                                                                                      |
| `--graupl-navigation-toggle-visited-color`                        | Icon color of the visited navigation toggle.                   | `var(--graupl-navigation-toggle-color)`                                                                                                                                                                                               |
| `--graupl-navigation-toggle-focus-color`                          | Icon color of the focused navigation toggle.                   | `var(--graupl-navigation-toggle-color)`                                                                                                                                                                                               |
| `--graupl-navigation-toggle-hover-color`                          | Icon color of the hovered navigation toggle.                   | `var(--graupl-navigation-background)`                                                                                                                                                                                                 |
| `--graupl-navigation-toggle-active-color`                         | Icon color of the active navigation toggle.                    | `var(--graupl-navigation-toggle-hover-color)`                                                                                                                                                                                         |
| `--graupl-navigation-toggle-disabled-color`                       | Icon color of the disabled navigation toggle.                  | `var(--graupl-theme-active--primary--200)`                                                                                                                                                                                            |
| `--graupl-navigation-toggle-border-top-width`                     | Border top width of the navigation toggle.                     | `var(--graupl-border-top-width)`                                                                                                                                                                                                      |
| `--graupl-navigation-toggle-border-right-width`                   | Border right width of the navigation toggle.                   | `var(--graupl-border-right-width)`                                                                                                                                                                                                    |
| `--graupl-navigation-toggle-border-bottom-width`                  | Border bottom width of the navigation toggle.                  | `var(--graupl-border-bottom-width)`                                                                                                                                                                                                   |
| `--graupl-navigation-toggle-border-left-width`                    | Border left width of the navigation toggle.                    | `var(--graupl-border-left-width)`                                                                                                                                                                                                     |
| `--graupl-navigation-toggle-border-width`                         | Border width of the navigation toggle.                         | `var(--graupl-navigation-toggle-border-top-width) var(--graupl-navigation-toggle-border-right-width) var(--graupl-navigation-toggle-border-bottom-width) var(--graupl-navigation-toggle-border-left-width)`                           |
| `--graupl-navigation-toggle-border-top-style`                     | Border top style of the navigation toggle.                     | `var(--graupl-border-top-style)`                                                                                                                                                                                                      |
| `--graupl-navigation-toggle-border-right-style`                   | Border right style of the navigation toggle.                   | `var(--graupl-border-right-style)`                                                                                                                                                                                                    |
| `--graupl-navigation-toggle-border-bottom-style`                  | Border bottom style of the navigation toggle.                  | `var(--graupl-border-bottom-style)`                                                                                                                                                                                                   |
| `--graupl-navigation-toggle-border-left-style`                    | Border left style of the navigation toggle.                    | `var(--graupl-border-left-style)`                                                                                                                                                                                                     |
| `--graupl-navigation-toggle-border-style`                         | Border style of the navigation toggle.                         | `var(--graupl-navigation-toggle-border-top-style) var(--graupl-navigation-toggle-border-right-style) var(--graupl-navigation-toggle-border-bottom-style) var(--graupl-navigation-toggle-border-left-style)`                           |
| `--graupl-navigation-toggle-border-color`                         | Border color of the navigation toggle.                         | `var(--graupl-navigation-toggle-color)`                                                                                                                                                                                               |
| `--graupl-navigation-toggle-visited-border-color`                 | Border color of the visited navigation toggle.                 | `var(--graupl-navigation-toggle-border-color)`                                                                                                                                                                                        |
| `--graupl-navigation-toggle-focus-border-color`                   | Border color of the focused navigation toggle.                 | `var(--graupl-navigation-toggle-border-color)`                                                                                                                                                                                        |
| `--graupl-navigation-toggle-hover-border-color`                   | Border color of the hovered navigation toggle.                 | `var(--graupl-navigation-toggle-hover-color)`                                                                                                                                                                                         |
| `--graupl-navigation-toggle-active-border-color`                  | Border color of the active navigation toggle.                  | `var(--graupl-navigation-toggle-hover-border-color)`                                                                                                                                                                                  |
| `--graupl-navigation-toggle-disabled-border-color`                | Border color of the disabled navigation toggle.                | `var(--graupl-navigation-toggle-disabled-color)`                                                                                                                                                                                      |
| `--graupl-navigation-toggle-border-top-left-radius`               | Border top left radius of the navigation toggle.               | `var(--graupl-border-top-left-radius)`                                                                                                                                                                                                |
| `--graupl-navigation-toggle-border-top-right-radius`              | Border top right radius of the navigation toggle.              | `var(--graupl-border-top-right-radius)`                                                                                                                                                                                               |
| `--graupl-navigation-toggle-border-bottom-right-radius`           | Border bottom right radius of the navigation toggle.           | `var(--graupl-border-bottom-right-radius)`                                                                                                                                                                                            |
| `--graupl-navigation-toggle-border-bottom-left-radius`            | Border bottom left radius of the navigation toggle.            | `var(--graupl-border-bottom-left-radius)`                                                                                                                                                                                             |
| `--graupl-navigation-toggle-border-radius`                        | Border radius of the navigation toggle.                        | `var(--graupl-navigation-toggle-border-top-left-radius) var(--graupl-navigation-toggle-border-top-right-radius) var(--graupl-navigation-toggle-border-bottom-right-radius) var(--graupl-navigation-toggle-border-bottom-left-radius)` |
| `--graupl-navigation-toggle-content`                              | Content of the navigation toggle.                              | `'☰'`                                                                                                                                                                                                                                 |
| `--graupl-navigation-branding-padding-x`                          | Horizontal padding of the navigation branding.                 | `var(--graupl-spacer-3)`                                                                                                                                                                                                              |
| `--graupl-navigation-branding-padding-y`                          | Vertical padding of the navigation branding.                   | `var(--graupl-spacer-2)`                                                                                                                                                                                                              |
| `--graupl-navigation-branding-padding`                            | Padding of the navigation branding.                            | `var(--graupl-navigation-branding-padding-y) var(--graupl-navigation-branding-padding-x)`                                                                                                                                             |
| `--graupl-navigation-branding-font-size`                          | Font size of the navigation branding.                          | `var(--graupl-font-size-lg)`                                                                                                                                                                                                          |
| `--graupl-navigation-branding-font-weight`                        | Font weight of the navigation branding.                        | `var(--graupl-font-weight-bold)`                                                                                                                                                                                                      |
| `--graupl-navigation-branding-color`                              | Text color of the navigation branding.                         | `var(--graupl-navigation-color)`                                                                                                                                                                                                      |
| `--graupl-navigation-branding-visited-color`                      | Text color of the visited navigation branding.                 | `var(--graupl-navigation-branding-color)`                                                                                                                                                                                             |
| `--graupl-navigation-branding-focus-color`                        | Text color of the focused navigation branding.                 | `var(--graupl-navigation-branding-color)`                                                                                                                                                                                             |
| `--graupl-navigation-branding-hover-color`                        | Text color of the hovered navigation branding.                 | `var(--graupl-navigation-color)`                                                                                                                                                                                                      |
| `--graupl-navigation-branding-active-color`                       | Text color of the active navigation branding.                  | `var(--graupl-navigation-branding-hover-color)`                                                                                                                                                                                       |
| `--graupl-navigation-branding-disabled-color`                     | Text color of the disabled navigation branding.                | `var(--graupl-navigation-color)`                                                                                                                                                                                                      |
| `--graupl-navigation-branding-text-decoration`                    | Text decoration of the navigation branding.                    | `none`                                                                                                                                                                                                                                |
| `--graupl-navigation-branding-visited-text-decoration`            | Text decoration of the visited navigation branding.            | `var(--graupl-navigation-branding-text-decoration)`                                                                                                                                                                                   |
| `--graupl-navigation-branding-focus-text-decoration`              | Text decoration of the focused navigation branding.            | `var(--graupl-navigation-branding-text-decoration)`                                                                                                                                                                                   |
| `--graupl-navigation-branding-hover-text-decoration`              | Text decoration of the hovered navigation branding.            | `none`                                                                                                                                                                                                                                |
| `--graupl-navigation-branding-active-text-decoration`             | Text decoration of the active navigation branding.             | `var(--graupl-navigation-branding-hover-text-decoration)`                                                                                                                                                                             |
| `--graupl-navigation-branding-disabled-text-decoration`           | Text decoration of the disabled navigation branding.           | `none`                                                                                                                                                                                                                                |
| `--graupl-navigation-branding-text-decoration-style`              | Text decoration style of the navigation branding.              | `solid`                                                                                                                                                                                                                               |
| `--graupl-navigation-branding-visited-text-decoration-style`      | Text decoration style of the visited navigation branding.      | `var(--graupl-navigation-branding-text-decoration-style)`                                                                                                                                                                             |
| `--graupl-navigation-branding-focus-text-decoration-style`        | Text decoration style of the focused navigation branding.      | `var(--graupl-navigation-branding-text-decoration-style)`                                                                                                                                                                             |
| `--graupl-navigation-branding-hover-text-decoration-style`        | Text decoration style of the hovered navigation branding.      | `solid`                                                                                                                                                                                                                               |
| `--graupl-navigation-branding-active-text-decoration-style`       | Text decoration style of the active navigation branding.       | `var(--graupl-navigation-branding-hover-text-decoration-style)`                                                                                                                                                                       |
| `--graupl-navigation-branding-disabled-text-decoration-style`     | Text decoration style of the disabled navigation branding.     | `solid`                                                                                                                                                                                                                               |
| `--graupl-navigation-branding-text-decoration-thickness`          | Text decoration thickness of the navigation branding.          | `var(--graupl-border-width)`                                                                                                                                                                                                          |
| `--graupl-navigation-branding-visited-text-decoration-thickness`  | Text decoration thickness of the visited navigation branding.  | `var(--graupl-navigation-branding-text-decoration-thickness)`                                                                                                                                                                         |
| `--graupl-navigation-branding-focus-text-decoration-thickness`    | Text decoration thickness of the focused navigation branding.  | `var(--graupl-navigation-branding-text-decoration-thickness)`                                                                                                                                                                         |
| `--graupl-navigation-branding-hover-text-decoration-thickness`    | Text decoration thickness of the hovered navigation branding.  | `var(--graupl-border-width)`                                                                                                                                                                                                          |
| `--graupl-navigation-branding-active-text-decoration-thickness`   | Text decoration thickness of the active navigation branding.   | `var(--graupl-navigation-branding-hover-text-decoration-thickness)`                                                                                                                                                                   |
| `--graupl-navigation-branding-disabled-text-decoration-thickness` | Text decoration thickness of the disabled navigation branding. | `var(--graupl-border-width)`                                                                                                                                                                                                          |
| `--graupl-navigation-branding-text-decoration-color`              | Text decoration color of the navigation branding.              | `var(--graupl-navigation-branding-color)`                                                                                                                                                                                             |
| `--graupl-navigation-branding-visited-text-decoration-color`      | Text decoration color of the visited navigation branding.      | `var(--graupl-navigation-branding-visited-color)`                                                                                                                                                                                     |
| `--graupl-navigation-branding-focus-text-decoration-color`        | Text decoration color of the focused navigation branding.      | `var(--graupl-navigation-branding-focus-color)`                                                                                                                                                                                       |
| `--graupl-navigation-branding-hover-text-decoration-color`        | Text decoration color of the hovered navigation branding.      | `var(--graupl-navigation-branding-hover-color)`                                                                                                                                                                                       |
| `--graupl-navigation-branding-active-text-decoration-color`       | Text decoration color of the active navigation branding.       | `var(--graupl-navigation-branding-active-color)`                                                                                                                                                                                      |
| `--graupl-navigation-branding-disabled-text-decoration-color`     | Text decoration color of the disabled navigation branding.     | `var(--graupl-navigation-branding-disabled-color)`                                                                                                                                                                                    |

## Sass variables

The following Sass variables can be used to customize the generation of the navigation component.

| Variable                                              | Description                                                                                 | Default Value           |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------- |
| `$selector-base`                                      | The selector base for the component.                                                        | `"."`                   |
| `$modifier-selector-base`                             | The selector base for component modifiers.                                                  | `"."`                   |
| `$generate-base-theme-map`                            | Whether to include the default navigation theme mappings.                                   | `true`                  |
| `$themeable`                                          | Whether to generate navigation theme variants.                                              | `false`                 |
| `$navigation-selector-base`                           | Selector base for the navigation.                                                           | `"."`                   |
| `$navigation-selector`                                | Selector for the navigation.                                                                | `"navigation"`          |
| `$navigation-theme-selector-base`                     | Selector base for the navigation theme.                                                     | `"."`                   |
| `$navigation-theme-selector-prefix`                   | Selector prefix for the navigation theme.                                                   | `""`                    |
| `$navigation-toggle-selector-base`                    | Selector base for the navigation toggle.                                                    | `"."`                   |
| `$navigation-toggle-selector`                         | Selector for the navigation toggle.                                                         | `"navigation-toggle"`   |
| `$navigation-branding-selector-base`                  | Selector base for the navigation branding.                                                  | `"."`                   |
| `$navigation-branding-selector`                       | Selector for the navigation branding.                                                       | `"navigation-branding"` |
| `$navigation-toggle-content`                          | The content displayed inside the navigation toggle.                                         | `"'☰'"`                 |
| `$navigation-branding-initial-text-decoration`        | Text decoration of the default navigation branding.                                         | `none`                  |
| `$navigation-branding-final-text-decoration`          | Text decoration of the hovered navigation branding.                                         | `none`                  |
| `$navigation-branding-disabled-text-decoration`       | Text decoration of the disabled navigation branding.                                        | `none`                  |
| `$navigation-branding-initial-text-decoration-style`  | Text decoration style of the default navigation branding.                                   | `solid`                 |
| `$navigation-branding-final-text-decoration-style`    | Text decoration style of the hovered navigation branding.                                   | `solid`                 |
| `$navigation-branding-disabled-text-decoration-style` | Text decoration style of the disabled navigation branding.                                  | `solid`                 |
| `$navigation-theme-mappings`                          | A map of properties and color shades used to generate all navigation variants.              | `()`                    |
| `$navigation-theme-map`                               | A map of all properties, colors, and color shades used to generate all navigation variants. | `()`                    |
