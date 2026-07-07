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
      h(BasicComponent, { tag: "button", ...props }, [
        h("div", { class: "disclosure-content" }, [h("p", null, props.text)]),
      ]),
    ];
  },
};
