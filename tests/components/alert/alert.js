import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

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
    const attributes = setupClasses(props.attributes, ["alert"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
        children: [
          h(AdvancedComponent, {
            attributes: { class: ["alert-header"] },
            children: [
              h(BasicComponent, {
                tag: "h3",
                attributes: { class: ["alert-title"] },
                text: "Title",
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: { class: ["alert-body"] },
            children: [
              h(BasicComponent, {
                tag: "p",
                text: "Alert body that describes something",
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: { class: ["alert-footer"] },
            children: [
              h(BasicComponent, {
                tag: "a",
                attributes: { href: "#" },
                text: "Action taken",
              }),
            ],
          }),
          h(BasicComponent, {
            tag: "button",
            attributes: { class: ["alert-dismisser"] },
            text: "X",
          }),
        ],
      });
  },
};
