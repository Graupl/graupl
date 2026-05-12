import { defineConfig } from "vitepress";

// Get the current version from the package.json file.
import { version } from "../../package.json";
import { NodePackageImporter } from "sass-embedded";

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
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          importers: [new NodePackageImporter()],
        },
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
          { text: "Introduction", link: "/introduction" },
          { text: "Quick Start", link: "/quick-start" },
          { text: "Compiling Graupl", link: "/compiling-graupl" },
          { text: "Customizing Graupl", link: "/customizing-graupl" },
        ],
      },
      {
        text: "Base Elements",
        items: [
          { text: "Buttons", link: "/base/button" },
          { text: "Forms", link: "/base/form" },
          { text: "Links", link: "/base/link" },
          { text: "Tables", link: "/base/table" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Accordions", link: "/components/accordion" },
          { text: "Alerts", link: "/components/alert" },
          { text: "Buttons", link: "/components/button" },
          { text: "Cards", link: "/components/card" },
          { text: "Carousels", link: "/components/carousel" },
          { text: "Input Groups", link: "/components/input-group" },
          { text: "Lists", link: "/components/list" },
          { text: "Menus", link: "/components/menu" },
          { text: "Navigations", link: "/components/navigation" },
        ],
      },
      {
        text: "Layout",
        items: [
          { text: "Containers", link: "/layout/container" },
          { text: "Columns", link: "/layout/column" },
          { text: "Flex Columns", link: "/layout/flex-column" },
        ],
      },
      {
        text: "State",
        items: [{ text: "Focus", link: "/state/focus" }],
      },
      {
        text: "Theme",
        items: [
          { text: "Colors", link: "/theme/colors" },
          { text: "Typography", link: "/theme/typography" },
        ],
      },
      {
        text: "Utilities",
        items: [
          { text: "Alignment", link: "/utilities/alignment" },
          { text: "Background", link: "/utilities/background" },
          { text: "Block Size", link: "/utilities/block-size" },
          { text: "Border", link: "/utilities/border" },
          { text: "Clear", link: "/utilities/clear" },
          { text: "Color", link: "/utilities/color" },
          { text: "Container", link: "/utilities/container" },
          { text: "Display", link: "/utilities/display" },
          { text: "Flex", link: "/utilities/flex" },
          { text: "Float", link: "/utilities/float" },
          { text: "Gradient", link: "/utilities/gradient" },
          { text: "Height", link: "/utilities/height" },
          { text: "Inline Size", link: "/utilities/inline-size" },
          { text: "Inset", link: "/utilities/inset" },
          { text: "Isolation", link: "/utilities/isolation" },
          { text: "Justification", link: "/utilities/justification" },
          { text: "List", link: "/utilities/list" },
          { text: "Object", link: "/utilities/object" },
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
    ],
  },
});
