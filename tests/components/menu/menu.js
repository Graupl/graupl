import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("navigation");
    props.attributes["data-graupl-menu-type"] = "DisclosureMenu";

    return () =>
      h(BasicComponent, { ...props, tag: "nav" }, [
        h(BasicComponent, { "data-testid": "menu", class: "menu", tag: "ul" }),
      ]);
  },
};
