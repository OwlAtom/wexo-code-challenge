<script setup>
import movieCard from "./MovieCard.vue";

const props = defineProps({
  genre: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card" v-if="genre?.name">
    <p class="genre-title">{{ genre.name }}</p>
    <div class="genre-movies">
      <movie-card
        v-for="movie in genre.movies.slice(0, 7)"
        :key="movie.id"
        :movie="movie"
        :genre="genre.name"
      />
      <div class="movie">
        <router-link :to="{ name: 'Genre', params: { name: genre.name } }">
          <p class="see-more cool-button">See more {{ genre.name }} movies</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.genre-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  text-align: center;
}
.see-more {
  color: white;
  width: 15.625em;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 20em;
  font-weight: bold;
  text-transform: capitalize;
  background-color: #000;
  margin: 0rem;
  padding-bottom: 0.5em;
}

.genre-movies {
  display: flex;
  flex-flow: reverse nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
}

@media (hover: none) {
  .genre-movies::-webkit-scrollbar {
    display: none;
  }
}
</style>
