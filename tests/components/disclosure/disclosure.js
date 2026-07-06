import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Disclosure",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("disclosure-toggle");

    return () =>
      h(
        BasicComponent,
        { ...props.attributes, ...props.variant, tag: "button" },
        h("div", { class: "disclosure show" }, props.text)
      );
  },
};
