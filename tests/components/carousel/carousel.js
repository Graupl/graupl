import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
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
        ...props,
        attributes,
        children: [
          h(AdvancedComponent, {
            attributes: {
              class: ["carousel-control-container"],
            },
            children: [
              h(BasicComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-control", "autoplay", "pause"],
                  "aria-label": "Pause",
                },
              }),
              h(BasicComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-control", "previous"],
                  "aria-label": "Previous slide",
                },
              }),
              h(BasicComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-control", "next"],
                  "aria-label": "Next slide",
                },
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: {
              class: ["carousel-tab-container"],
              role: "tablist",
            },
            children: [
              h(AdvancedComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-tab"],
                  "aria-label": "Carousel item 1",
                  role: "tab",
                },
              }),
              h(AdvancedComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-tab"],
                  "aria-label": "Carousel item 2",
                  role: "tab",
                },
              }),
              h(AdvancedComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-tab"],
                  "aria-label": "Carousel item 3",
                  role: "tab",
                },
              }),
              h(AdvancedComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-tab"],
                  "aria-label": "Carousel item 4",
                  role: "tab",
                },
              }),
              h(AdvancedComponent, {
                tag: "button",
                attributes: {
                  class: ["carousel-tab"],
                  "aria-label": "Carousel item 5",
                  role: "tab",
                },
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: {
              class: ["carousel-item-container"],
              tabindex: "-1",
            },
            children: [
              h(AdvancedComponent, {
                attributes: {
                  class: ["carousel-item", "active"],
                },
                children: [
                  h(BasicComponent, {
                    tag: "img",
                    attributes: {
                      src: "slide1.jpg",
                      alt: "Slide 1 placeholder alt text",
                      height: 600,
                      width: 1400,
                    },
                  }),
                  h(AdvancedComponent, {
                    attributes: {
                      class: [
                        "position-absolute",
                        "bottom-0",
                        "left-0",
                        "right-0",
                        `bg-tertiary-100`,
                        "p-5",
                      ],
                    },
                    children: [
                      h(BasicComponent, {
                        tag: "p",
                        text: "This is a slide! You can put any content you want here.",
                      }),
                    ],
                  }),
                ],
              }),
              h(AdvancedComponent, {
                attributes: {
                  class: ["carousel-item"],
                },
                children: [
                  h(BasicComponent, {
                    tag: "img",
                    attributes: {
                      src: "slide2.jpg",
                      alt: "Slide 2 placeholder alt text",
                    },
                  }),
                  h(AdvancedComponent, {
                    attributes: {
                      class: [
                        "position-absolute",
                        "bottom-0",
                        "left-0",
                        "right-0",
                        `bg-tertiary-100`,
                        "p-5",
                      ],
                    },
                    children: [
                      h(BasicComponent, {
                        tag: "p",
                        text: "This is another slide! You can put any content you want here.",
                      }),
                    ],
                  }),
                ],
              }),
              h(AdvancedComponent, {
                attributes: {
                  class: ["carousel-item"],
                },
                children: [
                  h(BasicComponent, {
                    tag: "img",
                    attributes: {
                      src: "slide3.jpg",
                      alt: "Slide 3 placeholder alt text",
                    },
                  }),
                  h(AdvancedComponent, {
                    attributes: {
                      class: [
                        "position-absolute",
                        "bottom-0",
                        "left-0",
                        "right-0",
                        `bg-tertiary-100`,
                        "p-5",
                      ],
                    },
                    children: [
                      h(BasicComponent, {
                        tag: "p",
                        text: "This is yet another slide! You can put any content you want here.",
                      }),
                    ],
                  }),
                ],
              }),
              h(AdvancedComponent, {
                attributes: {
                  class: ["carousel-item"],
                },
                children: [
                  h(BasicComponent, {
                    tag: "img",
                    attributes: {
                      src: "slide4.jpg",
                      alt: "Slide 4 placeholder alt text",
                    },
                  }),
                  h(AdvancedComponent, {
                    attributes: {
                      class: [
                        "position-absolute",
                        "bottom-0",
                        "left-0",
                        "right-0",
                        `bg-tertiary-100`,
                        "p-5",
                      ],
                    },
                    children: [
                      h(BasicComponent, {
                        tag: "p",
                        text: "This is yet another slide! You can put any content you want here.",
                      }),
                    ],
                  }),
                ],
              }),
              h(AdvancedComponent, {
                attributes: {
                  class: ["carousel-item"],
                },
                children: [
                  h(BasicComponent, {
                    tag: "img",
                    attributes: {
                      src: "slide5.jpg",
                      alt: "Slide 5 placeholder alt text",
                    },
                  }),
                  h(AdvancedComponent, {
                    attributes: {
                      class: [
                        "position-absolute",
                        "bottom-0",
                        "left-0",
                        "right-0",
                        `bg-tertiary-100`,
                        "p-5",
                      ],
                    },
                    children: [
                      h(BasicComponent, {
                        tag: "p",
                        text: "This is yet another slide! You can put any content you want here.",
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
