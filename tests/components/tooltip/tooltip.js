import { h } from "vue";
import { setupClasses } from "../helpers.js";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import WrapperComponent from "../component/wrapper-component.js";

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["tooltip"]);

    return () =>
      h(WrapperComponent, {
        children: [
          h(AdvancedComponent, {
            ...props,
            attributes,
            children: [
              h(BasicComponent, {
                text: "This is a tooltip!",
                tag: "span",
                attributes: {
                  class: ["tooltip-description", props.open ? "show" : "hide"],
                },
              }),
              h(BasicComponent, {
                tag: "button",
                attributes: { class: ["tooltip-toggle"] },
              }),
            ],
          }),
        ],
      });
  },
};
