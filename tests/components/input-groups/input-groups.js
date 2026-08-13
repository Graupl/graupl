import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    modifier: {
      type: String,
      default: "",
    },
    control: {
      type: String,
      default: "input",
      validate: (value) => ["input", "select", "checkbox"].includes(value),
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, [
      "input-group",
      props.modifier,
    ]);

    const children = [
      h(BasicComponent, {
        tag: "label",
        attributes: { for: "field" },
        text: "Label",
      }),
    ];

    if (props.control === "select") {
      children.push(
        h(AdvancedComponent, {
          tag: "select",
          attributes: { id: "field" },
          children: [
            h(BasicComponent, {
              tag: "option",
              attributes: { value: "Value", selected: "selected" },
              text: "Select option",
            }),
          ],
        })
      );
    } else if (props.control === "checkbox") {
      children.push(
        h(BasicComponent, {
          tag: "input",
          attributes: { type: "checkbox", id: "field" },
        })
      );
    } else {
      children.push(
        h(BasicComponent, {
          tag: "input",
          attributes: {
            type: "text",
            placeholder: "Enter text",
            id: "field",
          },
        })
      );
    }

    if (props.control !== "checkbox") {
      children.push(
        h(BasicComponent, {
          tag: "small",
          attributes: { class: ["help-text"] },
          text: "This is the help text for this input.",
        })
      );
    }

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
        children,
      });
  },
};
