# Alert

Defaults

```jsx
// Alert selectors.
$alert-selector: ".alert" !default;
$alert-theme-selector-prefix: "." !default;
$alert-body-selector: ".alert-body" !default;
$alert-header-selector: ".alert-header" !default;
$alert-footer-selector: ".alert-footer" !default;
$alert-title-selector: ".alert-title" !default;
$alert-dismisser-selector: ".dismisser" !default;
$alert-hidden-selector: ".hide" !default;
$alert-shown-selector: ".show" !default;
$alert-transition-selector: ".transitioning" !default;
```

Variables

Alert Properties

```jsx
--#{root-defaults.$prefix}-alert-padding-x
--#{root-defaults.$prefix}-alert-padding-y
```

Alert Gap Properties

```jsx
--#{root-defaults.$prefix}-alert-column-gap
--#{root-defaults.$prefix}-alert-row-gap
--#{root-defaults.$prefix}-alert-gap
```

Alert Colour Properties

```jsx
--#{root-defaults.$prefix}-alert-background
--#{root-defaults.$prefix}-alert-color
--#{root-defaults.$prefix}-alert-link-color
--#{root-defaults.$prefix}-alert-link-visited-color
--#{root-defaults.$prefix}-alert-link-focus-color
--#{root-defaults.$prefix}-alert-link-hover-color
--#{root-defaults.$prefix}-alert-link-active-color
--#{root-defaults.$prefix}-alert-link-disabled-color
```

Alert Border Properties

```jsx
--#{root-defaults.$prefix}-alert-border-color
--#{root-defaults.$prefix}-alert-top-left-border-radius
--#{root-defaults.$prefix}-alert-top-right-border-radius
--#{root-defaults.$prefix}-alert-bottom-left-border-radius
--#{root-defaults.$prefix}-alert-bottom-right-border-radius
--#{root-defaults.$prefix}-alert-border-radius
--#{root-defaults.$prefix}-alert-border-style
--#{root-defaults.$prefix}-alert-border-width
--#{root-defaults.$prefix}-alert-border
```

Alert Title Properties

```jsx
--#{root-defaults.$prefix}-alert-title-color
--#{root-defaults.$prefix}-alert-title-font-size
--#{root-defaults.$prefix}-alert-title-font-weight
--#{root-defaults.$prefix}-alert-title-font-family
--#{root-defaults.$prefix}-alert-title-line-height
--#{root-defaults.$prefix}-alert-title-margin
```

Markup

```jsx
    <div class="py-10 full-width container">
      <h2>Alerts</h2>
      <div class="display-grid g-5">
        <div class="alert">
          <div class="alter-header">
            <h3 class="alert-title">Alert</h3>
          </div>
          <div class="alert-body">
            <p>This is some text that describes the alert.</p>
          </div>
          <div class="alert-footer">
            <a href="#">Action</a>
          </div>
          <button class="alert-dismisser button">x</button>
        </div>
        <div class="alert primary">
          <div class="alter-header">
            <h3 class="alert-title">Primary Alert</h3>
          </div>
          <div class="alert-body">
            <p>This is some text that describes the alert.</p>
          </div>
          <div class="alert-footer">
            <a href="#">Primary Action</a>
          </div>
          <button class="alert-dismisser button primary">x</button>
        </div>
        <div class="alert secondary">
          <div class="alter-header">
            <h3 class="alert-title">Secondary Alert</h3>
          </div>
          <div class="alert-body">
            <p>This is some text that describes the alert.</p>
          </div>
          <div class="alert-footer">
            <a href="#">Secondary Action</a>
          </div>
          <button class="alert-dismisser button secondary">x</button>
        </div>
        <div class="alert tertiary">
          <div class="alter-header">
            <h3 class="alert-title">Tertiary Alert</h3>
          </div>
          <div class="alert-body">
            <p>This is some text that describes the alert.</p>
          </div>
          <div class="alert-footer">
            <a href="#">Tertiary Action</a>
          </div>
          <button class="alert-dismisser button tertiary">x</button>
        </div>
      </div>
    </div>
```
