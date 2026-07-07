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
      default:
        (() =>
          h(BasicComponent, {
            class: "alert-header",
            tag: "div",
            text: h(BasicComponent, {
              tag: "h3",
              attributes: { class: "alert-title" },
              text: "Title",
            }),
          })) +
        (() =>
          h(BasicComponent, {
            tag: "div",
            attributes: { class: "alert-body" },
            text: h(BasicComponent, { tag: "p", text: "Alert" }),
          })),
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("alert");

    return () =>
      h(BasicComponent, { ...props, tag: "div" }, [
        h(
          "div",
          { class: "alert-header" },
          h("h3", { class: "alert-title" }, "Title")
        ),
        h("div", { class: "alert-body" }, h("p", null, props.text)),
      ]);
  },
};
