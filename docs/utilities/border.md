<script setup>
  import { ref } from "vue";

  const borderColor = ref("border-primary");
  const borderRadius = ref("border-radius-rounded");
  const borderStyle = ref("border-solid");
  const borderWidth = ref("border-thick");
</script>

# Border Utilities

The border utilities provide a set of classes to adjust the `border-color`, `border-radius`, `border-style`, and `border-width` properties of elements.

## Bordered

Applies the default border styling to an element. This class works in combination with `border-color`, but does not work in combination with the border classes which apply to `border-radius`, `border-style`, and `border-width`.

```css
  .bordered {
    border-width:
      var(--graupl-border-top-width)
      var(--graupl-border-right-width)
      var(--graupl-border-bottom-width)
      var(--graupl-border-left-width);
    border-radius:
      var(--graupl-border-top-left-radius)
      var(--graupl-border-top-right-radius)
      var(--graupl-border-bottom-right-radius)
      var(--graupl-border-bottom-left-radius);
    border-style:
      var(--graupl-border-top-style)
      var(--graupl-border-right-style)
      var(--graupl-border-bottom-style)
      var(--graupl-border-left-style)
  }
```

## Border Color

| Class Name | Property | Value |
| --- | --- | --- |
| `.border-primary` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary)` |
| `.border-primary-100` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--100)` |
| `.border-primary-200` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--200)` |
| `.border-primary-300` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--300)` |
| `.border-primary-400` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--400)` |
| `.border-primary-500` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--500)` |
| `.border-primary-600` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--600)` |
| `.border-primary-700` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--700)` |
| `.border-primary-800` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--800)` |
| `.border-primary-900` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--primary--900)` |
| `.border-secondary` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary)` |
| `.border-secondary-100` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--100)` |
| `.border-secondary-200` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--200)` |
| `.border-secondary-300` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--300)` |
| `.border-secondary-400` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--400)` |
| `.border-secondary-500` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--500)` |
| `.border-secondary-600` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--600)` |
| `.border-secondary-700` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--700)` |
| `.border-secondary-800` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--800)` |
| `.border-secondary-900` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--secondary--900)` |
| `.border-tertiary` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary)` |
| `.border-tertiary-100` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--100)` |
| `.border-tertiary-200` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--200)` |
| `.border-tertiary-300` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--300)` |
| `.border-tertiary-400` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--400)` |
| `.border-tertiary-500` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--500)` |
| `.border-tertiary-600` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--600)` |
| `.border-tertiary-700` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--700)` |
| `.border-tertiary-800` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--800)` |
| `.border-tertiary-900` | `border-color`, `--graupl-border-color` | `var(--graupl-theme-active--tertiary--900)` |
| `.border-transparent` | `border-color`, `--graupl-border-color` | `transparent` |
| `.border-top-primary` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary)` |
| `.border-top-primary-100` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--100)` |
| `.border-top-primary-200` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--200)` |
| `.border-top-primary-300` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--300)` |
| `.border-top-primary-400` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--400)` |
| `.border-top-primary-500` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--500)` |
| `.border-top-primary-600` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--600)` |
| `.border-top-primary-700` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--700)` |
| `.border-top-primary-800` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--800)` |
| `.border-top-primary-900` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--primary--900)` |
| `.border-top-secondary` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary)` |
| `.border-top-secondary-100` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--100)` |
| `.border-top-secondary-200` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--200)` |
| `.border-top-secondary-300` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--300)` |
| `.border-top-secondary-400` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--400)` |
| `.border-top-secondary-500` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--500)` |
| `.border-top-secondary-600` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--600)` |
| `.border-top-secondary-700` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--700)` |
| `.border-top-secondary-800` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--800)` |
| `.border-top-secondary-900` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--secondary--900)` |
| `.border-top-tertiary` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary)` |
| `.border-top-tertiary-100` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--100)` |
| `.border-top-tertiary-200` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--200)` |
| `.border-top-tertiary-300` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--300)` |
| `.border-top-tertiary-400` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--400)` |
| `.border-top-tertiary-500` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--500)` |
| `.border-top-tertiary-600` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--600)` |
| `.border-top-tertiary-700` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--700)` |
| `.border-top-tertiary-800` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--800)` |
| `.border-top-tertiary-900` | `border-top-color`, `--graupl-border-top-color` | `var(--graupl-theme-active--tertiary--900)` |
| `.border-top-transparent` | `border-top-color`, `--graupl-border-top-color` | `transparent` |
| `.border-right-primary` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary)` |
| `.border-right-primary-100` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--100)` |
| `.border-right-primary-200` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--200)` |
| `.border-right-primary-300` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--300)` |
| `.border-right-primary-400` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--400)` |
| `.border-right-primary-500` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--500)` |
| `.border-right-primary-600` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--600)` |
| `.border-right-primary-700` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--700)` |
| `.border-right-primary-800` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--800)` |
| `.border-right-primary-900` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--primary--900)` |
| `.border-right-secondary` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary)` |
| `.border-right-secondary-100` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--100)` |
| `.border-right-secondary-200` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--200)` |
| `.border-right-secondary-300` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--300)` |
| `.border-right-secondary-400` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--400)` |
| `.border-right-secondary-500` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--500)` |
| `.border-right-secondary-600` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--600)` |
| `.border-right-secondary-700` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--700)` |
| `.border-right-secondary-800` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--800)` |
| `.border-right-secondary-900` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--secondary--900)` |
| `.border-right-tertiary` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary)` |
| `.border-right-tertiary-100` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--100)` |
| `.border-right-tertiary-200` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--200)` |
| `.border-right-tertiary-300` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--300)` |
| `.border-right-tertiary-400` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--400)` |
| `.border-right-tertiary-500` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--500)` |
| `.border-right-tertiary-600` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--600)` |
| `.border-right-tertiary-700` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--700)` |
| `.border-right-tertiary-800` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--800)` |
| `.border-right-tertiary-900` | `border-right-color`, `--graupl-border-right-color` | `var(--graupl-theme-active--tertiary--900)` |
| `.border-right-transparent` | `border-right-color`, `--graupl-border-right-color` | `transparent` |
| `.border-bottom-primary` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary)` |
| `.border-bottom-primary-100` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--100)` |
| `.border-bottom-primary-200` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--200)` |
| `.border-bottom-primary-300` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--300)` |
| `.border-bottom-primary-400` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--400)` |
| `.border-bottom-primary-500` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--500)` |
| `.border-bottom-primary-600` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--600)` |
| `.border-bottom-primary-700` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--700)` |
| `.border-bottom-primary-800` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--800)` |
| `.border-bottom-primary-900` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--primary--900)` |
| `.border-bottom-secondary` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary)` |
| `.border-bottom-secondary-100` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--100)` |
| `.border-bottom-secondary-200` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--200)` |
| `.border-bottom-secondary-300` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--300)` |
| `.border-bottom-secondary-400` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--400)` |
| `.border-bottom-secondary-500` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--500)` |
| `.border-bottom-secondary-600` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--600)` |
| `.border-bottom-secondary-700` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--700)` |
| `.border-bottom-secondary-800` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--800)` |
| `.border-bottom-secondary-900` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--secondary--900)` |
| `.border-bottom-tertiary` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary)` |
| `.border-bottom-tertiary-100` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--100)` |
| `.border-bottom-tertiary-200` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--200)` |
| `.border-bottom-tertiary-300` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--300)` |
| `.border-bottom-tertiary-400` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--400)` |
| `.border-bottom-tertiary-500` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--500)` |
| `.border-bottom-tertiary-600` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--600)` |
| `.border-bottom-tertiary-700` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--700)` |
| `.border-bottom-tertiary-800` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--800)` |
| `.border-bottom-tertiary-900` | `border-bottom-color`, `--graupl-border-bottom-color` | `var(--graupl-theme-active--tertiary--900)` |
| `.border-bottom-transparent` | `border-bottom-color`, `--graupl-border-bottom-color` | `transparent` |
| `.border-left-primary` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary)` |
| `.border-left-primary-100` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--100)` |
| `.border-left-primary-200` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--200)` |
| `.border-left-primary-300` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--300)` |
| `.border-left-primary-400` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--400)` |
| `.border-left-primary-500` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--500)` |
| `.border-left-primary-600` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--600)` |
| `.border-left-primary-700` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--700)` |
| `.border-left-primary-800` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--800)` |
| `.border-left-primary-900` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--primary--900)` |
| `.border-left-secondary` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary)` |
| `.border-left-secondary-100` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--100)` |
| `.border-left-secondary-200` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--200)` |
| `.border-left-secondary-300` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--300)` |
| `.border-left-secondary-400` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--400)` |
| `.border-left-secondary-500` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--500)` |
| `.border-left-secondary-600` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--600)` |
| `.border-left-secondary-700` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--700)` |
| `.border-left-secondary-800` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--800)` |
| `.border-left-secondary-900` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--secondary--900)` |
| `.border-left-tertiary` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary)` |
| `.border-left-tertiary-100` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--100)` |
| `.border-left-tertiary-200` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--200)` |
| `.border-left-tertiary-300` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--300)` |
| `.border-left-tertiary-400` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--400)` |
| `.border-left-tertiary-500` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--500)` |
| `.border-left-tertiary-600` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--600)` |
| `.border-left-tertiary-700` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--700)` |
| `.border-left-tertiary-800` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--800)` |
| `.border-left-tertiary-900` | `border-left-color`, `--graupl-border-left-color` | `var(--graupl-theme-active--tertiary--900)` |
| `.border-left-transparent` | `border-left-color`, `--graupl-border-left-color` | `transparent` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex h-full g-5">
        <div :class="`bordered ${borderColor} bg-primary-100 is-quarter bs-half`"> </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="bordered {{ borderColor }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-border-color">Border Color property</label>
    <select id="select-border-color" v-model="borderColor">
      <option value="border-primary">Primary</option>
      <option value="border-primary-100">Primary 100</option>
      <option value="border-primary-200">Primary 200</option>
      <option value="border-primary-300">Primary 300</option>
      <option value="border-primary-400">Primary 400</option>
      <option value="border-primary-500">Primary 500</option>
      <option value="border-primary-600">Primary 600</option>
      <option value="border-primary-700">Primary 700</option>
      <option value="border-primary-800">Primary 800</option>
      <option value="border-primary-900">Primary 900</option>
      <option value="border-secondary">Secondary</option>
      <option value="border-secondary-100">Secondary 100</option>
      <option value="border-secondary-200">Secondary 200</option>
      <option value="border-secondary-300">Secondary 300</option>
      <option value="border-secondary-400">Secondary 400</option>
      <option value="border-secondary-500">Secondary 500</option>
      <option value="border-secondary-600">Secondary 600</option>
      <option value="border-secondary-700">Secondary 700</option>
      <option value="border-secondary-800">Secondary 800</option>
      <option value="border-secondary-900">Secondary 900</option>
      <option value="border-tertiary">Tertiary</option>
      <option value="border-tertiary-100">Tertiary 100</option>
      <option value="border-tertiary-200">Tertiary 200</option>
      <option value="border-tertiary-300">Tertiary 300</option>
      <option value="border-tertiary-400">Tertiary 400</option>
      <option value="border-tertiary-500">Tertiary 500</option>
      <option value="border-tertiary-600">Tertiary 600</option>
      <option value="border-tertiary-700">Tertiary 700</option>
      <option value="border-tertiary-800">Tertiary 800</option>
      <option value="border-tertiary-900">Tertiary 900</option>
      <option value="border-inherit">Inherit</option>
      <option value="border-current">Current</option>
      <option value="border-transparent">Transparent</option>
    </select>
  </div>
</div>

## Border Radius

| Class Name | Property | Value |
| --- | --- | --- |
| `.border-radius-rounded` | `border-radius`, `--graupl-border-radius` | `100vw` |
| `.border-radius-squared` | `border-radius`, `--graupl-border-radius` | `0` |
| `.border-radius-0` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-0)` |
| `.border-radius-1` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-1)` |
| `.border-radius-2` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-2)` |
| `.border-radius-3` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-3)` |
| `.border-radius-4` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-4)` |
| `.border-radius-5` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-5)` |
| `.border-radius-6` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-6)` |
| `.border-radius-7` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-7)` |
| `.border-radius-8` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-8)` |
| `.border-radius-9` | `border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-9)` |
| `.border-radius-10`: Sets the`border-radius`, `--graupl-border-radius` | `var(--graupl-spacer-10)` |
| `.border-top-radius-rounded` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `100vw` |
| `.border-top-radius-squared` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `0` |
| `.border-top-radius-0` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-0)` |
| `.border-top-radius-1` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-1)` |
| `.border-top-radius-2` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-2)` |
| `.border-top-radius-3` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-3)` |
| `.border-top-radius-4` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-4)` |
| `.border-top-radius-5` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-5)` |
| `.border-top-radius-6` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-6)` |
| `.border-top-radius-7` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-7)` |
| `.border-top-radius-8` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-8)` |
| `.border-top-radius-9` | `border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-9)` |
| `.border-top-radius-10`: Sets the`border-top-right-radius`, `border-top-left-radius`, `--graupl-border-top-right-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-10)` |
| `.border-bottom-radius-rounded` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `100vw` |
| `.border-bottom-radius-squared` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `0` |
| `.border-bottom-radius-0` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-0)` |
| `.border-bottom-radius-1` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-1)` |
| `.border-bottom-radius-2` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-2)` |
| `.border-bottom-radius-3` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-3)` |
| `.border-bottom-radius-4` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-4)` |
| `.border-bottom-radius-5` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-5)` |
| `.border-bottom-radius-6` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-6)` |
| `.border-bottom-radius-7` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-7)` |
| `.border-bottom-radius-8` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-8)` |
| `.border-bottom-radius-9` | `border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-9)` |
| `.border-bottom-radius-10`: Sets the`border-bottom-right-radius`, `border-bottom-left-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-10)` |
| `.border-right-radius-rounded` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `100vw` |
| `.border-right-radius-squared` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `0` |
| `.border-right-radius-0` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-0)` |
| `.border-right-radius-1` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-1)` |
| `.border-right-radius-2` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-2)` |
| `.border-right-radius-3` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-3)` |
| `.border-right-radius-4` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-4)` |
| `.border-right-radius-5` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-5)` |
| `.border-right-radius-6` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-6)` |
| `.border-right-radius-7` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-7)` |
| `.border-right-radius-8` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-8)` |
| `.border-right-radius-9` | `border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-9)` |
| `.border-right-radius-10`: Sets the`border-bottom-right-radius`, `border-top-right-radius`, `--graupl-border-bottom-right-radius`, and `--graupl-border-top-right-radius` | `var(--graupl-spacer-10)` |
| `.border-left-radius-rounded` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `100vw` |
| `.border-left-radius-squared` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `0` |
| `.border-left-radius-0` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-0)` |
| `.border-left-radius-1` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-1)` |
| `.border-left-radius-2` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-2)` |
| `.border-left-radius-3` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-3)` |
| `.border-left-radius-4` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-4)` |
| `.border-left-radius-5` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-5)` |
| `.border-left-radius-6` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-6)` |
| `.border-left-radius-7` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-7)` |
| `.border-left-radius-8` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-8)` |
| `.border-left-radius-9` | `border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-9)` |
| `.border-left-radius-10`: Sets the`border-bottom-left-radius`, `border-top-left-radius`, `--graupl-border-bottom-left-radius`, and `--graupl-border-top-left-radius` | `var(--graupl-spacer-10)` |
| `.border-top-right-radius-rounded` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `100vw` |
| `.border-top-right-radius-squared` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `0` |
| `.border-top-right-radius-0` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-0)` |
| `.border-top-right-radius-1` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-1)` |
| `.border-top-right-radius-2` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-2)` |
| `.border-top-right-radius-3` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-3)` |
| `.border-top-right-radius-4` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-4)` |
| `.border-top-right-radius-5` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-5)` |
| `.border-top-right-radius-6` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-6)` |
| `.border-top-right-radius-7` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-7)` |
| `.border-top-right-radius-8` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-8)` |
| `.border-top-right-radius-9` | `border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-9)` |
| `.border-top-right-radius-10`: Sets the`border-top-right-radius`, `--graupl-border-top-right-radius` | `var(--graupl-spacer-10)` |
| `.border-top-left-radius-0` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-0)` |
| `.border-top-left-radius-1` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-1)` |
| `.border-top-left-radius-2` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-2)` |
| `.border-top-left-radius-3` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-3)` |
| `.border-top-left-radius-4` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-4)` |
| `.border-top-left-radius-5` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-5)` |
| `.border-top-left-radius-6` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-6)` |
| `.border-top-left-radius-7` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-7)` |
| `.border-top-left-radius-8` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-8)` |
| `.border-top-left-radius-9` | `border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-9)` |
| `.border-top-left-radius-10`: Sets the`border-top-left-radius`, `--graupl-border-top-left-radius` | `var(--graupl-spacer-10)` |
| `.border-bottom-right-radius-rounded` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `100vw` |
| `.border-bottom-right-radius-squared` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `0` |
| `.border-bottom-right-radius-0` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-0)` |
| `.border-bottom-right-radius-1` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-1)` |
| `.border-bottom-right-radius-2` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-2)` |
| `.border-bottom-right-radius-3` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-3)` |
| `.border-bottom-right-radius-4` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-4)` |
| `.border-bottom-right-radius-5` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-5)` |
| `.border-bottom-right-radius-6` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-6)` |
| `.border-bottom-right-radius-7` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-7)` |
| `.border-bottom-right-radius-8` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-8)` |
| `.border-bottom-right-radius-9` | `border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-9)` |
| `.border-bottom-right-radius-10`: Sets the`border-bottom-right-radius`, `--graupl-border-bottom-right-radius` | `var(--graupl-spacer-10)` |
| `.border-bottom-left-radius-0` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-0)` |
| `.border-bottom-left-radius-1` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-1)` |
| `.border-bottom-left-radius-2` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-2)` |
| `.border-bottom-left-radius-3` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-3)` |
| `.border-bottom-left-radius-4` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-4)` |
| `.border-bottom-left-radius-5` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-5)` |
| `.border-bottom-left-radius-6` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-6)` |
| `.border-bottom-left-radius-7` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-7)` |
| `.border-bottom-left-radius-8` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-8)` |
| `.border-bottom-left-radius-9` | `border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-9)` |
| `.border-bottom-left-radius-10`: Sets the`border-bottom-left-radius`, `--graupl-border-bottom-left-radius` | `var(--graupl-spacer-10)` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex bs-full">
        <div :class="`border-solid border-thick border-primary ${borderRadius} bg-primary-100 is-quarter bs-half`"> </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="border-solid border-thick {{ borderRadius }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-border-radius">Border Radius property</label>
    <select id="select-border-radius" v-model="borderRadius">
      <option value="border-radius-rounded">Rounded</option>
      <option value="border-radius-Squared">Squared</option>
      <option value="border-radius-1">1</option>
      <option value="border-radius-2">2</option>
      <option value="border-radius-3">3</option>
      <option value="border-radius-4">4</option>
      <option value="border-radius-5">5</option>
      <option value="border-radius-6">6</option>
      <option value="border-radius-7">7</option>
      <option value="border-radius-8">8</option>
      <option value="border-radius-9">9</option>
      <option value="border-radius-10">10</option>
    </select>
  </div>
