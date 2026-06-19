import { h } from "vue";

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
    const attributes = props.attributes || {};
    attributes.class = attributes.class || [];

    attributes.class.push("button");
    attributes.class.push(props.variant);
    attributes.class.push(props.state);

    return () => h("button", attributes, props.text);
  },
};
