<script setup>
import { defineProps } from "vue";

defineProps(["progressBarWidth"]);
</script>

<template>
  <div class="progress-bar-frame">
    <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
  </div>
</template>

<style scoped>
.progress-bar-frame {
  border: 5px solid black;
  border-radius: 15px;
  height: 20px;
  margin-top: 10px;
  width: 360px;
}

.progress-bar {
  height: 100%;
  background-color: #c0392b;
}
</style>
