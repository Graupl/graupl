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
        h("span", { class: "tooltip-description show" }, "Tips go here"),
        h("button", { class: "tooltip-toggle" }),
      ],
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
      h(BasicComponent, {
        tag: "div",
        ...props,
      });
  },
};
