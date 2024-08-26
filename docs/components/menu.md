# Menu

Defaults

```jsx
// Menu selectors.
$menu-selector: ".menu" !default;
$submenu-selector: ".submenu" !default;
$menu-item-selector: ".menu-item" !default;
$menu-link-selector: ".menu-link" !default;
$submenu-toggle-selector: ".submenu-toggle" !default;
$menu-show-selector: ".show" !default;
$menu-hide-selector: ".hide" !default;

// Flex properties.
$menu-flex-direction: row !default;
$submenu-flex-direction: column !default;

// Visibility properties.
$menu-show-display: flex !default;
$menu-hide-display: none !default;
$submenu-show-display: $menu-show-display !default;
$submenu-hide-display: $menu-hide-display !default;

// Menu item properties.
$menu-item-min-width: min-content !default;
$menu-item-max-width: 100% !default;

// Submenu properties.
$submenu-position: absolute !default;
$submenu-z-index: 2 !default;
$submenu-top: 100% !default;
$submenu-right: auto !default;
$submenu-bottom: auto !default;
$submenu-left: 0 !default;

// Submenu item properties.
$submenu-item-width: 100% !default;

// Menu link properties.
$menu-link-text-decoration: none !default;
$menu-link-visited-text-decoration: $menu-link-text-decoration !default;
$menu-link-focus-text-decoration: $menu-link-text-decoration !default;
$menu-link-hover-text-decoration: $menu-link-text-decoration !default;
$menu-link-active-text-decoration: $menu-link-text-decoration !default;
$menu-link-disabled-text-decoration: $menu-link-text-decoration !default;
$menu-link-text-decoration-style: solid !default;
$menu-link-visited-text-decoration-style: $menu-link-text-decoration-style !default;
$menu-link-focus-text-decoration-style: $menu-link-text-decoration-style !default;
$menu-link-hover-text-decoration-style: $menu-link-text-decoration-style !default;
$menu-link-active-text-decoration-style: $menu-link-text-decoration-style !default;
$menu-link-disabled-text-decoration-style: $menu-link-text-decoration-style !default;
$menu-link-transform: none !default;
$menu-link-visited-transform: $menu-link-transform !default;
$menu-link-focus-transform: $menu-link-transform !default;
$menu-link-hover-transform: $menu-link-transform !default;
$menu-link-active-transform: $menu-link-transform !default;
$menu-link-disabled-transform: $menu-link-transform !default;
$menu-border-width: 0 !default;
$menu-link-border-width: 0 !default;
$submenu-toggle-transform: rotate(0deg) !default;
$submenu-toggle-open-transform: rotate(-180deg) !default;
$submenu-toggle-content: "'▼'" !default;
```

Variables

The menu properties:

```scss
--#{root-defaults.$prefix}-menu-flex-direction
--#{root-defaults.$prefix}-menu-padding-x
--#{root-defaults.$prefix}-menu-padding-y
--#{root-defaults.$prefix}-menu-padding

```

The menu gap properties:

```scss
--#{root-defaults.$prefix}-menu-column-gap
--#{root-defaults.$prefix}-menu-row-gap
--#{root-defaults.$prefix}-menu-gap

```

The menu display properties:

```scss
--#{root-defaults.$prefix}-menu-show-display
--#{root-defaults.$prefix}-menu-hide-display
--#{root-defaults.$prefix}-menu-display

```

The menu color properties:

```scss
--#{root-defaults.$prefix}-menu-background
--#{root-defaults.$prefix}-menu-color

```

The menu border properties:

```scss
--#{root-defaults.$prefix}-menu-border-color
--#{root-defaults.$prefix}-menu-border-radius
--#{root-defaults.$prefix}-menu-border-style
--#{root-defaults.$prefix}-menu-border-width
--#{root-defaults.$prefix}-menu-border

```

The submenu properties:

