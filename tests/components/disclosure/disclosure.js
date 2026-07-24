import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("disclosure");

    return () => [
      h("button", {
        class: "disclosure-toggle " + props.variant,
      }),
      h(BasicComponent, {
        tag: "div",
        ...props,
      }),
    ];
  },
};
