import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: Function,
      default: h(BasicComponent, {
        tag: "div",
        attributes: { class: "disclosure-content" },
        text: h(BasicComponent, { tag: "p", text: "Disclosure" }),
      }),
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("disclosure");

    return () => [h(BasicComponent, { tag: "button", ...props })];
  },
};
