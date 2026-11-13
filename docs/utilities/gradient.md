<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const type = ref("gradient");
  const linearDirection = ref("gradient-direction-to-right");
  const radialDirection = ref("gradient-direction-circle");
  const from = ref("from-primary-300");
  const to = ref("to-tertiary-700");
  const exampleGradient = computed(() => {
    const direction = type.value === "gradient-radial" ? radialDirection.value : linearDirection.value;

    return `<div class="h-10 bordered border-dashed border-tertiary-700 ${type.value} ${direction} ${from.value} ${to.value}"></div>`;
  });
</script>

# Gradient Utilities

The gradient utilities provide classes for creating linear and radial backgrounds. Choose a type, a direction or shape, and two colors.

<live-example :source-code="exampleGradient" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="gradient-type">Gradient type</label>
      <select id="gradient-type" v-model="type">
        <option value="gradient">.gradient</option>
        <option value="gradient-linear">.gradient-linear</option>
        <option value="gradient-radial">.gradient-radial</option>
      </select>
    </div>
    <div v-if='type !== "gradient-radial"' class="input-group">
      <label for="gradient-linearDirection">Direction</label>
      <select id="gradient-linearDirection" v-model="linearDirection">
        <option value="gradient-direction-to-top">.gradient-direction-to-top</option>
        <option value="gradient-direction-to-right">.gradient-direction-to-right</option>
        <option value="gradient-direction-to-bottom">.gradient-direction-to-bottom</option>
        <option value="gradient-direction-to-left">.gradient-direction-to-left</option>
      </select>
    </div>
    <div v-else class="input-group">
      <label for="gradient-radialDirection">Shape and position</label>
      <select id="gradient-radialDirection" v-model="radialDirection">
        <option value="gradient-direction-circle">.gradient-direction-circle</option>
        <option value="gradient-direction-circle-at-top">.gradient-direction-circle-at-top</option>
        <option value="gradient-direction-circle-at-right">.gradient-direction-circle-at-right</option>
        <option value="gradient-direction-circle-at-bottom">.gradient-direction-circle-at-bottom</option>
        <option value="gradient-direction-circle-at-left">.gradient-direction-circle-at-left</option>
        <option value="gradient-direction-ellipse">.gradient-direction-ellipse</option>
        <option value="gradient-direction-ellipse-at-top">.gradient-direction-ellipse-at-top</option>
        <option value="gradient-direction-ellipse-at-right">.gradient-direction-ellipse-at-right</option>
        <option value="gradient-direction-ellipse-at-bottom">.gradient-direction-ellipse-at-bottom</option>
        <option value="gradient-direction-ellipse-at-left">.gradient-direction-ellipse-at-left</option>
        <option value="gradient-direction-closest-side">.gradient-direction-closest-side</option>
        <option value="gradient-direction-closest-corner">.gradient-direction-closest-corner</option>
        <option value="gradient-direction-farthest-side">.gradient-direction-farthest-side</option>
        <option value="gradient-direction-farthest-corner">.gradient-direction-farthest-corner</option>
      </select>
    </div>
    <div class="input-group">
      <label for="gradient-from">Start color</label>
      <select id="gradient-from" v-model="from">
        <option value="from-transparent">.from-transparent</option>
        <option value="from-primary">.from-primary</option>
        <option value="from-primary-100">.from-primary-100</option>
        <option value="from-primary-200">.from-primary-200</option>
        <option value="from-primary-300">.from-primary-300</option>
        <option value="from-primary-400">.from-primary-400</option>
        <option value="from-primary-500">.from-primary-500</option>
        <option value="from-primary-600">.from-primary-600</option>
        <option value="from-primary-700">.from-primary-700</option>
        <option value="from-primary-800">.from-primary-800</option>
        <option value="from-primary-900">.from-primary-900</option>
        <option value="from-secondary">.from-secondary</option>
        <option value="from-secondary-100">.from-secondary-100</option>
        <option value="from-secondary-200">.from-secondary-200</option>
        <option value="from-secondary-300">.from-secondary-300</option>
        <option value="from-secondary-400">.from-secondary-400</option>
        <option value="from-secondary-500">.from-secondary-500</option>
        <option value="from-secondary-600">.from-secondary-600</option>
        <option value="from-secondary-700">.from-secondary-700</option>
        <option value="from-secondary-800">.from-secondary-800</option>
        <option value="from-secondary-900">.from-secondary-900</option>
        <option value="from-tertiary">.from-tertiary</option>
        <option value="from-tertiary-100">.from-tertiary-100</option>
        <option value="from-tertiary-200">.from-tertiary-200</option>
        <option value="from-tertiary-300">.from-tertiary-300</option>
        <option value="from-tertiary-400">.from-tertiary-400</option>
        <option value="from-tertiary-500">.from-tertiary-500</option>
        <option value="from-tertiary-600">.from-tertiary-600</option>
        <option value="from-tertiary-700">.from-tertiary-700</option>
        <option value="from-tertiary-800">.from-tertiary-800</option>
        <option value="from-tertiary-900">.from-tertiary-900</option>
      </select>
    </div>
    <div class="input-group">
      <label for="gradient-to">End color</label>
      <select id="gradient-to" v-model="to">
        <option value="to-transparent">.to-transparent</option>
        <option value="to-primary">.to-primary</option>
        <option value="to-primary-100">.to-primary-100</option>
        <option value="to-primary-200">.to-primary-200</option>
        <option value="to-primary-300">.to-primary-300</option>
        <option value="to-primary-400">.to-primary-400</option>
        <option value="to-primary-500">.to-primary-500</option>
        <option value="to-primary-600">.to-primary-600</option>
        <option value="to-primary-700">.to-primary-700</option>
        <option value="to-primary-800">.to-primary-800</option>
        <option value="to-primary-900">.to-primary-900</option>
        <option value="to-secondary">.to-secondary</option>
        <option value="to-secondary-100">.to-secondary-100</option>
        <option value="to-secondary-200">.to-secondary-200</option>
        <option value="to-secondary-300">.to-secondary-300</option>
        <option value="to-secondary-400">.to-secondary-400</option>
        <option value="to-secondary-500">.to-secondary-500</option>
        <option value="to-secondary-600">.to-secondary-600</option>
        <option value="to-secondary-700">.to-secondary-700</option>
        <option value="to-secondary-800">.to-secondary-800</option>
        <option value="to-secondary-900">.to-secondary-900</option>
        <option value="to-tertiary">.to-tertiary</option>
        <option value="to-tertiary-100">.to-tertiary-100</option>
        <option value="to-tertiary-200">.to-tertiary-200</option>
        <option value="to-tertiary-300">.to-tertiary-300</option>
        <option value="to-tertiary-400">.to-tertiary-400</option>
        <option value="to-tertiary-500">.to-tertiary-500</option>
        <option value="to-tertiary-600">.to-tertiary-600</option>
        <option value="to-tertiary-700">.to-tertiary-700</option>
        <option value="to-tertiary-800">.to-tertiary-800</option>
        <option value="to-tertiary-900">.to-tertiary-900</option>
      </select>
    </div>
  </template>
