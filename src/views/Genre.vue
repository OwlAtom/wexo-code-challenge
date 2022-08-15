<script setup>
import { ref } from "vue";
import movieCard from "../components/movieCard.vue";

import { useMainStore } from "../stores/index.js";
const mainStore = useMainStore();
mainStore.init();

import { useRouter, useRoute } from "vue-router";
const $route = useRoute();
// find the genre where id = $route.params.id
let genre = mainStore.genres.find((genre) => genre.name === $route.params.name);

// check if the genre exists in the store
if (!genre) {
  // if not, dynamically fetch and add it to the store
  mainStore.createGenre($route.params.name);
  genre = mainStore.genres.find((genre) => genre.name === $route.params.name);
}

function fetchMovies() {
  mainStore.fetchMoviesByGenre($route.params.name);
}
</script>

<template>
  <div class="banner">{{ $route.params.name }} movies</div>
  <div class="movies">
    <template v-if="genre">
      <movie-card
        v-for="movie in genre.movies"
        :key="movie.id"
        :movie="movie"
        :genre="genre.name"
      />
    </template>
    <div class="movie">
      <p class="see-more cool-button" @click="fetchMovies()">
        Fetch more {{ genre?.name }} movies
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  text-align: center;
  background-color: rgb(var(--main-color));
  background: linear-gradient(
    178deg,
    rgb(var(--background-color)) 35%,
    rgba(0, 0, 0, 0) 36%,
    rgba(0, 0, 0, 0) 64%,
    rgb(var(--background-color)) 65%
  );
  height: 8rem;
  line-height: 8rem;
  color: rgb(var(--background-color));
  background-color: rgb(var(--main-color));
  padding: 0.5em;
}
.movies {
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  width: 100%;
  justify-content: center;
  .movie {
    padding: 0.5rem;
  }
}

.see-more {
  width: 15.625em;
  height: 22.75em;
  margin-top: 0rem;

  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  line-height: 20em;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
