import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

const sidebarsOptions = ["none", "left", "right", "both"];

export default {
  props: {
    sidebars: {
      type: String,
      default: "none",
      validate: (value) => sidebarsOptions.includes(value),
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const containerClasses = ["container", "py-5"];

    if (props.sidebars === "both") {
      containerClasses.push("sidebars");
    } else if (props.sidebars === "left") {
      containerClasses.push("sidebars-left");
    } else if (props.sidebars === "right") {
      containerClasses.push("sidebars-right");
    }

    const attributes = setupClasses(props.attributes, containerClasses);

    // The four sections are always shown, coloured so each is easy to tell
    // apart in a screenshot.
    const sections = [
      h(BasicComponent, {
        attributes: { class: ["full-width", "bg-secondary", "py-7"] },
        text: "Full-width",
      }),
      h(BasicComponent, {
        attributes: { class: ["feature", "bg-tertiary", "py-7"] },
        text: "Feature",
      }),
      h(BasicComponent, {
        attributes: { class: ["breakout", "bg-primary-200", "py-7"] },
        text: "Breakout",
      }),
      h(BasicComponent, {
        attributes: { class: ["bg-primary", "py-7"] },
        text: "Content",
      }),
    ];

    let children = sections;

    if (props.sidebars !== "none") {
      const sidebarChildren = [];

      if (props.sidebars === "both" || props.sidebars === "left") {
        sidebarChildren.push(
          h(AdvancedComponent, {
            attributes: {
              class: [
                props.sidebars === "both" ? "sidebar-left" : "sidebar",
                "z-1",
              ],
            },
            children: [
              h(BasicComponent, {
                attributes: { class: ["bg-secondary-200", "py-7"] },
                text: "Left sidebar",
              }),
            ],
          })
        );
      }

      if (props.sidebars === "both" || props.sidebars === "right") {
        sidebarChildren.push(
          h(AdvancedComponent, {
            attributes: {
              class: [
                props.sidebars === "both" ? "sidebar-right" : "sidebar",
                "z-1",
              ],
            },
            children: [
              h(BasicComponent, {
                attributes: { class: ["bg-secondary-200", "py-7"] },
                text: "Right sidebar",
              }),
            ],
          })
        );
      }

      // .content is itself a subgrid that spans the whole container, so the
      // same sections can be nested straight inside it.
      children = [
        ...sidebarChildren,
        h(AdvancedComponent, {
          attributes: { class: ["content"] },
          children: sections,
        }),
      ];
    }

    return () => h(AdvancedComponent, { ...props, attributes, children });
  },
};
