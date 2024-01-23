<script setup lang="ts">
import { ref } from 'vue'
const number = ref<number>(100)
console.log(number, 99999)
</script>

<template>
  <main>
    <a-button type="primary">Primary Button1</a-button>
  </main>
</template>
