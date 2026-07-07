import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: Function,
      default: h(BasicComponent, {
        tag: "div",
        attributes: { class: "card-content" },
        text: h(BasicComponent, {
          tag: "div",
          attributes: { class: "card-body" },
          text: h(BasicComponent, { tag: "p", text: "Card" }),
        }),
      }),
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("card");

    return () => h(BasicComponent, { ...props, tag: "div" });
  },
};
