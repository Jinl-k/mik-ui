import { useClassNames } from "@kevin-ui/utils";
import type { CSSProperties } from "vue";
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "KVirtualList",
  props: {
    height: {
      type: Number,
      default: 300,
    },
    itemHeight: {
      type: Number,
      default: 40,
    },
    data: {
      type: Array,
      default: () => [],
    },
    // 缓冲区数量
    buffer: {
      type: Number,
      default: 5,
    },
  },
  emits: ["clickItem"],
  setup(props, { emit }) {
    const { customName } = useClassNames("virtual-list");

    const handleItemClick = (item: any) => {
      emit("clickItem", item);
    };
    const containerRef = ref<HTMLElement | null>(null);
    const scrollTop = ref(0);
    // 发生滚动时,重新获取顶部高度
    const onScroll = () => {
      scrollTop.value = containerRef.value?.scrollTop || 0;
      console.log("sc", scrollTop.value);
    };
    onMounted(() => {
      if (containerRef.value)
        // 添加滚动监听事件
        containerRef.value.addEventListener("scroll", onScroll);
    });
    onUnmounted(() => {
      if (containerRef.value)
        containerRef.value.removeEventListener("scroll", onScroll);
    });

    const containerHeight = computed(() => {
      if (containerRef.value) return containerRef.value.clientHeight;
      return props.height;
    });

    const sliceItems = computed(() => {
      const itemHeight = props.itemHeight;
      const buffer = props.buffer;
      // 当前可视区能显示多少个item,向上取整保留一些冗余
      const showCounter = Math.ceil(containerHeight.value / itemHeight);
      const counterIndex = Math.floor(scrollTop.value / itemHeight) - buffer;
      const startIndex = Math.max(0, counterIndex);
      const endIndex = showCounter + buffer * 2 + counterIndex;
      return props.data.slice(startIndex, endIndex).map((item, index) => {
        return {
          item,
          top: (index + startIndex) * itemHeight,
          key: `VirtualList${startIndex + index}`,
        };
      });
    });
    return {
      customName,
      containerRef,
      sliceItems,
      handleItemClick,
    };
  },
  // 相当于将数据与渲染逻辑进行拆分
  // 每次数据发生变化时,render都会重新执行
  render() {
    const slots = this.$slots;

    const {
      customName,
      height,
      data,
      itemHeight,
      sliceItems,
      handleItemClick,
    } = this;

    const containerCls = {
      [customName()]: true,
    };
    const containerStyle: CSSProperties = {
      height: `${height}px`,
    };

    // body高度
    const bodyH = data.length * itemHeight;
    const bodyCls = {
      [customName("body")]: true,
    };
    const bodyStyle: CSSProperties = {
      height: `${bodyH}px`,
    };

    const renderItems = () => {
      const height = itemHeight ?? 40;
      const itemCls = {
        [customName("item")]: true,
      };

      // console.log(sliceItems, "sliceItems");

      return sliceItems.map((item) => {
        const itemStyle: CSSProperties = {
          height: `${height}px`,
          top: `${item.top}px`,
        };
        const onClick = () => {
          handleItemClick(item.item);
        };
        return (
          <div
            class={itemCls}
            style={itemStyle}
            key={item.key}
            onClick={onClick}
          >
            {slots.test && slots.test({ item: item.item })}
          </div>
        );
      });
    };

    return (
      <div class={containerCls} ref="containerRef" style={containerStyle}>
        <div class={bodyCls} style={bodyStyle}>
          {renderItems()}
        </div>
      </div>
    );
  },
});
