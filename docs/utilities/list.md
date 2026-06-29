<script setup>
  import { ref } from "vue";

  const position = ref("list-style-inside");
  const type = ref("list-style-none");
</script>

# List Utilities

The list utilities provide a set of classes to adjust the `list-style-position` and `list-style-type` properties of elements.

## List Style Position

| Class Name | Property | Value |
| --- | --- | --- |
| `.list-style-inside` | list-style-position | `inside` |
| `.list-style-outside` | list-style-position | `outside` |

<div class="example">
  <div class="example-container">
    <div class="example-display  h-auto">
      <div class="display-flex g-5">
        <ul>
          <li :class="` p-2 m-2 bordered border-primary `" >List Item 1</li>
          <li :class="`${position} p-2 m-2 bordered border-tertiary `" >List Item 2</li>
          <li :class="`${position} p-2 m-2 bordered border-tertiary`" >List Item 3</li>
        </ul>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;li class="{{ position }}"&gt;&lt;/li&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-position">List Style Type property</label>
    <select id="select-position" v-model="position">
      <option value="list-style-inside">Inside</option>
      <option value="list-style-outside">Outside</option>
    </select>
  </div>
</div>

## List Style Type

| Class Name | Property | Value |
| --- | --- | --- |
| `.list-style-none` | list-style-type | `none` |
| `.list-style-disc` | list-style-type | `disc` |
| `.list-style-decimal` | list-style-type | `decimal` |
| `.list-style-circle` | list-style-type | `circle` |
| `.list-style-square` | list-style-type | `square` |

<div class="example">
  <div class="example-container">
    <div class="example-display  h-auto">
      <div class="display-flex g-5">
        <ul>
          <li :class="`p-2 text-primary `" >List Item 1</li>
          <li :class="`${type} p-2  text-tertiary `" >List Item 2</li>
          <li :class="`${type} p-2 text-tertiary `" >List Item 3</li>
        </ul>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;img class="{{ type }}"&gt;&lt;/img&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-type">List Style Type property</label>
    <select id="select-type" v-model="type">
      <option value="list-style-none">None</option>
      <option value="list-style-disc">Disc</option>
      <option value="list-style-decimal">Decimal</option>
      <option value="list-style-circle">Circle</option>
      <option value="list-style-square">Square</option>
    </select>
  </div>
</div>

## Customization

To customize the list utilities, you can use the following variables.

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

By default, no responsive utility classes are generated for list.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
