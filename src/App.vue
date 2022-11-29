<template>
  <div id="app">
    
    <HeaderNetflix @emitSearchTextHeader="searchMovies" />
    <MainNetflix :arrayResultApp="filmResults"/>
  
  </div>
</template>

<script>
import HeaderNetflix from "./components/HeaderNetflix.vue";
import MainNetflix from "./components/MainNetflix.vue";
import axios from "axios";


export default {
  name: "App",
  components: {
    HeaderNetflix,
    MainNetflix,
  },

  data() {
    return {
      searchTextFromHeaderToApp: "",
      searchQueryUrl: "",
      filmResults: [],
    

    };
  },

  mounted() {
    
      
  },

  methods: {
    searchMovies(searchTextHeader) {
      this.searchTextFromHeaderToApp = searchTextHeader;

      this.searchQueryUrl = "https://api.themoviedb.org/3/search/movie?api_key=c71a65738820e4777aa2511a3d0fece4&language=en-US&page=1&include_adult=false&query=" + this.searchTextFromHeaderToApp;

      axios
      .get(this.searchQueryUrl)
      .then((response) =>{

        this.filmResults = response.data.results
      })

    },
  },
};
</script>

<style lang="scss">
#app {
 
  background-color: aqua;
  
}
</style>
