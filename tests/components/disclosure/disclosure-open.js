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
    props.attributes.class.push("disclosure show");

    return () =>
      h(
        "div",
        { "data-testid": "disclosure", class: "display-flex flex-col" },
        [
          h(BasicComponent, {
            class: "disclosure-toggle " + props.variant,
            "aria-expanded": "true",
            tag: "button",
          }),
          h(BasicComponent, {
            tag: "div",
            ...props,
            text: h("div", { class: "disclosure-content" }, [
              h("p", "Disclosure for the hidden paragraphs there are here"),
            ]),
          }),
        ]
      );
  },
};
