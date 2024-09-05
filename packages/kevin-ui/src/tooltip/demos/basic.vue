<docs>
---
title: 基础使用
---

这是一个`tooltip`基础使用的例子
</docs>

<script setup lang="ts">
import KTooltip from "kevin-ui/tooltip/tooltip.tsx";
</script>

<template>
  <div>
    <k-tooltip placement="top" content="test" trigger="hover">
      <k-button>111</k-button>
      <template #content>
        <span style="color: red"> 插槽测试内容 </span>
      </template>
    </k-tooltip>
  </div>
</template>
