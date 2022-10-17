<template>
  <div>
    <h1>SuperHit Movies Info 🎥🎞️🎬</h1>
    <div class="input-field">
      <input type="text" v-model="moviename" class="form-control" />
      <button @click="handleClick()" class="btn btn-primary">Search</button>
      <h2>Serach Results:</h2>
    </div>

    <div class="parent-body">
      <div class="row movie-card">
        <div
          class="card"
          style="width: 24rem"
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
            <a :href="movie.show.url" class="btn btn-success">More Details</a>
          </div>
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
.imput-field {
  margin-bottom: 20px;
  align-items: center;
}
.movie-card {
  display: flex;
}
h2 {
  margin: 20px;
}
.form-control {
  width: 30%;
  margin-left: 35%;
  margin-bottom: 10px;
}

.parent-body {
  margin-left: 10%;
}
.card {
  margin: 20px;
  background-color: black;
}

.card-body {
  background-color: black;
}
</style>
