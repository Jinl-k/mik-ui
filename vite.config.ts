import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
// import vue from '@vitejs/plugin-vue';
import VitePluginVitepressDemo from "vite-plugin-vitepress-demo";
import vueJsx from "@vitejs/plugin-vue-jsx";
import tsxResolveTypes from "vite-plugin-tsx-resolve-types";

const baseUrl = fileURLToPath(new URL(".", import.meta.url));
export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    VitePluginVitepressDemo({
      glob: ["**/demos/*.vue"],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@k-ui\/utils/,
        replacement: path.resolve(baseUrl, "packages/utils/src"),
      },
      {
        find: /^k-ui/,
        replacement: path.resolve(baseUrl, "packages/k-ui/src"),
      },
    ],
  },
});
