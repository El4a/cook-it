<template>
  <div>
    {{this.recipes}}
  </div>
</template>

<script>
import DataService from '@/services/DataService';
export default {
  data: () => {
    return {
        recipes: [],
        errMsg: ''
      }
  },
  methods: {
    getRecipes() {
      console.log('ok');
      return DataService.getRecipes()
        .then((recipes) => {
          console.log('comp:', recipes.data);
          this.recipes = recipes.data
          })
        .catch(err => this.errMsg = err)
    }
  },
  created() {
    this.getRecipes();
  }
}
</script>

<style scoped>

</style>
