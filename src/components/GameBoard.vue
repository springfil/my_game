<script setup>
import { ref } from "vue";
import BoardItem from "./BoardItem";
import useGameInit from "../composable/useGameInit";
import useGameStart from "../composable/useGameStart";
import useGameProcess from "../composable/useGameProcess";
import { GAME_STATUS } from "../constants/GAME_STATUS";

const numberOfCells = 30;
const gameStatus = ref(GAME_STATUS.NONE);

const { difficult, fields, init } = useGameInit(numberOfCells);

const { start,canStartGame } = useGameStart(
  init,
  fields,
  difficult,
  numberOfCells,
  gameStatus
);

const { selectField } = useGameProcess(fields);
</script>

<template>
  <div class="board-wrapper">
    <div class="board">
      <board-item
        :game-status="gameStatus"
        v-for="field in fields"
        :key="'item-' + field.id"
        :field="field"
        @selectField="selectField($event)"
      />
    </div>

    <p class="difficult">
      Сложность : <strong>{{ difficult }}</strong>
    </p>
    <div class="button-cont">
      <button class="btn" @click="start" :disabled="!canStartGame">Старт</button>
      <button class="btn" @click="difficult++">+</button>
    </div>
  </div>
</template>

<style scoped>
.board-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.board {
  width: 360px;
  background: #eee;
  border: none;
  border-radius: 10px;
}

.btn {
  background: #2d3741;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  margin: 10px 5px;
  cursor: pointer;
  outline: none;
}

.btn:hover {
  background: #c0392b;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
</style>
