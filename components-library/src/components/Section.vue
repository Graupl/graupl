<script setup>
import { defineProps } from "vue";
import clBlock from "./Block.js";

const props = defineProps({
  /**
   * The name of the section.
   */
  name: {
    type: String,
    required: true,
  },
  /**
   * The section's heading if it should be different from its name.
   */
  heading: {
    type: String,
    default: "",
  },
  /**
   * The section's description.
   */
  description: {
    type: String,
    default: "",
  },
  /**
   * Extra classes to apply to the view.
   */
  class: {
    type: String,
    default: "",
  },
  /**
   * Extra classes to apply to the header section.
   */
  headerClass: {
    type: String,
    default: "",
  },
  /**
   * Extra classes to apply to the content section.
   */
  contentClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <cl-block
    :name="name"
    :heading="heading"
    :description="description"
    :class="class"
    :headerClass="headerClass"
    :contentClass="contentClass"
    type="section"
    heading-level="3"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </cl-block>
</template>
