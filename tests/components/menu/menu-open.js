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
          h(BasicComponent, {
            tag: "button",
            class: "menu-link button submenu-toggle",
            "aria-expanded": true,
            text: "Button",
          }),
          h("ul", { class: "submenu show", "data-testid": "submenu" }, [
            h(
              "li",
              { class: "menu-item" },
              h("a", { class: "menu-link", href: "#" }, "List Item ")
            ),
            h(
              "li",
              { class: "menu-item" },
              h("a", { class: "menu-link", href: "#" }, "Second Listed")
            ),
            h(
              "li",
              { class: "menu-item" },
              h("a", { class: "menu-link", href: "#" }, "Third Listed")
            ),
            h(
              "li",
              { class: "menu-item" },
              h("a", { class: "menu-link", href: "#" }, "Fourth Listed")
            ),
          ]),
        ]),
        h(
          "li",
          { class: "menu-item" },
          h("a", { class: "menu-link", href: "#" }, "List Content ")
        ),
        h(
          "li",
          { class: "menu-item" },
          h("a", { class: "menu-link", href: "#" }, "List Content 2")
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
