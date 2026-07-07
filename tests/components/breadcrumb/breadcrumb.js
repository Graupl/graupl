import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: Function,
      default() {
        () => (
          h(BasicComponent, {
            tag: "li",
            attributes: { class: "breadcrumb-item" },
            text: () =>
              h(BasicComponent, {
                tag: "a",
                attributes: { class: "breadcrumb-link", href: "/" },
                text: "Home",
              }),
          }),
          h(BasicComponent, {
            tag: "li",
            attributes: { class: "breadcrumb-item" },
            text: "Breadcrumb",
          })
        );
      },
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("breadcrumb");

    return () => h(BasicComponent, { ...props, tag: "ol" });
  },
};
