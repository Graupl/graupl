import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: Object,
      default: [
        h("div", { class: "card-image" }, [h("img", { alt: "Card Image" })]),
        h("div", { class: "card-content" }, [
          h("div", { class: "card-header" }, [
            h("h3", { class: "card-title" }, "Title"),
          ]),
          h("div", { class: "card-body" }, [
            h("p", "Card body for some description."),
          ]),
          h("div", { class: "card-footer" }, [
            h("a", { class: "button-stretched", href: "#" }, "The Action"),
          ]),
        ]),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("card");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("card");

    return () =>
      h(BasicComponent, {
        ...props,
        tag: "div",
      });
  },
};
