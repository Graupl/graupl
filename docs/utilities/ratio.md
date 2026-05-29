# Ratio Utilities

The ratio utilities provide a set of classes to adjust the `--graupl-ratio` properties of elements.

## `.ratio`

Applies the default border styling to an element.

```css
  .ratio {
    width: 100%;
    aspect-ratio: var(--graupl-ratio, auto);
  }
```

## `.force-ratio`

Ensures child elements maintain the aspect ratio.

```css
  .force-ratio {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
```

## Custom Ratio Properties

Used to customize ratio.

| Class Name | Property | Value |
| --- | --- | --- |
| [`--graupl-ratio`] | Aspect-ratio used by `.ratio` | `auto` |

## Aspect Ratio

| Class Name | Property | Value |
| --- | --- | --- |
| [`.one-by-one`](#one-by-one) | `--graupl-ratio` | `1:1` |
| [`.two-by-one`](#two-by-one) | `--graupl-ratio` | `2:1` |
| [`.four-by-three`](#four-by-three) | `--graupl-ratio` | `4:3` |
| [`.four-by-one`](#four-by-one) | `--graupl-ratio` | `4:1` |
| [`.sixteen-by-nine`](#sixteen-by-nine) | `--graupl-ratio` | `16:9` |
| [`.three-by-two`](#one-by-one) | `--graupl-ratio` | `3:2` |
| [`.eight-by-five`](#one-by-one) | `--graupl-ratio` | `8:5` |

### `.one-by-one`

Sets the `--graupl-ratio` property to `1:1`.

### `.two-by-one`

Sets the `--graupl-ratio` property to `2:1`.

### `.four-by-three`

Sets the `--graupl-ratio` property to `4:3`.

### `.four-by-one`

Sets the `--graupl-ratio` property to `4:1`.

### `.sixteen-by-nine`

Sets the `--graupl-ratio` property to `16:9`.

### `.three-by-two`

Sets the `--graupl-ratio` property to `3:2`.

### `.eight-by-five`

Sets the `--graupl-ratio` property to `8:5`.

## Customization

To customize the ratio utilities, you can use the following variables.

| Variable | Default Value | Description |
| --- | --- | --- |
| `$selector-base` | `"."` | The base selector for the utility classes. |
| `$use-important` | `true` | A flag to determine if the `!important` flag should be added to the utility classes. |
| `$generate-base-utilities` | `true` | A flag to determine if the base utility classes should be generated. |
| `$screen-aware` | `true` | A flag to generate screen-aware utility classes. |
| `$theme-aware` | `false` | A flag to generate theme-aware utility classes. |
| `$state-aware` | `false` | A flag to generate state-aware utility classes. |
| `$ratio-aware` | `true` | A flag to generate ratio-aware utility classes. |
| `$screen-aware-separator` | `"\\:"` | The separator for screen-aware utility classes. |
| `$theme-aware-separator` | `"\\:"` | The separator for theme-aware utility classes. |
| `$state-aware-separator` | `"\\:"` | The separator for state-aware utility classes. |
| `$ratio-aware-separator` | `"\\:"` | The separator for ratio-aware utility classes. |
| `$screen-aware-selector-prefix` | `""` | The prefix for the screen-aware utility classes. |
| `$theme-aware-selector-prefix` | `""` | The prefix for the theme-aware utility classes. |
| `$state-aware-selector-prefix` | `""` | The prefix for the state-aware utility classes. |
| `$ratio-aware-selector-prefix` | `"cq\\:"` | The prefix for the ratio-aware utility classes. |
| `$ratio-selector-prefix` | `"ratio-"` | The prefix for the ratio utility classes. |
| `$ratio-properties` | `()` | Map of the ratio utility values. |

## Responsive variants

To generate responsive ratio utilities, you can set the `$screen-aware`, `$theme-aware`, `$state-aware`, or `$ratio-aware` variables to `true`.

By default, no responsive alignment utilities are generated.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
