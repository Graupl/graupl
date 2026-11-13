<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const sample = "A field guide to dragons";
  const textStyle = ref("text-paragraph");
  const textStyleExample = computed(() => `<div class="${textStyle.value}">${sample}</div>`);
  const fontSize = ref("text-xs");
  const fontSizeExample = computed(() => `<p class="${fontSize.value}">${sample}</p>`);
  const fontStyle = ref("font-style-normal");
  const fontStyleExample = computed(() => `<p class="${fontStyle.value}">${sample}</p>`);
  const fontWeight = ref("font-weight-light");
  const fontWeightExample = computed(() => `<p class="${fontWeight.value}">${sample}</p>`);
  const textTransform = ref("text-uppercase");
  const textTransformExample = computed(() => `<p class="${textTransform.value}">${sample}</p>`);
</script>

# Typography Utilities

The typography utilities provide classes for applying text styles and changing font size, style, weight, and capitalization. See [Theme Typography](../theme/typography.md) for the default styles applied to elements.

## Text Styles

Use these classes to apply paragraph, small text, or heading styles to an element.

<live-example :source-code="textStyleExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="typography-textStyle">Text style</label>
      <select id="typography-textStyle" v-model="textStyle">
        <option value="text-paragraph">.text-paragraph</option>
        <option value="text-small">.text-small</option>
        <option value="text-h1">.text-h1</option>
        <option value="text-h2">.text-h2</option>
        <option value="text-h3">.text-h3</option>
        <option value="text-h4">.text-h4</option>
        <option value="text-h5">.text-h5</option>
        <option value="text-h6">.text-h6</option>
      </select>
    </div>
  </template>
</live-example>

### Paragraph

Applies the default paragraph styling to an element.

```css
  .text-paragraph {
    font-size: var(--graupl-paragraph-font-size);
    font-weight: var(--graupl-paragraph-font-weight);
    font-style: var(--graupl-paragraph-font-style);
    font-variant: var(--graupl-paragraph-font-variant);
    color: var(--graupl-paragraph-color);
    font-family: var(--graupl-paragraph-font-family);
    line-height: var(--graupl-paragraph-line-height);
    letter-spacing: var(--graupl-paragraph-letter-spacing);
    word-spacing: var(--graupl-paragraph-word-spacing);
    margin: var(--graupl-paragraph-margin);
  }
```

### Small

Applies the default small text styling to an element.

```css
  .text-small {
    font-size: var(--graupl-small-font-size);
    font-weight: var(--graupl-small-font-weight);
    font-style: var(--graupl-small-font-style);
    font-variant: var(--graupl-small-font-variant);
    color: var(--graupl-small-color);
    font-family: var(--graupl-small-font-family);
    line-height: var(--graupl-small-line-height);
    letter-spacing: var(--graupl-small-letter-spacing);
    word-spacing: var(--graupl-small-word-spacing);
    margin: var(--graupl-small-margin);
  }
```

### H1

Applies the default h1 styling to an element.

```css
  .text-h1 {
    font-size: var(--graupl-h1-font-size);
    font-weight: var(--graupl-h1-font-weight);
    font-style: var(--graupl-h1-font-style);
    font-variant: var(--graupl-h1-font-variant);
    color: var(--graupl-h1-color);
    font-family: var(--graupl-h1-font-family);
    line-height: var(--graupl-h1-line-height);
    letter-spacing: var(--graupl-h1-letter-spacing);
    word-spacing: var(--graupl-h1-word-spacing);
    margin: var(--graupl-h1-margin);
  }
```

### H2

Applies the default h2 styling to an element.

```css
  .text-h2 {
    font-size: var(--graupl-h2-font-size);
    font-weight: var(--graupl-h2-font-weight);
    font-style: var(--graupl-h2-font-style);
    font-variant: var(--graupl-h2-font-variant);
    color: var(--graupl-h2-color);
    font-family: var(--graupl-h2-font-family);
    line-height: var(--graupl-h2-line-height);
    letter-spacing: var(--graupl-h2-letter-spacing);
    word-spacing: var(--graupl-h2-word-spacing);
    margin: var(--graupl-h2-margin);
  }
```

### H3

Applies the default h3 styling to an element.

