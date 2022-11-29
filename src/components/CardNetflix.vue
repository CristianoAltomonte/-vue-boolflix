<template>
  <div class="container-cards">
    <div class="card-img">
      <img
        :src="`http://image.tmdb.org/t/p/w342/${ObjectMovies.poster_path}`"
        alt=""
      />
    </div>

    <div class="card-content py-5 px-3">

      <div><span> <strong>Titolo: </strong> </span>{{ ObjectMovies.title }}</div>
      <div><span> <strong>Titolo Originale: </strong> </span>{{ ObjectMovies.original_title }}</div>
      <div><span> <strong>Lingua: </strong></span>{{ ObjectMovies.original_language }}</div>
      <div><span> <strong>Voto: </strong></span>{{ ObjectMovies.vote_average }}</div>
      
    </div>
  </div>
</template>

<script>


export default {

  name: "CardNetflix",

  data(){
    return{
        
    }
  },

  props: {
    ObjectMovies: Object,
  },
};
</script>



<style lang="scss" scoped>
  
.container-cards{
    width: 342px;
    margin-right: 20px;
    padding: 20px;
}

.card-content{
    color: white;
}
.container-cards:hover .card-img, .card-content{
   display:none;
}
.container-cards:hover .card-content{
 width: 342px;  
display:block;
}


</style>