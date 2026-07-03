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
        h("li", { "data-testid": "menu-item-1" }, "Menu 1"),
        h("li", { "data-testid": "menu-item-2" }, "Menu 2"),
        h("li", { "data-testid": "menu-item-3" }, "Menu 3"),
      ]);
  },
};
