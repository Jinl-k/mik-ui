import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
import VitePluginVitepressDemo from 'vite-plugin-vitepress-demo';

const baseUrl = fileURLToPath(new URL('.', import.meta.url));
export default defineConfig({
  plugins: [
    VitePluginVitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@k-ui\/utils/,
        replacement: path.resolve(baseUrl, 'packages/utils/src'),
      },
      {
        find: /^k-ui/,
        replacement: path.resolve(baseUrl, 'packages/k-ui/src'),
      },
    ],
  },
});
