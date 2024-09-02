<docs>
---
title: 基本使用
---

这是一个虚拟列表的基本例子
</docs>

<script setup lang="ts">
import KVirtualList from "k-ui/virtual-list/virtual-list.tsx";

const data = Array.from({ length: 1000 }, (_, index) => {
  return {
    id: index + 1,
    name: `Test` + `_${index + 1}`,
  };
});

const handleClick = (item: any) => {
  console.log("item", item);
};
</script>

<template>
  <k-virtual-list :data="data" @clickItem="handleClick">
    <template #test="{ item }">
      <div class="data-item">
        {{ item.name }}
      </div>
    </template>
  </k-virtual-list>
</template>

<style scoped>
.data-item {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
