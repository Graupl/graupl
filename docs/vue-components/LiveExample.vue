<script setup>
import {
  ref,
  shallowRef,
  useTemplateRef,
  onMounted,
  onUpdated,
  watch,
} from "vue";
import { Codemirror } from "vue-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

const props = defineProps({
  sourceCode: { type: String, default: null },
  codeClass: { type: String, default: "" },
  exampleClass: { type: String, default: "" },
  trim: { type: Boolean, default: true },
  resettable: { type: Boolean, default: false },
  optionsPosition: {
    type: String,
    default: "bottom",
    validator: (value) => ["top", "right", "bottom", "left"].includes(value),
  },
  layout: {
    type: String,
    default: "stacked",
    validator: (value) => ["stacked", "side-by-side"].includes(value),
  },
});

const sourceElement = useTemplateRef("example-source");
const code = ref("");
const previewKey = ref(0);
const extensions = [html(), css()];
const view = shallowRef();
const emit = defineEmits(["mounted", "updated"]);

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
function loadSource() {
  if (props.sourceCode) {
    code.value = props.trim ? props.sourceCode.trim() : props.sourceCode;
  } else if (sourceElement.value) {
    code.value = props.trim
      ? sourceElement.value.innerHTML.trim()
      : sourceElement.value.innerHTML;
  }
}

function resetExample() {
  loadSource();
  previewKey.value++;
}

onUpdated(() => {
  emit("updated");
});

onMounted(() => {
  loadSource();

  emit("mounted");
});

watch(() => props.sourceCode, loadSource);
</script>

<template>
  <div class="example-container">
    <!-- Hidden source reference -->
    <div class="example-source" aria-hidden="true" ref="example-source">
      <slot>
        <div>Hello!</div>
      </slot>
    </div>

    <div class="example-layout" :class="`options-${optionsPosition}`">
      <div
        v-if="optionsPosition === 'top' || optionsPosition === 'left'"
        class="example-options"
      >
        <slot name="options"></slot>
      </div>

      <div
        class="example-panels"
        :class="{ 'side-by-side': layout === 'side-by-side' }"
      >
        <!-- Live preview -->
        <div
          :key="previewKey"
          class="example"
          :class="exampleClass"
          v-html="code"
        ></div>

        <!-- CodeMirror editor -->
        <div class="example-code" :class="codeClass">
          <codemirror
            v-model="code"
            placeholder="Code goes here..."
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

      <div
        v-if="optionsPosition === 'bottom' || optionsPosition === 'right'"
        class="example-options"
      >
        <slot name="options"></slot>
      </div>
    </div>

    <div v-if="resettable">
      <button type="button" class="button" @click="resetExample">
        Reset example
      </button>
    </div>
  </div>
</template>
