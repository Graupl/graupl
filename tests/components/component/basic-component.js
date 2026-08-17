import { h } from "vue";
import "../../../dist/css/graupl.css";
import { variants, states } from "../defaults.js";
import { setupClasses } from "../helpers.js";

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
  },
  setup(props) {
    const { variant, state, text, tag } = props;

    const attributes = setupClasses(props.attributes, [variant, state]);

    return () => h(tag, attributes, text);
  },
};
