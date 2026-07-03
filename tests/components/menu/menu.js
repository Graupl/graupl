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
      default: "",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("menu");

    return () =>
      h(BasicComponent, { ...props, tag: "ul" }, [
        h("li", "Menu 1"),
        h("li", "Menu 2"),
        h("li", "Menu 3"),
      ]);
  },
};
