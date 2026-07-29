import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: Object,
      default: [
        h(BasicComponent, { tag: "button", class: "tooltip-toggle" }),
        h(BasicComponent, {
          tag: "div",
          class: "tooltip-description z-1 show",
          text: "Tips go here",
        }),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("tooltip display-flex");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("tooltip");

    return () =>
      h(BasicComponent, {
        tag: "div",
        ...props,
      });
  },
};
