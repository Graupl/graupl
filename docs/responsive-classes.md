# Responsive Classes

Responsive classes apply styles based on conditions such as screen width, container width, or whether an element has focus. Components, layouts, and utilities can all provide responsive variants. For example, `count-2 lg:count-3` targets two columns by default and three from the large breakpoint.

Graupl supports five types of responsive variants.

- [Screen Aware](#screen-aware-utilities): provides screen size based variants,
- [Theme Aware](#theme-aware-utilities): provides theme based variants,
- [Scheme Aware](#scheme-aware-utilities): provides color-scheme based variants,
- [State Aware](#state-aware-utilities): provides state based variants, and
- [Container Aware](#container-aware-utilities): provides container size based variants.

Check the documentation for each component, layout, or utility to see which variants it generates by default. When compiling your own version of Graupl, use the Sass settings supported by that module to control which variants it generates.

## Screen-aware variants {#screen-aware-utilities}

Screen-aware classes provide screen size based variants. They use media queries to determine if the styles should be applied (e.g. `.md:display-none` will only apply the `.display-none` utility on medium sized screens and up).

To enable screen aware utility variants for any given utility class, set its `$screen-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/display/defaults" as graupl-display-utility-defaults with(
  $screen-aware: true,
);
```

Screen-aware variants use the following pattern for their generation:

```scss
.#{screen-modifier}:#{class-selector}
```

When screen-aware variants are enabled, Graupl generates them at these default minimum viewport widths.

| Prefix | Minimum width |
| ------ | ------------- |
| `xs:`  | 0px           |
| `sm:`  | 576px         |
| `md:`  | 768px         |
| `lg:`  | 1024px        |
| `xl:`  | 1280px        |
| `hd:`  | 1500px        |
| `qhd:` | 1921px        |
| `uhd:` | 2561px        |

## Theme-aware variants {#theme-aware-utilities}

Theme-aware classes provide theme based variants. They use a nested selector to determine if the styles should be applied (e.g. `default-theme:bg-primary` will only apply the `.bg-primary` utility within areas that are _specifically_ using the `.default-theme` class).

To enable theme aware utility variants for any given utility class, set its `$theme-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/color/defaults" as graupl-color-utility-defaults with(
  $theme-aware: true,
);
```

Theme-aware variants use the following pattern for their generation:

```scss
.#{theme-modifier}:#{class-selector}
```

By default Graupl will provide the following theme modifiers: `default-theme:`.

## Scheme-aware variants {#scheme-aware-utilities}

Scheme-aware classes provide color-scheme based variants. They use a nested selector to determine if the styles should be applied (e.g. `dark-mode:text-tertiary` will only apply the `.text-tertiary` utility within areas using the `.dark-mode` class).

::: info Note
Scheme aware utilities will be getting an upgrade shortly to properly handle color-scheme queries.
:::

To enable scheme aware utility variants for any given utility class, set its `$scheme-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/color/defaults" as graupl-color-utility-defaults with(
  $scheme-aware: true,
);
```

Scheme-aware variants use the following pattern for their generation:

```scss
.#{scheme-modifier}:#{class-selector}
```
By default Graupl will provide the following scheme modifiers: `light-mode:`, `dark-mode:`

## State-aware variants {#state-aware-utilities}

State-aware classes provide state based variants. They use a series of nested selectors to determine if the styles should be applied (e.g. `hover:font-weight-bold` will only apply the `.font-weight-bold` utility inside a hovered ancestor that is itself inside an element with the `.hover` class).

To enable state aware utility variants for any given utility class, set its `$state-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/typography/defaults" as graupl-typography-utility-defaults with(
  $state-aware: true,
);
```

State-aware variants use the following pattern for their generation:

```scss
.#{state-modifier}:#{class-selector}
```
By default Graupl will provide the following state modifiers: `visited:`, `focus:`, `hover:`, `active:`, `disabled:`, `selected:`, `current:`.

## Container-aware variants {#container-aware-utilities}

Container-aware classes provide container size based variants. They use container queries to determine if the styles should be applied (e.g. `.cq:md:display-none` will only apply the `.display-none` utility on medium sized containers and up).

To enable container aware variants for a utility, set its `$container-aware` variable to `true`.

```scss
@use "pkg:@graupl/core/src/utilities/display/defaults" as graupl-display-utility-defaults with(
  $container-aware: true,
);
```

Container-aware variants use the following pattern for their generation:

```scss
.#{container-modifier}:#{class-selector}
```

When container-aware variants are enabled, the default container breakpoints use the same widths as the [screen breakpoints](#screen-aware-utilities). Use `cq:` before the breakpoint prefix, as in `cq:md:` or `cq:hd:`.

### Enable container-aware variants globally

Container-aware variants are off globally by default to keep build sizes small. To generate them for modules that enable `$container-aware`, set `$container-aware-utilities` to `true` in the Core defaults.

```scss
@use "pkg:@graupl/core/src/defaults" as graupl-core-defaults with (
  $container-aware-utilities: true,
);
```

