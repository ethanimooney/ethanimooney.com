<script setup>
  import Home from "./views/Home.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
</script>

<template>
  <div class="mx-auto my-6 max-w-xs sm:max-w-sm md:max-w-lg">
    <div class="flex flex-col">
      <div class="p-15">
        <div class="basis-full text-right text-[30pt] font-bold tracking-wide">
          <RouterLink to="/">eim<span class="text-orange">*</span></RouterLink>
        </div>
      </div>
      <div class="h-[7rem] md:h-[5rem]"></div>

      <RouterView />
    </div>
  </div>
</template>