</div>

## Border Style

| Class Name | Property | Value |
| --- | --- | --- |
| `.border-solid` | `border-style`, `--graupl-border-style` | `solid` |
| `.border-dashed` | `border-style`, `--graupl-border-style` | `dashed` |
| `.border-dotted` | `border-style`, `--graupl-border-style` | `dotted` |
| `.border-double` | `border-style`, `--graupl-border-style` | `double` |
| `.border-groove` | `border-style`, `--graupl-border-style` | `groove` |
| `.border-ridge` | `border-style`, `--graupl-border-style` | `ridge` |
| `.border-inset` | `border-style`, `--graupl-border-style` | `inset` |
| `.border-outset` | `border-style`, `--graupl-border-style` | `outset` |
| `.border-none` | `border-style`, `--graupl-border-style` | `none` |
| `.border-top-solid` | `border-top-style`, `--graupl-border-top-style` | `solid` |
| `.border-top-dashed` | `border-top-style`, `--graupl-border-top-style` | `dashed` |
| `.border-top-dotted` | `border-top-style`, `--graupl-border-top-style` | `dotted` |
| `.border-top-double` | `border-top-style`, `--graupl-border-top-style` | `double` |
| `.border-top-groove` | `border-top-style`, `--graupl-border-top-style` | `groove` |
| `.border-top-ridge` | `border-top-style`, `--graupl-border-top-style` | `ridge` |
| `.border-top-inset` | `border-top-style`, `--graupl-border-top-style` | `inset` |
| `.border-top-outset` | `border-top-style`, `--graupl-border-top-style` | `outset` |
| `.border-top-none` | `border-top-style`, `--graupl-border-top-style` | `none` |
| `.border-right-solid` | `border-right-style`, `--graupl-border-right-style` | `solid` |
| `.border-right-dashed` | `border-right-style`, `--graupl-border-right-style` | `dashed` |
| `.border-right-dotted` | `border-right-style`, `--graupl-border-right-style` | `dotted` |
| `.border-right-double` | `border-right-style`, `--graupl-border-right-style` | `double` |
| `.border-right-groove` | `border-right-style`, `--graupl-border-right-style` | `groove` |
| `.border-right-ridge` | `border-right-style`, `--graupl-border-right-style` | `ridge` |
| `.border-right-inset` | `border-right-style`, `--graupl-border-right-style` | `inset` |
| `.border-right-outset` | `border-right-style`, `--graupl-border-right-style` | `outset` |
| `.border-right-none` | `border-right-style`, `--graupl-border-right-style` | `none` |
| `.border-bottom-solid` | `border-bottom-style`, `--graupl-border-bottom-style` | `solid` |
| `.border-bottom-dashed` | `border-bottom-style`, `--graupl-border-bottom-style` | `dashed` |
| `.border-bottom-dotted` | `border-bottom-style`, `--graupl-border-bottom-style` | `dotted` |
| `.border-bottom-double` | `border-bottom-style`, `--graupl-border-bottom-style` | `double` |
| `.border-bottom-groove` | `border-bottom-style`, `--graupl-border-bottom-style` | `groove` |
| `.border-bottom-ridge` | `border-bottom-style`, `--graupl-border-bottom-style` | `ridge` |
| `.border-bottom-inset` | `border-bottom-style`, `--graupl-border-bottom-style` | `inset` |
| `.border-bottom-outset` | `border-bottom-style`, `--graupl-border-bottom-style` | `outset` |
| `.border-bottom-none` | `border-bottom-style`, `--graupl-border-bottom-style` | `none` |
| `.border-left-solid` | `border-left-style`, `--graupl-border-left-style` | `solid` |
| `.border-left-dashed` | `border-left-style`, `--graupl-border-left-style` | `dashed` |
| `.border-left-dotted` | `border-left-style`, `--graupl-border-left-style` | `dotted` |
| `.border-left-double` | `border-left-style`, `--graupl-border-left-style` | `double` |
| `.border-left-groove` | `border-left-style`, `--graupl-border-left-style` | `groove` |
| `.border-left-ridge` | `border-left-style`, `--graupl-border-left-style` | `ridge` |
| `.border-left-inset` | `border-left-style`, `--graupl-border-left-style` | `inset` |
| `.border-left-outset` | `border-left-style`, `--graupl-border-left-style` | `outset` |
| `.border-left-none` | `border-left-style`, `--graupl-border-left-style` | `none` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex bs-full">
        <div :class="`border-thick border-primary ${borderStyle} bg-primary-100 is-quarter bs-half`"> </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="border-thick border-primary {{ borderStyle }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-border-style">Border Style property</label>
    <select id="select-border-style" v-model="borderStyle">
      <option value="border-solid">Solid</option>
      <option value="border-dashed">Dashed</option>
      <option value="border-dotted">Dotted</option>
      <option value="border-double">Double</option>
      <option value="border-groove">Groove</option>
      <option value="border-ridge">Ridge</option>
      <option value="border-inset">Inset</option>
      <option value="border-outset">Outset</option>
      <option value="border-none">None</option>
    </select>
  </div>
