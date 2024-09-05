import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import tsxResolveTypes from "vite-plugin-tsx-resolve-types";
import { vitepressDemo } from "vite-plugin-vitepress-demo";
import { kUIResolver } from "./scripts/k-ui-resolver";
import Component from "unplugin-vue-components/vite";

import alias from "./alias";

// import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vitepressDemo({
      glob: ["**/demos/*.vue"],
    }),
    Component({
      resolvers: [kUIResolver()],
    }),
  ],
  build: {
    target: "es6",
  },
  resolve: {
    alias,
  },
});
