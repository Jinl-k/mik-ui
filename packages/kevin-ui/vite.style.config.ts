import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import fs from "fs-extra";

export default defineConfig({
  build: {
    // 关闭默认清空文件
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => "kevin-ui.css",
      },
    },
    lib: {
      entry: "src/style.ts",
      formats: ["es"],
      fileName: () => "kevin-ui-style.js",
    },
  },
  plugins: [
    {
      name: "remove:kevin-ui-style.js",
      // 删除多余的文件
      closeBundle() {
        const kPath = fileURLToPath(new URL("./dist", import.meta.url));
        const styleFilePath = path.resolve(kPath, "kevin-ui-style.js");
        fs.removeSync(styleFilePath);
      },
    },
  ],
});
