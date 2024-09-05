import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
// 生成类型提示
import dts from "vite-plugin-dts";
import tsxResolveTypes from "vite-plugin-tsx-resolve-types";

export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    vue(),
    dts({
      entryRoot: "src",
      outDir: ["es", "lib"],
      exclude: ["**/tests/**"],
    }),
  ],
  build: {
    rollupOptions: {
      // 外部依赖c
      external: [
        "@floating-ui/vue",
        "vue",
        "@v-c/utils",
        "lodash-es",
        "@k-ui/utils",
        "@k-ui/icons",
      ],
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: "src",
          // 名称保持原样
          entryFileNames: "[name].js",
          format: "esm",
          dir: "es",
        },
        {
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].js",
          exports: "named",
          format: "cjs",
          dir: "lib",
        },
      ],
    },
    lib: {
      // 入口文件
      entry: "src/index.ts",
    },
  },
});
