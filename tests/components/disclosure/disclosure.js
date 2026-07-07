import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Disclosure",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("disclosure");

    return () => [
      h("button", {
        class: "disclosure-toggle",
        "data-graupl-disclosure-target": "#disclosure",
      }),
      h(
        BasicComponent,
        { tag: "button", id: "#disclosure", attributes: props.attributes },
        h("div", { class: "disclosure-content" }, h("p", null, props.text))
      ),
    ];
  },
};
