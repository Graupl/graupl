import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
    span: {
      type: String,
      default: "span-1",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, [
      "columns",
      "py-5",
      props.fixed ? "fixed" : "",
    ]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
        children: [
          h(BasicComponent, {
            attributes: {
              class: ["bg-primary", `${props.span}`, "py-7", "px-5"],
            },
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
      });
  },
};
