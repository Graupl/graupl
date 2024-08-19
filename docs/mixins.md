# Mixins

A mixin used to define layers. So the styling is exported in the correct order.

`*@mixin* layer($layer)`

A media query for targetting users who have not requested reduced motion.

```jsx
@mixin animation-on {
  @media (prefers-reduced-motion: no-preference) {
    @content;
  }
}
```

A media query for targetting users who have requested reduced motion.

```jsx
@mixin animation-off {
  @media (prefers-reduced-motion: reduce) {
    @content;
  }
}
```

A media query for targetting specific screen sizes.

```sass
@mixin screen($size) {
  $screen-size: map.get(root-defaults.$screen-sizes, $size);

  @media screen and #{$screen-size} {
    @content;
  }
}
```

```sass
@mixin screen-trigger($size) {
  $screen-size-trigger: map.get(root-defaults.$screen-size-triggers, $size);

  @media screen and #{$screen-size-trigger} {
    @content;
  }
}
```
