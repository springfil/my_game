
import { FIELD } from "@/constants/FIELD";
import { GAME_STATUS } from "@/constants/GAME_STATUS";
import { GAME_SPEED } from "@/constants/GAME_SPEED";
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
    }, GAME_SPEED);
  };

  const canStartGame = computed(() => {
    return gameStatus.value !== GAME_STATUS.PREVIEW;
  })

  return {
    start,
    canStartGame,
  };
}
