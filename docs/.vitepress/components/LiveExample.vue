<script setup>
import { ref, shallowRef, useTemplateRef, onMounted } from "vue";
import { Codemirror } from "vue-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

const source = useTemplateRef("example-source");
const code = ref("");
const extensions = [html(), css()];
const view = shallowRef();
const handleReady = (payload) => {
  view.value = payload.view;
};

const getCodemirrorStates = () => {
  const state = view.value.state;
  const ranges = state.selection.ranges;
  const selected = ranges.reduce((r, range) => r + range.to - r);
  const cursor = ranges[0].anchor;
  const length = state.doc.length;
  const lines = state.doc.lines;
};

onMounted(() => {
  code.value = source.value.innerHTML;
});
</script>

<template>
  <div class="example-container">
    <div class="example-source" aria-hidden="true" ref="example-source">
      <slot>
        <div>Hello!</div>
      </slot>
    </div>
    <div class="example" v-html="code"></div>
    <div class="example-code">
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
  </div>
</template>

<style>
.example-source {
  display: none;
}
</style>
