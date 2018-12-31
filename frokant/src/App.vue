<template>
  <div id="app">
    <img class="banner" alt="banner" src="./assets/banner.png">
    <Navigation/>
    <div class="container">
      <Recipes/>
    </div>
    <Typefilter/>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
import Typefilter from './components/type-filter.vue'
import Recipes from './components/recipes.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Typefilter,
    Recipes
  },
  head: {
    link: [
      { rel:'stylesheet', href:'https://use.fontawesome.com/releases/v5.6.3/css/solid.css', integrity:'sha384-+0VIRx+yz1WBcCTXBkVQYIBVNEFH1eP6Zknm16roZCyeNg2maWEpk/l/KsyFKs7G', crossorigin:"anonymous"},
      { rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css" ,integrity:"sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0", crossorigin:"anonymous" }
    ]
  }
}
</script>

<style lang="scss">
@import "/assets/vars.scss";
body {
  margin: 0;
  background-color: $color-background;
}

#app {
  position: relative;
  min-height: 100vh;
}

.container {
  max-width: 1300px;
  margin: auto;
  padding-bottom: 60px; //for type filter
  position: relative;
}

.banner {
  width: 100%;
}
</style>
