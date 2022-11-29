<template>
  <div>

    <FilmList :arrayResultApp="arrayResultApp"/>
    <SeriesList/>

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

        arrayResultApp: Array
    }
};
</script>

<style lang="scss" scoped>
</style>