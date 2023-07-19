<template>
  <span :class="['item', (field.value === 1 && preview) ? 'item-active' : '']"></span>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  field: {
    type: Object,
    required: true,
  },
  preview: {
    type: Boolean,
    required: true,
    default: false,
  }
});
</script>

<style scoped>
.item {
  position: relative;
  width: 50px;
  height: 50px;

  background: url("../assets/logo.png");
  background-size: cover;
  background-position: center;

  display: inline-block;
  border: none;
  border-radius: 15px;
  margin: 5px;
  cursor: pointer;

  transition: 2s;
  transform-style: preserve-3d;
}

.item-active {
  background: url("https://pictures.pibig.info/uploads/posts/2023-04/1680522788_pictures-pibig-info-p-nezuko-risunki-vkontakte-26.jpg");
  background-size: cover;
  background-position: center;
  transform: rotateX(720deg);
}
</style>
