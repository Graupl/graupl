import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
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
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("tooltip");

    return () =>
      h(AdvancedComponent, {
        ...props,
        children: [
          () =>
            h(BasicComponent, {
              text: "This is a tooltip!",
              tag: "span",
              attributes: {
                class: ["tooltip-description", open ? "show" : ""],
              },
            }),
          () =>
            h(BasicComponent, {
              tag: "button",
              attributes: { class: ["tooltip-toggle"] },
            }),
        ],
      });
  },
};
