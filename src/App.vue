<script setup>
  import Header from "./components/Header.vue";
  import Navbar from "./components/Navbar.vue";
  import Home from "./views/Home.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
</script>

<template>
  <Home></Home>
</template>
