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
    props.attributes["data-graupl-menu-type"] = "DisclosureMenu";

    return () =>
      h(BasicComponent, { ...props, tag: "ul" }, [
        h(BasicComponent, {
          "data-testid": "menu-item",
          class: "menu-item",
          tag: "li",
        }),
      ]);
  },
};
