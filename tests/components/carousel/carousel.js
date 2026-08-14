import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";
import placeholderImage from "../placeholder.svg";

const slides = [
  "This is a slide! You can put any content you want here.",
  "This is another slide! You can put any content you want here.",
  "This is yet another slide! You can put any content you want here.",
];

export default {
  props: {
    play: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["carousel"]);

    return () =>
      h(AdvancedComponent, {
        tag: "section",
        attributes,
        children: [
          h(AdvancedComponent, {
            attributes: { class: ["carousel-control-container"] },
            children: [
              h(BasicComponent, {
                tag: "button",
                attributes: {
                  class: [
                    "carousel-control",
                    "autoplay",
                    props.play ? "play" : "pause",
                  ],
                  "aria-label": props.play ? "Play" : "Pause",
                },
              }),
              h(BasicComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-control", "previous"],
                  "aria-label": "Previous",
                  disabled: props.disabled ? "disabled" : undefined,
                },
              }),
              h(BasicComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-control", "next"],
                  "aria-label": "Next",
                },
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: {
              class: ["carousel-tab-container"],
              role: "tablist",
            },
            children: slides.map((slide, index) =>
              h(AdvancedComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-tab", index === 0 ? "active" : ""],
                  "aria-label": `Carousel item ${index + 1}`,
                  role: "tab",
                },
              })
            ),
          }),
          h(AdvancedComponent, {
            attributes: { class: ["carousel-item-container"] },
            children: slides.map((slide, index) =>
              h(AdvancedComponent, {
                attributes: {
                  class: [
                    "carousel-item",
                    "position-relative",
                    index === 0 ? "active" : "",
                  ],
                },
                children: [
                  h(AdvancedComponent, {
                    attributes: { class: ["ratio", "sixteen-by-nine"] },
                    children: [
                      h(BasicComponent, {
                        tag: "img",
                        attributes: {
                          class: ["force-ratio"],
                          src: placeholderImage,
                          alt: `Slide ${index + 1} placeholder alt text`,
                        },
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    attributes: {
                      class: [
                        "position-absolute",
                        "bottom-0",
                        "left-0",
                        "right-0",
                        "bg-tertiary-100",
                        "p-5",
                      ],
                    },
                    children: [h(BasicComponent, { tag: "p", text: slide })],
                  }),
                ],
              })
            ),
          }),
        ],
      });
  },
};
