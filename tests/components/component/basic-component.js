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
    text: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "div",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
    children: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { attributes, variant, state, text, tag, children } = props;

    if (variant !== "" || state !== "") {
      attributes.class = attributes.class || [];

      if (variant !== "") {
        attributes.class.push(variant);
      }

      if (state !== "") {
        attributes.class.push(state);
      }
    }

    if (children.length > 0) {
      props.text = children.map((child) => h({ ...child })).join("");
    }

    return () => h(tag, attributes, text);
  },
};
