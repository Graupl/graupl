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

    sidebar: {
      "/": [
        {
          text: "Getting Started",
          items: [{ text: "Introduction", link: "/introduction" }],
        },
        {
          text: "Advenced Topics",
          items: [{ text: "Compiling Graupl", link: "/compiling-graupl" }],
        },
      ],
    },
  },
});
