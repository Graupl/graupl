<script setup>
  import { ref, computed, onMounted } from "vue";
  import LiveExample from "../vue-components/LiveExample.vue";
  import AccordionGenerator from "@graupl/core/src/accordion/generator.js";

  onMounted(() => {AccordionGenerator()});

  const exampleAccordion = computed(() => {
    return `
<div class="accordion">
  <div class="accordion-control-container">
    <button class="accordion-control expand-all">Expand All</button>
    <button class="accordion-control collapse-all">Collapse All</button>
  </div>
  <div class="accordion-item show">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="true" class="accordion-item-toggle">
          Accordion 1
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item hide">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="false" class="accordion-item-toggle">
          Accordion 2
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
        <p>This one has some extra text in it to make it longer.</p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
        <p>There is more info in the footer too.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item hide">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="false" class="accordion-item-toggle">
          Accordion 3
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
        <p>
          This one is even longer than the second one. Why? Because it
          needs to be. That's why.
        </p>
        <p>It's also a bit more verbose than the other two.</p>
        <p>But that's okay. It's just an example.</p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
      </div>
    </div>
  </div>
</div>
    `;
  });
</script>

# Accordions

The accordion component provides a set of classes to apply the preset properties of for the specific elements.

| Class Name | Description |
| --- | --- |
| `.accordion` | The accordion container. |
| `.accordion-control-container` | The accordion control container. |
| `.accordion-control` | The accordion control wrapper. |
| `.accordion-item` | The accordion item wrapper. |
| `.accordion-item-header` | The accordion item header. |
| `.accordion-item-title` | The accordion item title row. |
| `.accordion-item-toggle` | The accordion item toggle control. |
| `.accordion-item-content` | The collapsible content wrapper. |
| `.accordion-item-body` | The main body region inside the content wrapper. |
| `.accordion-item-footer` | The footer region inside the content wrapper. |
| `.show` | Modifier applied to an item when open. |
| `.hide` | Modifier applied to an item when closed. |
| `.collapse-all` | Modifier applied to collapse control. |
| `.expand-all` | Modifier applied to expand control. |
| `.transitioning` | Modifier applied while an item is transitioning. |

<br />

<div class="accordion">
  <div class="accordion-control-container">
    <button class="accordion-control expand-all">Expand All</button>
    <button class="accordion-control collapse-all">Collapse All</button>
  </div>
  <div class="accordion-item show">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="true" class="accordion-item-toggle">
          Accordion 1
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item hide">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="false" class="accordion-item-toggle">
          Accordion 2
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
        <p>This one has some extra text in it to make it longer.</p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
        <p>There is more info in the footer too.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item hide">
    <div class="accordion-item-header">
      <h3 class="accordion-item-title">
        <button aria-expanded="false" class="accordion-item-toggle">
          Accordion 3
        </button>
      </h3>
    </div>
    <div class="accordion-item-content">
      <div class="accordion-item-body">
        <p>
          This is the body of the accordion that can expand/collapse
          based on the state.
        </p>
        <p>
          This one is even longer than the second one. Why? Because it
          needs to be. That's why.
        </p>
        <p>It's also a bit more verbose than the other two.</p>
        <p>But that's okay. It's just an example.</p>
      </div>
      <div class="accordion-item-footer">
        <p>This is the footer.</p>
      </div>
    </div>
  </div>
</div>

<br/>
<br/>

## Accordion Live Example

<live-example :source-code="exampleAccordion">
</live-example>

## Customization

