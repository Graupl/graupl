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
      type: [String, Function, Object],
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
  },
  setup(props) {
    const { attributes, variant, state, text, tag } = props;

    if (variant !== "" || state !== "") {
      attributes.class = attributes.class || [];

      if (variant !== "") {
        attributes.class.push(variant);
      }

      if (state !== "") {
        attributes.class.push(state);
      }
    }

    return () => h(tag, attributes, text);
  },
};
