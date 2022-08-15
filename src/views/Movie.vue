<script setup>
import { useMainStore } from "../stores/index.js";

const mainStore = useMainStore();
mainStore.init();

import { useRouter, useRoute } from "vue-router";
const $route = useRoute();
const router = useRouter();
// find the right genre object
const genre = mainStore.genres.find((g) => g.name === $route.params.genre);
// in the genre.movies array, find the right movie object
const movie = genre.movies.find((m) => m.id === $route.params.id);
// if there is no movie, redirect to the home page
if (!movie) {
  router.push("/");
}

import { useWatchlistStore } from "../stores/watchlist.js";
const watchlistStore = useWatchlistStore();

function saveToWatchlist() {
  watchlistStore.addToWatchlist(
    movie.title,
    movie.id,
    genre.name,
    movie.posters["po-reg-high"].url
  );
}
</script>

<template>
  <img
    class="backdrop"
    :src="movie.backdrops['bd-w-high']?.url"
    :alt="movie.backdrops['bd-w-high']?.title"
  />
  <div class="movie-overview">
    <div class="movie-details">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.year }}</p>
      <p class="genres-label">Genres:</p>
      <div class="genres" v-for="genre in movie.genres" :key="genre.id">
        <p v-if="genre.plprogram$scheme === 'genre'">
          <router-link
            :to="{
              name: 'Genre',
              params: { name: genre.plprogram$title.toLowerCase() },
            }"
          >
            {{ genre.plprogram$title }}
          </router-link>
        </p>
      </div>
      <button class="link" @click="saveToWatchlist()">Save to watchlist</button>
    </div>
    <img
      class="poster"
      :src="movie.posters['po-reg-medium'].url"
      :alt="movie.posters['po-reg-medium'].title"
    />
    <p class="movie-description">{{ movie.description }}</p>
  </div>
</template>

<style scoped lang="scss">
button.link {
  margin-top: 0.5rem;
}
.backdrop {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.movie-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem;
  margin-top: -8em;
  background-color: rgba(var(--background-color), 0.5);
  background: linear-gradient(
    180deg,
    rgba(var(--foreground-color), 0.2) 0%,
    rgb(var(--background-color)) 16%
  );
  color: #fff;
  backdrop-filter: blur(5px);
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    text-align: center;
  }
  .movie-details {
    margin-right: 0.5rem;
    .genres-label {
      margin-top: 1rem;
      border-top: 1px solid #fff;
    }
    .genres {
      margin-left: 1.5rem;
    }
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .movie-description {
    margin-top: 1rem;
    grid-column: 1 / -1;
  }
}
</style>
