<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { PhMoon, PhCircle } from "@phosphor-icons/vue";

  const router = useRouter();

  const navOptions = ref([
    { title: "blog", link: "/blog" },
    { title: "images", link: "/images" },
    { title: "home", link: "/" },
  ]);

  const navigate = (navOption) => {
    router.push({ path: navOption.link });
  };
</script>

<template>
  <div
    class="justify-self-center rounded-3xl bg-whiteBorder p-[1px] backdrop-blur-2xl">
    <div
      class="flex flex-row justify-between gap-5 rounded-[23px] bg-slate/[.30] backdrop-blur-xl">
      <div class="flex flex-row items-center gap-2">
        <div
          class="m-2 mr-0 flex h-8 shrink overflow-clip rounded-full border border-white">
          <img src="../assets/eim_memoji.png" class="object-cover" />
        </div>
        <div
          class="flex h-6 w-6 shrink items-center justify-center overflow-clip rounded-full bg-itemBackground">
          <PhMoon class="text-slate" weight="fill" />
        </div>
        <div
          class="flex h-6 w-6 shrink items-center justify-center overflow-clip rounded-full bg-itemBackground">
          <PhCircle class="text-slate" weight="fill" />
        </div>
      </div>
      <div
        class="mr-1.5 flex flex-row items-center text-sm font-bold text-slate">
        <div
          v-for="navOption in navOptions"
          :key="navOption.title"
          @click="navigate(navOption)"
          class="ml-1 rounded-full p-2 px-3 hover:cursor-pointer"
          :class="
            router.currentRoute.value.fullPath === navOption.link
              ? 'bg-itemBackground'
              : 'hover:bg-itemBackground'
          ">
          {{ navOption.title }}
        </div>
      </div>
    </div>
  </div>
</template>
