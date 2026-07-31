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
    children: {
      type: Array,
      default: [
        h(AdvancedComponent, {
          attributes: { class: ["card-image"] },
          children: [
            h(BasicComponent, {
              tag: "img",
              attributes: { alt: "Card Image" },
            }),
          ],
        }),
        h(AdvancedComponent, {
          attributes: { class: ["card-content"] },
          children: [
            h(AdvancedComponent, {
              attributes: { class: ["card-header"] },
              children: [
                h(BasicComponent, {
                  tag: "h3",
                  attributes: { class: ["card-title"] },
                  text: "Title",
                }),
              ],
            }),
            h(AdvancedComponent, {
              attributes: { class: ["card-body"] },
              children: [
                h(BasicComponent, {
                  tag: "p",
                  text: "Card body for some description.",
                }),
              ],
            }),
            h(AdvancedComponent, {
              attributes: { class: ["card-footer"] },
              children: [
                h(BasicComponent, {
                  tag: "a",
                  attributes: { class: ["button-stretched"], href: "#" },
                  text: "The Action",
                }),
              ],
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
    const attributes = setupClasses(props.attributes, ["card"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
      });
  },
};
