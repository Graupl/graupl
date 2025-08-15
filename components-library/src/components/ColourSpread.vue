<script setup>
  import { defineProps, computed } from "vue";

  const props = defineProps({
    /**
     * The name of the colour spread.
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * An array of colour objects used to generate the spread.
     */
    colours: {
      type: Array,
      required: true,
      validate: values => {
        try {
          values.forEach(value => {
            if (typeof value.name === "undefined" || typeof value.class === "undefined") {
              return false;
            }

            if (typeof value.name !== "string") {
              return false;
            }

            document.querySelector(value.class);
          });
        } catch (error) {
          return false;
        }
      }
    }
  });

  /**
   * The computed ID to use for the colour spread.
   *
   * Adds "colour-spread-" in front of the name property and ensures it is DOM-safe.
   *
   * @return {string} - The colour spread's ID.
   */
  const spreadID = computed(() => {
    const name = props.name.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    return `colour-spread-${name}`;
  });

  /**
   * The type of colour spread to generate.
   *
   * Either class-based or hex-based.
   *
   * @return {string} - The type.
   */
  const type = computed(() => {
    return props.colours.length > 0 && props.colours[0].class ? "class" : "hex";
  });
</script>

<template>
  <section :id="spreadID" class="cl-colour-spread">
    <div
      v-for="(colour, index) in colours"
      :key="`${spreadID}-${index}`"
      class="cl-colour"
    >
      <span :class="colour.class">
        {{ colour.name }}
      </span>
    </div>
  </section>
</template>

<style scoped>
.cl-colour-spread {
  display: var(--cl-colour-spread-display, flex);
  flex-direction: var(--cl-colour-spread-direction, column);

  .cl-colour {
    display: var(--cl-colour-spread-colour-display, flex);

    span {
      flex-grow: 1;
      padding: var(--cl-colour-spread-colour-padding, var(--cl-colour-spead-colour-padding-y, 1rem) var(--cl-colour-spread-colour-padding-x, 1.25rem));
      text-align: center;
    }
  }
}
</style>
