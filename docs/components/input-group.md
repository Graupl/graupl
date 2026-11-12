<script setup>
  import { computed, ref } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const layout = ref("");
  const exampleField = `<div class="input-group">
  <label for="familiar-name">Familiar name</label>
  <input type="text" id="familiar-name" aria-describedby="familiar-name-help">
  <small class="help-text" id="familiar-name-help">Use the name your familiar answers to.</small>
</div>`;

  const exampleLayout = computed(() => `<div class="input-group${layout.value ? ` ${layout.value}` : ""}">
  <label for="mount">Mount</label>
  <select id="mount" aria-describedby="mount-help">
    <option>Griffin</option>
    <option>Hippogriff</option>
    <option>Regular horse</option>
  </select>
  <small class="help-text" id="mount-help">Choose a mount for the journey.</small>
</div>`);
</script>

# Input groups

The input group component provides a set of classes to arrange a form control with its label and help text.

## Base class

The `.input-group` class stacks a label and its form control by default. Place both directly inside the group and match the label's `for` attribute to the control's `id`.

To show help text below the control, add a `.help-text` element directly inside the group. Give it an `id` and reference that ID in the control's `aria-describedby` attribute.

<live-example :source-code="exampleField" />

## Layouts

Add a layout class alongside `.input-group` to position the control relative to its label. In a stacked layout, `.top` puts the control above the label, while `.bottom` and `.stacked` put it below. Help text goes at the bottom.

For a side-by-side layout, use `.left` or `.inverse` to put the control on the left, with help text under the label. Use `.right` or `.inline` to put the control on the right, with help text under the control.

<live-example :source-code="exampleLayout" options-position="top">
  <template #options>
    <div class="input-group">
      <label for="select-input-group-layout">Input group layout</label>
      <select id="select-input-group-layout" v-model="layout">
        <option value="">Default</option>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="inverse">Inverse</option>
        <option value="inline">Inline</option>
        <option value="stacked">Stacked</option>
      </select>
    </div>
  </template>
</live-example>

## Responsive variants

On screens up to 575px wide, `.left`, `.right`, and `.inline` stack the group with the label first. The `.inverse` layout stacks it with the control first.

Use a screen-size prefix to choose a layout from that breakpoint onward. For example, `stacked md:inline` puts the label above the control on smaller screens and to its left from the medium breakpoint. See [responsive classes](../responsive-classes.md) for the available prefixes.

## Custom Properties

The following custom properties can be used to customize the input group component:

| Property                                             | Description                                          | Default Value                                                                            |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `--graupl-input-group-top-grid-template-columns`     | Grid template columns for the top layout.            | `[label-start input-start help-start] 100% [help-end input-end label-end]`               |
| `--graupl-input-group-top-grid-template-rows`        | Grid template rows for the top layout.               | `[input-start] auto [input-end label-start] auto [label-end help-start] auto [help-end]` |
| `--graupl-input-group-bottom-grid-template-columns`  | Grid template columns for the bottom layout.         | `[label-start input-start help-start] 100% [help-end input-end label-end]`               |
| `--graupl-input-group-bottom-grid-template-rows`     | Grid template rows for the bottom layout.            | `[label-start] auto [label-end input-start] auto [input-end help-start] auto [help-end]` |
| `--graupl-input-group-left-grid-template-columns`    | Grid template columns for the left layout.           | `[input-start] auto [input-end label-start help-start] 1fr [help-end label-end]`         |
| `--graupl-input-group-left-grid-template-rows`       | Grid template rows for the left layout.              | `[label-start input-start] auto [input-end label-end help-start] auto [help-end]`        |
| `--graupl-input-group-right-grid-template-columns`   | Grid template columns for the right layout.          | `[label-start] auto [label-end input-start help-start] 1fr [help-end input-end]`         |
| `--graupl-input-group-right-grid-template-rows`      | Grid template rows for the right layout.             | `[label-start input-start] auto [input-end label-end help-start] auto [help-end]`        |
| `--graupl-input-group-grid-template-columns`         | Grid template columns for the default layout.        | `var(--graupl-input-group-bottom-grid-template-columns)`                                 |
| `--graupl-input-group-grid-template-rows`            | Grid template rows for the default layout.           | `var(--graupl-input-group-bottom-grid-template-rows)`                                    |
| `--graupl-input-group-row-gap`                       | The row gap of the input group.                      | `var(--graupl-spacer-2)`                                                                 |
| `--graupl-input-group-column-gap`                    | The column gap of the input group.                   | `var(--graupl-spacer-3)`                                                                 |
| `--graupl-input-group-gap`                           | The gap between rows and columns in the input group. | `var(--graupl-input-group-row-gap) var(--graupl-input-group-column-gap)`                 |
| `--graupl-input-group-stacked-grid-template-columns` | Grid template columns for the stacked layout.        | `var(--graupl-input-group-bottom-grid-template-columns)`                                 |
| `--graupl-input-group-stacked-grid-template-rows`    | Grid template rows for the stacked layout.           | `var(--graupl-input-group-bottom-grid-template-rows)`                                    |
| `--graupl-input-group-inline-grid-template-columns`  | Grid template columns for the inline layout.         | `var(--graupl-input-group-right-grid-template-columns)`                                  |
| `--graupl-input-group-inline-grid-template-rows`     | Grid template rows for the inline layout.            | `var(--graupl-input-group-right-grid-template-rows)`                                     |

