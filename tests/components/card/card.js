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
    props.attributes.class.push("card");

    return () =>
      h(BasicComponent, {
        ...props,
        tag: "div",
        text: [
          h("div", { class: "card-content" }, [
            h("div", { class: "card-body" }, [h("p", "Card")]),
          ]),
          h("div", { class: "card-footer" }, [
            h("a", { class: "button-stretched", href: "#" }, "The Action"),
          ]),
        ],
      });
  },
};
