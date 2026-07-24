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
    props.attributes.class.push("disclosure");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("disclosure");

    return () =>
      h("div", { "data-testid": "disclosure" }, [
        h(BasicComponent, {
          class: "disclosure-toggle " + props.variant,
          tag: "button",
        }),
        h(BasicComponent, {
          tag: "div",
          ...props,
          text: h("div", { class: "disclosure-content" }, [
            h("p", "Disclosure"),
          ]),
        }),
      ]);
  },
};
