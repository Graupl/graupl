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
      default: "Breadcrumb",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("breadcrumb");

    props.attributes["data-once"] = props.attributes["data-once"] || [];
    props.attributes["data-once"].push("graupl-breadcrumb-generator");

    return () =>
      h(BasicComponent, { attributes: { ...props.attributes }, tag: "ol" }, [
        h("li", { class: "breadcrumb-item" }, "Home"),
        h("li", { class: "breadcrumb-item" }, { ...props.text }),
      ]);
  },
};
