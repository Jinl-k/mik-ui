import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'K UI',
  description: 'This is a vue component library',
  // 路径映射
  rewrites: {
    'docs/(.*)': '(.*)',
    // 'packages/k-ui/src/button/index.md': 'components/button/index.md',
    'packages/k-ui/src/:comp/(.*)': 'components/:comp/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
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
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/index',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
