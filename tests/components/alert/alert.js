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
      default: "Alert",
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
          h("h3", { class: "alert-title" }, props.text)
        ),
        h(
          "div",
          { class: "alert-body" },
          h("p", null, "This is an alert message.")
        ),
      ]);
  },
};
