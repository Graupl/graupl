import { h } from "vue";
import AdvancedComponent from "../component/advanced-component.js";
import BasicComponent from "../component/basic-component.js";
import { setupClasses } from "../helpers.js";

export default {
  props: {
    state: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
    attributes: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const attributes = setupClasses(props.attributes, ["container"]);

    return () =>
      h(AdvancedComponent, {
        ...props,
        attributes,
        tag: "form",
        children: [
          h(AdvancedComponent, {
            attributes: { class: ["input-group"] },
            children: [
              h(BasicComponent, {
                tag: "input",
                attributes: {
                  type: "input",
                  placeholder: "Enter text",
                  id: "input",
                  value: props.value ? "" : "Value",
                },
              }),
              h(BasicComponent, {
                tag: "label",
                attributes: { for: "input" },
                text: "Input",
              }),
              h(BasicComponent, {
                tag: "small",
                attributes: { class: ["help-text"] },
                text: "This is the help text for this input.",
              }),
            ],
          }),
          h(BasicComponent, {
            tag: "input",
            attributes: {
              type: "input",
              placeholder: "Input Disabled",
              id: "input-disabled",
              disabled: props.value ? null : "",
            },
          }),
          h(BasicComponent, {
            tag: "label",
            attributes: { for: "input-disabled" },
            text: "Input Disabled",
          }),

          h(BasicComponent, {
            tag: "textarea",
            attributes: {
              type: "textarea-disabled",
              placeholder: "Enter text",
              id: "textarea-disabled",
              disabled: props.value ? null : "",
            },
          }),
          h(BasicComponent, {
            tag: "label",
            attributes: { for: "textarea-disabled" },
            text: "Textarea Disabled",
          }),
          h(AdvancedComponent, {
            attributes: {
              class: ["input-group", "inline"],
              disabled: props.value ? null : "",
            },
            children: [
              h(AdvancedComponent, {
                tag: "select",
                attributes: {
                  id: "select-disabled",
                  disabled: props.value ? null : "",
                },
                children: [
                  h(BasicComponent, {
                    tag: "option",
                    attributes: { value: "Value-disabled" },
                    text: "Disabled option",
                  }),
                ],
              }),
              h(BasicComponent, {
                tag: "label",
                attributes: { for: "select-disabled" },
                text: "Select-disabled",
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: { class: ["input-group", "inline"] },
            children: [
              h(AdvancedComponent, {
                tag: "select",
                attributes: {
                  id: "select",
                },
                children: [
                  h(BasicComponent, {
                    tag: "option",
                    attributes: { value: "Value Default" },
                    text: "Select an option",
                  }),
                  h(AdvancedComponent, {
                    tag: "optgroup",
                    attributes: { label: "group1" },
                    children: [
                      h(BasicComponent, {
                        tag: "option",
                        attributes: { value: "group1option1" },
                        text: "Option 1",
                      }),
                      h(BasicComponent, {
                        tag: "option",
                        attributes: { value: "group1option2" },
                        text: "Option 2",
                        selected: props.value ? null : "",
                      }),
                    ],
                  }),
                ],
              }),
              h(BasicComponent, {
                tag: "label",
                attributes: { for: "select-disable" },
                text: "Select",
              }),
            ],
          }),
          h(AdvancedComponent, {
            tag: "fieldset",
            checked: props.value ? null : "",
            children: [
              h(BasicComponent, {
                tag: "legend",
                text: "Checkboxes",
              }),
              h(AdvancedComponent, {
                attributes: { class: ["input-group", "inline"] },
                children: [
                  h(BasicComponent, {
                    tag: "input",
                    attributes: { type: "checkbox" },
                    id: "checkbox1",
                  }),
                ],
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: { class: ["input-group"] },
            children: [
              h(AdvancedComponent, {
                tag: "fieldset",
                children: [
                  h(BasicComponent, {
                    tag: "legend",
                    text: "Checkboxes",
                  }),
                  h(AdvancedComponent, {
                    attributes: { class: ["input-group", "inline"] },
                    children: [
                      h(BasicComponent, {
                        tag: "input",
                        attributes: { type: "checkbox" },
                        id: "checkbox1",
                      }),
                      h(BasicComponent, {
                        tag: "label",
                        attributes: { for: "checkbox1" },
                        text: "Checkbox 1",
                        checked: props.value ? null : "",
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    attributes: { class: ["input-group", "inline"] },
                    children: [
                      h(BasicComponent, {
                        tag: "input",
                        attributes: { type: "checkbox" },
                        id: "Checkbox2",
                      }),
                      h(BasicComponent, {
                        tag: "label",
                        attributes: { for: "Checkbox2" },
                        text: "Checkbox 2",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: { class: ["input-group"] },
            children: [
              h(AdvancedComponent, {
                tag: "fieldset",
                children: [
                  h(BasicComponent, {
                    tag: "legend",
                    text: "Radio Buttons",
                  }),
                  h(AdvancedComponent, {
                    attributes: { class: ["input-group", "inline"] },
                    children: [
                      h(BasicComponent, {
                        tag: "input",
                        attributes: { type: "radio", name: "radio1" },
                        id: "radio1",
                      }),
                      h(BasicComponent, {
                        tag: "label",
                        attributes: { for: "radio1" },
                        text: "Radio 1",
                      }),
                    ],
                  }),
                  h(AdvancedComponent, {
                    attributes: { class: ["input-group", "inline"] },
                    children: [
                      h(BasicComponent, {
                        tag: "input",
                        attributes: { type: "radio", name: "radio2" },
                        id: "radio2",
                        checked: props.value ? null : "",
                      }),
                      h(BasicComponent, {
                        tag: "label",
                        attributes: { for: "radio2" },
                        text: "Radio 2",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          h(AdvancedComponent, {
            attributes: { class: ["input-group"] },
            children: [
              h(BasicComponent, {
                tag: "label",
                attributes: { for: "range" },
                text: "Range",
              }),
              h(BasicComponent, {
                tag: "input",
                attributes: {
                  type: "range",
                  id: "range",
                  min: 0,
                  max: 100,
                  step: 1,
                },
              }),
            ],
          }),
        ],
      });
  },
};
