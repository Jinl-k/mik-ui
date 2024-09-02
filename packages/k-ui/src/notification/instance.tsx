import type {
  NotificationConfig,
  NotificationInstance,
} from "k-ui/notification/interface.ts";
import { createVNode } from "vue";
import { render } from "vue";
import Notification from "./notification";

export function createNotification() {
  let instance: NotificationInstance;
  const info = (config: NotificationConfig) => {
    if (!instance) {
      // console.log("1");
      const body = document.body;
      // 创建虚拟节点
      const vm = createVNode(Notification, {
        onReady: (_instance: NotificationInstance) => {
          instance = _instance;
          instance.add(config);
        },
      });
      if (config.appContext) {
        vm.appContext = config.appContext;
      }
      render(vm, body);
    } else {
      instance.add(config);
    }
  };

  return {
    info,
  };
}
