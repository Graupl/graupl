import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("tooltip");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("tooltip");

    return () =>
      h(BasicComponent, { tag: "div", ...props }, [
        h(BasicComponent, {
          class: "tooltip-description show",
          tag: "span",
          text: "Tips go here",
        }),
        h(BasicComponent, {
          tag: "button",
          class: "tooltip-toggle",
        }),
      ]);
  },
};
