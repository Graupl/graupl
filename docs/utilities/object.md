<script setup>
  import { ref } from "vue";

  const fit = ref("object-fit-fill");
  const position = ref("object-position-top");
</script>

# Object Utilities

The object utilities provide a set of classes to adjust the `object-fit`, and `object-position` properties of elements.

## Object Fit

| Class Name | Property | Value |
| --- | --- | --- |
| `.object-fit-fill` | object-fit | `fill` |
| `.object-fit-contain` | object-fit | `contain` |
| `.object-fit-cover` | object-fit | `cover` |
| `.object-fit-none` | object-fit | `none` |
| `.object-fit-scale-down` | object-fit | `scale-down` |

<div class="example">
  <div class="example-container">
    <div class="example-display  h-auto">
      <div class="display-flex g-5">
        <div class=" bordered border-primary-700" style="height:300px; width:225px;">
          <img src="https://picsum.photos/175/550?random=6"
            alt="Card image" :class="`${fit} w-full h-full `" />
        </div>
         <div class="bordered border-primary-700" style="width:350px; height:175px;">
          <img src="https://picsum.photos/650/225?random=4"
            alt="Card image" :class="` ${fit} w-full h-full `" />
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;img class="{{ fit }}"&gt;&lt;/img&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-fit">Object Fit property</label>
    <select id="select-fit" v-model="fit">
      <option value="object-fit-fill">Fill</option>
      <option value="object-fit-contain">Contain</option>
      <option value="object-fit-cover">Cover</option>
      <option value="object-fit-none">None</option>
      <option value="object-fit-scale-down">Scale-down</option>
    </select>
  </div>
</div>

## Object Position

| Class Name | Property | Value |
| --- | --- | --- |
| `.object-position-top` | object-position | `top` |
| `.object-position-right` | object-position | `right` |
| `.object-position-bottom` | object-position | `bottom` |
| `.object-position-left` | object-position | `left` |
| `.object-position-center` | object-position | `center` |

<div class="example">
  <div class="example-container">
    <div class="example-display  h-auto">
      <div class="display-flex g-5">
        <div class=" bordered border-primary-700" style="height:300px; width:225px;">
          <img src="https://picsum.photos/175/550?random=6"
            alt="Card image" :class="`${position} object-fit-none w-full h-full `" />
        </div>
         <div class="bordered border-primary-700" style="width:350px; height:175px;">
          <img src="https://picsum.photos/650/225?random=4"
            alt="Card image" :class="` ${position} object-fit-none w-full h-full `" />
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;img class="{{ position }}"&gt;&lt;/img&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-position">Object Position property</label>
    <select id="select-position" v-model="position">
      <option value="object-position-top">Top</option>
      <option value="object-position-right">Right</option>
      <option value="object-position-bottom">Bottom</option>
      <option value="object-position-left">Left</option>
      <option value="object-position-center">Center</option>
    </select>
  </div>
</div>

## Customization

To customize the object utilities, you can use the following variables.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | "." | `The base selector for the utility` | `$selector-base` | Base selector for utility classes. | `"."` |
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

By default, no responsive utility classes are generated for object.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
