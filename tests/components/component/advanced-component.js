import { h } from "vue";
import "../../../dist/css/graupl.css";
import { variants, states } from "../defaults.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
      validate: (value) => {
        if (value === "") return true;

        return variants.includes(value);
      },
    },
    state: {
      type: String,
      default: "",
      validate: (value) => {
        if (value === "") return true;

        return states.includes(value);
      },
    },
    children: {
      type: Array,
      default: () => [],
    },
    tag: {
      type: String,
      default: "div",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { attributes, variant, state, children, tag } = props;

    attributes.class = attributes.class || [];
    attributes.class.push(variant, state);
    attributes.class = attributes.class.filter((value) => value !== "");

    return () => h(tag, attributes, children);
  },
};
