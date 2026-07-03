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
      default: () => {
        (h("li", "Menu Item"), h("li", "Menu Item"), h("li", "Menu Item"));
      },
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("menu");

    return () => h(BasicComponent, { ...props, tag: "ul" });
  },
};
