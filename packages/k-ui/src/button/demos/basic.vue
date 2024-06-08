<docs>
---
title: 基础使用
---

这是一个`button`的使用例子
</docs>

<script lang="ts" setup>
// import { test } from '@k-ui/utils';
// test();

function handleClick(e: Event) {
  console.log(" 1111", e);
}
</script>

<template>
  <k-button @cli="handleClick">1</k-button>
  <k-button type="dashed">2</k-button>
  <k-button type="primary">3</k-button>
  <k-button type="primary" disabled>3</k-button>
</template>
