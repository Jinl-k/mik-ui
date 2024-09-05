import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "K UI",
  description: "This is a vue component library",
  // 路径映射
  rewrites: {
    "docs/(.*)": "(.*)",
    // 'packages/k-ui/src/button/index.md': 'components/button/index.md',
    "packages/k-ui/src/:comp/(.*)": "components/:comp/(.*)",
    "packages/utils/src/(.*)": "utils/(.*)",
    "packages/icons/docs/(.*)": "components/icons/(.*)",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "介绍", link: "/introduce" },
      { text: "组件", link: "/components/" },
      { text: "工具", link: "/utils/" },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: {
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //   ],
      // },
      "/components/": [
        {
          text: "按钮",
          link: "/components/button/",
        },
        {
          text: "input",
          link: "/components/input/",
        },
        {
          text: "tooltip",
          link: "/components/tooltip/",
        },
        {
          text: "table",
          link: "/components/table/",
        },
        {
          text: "虚拟列表",
          link: "/components/virtual-list/",
        },
        {
          text: "通知",
          link: "/components/notification/",
        },
        {
          text: "图标",
          link: "/components/icons/",
        },
      ],
      "/utils/": [
        {
          text: "genClass",
          link: "/utils/gen-class",
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
