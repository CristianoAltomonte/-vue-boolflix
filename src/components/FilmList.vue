<template>
  <div>
    <CardNetflix :arrayResultApp="arrayResultApp"/>
  </div>
</template>

<script>
import CardNetflix from './CardNetflix.vue'

    export default {

        name: 'FilmList',

        components:{

            CardNetflix

        },

        props:{

            arrayResultApp: Array
        }
        
    }
</script>

<style lang="scss" scoped>
</style>