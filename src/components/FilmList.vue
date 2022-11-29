<template>

  <div>
    <div class="d-flex justify-content-between overflow-auto scrollbar">
      <CardNetflix
        v-for="(elem, index) in arrayResultApp"
        :key="index"
        :ObjectMovies="elem"
      />
    </div>
  </div>
</template>

<script>
import CardNetflix from "./CardNetflix.vue";

export default {
  name: "FilmList",

  components: {
    CardNetflix,
  },

  props: {
    arrayResultApp: Array,
  },
};
</script> 

<style lang="scss" scoped>

.scrollbar::-webkit-scrollbar {
  display: none;
}


</style>