<script setup>
import { useWatchlistStore } from "../stores/watchlist.js";
const watchlistStore = useWatchlistStore();
</script>

<template>
  <h1 class="banner">Your personal watchlist:</h1>
  <ul>
    <li v-if="!watchlistStore.watchlist.length">No movies on watchlist yet</li>
    <li v-for="movie in watchlistStore.watchlist" :key="movie.id">
      <router-link
        class="watchlist-card"
        :to="{ name: 'Movie', params: { genre: movie.genre, id: movie.id } }"
      >
        <img class="poster" :src="movie.poster" :alt="movie.title" />
        <p>{{ movie.title }}</p>
      </router-link>
      <button class="remove" @click="watchlistStore.removeFromWatchlist(movie.id)">
        X
      </button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  width: 100%;
  justify-content: center;
  li {
    margin: 0.5rem;
    background-color: #fff;
    width: 11.8em;
    position: relative;
    .remove {
      position: absolute;
      top: 0.5em;
      left: 0.5em;
      background-color: #e3281a;
      padding: 0.25rem 0.5rem;
    }
  }
}
.watchlist-card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  img {
    width: 11.8em;
  }
}

/*@ tablet sized screens and up, change the size of watchlist cards and posters */
@media (min-width: 768px) {
  ul li {
    width: 20em;
  }
  .watchlist-card {
    img {
      width: 20em;
    }
  }
}
</style>
