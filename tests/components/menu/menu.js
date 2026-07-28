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
        h("li", { class: "menu-item" }, [
          h("a", { class: "menu-link" }, "List Item "),
          h("a", { class: "menu-link" }, "Second Listed"),
          h("a", { class: "menu-link" }, "Third Listed"),
          h("a", { class: "menu-link" }, "Fourth Listed"),
        ]),
        h("li", { class: "menu-item" }, "List content"),
        h("li", { class: "menu-item" }, "List content"),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("menu");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("menu");

    return () => h(BasicComponent, { ...props, tag: "ul" });
  },
};
