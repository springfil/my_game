<script setup>
import { computed,inject } from "vue";
import PersonImage from "./PersonImage.vue";
import PersonProgressBar from "./PersonProgressBar.vue";


const difficult = inject('data');



const getImageUrl = computed(() => {
  switch (difficult.value) {
    case 2:
    console.log("case 2");
      return "https://m.media-amazon.com/images/I/61ltDPXMtpS._AC_UL960_QL65_.jpg";
    case 4:
    console.log("case 4");
      return "https://store.aniplexusa.com/demonslayer/nezuko-kamado-buzzmod-ver/images/6.jpg";
    case 6:
    console.log("case 6");
      return "https://store.aniplexusa.com/demonslayer/nezuko-kamado-exploding-blood/images/7.jpg";
    default:
      return "../assets/logo.png";
  }
});

// const getProgressBarWidth = computed(() => {

// });
</script>

<template>
  <div class="container">
    <person-image :image-url="getImageUrl" />
    <person-progress-bar :progress-bar-width="getProgressBarWidth" />
    {{ injectedData }}
  </div>
</template>

<style scoped>

</style>


// const DIFFICULT = {
    //   easy: 1,
    //   medium: 2,
    //   hard: 3,
    // };
    
    // const difficult = ref(DIFFICULT.medium);