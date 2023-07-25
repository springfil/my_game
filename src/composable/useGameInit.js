import { ref, onBeforeMount } from "vue";
import { FIELD } from "@/constants/FIELD";
import { DIFFICULT } from "@/constants/DIFFICULT";

export default function useGameInit(numberOfCells) {
  const difficult = ref(DIFFICULT);
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

  onBeforeMount(init);

  return {
    difficult,
    fields,
    init,
  };
}
