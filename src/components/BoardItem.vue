<template>
  <img :class="boardItemClasses" @click="select(field.id)" />
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";
import { GAME_STATUS } from "../constants/GAME_STATUS";
import { FIELD } from "../constants/FIELD";

const props = defineProps({
  field: {
    type: Object,
    required: true,
  },
  gameStatus: {
    type: Number,
    required: false,
    default: GAME_STATUS.NONE,
  },
});

const emit = defineEmits(["selectField"]);

const boardItemClasses = computed(() => {
  let classes = "item ";

  if (
    (props.field.value === FIELD.FILLED &&
      props.gameStatus === GAME_STATUS.PREVIEW) ||
    (props.field.clicked && props.field.value === FIELD.FILLED)
  ) {
    classes += "active";
  }

  if (props.field.clicked && props.field.value === FIELD.EMPTY) {
    classes += " error";
  }

  return classes;
});

const select = (id) => {
  if (props.gameStatus === GAME_STATUS.STARTED) {
    emit("selectField", id);
  }
};
</script>

<style scoped>
.item {
  position: relative;
  width: 60px;
  height: 60px;

  background: url("../assets/logo.png");
  background-size: cover;
  background-position: center;

  display: inline-block;
  border: none;
  border-radius: 15px;
  margin: 5px;
  cursor: pointer;

  transition: 0.9s;
  transform-style: preserve-3d;
}

.item.active {
  background: url("https://pictures.pibig.info/uploads/posts/2023-04/1680522788_pictures-pibig-info-p-nezuko-risunki-vkontakte-26.jpg");
  background-size: cover;
  background-position: center;
  transform: rotateX(720deg);
}

.item.error {
  background: url("https://www.freepngimg.com/thumb/trollface/98161-picture-trollface-free-hd-image.png");
  background-size: cover;
  background-position: center;
  transform: rotateX(720deg);
}
</style>
