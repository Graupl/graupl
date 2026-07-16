# Justification Utilities

The justification utilities provide a set of classes to adjust the `justify-content`, `justify-items`, and `justify-self` properties of elements.

## Justify Content

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-content-normal` | justify-content | `normal` |
| `.justify-content-start` | justify-content | `flex-start` |
| `.justify-content-end` | justify-content | `flex-end` |
| `.justify-content-center` | justify-content | `center` |
| `.justify-content-between` | justify-content | `space-between` |
| `.justify-content-around` | justify-content | `space-around` |
| `.justify-content-evenly` | justify-content | `space-evenly` |
| `.justify-content-stretch` | justify-content | `stretch` |

## Justify Items

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-items-start` | justify-items | `start` |
| `.justify-items-end` | justify-items | `end` |
| `.justify-items-center` | justify-items | `center` |
| `.justify-items-stretch` | justify-items | `stretch` |

## Justify Self

| Class Name | Property | Value |
| --- | --- | --- |
| `.justify-self-auto` | justify-self | `auto` |
| `.justify-self-start` | justify-self | `start` |
| `.justify-self-end` | justify-self | `end` |
| `.justify-self-center` | justify-self | `center` |
| `.justify-self-stretch` | justify-self | `stretch` |

## Customization

To customize the justification utilities, you can use the following variables.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | Base selector for utility classes. | `"."` |
| `$selector-prefix` | The selector prefix for all utility classes. | `""` |
| `$selector-suffix` | The selctor suffix for all utility classes. | `""` |
| `$selector-separator` | The selector separator for all utility classes. | `""` |
| `$use-important` | Appends `!important` to generated utility declarations. | `true` |
| `$generate-base-utilities` | Generates the base utility classes. | `true` |
| `$screen-aware` | Enables screen-aware utility variants. | `false` |
| `$theme-aware` | Enables theme-aware utility variants. | `false` |
| `$scheme-aware` | Enables scheme-aware utility variants. | `false` |
| `$state-aware` | Enables state-aware utility variants. | `false` |
| `$container-aware` | Enables container-aware utility variants. | `false` |
| `$screen-aware-selector-prefix` | Prefix to the screen-aware portion of utility selectors. | `""` |
| `$screen-aware-selector-suffix` | Suffix to the screen-aware portion of utility selectors. | `""` |
| `$screen-aware-selector-separator` | Separator inserted for screen-aware utility selectors. | `"\\:"` |
| `$theme-aware-selector-prefix` | Prefix to the theme-aware portion of utility selectors. | `""` |
| `$theme-aware-selector-suffix` | Suffix to the theme-aware portion of utility selectors. | `"-theme"` |
| `$theme-aware-selector-separator` | Separator inserted for theme-aware utility selectors. | `"\\:"` |
| `$scheme-aware-selector-prefix` | Prefix to the scheme-aware portion of utility selectors. | `""` |
| `$scheme-aware-selector-suffix` | Suffix to the scheme-aware portion of utility selectors. | `"-mode"` |
| `$scheme-aware-selector-separator` | Separator inserted for scheme-aware utility selectors. | `"\\:"` |
| `$state-aware-selector-prefix` | Prefix to the state-aware portion of utility selectors. | `""` |
| `$state-aware-selector-suffix` | Suffix to the state-aware portion of utility selectors. | `""` |
| `$state-aware-selector-separator` | Separator inserted for state-aware utility selectors. | `"\\:"` |
| `$container-aware-selector-prefix` | Prefix to the container-aware portion of utility selectors. | `"cq\\:"` |
| `$container-aware-selector-suffix` | Suffix to the container-aware portion of utility selectors. | `""` |
| `$container-aware-selector-separator` | Separator inserted for container-aware utility selectors. | `"\\:"` |
| `$utility-properties` | Map of utility properties. | `()` |
| `$utility-values` | Map of utility values. | `()` |
| `$utility-map` | Map of utility property/value pairs. | `()` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for justification.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
