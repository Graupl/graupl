import { h } from "vue";
import "../../tests.css";

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
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = props.attributes || {};
    attributes.class = attributes.class || [];

    attributes.class.push("button");
    attributes.class.push(props.variant);
    attributes.class.push(props.state);

    return () => h("button", attributes, "Click me");
  },
};