```css
  .text-h3 {
    font-size: var(--graupl-h3-font-size);
    font-weight: var(--graupl-h3-font-weight);
    font-style: var(--graupl-h3-font-style);
    font-variant: var(--graupl-h3-font-variant);
    color: var(--graupl-h3-color);
    font-family: var(--graupl-h3-font-family);
    line-height: var(--graupl-h3-line-height);
    letter-spacing: var(--graupl-h3-letter-spacing);
    word-spacing: var(--graupl-h3-word-spacing);
    margin: var(--graupl-h3-margin);
  }
```

### H4

Applies the default h4 styling to an element.

```css
  .text-h4 {
    font-size: var(--graupl-h4-font-size);
    font-weight: var(--graupl-h4-font-weight);
    font-style: var(--graupl-h4-font-style);
    font-variant: var(--graupl-h4-font-variant);
    color: var(--graupl-h4-color);
    font-family: var(--graupl-h4-font-family);
    line-height: var(--graupl-h4-line-height);
    letter-spacing: var(--graupl-h4-letter-spacing);
    word-spacing: var(--graupl-h4-word-spacing);
    margin: var(--graupl-h4-margin);
  }
```

### H5

Applies the default h5 styling to an element.

```css
  .text-h5 {
    font-size: var(--graupl-h5-font-size);
    font-weight: var(--graupl-h5-font-weight);
    font-style: var(--graupl-h5-font-style);
    font-variant: var(--graupl-h5-font-variant);
    color: var(--graupl-h5-color);
    font-family: var(--graupl-h5-font-family);
    line-height: var(--graupl-h5-line-height);
    letter-spacing: var(--graupl-h5-letter-spacing);
    word-spacing: var(--graupl-h5-word-spacing);
    margin: var(--graupl-h5-margin);
  }
```

### H6

Applies the default h6 styling to an element.

```css
  .text-h6 {
    font-size: var(--graupl-h6-font-size);
    font-weight: var(--graupl-h6-font-weight);
    font-style: var(--graupl-h6-font-style);
    font-variant: var(--graupl-h6-font-variant);
    color: var(--graupl-h6-color);
    font-family: var(--graupl-h6-font-family);
    line-height: var(--graupl-h6-line-height);
    letter-spacing: var(--graupl-h6-letter-spacing);
    word-spacing: var(--graupl-h6-word-spacing);
    margin: var(--graupl-h6-margin);
  }
```

## Font Size

| Class Name   | Property  | Value                          |
| ------------ | --------- | ------------------------------ |
| `.text-xs`   | font-size | `var(--graupl-font-size-xs)`   |
| `.text-sm`   | font-size | `var(--graupl-font-size-sm)`   |
| `.text-base` | font-size | `var(--graupl-font-size-base)` |
| `.text-lg`   | font-size | `var(--graupl-font-size-lg)`   |
| `.text-xl`   | font-size | `var(--graupl-font-size-xl)`   |
| `.text-2xl`  | font-size | `var(--graupl-font-size-2xl)`  |
| `.text-3xl`  | font-size | `var(--graupl-font-size-3xl)`  |
| `.text-4xl`  | font-size | `var(--graupl-font-size-4xl)`  |
| `.text-5xl`  | font-size | `var(--graupl-font-size-5xl)`  |

<live-example :source-code="fontSizeExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="typography-fontSize">Font size</label>
      <select id="typography-fontSize" v-model="fontSize">
        <option value="text-xs">.text-xs</option>
        <option value="text-sm">.text-sm</option>
        <option value="text-base">.text-base</option>
        <option value="text-lg">.text-lg</option>
        <option value="text-xl">.text-xl</option>
        <option value="text-2xl">.text-2xl</option>
        <option value="text-3xl">.text-3xl</option>
        <option value="text-4xl">.text-4xl</option>
        <option value="text-5xl">.text-5xl</option>
      </select>
    </div>
  </template>
</live-example>

## Font Style

| Class Name           | Property   | Value    |
| -------------------- | ---------- | -------- |
| `.font-style-normal` | font-style | `normal` |
| `.font-style-italic` | font-style | `italic` |

<live-example :source-code="fontStyleExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="typography-fontStyle">Font style</label>
      <select id="typography-fontStyle" v-model="fontStyle">
        <option value="font-style-normal">.font-style-normal</option>
        <option value="font-style-italic">.font-style-italic</option>
      </select>
    </div>
  </template>
</live-example>

## Font Weight

