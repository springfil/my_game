<template>
  <div class = "app">
    <img class="logo" src="./assets/logo.png" alt="Vue logo">
    <h1 class="h1"> Коробка удачи </h1>
  </div>    
  <game-board  />
</template>

<script setup>
import GameBoard from './components/GameBoard';

</script>

<style scoped>
  .app{
    font-family: Helvetica, sans-serif;
    text-align: center;
    margin-top: 40px;
  }

  .logo{
    width: 100px;
    animation: floatingAnimation 1.5s infinite ease-in-out alternate;
  }

  @keyframes floatingAnimation {
  from { transform: translate(0, 0); }
  to { transform: translate(0px, 10px); }
}
</style>
