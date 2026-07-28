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
        h("li", { class: "menu-item submenu-item" }, [
          h(
            "button",
            { class: "menu-link button link submenu-toggle" },
            "Button"
          ),
          h("ul", { class: "submenu show" }, [
            h(
              "li",
              { class: "menu-item" },
              h("a", { class: "menu-link" }, "List Item ")
            ),
            h(
              "li",
              { class: "menu-item" },
              h("a", { class: "menu-link" }, "Second Listed")
            ),
            h(
              "li",
              { class: "menu-item" },
              h("a", { class: "menu-link" }, "Third Listed")
            ),
            h(
              "li",
              { class: "menu-item" },
              h("a", { class: "menu-link" }, "Fourth Listed")
            ),
          ]),
        ]),
        h(
          "li",
          { class: "menu-item" },
          h("a", { class: "menu-link" }, "List Content ")
        ),
        h(
          "li",
          { class: "menu-item" },
          h("a", { class: "menu-link" }, "List Content 2")
        ),
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