```scss
--#{root-defaults.$prefix}-submenu-flex-direction
--#{root-defaults.$prefix}-submenu-z-index
--#{root-defaults.$prefix}-submenu-padding-x
--#{root-defaults.$prefix}-submenu-padding-y
--#{root-defaults.$prefix}-submenu-padding

```

The submenu gap properties:

```scss
--#{root-defaults.$prefix}-submenu-column-gap
--#{root-defaults.$prefix}-submenu-row-gap
--#{root-defaults.$prefix}-submenu-gap

```

The submenu display properties:

```scss
--#{root-defaults.$prefix}-submenu-show-display
--#{root-defaults.$prefix}-submenu-hide-display
--#{root-defaults.$prefix}-submenu-display

```

The submenu color properties:

```scss
--#{root-defaults.$prefix}-submenu-background
--#{root-defaults.$prefix}-submenu-color

```

The submenu border properties:

```scss
--#{root-defaults.$prefix}-submenu-border-color
--#{root-defaults.$prefix}-submenu-border-radius
--#{root-defaults.$prefix}-submenu-border-style
--#{root-defaults.$prefix}-submenu-border-width
--#{root-defaults.$prefix}-submenu-border

```

The submenu position properties:

```scss
--#{root-defaults.$prefix}-submenu-position
--#{root-defaults.$prefix}-submenu-top
--#{root-defaults.$prefix}-submenu-right
--#{root-defaults.$prefix}-submenu-bottom
--#{root-defaults.$prefix}-submenu-left
--#{root-defaults.$prefix}-submenu-inset

```

The menu item properties:

```scss
--#{root-defaults.$prefix}-menu-item-min-width
--#{root-defaults.$prefix}-menu-item-max-width
--#{root-defaults.$prefix}-menu-item-padding-x
--#{root-defaults.$prefix}-menu-item-padding-y
--#{root-defaults.$prefix}-menu-item-padding

```

The submenu item properties:

```scss
--#{root-defaults.$prefix}-submenu-item-width

```

The menu link properties:

```scss
--#{root-defaults.$prefix}-menu-link-padding-x
--#{root-defaults.$prefix}-menu-link-padding-y
--#{root-defaults.$prefix}-menu-link-padding

```

The menu link transform properties:

```scss
--#{root-defaults.$prefix}-menu-link-transition
--#{root-defaults.$prefix}-menu-link-transition-reduced-motion
--#{root-defaults.$prefix}-menu-link-transform
--#{root-defaults.$prefix}-menu-link-visited-transform
--#{root-defaults.$prefix}-menu-link-focus-transform
--#{root-defaults.$prefix}-menu-link-hover-transform
--#{root-defaults.$prefix}-menu-link-active-transform
--#{root-defaults.$prefix}-menu-link-disabled-transform

```

The menu link gap properties:

```scss
--#{root-defaults.$prefix}-menu-link-column-gap
--#{root-defaults.$prefix}-menu-link-row-gap
--#{root-defaults.$prefix}-menu-link-gap

```

The menu link colors:

```scss
--#{root-defaults.$prefix}-menu-link-background
--#{root-defaults.$prefix}-menu-link-visited-background
--#{root-defaults.$prefix}-menu-link-focus-background
--#{root-defaults.$prefix}-menu-link-hover-background
--#{root-defaults.$prefix}-menu-link-active-background
--#{root-defaults.$prefix}-menu-link-disabled-background
--#{root-defaults.$prefix}-menu-link-color
--#{root-defaults.$prefix}-menu-link-visited-color
--#{root-defaults.$prefix}-menu-link-focus-color
--#{root-defaults.$prefix}-menu-link-hover-color
--#{root-defaults.$prefix}-menu-link-active-color
--#{root-defaults.$prefix}-menu-link-disabled-color

```

The menu link text decoration properties:

