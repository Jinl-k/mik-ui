import type { App, Plugin } from 'vue';
import * as components from './components';
import pkg from '../package.json';
// 把所有组件全局注册到vue实例中
export default {
  install(app: App) {
    Object.entries(components).forEach(([_name, comp]) => {
      if (comp.install) {
        app.use(comp as never);
      }
    });
  },
  version: pkg.version,
} as Plugin;

// 1.全局导入 import k from 'k-ui'
// app.use(k)

// 2.按需导入 import { Button } from 'k-ui'
export * from './components';
