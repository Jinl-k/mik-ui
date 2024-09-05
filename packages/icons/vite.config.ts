import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      outDir: ["es", "lib"],
      exclude: ["**/tests/**"],
    }),
  ],
  build: {
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: "src",
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
      entry: "src/index.ts",
    },
  },
});
