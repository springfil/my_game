import { ref } from "vue";

export default function useGameStart(init, fields, difficult, numberOfCells) {
  const preview = ref(false);

  const start = () => {
    init();
    prepareGame();
  };

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const prepareGame = () => {
    preview.value = true;

    for (let i = 0; i < difficult.value; ) {
      const index = getRandom(0, numberOfCells - 1);

      if (fields.value[index].value === 1) {
        continue;
      }

      fields.value[index].value = 1;
      i++;
    }
    setTimeout(() => {
      preview.value = false;
    }, 2000);
  };

  return {
    start,
    preview,
  };
}
