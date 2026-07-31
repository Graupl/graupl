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
    const attributes = setupClasses(props.attributes, ["accordion"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
        children: [
          h(AdvancedComponent, {
            attributes: { class: ["accordion-control-container"] },
            children: [
              h(BasicComponent, {
                tag: "button",
                attributes: { class: ["accordion-control", "expand-all"] },
                text: "Expand All",
              }),
              h(BasicComponent, {
                tag: "button",
                attributes: { class: ["accordion-control", "collapse-all"] },
                text: "Collapse All",
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: {
              class: ["accordion-item", props.open ? "show" : "hide"],
            },
            children: [
              h(AdvancedComponent, {
                attributes: { class: ["accordion-item-header"] },
                children: [
                  h(AdvancedComponent, {
                    tag: "h3",
                    attributes: { class: ["accordion-item-title"] },
                    children: [
                      h(BasicComponent, {
                        tag: "button",
                        attributes: {
                          class: ["accordion-item-toggle"],
                          "aria-expanded": true,
                          "data-testid": "item-toggle",
                        },
                        text: "Accordion Heading",
                      }),
                    ],
                  }),
                ],
              }),
              h(AdvancedComponent, {
                attributes: { class: ["accordion-item-content"] },
                children: [
                  h(AdvancedComponent, {
                    attributes: { class: ["accordion-item-body"] },
                    children: [
                      h(BasicComponent, { tag: "p", text: "Accordion Body" }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    attributes: { class: ["accordion-item-footer"] },
                    children: [
                      h(BasicComponent, { tag: "p", text: "Accordion Footer" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
  },
};
