import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    children: {
      type: Array,
      default: () => (
        h(BasicComponent, { text: "Menu 1", tag: "li" }),
        h(BasicComponent, { text: "Menu 2", tag: "li" }),
        h(BasicComponent, { text: "Menu 3", tag: "li" })
      ),
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];

    props.attributes.class.push("menu");

    return () => h(BasicComponent, { ...props, tag: "ul" });
  },
};
