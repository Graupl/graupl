import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["input-group"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
        children: [
          h(BasicComponent, {
            tag: "input",
            attributes: {
              type: "input",
              placeholder: "Enter text",
              id: "input",
            },
          }),
          h(BasicComponent, {
            tag: "label",
            attributes: { for: "input" },
            text: "Input",
          }),
          h(BasicComponent, {
            tag: "small",
            attributes: { class: ["help-text"] },
            text: "This is the help text for this input.",
          }),
        ],
      });
  },
};