</live-example>

## Gradient Type

| Class Name         | Property         | Value                                                                                                                                                                               |
| ------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.gradient`        | background-image | `linear-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |
| `.gradient-linear` | background-image | `linear-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |
| `.gradient-radial` | background-image | `radial-gradient(var(--graupl-gradient-direction), var(--graupl-gradient-from) var(--graupl-gradient-from-position), var(--graupl-gradient-to) var(--graupl-gradient-to-position))` |


## Custom Properties

The following custom properties can be used to customize the gradient utilities.

| Custom Property                   | Description                                             | Default Value                          |
| --------------------------------- | ------------------------------------------------------- | -------------------------------------- |
| `--graupl-gradient-from`          | Starting color used by generated gradients.             | `transparent`                          |
| `--graupl-gradient-from-position` | Start color stop position for generated gradients.      | `0%`                                   |
| `--graupl-gradient-to`            | Ending color used by generated gradients.               | `transparent`                          |
| `--graupl-gradient-to-position`   | End color stop position for generated gradients.        | `100%`                                 |
| `--graupl-gradient-direction`     | Direction/shape keyword consumed by gradient utilities. | `to right` (linear), `circle` (radial) |

## Gradient Direction

| Class Name                              | Property                    | Value               |
| --------------------------------------- | --------------------------- | ------------------- |
| `.gradient-direction-to-top`            | --graupl-gradient-direction | `to top`            |
| `.gradient-direction-to-right`          | --graupl-gradient-direction | `to right`          |
| `.gradient-direction-to-bottom`         | --graupl-gradient-direction | `to bottom`         |
| `.gradient-direction-to-left`           | --graupl-gradient-direction | `to left`           |
| `.gradient-direction-circle`            | --graupl-gradient-direction | `circle`            |
| `.gradient-direction-circle-at-top`     | --graupl-gradient-direction | `circle at top`     |
| `.gradient-direction-circle-at-right`   | --graupl-gradient-direction | `circle at right`   |
| `.gradient-direction-circle-at-bottom`  | --graupl-gradient-direction | `circle at bottom`  |
| `.gradient-direction-circle-at-left`    | --graupl-gradient-direction | `circle at left`    |
| `.gradient-direction-ellipse`           | --graupl-gradient-direction | `ellipse`           |
| `.gradient-direction-ellipse-at-top`    | --graupl-gradient-direction | `ellipse at top`    |
| `.gradient-direction-ellipse-at-right`  | --graupl-gradient-direction | `ellipse at right`  |
| `.gradient-direction-ellipse-at-bottom` | --graupl-gradient-direction | `ellipse at bottom` |
| `.gradient-direction-ellipse-at-left`   | --graupl-gradient-direction | `ellipse at left`   |
| `.gradient-direction-closest-side`      | --graupl-gradient-direction | `closest-side`      |
| `.gradient-direction-closest-corner`    | --graupl-gradient-direction | `closest-corner`    |
| `.gradient-direction-farthest-side`     | --graupl-gradient-direction | `farthest-side`     |
| `.gradient-direction-farthest-corner`   | --graupl-gradient-direction | `farthest-corner`   |


## Gradient From Color

| Class Name            | Property               | Value                                        |
| --------------------- | ---------------------- | -------------------------------------------- |
| `.from-transparent`   | --graupl-gradient-from | `transparent`                                |
| `.from-primary`       | --graupl-gradient-from | `var(--graupl-theme-active--primary)`        |
| `.from-primary-100`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--100)`   |
| `.from-primary-200`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--200)`   |
| `.from-primary-300`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--300)`   |
| `.from-primary-400`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--400)`   |
| `.from-primary-500`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--500)`   |
| `.from-primary-600`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--600)`   |
| `.from-primary-700`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--700)`   |
| `.from-primary-800`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--800)`   |
| `.from-primary-900`   | --graupl-gradient-from | `var(--graupl-theme-active--primary--900)`   |
| `.from-secondary`     | --graupl-gradient-from | `var(--graupl-theme-active--secondary)`      |
| `.from-secondary-100` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--100)` |
| `.from-secondary-200` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--200)` |
| `.from-secondary-300` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--300)` |
| `.from-secondary-400` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--400)` |
| `.from-secondary-500` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--500)` |
| `.from-secondary-600` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--600)` |
| `.from-secondary-700` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--700)` |
| `.from-secondary-800` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--800)` |
| `.from-secondary-900` | --graupl-gradient-from | `var(--graupl-theme-active--secondary--900)` |
| `.from-tertiary`      | --graupl-gradient-from | `var(--graupl-theme-active--tertiary)`       |
| `.from-tertiary-100`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--100)`  |
| `.from-tertiary-200`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--200)`  |
| `.from-tertiary-300`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--300)`  |
| `.from-tertiary-400`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--400)`  |
| `.from-tertiary-500`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--500)`  |
| `.from-tertiary-600`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--600)`  |
| `.from-tertiary-700`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--700)`  |
| `.from-tertiary-800`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--800)`  |
| `.from-tertiary-900`  | --graupl-gradient-from | `var(--graupl-theme-active--tertiary--900)`  |


## Gradient To Color

| Class Name          | Property             | Value                                        |
| ------------------- | -------------------- | -------------------------------------------- |
| `.to-transparent`   | --graupl-gradient-to | `transparent`                                |
| `.to-primary`       | --graupl-gradient-to | `var(--graupl-theme-active--primary)`        |
| `.to-primary-100`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--100)`   |
| `.to-primary-200`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--200)`   |
| `.to-primary-300`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--300)`   |
| `.to-primary-400`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--400)`   |
| `.to-primary-500`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--500)`   |
| `.to-primary-600`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--600)`   |
| `.to-primary-700`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--700)`   |
| `.to-primary-800`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--800)`   |
| `.to-primary-900`   | --graupl-gradient-to | `var(--graupl-theme-active--primary--900)`   |
| `.to-secondary`     | --graupl-gradient-to | `var(--graupl-theme-active--secondary)`      |
| `.to-secondary-100` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--100)` |
| `.to-secondary-200` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--200)` |
| `.to-secondary-300` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--300)` |
| `.to-secondary-400` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--400)` |
| `.to-secondary-500` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--500)` |
| `.to-secondary-600` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--600)` |
| `.to-secondary-700` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--700)` |
| `.to-secondary-800` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--800)` |
| `.to-secondary-900` | --graupl-gradient-to | `var(--graupl-theme-active--secondary--900)` |
| `.to-tertiary`      | --graupl-gradient-to | `var(--graupl-theme-active--tertiary)`       |
| `.to-tertiary-100`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--100)`  |
| `.to-tertiary-200`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--200)`  |
| `.to-tertiary-300`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--300)`  |
| `.to-tertiary-400`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--400)`  |
| `.to-tertiary-500`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--500)`  |
| `.to-tertiary-600`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--600)`  |
| `.to-tertiary-700`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--700)`  |
| `.to-tertiary-800`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--800)`  |
| `.to-tertiary-900`  | --graupl-gradient-to | `var(--graupl-theme-active--tertiary--900)`  |


## Sass variables

The following Sass variables can be used to customize the generation of the gradient utilities.

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
