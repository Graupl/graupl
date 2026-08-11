import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    children: {
      type: Array,
      default: [
        h(BasicComponent, {
          attributes: { class: ["bg-primary", "py-7", "px-5"] },
        }),
        h(BasicComponent, {
          attributes: { class: ["bg-primary", "py-7", "px-5"] },
        }),
        h(BasicComponent, {
          attributes: { class: ["bg-primary", "py-7", "px-5"] },
        }),
        h(BasicComponent, {
          attributes: { class: ["bg-primary", "py-7", "px-5"] },
        }),
        h(BasicComponent, {
          attributes: { class: ["bg-primary", "py-7", "px-5"] },
        }),
        h(BasicComponent, {
          attributes: { class: ["bg-primary", "py-7", "px-5"] },
        }),
        h(BasicComponent, {
          attributes: { class: ["bg-primary", "py-7", "px-5"] },
        }),
        h(BasicComponent, {
          attributes: { class: ["bg-primary", "py-7", "px-5"] },
        }),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, [
      "columns",
      "count-4",
      "py-4",
      "g-4",
    ]);

    return () =>
      h(AdvancedComponent, {
        attributes: { class: ["container"] },
        children: [h(AdvancedComponent, { ...props, attributes })],
      });
  },
};
