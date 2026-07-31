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
          attributes: { class: ["list-item"] },
          children: [
            h(BasicComponent, {
              tag: "li",
              attributes: { class: ["list-item"] },
              text: "List Item ",
            }),
            h(BasicComponent, {
              tag: "li",
              attributes: { class: ["list-item"] },
              text: "Second Listed",
            }),
            h(BasicComponent, {
              tag: "li",
              attributes: { class: ["list-item"] },
              text: "Third Listed",
            }),
            h(BasicComponent, {
              tag: "li",
              attributes: { class: ["list-item"] },
              text: "Fourth Listed",
            }),
          ],
        }),
        h(BasicComponent, {
          tag: "li",
          attributes: { class: ["list-item"] },
          text: "List content",
        }),
        h(BasicComponent, {
          tag: "li",
          attributes: { class: ["list-item"] },
          text: "List content",
        }),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["list"]);

    return () => h(AdvancedComponent, { ...props, attributes, tag: "ul" });
  },
};
