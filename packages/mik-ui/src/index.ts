import type { App, Plugin } from "vue";
import pkg from "../package.json";
import * as components from "./components";
// 把所有组件全局注册到vue实例中
export default {
  install(app: App) {
    for (const [_name, comp] of Object.entries(components)) {
      // console.log('com',comp)
      if ((comp as any).install) {
        app.use(comp as never);
      }
    }
    // Object.entries(components).forEach(([_name, comp]) => {
    //   if (comp.install) {
    //     app.use(comp as never);
    //   }
    // });
  },
  version: pkg.version,
} as Plugin;

// 1.全局导入 import k from 'mik-ui'
// app.use(k)

// 2.按需导入 import { Button } from 'mik-ui'
export * from "./components";
