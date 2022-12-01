<template>
  <header>
    <div class="container-header d-flex align-items-center justify-content-between">
      <div>
        <img src="../assets/Netflix-Logo.wine.png" alt="#" />
      </div>

      <div class="w-50">
        <input
          class="form-control bg-dark text-white"
          type="text"
          placeholder="Search Movie"
          aria-label="default input example"
          v-model="searchText"
          @keyup="$emit('emitSearchTextHeader', searchText)"
        />
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderNetflix",
  props: {},

  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: black;
}

img {
  width: 15%;
}
.container-header {
  width: 80%;
  margin: 0 auto;
}

</style>
