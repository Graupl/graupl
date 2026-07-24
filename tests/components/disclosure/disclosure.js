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

    props.attributes.id = props.attributes.id || [];
    props.attributes.id.push("disclosure");

    return () =>
      h(BasicComponent, {
        tag: "div",
        ...props,
        text: h("div", { class: "disclosure-content" }, [h("p", "Disclosure")]),
      });
  },
};
