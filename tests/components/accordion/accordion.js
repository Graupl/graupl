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
      default: "Accordion",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("accordion");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("accordion");

    return () => h(BasicComponent, { ...props, tag: "div" });
  },
};
