<docs>
---
title: 基础使用
---

这是一个`input`的使用例子
</docs>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const input = ref('');
const inputRef = ref();

onMounted(() => {
  inputRef.value.focus();
});
</script>

<template>
  <!-- <k-input /> -->
  <k-input ref="inputRef" test autocomplete="off" v-model:inputValue="input" />

  <k-input size="large" v-model:inputValue="input">
    <template #prefix>A</template>
    <template #suffix>B</template>
  </k-input>
  <!-- <k-input size="small" v-model:modalValue="input" /> -->
</template>
