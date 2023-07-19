<template>
  <div class = "app">
    <img class="logo" src="./assets/logo.png" alt="Vue logo">
    <h1 class="h1"> Доска судьбы </h1>
    <p> call to action (description) || ' ' </p>
  </div>
    
  <game-board />
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
  }
</style>
