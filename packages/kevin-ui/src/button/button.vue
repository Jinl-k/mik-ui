<script lang="ts">
import { useClassNames } from "@kevin-ui/utils";
import { type PropType, defineComponent } from "vue";
export default defineComponent({
  name: "KButton",
  emits: ["cli"],
  props: {
    type: {
      type: String as PropType<"default" | "primary" | "dashed">,
      default: "default",
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<"small" | "large" | "default">,
      default: "default",
    },
  },

  setup(props, { emit }) {
    const handleClick = (e: Event) => {
      emit("cli", e);
    };
    const { customName, cx, customNameM } = useClassNames("button");
    const cls = cx(() => {
      return {
        [customName()]: true,
        [customName(customNameM(props.type))]: true,
        [customName("size", customNameM(props.size))]: true,
      };
    });
    return {
      handleClick,
      cls,
    };
  },
});
</script>

<template>
  <button :class="cls" @click="handleClick" :disabled="disabled">
    <slot />
  </button>
</template>
