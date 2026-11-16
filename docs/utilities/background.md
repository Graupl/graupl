<script setup>
  import { computed, ref } from "vue";
  import { withBase } from "vitepress";
  import LiveExample from "../vue-components/LiveExample.vue";

  const imageUrl = withBase("/card-trail-map.svg");

  function renderBackground(classes, extraStyles = "", content = "", attributes = "") {
    const styles = [`background-image: url('${imageUrl}')`, extraStyles].filter(Boolean).join("; ");

    return `<div class="h-10 bordered border-dashed border-tertiary-700 ${classes}" style="${styles}"${attributes}>${content}</div>`;
  }

  const attachment = ref("bg-attachment-scroll");
  const attachmentExample = computed(() => renderBackground(`overflow-auto bg-repeat-repeat ${attachment.value}`, "background-size: 8rem auto", `<div class="h-10"></div>
  <div class="h-10"></div>`, ' tabindex="0" role="region" aria-label="Scrollable background preview"'));
  const clip = ref("bg-clip-border-box");
  const clipExample = computed(() => renderBackground(`border-7 p-7 text-3xl ${clip.value} ${clip.value === "bg-clip-text" ? "text-transparent" : ""}`, "background-size: cover", `Trail map`));
  const image = ref("");
  const imageExample = computed(() => renderBackground(`bg-size-cover ${image.value}`));
  const origin = ref("bg-origin-border-box");
  const originExample = computed(() => renderBackground(`border-7 p-7 bg-repeat-no-repeat ${origin.value}`, "background-size: 8rem auto"));
  const position = ref("bg-position-top");
  const positionExample = computed(() => renderBackground(`bg-repeat-no-repeat ${position.value}`, "background-size: 80% 75%"));
  const repeat = ref("bg-repeat-repeat");
  const repeatExample = computed(() => renderBackground(`${repeat.value}`, "background-size: 6rem auto"));
  const size = ref("bg-size-auto");
  const sizeExample = computed(() => renderBackground(`bg-repeat-no-repeat bg-position-center ${size.value}`));
</script>

# Background Utilities

