<script setup>
import BoardItem from "./BoardItem";
import { ref, onBeforeMount } from "vue";

const difficult = ref('Легкая');
let fields = ref([]);
const number = 36;

const init = () => {
  fields.value = [];

  for (let i = 0; i < number; i++){
    fields.value.push({
      id: i,
      clicked: false,
      value: 0
    });
  }
};

onBeforeMount(init);

const start = () => {
  init();
  prepareGame();
};

const prepareGame = () => {

};

</script>

<template>
    <div class="board-wrapper">
        <div class="board">
          <board-item v-for="field in fields" :key="'item-' + field.id" />
        </div>
        
        <p class="difficult"> Сложность : <strong>{{ difficult }}</strong></p>
        <button class="btn" @click="start"> Старт </button>
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
  border-radius: 10px ;
}

.btn{
    background: #2d3741;
    color: white;
    border: none;
    border-radius: 10px ;
    padding: 10px 30px;
    margin: 10px 0;
    cursor: pointer;
    outline: none;
}

.btn:hover {
    background: #c0392b;
}
</style>
