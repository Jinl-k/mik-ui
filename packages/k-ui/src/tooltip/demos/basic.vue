<docs>
---
title: 基础使用
---

这是一个`tooltip`基础使用的例子
</docs>

<script setup lang="ts"></script>

<template>
  <div>
    <kTooltip placement="top" content="test" trigger="click">
      <k-button>111</k-button>
      <template #content>
        <span style="color: red"> 插槽测试内容 </span>
      </template>
    </kTooltip>
  </div>
</template>
