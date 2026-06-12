# Flex Utilities

The flex utilities provide a set of classes to adjust the `flex-basis`, `flex-direction`,`flex-grow`, `flex-shrink`, and `flex-wrap` properties of elements.

## Flex Basis

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-auto` | flex-basis | `auto` |
| `.flex-fit-content` | flex-basis | `fit-content` |
| `.flex-max-content` | flex-basis | `max-content` |
| `.flex-min-content` | flex-basis | `min-content` |
| `.flex-content` | flex-basis | `content` |
| `.flex-0` | flex-basis | `0` |
| `.flex-full` | flex-basis | `100%` |
| `.flex-quarter` | flex-basis | `25%` |
| `.flex-half` | flex-basis | `50%` |
| `.flex-three-quarters` | flex-basis | `75%` |
| `.flex-third` | flex-basis | `33.3333%` |
| `.flex-two-thirds` | flex-basis | `66.6667%` |

## Flex Direction

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-row` | flex-direction | `row` |
| `.flex-row-reverse` | flex-direction | `row-reverse` |
| `.flex-col` | flex-direction | `column` |
| `.flex-col-reverse` | flex-direction | `column-reverse` |

## Flex Grow
| `.flex-grow` | flex-grow | `1` |
| `.flex-no-grow` | flex-grow | `0` |

## Flex Shrink

| `.flex-shrink` | flex-shrink | `1` |
| `.flex-no-shrink` | flex-shrink | `0` |

## Flex Wrap

| `.flex-wrap` | flex-wrap | `wrap` |
| `.flex-wrap-reverse` | flex-wrap | `wrap-reverse` |
| `.flex-nowrap` | flex-wrap | `nowrap` |

## Customization

To customize the flex utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for flex.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
