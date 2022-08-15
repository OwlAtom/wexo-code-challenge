<script setup></script>

<template>
  <header>
    <router-link to="/">Home</router-link> /
    <router-link to="/watchlist">Watchlist</router-link>
  </header>
  <router-view></router-view>
</template>

<style lang="scss">
.view {
  width: 100%;
}
.cool-button {
  cursor: pointer;
  background-color: #000;
  background-image: linear-gradient(
    transparent calc(100% - 100%),
    rgb(var(--main-color)) 0
  );
  background-size: 100% 100%;
  background-position: 100%;
  background-repeat: no-repeat;
  transition: background 0.2s cubic-bezier(0.64, 0.45, 0.65, 0.48);
  &:hover {
    background-size: 100% 1%;
  }
}
</style>
