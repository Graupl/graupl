# Responsive Utility Classes

Responsive utility classes are variants on existing utility classes that only get applied given specific conditions such as specific screen sizes, whether an element is hovered or focuses, or if a user has requested a specific color scheme (e.g. dark mode).

The current supported responsive variants are:

- [Screen Aware](#screen-aware-utilties): provides screen size based variants,
- [Theme Aware](#theme-aware-utilities): provides theme based variants,
- [Scheme Aware](#scheme-aware-utilities): provides color-scheme based variants,
- [State Aware](#state-aware-utilities): provides state based variants, and
- [Container Aware](#container-aware-utilities): provides container size based variants.

While some utilities come with pre-defined responsive variants, _all_ utilities have the ability to become responsive with specific flags set during compiling.

## Screen Aware Utilities

Screen aware utility classes provide screen size based variants. They use media queries to determine if the styles should be applied (e.g. `.md:display-none` will only apply the `.display-none` utility on medium sized screens and up).

To enable screen aware utility variants for any given utility class, set it's `$screen-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/display/defaults" as graupl-display-utility-defaults with(
  $screen-aware: true,
);
```

Screen aware utility variants use the following pattern for their generation:

```scss
.#{screen-modifier}:#{utility-selector}
```

By default Graupl will provide the following screen modifiers: `xs:`, `sm:`, `md:`, `lg:`, `xl:`.

## Theme Aware Utilities

Theme aware utility classes provide theme based variants. They use a nested selector to determine if the styles should be applied (e.g. `default-theme:bg-primary` will only apply the `.bg-primary` utility within areas that are _specifically_ using the `.default-theme` class).

To enable theme aware utility variants for any given utility class, set it's `$theme-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/color/defaults" as graupl-color-utility-defaults with(
  $theme-aware: true,
);
```

Theme aware utility variants use the following pattern for their generation:

```scss
.#{theme-modifier}:#{utility-selector}
```

By default Graupl will provide the following theme modifiers: `default-theme:`.

## Scheme Aware Utilities

Scheme aware utility classes provide color-scheme based variants. They use a nested selector to determine if the styles should be applied (e.g. `dark-mode:text-tertiary` will only apply the `.text-tertiary` utility within areas that have their `color-scheme` property set to `dark`).

::: info Note
Scheme aware utilities will be getting an upgrade shortly to properly handle color-scheme queries.
:::

To enable scheme aware utility variants for any given utility class, set it's `$scheme-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/color/defaults" as graupl-color-utility-defaults with(
  $scheme-aware: true,
);
```

Scheme aware utility variants use the following pattern for their generation:

```scss
.#{scheme-modifier}:#{utility-selector}
```
By default Graupl will provide the following scheme modifiers: `light-mode:`, `dark-mode:`

## State Aware Utilities

State aware utility classes provide state based variants. They use a series of nested selectors to determine if the styles should be applied (e.g. `hover:font-weight-bold` will only apply the `.font-weight-bold` utility when an element is hovered).

To enable state aware utility variants for any given utility class, set it's `$state-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/typography/defaults" as graupl-typography-utility-defaults with(
  $state-aware: true,
);
```

State aware utility variants use the following pattern for their generation:

```scss
.#{state-modifier}:#{utility-selector}
```
By default Graupl will provide the following scheme modifiers: `visited:`, `focus:`, `hover:`, `active:`, `disabled:`, `selected:`, `current:`.

## Container Aware Utilities

Container aware utility classes provide container size based variants. They use container queries to determine if the styles should be applied (e.g. `.cq:md:display-none` will only apply the `.display-none` utility on medium sized containers and up).

To enable container aware utility variants for any given utility class, set it's `$container-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/display/defaults" as graupl-display-utility-defaults with(
  $container-aware: true,
);
```

Container aware utility variants use the following pattern for their generation:

```scss
.#{container-modifier}:#{utility-selector}
```

By default Graupl will provide the following container modifiers: `cq:xs:`, `cq:sm:`, `cq:md:`, `cq:lg:`, `cq:xl:`.

