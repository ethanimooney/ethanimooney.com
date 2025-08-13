<script setup>
  const images = [];
  for (let i = 1; i <= 8; i++) {
    images.push({
      src: new URL(`../assets/images/${i}.jpg`, import.meta.url).href,
      alt: `Image ${i}`,
    });
  }
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
    <div class="flex flex-col gap-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="flex items-center justify-center">
        <img
          :src="image.src"
          :alt="image.alt"
          class="h-auto max-w-full rounded shadow" />
      </div>
    </div>
  </div>
</template>
