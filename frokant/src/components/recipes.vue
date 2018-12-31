<template>
  <div>
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
      return DataService.getRecipes()
        .then(recipes => this.recipes = recipes)
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
