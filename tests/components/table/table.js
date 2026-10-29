import { h } from "vue";
import { setupClasses } from "../helpers.js";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import WrapperComponent from "../component/wrapper-component.js";

export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["table"]);

    return () =>
      h(WrapperComponent, {
        children: [
          h(AdvancedComponent, {
            tag: "table",
            ...props,
            attributes,
            children: [
              h(BasicComponent, {
                tag: "caption",
                text: "A caption for the table",
              }),
              h(AdvancedComponent, {
                tag: "thead",
                children: [
                  h(AdvancedComponent, {
                    tag: "tr",
                    children: [
                      h(BasicComponent, {
                        tag: "th",
                        attributes: {
                          scope: "col",
                        },
                        text: "Person",
                      }),
                      h(BasicComponent, {
                        tag: "th",
                        attributes: {
                          scope: "col",
                        },
                        text: "Most interested in",
                      }),
                      h(BasicComponent, {
                        tag: "th",
                        attributes: {
                          scope: "col",
                        },
                        text: "Age",
                      }),
                    ],
                  }),
                ],
              }),

              h(AdvancedComponent, {
                tag: "tbody",
                children: [
                  h(AdvancedComponent, {
                    tag: "tr",
                    children: [
                      h(BasicComponent, {
                        tag: "td",
                        text: "Chris",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        text: "HTML tables",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        text: "22",
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    tag: "tr",
                    children: [
                      h(BasicComponent, {
                        tag: "td",
                        text: "Dennis",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        attributes: {
                          class: [
                            "highlight",
                            props.variant ? props.variant : "",
                          ],
                        },
                        text: "Web Accessibility",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        text: "45",
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    tag: "tr",
                    children: [
                      h(BasicComponent, {
                        tag: "td",
                        text: "Sarah",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        text: "JavaScript frameworks",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        text: "29",
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    tag: "tr",
                    children: [
                      h(BasicComponent, {
                        tag: "td",
                        text: "Karen",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        text: "Web performance",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        text: "36",
                      }),
                    ],
                  }),
                ],
              }),
              h(AdvancedComponent, {
                tag: "tfoot",
                children: [
                  h(AdvancedComponent, {
                    tag: "tr",
                    children: [
                      h(BasicComponent, {
                        tag: "th",
                        attributes: { scope: "row", colspan: "2" },
                        text: "Average age",
                      }),
                      h(BasicComponent, {
                        tag: "td",
                        text: "33",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
  },
};
