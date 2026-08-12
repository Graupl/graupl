import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

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
    const attributes = setupClasses(props.attributes, ["menu"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
        tag: "ul",
        children: [
          h(AdvancedComponent, {
            tag: "li",
            attributes: { class: ["menu-item", "submenu-item"] },
            children: [
              h(BasicComponent, {
                tag: "button",
                attributes: {
                  class: ["menu-link", "button", "link", "submenu-toggle"],
                  "aria-expanded": props.open ? "true" : "false",
                },
                text: "Button",
              }),
              h(AdvancedComponent, {
                tag: "ul",
                attributes: {
                  class: ["submenu", props.open ? "show" : "hide"],
                  "data-testid": "submenu",
                },
                children: [
                  h(AdvancedComponent, {
                    tag: "li",
                    attributes: { class: ["menu-item"] },
                    children: [
                      h(BasicComponent, {
                        tag: "a",
                        attributes: { class: ["menu-link"], href: "#" },
                        text: "List Item",
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    tag: "li",
                    attributes: { class: ["menu-item"] },
                    children: [
                      h(BasicComponent, {
                        tag: "a",
                        attributes: { class: ["menu-link"], href: "#" },
                        text: "Second Listed",
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    tag: "li",
                    attributes: { class: ["menu-item"] },
                    children: [
                      h(BasicComponent, {
                        tag: "a",
                        attributes: { class: ["menu-link"], href: "#" },
                        text: "Third Listed",
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    tag: "li",
                    attributes: { class: ["menu-item"] },
                    children: [
                      h(BasicComponent, {
                        tag: "a",
                        attributes: { class: ["menu-link"], href: "#" },
                        text: "Fourth Listed",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          h(AdvancedComponent, {
            tag: "li",
            attributes: { class: ["menu-item"] },
            children: [
              h(BasicComponent, {
                tag: "a",
                attributes: { class: ["menu-link"], href: "#" },
                text: "List Content ",
              }),
            ],
          }),
          h(AdvancedComponent, {
            tag: "li",
            attributes: { class: ["menu-item"] },
            children: [
              h(BasicComponent, {
                tag: "a",
                attributes: { class: ["menu-link"], href: "#" },
                text: "List Content 2",
              }),
            ],
          }),
        ],
      });
  },
};
