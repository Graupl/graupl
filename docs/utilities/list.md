<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const markerPosition = ref("list-style-outside");
  const markerType = ref("list-style-disc");
  const positionExample = computed(() => `<ul class="max-w-10 bordered border-dashed border-tertiary-700 m-0 p-5 pl-8 list-style-disc ${markerPosition.value}">
  <li>Pack a lantern for the journey through the ogre caves.</li>
  <li>Bring a spare wick.</li>
</ul>`);
  const typeExample = computed(() => `<ul role="list" class="m-0 pl-8 ${markerType.value}">
  <li>Parchment</li>
  <li>Quill</li>
  <li>Trail map</li>
</ul>`);
</script>

# List Utilities

The list utilities provide classes for changing the type and position of list markers. See the [List component](../components/list.md) for list layouts.

## List Style Position

Use `.list-style-inside` to place the marker inside the first line of each item. With `.list-style-outside`, wrapped lines align with the first line of text.

| Class Name            | Property            | Value     |
| --------------------- | ------------------- | --------- |
| `.list-style-inside`  | list-style-position | `inside`  |
| `.list-style-outside` | list-style-position | `outside` |

<live-example :source-code="positionExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="list-markerPosition">List style position</label>
      <select id="list-markerPosition" v-model="markerPosition">
        <option value="list-style-inside">.list-style-inside</option>
        <option value="list-style-outside">.list-style-outside</option>
      </select>
    </div>
  </template>
</live-example>

## List Style Type

Use a list style type class to change or remove the markers.

| Class Name            | Property        | Value     |
| --------------------- | --------------- | --------- |
| `.list-style-none`    | list-style-type | `none`    |
| `.list-style-disc`    | list-style-type | `disc`    |
| `.list-style-decimal` | list-style-type | `decimal` |
| `.list-style-circle`  | list-style-type | `circle`  |
| `.list-style-square`  | list-style-type | `square`  |

::: warning Safari list semantics
Use `role="list"` to preserve [list semantics in Safari](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/list-style#accessibility) when the markers are removed.
:::

<live-example :source-code="typeExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="list-markerType">List style type</label>
      <select id="list-markerType" v-model="markerType">
        <option value="list-style-none">.list-style-none</option>
        <option value="list-style-disc">.list-style-disc</option>
        <option value="list-style-decimal">.list-style-decimal</option>
        <option value="list-style-circle">.list-style-circle</option>
        <option value="list-style-square">.list-style-square</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/list.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/list.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/list.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the list utilities.

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
