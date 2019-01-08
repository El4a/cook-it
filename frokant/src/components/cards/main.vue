<template>
  <div id="main">
    <Navigation/>
    <div class="container">
      <Typefilter/>
      <Recipes :category="category"/>
    </div>
    
  </div>
</template>

<script>
  import Navigation from '@/components/cards/navigation.vue'
  import Typefilter from '@/components/cards/type-filter.vue'
  import Recipes from '@/components/cards/recipes.vue'

  export default {
    components: {
      'Navigation': Navigation,
      'Typefilter': Typefilter,
      'Recipes': Recipes
    },
    props: [
      'category'
    ]
  }
</script>


<style lang="scss" scoped>
@import "../../assets/vars.scss";

.container {
  display: flex;
  position: relative;
  max-width: 1300px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
}


</style>