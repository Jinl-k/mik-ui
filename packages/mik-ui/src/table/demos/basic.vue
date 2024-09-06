<docs>
---
title: 基本使用
---

这是一个表格的基本例子
</docs>

<script setup lang="ts">
import { ref } from "vue";

const columns = ref([
  {
    title: "姓名",
    key: "name",
  },
  {
    title: "年龄",
    key: "age",
  },
  {
    title: "住址",
    key: "address",
  },
  {
    title: "操作",
    key: "action",
  },
]);

const data = ref(
  Array.from({ length: 10 }).map((_, index) => {
    return {
      name: `王小虎${index + 1}`,
      age: 32 + index,
      address: `上海市普陀区金沙江路 1518 弄${index + 1}`,
      action: index % 2 === 0 ? "删除" : "保存",
    };
  }),
);
</script>

<template>
  <div>
    <k-table :columns="columns" :data="data" />
    <!--    <k-table :data="data">-->
    <!--      <k-table-column title="姓名" key="name"></k-table-column>-->
    <!--      <k-table-column title="年龄" key="age"></k-table-column>-->
    <!--    </k-table>-->
  </div>
</template>
