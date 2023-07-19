<script setup>
import BoardItem from "./BoardItem";
import useGameInit from "./composable/useGameInit";
import useGameStart from "./composable/useGameStart";

const number = 36;

const { difficult, fields, init } = useGameInit(number);

const { start, preview } = useGameStart(init, fields, difficult, number);


</script>

<template>
  <div class="board-wrapper">
    <div class="board">
      <board-item
         :preview="preview"
        v-for="field in fields"
        :key="'item-' + field.id"
        :field="field"
      />
    </div>
{{ preview }}
    <p class="difficult">
      Сложность : <strong>{{ difficult }}</strong>
    </p>
    <div class="button-cont">
      <button class="btn" @click="start">Старт</button>
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
  margin: 10px 0;
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
