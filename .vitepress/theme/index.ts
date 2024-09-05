// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { AntdTheme } from "vite-plugin-vitepress-demo/theme";
// import k from 'kevin-ui';
import "kevin-ui/style";
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    app.component("Demo", AntdTheme);
    // app.use(k);
    // ...
  },
} satisfies Theme;
