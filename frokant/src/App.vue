<template>
  <div id="app">
    <img class="banner" alt="banner" src="./assets/banner.png">
    <Navigation/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    HelloWorld
  }
}
</script>

<style lang="scss">

body {
  margin: 0;
  background-color: rgba(226,219,219,.5);
}

.banner {
  width: 100%;
}
</style>
