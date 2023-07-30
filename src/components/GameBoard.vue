<script setup>
import { ref, inject } from "vue";
import BoardItem from "@/components/BoardItem.vue";
import useGameInit from "@/composable/useGameInit";
import useGameStart from "@/composable/useGameStart";
import useGameProcess from "@/composable/useGameProcess";
import { GAME_STATUS } from "@/constants/GAME_STATUS";

const data = inject("data");

const updateData = () => {
  data.value = difficult.value;
};

const numberOfCells = 25;
const gameStatus = ref(GAME_STATUS.NONE);

const { difficult, fields, init } = useGameInit(numberOfCells);

const { start, canStartGame } = useGameStart(
  init,
  fields,
  difficult,
  numberOfCells,
  gameStatus,
  updateData
);

const { selectField, isNext, isReset } = useGameProcess(
  fields,
  gameStatus,
  difficult,
  start
);
</script>

<template>
  <div class="test">
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
        Множитель атаки <strong>X*{{ difficult }}</strong>
      </p>
      <p class="next" v-if="isNext">УСИЛЕНИЕ</p>
      <p class="reset" v-if="isReset">Попробуй снова</p>

      <button class="btn" @click="start" :disabled="!canStartGame">
        Старт
      </button>
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
  width: 350px;
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
