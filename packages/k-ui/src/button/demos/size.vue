<docs>
---
title: size
---

这是一个`button`的使用例子
</docs>

<script lang="ts" setup>
// import { test } from '@k-ui/utils';
// test();

import KButton from "k-ui/button/button.vue";

function handleClick(e: Event) {
  console.log(" 1111", e);
}
</script>

<template>
  <k-button @cli="handleClick" size="small">小</k-button>
  <k-button @cli="handleClick">默认</k-button>
  <k-button type="dashed" size="large">大</k-button>
</template>
