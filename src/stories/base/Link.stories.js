import { createLink } from "./Link";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Base/Link",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createLink({ label, ...args });
  },
  argTypes: {
    label: { control: "text" },
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
      description: "The state of the link controls the visual appearance.",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: "Link",
    state: "default",
  },
};

export const Hovered = {
  args: {
    label: "Link",
    state: "hover",
  },
};

export const Focused = {
  args: {
    label: "Link",
    state: "focus",
  },
};

export const Active = {
  args: {
    label: "Link",
    state: "active",
  },
};

export const Visited = {
  args: {
    label: "Link",
    state: "visited",
  },
};

export const Disabled = {
  args: {
    label: "Link",
    state: "disabled",
  },
};
