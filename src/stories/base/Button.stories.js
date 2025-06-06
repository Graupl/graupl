import { createButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Base/Button",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    label: { control: "text" },
    variant: {
      control: {
        type: "select",
        labels: {
          default: "Default",
          primary: "Primary",
          secondary: "Secondary",
          tertiary: "Tertiary",
          link: "Link",
        },
        description: "The variant of the button controls the colour and style.",
      },
      options: ["default", "primary", "secondary", "tertiary", "link"],
      description: "The variant of the button controls the colour and style.",
    },
    state: {
      control: {
        type: "select",
        labels: {
          default: "Default",
          hover: "Hovered",
          focus: "Focused",
          active: "Active",
          visited: "Visited",
          disabled: "Disabled",
        },
      },
      options: ["default", "hover", "focus", "active", "visited", "disabled"],
      description: "The state of the button controls the visual appearance.",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: "Button",
    variant: "default",
    state: "default",
  },
};

export const Hovered = {
  args: {
    label: "Button",
    variant: "default",
    state: "hover",
  },
};

export const Focused = {
  args: {
    label: "Button",
    variant: "default",
    state: "focus",
  },
};

export const Active = {
  args: {
    label: "Button",
    variant: "default",
    state: "active",
  },
};

export const Visited = {
  args: {
    label: "Button",
    variant: "default",
    state: "visited",
  },
};

export const Disabled = {
  args: {
    label: "Button",
    variant: "default",
    state: "disabled",
  },
};
