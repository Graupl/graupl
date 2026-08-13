import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

const sidebarsOptions = ["none", "left", "right", "both"];

/**
 * Builds the given number of column items, with the given span applied to
 * the first.
 *
 * @param  {number} span  - The span to apply to the first column item.
 * @param  {number} count - The number of column items to build.
 * @return {Array}        - The column item vnodes.
 */
function buildColumnItems(span, count) {
  const items = [];

  for (let i = 0; i < count; i++) {
    items.push(
      h(BasicComponent, {
        attributes: {
          class: ["bg-primary", i === 0 ? `span-${span}` : "span-1", "py-7"],
        },
      })
    );
  }

  return items;
}

export default {
  props: {
    // Applies the `.count-#` class.
    count: {
      type: Number,
      default: 3,
    },
    // Applies the `.fixed` class.
    fixed: {
      type: Boolean,
      default: false,
    },
    // Applies the `.span-#` class to the first item in the columns.
    span: {
      type: Number,
      default: 1,
    },
    // Number of column items to render.
    items: {
      type: Number,
      default: 12,
    },
    // What kind of sidebars to apply to the wrapping container.
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

    const attributes = setupClasses(
      { "data-testid": "columns-wrapper" },
      containerClasses
    );

    const columns = h(AdvancedComponent, {
      attributes: {
        class: [
          "columns",
          `count-${props.count}`,
          props.fixed ? "fixed" : "",
          "py-5",
        ],
      },
      children: buildColumnItems(props.span, props.items),
    });

    let children = [columns];

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

      children = [
        ...sidebarChildren,
        h(AdvancedComponent, {
          attributes: { class: ["content"] },
          children: [columns],
        }),
      ];
    }

    return () => h(AdvancedComponent, { attributes, children });
  },
};
