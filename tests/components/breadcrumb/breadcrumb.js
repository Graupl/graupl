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
    props.attributes.class.push("breadcrumb");

    return () =>
      h(BasicComponent, { ...props, tag: "ol" }, [
        h("li", [h("a", "Home")]),
        h("li", "Breadcrumb"),
      ]);
  },
};
