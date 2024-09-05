import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import tsxResolveTypes from "vite-plugin-tsx-resolve-types";
import { vitepressDemo } from "vite-plugin-vitepress-demo";
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
  ],
  build: {
    target: "es6",
  },
  resolve: {
    alias,
  },
});
