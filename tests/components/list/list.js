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
      type: Object,
      default: [
        h("li", { class: "list-item" }, [
          h("li", { class: "list-item" }, "List Item "),
          h("li", { class: "list-item" }, "Second Listed"),
          h("li", { class: "list-item" }, "Third Listed"),
          h("li", { class: "list-item" }, "Fourth Listed"),
        ]),
        h("li", { class: "list-item" }, "List content"),
        h("li", { class: "list-item" }, "List content"),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("list");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("list");

    return () => h(BasicComponent, { ...props, tag: "ul" });
  },
};
