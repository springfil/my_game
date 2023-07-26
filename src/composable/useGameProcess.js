import { FIELD } from "@/constants/FIELD";
import { GAME_STATUS } from "@/constants/GAME_STATUS";
import { DEFAULT_DIFFICULT } from "@/constants/DIFFICULT";
import { nextTick } from "vue";
import { GAME_SPEED } from "@/constants/GAME_SPEED";

export default function useGameProcess(fields, gameStatus, difficult, start) {
  const selectField = (id) => {
    const index = fields.value.findIndex((field) => {
      return field.id === id;
    });

    if (index > -1 && !fields.value[index].clicked) {
      fields.value[index].clicked = true;

      checkGame();
    }
  };

  const checkGame = () => {
    const errorIndex = fields.value.findIndex((field) => {
      return field.clicked && field.value === FIELD.EMPTY;
    });

    if (errorIndex > -1) {
      setGameOver();
      return;
    }
    //в поле есть заполненная ячейка и мы по ней не кликнули
    const notFoundItemIndex = fields.value.findIndex((field) => {
      return !field.clicked && field.value === FIELD.FILLED;
    });

    if (notFoundItemIndex === -1) {
      setWin();
    }
  };

  const setGameOver = () => {
    console.log("gameover");
    gameStatus.value = GAME_STATUS.FAIL;
    difficult.value = DEFAULT_DIFFICULT;
  };

  const setWin = () => {
    setTimeout(async () => {
      difficult.value += 2;
      await nextTick();
      start();
    }, GAME_SPEED);
  };

  return {
    selectField,
  };
}
