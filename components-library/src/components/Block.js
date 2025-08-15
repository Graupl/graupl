import { h, computed } from "vue";

export default {
  name: "Block",
  props: {
    /**
     * The name of the block.
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * The block's heading if it should be different from its name.
     */
    heading: {
      type: String,
      default: "",
    },
    /**
     * The block's description.
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Extra classes to apply to the block.
     */
    class: {
      type: String,
      default: "",
    },
    /**
     * Extra classes to apply to the header block.
     */
    headerClass: {
      type: String,
      default: "",
    },
    /**
     * Extra classes to apply to the content block.
     */
    contentClass: {
      type: String,
      default: "",
    },
    /**
     * The type of block.
     */
    type: {
      type: String,
      default: "block",
    },
    /**
     * The level of the heading for the block.
     */
    headingLevel: {
      type: [String, Number],
      default: "3",
    },
  },
  setup(props, { slots }) {
    /**
     * The name prop converted to be DOM-safe (only letters, numbers, and dashes).
     *
     * @return {string} - The DOM-safe name.
     */
    const domSafeName = computed(() => {
      return props.name.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    });

    /**
     * The type of the block converted to be DOM-safe (only letters, numbers, and dashes).
     *
     * @return {string} - The DOM-safe type.
     */
    const domSafeType = computed(() => {
      return props.type.toLowerCase().replace(/[^a-z0-9]/gi, "-");
    });

    /**
     * The computed ID to use for the block.
     *
     * Adds "block-" in front of the `domSafeName` value.
     *
     * @return {string} - The block's ID.
     */
    const blockID = computed(() => {
      return `${domSafeType.value}-${domSafeName.value}`;
    });

    /**
     * The computed ID to use for the block's heading.
     *
     * Adds "block-heading-" in front of the `domSafeName` value.
     *
     * @return {string} - The block heading's ID.
     */
    const headingID = computed(() => {
      return `${domSafeType.value}-heading-${domSafeName.value}`;
    });

    /**
     * The heading of the block.
     *
     * Uses the name property unless the heading has been provided.
     *
     * @return {string} - The block's heading.
     */
    const blockHeading = computed(() => {
      return props.heading !== "" ? props.heading : props.name;
    });

    /**
     * The classes to apply to the view.
     *
     * Combines the base class with any additional classes provided.
     *
     * @return {string} - The view's classes.
     */
    const classes = computed(() => {
      return `cl-${domSafeType.value} ${props.class}`;
    });

    /**
     * The classes to apply to the header block.
     *
     * Combines the base class with any additional classes provided.
     *
     * @return {string} - The header's classes.
     */
    const headerClasses = computed(() => {
      return `cl-${domSafeType.value}-header ${props.headerClass}`;
    });

    /**
     * The classes to apply to the content block.
     *
     * Combines the base class with any additional classes provided.
     *
     * @return {string} - The content's classes.
     */
    const contentClasses = computed(() => {
      return `cl-${domSafeType.value}-content ${props.contentClass}`;
    });

    return () =>
      h(
        "section",
        {
          id: blockID.value,
          class: classes.value,
          "aria-labelledby": headingID.value,
        },
        [
          h(
            "div",
            {
              class: headerClasses.value,
            },
            slots.header
              ? slots.header({
                  heading: blockHeading.value,
                  description: props.description,
                  headingID: headingID.value,
                  headingLevel: props.headingLevel,
                })
              : [
                  h(
                    `h${props.headingLevel}`,
                    {
                      id: headingID.value,
                      class: `cl-${domSafeType.value}-heading`,
                    },
                    blockHeading.value
                  ),
                  props.description !== ""
                    ? h(
                        "p",
                        {
                          class: `cl-${domSafeType.value}-description`,
                        },
                        props.description
                      )
                    : null,
                ]
          ),
          h(
            "div",
            {
              class: contentClasses.value,
            },
            slots.default ? slots.default() : []
          ),
        ]
      );
  },
};
