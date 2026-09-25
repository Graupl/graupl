import { h } from "vue";
import "../../../dist/css/graupl.css";

export default {
  props: {
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
    padding: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const { children, tag, attributes } = props;

    attributes.style = "min-width: 1920px; min-height: 1080px;";
    attributes["data-testid"] = "component-test-wrapper";

    if (props.padding) {
      attributes.style += "padding:1rem;";
    }

    return () => h(tag, attributes, children);
  },
};
