<script setup>
  import Img1 from "../assets/images/1.JPG";
</script>
<template>
  <!-- Main Content -->
  <div
    class="grow rounded-3xl rounded-ss bg-whiteBorder p-[1px] backdrop-blur-2xl">
    <div
      class="flex grow flex-col gap-5 rounded-[23px] rounded-ss-[3px] bg-slate/[.30] p-5 backdrop-blur-xl">
      <p class="font-bold text-white">
        hello! my name is
        <span class="font-extrabold text-slate">ethan mooney</span> , a
        <span class="font-extrabold text-slate">software engineer</span>
        specializing in user experiences.
      </p>
      <p class="font-bold text-white">
        I currently live in
        <span class="font-extrabold text-slate">Seattle</span>, where you can
        find me shooting film on my camera, hiking, bouldering at my local gym,
        or watching Formula 1.
      </p>
    </div>
  </div>

  <!-- Image -->
  <div class="shrink grow-0 overflow-clip rounded-3xl rounded-ss">
    <img class="object-cover object-center" :src="Img1" />
  </div>

  <div class="text-md shrink grow-0 font-extrabold text-slate">
    I also write
  </div>

  <!-- Post -->
  <div
    class="grow rounded-3xl rounded-ss bg-whiteBorder p-[1px] backdrop-blur-2xl">
    <div
      class="flex flex-col gap-2.5 rounded-[23px] rounded-ss-[3px] bg-slate/[.30] p-5 backdrop-blur-xl">
      <p class="text-sm font-bold text-white">june 2023</p>
      <p class="text-base font-medium text-slate">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue
        mauris augue neque gravida in fermentum.
      </p>
    </div>
  </div>
</template>
