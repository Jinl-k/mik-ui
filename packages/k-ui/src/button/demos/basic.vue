<docs>
---
title: 基础使用
---

这是一个`button`的使用例子
</docs>

<script lang="ts" setup>
// import { test } from '@k-ui/utils';
// test();

// import {Button as KButton} from "k-ui";

import { ref } from "vue";

const cun = ref(1);
function handleClick(e: Event) {
  console.log(" 1111", e);
  cun.value++;
}
</script>

<template>
  <k-button @cli="handleClick">{{ cun }}</k-button>
  <k-button type="dashed">2</k-button>
  <k-button type="primary">3</k-button>
  <k-button type="primary" disabled>3</k-button>
</template>
