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

The accordion component provides a set of classes to adjust the properties of its elements.

<br/>
<br/>

<live-example :source-code="exampleAccordion">
</live-example>
