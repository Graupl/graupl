import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default() {
        [
          h(BasicComponent, {
            tag: "li",
            text: () =>
              h(BasicComponent, {
                tag: "a",
                attributes: { href: "/" },
                text: "Home",
              }),
          }),
          h(BasicComponent, {
            tag: "li",
            text: "Breadcrumb",
          }),
        ].join("");
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
