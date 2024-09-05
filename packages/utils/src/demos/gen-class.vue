<script lang="ts" setup>
import { useClassNames } from "@kevin-ui/utils";
import { ref } from "vue";
const { customName, customNameE } = useClassNames("button");
const testRef = ref(false);
function handleClick() {
  testRef.value = !testRef.value;
}
</script>

<template>
  <div :class="customName('primary')">
    {{ customName("a", "b", customNameE("primary")) }}
    <button @click="handleClick()">按钮</button>
  </div>
</template>
