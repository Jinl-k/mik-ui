<script lang="ts" setup>
  import { ref } from 'vue';
  import { useClassNames } from '../gen-class';
  const { customName, customNameE } = useClassNames('button');
  const testRef = ref(false);
  function handleClick() {
    testRef.value = !testRef.value;
  }
</script>

<template>
  <div :class="customName('primary')">
    {{ customName('a', 'b', customNameE('primary')) }}
    <button @click="handleClick()">按钮</button>
  </div>
</template>
