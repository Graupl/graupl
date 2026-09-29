import { h } from "vue";
import { setupClasses } from "../helpers.js";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import WrapperComponent from "../component/wrapper-component.js";

export default {
  props: {
    children: {
      type: Array,
      default: [
        h(AdvancedComponent, {
          attributes: { class: ["tab-list"], role: "tablist" },
          children: [
            h(BasicComponent, {
              tag: "button",
              attributes: {
                class: ["tab-toggle"],
                tabindex: "0",
                "aria-selected": "true",
              },
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
            h(BasicComponent, { tag: "p", text: "Second tabs" }),
            h(BasicComponent, {
              tag: "p",
              text: "More information in the second tab",
            }),
          ],
        }),
        h(AdvancedComponent, {
          attributes: {
            class: ["tab-content", "hide"],
          },
          children: [
            h(BasicComponent, { tag: "p", text: "Third tabs" }),
            h(BasicComponent, {
              tag: "p",
              text: "More information in the third tab",
            }),
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
      h(WrapperComponent, {
        children: [
          h(AdvancedComponent, {
            ...props,
            attributes,
          }),
        ],
      });
  },
};
