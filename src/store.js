import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
  state() {
    return {
      movieDetails: [],
    };
  },
  mutations: {
    getMovies(state, payload) {
      state.movieDetails = payload;
    },
  },
  actions: {
    async getMovies(context, moviename) {
      let res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${moviename}`
      );
      context.commit("getMovies", res.data);
      console.log(res.data);
    },
  },
});

export default store;
