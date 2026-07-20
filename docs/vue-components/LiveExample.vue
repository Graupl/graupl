<script setup>
import { ref, shallowRef, useTemplateRef, onMounted, onUpdated } from "vue";
import { Codemirror } from "vue-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

const props = defineProps({
  sourceCode: { type: String, default: null },
  codeClass: { type: String, default: "" },
  trim: { type: Boolean, default: true },
});

const sourceElement = useTemplateRef("example-source");
const code = ref("");
const extensions = [html(), css()];
const view = shallowRef();

const handleReady = (payload) => {
  view.value = payload.view;
};

/**
 * Mount the source code into the example.
 *
 * This will prioritize the sourceCode prop over the default slot.
 *
 * White space before/after the component is trimmed by default, but can
 * be altered with the `trim` prop.
 */
onMounted(() => {
  if (props.sourceCode) {
    code.value = props.trim ? props.sourceCode.trim() : props.sourceCode;
  } else if (sourceElement.value) {
    code.value = props.trim
      ? sourceElement.value.innerHTML.trim()
      : sourceElement.value.innerHTML;
  }
});
</script>

<template>
  <div class="example-container">
    <!-- Hidden source reference -->
    <div class="example-source" aria-hidden="true" ref="example-source">
      <slot>
        <div>Hello!</div>
      </slot>
    </div>

    <!-- Live preview -->
    <div class="example" v-html="code"></div>

    <!-- CodeMirror editor -->
    <div class="example-code" :class="codeClass">
      <codemirror
        v-model="code"
        placehodler="Code goes here..."
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        @ready="handleReady"
        @change="console.log('change', $event)"
        @focus="console.log('focus', $event)"
        @blur="console.log('blur', $event)"
      />
    </div>

    <!-- Options for altering the example -->
    <div class="example-options">
      <slot name="options"></slot>
    </div>
  </div>
</template>
