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
    props.attributes.class.push("breadcrumb");

    props.attributes["date-testid"] = props.attributes["date-testid"] || [];
    props.attributes["date-testid"].push("breadcrumb");

    return () =>
      h(BasicComponent, {
        ...props,
        tag: "ol",
      });
  },
};
