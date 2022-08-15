<script setup>
const props = defineProps({
  movie: { type: Object, required: true },
  genre: { type: String, required: true },
});
</script>

<template>
  <div class="movie">
    <router-link
      :to="{ name: 'Movie', params: { genre, id: movie.id } }"
      class="movie-title"
    >
      <img
        :src="movie.posters['po-reg-high'].url"
        :alt="movie.posters['po-reg-high'].title"
      />
      <p>{{ movie.title }}</p>
    </router-link>
  </div>
</template>

<style lang="scss">
.movie-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  text-align: center;
  a,
  p {
    margin: 0;
    padding: 0;
  }
}

.movie {
  display: flex;
  flex-flow: column nowrap;
  margin: 0.5rem;
  scroll-snap-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
}
</style>
