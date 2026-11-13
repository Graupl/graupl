<script setup>
  import { computed, ref } from "vue";
  import { withBase } from "vitepress";
  import LiveExample from "../vue-components/LiveExample.vue";

  const float = ref("float-left");
  const exampleFloat = computed(() => `<div class="display-flow-root">
  <img class="${float.value} w-10 h-auto m-2" src="${withBase("/card-trail-map.svg")}" alt="Illustrated trail map" width="480" height="240">
  <p>Follow the trail past the ruined watchtower and cross the river at the stone bridge. The ogres keep to the valley, so take the ridge path if you’re carrying anything that smells like dinner.</p>
</div>`);
</script>

# Float Utilities

The float utilities provide classes for moving an element to one side so the surrounding text wraps around it. The inline-start and inline-end classes follow the text direction. Use `.float-none` to remove the float, or see [Clear](./clear.md) to start content below a float.

## Float

| Class Name            | Property | Value          |
| --------------------- | -------- | -------------- |
| `.float-none`         | float    | `none`         |
| `.float-left`         | float    | `left`         |
| `.float-right`        | float    | `right`        |
| `.float-inline-start` | float    | `inline-start` |
| `.float-inline-end`   | float    | `inline-end`   |

<live-example :source-code="exampleFloat" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="float-example-class">Float class</label>
      <select id="float-example-class" v-model="float">
        <option value="float-none">.float-none</option>
        <option value="float-left">.float-left</option>
        <option value="float-right">.float-right</option>
        <option value="float-inline-start">.float-inline-start</option>
        <option value="float-inline-end">.float-inline-end</option>
      </select>
    </div>
  </template>
</live-example>

## Sass variables

The following Sass variables can be used to customize the generation of the float utilities.

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
| `$container-aware`                    | Enables container-aware utility variants.                   | `true`        |
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
