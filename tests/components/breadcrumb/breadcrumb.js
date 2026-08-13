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
          tag: "li",
          attributes: { class: ["breadcrumb-item"] },
          children: [
            h(BasicComponent, {
              tag: "a",
              attributes: { class: ["breadcrumb-link"], href: "#" },
              text: "Home",
            }),
          ],
        }),
        h(BasicComponent, {
          tag: "li",
          attributes: { class: ["breadcrumb-item"] },
          text: "Breadcrumb",
        }),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["breadcrumb"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
      });
  },
};
