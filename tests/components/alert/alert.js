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

    props.attributes.class.push("alert");

    return () =>
      h(BasicComponent, {
        ...props,
        tag: "div",
        text: [
          h("div", { class: "alert-header" }, [
            h("h3", { class: "alert-title" }, "Title"),
          ]),
          h("div", { class: "alert-body" }, [h("p", "Alert")]),
        ],
      });
  },
};
