<template>
  <div id="main">
    <Navigation/>
    <div class="container">
      <Recipes :category="category"/>
    </div>
    <Typefilter/>
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


<style lang="scss">
@import "../../assets/vars.scss";

.container {
  max-width: 1300px;
  margin: auto;
  padding-bottom: 60px; //for type filter
  position: relative;
}

</style>