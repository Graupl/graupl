import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    children: {
      type: Array,
      default: [
        h(AdvancedComponent, {
          attributes: { class: ["columns", "count-4"] },
          children: [
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
        }),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["container", "py-5"]);

    return () => h(AdvancedComponent, { ...props, attributes });
  },
};
