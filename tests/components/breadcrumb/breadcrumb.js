import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: [String, Array],
      default: [
        h(BasicComponent, { tag: "li", class: "breadcrumb-item" }, [
          h(BasicComponent, {
            tag: "a",
            class: "breadcrumb-link",
            href: "/",
            text: "Home",
          }),
        ]),
        h(BasicComponent, {
          tag: "li",
          class: "breadcrumb-item",
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
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("breadcrumb");

    return () => h(BasicComponent, { ...props, tag: "ol" });
  },
};
