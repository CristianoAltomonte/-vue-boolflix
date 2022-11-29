<template>
  <header>
    <div class="container-header d-flex justify-content-between p-3">

      <div>
        logo
      </div>

      <div>
        <input class="form-control" type="text" placeholder="Search Movie" aria-label="default input example" v-model="searchText" @keyup="$emit('emitSearchTextHeader', searchText)">
      </div>
    </div>
    
  </header>
</template>

<script>
export default {
  name: 'HeaderNetflix',
  props: {
    
  },
  data(){
    return {

      searchText: '',

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container-header{

  width: 80%;
  margin: 0 auto;
}


</style>
