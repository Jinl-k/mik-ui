import { useClassNames } from "@kevin-ui/utils";
import type {
  NotificationConfig,
  NotificationConfigType,
  NotificationInstance,
} from "kevin-ui/notification/interface.ts";
import { TransitionGroup, defineComponent, onMounted, ref } from "vue";

export default defineComponent<{
  onReady: (instance: NotificationInstance) => void;
}>({
  name: "KNotification",
  setup(props, { expose }) {
    const { customName } = useClassNames("notification");
    const data = ref<NotificationConfigType[]>([]);
    const index = ref(0);
    // 添加通知，并返回关闭该通知的函数
    const add = (config: NotificationConfig) => {
      const id = index.value++;
      const instance = { ...config, id };
      data.value.push(instance);
      // 定义关闭函数，用于移除当前通知
      const close = () => {
        data.value = data.value.filter((item) => item.id !== id);
      };
      // 根据配置的持续时间自动关闭
      if (config.duration) {
        setTimeout(close, config.duration);
      }
      return close; // 返回关闭函数
    };

    onMounted(() => {
      props.onReady({ add });
    });

    expose({
      add,
    });

    return () => {
      return (
        <>
          <div class={customName()}>
            <TransitionGroup name="k-slide-right">
              {data.value.map((item) => (
                <div key={item.id} class={customName("wrapper")}>
                  <div class={customName("wrapper", "title")}>{item.title}</div>
                  <div class={customName("wrapper", "content")}>
                    {item.content}
                  </div>
                </div>
              ))}
            </TransitionGroup>
          </div>
        </>
      );
      // const renderNotification = () => {
      //   const cls = {
      //     [customName("wrapper")]: true,
      //   };
      //   const titleCls = {
      //     [customName("wrapper", "title")]: true,
      //   };
      //   const contentCls = {
      //     [customName("wrapper", "content")]: true,
      //   };
      //   return data.value.map((item) => {
      //     return (
      //       <div key={item.id} class={cls}>
      //         <div class={titleCls}>{item.title}</div>
      //         <div class={contentCls}>{item.content}</div>
      //       </div>
      //     );
      //   });
      // };
    };
  },
});
