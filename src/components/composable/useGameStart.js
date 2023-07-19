import { ref } from "vue"

export default function useGameStart(init, fields, difficult, number) {
    const preview = ref(false)

  const start = () => {
    init();
    prepareGame();
  };

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const prepareGame = () => {
    preview.value = true;

    for (let i = 0; i < difficult.value; i++) {
      const index = getRandom(0, number - 1);

      if (fields.value[index].value !== 1) {
        fields.value[index].value = 1;
      } else {
        i--;
      }
    }
  };

  setTimeout(() => {
    preview.value = false
  }, 2000);

  return {
    start,
    preview
  };
}
