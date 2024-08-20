import { defineConfig } from "vitepress";

// Get the current version from the package.json file.
import { version } from "../../package.json";

export default defineConfig({
  lang: "en-US",
  title: "Graupl",
  description: "A modular and modern CSS framework.",
  base: "/graupl/",
  themeConfig: {
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
