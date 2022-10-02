<template>
  <div>
    <MovieComp />
  </div>
</template>

<script>
import MovieComp from "./components/MovieComp.vue";

export default {
  name: "App",
  components: {
    MovieComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
