<script setup>
import Genre from "../components/Genre.vue";
import { ref } from "vue";
import { useMainStore } from "../stores/index.js";

const mainStore = useMainStore();
mainStore.init();
defineProps({ mainStore: useMainStore() });
</script>

<template>
  <div class="home">
    <div class="home-genres">
      <genre v-for="genre in mainStore.genres" :key="genre.id" :genre="genre"></genre>
    </div>
  </div>
</template>

<style scoped></style>
