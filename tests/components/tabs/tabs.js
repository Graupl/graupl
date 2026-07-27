import { h } from "vue";
import BasicComponent from "../component/basic-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: Object,
      default: [
        h("div", { class: "tab-list", role: "tablist" }, [
          h("button", { class: "tab-toggle", tabindex: "0" }, "Tab 1"),
          h("button", { class: "tab-toggle", tabindex: "-1" }, "Tab 2"),
          h("button", { class: "tab-toggle", tabindex: "-1" }, "Tab 3"),
          h("button", { class: "tab-toggle", tabindex: "-1" }, "Tab 4"),
        ]),
        h("div", { class: "tab-content show" }, [
          h("p", "Content in the tabs "),
          h("p", "These might get big"),
        ]),
        h("div", { class: "tab-content hide" }, [
          h("p", "Content in the tabs "),
          h("p", "These might get big"),
        ]),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    props.attributes.class = props.attributes.class || [];
    props.attributes.class.push("tabs");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("tabs");

    return () =>
      h(BasicComponent, {
        tag: "div",
        ...props,
      });
  },
};
