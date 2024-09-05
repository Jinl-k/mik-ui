import type { ComponentResolver } from "unplugin-vue-components/types";

// 按需加载
export function kUIResolver(): ComponentResolver {
  return {
    type: "component",
    resolve(name) {
      if (name.startsWith("K")) {
        return {
          name: name.slice(1),
          from: "mik-ui",
        };
      }
    },
  };
}