</div>

## Border Width

| Class Name | Property | Value |
| --- | --- | --- |
| `.border-thick` | `border-width`, `--graupl-border-width` | `thick` |
| `.border-thin` | `border-width`, `--graupl-border-width` | `thin` |
| `.border-medium` | `border-width`, `--graupl-border-width` | `medium` |
| `.border-none` | `border-width`, `--graupl-border-width` | `none` |
| `.border-0` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-0)` |
| `.border-1` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-1)` |
| `.border-2` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-2)` |
| `.border-3` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-3)` |
| `.border-4` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-4)` |
| `.border-5` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-5)` |
| `.border-6` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-6)` |
| `.border-7` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-7)` |
| `.border-8` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-8)` |
| `.border-9` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-9)` |
| `.border-10` | `border-width`, `--graupl-border-width` | `var(--graupl-spacer-10)` |
| `.border-top-thick` | `border-top-width`, `--graupl-border-top-width` | `thick` |
| `.border-top-thin` | `border-top-width`, `--graupl-border-top-width` | `thin` |
| `.border-top-medium` | `border-top-width`, `--graupl-border-top-width` | `medium` |
| `.border-top-none` | `border-top-width`, `--graupl-border-top-width` | `none` |
| `.border-top-0` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-0)` |
| `.border-top-1` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-1)` |
| `.border-top-2` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-2)` |
| `.border-top-3` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-3)` |
| `.border-top-4` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-4)` |
| `.border-top-5` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-5)` |
| `.border-top-6` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-6)` |
| `.border-top-7` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-7)` |
| `.border-top-8` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-8)` |
| `.border-top-9` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-9)` |
| `.border-top-10` | `border-top-width`, `--graupl-border-top-width` | `var(--graupl-spacer-10)` |
| `.border-right-thick` | `border-right-width`, `--graupl-border-right-width` | `thick` |
| `.border-right-thin` | `border-right-width`, `--graupl-border-right-width` | `thin` |
| `.border-right-medium` | `border-right-width`, `--graupl-border-right-width` | `medium` |
| `.border-right-none` | `border-right-width`, `--graupl-border-right-width` | `none` |
| `.border-right-0` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-0)` |
| `.border-right-1` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-1)` |
| `.border-right-2` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-2)` |
| `.border-right-3` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-3)` |
| `.border-right-4` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-4)` |
| `.border-right-5` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-5)` |
| `.border-right-6` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-6)` |
| `.border-right-7` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-7)` |
| `.border-right-8` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-8)` |
| `.border-right-9` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-9)` |
| `.border-right-10` | `border-right-width`, `--graupl-border-right-width` | `var(--graupl-spacer-10)` |
| `.border-bottom-thick` | `border-bottom-width`, `--graupl-border-bottom-width` | `thick` |
| `.border-bottom-thin` | `border-bottom-width`, `--graupl-border-bottom-width` | `thin` |
| `.border-bottom-medium` | `border-bottom-width`, `--graupl-border-bottom-width` | `medium` |
| `.border-bottom-none` | `border-bottom-width`, `--graupl-border-bottom-width` | `none` |
| `.border-bottom-0` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-0)` |
| `.border-bottom-1` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-1)` |
| `.border-bottom-2` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-2)` |
| `.border-bottom-3` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-3)` |
| `.border-bottom-4` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-4)` |
| `.border-bottom-5` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-5)` |
| `.border-bottom-6` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-6)` |
| `.border-bottom-7` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-7)` |
| `.border-bottom-8` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-8)` |
| `.border-bottom-9` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-9)` |
| `.border-bottom-10` | `border-bottom-width`, `--graupl-border-bottom-width` | `var(--graupl-spacer-10)` |
| `.border-left-thick` | `border-left-width`, `--graupl-border-left-width` | `thick` |
| `.border-left-thin` | `border-left-width`, `--graupl-border-left-width` | `thin` |
| `.border-left-medium` | `border-left-width`, `--graupl-border-left-width` | `medium` |
| `.border-left-none` | `border-left-width`, `--graupl-border-left-width` | `none` |
| `.border-left-0` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-0)` |
| `.border-left-1` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-1)` |
| `.border-left-2` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-2)` |
| `.border-left-3` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-3)` |
| `.border-left-4` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-4)` |
| `.border-left-5` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-5)` |
| `.border-left-6` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-6)` |
| `.border-left-7` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-7)` |
| `.border-left-8` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-8)` |
| `.border-left-9` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-9)` |
| `.border-left-10` | `border-left-width`, `--graupl-border-left-width` | `var(--graupl-spacer-10)` |

<div class="static-example">
  <div class="example-container">
    <div class="example-display">
      <div class="display-flex bs-full">
        <div :class="`border-solid border-primary ${borderWidth} bg-primary-100 is-quarter bs-half`"> </div>
      </div>
    </div>
    <div class="example-classes">
      <code>&lt;div class="border-solid border-primary {{ borderWidth }}"&gt;&lt;/div&gt;</code>
    </div>
  </div>
  <div class="input-group">
    <label for="select-border-width">Border Width property</label>
    <select id="select-border-width" v-model="borderWidth">
      <option value="border-thick">Thick</option>
      <option value="border-thin">Thin</option>
      <option value="border-medium">Medium</option>
      <option value="border-0">0</option>
      <option value="border-1">1</option>
      <option value="border-2">2</option>
      <option value="border-3">3</option>
      <option value="border-4">4</option>
      <option value="border-5">5</option>
      <option value="border-6">6</option>
      <option value="border-7">7</option>
      <option value="border-8">8</option>
      <option value="border-9">9</option>
      <option value="border-10">10</option>
    </select>
  </div>
</div>

## Customization

To customize the border utilities, you can use the following variables.

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
| `$bordered-selector` | The selector for the bordered class. | `"bordered"` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for border.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
