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
        "<div class='alert-header'><h3 class='alert-title'>Title</h3></div>" +
        "<div class='alert-body'><p>Alert</p></div>",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("alert");

    return () => h(BasicComponent, { ...props, tag: "div" });
  },
};
