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
    children: {
      type: Array,
      default: [
        h(AdvancedComponent, {
          attributes: { class: ["tab-list"], role: ["tablist"] },
          children: [
            h(BasicComponent, {
              tag: "button",
              attributes: { class: ["tab-toggle"], tabindex: "0" },
              text: "Tab 1",
            }),
            h(BasicComponent, {
              tag: "button",
              attributes: { class: ["tab-toggle"], tabindex: "-1" },
              text: "Tab 2",
            }),
            h(BasicComponent, {
              tag: "button",
              attributes: { class: ["tab-toggle"], tabindex: "-1" },
              text: "Tab 3",
            }),
            h(BasicComponent, {
              tag: "button",
              attributes: { class: ["tab-toggle"], tabindex: "-1" },
              text: "Tab 4",
            }),
          ],
        }),
        h(AdvancedComponent, {
          attributes: {
            class: ["tab-content", "show"],
          },
          children: [
            h(BasicComponent, { tag: "p", text: "Content in the tabs" }),
            h(BasicComponent, { tag: "p", text: "These might get big" }),
          ],
        }),
        h(AdvancedComponent, {
          attributes: {
            class: ["tab-content", "hide"],
          },
          children: [
            h(BasicComponent, { tag: "p", text: "Content in the tabs" }),
            h(BasicComponent, { tag: "p", text: "These might get big" }),
          ],
        }),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["tabs"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
      });
  },
};
