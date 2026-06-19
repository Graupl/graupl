import { h } from "vue";
import "../../tests.css";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Badge",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = props.attributes || {};
    attributes.class = attributes.class || [];

    attributes.class.push("badge");
    attributes.class.push(props.variant);

    return () => h("div", attributes, props.text);
  },
};
