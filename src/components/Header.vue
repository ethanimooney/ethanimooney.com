<script setup>
  import {
    PhTwitterLogo,
    PhInstagramLogo,
    PhReadCvLogo,
    PhGithubLogo,
  } from "@phosphor-icons/vue";
</script>
<template>
  <div class="flex flex-row items-center justify-between">
    <div class="text-2xl font-bold">eim</div>
    <div class="flex flex-row justify-end gap-2.5">
      <PhTwitterLogo class="h-6 w-6" weight="fill" />
      <PhInstagramLogo class="h-6 w-6" weight="fill" />
      <PhReadCvLogo class="h-6 w-6" weight="fill" />
      <PhGithubLogo class="h-6 w-6" weight="fill" />
    </div>
  </div>
</template>