The background utilities provide classes for controlling how a background image is displayed. To set a background color, use the [Color utilities](./color.md#background-color).

## Background Attachment

Scroll inside the preview to compare how the image moves with the content. Fixed backgrounds use the viewport and can appear differently on mobile.

| Class Name              | Property              | Value    |
| ----------------------- | --------------------- | -------- |
| `.bg-attachment-scroll` | background-attachment | `scroll` |
| `.bg-attachment-fixed`  | background-attachment | `fixed`  |
| `.bg-attachment-local`  | background-attachment | `local`  |

<live-example :source-code="attachmentExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="background-attachment">Background attachment</label>
      <select id="background-attachment" v-model="attachment">
        <option value="bg-attachment-scroll">.bg-attachment-scroll</option>
        <option value="bg-attachment-fixed">.bg-attachment-fixed</option>
        <option value="bg-attachment-local">.bg-attachment-local</option>
      </select>
    </div>
  </template>
</live-example>

## Background Clip

The border and padding mark where each clip starts. Select `.bg-clip-text` to show the image through the letters.

| Class Name             | Property        | Value         |
| ---------------------- | --------------- | ------------- |
| `.bg-clip-border-box`  | background-clip | `border-box`  |
| `.bg-clip-padding-box` | background-clip | `padding-box` |
| `.bg-clip-content-box` | background-clip | `content-box` |
| `.bg-clip-text`        | background-clip | `text`        |
| `.bg-clip-border-area` | background-clip | `border-area` |

<live-example :source-code="clipExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="background-clip">Background clip</label>
      <select id="background-clip" v-model="clip">
        <option value="bg-clip-border-box">.bg-clip-border-box</option>
        <option value="bg-clip-padding-box">.bg-clip-padding-box</option>
        <option value="bg-clip-content-box">.bg-clip-content-box</option>
        <option value="bg-clip-text">.bg-clip-text</option>
        <option value="bg-clip-border-area">.bg-clip-border-area</option>
      </select>
    </div>
  </template>
</live-example>

## Background Image

Select `.bg-image-none` to remove the image.

| Class Name       | Property         | Value  |
| ---------------- | ---------------- | ------ |
| `.bg-image-none` | background-image | `none` |

<live-example :source-code="imageExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="background-image">Background image</label>
      <select id="background-image" v-model="image">
        <option value="">Show image</option>
        <option value="bg-image-none">.bg-image-none</option>
      </select>
    </div>
  </template>
</live-example>

## Background Origin

The border and padding show where the image starts.

| Class Name               | Property          | Value         |
| ------------------------ | ----------------- | ------------- |
| `.bg-origin-border-box`  | background-origin | `border-box`  |
| `.bg-origin-padding-box` | background-origin | `padding-box` |
| `.bg-origin-content-box` | background-origin | `content-box` |

<live-example :source-code="originExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="background-origin">Background origin</label>
      <select id="background-origin" v-model="origin">
        <option value="bg-origin-border-box">.bg-origin-border-box</option>
        <option value="bg-origin-padding-box">.bg-origin-padding-box</option>
        <option value="bg-origin-content-box">.bg-origin-content-box</option>
      </select>
    </div>
  </template>
</live-example>

## Background Position

Move the image within the box.

| Class Name            | Property            | Value    |
| --------------------- | ------------------- | -------- |
| `.bg-position-top`    | background-position | `top`    |
| `.bg-position-right`  | background-position | `right`  |
| `.bg-position-bottom` | background-position | `bottom` |
| `.bg-position-left`   | background-position | `left`   |
| `.bg-position-center` | background-position | `center` |

<live-example :source-code="positionExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="background-position">Background position</label>
      <select id="background-position" v-model="position">
        <option value="bg-position-top">.bg-position-top</option>
        <option value="bg-position-right">.bg-position-right</option>
        <option value="bg-position-bottom">.bg-position-bottom</option>
        <option value="bg-position-left">.bg-position-left</option>
        <option value="bg-position-center">.bg-position-center</option>
      </select>
    </div>
  </template>
</live-example>

## Background Repeat

Change how the image tiles across the box.

| Class Name             | Property          | Value       |
| ---------------------- | ----------------- | ----------- |
| `.bg-repeat-repeat`    | background-repeat | `repeat`    |
| `.bg-repeat-repeat-x`  | background-repeat | `repeat-x`  |
| `.bg-repeat-repeat-y`  | background-repeat | `repeat-y`  |
| `.bg-repeat-space`     | background-repeat | `space`     |
| `.bg-repeat-round`     | background-repeat | `round`     |
| `.bg-repeat-no-repeat` | background-repeat | `no-repeat` |

<live-example :source-code="repeatExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="background-repeat">Background repeat</label>
      <select id="background-repeat" v-model="repeat">
        <option value="bg-repeat-repeat">.bg-repeat-repeat</option>
        <option value="bg-repeat-repeat-x">.bg-repeat-repeat-x</option>
        <option value="bg-repeat-repeat-y">.bg-repeat-repeat-y</option>
        <option value="bg-repeat-space">.bg-repeat-space</option>
        <option value="bg-repeat-round">.bg-repeat-round</option>
        <option value="bg-repeat-no-repeat">.bg-repeat-no-repeat</option>
      </select>
    </div>
  </template>
</live-example>

## Background Size

Compare the image at its automatic size, fitted inside the box, or scaled to cover it.

| Class Name         | Property        | Value     |
| ------------------ | --------------- | --------- |
| `.bg-size-auto`    | background-size | `auto`    |
| `.bg-size-cover`   | background-size | `cover`   |
| `.bg-size-contain` | background-size | `contain` |

<live-example :source-code="sizeExample" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="background-size">Background size</label>
      <select id="background-size" v-model="size">
        <option value="bg-size-auto">.bg-size-auto</option>
        <option value="bg-size-cover">.bg-size-cover</option>
        <option value="bg-size-contain">.bg-size-contain</option>
      </select>
    </div>
  </template>
</live-example>

## Installation

### Stylesheets

The full `graupl.css` stylesheet includes these styles. To load them separately, use one of the options below.

::: code-group

```html [Local]
<link rel="stylesheet" href="./dist/css/utilities/background.css">
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@graupl/graupl@1.0.0-beta.58/dist/css/utilities/background.css">
```

```scss [Sass]
@use "pkg:@graupl/core/utilities/background.scss";
```

:::

## Sass variables

The following Sass variables can be used to customize the generation of the background utilities.

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
