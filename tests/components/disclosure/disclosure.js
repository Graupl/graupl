import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    open: {
      type: Boolean,
      default: false,
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, [
      "disclosure",
      props.open ? "show" : "hide",
    ]);

    return () =>
      h(AdvancedComponent, {
        "data-testid": "disclosure",
        children: [
          h(BasicComponent, {
            attributes: {
              class: ["disclosure-toggle", props.variant],
            },
            tag: "button",
          }),
          h(AdvancedComponent, {
            ...props,
            attributes,
            children: [
              h(AdvancedComponent, {
                attributes: { class: ["disclosure-content"] },
                children: [
                  h(BasicComponent, {
                    tag: "p",
                    text: "Disclosure for the hidden paragraphs there are here",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
  },
};
