<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const clear = ref("clear-none");
  const exampleClear = computed(() => `<div class="display-flow-root bordered border-dashed border-tertiary-700 p-3" dir="ltr">
  <div class="float-left w-quarter h-8 bg-primary-300 text-primary-900 p-2">Left</div>
  <div class="float-right w-quarter h-9 bg-primary-300 text-primary-900 p-2">Right</div>
  <div class="${clear.value} bordered border-tertiary-700">
    <span class="display-inline-block bg-tertiary-300 text-tertiary-900 p-2">Trail notes</span>
  </div>
</div>`);
</script>

# Clear Utilities

The clear utilities provide classes for moving a block below earlier floats on one or both sides. The inline-start and inline-end classes follow the text direction. See [Float](./float.md) to place an element beside wrapping text.

## Clear

| Class Name            | Property | Value          |
| --------------------- | -------- | -------------- |
| `.clear-none`         | clear    | `none`         |
| `.clear-left`         | clear    | `left`         |
| `.clear-right`        | clear    | `right`        |
| `.clear-both`         | clear    | `both`         |
| `.clear-inline-start` | clear    | `inline-start` |
| `.clear-inline-end`   | clear    | `inline-end`   |

<live-example :source-code="exampleClear" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="clear-example-class">Clear class</label>
      <select id="clear-example-class" v-model="clear">
        <option value="clear-none">.clear-none</option>
        <option value="clear-left">.clear-left</option>
        <option value="clear-right">.clear-right</option>
        <option value="clear-both">.clear-both</option>
        <option value="clear-inline-start">.clear-inline-start</option>
        <option value="clear-inline-end">.clear-inline-end</option>
      </select>
    </div>
  </template>
</live-example>

## Sass variables

The following Sass variables can be used to customize the generation of the clear utilities.

| Variable                              | Description                                                 | Default Value |
| ------------------------------------- | ----------------------------------------------------------- | ------------- |
| `$selector-base`                      | Base selector for utility classes.                          | `"."`         |
| `$selector-prefix`                    | The selector prefix for all utility classes.                | `""`          |
| `$selector-suffix`                    | The selector suffix for all utility classes.                | `""`          |
| `$selector-separator`                 | The selector separator for all utility classes.             | `"-"`         |
| `$use-important`                      | Appends `!important` to generated utility declarations.     | `true`        |
| `$generate-base-utilities`            | Generates the base utility classes.                         | `true`        |
| `$screen-aware`                       | Enables screen-aware utility variants.                      | `true`        |
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

Screen-aware classes are generated by default, including `hd:`, `qhd:`, and `uhd:`. See the [Responsive Classes guide](../responsive-classes.md) for the available prefixes.
