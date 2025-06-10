import { defineConfig } from "vitepress";

// Get the current version from the package.json file.
import { version } from "../../package.json";

export default defineConfig({
  lang: "en-US",
  title: "Graupl",
  description: "A modular and modern CSS framework.",
  vite: {
    server: {
      host: "0.0.0.0",
      hmr: {
        host: "localhost",
      },
    },
  },
  markdown: {
    toc: {
      level: [1, 2, 3],
    },
  },
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "Docs",
        link: "/introduction",
      },
      {
        text: version,
        items: [
          {
            text: "Current release",
            link: `https://github.com/Graupl/graupl/releases/tag/v${version}`,
          },
          {
            text: "Changelog",
            link: "https://github.com/Graupl/graupl/blob/1.x/CHANGELOG.md",
          },
          {
            text: "Contributing",
            link: "https://github.com/Graupl/graupl/blob/1.x/.github/CONTRIBUTING.md",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Graupl/graupl" }],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Compiling Graupl", link: "/compiling-graupl" },
          { text: "Introduction", link: "/introduction" },
        ],
      },
      {
        text: "Base Elements",
        items: [{ text: "Buttons", link: "base/buttons" }],
      },
      {
        text: "Layout & Content",
        items: [
          { text: "Layout", link: "/layout" },
          { text: "Content", link: "/content" },
          { text: "Forms", link: "/forms" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Alert", link: "/components/alert" },
          { text: "Button", link: "/components/button" },
          { text: "Card", link: "/components/card" },
          { text: "Input Group", link: "/components/inputgroup" },
          { text: "Menu", link: "/components/menu" },
          { text: "Navigation", link: "/components/navigation" },
        ],
      },
      {
        text: "Utilities",
        items: [
          { text: "Alignment", link: "/utilities/alignment" },
          { text: "Background", link: "/utilities/background" },
          { text: "Border", link: "/utilities/border" },
          { text: "Color", link: "/utilities/color" },
          { text: "Container", link: "/utilities/container" },
          { text: "Display", link: "/utilities/display" },
          { text: "Flex", link: "/utilities/flex" },
          { text: "Gradient", link: "/utilities/gradient" },
          { text: "Height", link: "/utilities/height" },
          { text: "Inset", link: "/utilities/inset" },
          { text: "Justification", link: "/utilities/justification" },
          { text: "List", link: "/utilities/list" },
          { text: "Order", link: "/utilities/order" },
          { text: "Position", link: "/utilities/position" },
          { text: "Ratio", link: "/utilities/ratio" },
          { text: "Spacing", link: "/utilities/spacing" },
          { text: "Typography", link: "/utilities/typography" },
          { text: "Visibility", link: "/utilities/visibility" },
          { text: "Visually-hidden", link: "/utilities/visually-hidden" },
          { text: "Width", link: "/utilities/width" },
          { text: "Z-index", link: "/utilities/z-index" },
        ],
      },
      {
        text: "Advanced Topics",
        items: [
          { text: "Utilities", link: "/utilities" },
          { text: "Functions", link: "/functions" },
          { text: "Mixins", link: "/mixins" },
          { text: "State", link: "/state" },
          { text: "Theme", link: "/theme" },
          { text: "Defaults", link: "/defaults" },
        ],
      },
    ],
  },
});
