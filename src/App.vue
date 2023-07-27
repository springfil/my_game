<script setup>
import GameBoard from "./components/GameBoard";
import GamePerson from "./components/GamePerson";
import { provide, ref } from 'vue';


const data = ref(2);

provide('data', data);
</script>

<template>
  <div class="container">
    <div class="left-column">
      <game-person />
    </div>
    <div class="center-column">
      <div class="app">
        <img class="logo" src="./assets/logo.png" alt="Vue logo" />
        <h1 class="h1">Коробка удачи</h1>
        <game-board />
      </div>
    </div>
    <div class="right-column">
      <game-person />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.left-column,
.right-column {
  flex: 1;
}

.center-column {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  margin-top: 40px;
}

.logo {
  width: 100px;
  animation: floatingAnimation 1.5s infinite ease-in-out alternate;
}

@keyframes floatingAnimation {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0px, 10px);
  }
}
</style>