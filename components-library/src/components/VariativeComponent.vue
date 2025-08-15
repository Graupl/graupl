<script setup>
  import { defineProps, ref, computed, onMounted } from "vue";

  const props = defineProps({
    /**
     * The name of the component.
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * The variant options available for the component.
     */
    variants: {
      type: Array,
      required: false,
      default: () => ([
        { value: "default", text: "Default" },
        { value: "primary", text: "Primary" },
        { value: "secondary", text: "Secondary" },
        { value: "tertiary", text: "Tertiary" },
      ]),
      validate: values => {
        try {
          values.forEach(value => {
            if (typeof value.value === "undefined" || typeof value.text === "undefined") {
              return false;
            }
          });
        } catch (error) {
          return false;
        }
      }
    },
    /**
     * The default variant to be selected when the component is rendered.
     */
    defaultVariant: {
      type: String,
      required: false,
      default: "default",
    },
    /**
     * Additional options for the component.
     */
    options: {
      type: Array,
      required: false,
      default: () => ([]),
      validate: values => {
        try {
          values.forEach(value => {
            if (typeof value.value === "undefined" || typeof value.text === "undefined") {
              return false;
            }

            if (typeof value.default !== "undefined" && typeof value.default !== "boolean") {
              return false;
            }
          });
        } catch (error) {
          return false;
        }
      }
    },
    /**
     * A flag to render either all variants at the same time, or just one at a time.
     */
    displayAllVariants: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Extra classes to apply to the component.
     */
    class: {
      type: String,
      default: "",
    },
    /**
     * Extra classes to apply to the controls section.
     */
    controlsClass: {
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

  const selectedVariant = ref(props.defaultVariant);
  const selectedOptions = ref([]);
  const allVariants = ref(props.displayAllVariants);

  /**
   * The name prop converted to be DOM-safe (only letters, numbers, and dashes).
   *
   * @return {string} - The DOM-safe name.
   */
  const domSafeName = computed(() => {
    return props.name.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  });

  /**
   * The text of the currently selected variant.
   *
   * @return {string} - The selected variant's text.
   */
  const selectedVariantText = computed(() => {
    const foundVariant = props.variants.find(variant => variant.value === selectedVariant.value);
    return foundVariant ? foundVariant.text : "";
  });

  /**
   * The classes to apply to the component.
   *
   * Combines the base class with any additional classes provided.
   *
   * @return {string} - The component's classes.
   */
  const classes = computed(() => {
    return `cl-variative-component ${props.class}`;
  });

  /**
   * The classes to apply to the controls section.
   *
   * Combines the base class with any additional classes provided.
   *
   * @return {string} - The controls section's classes.
   */
  const controlsClasses = computed(() => {
    return `cl-variative-component-controls ${props.controlsClass}`;
  });

  /**
   * The classes to apply to the header section.
   *
   * Combines the base class with any additional classes provided.
   *
   * @return {string} - The header section's classes.
   */
  const headerClasses = computed(() => {
    return `cl-variative-component-header ${props.headerClass}`;
  });

  /**
   * The classes to apply to the content section.
   *
   * Combines the base class with any additional classes provided.
   *
   * @return {string} - The content section's classes.
   */
  const contentClasses = computed(() => {
    return `cl-variative-component-content ${props.contentClass}`;
  });

  onMounted(() => {
    // Initialize selected options based on defaults
    selectedOptions.value = props.options
      .filter(option => option.default)
      .map(option => option.value);
  });
</script>

<template>
  <div :class="classes">
    <div :class="controlsClasses">
      <div class="cl-variative-component-input-group">
        <label :for="`select-${domSafeName}`" class="cl-variative-component-input-label">
          Variant
        </label>
        <select
          :id="`select-${domSafeName}`"
          v-model="selectedVariant"
          class="cl-variative-component-select"
          :disabled="allVariants"
        >
          <option
            v-for="variant in variants"
            :key="`select-${domSafeName}-${variant.value}`"
            :value="variant.value"
          >
            {{ variant.text }}
          </option>
        </select>
      </div>
      <div class="cl-variative-component-input-group">
        <label :for="`input-${domSafeName}-all-variants`" class="cl-variative-component-input-label">
          Display All Variants
          <input
            type="checkbox"
            :id="`input-${domSafeName}-all-variants`"
            v-model="allVariants"
            class="cl-variative-component-input"
          />
        </label>
      </div>
      <fieldset class="cl-variative-component-fieldset"
        v-if="options.length > 0">
        <legend class="cl-variative-component-fieldset-legend">
          Additional Options
        </legend>
          <label
          v-for="option in options"
          :key="`option-${domSafeName}-${option.value}`"
              :for="`option-${domSafeName}-${option.value}`"
              class="cl-variative-component-input-label"
            >
            <input
              type="checkbox"
              :id="`option-${domSafeName}-${option.value}`"
              :value="option.value"
              v-model="selectedOptions"
              class="cl-variative-component-input"
            />
              {{ option.text }}
          </label>
      </fieldset>
    </div>
    <template v-if="allVariants">
      <div class="cl-variative-component-variants">
        <div v-for="variant in variants" :key="`variant-${domSafeName}-${variant.value}`">
          <div :class="headerClasses">
            <slot name="header" :variant="variant.text" :component="name">
              <h4 class="cl-variative-heading">{{ variant.text }} {{ name }}</h4>
            </slot>
          </div>
          <div :class="contentClasses">
            <slot
              :variant="variant.value"
              :options="selectedOptions"
              />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div :class="headerClasses">
        <slot name="header" :variant="selectedVariantText" :component="name">
          <h4 class="cl-variative-heading">{{ selectedVariantText }} {{ name }}</h4>
        </slot>
      </div>
      <div :class="contentClasses">
        <slot :variant="selectedVariant" :options="selectedOptions"></slot>
      </div>
    </template>
  </div>
</template>

<style scoped>
.cl-variative-component-controls {
  display: var(--cl-variative-component-controls-display, flex);
  flex-direction: var(--cl-variative-component-controls-direction, column);
  gap: var(--cl-variative-component-controls-gap, 1rem);
}

.cl-variative-component-variants {
  display: var(--cl-variative-component-variants-display, flex);
  flex-direction: var(--cl-variative-component-variants-direction, column);
  gap: var(--cl-variative-component-variants-gap, 1rem);
}

.cl-variative-component-input-group {
  display: grid;
  grid-template-areas: var(--cl-variative-component-input-group-grid-template-areas, "label" "input");
  grid-template-columns: var(--cl-variative-component-input-group-grid-template-columns, 1fr);
  grid-template-rows: var(--cl-variative-component-input-group-grid-template-rows, auto auto);
  align-items: center;
  gap: var(--cl-variative-component-input-group-gap, 0.25rem);

  label {
    grid-area: var(--cl-variative-component-input-group-label-area, label);
  }

  input,
  textarea,
  select {
    grid-area: var(--cl-variative-component-input-group-input-area, input);
  }
}
</style>
