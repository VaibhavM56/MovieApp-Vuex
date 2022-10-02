<template>
  <div>
    <h1>SuperHit Movies Info 🎥🎞️🎬</h1>
    <input type="text" v-model="moviename" class="input-field" />
    <button @click="handleClick()">Search</button>

    <div class="row movie-card">
      <div
        class="card"
        style="width: 18rem"
        v-for="movie in movieDetails"
        :key="movie.id"
      >
        <img
          :src="movie.show.image.medium"
          class="card-img-top"
          alt="Movie Image"
        />
        <div class="card-body">
          <h5 class="card-title">{{ movie.show.name }}</h5>
          <p class="card-text">
            {{ movie.show.summary }}
          </p>
          <a href="{{movie.show.url}}" class="btn btn-primary">More Details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moviename: "",
    };
  },

  computed: {
    movieDetails() {
      return this.$store.state.movieDetails;
    },
  },
  methods: {
    handleClick() {
      this.$store.dispatch("getMovies", this.moviename);
    },
  },
};
</script>

<style>
.movie-card {
  display: flex;
}
</style>
