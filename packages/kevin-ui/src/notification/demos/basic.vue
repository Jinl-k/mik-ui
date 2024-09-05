<docs>
---
title: 基本使用
---
这是notification的基本使用
</docs>

<template>
  <div>
    <k-button @click="showNotification" style="margin-right: 10px"
      >显示通知</k-button
    >
    <k-button @click="closeNotification">关闭通知</k-button>
  </div>
</template>

<script setup lang="ts">
import { Notification } from "kevin-ui";
import { getCurrentInstance, h } from "vue";
import Test from "./components/test.vue";

const instance = getCurrentInstance();
// 保存所有通知的关闭函数
const closeFns: (() => void)[] = [];

// 显示通知并保存关闭函数
async function showNotification() {
  const closeFn = await Notification.info({
    title: "Test Notification",
    content: h(Test),
    appContext: instance?.appContext,
    // duration:1000
  });
  closeFns.push(closeFn); // 保存每个通知的关闭函数
}

// 手动关闭最近的通知
function closeNotification() {
  const closeFn = closeFns.pop(); // 取出并关闭最近的通知
  if (closeFn) {
    closeFn(); // 调用关闭函数
  }
}
</script>
