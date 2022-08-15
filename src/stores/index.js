import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export const useMainStore = defineStore("main", () => {
  const genres = ref([]);
  function init() {
    let allGenres = [
      "action",
      "comedy",
      "thriller",
      "war",
      "romance",
      "drama",
      "crime",
      "documentary",
      "horror",
    ];
    for (let i = 0; i < allGenres.length; i++) {
      createGenre(allGenres[i]);
    }
  }
  function createGenre(genre) {
    // before creating a new genre, check if it already exists
    if (genres.value.find((g) => g.name === genre)) {
      return;
    }
    // create a new genre
    genres.value.push({
      name: genre,
      movies: [],
      id: uuidv4(),
      page: 0,
    });
    // fill the created genre with API data
    fetchGenreDetails(genres.value[genres.value.length - 1]);
  }
  function getRangeArg(page) {
    const perPage = 5;
    return `&range=${page * perPage - perPage + 1}-${page * perPage}`;
  }
  // assemble the url for the api call
  function getApiUrl(genre) {
    const ApiUrl =
      "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json"; //&lang=da"; // if lang is set to danish, the automatic finding of new categories will not work
    const args =
      "&byProgramType=movie&fields=guid,title,description,credits,thumbnails,year,tags,runtime";
    // check if genre.page is set, if not set it to 0
    if (!genre?.page) {
      genre.page = 0;
    }
    genre.page++;
    return `${ApiUrl}${args}${getRangeArg(genre.page)}&byTags=${genre.name}`;
  }
  function fetchGenreDetails(genre) {
    fetch(getApiUrl(genre))
      .then((response) => response.json())
      .then((data) => {
        data.entries.forEach((movie) => {
          // formats the api data to be more readable
          const genresForThisMovie = movie.plprogram$tags.filter(
            (tag) => tag.plprogram$scheme === "genre"
          );
          let posters = sortOutAssetsByType(movie.plprogram$thumbnails, "po-");
          let backdrops = sortOutAssetsByType(
            movie.plprogram$thumbnails,
            "bd-"
          );
          const formattedMovie = {
            id: movie.guid,
            title: movie.title,
            description: movie.description,
            runtime: movie.plprogram$runtime,
            tags: movie.plprogram$tags,
            genres: genresForThisMovie,
            year: movie.plprogram$year,
            credits: movie.plprogram$credits,
            media: movie.plprogram$media,
            posters,
            backdrops,
          };
          genre.movies.push(formattedMovie);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function sortOutAssetsByType(thumbnails, type) {
    let assets = {};
    for (let key in thumbnails) {
      // filter the assetTypes array to only contain the ones that start with the type we want
      if (
        thumbnails[key].plprogram$assetTypes.filter((assetType) =>
          assetType.startsWith(type)
        ).length > 0
      ) {
        // get the position of assetType that is not "orig", eg it starts with the type we want
        let assetTypePos = thumbnails[key].plprogram$assetTypes.findIndex(
          (assetType) => assetType.startsWith(type)
        );

        // move the correct data into the assets object
        assets[thumbnails[key].plprogram$assetTypes[assetTypePos]] = {
          url: thumbnails[key].plprogram$url,
          width: thumbnails[key].plprogram$width,
          height: thumbnails[key].plprogram$height,
          title: thumbnails[key].plprogram$title,
        };
      }
    }
    return assets;
  }
  // and lastly, a couple of helper functions
  function fetchMoviesById(id) {
    fetchGenreDetails(genres.value.find((genre) => genre.id === id));
  }
  function fetchMoviesByGenre(genre) {
    let genreToFetch = genres.value.find((g) => g.name === genre);
    fetchGenreDetails(genreToFetch);
  }
  return {
    genres,
    init,
    createGenre,
    fetchGenreDetails,
    fetchMoviesById,
    fetchMoviesByGenre,
  };
});
