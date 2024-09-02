import { useClassNames } from "@k-ui/utils";
import type {
  NotificationConfig,
  NotificationConfigType,
  NotificationInstance,
} from "k-ui/notification/interface.ts";
import { TransitionGroup, defineComponent, onMounted, ref } from "vue";

export default defineComponent<{
  onReady: (instance: NotificationInstance) => void;
}>({
  name: "KNotification",
  setup(props, { expose }) {
    const data = ref<NotificationConfigType[]>([]);
    const index = 0;
    const add = (config: NotificationConfig) => {
      const instance: NotificationConfigType = {
        ...config,
        id: index,
      };

      const close = () => {
        const index = data.value.findIndex((item) => item.id === instance.id);
        if (index !== -1) {
          data.value.splice(index, 1);
        }
        if (instance.timer) {
          clearTimeout(instance.timer);
        }
      };
      if (instance.duration !== 0) {
        instance.timer = setTimeout(() => {
          close();
        }, instance.duration ?? 3000);
      }
      data.value.push(instance);
      return close;
    };

    const { customName } = useClassNames("notification");
    const notificationCls = {
      [customName()]: true,
    };

    onMounted(() => {
      props.onReady({ add });
    });

    // expose({
    //   add,
    // });

    return () => {
      const renderNotification = () => {
        const cls = {
          [customName("wrapper")]: true,
        };
        const titleCls = {
          [customName("wrapper", "title")]: true,
        };
        const contentCls = {
          [customName("wrapper", "content")]: true,
        };
        return data.value.map((item) => {
          return (
            <div key={item.id} class={cls}>
              <div class={titleCls}>{item.title}</div>
              <div class={contentCls}>{item.content}</div>
            </div>
          );
        });
      };
      return (
        <>
          <div class={notificationCls}>
            <TransitionGroup name="k-slide-right" tag="div">
              {renderNotification()}
            </TransitionGroup>
          </div>
        </>
      );
    };
  },
});
