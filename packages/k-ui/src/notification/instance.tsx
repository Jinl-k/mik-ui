import type {
  NotificationConfig,
  NotificationInstance,
} from "k-ui/notification/interface.ts";
import { createVNode, render } from "vue";
import Notification from "./notification";

let instance: NotificationInstance | null = null;

export function createNotification() {
  const getInstance = (config: NotificationConfig) => {
    if (!instance) {
      const vm = createVNode(Notification, {
        onReady: (inst: NotificationInstance) => {
          instance = inst;
        },
      });
      if (config.appContext) {
        vm.appContext = config.appContext;
      }
      // 仅渲染一次
      render(vm, document.body);
    }
    return instance;
  };

  const info = (config: NotificationConfig) => {
    return new Promise<() => void>((resolve) => {
      const inst = getInstance(config);
      if (inst) {
        // 确保 add 方法只被调用一次
        resolve(inst.add(config));
      }
    });
  };

  return { info };
}