## Sass variables

The following Sass variables can be used to customize the generation of the input group component:

| Variable                                          | Description                                                  | Default Value   |
| ------------------------------------------------- | ------------------------------------------------------------ | --------------- |
| `$selector-base`                                  | The selector base for the component.                         | `"."`           |
| `$modifier-selector-base`                         | The selector base for component modifiers.                   | `"."`           |
| `$screen-aware`                                   | Enables screen-aware modifier variants.                      | `true`          |
| `$theme-aware`                                    | Enables theme-aware modifier variants.                       | `false`         |
| `$scheme-aware`                                   | Enables scheme-aware modifier variants.                      | `false`         |
| `$state-aware`                                    | Enables state-aware modifier variants.                       | `false`         |
| `$container-aware`                                | Enables container-aware modifier variants.                   | `true`          |
| `$input-group-selector-base`                      | Selector base for the input group container.                 | `"."`           |
| `$input-group-selector`                           | Selector for the input group container.                      | `"input-group"` |
| `$input-group-help-text-selector-base`            | Selector base for the help text.                             | `"."`           |
| `$input-group-help-text-selector`                 | Selector for the help text.                                  | `"help-text"`   |
| `$input-group-inline-selector`                    | Selector for the inline modifier.                            | `"inline"`      |
| `$input-group-stacked-selector`                   | Selector for the stacked modifier.                           | `"stacked"`     |
| `$input-group-top-selector`                       | Selector for the top modifier.                               | `"top"`         |
| `$input-group-bottom-selector`                    | Selector for the bottom modifier.                            | `"bottom"`      |
| `$input-group-left-selector`                      | Selector for the left modifier.                              | `"left"`        |
| `$input-group-right-selector`                     | Selector for the right modifier.                             | `"right"`       |
| `$input-group-inverse-selector`                   | Selector for the inverse modifier.                           | `"inverse"`     |
| `$input-group-screen-aware-selector-prefix`       | Prefix to the screen-aware portion of modifier selectors.    | `""`            |
| `$input-group-screen-aware-selector-suffix`       | Suffix to the screen-aware portion of modifier selectors.    | `""`            |
| `$input-group-screen-aware-selector-separator`    | Separator inserted for screen-aware modifier selectors.      | `"\\:"`         |
| `$input-group-theme-aware-selector-prefix`        | Prefix to the theme-aware portion of modifier selectors.     | `""`            |
| `$input-group-theme-aware-selector-suffix`        | Suffix to the theme-aware portion of modifier selectors.     | `"-theme"`      |
| `$input-group-theme-aware-selector-separator`     | Separator inserted for theme-aware modifier selectors.       | `"\\:"`         |
| `$input-group-scheme-aware-selector-prefix`       | Prefix to the scheme-aware portion of modifier selectors.    | `""`            |
| `$input-group-scheme-aware-selector-suffix`       | Suffix to the scheme-aware portion of modifier selectors.    | `"-mode"`       |
| `$input-group-scheme-aware-selector-separator`    | Separator inserted for scheme-aware modifier selectors.      | `"\\:"`         |
| `$input-group-state-aware-selector-prefix`        | Prefix to the state-aware portion of modifier selectors.     | `""`            |
| `$input-group-state-aware-selector-suffix`        | Suffix to the state-aware portion of modifier selectors.     | `""`            |
| `$input-group-state-aware-selector-separator`     | Separator inserted for state-aware modifier selectors.       | `"\\:"`         |
| `$input-group-container-aware-selector-prefix`    | Prefix to the container-aware portion of modifier selectors. | `"cq\\:"`       |
| `$input-group-container-aware-selector-suffix`    | Suffix to the container-aware portion of modifier selectors. | `""`            |
| `$input-group-container-aware-selector-separator` | Separator inserted for container-aware modifier selectors.   | `"\\:"`         |
