<template>
  <div>
    <div class="d-flex justify-content-between w-75 flex-wrap m-auto">

      <div v-for="(elem, index) in arrayResultApp" :key="index" class="card m-3">
        <img src="#" class="card-img-top" alt="#" />
        <div class="card-body overflow-auto">
          <h5 class="card-title">{{ elem.title }}</h5>
          <p class="card-text">
            {{ elem.overview }}
          </p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CardNetflix",

  props: {
    arrayResultApp: Array,
  },
};
</script>



<style lang="scss" scoped>
.card{
    
    width: calc( 100% / 6 );
    height: 450px;
}
</style>