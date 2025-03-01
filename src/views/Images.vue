<script setup>
  import { ref } from "vue";
  function getImgUrl(fileName) {
    let ext = ".jpg"; // can be anything
    const imgUrl = "src/assets/images/" + fileName + ".jpg";
    console.log(imgUrl);
    return imgUrl;
  }

  const imgTotal = 8;
</script>
<template>
  <div class="text-[20pt]/8 tracking-[.03em]">
    <RouterLink to="/" class="font-bold text-mainText hover:text-orange"
      >home</RouterLink
    >
    <span class="font-bold text-orange"> > </span>

    <span class="font-bold text-blue">photography</span>
  </div>
  <div class="h-[1rem]"></div>

  <div class="grow">
    <div class="col-span-1 col-start-2 mb-4" v-for="num of imgTotal">
      <img src="../assets/images/7.JPG" class="rounded-[8px]" />
    </div>
  </div>
</template>
