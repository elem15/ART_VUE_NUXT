<template>
  <div>
    <div>{{ text }}</div>
    Value
  </div>
</template>

<script setup lang="ts">
const text: Ref = ref('Hello, World!')
</script>
