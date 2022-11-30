<template>
  <div>

    <FilmList :arrayResultApp="arrayResultApp"/>
    <SeriesList :arraySeriesApp="arraySeriesApp"/>

  </div>
</template>

<script>
import FilmList from './FilmList.vue'
import SeriesList from './SeriesList.vue'

export default {

    name: 'MainNetflix',

    components:{

      FilmList,
      SeriesList,

    },

    props:{

      arrayResultApp: Array,
      arraySeriesApp: Array

    }
};
</script>

<style lang="scss" scoped>

div{
  background-color: rgba(27, 27, 27, 1);

}
</style>