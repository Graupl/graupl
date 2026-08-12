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
    const attributes = setupClasses(props.attributes, ["navigation"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
        children: [
          h(BasicComponent, {
            tag: "a",
            attributes: {
              class: ["navigation-branding"],
              href: "#",
            },
            text: "Branding",
          }),
          h(BasicComponent, {
            tag: "button",
            attributes: {
              class: ["navigation-toggle", "ml-auto", "mr-0"],
            },
          }),
          h(AdvancedComponent, {
            tag: "ul",
            attributes: { class: ["menu"] },
            children: [
              h(AdvancedComponent, {
                tag: "li",
                attributes: { class: ["menu-item", "submenu-item"] },
                children: [
                  h(BasicComponent, {
                    tag: "button",
                    attributes: {
                      class: ["menu-link", "button", "link", "submenu-toggle"],
                      "aria-expanded": "false",
                    },
                    text: "Button",
                  }),
                  h(AdvancedComponent, {
                    tag: "ul",
                    attributes: { class: ["submenu", "hide"] },
                    children: [
                      h(AdvancedComponent, {
                        tag: "li",
                        attributes: { class: ["menu-item"] },
                        children: [
                          h(BasicComponent, {
                            tag: "a",
                            attributes: { class: ["menu-link"], href: "#" },
                            text: "Sub Item 1",
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
                            text: "Sub Item 2",
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
          }),
        ],
      });
  },
};
