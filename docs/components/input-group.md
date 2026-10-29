<script setup>
  import { ref, computed, onMounted, onUpdated } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";

  const exampleInputGroups = computed(() => {
    return `
<div class="input-group">
  <label for="input">Input</label>
  <input type="text" placeholder="Input" id="input" />
  <small class="help-text">This is some help text to assist with knowing
    what the field is
    about.</small>
</div>
    `
  });
</script>

# Input-groups

<live-example :source-code="exampleInputGroups">
</live-example>

<br/>

The input-group component provides the following set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.input-group` | The input group container. |
| `.help-text` | Inline help text element. |
| `.top` | Modifier to lay out input/label/help in a single column, respectively. |
| `.bottom` | Modifier to lay out label/input/help in a single column, respectively. |
| `.left` | Modifier to lay out input/label in a single row, respectively. |
| `.right` | Modifier to layout label/input in a single row, respectively. |
| `.inverse` | Modifier to combine both the top and left modifiers (when allowed). |
| `.inline` | Modifier to lay out label/input in a single row with help below (when allowed). |
| `.stacked` | Modifier to lay out label/input/help in a single column, respectively. |
| `.xs:top` | Modifier to lay out input/label/help in a single column, respectively on extra small screens. |
| `.xs:bottom` | Modifier to lay out label/input/help in a single column, respectively on extra small screens. |
| `.xs:left` | Modifier to lay out input/label in a single row, respectively on extra small screens. |
| `.xs:right` | Modifier to layout label/input in a single row, respectively on extra small screens. |
| `.xs:inverse` | Modifier to combine both the top and left modifiers on extra small screens. |
| `.xs:inline` | Modifier to lay out label/input in a single row with help below on extra small screens. |
| `.xs:stacked` | Modifier to lay out label/input/help in a single column, respectively on extra small screens. |
| `.sm:top` | Modifier to lay out input/label/help in a single column, respectively on small screens. |
| `.sm:bottom` | Modifier to lay out label/input/help in a single column, respectively on small screens. |
| `.sm:left` | Modifier to lay out input/label in a single row, respectively on small screens. |
| `.sm:right` | Modifier to layout label/input in a single row, respectively on small screens. |
| `.sm:inverse` | Modifier to combine both the top and left modifiers on small screens. |
| `.sm:inline` | Modifier to lay out label/input in a single row with help below on small screens. |
| `.sm:stacked` | Modifier to lay out label/input/help in a single column, respectively on small screens. |
| `.md:top` | Modifier to lay out input/label/help in a single column, respectively on medium screens. |
| `.md:bottom` | Modifier to lay out label/input/help in a single column, respectively on medium screens. |
| `.md:left` | Modifier to lay out input/label in a single row, respectively on medium screens. |
| `.md:right` | Modifier to layout label/input in a single row, respectively on medium screens. |
| `.md:inverse` | Modifier to combine both the top and left modifiers on medium screens. |
| `.md:inline` | Modifier to lay out label/input in a single row with help below on medium screens. |
| `.md:stacked` | Modifier to lay out label/input/help in a single column, respectively on medium screens. |
| `.lg:top` | Modifier to lay out input/label/help in a single column, respectively on large screens. |
| `.lg:bottom` | Modifier to lay out label/input/help in a single column, respectively on large screens. |
| `.lg:left` | Modifier to lay out input/label in a single row, respectively on large screens. |
| `.lg:right` | Modifier to layout label/input in a single row, respectively on large screens. |
| `.lg:inverse` | Modifier to combine both the top and left modifiers on large screens. |
| `.lg:inline` | Modifier to lay out label/input in a single row with help below on large screens. |
| `.lg:stacked` | Modifier to lay out label/input/help in a single column, respectively on large screens. |
| `.xl:top` | Modifier to lay out input/label/help in a single column, respectively on extra large screens. |
| `.xl:bottom` | Modifier to lay out label/input/help in a single column, respectively on extra large screens. |
| `.xl:left` | Modifier to lay out input/label in a single row, respectively on extra large screens. |
| `.xl:right` | Modifier to layout label/input in a single row, respectively on extra large screens. |
| `.xl:inverse` | Modifier to combine both the top and left modifiers on extra large screens. |
| `.xl:inline` | Modifier to lay out label/input in a single row with help below on extra large screens. |
| `.xl:stacked` | Modifier to lay out label/input/help in a single column, respectively on extra large screens. |

## .input-group properties

These are the default values for the `.input-group` class.

| Property Name | Description | Default Value |
| --- | --- | --- |
| `--graupl-input-group-top-grid-template-columns` | Grid template columns for the top layout. | `[label-start input-start help-start] 100% [help-end input-end label-end]` |
| `--graupl-input-group-top-grid-template-rows` | Grid template rows for the top layout. | `[input-start] auto [input-end label-start] auto [label-end help-start] auto [help-end]` |
| `--graupl-input-group-bottom-grid-template-columns` | Grid template columns for the bottom layout. | `[label-start input-start help-start] 100% [help-end input-end label-end]` |
| `--graupl-input-group-bottom-grid-template-rows` | Grid template rows for the bottom layout. | `[label-start] auto [label-end input-start] auto [input-end help-start] auto [help-end]` |
| `--graupl-input-group-left-grid-template-columns` | Grid template columns for the left layout. | `[input-start] auto [input-end label-start help-start] 1fr [help-end label-end]` |
| `--graupl-input-group-left-grid-template-rows` | Grid template rows for the left layout. | `[label-start input-start] auto [input-end label-end help-start] auto [help-end]` |
| `--graupl-input-group-right-grid-template-columns` | Grid template columns for the right layout. | `[label-start] auto [label-end input-start help-start] 1fr [help-end input-end]` |
| `--graupl-input-group-right-grid-template-rows` | Grid template rows for the right layout. | `[label-start input-start] auto [input-end label-end help-start] auto [help-end]` |
| `--graupl-input-group-grid-template-columns` | Grid template columns for the default layout | `var(--graupl-input-group-bottom-grid-template-columns)` |
| `--graupl-input-group-grid-template-rows` | Grid template rows for the default layout. | `var(--graupl-input-group-bottom-grid-template-rows)` |
| `--graupl-input-group-row-gap` | Row gap between label/input/help. | `var(--graupl-spacer-2)` |
| `--graupl-input-group-column-gap` | Column gap between label/input/help. | `var(--graupl-spacer-3)` |
| `--graupl-input-group-gap` | Shorthand gap (row/column) for the group. | `var(--graupl-input-group-row-gap) var(--graupl-input-group-column-gap)` |
| `--graupl-input-group-stacked-grid-template-columns` | Grid template columns for the stacked layout. | `var(--graupl-input-group-bottom-grid-template-columns)` |
| `--graupl-input-group-stacked-grid-template-rows` | Grid template rows for the stacked layout. | `var(--graupl-input-group-bottom-grid-template-rows)` |
| `--graupl-input-group-inline-grid-template-columns` | Grid template columns for the inline layout. | `var(--graupl-input-group-right-grid-template-columns)` |
| `--graupl-input-group-inline-grid-template-rows` | Grid template rows for the inline layout. | `var(--graupl-input-group-right-grid-template-rows)` |

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base` | Selector base for the component. | `"."` |
| `$modifier-selector-base` | Selector base for component modifiers. | `"."` |
| `$screen-aware` | Enables screen-aware modifier variants. | `false` |
| `$theme-aware` | Enables theme-aware modifier variants. | `false` |
| `$scheme-aware` | Enables scheme-aware modifier variants. | `false` |
| `$state-aware` | Enables state-aware modifier variants. | `false` |
| `$container-aware` | Enables container-aware modifier variants. | `false` |
| `$input-group-selector-base` | Selector base for the input group container. | `"."` |
| `$input-group-selector` | Selector for the input group container. | `"input-group"` |
| `$input-group-help-text-selector-base` | Selector base for the help text. | `"."` |
| `$input-group-help-text-selector` | Selector for the help text. | `"help-text"` |
| `$input-group-inline-selector` | Selector for the inline modifier. | `"inline"` |
| `$input-group-stacked-selector` | Selector for the stacked modifier. | `"stacked"` |
| `$input-group-top-selector` | Selector for the top modifier. | `"top"` |
| `$input-group-bottom-selector` | Selector for the bottom modifier. | `"bottom"` |
| `$input-group-left-selector` | Selector for the left modifier. | `"left"` |
| `$input-group-right-selector` | Selector for the right modifier. | `"right"` |
| `$input-group-inverse-selector` | Selector for the inverse modifier. | `"inverse"` |
| `$input-group-screen-aware-selector-prefix` | Prefix to the screen-aware portion of modifier selectors. | `""` |
| `$input-group-screen-aware-selector-suffix` | Suffix to the screen-aware portion of modifier selectors. | `""` |
| `$input-group-screen-aware-selector-separator` | Separator inserted for screen-aware modifier selectors. | `"\\:"` |
| `$input-group-theme-aware-selector-prefix` | Prefix to the theme-aware portion of modifier selectors. | `""` |
| `$input-group-theme-aware-selector-suffix` | Suffix to the theme-aware portion of modifier selectors. | `"-theme"` |
| `$input-group-theme-aware-selector-separator` | Separator inserted for theme-aware modifier selectors. | `"\\:"` |
| `$input-group-scheme-aware-selector-prefix` | Prefix to the scheme-aware portion of modifier selectors. | `""` |
| `$input-group-scheme-aware-selector-suffix` | Suffix to the scheme-aware portion of modifier selectors. | `"-mode"` |
| `$input-group-scheme-aware-selector-separator` | Separator inserted for scheme-aware modifier selectors. | `"\\:"` |
| `$input-group-state-aware-selector-prefix` | Prefix to the state-aware portion of modifier selectors. | `""` |
| `$input-group-state-aware-selector-suffix` | Suffix to the state-aware portion of modifier selectors. | `""` |
| `$input-group-state-aware-selector-separator` | Separator inserted for state-aware modifier selectors. | `"\\:"` |
| `$input-group-container-aware-selector-prefix` | Prefix to the container-aware portion of modifier selectors. | `"cq\\:"` |
| `$input-group-container-aware-selector-suffix` | Suffix to the container-aware portion of modifier selectors. | `""` |
| `$input-group-container-aware-selector-separator` | Separator inserted for container-aware modifier selectors. | `"\\:"` |

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](../utilities/responsive-classes) documentation.
:::
