import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    children: {
      type: Array,
      default: [
        h(AdvancedComponent, {
          attributes: {
            class: [
              "col-6",
              "md:col-8",
              "xl:col-9",
              "py-7",
              "bg-primary-700",
              "px-5",
            ],
          },
          children: [
            h(AdvancedComponent, {
              attributes: { class: ["flex-columns"] },
              children: [
                h(BasicComponent, {
                  attributes: {
                    class: ["col-6", "bg-primary", "py-7", "px-5"],
                  },
                }),
                h(BasicComponent, {
                  attributes: {
                    class: ["col-6", "bg-primary", "py-7", "px-5"],
                  },
                }),
              ],
            }),
          ],
        }),
        h(AdvancedComponent, {
          attributes: {
            class: [
              "col-6",
              "md:col-4",
              "xl:col-3",
              "py-7",
              "bg-primary-700",
              "px-5",
            ],
          },
        }),
        h(AdvancedComponent, {
          attributes: {
            class: ["col-12", "py-7", "bg-primary-700", "px-5"],
          },
          children: [
            h(AdvancedComponent, {
              attributes: { class: ["flex-columns"] },
              children: [
                h(BasicComponent, {
                  attributes: {
                    class: ["col-6", "md:col-9", "bg-primary", "py-7", "px-5"],
                  },
                }),
                h(BasicComponent, {
                  attributes: {
                    class: ["col-6", "md:col-3", "bg-primary", "py-7", "px-5"],
                  },
                }),
              ],
            }),
          ],
        }),
        h(AdvancedComponent, {
          attributes: {
            class: [
              "col-6",
              "md:col-8",
              "xl:col-9",
              "py-7",
              "bg-primary-700",
              "px-5",
            ],
          },
          children: [
            h(AdvancedComponent, {
              attributes: { class: ["flex-columns"] },
              children: [
                h(BasicComponent, {
                  attributes: {
                    class: ["col-6", "bg-primary", "py-7", "px-5"],
                  },
                }),
                h(BasicComponent, {
                  attributes: {
                    class: ["col-6", "bg-primary", "py-7", "px-5"],
                  },
                }),
              ],
            }),
          ],
        }),
        h(AdvancedComponent, {
          attributes: {
            class: [
              "col-6",
              "md:col-4",
              "xl:col-3",
              "py-7",
              "bg-primary-700",
              "px-5",
            ],
          },
        }),
      ],
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["flex-columns", "py-5"]);

    return () => h(AdvancedComponent, { ...props, attributes });
  },
};
