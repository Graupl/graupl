import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

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

    return () => h(BasicComponent, { ...props, tag: "a" });
  },
};
