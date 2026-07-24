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
        h("div", { class: "accordion-control-container" }, [
          h("button", { class: "accordion-control expand-all" }, "Expand All"),
          h(
            "button",
            { class: "accordion-control collapse-all" },
            "Collapse All"
          ),
        ]),
        h("div", { class: "accordion-item" }, [
          h("div", { class: "accordion-item-header" }, [
            h("h3", { class: "accordion-item-title" }, [
              h(
                "button",
                { class: "accordion-item-toggle" },
                "Accordion Heading"
              ),
            ]),
          ]),
          h("div", { class: "accordion-item-content" }, [
            h("div", { class: "accordion-item-body" }, [
              h("p", "Accordion Body"),
            ]),
            h("div", { class: "accordion-item-footer" }, [
              h("p", "Accordion Footer"),
            ]),
          ]),
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
    props.attributes.class.push("accordion");

    props.attributes["data-testid"] = props.attributes["data-testid"] || [];
    props.attributes["data-testid"].push("accordion");

    return () => h(BasicComponent, { ...props, tag: "div" });
  },
};
