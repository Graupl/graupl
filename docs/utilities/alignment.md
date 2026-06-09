# Alignment Utilities

The alignment utilities provide a set of classes to adjust the `align-content`, `align-items`, and `align-self` properties of elements.

## Align Content

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-content-normal` | align-content | `normal` |
| `.align-content-start` | align-content | `flex-start` |
| `.align-content-end` | align-content | `flex-end` |
| `.align-content-center` | align-content | `center` |
| `.align-content-between` | align-content | `space-between` |
| `.align-content-around` | align-content | `space-around` |
| `.align-content-evenly` | align-content | `space-evenly` |
| `.align-content-baseline` | align-content | `baseline` |
| `.align-content-stretch` | align-content | `stretch` |

## Align Items

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-items-start` | align-items | `start` |
| `.align-items-end` | align-items | `end` |
| `.align-items-center` | align-items | `center` |
| `.align-items-baseline` | align-items | `baseline` |
| `.align-items-stretch` | align-items | `stretch` |

## Align Self

| Class Name | Property | Value |
| --- | --- | --- |
| `.align-self-auto` | align-self | `auto` |
| `.align-self-start` | align-self | `start` |
| `.align-self-end` | align-self | `end` |
| `.align-self-center` | align-self | `center` |
| `.align-self-baseline` | align-self | `baseline` |
| `.align-self-stretch` | align-self | `stretch` |

## Customization

To customize the alignment utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
