# Navigation

Default

```jsx
// Navigation selectors.
$navigation-selector: ".navigation" !default;
$navigation-toggle-selector: ".navigation-toggle" !default;
$navigation-branding-selector: ".navigation-branding" !default;

// Navigation toggle properties.
$navigation-toggle-content: "'☰'" !default;

// Navigation branding properties.
$navigation-branding-text-decoration: none !default;
$navigation-branding-visited-text-decoration: $navigation-branding-text-decoration !default;
$navigation-branding-focus-text-decoration: $navigation-branding-text-decoration !default;
$navigation-branding-hover-text-decoration: $navigation-branding-text-decoration !default;
$navigation-branding-active-text-decoration: $navigation-branding-text-decoration !default;
$navigation-branding-disabled-text-decoration: $navigation-branding-text-decoration !default;
$navigation-branding-text-decoration-style: solid !default;
$navigation-branding-visited-text-decoration-style: $navigation-branding-text-decoration-style !default;
$navigation-branding-focus-text-decoration-style: $navigation-branding-text-decoration-style !default;
$navigation-branding-hover-text-decoration-style: $navigation-branding-text-decoration-style !default;
$navigation-branding-active-text-decoration-style: $navigation-branding-text-decoration-style !default;
$navigation-branding-disabled-text-decoration-style: $navigation-branding-text-decoration-style !default;
```

Variables

The navigation colors:

```scss
--#{root-defaults.$prefix}-navigation-background
--#{root-defaults.$prefix}-navigation-color

```

The navigation toggle size:

```scss
--#{root-defaults.$prefix}-navigation-toggle-min-width
--#{root-defaults.$prefix}-navigation-toggle-min-height

```

The navigation toggle spacing:

```scss
--#{root-defaults.$prefix}-navigation-toggle-padding-x
--#{root-defaults.$prefix}-navigation-toggle-padding-y
--#{root-defaults.$prefix}-navigation-toggle-padding

```

The navigation toggle colors:

```scss
--#{root-defaults.$prefix}-navigation-toggle-background
--#{root-defaults.$prefix}-navigation-toggle-color
--#{root-defaults.$prefix}-navigation-toggle-hover-background
--#{root-defaults.$prefix}-navigation-toggle-hover-color

```

The navigation toggle border properties:

```scss
--#{root-defaults.$prefix}-navigation-toggle-border-width
--#{root-defaults.$prefix}-navigation-toggle-border-style
--#{root-defaults.$prefix}-navigation-toggle-border
--#{root-defaults.$prefix}-navigation-toggle-border-color
--#{root-defaults.$prefix}-navigation-toggle-border-radius

```

The navigation branding properties:

```scss
--#{root-defaults.$prefix}-navigation-branding-font-size
--#{root-defaults.$prefix}-navigation-branding-font-weight
--#{root-defaults.$prefix}-navigation-branding-padding-x
--#{root-defaults.$prefix}-navigation-branding-padding-y
--#{root-defaults.$prefix}-navigation-branding-padding

```

The navigation branding colors:

```scss
--#{root-defaults.$prefix}-navigation-branding-color
--#{root-defaults.$prefix}-navigation-branding-visited-color
--#{root-defaults.$prefix}-navigation-branding-focus-color
--#{root-defaults.$prefix}-navigation-branding-hover-color
--#{root-defaults.$prefix}-navigation-branding-active-color
--#{root-defaults.$prefix}-navigation-branding-disabled-color

```

The navigation branding text decoration properties:

```scss
--#{root-defaults.$prefix}-navigation-branding-text-decoration
--#{root-defaults.$prefix}-navigation-branding-visited-text-decoration
--#{root-defaults.$prefix}-navigation-branding-focus-text-decoration
--#{root-defaults.$prefix}-navigation-branding-hover-text-decoration
--#{root-defaults.$prefix}-navigation-branding-active-text-decoration
--#{root-defaults.$prefix}-navigation-branding-disabled-text-decoration
--#{root-defaults.$prefix}-navigation-branding-text-decoration-style
--#{root-defaults.$prefix}-navigation-branding-visited-text-decoration-style
--#{root-defaults.$prefix}-navigation-branding-focus-text-decoration-style
--#{root-defaults.$prefix}-navigation-branding-hover-text-decoration-style
--#{root-defaults.$prefix}-navigation-branding-active-text-decoration-style
--#{root-defaults.$prefix}-navigation-branding-disabled-text-decoration-style
--#{root-defaults.$prefix}-navigation-branding-text-decoration-thickness
--#{root-defaults.$prefix}-navigation-branding-visited-text-decoration-thickness
--#{root-defaults.$prefix}-navigation-branding-focus-text-decoration-thickness
--#{root-defaults.$prefix}-navigation-branding-hover-text-decoration-thickness
--#{root-defaults.$prefix}-navigation-branding-active-text-decoration-thickness
--#{root-defaults.$prefix}-navigation-branding-disabled-text-decoration-thickness
--#{root-defaults.$prefix}-navigation-branding-text-decoration-color
--#{root-defaults.$prefix}-navigation-branding-visited-text-decoration-color
--#{root-defaults.$prefix}-navigation-branding-focus-text-decoration-color
--#{root-defaults.$prefix}-navigation-branding-hover-text-decoration-color
--#{root-defaults.$prefix}-navigation-branding-active-text-decoration-color
--#{root-defaults.$prefix}-navigation-branding-disabled-text-decoration-color

```

The navigation toggle properties:

```scss
--#{root-defaults.$prefix}-navigation-toggle-content

```

Markup

```jsx
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
```
