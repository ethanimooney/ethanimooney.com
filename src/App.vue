<script setup>
  import Header from "./components/Header.vue";
  import Navbar from "./components/Navbar.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
</script>

<template>
  <div
    class="flex h-screen flex-col items-center justify-center"
    :class="router.currentRoute.value.fullPath === '/' ? 'fixed' : ''">
    <div
      class="flex h-screen flex-col gap-5 p-5 md:max-w-[50%] md:bg-lightGray lg:max-w-[35%] xl:max-w-[25%]">
      <Header
        :class="
          router.currentRoute.value.fullPath != '/' ? 'sticky top-5' : ''
        " />
      <router-view class=""></router-view>
      <Navbar
        :class="
          router.currentRoute.value.fullPath != '/' ? 'sticky bottom-5' : ''
        " />
    </div>
  </div>
</template>
