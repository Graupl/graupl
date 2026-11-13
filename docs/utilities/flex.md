<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const basis = ref("flex-auto");
  const direction = ref("flex-row");
  const grow = ref("flex-grow");
  const shrink = ref("flex-shrink");
  const wrap = ref("flex-wrap");
  const frame = "display-flex g-2 bordered border-dashed border-tertiary-700 overflow-auto";
  const block = "w-7 h-7 flex-no-shrink bordered border-primary-700 bg-primary-300";
  const highlight = "w-7 h-7 bordered border-tertiary-700 bg-tertiary-300";

  const exampleBasis = computed(() => `<div class="${frame}">
  <div class="${block}"></div>
  <div class="${highlight} text-tertiary-900 flex-no-shrink ${basis.value}">Trail map</div>
  <div class="${block}"></div>
</div>`);

  const exampleDirection = computed(() => `<div class="${frame} ${direction.value}">
  <div class="${block} text-primary-900">1</div>
  <div class="${block} text-primary-900">2</div>
  <div class="${block} text-primary-900">3</div>
</div>`);

  const exampleGrow = computed(() => `<div class="${frame}">
  <div class="${block}"></div>
  <div class="${highlight} ${grow.value}"></div>
  <div class="${block}"></div>
</div>`);

  const exampleShrink = computed(() => `<div class="${frame} w-fit-content" style="max-width: 6rem">
  <div class="${block}"></div>
  <div class="${highlight} ${shrink.value}"></div>
  <div class="${block}"></div>
</div>`);

  const exampleWrap = computed(() => `<div class="${frame} ${wrap.value}" style="max-width: 6rem">
  <div class="${block} text-primary-900">1</div>
  <div class="${block} text-primary-900">2</div>
  <div class="${block} text-primary-900">3</div>
  <div class="${block} text-primary-900">4</div>
</div>`);
</script>

# Flex Utilities

The flex utilities provide a set of classes to adjust the `flex-basis`, `flex-direction`, `flex-grow`, `flex-shrink`, and `flex-wrap` properties of elements.

## Flex Basis

Flex basis sets an item’s starting size along the main axis. With `.flex-auto`, the pink item starts at its `.w-7` width. Choose a different class to size it from its text or from the available width.

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

<live-example :source-code="exampleBasis" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-flex-basis">Flex basis class</label>
      <select id="select-flex-basis" v-model="basis">
        <option value="flex-auto">.flex-auto</option>
        <option value="flex-fit-content">.flex-fit-content</option>
        <option value="flex-max-content">.flex-max-content</option>
        <option value="flex-min-content">.flex-min-content</option>
        <option value="flex-content">.flex-content</option>
        <option value="flex-0">.flex-0</option>
        <option value="flex-full">.flex-full</option>
        <option value="flex-quarter">.flex-quarter</option>
        <option value="flex-half">.flex-half</option>
        <option value="flex-three-quarters">.flex-three-quarters</option>
        <option value="flex-third">.flex-third</option>
        <option value="flex-two-thirds">.flex-two-thirds</option>
      </select>
    </div>
  </template>
</live-example>


## Flex Direction

Flex direction determines whether items form a row or column and which end the row or column starts from.

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-row` | flex-direction | `row` |
| `.flex-row-reverse` | flex-direction | `row-reverse` |
| `.flex-col` | flex-direction | `column` |
| `.flex-col-reverse` | flex-direction | `column-reverse` |

<live-example :source-code="exampleDirection" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-flex-direction">Flex direction class</label>
      <select id="select-flex-direction" v-model="direction">
        <option value="flex-row">.flex-row</option>
        <option value="flex-row-reverse">.flex-row-reverse</option>
        <option value="flex-col">.flex-col</option>
        <option value="flex-col-reverse">.flex-col-reverse</option>
      </select>
    </div>
  </template>
</live-example>


## Flex Grow

Flex grow determines whether an item takes up extra space. Only the pink item can grow in this row.

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-grow` | flex-grow | `1` |
| `.flex-no-grow` | flex-grow | `0` |

<live-example :source-code="exampleGrow" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-flex-grow">Flex grow class</label>
      <select id="select-flex-grow" v-model="grow">
        <option value="flex-grow">.flex-grow</option>
        <option value="flex-no-grow">.flex-no-grow</option>
      </select>
    </div>
  </template>
</live-example>


## Flex Shrink

Flex shrink determines whether an item gets smaller when the row runs out of space. The blue items keep their widths, so only the pink item shrinks when you select `.flex-shrink`.

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-shrink` | flex-shrink | `1` |
| `.flex-no-shrink` | flex-shrink | `0` |

<live-example :source-code="exampleShrink" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-flex-shrink">Flex shrink class</label>
      <select id="select-flex-shrink" v-model="shrink">
        <option value="flex-shrink">.flex-shrink</option>
        <option value="flex-no-shrink">.flex-no-shrink</option>
      </select>
    </div>
  </template>
</live-example>


## Flex Wrap

Flex wrap determines whether items stay on one line or move to additional lines. Reverse wrapping places new lines on the opposite side of the first line.

| Class Name | Property | Value |
| --- | --- | --- |
| `.flex-wrap` | flex-wrap | `wrap` |
| `.flex-wrap-reverse` | flex-wrap | `wrap-reverse` |
| `.flex-nowrap` | flex-wrap | `nowrap` |

<live-example :source-code="exampleWrap" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-flex-wrap">Flex wrap class</label>
      <select id="select-flex-wrap" v-model="wrap">
        <option value="flex-wrap">.flex-wrap</option>
        <option value="flex-wrap-reverse">.flex-wrap-reverse</option>
        <option value="flex-nowrap">.flex-nowrap</option>
      </select>
    </div>
  </template>
</live-example>


## Sass variables

The following Sass variables can be used to customize the generation of the flex utilities.

| Variable | Description | Default Value |
| --- | --- | --- |
| `$selector-base` | Base selector for utility classes. | `"."` |
| `$selector-prefix` | The selector prefix for all utility classes. | `""` |
| `$selector-suffix` | The selector suffix for all utility classes. | `""` |
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

No responsive classes are generated by default. See the [Responsive Classes guide](../responsive-classes.md) for configuration.
