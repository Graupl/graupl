import { h } from "vue";
import BasicComponent from "../component/basic-component.js";
import AdvancedComponent from "../component/advanced-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Click me",
    },
    tag: {
      type: String,
      default: "button",
      validate: (value) => {
        return value === "button" || value === "a";
      },
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("button");

    if (props.tag === "a") {
      props.attributes.href = props.attributes.href || "#";
    }

    return () =>
      h(AdvancedComponent, {
        attributes: {
          style: "padding: 5rem",
          "data-testid": "button-wrapper",
        },
        children: [h(BasicComponent, { ...props, tag: props.tag })],
      });
  },
};
