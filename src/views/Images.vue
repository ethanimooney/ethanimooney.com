<script setup>
  function getImgUrl(fileName) {
    let ext = ".jpg"; // can be anything
    const imgUrl = new URL(
      "./assets/images/" + fileName + ".jpg",
      import.meta.url
    ).href;
    return imgUrl;
  }

  const imgTotal = 1;

  console.log(images);
</script>
<template>
  <div class="grow rounded-3xl rounded-ss p-[1px]">
    <div class="col-span-1 col-start-2">
      <img
        v-for="num of imgTotal"
        :src="getImgUrl(num)"
        class="rounded-[6px]" />
    </div>
  </div>
</template>