| Class Name            | Property    | Value |
| --------------------- | ----------- | ----- |
| `.font-weight-light`  | font-weight | `300` |
| `.font-weight-normal` | font-weight | `400` |
| `.font-weight-bold`   | font-weight | `700` |

<live-example :source-code="fontWeightExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="typography-fontWeight">Font weight</label>
      <select id="typography-fontWeight" v-model="fontWeight">
        <option value="font-weight-light">.font-weight-light</option>
        <option value="font-weight-normal">.font-weight-normal</option>
        <option value="font-weight-bold">.font-weight-bold</option>
      </select>
    </div>
  </template>
</live-example>

## Text Transform

| Class Name         | Property       | Value        |
| ------------------ | -------------- | ------------ |
| `.text-uppercase`  | text-transform | `uppercase`  |
| `.text-lowercase`  | text-transform | `lowercase`  |
| `.text-capitalize` | text-transform | `capitalize` |
| `.text-none`       | text-transform | `none`       |

<live-example :source-code="textTransformExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="typography-textTransform">Text transform</label>
      <select id="typography-textTransform" v-model="textTransform">
        <option value="text-uppercase">.text-uppercase</option>
        <option value="text-lowercase">.text-lowercase</option>
        <option value="text-capitalize">.text-capitalize</option>
        <option value="text-none">.text-none</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/typography.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/typography.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/typography.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the typography utilities.

| Variable                              | Description                                                 | Default Value |
| ------------------------------------- | ----------------------------------------------------------- | ------------- |
| `$selector-base`                      | Base selector for utility classes.                          | `"."`         |
| `$selector-prefix`                    | The selector prefix for all utility classes.                | `""`          |
| `$selector-suffix`                    | The selector suffix for all utility classes.                | `""`          |
| `$selector-separator`                 | The selector separator for all utility classes.             | `"-"`         |
| `$use-important`                      | Appends `!important` to generated utility declarations.     | `true`        |
| `$generate-base-utilities`            | Generates the base utility classes.                         | `true`        |
| `$screen-aware`                       | Enables screen-aware utility variants.                      | `false`       |
| `$theme-aware`                        | Enables theme-aware utility variants.                       | `false`       |
| `$scheme-aware`                       | Enables scheme-aware utility variants.                      | `false`       |
| `$state-aware`                        | Enables state-aware utility variants.                       | `false`       |
| `$container-aware`                    | Enables container-aware utility variants.                   | `false`       |
| `$screen-aware-selector-prefix`       | Prefix to the screen-aware portion of utility selectors.    | `""`          |
| `$screen-aware-selector-suffix`       | Suffix to the screen-aware portion of utility selectors.    | `""`          |
| `$screen-aware-selector-separator`    | Separator inserted for screen-aware utility selectors.      | `"\\:"`       |
| `$theme-aware-selector-prefix`        | Prefix to the theme-aware portion of utility selectors.     | `""`          |
| `$theme-aware-selector-suffix`        | Suffix to the theme-aware portion of utility selectors.     | `"-theme"`    |
| `$theme-aware-selector-separator`     | Separator inserted for theme-aware utility selectors.       | `"\\:"`       |
| `$scheme-aware-selector-prefix`       | Prefix to the scheme-aware portion of utility selectors.    | `""`          |
| `$scheme-aware-selector-suffix`       | Suffix to the scheme-aware portion of utility selectors.    | `"-mode"`     |
| `$scheme-aware-selector-separator`    | Separator inserted for scheme-aware utility selectors.      | `"\\:"`       |
| `$state-aware-selector-prefix`        | Prefix to the state-aware portion of utility selectors.     | `""`          |
| `$state-aware-selector-suffix`        | Suffix to the state-aware portion of utility selectors.     | `""`          |
| `$state-aware-selector-separator`     | Separator inserted for state-aware utility selectors.       | `"\\:"`       |
| `$container-aware-selector-prefix`    | Prefix to the container-aware portion of utility selectors. | `"cq\\:"`     |
| `$container-aware-selector-suffix`    | Suffix to the container-aware portion of utility selectors. | `""`          |
| `$container-aware-selector-separator` | Separator inserted for container-aware utility selectors.   | `"\\:"`       |
| `$utility-properties`                 | Map of utility properties.                                  | `()`          |
| `$utility-values`                     | Map of utility values.                                      | `()`          |
| `$utility-map`                        | Map of utility property/value pairs.                        | `()`          |

## Responsive Variants

No responsive classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
