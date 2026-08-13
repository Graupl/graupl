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
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.href = props.attributes.href || "#";

    return () =>
      h(AdvancedComponent, {
        attributes: {
          style: "padding: 5rem",
          "data-testid": "link-wrapper",
        },
        children: [h(BasicComponent, { ...props, tag: "a" })],
      });
  },
};
