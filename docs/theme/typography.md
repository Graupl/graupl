<script setup>
  import { ref, computed } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const style = ref("b");
  const size = ref("xs");
  const weight = ref("light");

  const exampleTypography = computed(() => {
    return `
  <${style.value} class="py-2 px-5"> Example Text </${style.value}>
    `;
  });

  const exampleTypographySizes = computed(() => {
    return `
  <div class="py-2 px-5 text-${size.value}"> Example Text </div>
    `;
  });

  const exampleTypographyWeights = computed(() => {
    return `
  <div class="py-2 px-5 font-weight-${weight.value}"> Example Text </div>
    `;
  });
</script>

# Typography

| Class Name | Property |
| --- | --- |
| `:root` | Sets root font tokens. |
| `b` | Applies bold typography tokens. |
| `strong` | Applies bold typography tokens. |
| `em` | Applies emphasis (italic) margin tokens. |
| `i` | Applies italic margin tokens. |
| `p` | Applies paragraph typography tokens. |
| `small` | Applies small text typography tokens. |
| `h1` | Applies H1 typography tokens. |
| `h2` | Applies H2 typography tokens. |
| `h3` | Applies H3 typography tokens. |
| `h4` | Applies H4 typography tokens. |
| `h5` | Applies H5 typography tokens. |
| `h6` | Applies H6 typography tokens. |

<live-example :source-code="exampleTypography" :key="style">
  <template #options>
    <div class="input-group">
      <label for="select-typography-style">Typography style</label>
      <select id="select-typography-style" v-model="style">
        <option value="b">Bold</option>
        <option value="strong">Strong</option>
        <option value="em">Emphasis</option>
        <option value="i">Italics</option>
        <option value="p">Paragraph</option>
        <option value="small">Small Text</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="h4">Heading 4</option>
        <option value="h5">Heading 5</option>
        <option value="h6">Heading 6</option>
      </select>
      <p class="help-text">Select the typography example you would like displayed.</p>
    </div>
  </template>
</live-example>

## Font Size Properties

The `.font-size` class is the base class for all font sizes.

| Class Name | Property | Default Value |
| --- | --- | --- |
| `--graupl-base-font-size` | Base font size used for scaling. | `1rem` |
| `--graupl-font-size-xs` | XS font size token. | `calc(0.694 * var(--graupl-font-size-base))` |
| `--graupl-font-size-sm` | Small font size token. | `calc(0.833 * var(--graupl-font-size-base))` |
| `--graupl-font-size-base` | Base font size token. | `calc(1 * var(--graupl-font-size-base))` |
| `--graupl-font-size-lg` | Large font size token. | `calc(1.2 * var(--graupl-font-size-base))` |
| `--graupl-font-size-xl` | XL font size token. | `calc(1.44 * var(--graupl-font-size-base))` |
| `--graupl-font-size-2xl` | 2XL font size token. | `calc(1.728 * var(--graupl-font-size-base))` |
| `--graupl-font-size-3xl` | 3XL font size token. | `calc(2.074 * var(--graupl-font-size-base))` |
| `--graupl-font-size-4xl` | 4XL font size token. | `calc(2.488 * var(--graupl-font-size-base))` |
| `--graupl-font-size-5xl` | 5XL font size token. | `calc(2.986 * var(--graupl-font-size-base))` |

<live-example :source-code="exampleTypographySizes" :key="size">
  <template #options>
    <div class="input-group">
      <label for="select-typography-size">Typography size</label>
      <select id="select-typography-size" v-model="size">
        <option value="xs">Extra Small Size</option>
        <option value="sm">Small Size</option>
        <option value="base">Base Size</option>
        <option value="lg">Lage Size</option>
        <option value="xl">Extra Large Size</option>
        <option value="2xl">Extra Large x2 Size</option>
        <option value="3xl">Extra Large x3 Size</option>
        <option value="4xl">Extra Large x4 Size</option>
        <option value="5xl">Extra Large x5 Size</option>
      </select>
      <p class="help-text">Select the typography variant you would like displayed.</p>
    </div>
  </template>
</live-example>

## Font Weight Properties

