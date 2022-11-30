<template>
  <div class="container-cards">
    <div class="card-img">
      <img
        :src="`http://image.tmdb.org/t/p/w185/${ObjectSeries.poster_path}`"
        alt=""
      />
    </div>

    <div class="card-content p-3">
      <div>
        <span> <strong>Titolo: </strong> </span>{{ ObjectSeries.name }}
      </div>
      <div>
        <span> <strong>Titolo Originale: </strong> </span
        >{{ ObjectSeries.original_name }}
      </div>

      <div v-if="ObjectSeries.original_language == 'it'">
        <span> <strong>Lingua: 🇮🇹 </strong></span>
      </div>
      <div v-else-if="ObjectSeries.original_language == 'en'">
        <span> <strong>Lingua: 🇬🇧 </strong></span>
      </div>
      <div v-else>
        <span> <strong>Lingua: 🇺🇬 </strong></span>
      </div>
      <div>

        <span> <strong>Voto: </strong></span>{{ ObjectSeries.vote_average }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSeries",

  data() {
    return {
      
    };
  },

  props: {
    ObjectSeries: Object,
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.container-cards {
  width: 185px;
  margin-right: 20px;
  padding: 20px;
}

.card-content {
  color: white;
}
.container-cards:hover .card-img,
.card-content {
  display: none;
}
.container-cards:hover .card-content {
  width: 185px;
  display: block;
}
</style>