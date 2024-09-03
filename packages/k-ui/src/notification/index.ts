import type { App } from "vue";
import { createNotification } from "./instance";

const NoInstance = createNotification();
// console.log("no", NoInstance);
(Notification as any).install = (app: App) => {
  app.config.globalProperties.$notification = NoInstance;
};
// optionApi
// this.$notification.info({content:'test',title:'test'})
export default NoInstance;