The `.font-weight` class is the base class for all font weights.

| Class Name | Property | Default Value |
| --- | --- | --- |
| `--graupl-font-weight-light` | Light font weight token. | `300` |
| `--graupl-font-weight-normal` | Normal font weight token. | `400` |
| `--graupl-font-weight-bold` | Bold font weight token. | `700` |

<live-example :source-code="exampleTypographyWeights" :key="weight">
  <template #options>
    <div class="input-group">
      <label for="select-typography-weight">Typography weight</label>
      <select id="select-typography-weight" v-model="weight">
        <option value="light">Light</option>
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
      </select>
      <p class="help-text">Select the typography variant you would like displayed.</p>
    </div>
  </template>
</live-example>

## Typography Properties

| Class Name | Property | Default Value |
| --- | --- | --- |
| `--graupl-root-font-family` | Root font family. | `system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif` |
| `--graupl-root-font-size` | Root font size. | `clamp(0.85rem, calc(0.8rem + 0.5vw), 1.25rem)` |
| `--graupl-root-font-weight` | Root font weight. | `var(--graupl-font-weight-normal)` |
| `--graupl-root-font-style` | Root font style. | `normal` |
| `--graupl-root-font-variant` | Root font variant. | `normal` |
| `--graupl-root-line-height` | Root line height. | `1.2em` |
| `--graupl-root-letter-spacing` | Root letter spacing. | `normal` |
| `--graupl-root-word-spacing` | Root word spacing. | `normal` |
| `--graupl-font-size` | Generic font size. | `inherit` |
| `--graupl-font-weight` | Generic font weight. | `inherit` |
| `--graupl-font-style` | Generic font style. | `inherit` |
| `--graupl-font-variant` | Generic font variant. | `inherit` |
| `--graupl-font-color` | Generic font color. | `currentColor` |
| `--graupl-font-family` | Generic font family. | `inherit` |
| `--graupl-line-height` | Generic line height. | `var(--graupl-root-line-height)` |
| `--graupl-letter-spacing` | Generic letter spacing. | `inherit` |
| `--graupl-word-spacing` | Generic word spacing. | `inherit` |
| `--graupl-paragraph-font-size` | Paragraph font size. | `var(--graupl-font-size)` |
| `--graupl-paragraph-font-weight` | Paragraph font weight. | `var(--graupl-font-weight)` |
| `--graupl-paragraph-font-style` | Paragraph font style. | `var(--graupl-font-style)` |
| `--graupl-paragraph-font-variant` | Paragraph font variant. | `var(--graupl-font-variant)` |
| `--graupl-paragraph-color` | Paragraph text color. | `var(--graupl-font-color)` |
| `--graupl-paragraph-font-family` | Paragraph font family. | `var(--graupl-font-family)` |
| `--graupl-paragraph-line-height` | Paragraph line height. | `var(--graupl-line-height)` |
| `--graupl-paragraph-letter-spacing` | Paragraph letter spacing. | `var(--graupl-letter-spacing |
| `--graupl-paragraph-word-spacing` | Paragraph word spacing. | `var(--graupl-word-spacing |
| `--graupl-paragraph-margin` | Paragraph margin. | `0 0 var(--graupl-spacer-2) 0` |
| `--graupl-small-font-size` | Small text font size. | `var(--graupl-font-size-sm)` |
| `--graupl-small-font-weight` | Small text font weight. | `var(--graupl-font-weight)` |
| `--graupl-small-font-style` | Small text font style. | `var(--graupl-font-style)` |
| `--graupl-small-font-variant` | Small text font variant. | `var(--graupl-font-variant)` |
| `--graupl-small-color` | Small text color. | `var(--graupl-font-color)` |
| `--graupl-small-font-family` | Small text font family. | `var(--graupl-font-family)` |
| `--graupl-small-line-height` | Small text line height. | `var(--graupl-line-height)` |
| `--graupl-small-letter-spacing` | Small text letter spacing. | `var(--graupl-letter-spacing |
| `--graupl-small-word-spacing` | Small text word spacing. | `var(--graupl-word-spacing |
| `--graupl-small-margin` | Small text margin. | `0 0 var(--graupl-spacer-2) 0` |
| `--graupl-bold-font-size` | Bold font size. | `var(--graupl-font-size)` |
| `--graupl-bold-font-weight` | Bold font weight. | `var(--graupl-font-weight)` |
| `--graupl-bold-font-style` | Bold font style. | `var(--graupl-font-style)` |
| `--graupl-bold-font-variant` | Bold font variant. | `var(--graupl-font-variant)` |
| `--graupl-bold-color` | Bold text color. | `var(--graupl-font-color)` |
| `--graupl-bold-font-family` | Bold font family. | `var(--graupl-font-family)` |
| `--graupl-bold-line-height` | Bold line height. | `var(--graupl-line-height)` |
| `--graupl-bold-letter-spacing` | Bold letter spacing. | `var(--graupl-letter-spacing |
| `--graupl-bold-word-spacing` | Bold word spacing. | `var(--graupl-word-spacing |
| `--graupl-bold-margin` | Bold margin. | `0 0 var(--graupl-spacer-2) 0` |
| `--graupl-italic-font-size` | Italic font size. | `var(--graupl-font-size)` |
| `--graupl-italic-font-weight` | Italic font weight. | `var(--graupl-font-weight)` |
| `--graupl-italic-font-style` | Italic font style. | `italic` |
| `--graupl-italic-font-variant` | Italic font variant. | `var(--graupl-font-variant)` |
| `--graupl-italic-color` | Italic text color. | `var(--graupl-font-color)` |
| `--graupl-italic-font-family` | Italic font family. | `var(--graupl-font-family)` |
| `--graupl-italic-line-height` | Italic line height. | `var(--graupl-line-height)` |
| `--graupl-italic-letter-spacing` | Italic letter spacing. | `var(--graupl-letter-spacing)` |
| `--graupl-italic-word-spacing` | Italic word spacing. | `var(--graupl-word-spacing)` |
| `--graupl-italic-margin` | Italic margin. | `0 0 var(--graupl-spacer-2) 0` |
| `--graupl-heading-font-weight` | Heading font weight. | `var(--graupl-font-weight-bold)` |
| `--graupl-heading-font-style` | Heading font style. | `var(--graupl-font-style)` |
| `--graupl-heading-font-variant` | Heading font variant. | `var(--graupl-font-variant)` |
| `--graupl-heading-color` | Heading text color. | `var(--graupl-font-color)` |
| `--graupl-heading-font-family` | Heading font family. | `var(--graupl-font-family)` |
| `--graupl-heading-line-height` | Heading line height. | `var(--graupl-line-height)` |
| `--graupl-heading-letter-spacing` | Heading letter spacing. | `var(--graupl-letter-spacing)` |
| `--graupl-heading-word-spacing` | Heading word spacing. | `var(--graupl-word-spacing)` |
| `--graupl-heading-margin` | Heading margin. | `var(--graupl-spacer-5) 0 var(--graupl-spacer-2) 0` |
| `--graupl-h1-font-size` | H1 font size. | `var(--graupl-font-5xl)` |
| `--graupl-h1-font-weight` | H1 font weight. | `var(--graupl-heading-font-weight)` |
| `--graupl-h1-font-style` | H1 font style. | `var(--graupl-heading-font-style)` |
| `--graupl-h1-font-variant` | H1 font variant. | `var(--graupl-heading-font-variant)` |
| `--graupl-h1-color` | H1 text color. | `var(--graupl-heading-color)` |
| `--graupl-h1-font-family` | H1 font family. | `var(--graupl-heading-font-family)` |
| `--graupl-h1-line-height` | H1 line height. | `var(--graupl-heading-line-height)` |
| `--graupl-h1-letter-spacing` | H1 letter spacing. | `var(--graupl-heading-letter-spacing)` |
| `--graupl-h1-word-spacing` | H1 word spacing. | `var(--graupl-heading-word-spacing)` |
| `--graupl-h1-margin` | H1 margin. | `var(--graupl-heading-margin)` |
| `--graupl-h2-font-size` | H2 font size. | `var(--graupl-font-4xl)` |
| `--graupl-h2-font-weight` | H2 font weight. | `var(--graupl-heading-font-weight)` |
| `--graupl-h2-font-style` | H2 font style. | `var(--graupl-heading-font-style)` |
| `--graupl-h2-font-variant` | H2 font variant. | `var(--graupl-heading-font-variant)` |
| `--graupl-h2-color` | H2 text color. | `var(--graupl-heading-color)` |
| `--graupl-h2-font-family` | H2 font family. | `var(--graupl-heading-font-family)` |
| `--graupl-h2-line-height` | H2 line height. | `var(--graupl-heading-line-height)` |
| `--graupl-h2-letter-spacing` | H2 letter spacing. | `var(--graupl-heading-letter-spacing)` |
| `--graupl-h2-word-spacing` | H2 word spacing. | `var(--graupl-heading-word-spacing)` |
| `--graupl-h2-margin` | H2 margin. | `var(--graupl-heading-margin)` |
| `--graupl-h3-font-size` | H3 font size. | `var(--graupl-font-3xl)` |
| `--graupl-h3-font-weight` | H3 font weight. | `var(--graupl-heading-font-weight)` |
| `--graupl-h3-font-style` | H3 font style. | `var(--graupl-heading-font-style)` |
| `--graupl-h3-font-variant` | H3 font variant. | `var(--graupl-heading-font-variant)` |
| `--graupl-h3-color` | H3 text color. | `var(--graupl-heading-color)` |
| `--graupl-h3-font-family` | H3 font family. | `var(--graupl-heading-font-family)` |
| `--graupl-h3-line-height` | H3 line height. | `var(--graupl-heading-line-height)` |
| `--graupl-h3-letter-spacing` | H3 letter spacing. | `var(--graupl-heading-letter-spacing)` |
| `--graupl-h3-word-spacing` | H3 word spacing. | `var(--graupl-heading-word-spacing)` |
| `--graupl-h3-margin` | H3 margin. | `var(--graupl-heading-margin)` |
| `--graupl-h4-font-size` | H4 font size. | `var(--graupl-font-2xl)` |
| `--graupl-h4-font-weight` | H4 font weight. | `var(--graupl-heading-font-weight)` |
| `--graupl-h4-font-style` | H4 font style. | `var(--graupl-heading-font-style)` |
| `--graupl-h4-font-variant` | H4 font variant. | `var(--graupl-heading-font-variant)` |
| `--graupl-h4-color` | H4 text color. | `var(--graupl-heading-color)` |
| `--graupl-h4-font-family` | H4 font family. | `var(--graupl-heading-font-family)` |
| `--graupl-h4-line-height` | H4 line height. | `var(--graupl-heading-line-height)` |
| `--graupl-h4-letter-spacing` | H4 letter spacing. | `var(--graupl-heading-letter-spacing)` |
| `--graupl-h4-word-spacing` | H4 word spacing. | `var(--graupl-heading-word-spacing)` |
| `--graupl-h4-margin` | H4 margin. | `var(--graupl-heading-margin)` |
| `--graupl-h5-font-size` | H5 font size. | `var(--graupl-font-size-xl)` |
| `--graupl-h5-font-weight` | H5 font weight. | `var(--graupl-heading-font-weight)` |
| `--graupl-h5-font-style` | H5 font style. | `var(--graupl-heading-font-style)` |
| `--graupl-h5-font-variant` | H5 font variant. | `var(--graupl-heading-font-variant)` |
| `--graupl-h5-color` | H5 text color. | `var(--graupl-heading-color)` |
| `--graupl-h5-font-family` | H5 font family. | `var(--graupl-heading-font-family)` |
| `--graupl-h5-line-height` | H5 line height. | `var(--graupl-heading-line-height)` |
| `--graupl-h5-letter-spacing` | H5 letter spacing. | `var(--graupl-heading-letter-spacing)` |
| `--graupl-h5-word-spacing` | H5 word spacing. | `var(--graupl-heading-word-spacing)` |
| `--graupl-h5-margin` | H5 margin. | `var(--graupl-heading-margin)` |
| `--graupl-h6-font-size` | H6 font size. | `var(--graupl-font-size-lg)` |
| `--graupl-h6-font-weight` | H6 font weight. | `var(--graupl-heading-font-weight)` |
| `--graupl-h6-font-style` | H6 font style. | `var(--graupl-heading-font-style)` |
| `--graupl-h6-font-variant` | H6 font variant. | `var(--graupl-heading-font-variant)` |
| `--graupl-h6-color` | H6 text color. | `var(--graupl-heading-color)` |
| `--graupl-h6-font-family` | H6 font family. | `var(--graupl-heading-font-family)` |
| `--graupl-h6-line-height` | H6 line height. | `var(--graupl-heading-line-height)` |
| `--graupl-h6-letter-spacing` | H6 letter spacing. | `var(--graupl-heading-letter-spacing)` |
| `--graupl-h6-word-spacing` | H6 word spacing. | `var(--graupl-heading-word-spacing)` |
| `--graupl-h6-margin` | H6 margin. | `var(--graupl-heading-margin)` |

## Customization

The following Sass variables can be used to customize the generation of the typography component:

| Class Name | Property | Default Value |
| --- | --- | --- |
| `$selector-base` | The selector base for the component. | `""` |
| `$modifier-selector-base` | The selector base for component modifiers. | `"."` |
| `$paragraph-selector-base` | The base selector for the paragraph component. | `""` |
| `$paragraph-selector` | The selector for the paragraph component. | `"p"` |
| `$small-selector-base` | The base selector for the small component. | `""` |
| `$small-selector` | The selector for the small component. | `"small"` |
| `$h1-selector-base` | The base selector for the h1 component. | `""` |
| `$h1-selector` | The selector for the h1 component. | `"h1"` |
| `$h2-selector-base` | The base selector for the h2 component. | `""` |
| `$h2-selector` | The selector for the h2 component. | `"h2"` |
| `$h3-selector-base` | The base selector for the h3 component. | `""` |
| `$h3-selector` | The selector for the h3 component. | `"h3"` |
| `$h4-selector-base` | The base selector for the h4 component. | `""` |
| `$h4-selector` | The selector for the h4 component. | `"h4"` |
| `$h5-selector-base` | The base selector for the h5 component. | `""` |
| `$h5-selector` | The selector for the h5 component. | `"h5"` |
| `$h6-selector-base` | The base selector for the h6 component. | `""` |
| `$h6-selector` | The selector for the h6 component. | `"h6"` |
| `$root-selector-base` | The base selector for the root component. | `":"` |
| `$root-selector` | The selector for the root component. | `"root"` |
| `$bold-selector-base` | The base selector for the bold component. | `""` |
| `$bold-selector` | The selector for the bold component. | `"b"` |
| `$strong-selector-base` | The base selector for the strong component. | `""` |
| `$strong-selector` | The selector for the strong component. | `"strong"` |
| `$emphasis-selector-base` | The base selector for the emphasis component. | `""` |
| `$emphasis-selector` | The selector for the emphasis component. | `"em"` |
| `$italic-selector-base` | The base selector for the italic component. | `""` |
| `$italic-selector` | The selector for the italic component. | `"i"` |
| `$generate-base-font-sizes` | Flag to generate the base font-size scale. | `true` |
| `$generate-base-font-weights` | Flag to generate the base font-weight scale. | `true` |
| `$base-font-size` | Base font size for the scale. | `1rem` |
| `$root-font-size` | Root font size value. | `clamp(0.85rem, calc(0.8rem + 0.5vw), 1.25rem)` |
| `$root-line-height` | Root line height value. | `1.2em` |
| `$root-letter-spacing` | Root letter spacing value. | `normal` |
| `$root-word-spacing` | Root word spacing value. | `normal` |
| `$root-font-style` | Root font style value. | `normal` |
| `$root-font-variant` | Root font variant value. | `normal` |
| `$font-size-multipliers` | Map of size keys to multipliers. | () |
| `$font-weights` | Map of weight keys to values. | `map.merge($-font-weights, $font-weights)` |
| `$root-font-family` | Root font family stack. | System stack |