```scss
--#{root-defaults.$prefix}-menu-link-text-decoration
--#{root-defaults.$prefix}-menu-link-visited-text-decoration
--#{root-defaults.$prefix}-menu-link-focus-text-decoration
--#{root-defaults.$prefix}-menu-link-hover-text-decoration
--#{root-defaults.$prefix}-menu-link-active-text-decoration
--#{root-defaults.$prefix}-menu-link-disabled-text-decoration
--#{root-defaults.$prefix}-menu-link-text-decoration-thickness
--#{root-defaults.$prefix}-menu-link-visited-text-decoration-thickness
--#{root-defaults.$prefix}-menu-link-focus-text-decoration-thickness
--#{root-defaults.$prefix}-menu-link-hover-text-decoration-thickness
--#{root-defaults.$prefix}-menu-link-active-text-decoration-thickness
--#{root-defaults.$prefix}-menu-link-disabled-text-decoration-thickness
--#{root-defaults.$prefix}-menu-link-text-decoration-style
--#{root-defaults.$prefix}-menu-link-visited-text-decoration-style
--#{root-defaults.$prefix}-menu-link-focus-text-decoration-style
--#{root-defaults.$prefix}-menu-link-hover-text-decoration-style
--#{root-defaults.$prefix}-menu-link-active-text-decoration-style
--#{root-defaults.$prefix}-menu-link-disabled-text-decoration-style
--#{root-defaults.$prefix}-menu-link-text-decoration-color
--#{root-defaults.$prefix}-menu-link-visited-text-decoration-color
--#{root-defaults.$prefix}-menu-link-focus-text-decoration-color
--#{root-defaults.$prefix}-menu-link-hover-text-decoration-color
--#{root-defaults.$prefix}-menu-link-active-text-decoration-color
--#{root-defaults.$prefix}-menu-link-disabled-text-decoration-color

```

The menu link border properties:

```scss
--#{root-defaults.$prefix}-menu-link-border-radius
--#{root-defaults.$prefix}-menu-link-border-style
--#{root-defaults.$prefix}-menu-link-border-width
--#{root-defaults.$prefix}-menu-link-border
--#{root-defaults.$prefix}-menu-link-border-color
--#{root-defaults.$prefix}-menu-link-visited-border-color
--#{root-defaults.$prefix}-menu-link-focus-border-color
--#{root-defaults.$prefix}-menu-link-hover-border-color
--#{root-defaults.$prefix}-menu-link-active-border-color
--#{root-defaults.$prefix}-menu-link-disabled-border-color

```

The submenu toggle properties:

```scss
--#{root-defaults.$prefix}-submenu-toggle-transform
--#{root-defaults.$prefix}-submenu-toggle-open-transform
--#{root-defaults.$prefix}-submenu-toggle-content
--#{root-defaults.$prefix}-submenu-toggle-transition
--#{root-defaults.$prefix}-submenu-toggle-transition-reduced-motion

```

Markup

```jsx
    <div class="py-10 full-width container">
        <div class="py-7">
        <nav class="navigation" data-graupl-menu-type="DisclosureMenu" data-graupl-menu-options="{'optionalKeySupport': true}">
          <a class="navigation-branding" href="#">Graupl</a>
          <button class="navigation-toggle ml-auto mr-0" aria-label="Toggle navigation"></button>
          <ul class="menu">
            <li class="menu-item"><a class="menu-link" href="#">Home</a></li>
            <li class="menu-item submenu-item">
              <button class="menu-link button link submenu-toggle">About</button>
              <ul class="submenu">
                <li class="menu-item"><a class="menu-link" href="#">About Us</a></li>
                <li class="menu-item"><a class="menu-link" href="#">Our Team</a></li>
                <li class="menu-item"><a class="menu-link" href="#">Our Mission</a></li>
              </ul>
            </li>
            <li class="menu-item"><a class="menu-link" href="#">Blog</a></li>
            <li class="menu-item"><a class="menu-link" href="#">Portfolio</a></li>
            <li class="menu-item"><a class="menu-link button tertiary" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
```
