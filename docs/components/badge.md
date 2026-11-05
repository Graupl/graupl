<script setup>
  import { ref, computed, onMounted } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const background = ref("default");

  const exampleBadges = computed(() => {

    const backgroundClasses = [
      background.value,
    ].filter(c => c !== null).join(" ");
    return `
  <span class="badge ${backgroundClasses}"> Badge details </span>
    `;
  });
</script>

# Badges

The badge component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.badge` | The badge root container that manages layout, overflow, and transitions |

<br/>

<live-example :source-code="exampleBadges" :key="background-content">
  <template #options>
    <div class="input-group">
      <label for="background">Badge Background Property</label>
      <select id="background" v-model="background">
        <option value="default">Default</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="tertiary">Tertiary</option>
      </select>
    </div>
  </template>
</live-example>

## .badge properties

These are the default values for the `.badge` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
 | `--graupl-badge-font-size` | The font size of the badge component. | `var(--graupl-font-size-sm)` |
| `--graupl-badge-background` | The background colour of the badge component. | `var(--graupl-background)` |
| `--graupl-badge-color` | The text colour of the badge component. | `var(--graupl-color)` |
| `--graupl-badge-border-color` | The border colour of the badge component. | `var(--graupl-border-color)` |
| `--graupl-badge-padding-x` | The horizontal padding of the badge component. | `var(--graupl-spacer-5)` |
| `--graupl-badge-padding-y` | The vertical padding of the badge component. | `var(--graupl-spacer-3)` |
| `--graupl-badge-padding` | The padding of the badge component (combines y and x padding). | `var(--graupl-badge-padding-y) var(--graupl-badge-padding-x)` |
| `--graupl-badge-border-top-width` | The top border width of the badge component. | `var(--graupl-border-top-width)` |
| `--graupl-badge-border-right-width` | The right border width of the badge component. | `var(--graupl-border-right-width)` |
| `--graupl-badge-border-bottom-width` | The bottom border width of the badge component. | `var(--graupl-border-bottom-width)` |
| `--graupl-badge-border-left-width` | The left border width of the badge component. | `var(--graupl-border-left-width)` |
| `--graupl-badge-border-width` | The border width of the badge component (combines top, right, bottom, and left widths). | `var(--graupl-badge-border-top-width) var(--graupl-badge-border-right-width) var(--graupl-badge-border-bottom-width) var(--graupl-badge-border-left-width)` |
| `--graupl-badge-border-top-style` | The top border style of the badge component. | `var(--graupl-border-top-style)` |
| `--graupl-badge-border-right-style` | The right border style of the badge component. | `var(--graupl-border-right-style)` |
| `--graupl-badge-border-bottom-style` | The bottom border style of the badge component. | `var(--graupl-border-bottom-style)` |
| `--graupl-badge-border-left-style` | The left border style of the badge component. | `var(--graupl-border-left-style)` |
| `--graupl-badge-border-style` | The border style of the badge component (combines top, right, bottom, and left styles). | `var(--graupl-badge-border-top-style) var(--graupl-badge-border-right-style) var(--graupl-badge-border-bottom-style) var(--graupl-badge-border-left-style)` |
| `--graupl-badge-border-top-left-radius` | The top-left border radius of the badge component. | `var(--graupl-border-top-left-radius)` |
| `--graupl-badge-border-top-right-radius` | The top-right border radius of the badge component. | `var(--graupl-border-top-right-radius)` |
| `--graupl-badge-border-bottom-right-radius` | The bottom-right border radius of the badge component. | `var(--graupl-border-bottom-right-radius)` |
| `--graupl-badge-border-bottom-left-radius` | The bottom-left border radius of the badge component. | `var(--graupl-border-bottom-left-radius)` |
| `--graupl-badge-border-radius` | The border radius of the badge component (combines top-left, top-right, bottom-right, and bottom-left radii). | `var(--graupl-badge-border-top-left-radius) var(--graupl-badge-border-top-right-radius) var(--graupl-badge-border-bottom-right-radius) var(--graupl-badge-border-bottom-left-radius)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | The selector base for the component. | `"."` |
| `$modifier-selector-base` | The selector base for component modifiers. | `"."` |
| `$themeable` | Flag to generate theme modifiers. | true |
| `$generate-base-theme-map` | A flag to generate the base theme maps for badge variants. | `true` |
| `$badge-selector-base` | The selector base for the badge component. | `"."` |
| `$badge-selector` | The badge component selector. | `"badge"` |
| `$badge-theme-selector-base` | The selector base for the badge theme component modifiers. | `"."` |
| `$badge-theme-selector-prefix` | The badge theme component modifier selector prefix. | `""` |
| `$badge-theme-mappings` | A map of properties and color shades used generate all badge variants. | `()` |
| `$badge-theme-map` | A map of all properties, colors, and color shades used to generate all badge variants. | `map.deep-merge($-badge-theme-map, $badge-theme-map)` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
