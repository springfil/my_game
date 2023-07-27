import { ref, onBeforeMount, watch } from "vue";
import { FIELD } from "@/constants/FIELD";
import { DEFAULT_DIFFICULT, MAX_DIFFICULT } from "@/constants/DIFFICULT";

export default function useGameInit(numberOfCells) {
  const difficult = ref(DEFAULT_DIFFICULT);
  const fields = ref([]);

  const init = () => {
    fields.value = [];

    for (let i = 0; i < numberOfCells; i++) {
      fields.value.push({
        id: i,
        clicked: false,
        value: FIELD.EMPTY,
      });
    }
  };

  watch(difficult, (newDifficult) => {
    if (newDifficult > MAX_DIFFICULT) {
      difficult.value = MAX_DIFFICULT;
    }
  });
console.log(difficult)
  onBeforeMount(init);

  return {
    difficult,
    fields,
    init,
  };
}
