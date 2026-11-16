<script setup>
  import LiveExample from "../vue-components/LiveExample.vue";

  const exampleBodyText = `
<p><b>What to bring</b>: parchment and a quill. <strong>Register by Friday</strong> to reserve a seat.</p>
<p>We'll start with a reading from <i>Dragon Slaying for Dummies</i>. Bring your <em>best</em> dragon voice.</p>
<p><small>Please leave your familiar at home.</small></p>
  `;

  const exampleHeadings = `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
  `;
</script>

# Typography

Graupl provides a set of styles for headings and body text. By default, these styles apply to HTML elements without adding classes.

## Base elements

### Headings

<live-example :source-code="exampleHeadings" />

### Body text

Use `<b>` or `<strong>` for bold text, `<i>` or `<em>` for italics, and `<small>` for small print.

<live-example :source-code="exampleBodyText" />

For examples of changing the size or weight of individual elements, see the [font size](../utilities/typography.md#font-size) and [font weight](../utilities/typography.md#font-weight) utilities.

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/theme/typography.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/theme/typography.css">
```

```scss [Sass]
@use "pkg:@graupl/core/theme/typography.scss";
```

:::

## Custom Properties

The following custom properties can be used to customize the typography theme:

| Property                            | Description                                              | Default Value                                                                                           |
| ----------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `--graupl-base-font-size`           | The base font size used to generate the font size scale. | `1rem`                                                                                                  |
| `--graupl-font-size-xs`             | The extra-small font size.                               | `calc(0.694 * var(--graupl-base-font-size))`                                                            |
| `--graupl-font-size-sm`             | The small font size.                                     | `calc(0.833 * var(--graupl-base-font-size))`                                                            |
| `--graupl-font-size-base`           | The base font size.                                      | `calc(1 * var(--graupl-base-font-size))`                                                                |
| `--graupl-font-size-lg`             | The large font size.                                     | `calc(1.2 * var(--graupl-base-font-size))`                                                              |
| `--graupl-font-size-xl`             | The extra-large font size.                               | `calc(1.44 * var(--graupl-base-font-size))`                                                             |
| `--graupl-font-size-2xl`            | The 2XL font size.                                       | `calc(1.728 * var(--graupl-base-font-size))`                                                            |
| `--graupl-font-size-3xl`            | The 3XL font size.                                       | `calc(2.074 * var(--graupl-base-font-size))`                                                            |
| `--graupl-font-size-4xl`            | The 4XL font size.                                       | `calc(2.488 * var(--graupl-base-font-size))`                                                            |
| `--graupl-font-size-5xl`            | The 5XL font size.                                       | `calc(2.986 * var(--graupl-base-font-size))`                                                            |
| `--graupl-font-weight-light`        | The light font weight.                                   | `300`                                                                                                   |
| `--graupl-font-weight-normal`       | The normal font weight.                                  | `400`                                                                                                   |
| `--graupl-font-weight-bold`         | The bold font weight.                                    | `700`                                                                                                   |
| `--graupl-root-font-family`         | The font family of the root element.                     | `system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif` |
| `--graupl-root-font-size`           | The font size of the root element.                       | `clamp(0.85rem, calc(0.8rem + 0.5vw), 1.25rem)`                                                         |
| `--graupl-root-font-weight`         | The font weight of the root element.                     | `var(--graupl-font-weight-normal)`                                                                      |
| `--graupl-root-font-style`          | The font style of the root element.                      | `normal`                                                                                                |
| `--graupl-root-font-variant`        | The font variant of the root element.                    | `normal`                                                                                                |
| `--graupl-root-line-height`         | The line height of the root element.                     | `1.2em`                                                                                                 |
| `--graupl-root-letter-spacing`      | The letter spacing of the root element.                  | `normal`                                                                                                |
| `--graupl-root-word-spacing`        | The word spacing of the root element.                    | `normal`                                                                                                |
| `--graupl-font-size`                | The shared font size.                                    | `inherit`                                                                                               |
| `--graupl-font-weight`              | The shared font weight.                                  | `inherit`                                                                                               |
| `--graupl-font-style`               | The shared font style.                                   | `inherit`                                                                                               |
| `--graupl-font-variant`             | The shared font variant.                                 | `inherit`                                                                                               |
| `--graupl-font-color`               | The shared text colour.                                  | `currentColor`                                                                                          |
| `--graupl-font-family`              | The shared font family.                                  | `inherit`                                                                                               |
| `--graupl-line-height`              | The shared line height.                                  | `var(--graupl-root-line-height)`                                                                        |
| `--graupl-letter-spacing`           | The shared letter spacing.                               | `inherit`                                                                                               |
| `--graupl-word-spacing`             | The shared word spacing.                                 | `inherit`                                                                                               |
| `--graupl-paragraph-font-size`      | The font size of paragraph elements.                     | `var(--graupl-font-size)`                                                                               |
| `--graupl-paragraph-font-weight`    | The font weight of paragraph elements.                   | `var(--graupl-font-weight)`                                                                             |
| `--graupl-paragraph-font-style`     | The font style of paragraph elements.                    | `var(--graupl-font-style)`                                                                              |
| `--graupl-paragraph-font-variant`   | The font variant of paragraph elements.                  | `var(--graupl-font-variant)`                                                                            |
| `--graupl-paragraph-color`          | The text colour of paragraph elements.                   | `var(--graupl-font-color)`                                                                              |
| `--graupl-paragraph-font-family`    | The font family of paragraph elements.                   | `var(--graupl-font-family)`                                                                             |
| `--graupl-paragraph-line-height`    | The line height of paragraph elements.                   | `var(--graupl-line-height)`                                                                             |
| `--graupl-paragraph-letter-spacing` | The letter spacing of paragraph elements.                | `var(--graupl-letter-spacing)`                                                                          |
| `--graupl-paragraph-word-spacing`   | The word spacing of paragraph elements.                  | `var(--graupl-word-spacing)`                                                                            |
| `--graupl-paragraph-margin`         | The margin of paragraph elements.                        | `0 0 var(--graupl-spacer-2) 0`                                                                          |
| `--graupl-small-font-size`          | The font size of small text.                             | `var(--graupl-font-size-sm)`                                                                            |
| `--graupl-small-font-weight`        | The font weight of small text.                           | `var(--graupl-font-weight)`                                                                             |
| `--graupl-small-font-style`         | The font style of small text.                            | `var(--graupl-font-style)`                                                                              |
| `--graupl-small-font-variant`       | The font variant of small text.                          | `var(--graupl-font-variant)`                                                                            |
| `--graupl-small-color`              | The text colour of small text.                           | `var(--graupl-font-color)`                                                                              |
| `--graupl-small-font-family`        | The font family of small text.                           | `var(--graupl-font-family)`                                                                             |
| `--graupl-small-line-height`        | The line height of small text.                           | `var(--graupl-line-height)`                                                                             |
| `--graupl-small-letter-spacing`     | The letter spacing of small text.                        | `var(--graupl-letter-spacing)`                                                                          |
| `--graupl-small-word-spacing`       | The word spacing of small text.                          | `var(--graupl-word-spacing)`                                                                            |
| `--graupl-small-margin`             | The margin of small text.                                | `0 0 var(--graupl-spacer-2) 0`                                                                          |
| `--graupl-bold-font-size`           | The font size of bold text.                              | `var(--graupl-font-size)`                                                                               |
| `--graupl-bold-font-weight`         | The font weight of bold text.                            | `var(--graupl-font-weight)`                                                                             |
| `--graupl-bold-font-style`          | The font style of bold text.                             | `var(--graupl-font-style)`                                                                              |
| `--graupl-bold-font-variant`        | The font variant of bold text.                           | `var(--graupl-font-variant)`                                                                            |
| `--graupl-bold-color`               | The text colour of bold text.                            | `var(--graupl-font-color)`                                                                              |
| `--graupl-bold-font-family`         | The font family of bold text.                            | `var(--graupl-font-family)`                                                                             |
| `--graupl-bold-line-height`         | The line height of bold text.                            | `var(--graupl-line-height)`                                                                             |
| `--graupl-bold-letter-spacing`      | The letter spacing of bold text.                         | `var(--graupl-letter-spacing)`                                                                          |
| `--graupl-bold-word-spacing`        | The word spacing of bold text.                           | `var(--graupl-word-spacing)`                                                                            |
| `--graupl-bold-margin`              | The margin of bold text.                                 | `0 0 var(--graupl-spacer-2) 0`                                                                          |
| `--graupl-italic-font-size`         | The font size of italic text.                            | `var(--graupl-font-size)`                                                                               |
| `--graupl-italic-font-weight`       | The font weight of italic text.                          | `var(--graupl-font-weight)`                                                                             |
| `--graupl-italic-font-style`        | The font style of italic text.                           | `italic`                                                                                                |
| `--graupl-italic-font-variant`      | The font variant of italic text.                         | `var(--graupl-font-variant)`                                                                            |
| `--graupl-italic-color`             | The text colour of italic text.                          | `var(--graupl-font-color)`                                                                              |
| `--graupl-italic-font-family`       | The font family of italic text.                          | `var(--graupl-font-family)`                                                                             |
| `--graupl-italic-line-height`       | The line height of italic text.                          | `var(--graupl-line-height)`                                                                             |
| `--graupl-italic-letter-spacing`    | The letter spacing of italic text.                       | `var(--graupl-letter-spacing)`                                                                          |
| `--graupl-italic-word-spacing`      | The word spacing of italic text.                         | `var(--graupl-word-spacing)`                                                                            |
| `--graupl-italic-margin`            | The margin of italic text.                               | `0 0 var(--graupl-spacer-2) 0`                                                                          |
| `--graupl-heading-font-weight`      | The font weight of headings.                             | `var(--graupl-font-weight-bold)`                                                                        |
| `--graupl-heading-font-style`       | The font style of headings.                              | `var(--graupl-font-style)`                                                                              |
| `--graupl-heading-font-variant`     | The font variant of headings.                            | `var(--graupl-font-variant)`                                                                            |
| `--graupl-heading-color`            | The text colour of headings.                             | `var(--graupl-font-color)`                                                                              |
| `--graupl-heading-font-family`      | The font family of headings.                             | `var(--graupl-font-family)`                                                                             |
| `--graupl-heading-line-height`      | The line height of headings.                             | `var(--graupl-line-height)`                                                                             |
| `--graupl-heading-letter-spacing`   | The letter spacing of headings.                          | `var(--graupl-letter-spacing)`                                                                          |
| `--graupl-heading-word-spacing`     | The word spacing of headings.                            | `var(--graupl-word-spacing)`                                                                            |
| `--graupl-heading-margin`           | The margin of headings.                                  | `var(--graupl-spacer-5) 0 var(--graupl-spacer-2) 0`                                                     |
| `--graupl-h1-font-size`             | The font size of H1 elements.                            | `var(--graupl-font-size-5xl)`                                                                           |
| `--graupl-h1-font-weight`           | The font weight of H1 elements.                          | `var(--graupl-heading-font-weight)`                                                                     |
| `--graupl-h1-font-style`            | The font style of H1 elements.                           | `var(--graupl-heading-font-style)`                                                                      |
| `--graupl-h1-font-variant`          | The font variant of H1 elements.                         | `var(--graupl-heading-font-variant)`                                                                    |
| `--graupl-h1-color`                 | The text colour of H1 elements.                          | `var(--graupl-heading-color)`                                                                           |
| `--graupl-h1-font-family`           | The font family of H1 elements.                          | `var(--graupl-heading-font-family)`                                                                     |
| `--graupl-h1-line-height`           | The line height of H1 elements.                          | `var(--graupl-heading-line-height)`                                                                     |
| `--graupl-h1-letter-spacing`        | The letter spacing of H1 elements.                       | `var(--graupl-heading-letter-spacing)`                                                                  |
| `--graupl-h1-word-spacing`          | The word spacing of H1 elements.                         | `var(--graupl-heading-word-spacing)`                                                                    |
| `--graupl-h1-margin`                | The margin of H1 elements.                               | `var(--graupl-heading-margin)`                                                                          |
| `--graupl-h2-font-size`             | The font size of H2 elements.                            | `var(--graupl-font-size-4xl)`                                                                           |
| `--graupl-h2-font-weight`           | The font weight of H2 elements.                          | `var(--graupl-heading-font-weight)`                                                                     |
| `--graupl-h2-font-style`            | The font style of H2 elements.                           | `var(--graupl-heading-font-style)`                                                                      |
| `--graupl-h2-font-variant`          | The font variant of H2 elements.                         | `var(--graupl-heading-font-variant)`                                                                    |
| `--graupl-h2-color`                 | The text colour of H2 elements.                          | `var(--graupl-heading-color)`                                                                           |
| `--graupl-h2-font-family`           | The font family of H2 elements.                          | `var(--graupl-heading-font-family)`                                                                     |
| `--graupl-h2-line-height`           | The line height of H2 elements.                          | `var(--graupl-heading-line-height)`                                                                     |
| `--graupl-h2-letter-spacing`        | The letter spacing of H2 elements.                       | `var(--graupl-heading-letter-spacing)`                                                                  |
| `--graupl-h2-word-spacing`          | The word spacing of H2 elements.                         | `var(--graupl-heading-word-spacing)`                                                                    |
| `--graupl-h2-margin`                | The margin of H2 elements.                               | `var(--graupl-heading-margin)`                                                                          |
| `--graupl-h3-font-size`             | The font size of H3 elements.                            | `var(--graupl-font-size-3xl)`                                                                           |
| `--graupl-h3-font-weight`           | The font weight of H3 elements.                          | `var(--graupl-heading-font-weight)`                                                                     |
| `--graupl-h3-font-style`            | The font style of H3 elements.                           | `var(--graupl-heading-font-style)`                                                                      |
| `--graupl-h3-font-variant`          | The font variant of H3 elements.                         | `var(--graupl-heading-font-variant)`                                                                    |
| `--graupl-h3-color`                 | The text colour of H3 elements.                          | `var(--graupl-heading-color)`                                                                           |
| `--graupl-h3-font-family`           | The font family of H3 elements.                          | `var(--graupl-heading-font-family)`                                                                     |
| `--graupl-h3-line-height`           | The line height of H3 elements.                          | `var(--graupl-heading-line-height)`                                                                     |
| `--graupl-h3-letter-spacing`        | The letter spacing of H3 elements.                       | `var(--graupl-heading-letter-spacing)`                                                                  |
| `--graupl-h3-word-spacing`          | The word spacing of H3 elements.                         | `var(--graupl-heading-word-spacing)`                                                                    |
| `--graupl-h3-margin`                | The margin of H3 elements.                               | `var(--graupl-heading-margin)`                                                                          |
| `--graupl-h4-font-size`             | The font size of H4 elements.                            | `var(--graupl-font-size-2xl)`                                                                           |
| `--graupl-h4-font-weight`           | The font weight of H4 elements.                          | `var(--graupl-heading-font-weight)`                                                                     |
| `--graupl-h4-font-style`            | The font style of H4 elements.                           | `var(--graupl-heading-font-style)`                                                                      |
| `--graupl-h4-font-variant`          | The font variant of H4 elements.                         | `var(--graupl-heading-font-variant)`                                                                    |
| `--graupl-h4-color`                 | The text colour of H4 elements.                          | `var(--graupl-heading-color)`                                                                           |
| `--graupl-h4-font-family`           | The font family of H4 elements.                          | `var(--graupl-heading-font-family)`                                                                     |
| `--graupl-h4-line-height`           | The line height of H4 elements.                          | `var(--graupl-heading-line-height)`                                                                     |
| `--graupl-h4-letter-spacing`        | The letter spacing of H4 elements.                       | `var(--graupl-heading-letter-spacing)`                                                                  |
| `--graupl-h4-word-spacing`          | The word spacing of H4 elements.                         | `var(--graupl-heading-word-spacing)`                                                                    |
| `--graupl-h4-margin`                | The margin of H4 elements.                               | `var(--graupl-heading-margin)`                                                                          |
| `--graupl-h5-font-size`             | The font size of H5 elements.                            | `var(--graupl-font-size-xl)`                                                                            |
| `--graupl-h5-font-weight`           | The font weight of H5 elements.                          | `var(--graupl-heading-font-weight)`                                                                     |
| `--graupl-h5-font-style`            | The font style of H5 elements.                           | `var(--graupl-heading-font-style)`                                                                      |
| `--graupl-h5-font-variant`          | The font variant of H5 elements.                         | `var(--graupl-heading-font-variant)`                                                                    |
| `--graupl-h5-color`                 | The text colour of H5 elements.                          | `var(--graupl-heading-color)`                                                                           |
| `--graupl-h5-font-family`           | The font family of H5 elements.                          | `var(--graupl-heading-font-family)`                                                                     |
| `--graupl-h5-line-height`           | The line height of H5 elements.                          | `var(--graupl-heading-line-height)`                                                                     |
| `--graupl-h5-letter-spacing`        | The letter spacing of H5 elements.                       | `var(--graupl-heading-letter-spacing)`                                                                  |
| `--graupl-h5-word-spacing`          | The word spacing of H5 elements.                         | `var(--graupl-heading-word-spacing)`                                                                    |
| `--graupl-h5-margin`                | The margin of H5 elements.                               | `var(--graupl-heading-margin)`                                                                          |
| `--graupl-h6-font-size`             | The font size of H6 elements.                            | `var(--graupl-font-size-lg)`                                                                            |
| `--graupl-h6-font-weight`           | The font weight of H6 elements.                          | `var(--graupl-heading-font-weight)`                                                                     |
| `--graupl-h6-font-style`            | The font style of H6 elements.                           | `var(--graupl-heading-font-style)`                                                                      |
| `--graupl-h6-font-variant`          | The font variant of H6 elements.                         | `var(--graupl-heading-font-variant)`                                                                    |
| `--graupl-h6-color`                 | The text colour of H6 elements.                          | `var(--graupl-heading-color)`                                                                           |
| `--graupl-h6-font-family`           | The font family of H6 elements.                          | `var(--graupl-heading-font-family)`                                                                     |
| `--graupl-h6-line-height`           | The line height of H6 elements.                          | `var(--graupl-heading-line-height)`                                                                     |
| `--graupl-h6-letter-spacing`        | The letter spacing of H6 elements.                       | `var(--graupl-heading-letter-spacing)`                                                                  |
| `--graupl-h6-word-spacing`          | The word spacing of H6 elements.                         | `var(--graupl-heading-word-spacing)`                                                                    |
| `--graupl-h6-margin`                | The margin of H6 elements.                               | `var(--graupl-heading-margin)`                                                                          |

Change `--graupl-base-font-size` to adjust the font-size scale, or set a property for the element you want to adjust.

## Sass variables

The following Sass variables can be used to customize the generation of the typography theme:

| Variable                      | Description                                               | Default Value                                   |
| ----------------------------- | --------------------------------------------------------- | ----------------------------------------------- |
| `$selector-base`              | The prefix used for element selectors.                    | `""`                                            |
| `$modifier-selector-base`     | The prefix used for modifier selectors.                   | `"."`                                           |
| `$paragraph-selector-base`    | The prefix for the paragraph selector.                    | `""`                                            |
| `$paragraph-selector`         | The paragraph element selector.                           | `"p"`                                           |
| `$small-selector-base`        | The prefix for the small text selector.                   | `""`                                            |
| `$small-selector`             | The small text element selector.                          | `"small"`                                       |
| `$h1-selector-base`           | The prefix for the H1 selector.                           | `""`                                            |
| `$h1-selector`                | The H1 element selector.                                  | `"h1"`                                          |
| `$h2-selector-base`           | The prefix for the H2 selector.                           | `""`                                            |
| `$h2-selector`                | The H2 element selector.                                  | `"h2"`                                          |
| `$h3-selector-base`           | The prefix for the H3 selector.                           | `""`                                            |
| `$h3-selector`                | The H3 element selector.                                  | `"h3"`                                          |
| `$h4-selector-base`           | The prefix for the H4 selector.                           | `""`                                            |
| `$h4-selector`                | The H4 element selector.                                  | `"h4"`                                          |
| `$h5-selector-base`           | The prefix for the H5 selector.                           | `""`                                            |
| `$h5-selector`                | The H5 element selector.                                  | `"h5"`                                          |
| `$h6-selector-base`           | The prefix for the H6 selector.                           | `""`                                            |
| `$h6-selector`                | The H6 element selector.                                  | `"h6"`                                          |
| `$root-selector-base`         | The prefix for the root selector.                         | `":"`                                           |
| `$root-selector`              | The root element selector.                                | `"root"`                                        |
| `$bold-selector-base`         | The prefix for the bold selector.                         | `""`                                            |
| `$bold-selector`              | The bold element selector.                                | `"b"`                                           |
| `$strong-selector-base`       | The prefix for the strong selector.                       | `""`                                            |
| `$strong-selector`            | The strong element selector.                              | `"strong"`                                      |
| `$emphasis-selector-base`     | The prefix for the emphasis selector.                     | `""`                                            |
| `$emphasis-selector`          | The emphasis element selector.                            | `"em"`                                          |
| `$italic-selector-base`       | The prefix for the italic selector.                       | `""`                                            |
| `$italic-selector`            | The italic element selector.                              | `"i"`                                           |
| `$generate-base-font-sizes`   | A flag to generate the base font-size scale.              | `true`                                          |
| `$generate-base-font-weights` | A flag to generate the base font-weight scale.            | `true`                                          |
| `$base-font-size`             | The base font size used to generate the font size scale.  | `1rem`                                          |
| `$root-font-size`             | The font size of the root element.                        | `clamp(0.85rem, calc(0.8rem + 0.5vw), 1.25rem)` |
| `$root-line-height`           | The line height of the root element.                      | `1.2em`                                         |
| `$root-letter-spacing`        | The letter spacing of the root element.                   | `normal`                                        |
| `$root-word-spacing`          | The word spacing of the root element.                     | `normal`                                        |
| `$root-font-style`            | The font style of the root element.                       | `normal`                                        |
| `$root-font-variant`          | The font variant of the root element.                     | `normal`                                        |
| `$font-size-multipliers`      | A map of overrides for the default font size multipliers. | `()`                                            |
| `$font-weights`               | A map of overrides for the default font weights.          | `()`                                            |
| `$root-font-family`           | The font family of the root element.                      | System font stack                               |

When [compiling Graupl](../compiling-graupl.md), set `$paragraph-selector` or `$small-selector` to apply the styles to a different selector. Use the corresponding `-selector-base` variable to add a prefix.
