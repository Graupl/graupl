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
      default: "",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("card");

    props.text += () =>
      h(BasicComponent, {
        tag: "div",
        attributes: { class: "card-content" },
        text: h(BasicComponent, {
          tag: "div",
          attributes: { class: "card-body" },
          text: h(BasicComponent, { tag: "p", text: "Card" }),
        }),
      });

    props.text += () =>
      h(BasicComponent, {
        tag: "div",
        attributes: { class: "card-footer" },
        text: h(BasicComponent, {
          tag: "a",
          attributes: { class: "button-stretched", href: "/" },
          text: "The Action",
        }),
      });

    return () => h(BasicComponent, { ...props, tag: "div" });
  },
};
