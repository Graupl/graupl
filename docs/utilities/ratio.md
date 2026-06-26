<script setup>
  import { ref } from "vue";

  const ratio = ref("one-by-one");
</script>

# Ratio Utilities

The ratio utilities provide a set of classes to adjust the `aspect-ratio` properties of elements.

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
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ratio:has(.force-ratio) {
    position: relative;
  }
```

## Custom Ratio Properties

Used to customize ratio.

| Custom Property | Description | Default Value |
| --- | --- | --- |
| `--graupl-ratio` | Aspect-ratio value used by `.ratio` | `auto` |

## Aspect Ratio

| Class Name | Property | Value |
| --- | --- | --- |
| `.one-by-one` | --graupl-ratio | `1` |
| `.two-by-one` | --graupl-ratio | `2 / 1` |
| `.four-by-three` | --graupl-ratio | `4 / 3` |
| `.four-by-one` | --graupl-ratio | `4 / 1` |
| `.sixteen-by-nine` | --graupl-ratio | `16 / 9` |
| `.three-by-two` | --graupl-ratio | `3 / 2` |
| `.eight-by-five` | --graupl-ratio | `8 / 5` |

<div class="example">
  <div class="example-container">
    <div class="example-display p-4">
      <div class="display-flex is-max-content bs-max-content position-relative">
        <div class="float-left position-absolute w-10 h-10 bg-tertiary-300"></div>
        <div :class="`ratio ${ratio} display-flex h-auto w-10`">
          <div class="bordered border-primary-700 bg-primary-300 force-ratio"></div>
      </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="ratio {{ ratio }}">&lt;div class="force-ratio"&gt;&lt;/div&gt;&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-ratio">Ratio property</label>
    <select id="select-ratio" v-model="ratio">
      <option value="one-by-one">One by One</option>
      <option value="two-by-one">Two by One</option>
      <option value="four-by-three">Four by Three</option>
      <option value="sixteen-by-nine">Sixteen by Nine</option>
      <option value="four-by-one">Four by One</option>
      <option value="three-by-two">Three by Two</option>
      <option value="eight-by-five">Eight by Five</option>
    </select>
  </div>
</div>

## Customization

To customize the ratio utilities, you can use the following variables.

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

By default, screen-aware responsive utility classes are generated for ratio.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
