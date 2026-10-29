import { h } from "vue";
import BasicComponent from "../component/basic-component.js";
import AdvancedComponent from "../component/advanced-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Click me",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["button"]);

    return () =>
      h(AdvancedComponent, {
        attributes: {
          style: "padding: 5rem",
        },
        children: [h(BasicComponent, { ...props, attributes })],
      });
  },
};
