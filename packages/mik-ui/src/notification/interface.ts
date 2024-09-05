import type { VNode } from "vue";
export interface NotificationConfig {
  content: string | VNode;
  title: string | VNode;
  duration?: number;
  /*当前实例信息*/
  appContext: any;
}

export interface NotificationConfigType extends NotificationConfig {
  id: number;
  timer?: ReturnType<typeof setTimeout>;
}

export interface NotificationInstance {
  add: (config: NotificationConfig) => () => void;
}
