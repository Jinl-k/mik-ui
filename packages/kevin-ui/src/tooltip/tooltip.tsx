import { type Placement, offset, useFloating } from "@floating-ui/vue";
import { useClassNames } from "@kevin-ui/utils";
import { filterEmpty, isBaseType } from "@v-c/utils";
import {
  type PropType,
  type VNode,
  computed,
  createVNode,
  defineComponent,
} from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "KTooltip",
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: "bottom-center",
    },
    content: {
      type: String as PropType<string>,
    },
    trigger: {
      type: String as PropType<"hover" | "click">,
      default: "hover",
    },
  },
  setup(props, { slots }) {
    const reference = ref(null);
    const floating = ref(null);
    // 保证响应式
    const placement = computed(() => props.placement);
    const { customName } = useClassNames("tooltip");
    const { floatingStyles } = useFloating(reference, floating, {
      placement,
      middleware: [offset(4)],
    });

    let timer: ReturnType<typeof setTimeout> | undefined;
    const show = ref(false);
    const handleMouseEnter = () => {
      if (props.trigger !== "hover") {
        return;
      }
      show.value = true;
    };
    const handleClick = () => {
      if (props.trigger !== "click") return;
      show.value = true;
    };
    const handleMouseLeave = () => {
      // 加一个延迟消失，可以选中tooltip
      timer = setTimeout(() => {
        show.value = false;
      }, 150);
    };
    // console.log(slots.content?.());

    // 数据发生变化时自动重新渲染
    return () => {
      const renderTooltip = () => {
        if (!reference.value) {
          return null;
        }
        if (!show.value) {
          return null;
        }
        const cls = {
          [customName()]: true,
        };

        const events = {
          onmouseenter: () => {
            if (timer) {
              clearTimeout(timer);
            }
            timer = undefined;
          },
          onmouseleave: () => {
            show.value = false;
          },
        };
        return (
          <div
            {...events}
            class={cls}
            ref={floating}
            style={floatingStyles.value}
          >
            {slots.content ? slots.content?.()[0] : props.content}
          </div>
        );
      };

      const children = filterEmpty(slots.default?.());
      if (children && children.length < 1) {
        return null;
      }
      if (children.length > 1) {
        console.warn("Tooltip can only have one child");
        return children;
      }

      const node = children[0];
      if (isBaseType(node)) {
        console.warn("Tooltip must have a child component");
        return node;
      }

      const events = {
        onmouseenter: handleMouseEnter,
        onmouseleave: handleMouseLeave,
        onClick: handleClick,
      };
      const tipNode = createVNode(node as VNode, {
        ref: reference,
        ...events,
      });

      return (
        <>
          {tipNode}
          {renderTooltip()}
        </>
      );
    };
  },
});
