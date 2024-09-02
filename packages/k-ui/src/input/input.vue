<template>
  <div :class="cls" v-bind="omit($attrs, originInputProps)">
    <span v-if="solts.prefix" :class="customName(customNameE('prefix'))">
      <slot name="prefix" />
    </span>
    <input
      v-bind="pick($attrs, originInputProps)"
      :class="inputCls"
      ref="inputRef"
      type="text"
      v-model="inputValue"
      @input="setInputValue"
      :disabled="disabled"
      name="kinput"
    />
    <span v-if="solts.suffix" :class="customName(customNameE('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { useClassNames } from "@k-ui/utils";
// 借用lodash-es 动态分配属性
import { omit, pick } from "lodash-es";
// import { InputProps } from "k-ui/input/interface";
import { onMounted, ref } from "vue";
import { type InputProps, originInputProps } from "./interface";

defineOptions({
  name: "KInput",
  inheritAttrs: false,
});
const solts = defineSlots<{
  prefix: any;
  suffix: any;
}>();
// console.log("sol", solts);
// fixme
const inputValue = defineModel<string>("inputValue ", { required: false });
const props = defineProps<InputProps>();

const inputRef = ref<HTMLInputElement>();
onMounted(() => {
  // console.log("in", inputRef.value?.name);
});
const setInputValue = () => {
  const _input = inputRef.value;
  if (!_input || _input.value === inputValue.value) return;

  _input.value = inputValue.value ?? "";
  console.log("inde", _input?.value);
};

const { cx, customName, customNameM, customNameE } = useClassNames("input");
const cls = cx(() => {
  return {
    [customName()]: true,
    [customName(customNameM("disabled"))]: props.disabled,
    [customName(customNameM(props.size!))]: !!props.size,
  };
});

const inputCls = cx(() => {
  return {
    [customName("input")]: true,
  };
});

function focus() {
  inputRef.value?.focus();
}
function blur() {
  inputRef.value?.blur();
}
defineExpose({
  focus,
  blur,
});
</script>

<style scoped></style>
