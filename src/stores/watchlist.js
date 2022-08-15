import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { compressToUTF16, decompressFromUTF16 } from "lz-string";

export const useWatchlistStore = defineStore("watchlist", {
  state: () => ({
    watchlist: [],
  }),
  actions: {
    addToWatchlist(title, id, genre, poster) {
      // check for duplicates before adding to watchlist
      if (this.watchlist.find((m) => m.id === id)) {
        return;
      }
      this.watchlist.push({
        title,
        id,
        genre,
        poster,
      });
    },
    removeFromWatchlist(id) {
      this.watchlist = this.watchlist.filter((m) => m.id !== id);
    },
  },
  persist: {
    afterRestore: (context) => {
      console.log(context);
    },
    serializer: {
      // called when the store is saved
      serialize: (state) => {
        return compressToUTF16(JSON.stringify(state));
      },
      // called when the store is loaded
      deserialize: (state) => {
        return JSON.parse(decompressFromUTF16(state));
      },
    },
  },
});
