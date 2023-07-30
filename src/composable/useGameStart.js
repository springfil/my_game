import { FIELD } from "@/constants/FIELD";
import { GAME_STATUS } from "@/constants/GAME_STATUS";
import { GAME_SPEED } from "@/constants/GAME_SPEED";
import { computed } from "vue";
import { getRandom } from "@/utils/getRandom";

export default function useGameStart(
  init,
  fields,
  difficult,
  numberOfCells,
  gameStatus,
  updateData
) {
  let timerId = null;

  const start = () => {
    updateData();
    init();
    prepareGame();
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

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      gameStatus.value = GAME_STATUS.STARTED;
    }, GAME_SPEED);
  };

  const canStartGame = computed(() => {
    return (
      gameStatus.value !== GAME_STATUS.PREVIEW &&
      gameStatus.value !== GAME_STATUS.NEXT
    );
  });

  return {
    start,
    canStartGame,
  };
}
