<script setup>
  import { computed, ref } from "vue";
  import { withBase } from "vitepress";
  import LiveExample from "../vue-components/LiveExample.vue";

  const width = ref(100);
  const exampleContainer = computed(() => `<div class="container-type-inline" style="width: ${width.value}%">
  <div class="card horizontal">
    <div class="card-image">
      <img src="${withBase("/card-trail-map.svg")}" alt="" width="480" height="240">
    </div>
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">Wyvern Ridge</h3>
      </div>
      <div class="card-body">
        <p>Follow the marked trail to the old watchtower below the wyvern nests.</p>
      </div>
      <div class="card-footer">
        <small>Two hours on foot</small>
      </div>
    </div>
  </div>
</div>`);
</script>

# Container Utilities

The container utilities provide a set of classes to set the `container-type` property. Use them to make an element a query container so its descendants can respond to changes in its size or scroll state.

## Inline-size queries

A [horizontal card](../components/card.md#horizontal-cards-in-narrow-containers) shows how a component can adapt to the space it has. Adding `.container-type-inline` to the wrapper makes its width available to the card's container query. At 767px or narrower, the card stacks its image above the content. The slider changes the wrapper's width so you can see the card switch layouts without resizing the browser.

<live-example :source-code="exampleContainer" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="query-container-width">Container width ({{ width }}%)</label>
      <input id="query-container-width" type="range" min="50" max="100" v-model.number="width">
    </div>
  </template>
</live-example>

## Classes

| Class Name | Property | Value |
| --- | --- | --- |
| `.container-type-inline` | container-type | `inline-size` |
| `.container-type-normal` | container-type | `normal` |
| `.container-type-size` | container-type | `size` |
| `.container-type-scroll` | container-type | `scroll-state` |

## Sass variables

The following Sass variables can be used to customize the generation of the container utilities.

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

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for container.

::: info Note
For more information on responsive variants, refer to the [Responsive classes](../responsive-classes) documentation.
:::
