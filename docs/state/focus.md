<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const focus = ref("focus");

  const twelveFocus = `
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
  <div class="bg-primary-700 text-primary-100 py-5 px-3"></div>
`;

  const exampleFocus = computed(() => {

    const classes = [
      "focus",
      focus.value !== "focus" ? focus.value : "",
    ].filter(c => c !== "").join(' ');

    return `
<div class="${classes}">${twelveFocus}</div>
`
  });
</script>

# Focus

The focus state is applied to an element when it is focused by the user.

| Class Name | Description |
| --- | --- |
| `.focus` | The focus state class. |
| `:focus-visible` | The focus pseudo-class (from the root state selectors). |

<live-example :source-code="exampleFocus" :key="focus">
  <template #options>
    <div class="input-group">
      <select id="select-focus-focus" v-model="focus">
        <option value="focus">Focus</option>
        <option value="focus-visible">Focus Visible</option>
      </select>
    <p class="help-text">Select the focus style you would like displayed.</p>
    </div>
  </template>
</live-example>

## .focus properties

These are the default values for the `.focus` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-focus-width` | The width of both the focus outline and box shadow. | `var(--graupl-border-width)` |
| `--graupl-focus-outline-color` | The color of the focus outline. | `var(--graupl-color)` |
| `--graupl-focus-outline-width` | The width of the focus outline. | `var(--graupl-focus-width)` |
| `--graupl-focus-outline-style` | The style of the focus outline. | `dotted` |
| `--graupl-focus-outline` | The outline applied in the focus state. | `var(--graupl-focus-outline-width) var(--graupl-focus-outline-style) var(--graupl-focus-outline-color)` |
| `--graupl-focus-outline-offset` | The offset of the focus outline. | `calc(-1 * var(--graupl-focus-outline-width))` |
| `--graupl-focus-box-shadow-color` | The color of the focus box shadow. | `var(--graupl-background)` |
| `--graupl-focus-border-color` | The color applied to the border in the focus state. | `var(--graupl-background)` |
| `--graupl-focus-box-shadow` | The box shadow of the focus state. | `0 0 0 var(--graupl-focus-width) inset var(--graupl-focus-box-shadow-color)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$focus-outline-style` | The style of the focus outline. | `dotted` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
