import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Summer of Discovery",
  description: "A journey of exploration, learning, and sunshine ☀️",

  // 👇 This line is essential for GitHub Pages
  base: "/summer-of-discovery/",

  themeConfig: {
    siteTitle: "Summer of Discovery",
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/posts/hello-world" },
      { text: "About", link: "/about" },
    ],
    footer: {
      message: "Built with ❤️ using VitePress and GitHub Pages",
      copyright: "© 2025 Summer of Discovery",
    },
  },
});
