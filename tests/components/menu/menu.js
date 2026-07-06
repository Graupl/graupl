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

    props.attributes.class.push("menu");
    props.attributes["data-testid"] = "menu";

    return () =>
      h(BasicComponent, { ...props, tag: "ul" }, [
        h("li", { "data-testid": "menu-item-1", class: "menu-item" }, [
          h("a", { href: "#", class: "menu-link" }, "Menu Item 1"),
        ]),
        h("li", { "data-testid": "menu-item-2", class: "menu-item" }, [
          h("a", { href: "#", class: "menu-link" }, "Menu Item 2"),
        ]),
        h("li", { "data-testid": "menu-item-3", class: "menu-item" }, [
          h("a", { href: "#", class: "menu-link" }, "Menu Item 3"),
        ]),
      ]);
  },
};
