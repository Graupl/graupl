<script setup>
  import { ref } from "vue";

  const backgroundAttachment = ref("bg-attachment-scroll");
  const backgroundClip = ref("bg-clip-border-box");
  const backgroundImage = ref("bg-image-none");
  const backgroundOrigin = ref("bg-origin-border-box");
  const backgroundPosition = ref("bg-position-top");
  const backgroundRepeat = ref("bg-repeat-repeat");
  const backgroundSize = ref("bg-size-auto");
</script>

# Background Utilities

The background utilities provide a set of classes to adjust the `background-attachment`, `background-clip`, `background-image`, `background-origin`, `background-position`, `background-repeat`, and `background-size` properties of elements.

::: tip :pencil2: Note
For `background-color` utility classes, please refer to the [color utilities](./color).
:::

## Background Attachment

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-attachment-scroll` | background-attachment | `scroll` |
| `.bg-attachment-fixed` | background-attachment | `fixed` |
| `.bg-attachment-local` | background-attachment | `local` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex g-5 g-5">
        <div :class="` bordered border-primary-700 bg-repeat-repeat bg-position-top text-primary ${backgroundAttachment} `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');"> Test Item
        </div>
        <div :class="` bordered border-primary-700 bg-repeat-repeat bg-position-top text-primary`" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');"> Auto Item
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ backgroundAttachment }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-background-attachment">Background Attachment property</label>
    <select id="select-background-attachment" v-model="backgroundAttachment">
      <option value="bg-attachment-scroll">Scroll</option>
      <option value="bg-attachment-fixed">Fixed</option>
      <option value="bg-attachment-local">Local</option>
    </select>
  </div>
</div>

## Background Clip

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-clip-border-box` | background-clip | `border-box` |
| `.bg-clip-padding-box` | background-clip | `padding-box` |
| `.bg-clip-content-box` | background-clip | `content-box` |
| `.bg-clip-text` | background-clip | `text` |
| `.bg-clip-border-area` | background-clip | `border-area` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex g-5">
        <div :class="` border-3 border-dashed text-primary border-primary-700 bg-repeat-round p-5 ${backgroundClip} `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Test Item
        </div>
        <div :class="` border-3 border-dashed text-primary border-primary-700 bg-repeat-round p-5 `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Auto Item
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ backgroundClip }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-background-clip">Background Clip property</label>
    <select id="select-background-clip" v-model="backgroundClip">
      <option value="bg-clip-border-box">Border Box</option>
      <option value="bg-clip-padding-box">Padding Box</option>
      <option value="bg-clip-content-box">Content Box</option>
      <option value="bg-clip-text">Text</option>
      <option value="bg-clip-border-area">Border Area</option>
    </select>
  </div>
</div>

## Background Image

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-image-none` | background-image | `none` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex g-5">
        <div :class="` bordered border-primary-700 bg-repeat-repeat-y ${backgroundImage} `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Test Item
        </div>
        <div :class="` bordered border-primary-700 bg-repeat-repeat-y ${backgroundImage} `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Auto Item
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ backgroundImage }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-background-image">Background image property</label>
    <select id="select-background-image" v-model="backgroundImage">
      <option value="bg-image-none">None</option>
    </select>
  </div>
</div>

## Background Origin

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-origin-border-box` | background-origin | `border-box` |
| `.bg-origin-padding-box` | background-origin | `padding-box` |
| `.bg-origin-content-box` | background-origin | `content-box` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex g-5">
        <div :class="` border-3 border-dashed text-primary border-primary-700 bg-repeat-round p-5  ${backgroundOrigin} `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Test Item
        </div>
        <div :class="` border-3 border-dashed text-primary border-primary-700 bg-repeat-round p-5  `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Auto Item
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ backgroundOrigin }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-background-origin">Background Origin property</label>
    <select id="select-background-origin" v-model="backgroundOrigin">
      <option value="bg-origin-border-box">Border Box</option>
      <option value="bg-origin-padding-box">Padding Box</option>
      <option value="bg-origin-content-box">Content Box</option>
      <option value="bg-origin-text">Text</option>
      <option value="bg-origin-border-area">Border Area</option>
    </select>
  </div>
</div>

## Background Position

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-position-top` | background-position | `top` |
| `.bg-position-right` | background-position | `right` |
| `.bg-position-bottom` | background-position | `bottom` |
| `.bg-position-left` | background-position | `left` |
| `.bg-position-center` | background-position | `center` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex g-5">
        <div :class="` bordered border-primary-700 text-primary  bg-repeat-space ${backgroundPosition} `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Test Item
        </div>
        <div :class="` bordered border-primary-700 text-primary  bg-repeat-space `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Auto Item
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ backgroundPosition }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-background-position">Background Position property</label>
    <select id="select-background-position" v-model="backgroundPosition">
      <option value="bg-position-top">Top</option>
      <option value="bg-position-right">Right</option>
      <option value="bg-position-bottom">Bottom</option>
      <option value="bg-position-left">Left</option>
      <option value="bg-position-center">Center</option>
    </select>
  </div>
</div>

## Background Repeat

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-repeat-repeat` | background-repeat | `repeat` |
| `.bg-repeat-repeat-x` | background-repeat | `repeat-x` |
| `.bg-repeat-repeat-y` | background-repeat | `repeat-y` |
| `.bg-repeat-space` | background-repeat | `space` |
| `.bg-repeat-round` | background-repeat | `round` |
| `.bg-repeat-no-repeat` | background-repeat | `no-repeat` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex g-5">
        <div :class="` bordered border-primary-700 text-primary ${backgroundRepeat} `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Test Item
        </div>
        <div :class="` bordered border-primary-700 text-primary `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Auto Item
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ backgroundRepeat }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-background-repeat">Background Repeat property</label>
    <select id="select-background-repeat" v-model="backgroundRepeat">
      <option value="bg-repeat-repeat">Repeat</option>
      <option value="bg-repeat-repeat-x">Repeat X</option>
      <option value="bg-repeat-repeat-y">Repeat Y</option>
      <option value="bg-repeat-space">Space</option>
      <option value="bg-repeat-round">Round</option>
      <option value="bg-repeat-no-repeat">No Repeat</option>
    </select>
  </div>
</div>

## Background Size

| Class Name | Property | Value |
| --- | --- | --- |
| `.bg-size-auto` | background-size | `auto` |
| `.bg-size-cover` | background-size | `cover` |
| `.bg-size-contain` | background-size | `contain` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex g-5">
        <div :class="` bordered border-primary-700 text-primary bg-repeat-repeat-y ${backgroundSize} `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Test Item
        </div>
        <div :class="` bordered border-primary-700 text-primary bg-repeat-repeat-y `" style="height:1000px; width:300px; background-image: url('https://picsum.photos/200/350?random=6');">Auto Item
        </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="{{ backgroundSize }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-background-size">Background Size property</label>
    <select id="select-background-size" v-model="backgroundSize">
      <option value="bg-size-auto">Auto</option>
      <option value="bg-size-cover">Cover</option>
      <option value="bg-size-contain">Contain</option>
    </select>
  </div>
</div>

## Customization

To customize the background utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for background.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