To customize the alignment utilities, you can use the following variables.

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `$selector-base`| Default for selector base.| `"."`|
| `$modifier-selector-base`| Default for modifier selector base.| `"."`|
| `$generate-base-theme-map` | Default for generate base theme map. | `true`|
| `$themeable`| Default for themeable.| `false`|
| `$accordion-selector-base` | Default for accordion selector base. | `"."`|
| `$accordion-selector`| Default for accordion selector.| `"accordion"`|
| `$accordion-theme-selector-base`| Default for accordion theme selector base.| `"."`|
| `$accordion-theme-selector-prefix`| Default for accordion theme selector prefix.| `""`|
| `$accordion-item-selector-base`| Default for accordion item selector base.| `"."`|
| `$accordion-item-selector` | Default for accordion item selector. | `"accordion-item"`|
| `$accordion-item-header-selector-base`| Default for accordion item header selector base.| `"."`|
| `$accordion-item-header-selector`| Default for accordion item header selector.| `"accordion-item-header"`|
| `$accordion-item-title-selector-base`| Default for accordion item title selector base.| `"."`|
| `$accordion-item-title-selector`| Default for accordion item title selector.| `"accordion-item-title"`|
| `$accordion-item-toggle-selector-base`| Default for accordion item toggle selector base.| `"."`|
| `$accordion-item-toggle-selector`| Default for accordion item toggle selector.| `"accordion-item-toggle"`|
| `$accordion-item-content-selector-base`| Default for accordion item content selector base.| `"."`|
| `$accordion-item-content-selector`| Default for accordion item content selector.| `"accordion-item-content"`|
| `$accordion-item-body-selector-base`| Default for accordion item body selector base.| `"."`|
| `$accordion-item-body-selector`| Default for accordion item body selector.| `"accordion-item-body"`|
| `$accordion-item-footer-selector-base`| Default for accordion item footer selector base.| `"."`|
| `$accordion-item-footer-selector`| Default for accordion item footer selector.| `"accordion-item-footer"`|
| `$accordion-item-open-selector-base`| Default for accordion item open selector base.| `"."`|
| `$accordion-item-open-selector`| Default for accordion item open selector.| `"show"`|
| `$accordion-item-close-selector-base`| Default for accordion item close selector base.| `"."`|
| `$accordion-item-close-selector`| Default for accordion item close selector.| `"hide"`|
| `$accordion-item-transition-selector-base`| Default for accordion item transition selector base.| `"."`|
| `$accordion-item-transition-selector`| Default for accordion item transition selector.| `"transitioning"`|
| `$accordion-item-toggle-pseudo-selector`| Default for accordion item toggle pseudo selector.| `"after"`|
| `$accordion-expand-selector-base`| Default for accordion expand selector base.| `"."`|
| `$accordion-expand-selector`| Default for accordion expand selector.| `".expand-all"`|
| `$accordion-collapse-selector-base`| Default for accordion collapse selector base.| `"."`|
| `$accordion-collapse-selector`| Default for accordion collapse selector.| `".collapse-all"`|
| `$accordion-control-selector-base`| Default for accordion control selector base.| `"."`|
| `$accordion-control-selector`| Default for accordion control selector.| `"accordion-control"`|
| `$accordion-control-container-selector-base`| Default for accordion control container selector base.| `"."`|
| `$accordion-control-container-selector`| Default for accordion control container selector.| `"accordion-control-container"`|
| `$accordion-item-toggle-initial-transform`| Default for accordion item toggle initial transform.| `none`|
| `$accordion-item-toggle-final-transform`| Default for accordion item toggle final transform.| `none`|
| `$accordion-item-toggle-disabled-transform`| Default for accordion item toggle disabled transform.| `none`|
| `$accordion-item-toggle-pseudo-initial-transform` | Default for accordion item toggle pseudo initial transform. | `none`|
| `$accordion-item-toggle-pseudo-content`| Default for accordion item toggle pseudo content.| `"▼"`|
| `$accordion-item-content-initial-transform`| Default for accordion item content initial transform.| `translateY(-100%)`|
| `$accordion-item-content-final-transform`| Default for accordion item content final transform.| `translateY(0)`|
| `$accordion-theme-mappings`| Default for accordion theme mappings.| `()`|
| `$accordion-theme-map`| Default for accordion theme map.| `()`|

## Responsive Variants

Generating responsive utility classes can be done by setting `$screen-aware`, `$theme-aware`, `$scheme-aware`, `$state-aware`, or `$container-aware` to `true`.

By default, no responsive utility classes are generated for alignment.

::: tip :pencil2: Note
For more information on responsive variants, refer to the [Responsive utility classes](./responsive-classes) documentation.
:::
