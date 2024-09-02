<docs>
---
title: 基本使用
---
这是notification的基本使用
</docs>

<template>
  <div>
    <k-button @click="notif"> 弹窗 </k-button>
  </div>
</template>
<script setup lang="ts">
import { Notification } from "k-ui";
import { getCurrentInstance, h } from "vue";
import Test from "./components/test.vue";

const instance = getCurrentInstance();

// 函数式调用
function notif() {
  Notification.info({
    title: "test",
    content: h(Test),
    appContext: instance?.appContext,
  });
}
</script>
