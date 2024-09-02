import type { App } from "vue";
import { createNotification } from "./instance";

const instance = createNotification();
(instance as any).install = (app: App) => {
  app.config.globalProperties.$notification = instance;
  // optionApi
  // this.$notification.info({content:'test',title:'test'})
};

export default instance;
