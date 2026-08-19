import { h } from "vue";
import BasicComponent from "../component/basic-component.js";
import AdvancedComponent from "../component/advanced-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Sphinx of black quartz, judge my vow",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return () =>
      h(AdvancedComponent, {
        attributes: {
          style: "padding: 5rem",
        },
        children: [h(BasicComponent, { ...props, tag: "p" })],
      });
  },
};
