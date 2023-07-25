
import { FIELD } from "@/constants/FIELD";
import { GAME_STATUS } from "@/constants/GAME_STATUS";
import { computed } from 'vue'

export default function useGameStart(init, fields, difficult, numberOfCells, gameStatus) {
 

  const start = () => {
    init();
    prepareGame();
  };

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const prepareGame = () => {
 
    gameStatus.value = GAME_STATUS.PREVIEW;

    for (let i = 0; i < difficult.value; ) {
      const index = getRandom(0, numberOfCells - 1);

      if (fields.value[index].value === FIELD.FILLED) {
        continue;
      }

      fields.value[index].value = FIELD.FILLED;
      i++;
    }
    setTimeout(() => {
      
      gameStatus.value = GAME_STATUS.STARTED;
    }, 2000);
  };

  const canStartGame = computed(() => {
    return gameStatus.value !== GAME_STATUS.PREVIEW;
  })

  return {
    start,
    canStartGame,
  };
}
