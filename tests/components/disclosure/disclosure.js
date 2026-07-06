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
    props.attributes["aria-expanded"] = props.attributes["aria-expanded"] || [];

    props.attributes.class.push("disclosure-toggle");
    props.attributes["aria-expanded"].push("true");

    return () =>
      h(
        BasicComponent,
        { attributes: props.attributes, variant: props.variant, tag: "button" },
        h("div", { class: "disclosure show" }, props.text)
      );
  },
};
