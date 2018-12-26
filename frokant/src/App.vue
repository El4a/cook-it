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

body {
  margin: 0;
  background-color: rgba(226,219,219,.5);
}

.banner {
  width: 100%;
}
</style>
