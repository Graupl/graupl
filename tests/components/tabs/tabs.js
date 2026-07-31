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
        h("div", { class: "tab-content show" }, [
          h("p", "Content in the tabs "),
          h("p", "These might get big"),
        ]),
        h("div", { class: "tab-content hide" }, [
          h("p", "Content in the tabs "),
          h("p", "These might get big"),
        ]),
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
