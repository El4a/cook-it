<template>
<div class="header">
<div class="menu">
  <nav role="navigation">
    <ul>
      <li>
        <router-link :to="{ name: 'recipes', params: { category: null }}" exact>All</router-link>
        <!-- <a href="javscript:void()" class="active" @click="changeCategory()">All</a> -->
      </li>
      <li>
        <router-link :to="{ name: 'myRecipes', params: { category: 'mine' }}">Mine</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'favoriteRecipes', params: { category: 'favorite' }}">Favorites</router-link>
      </li>
    </ul>
  </nav>
  <search></search>
  </div>
  </div>
</template>

<script>
import Search from '@/components/cards/search.vue';
export default {
  //name: 'navigation', //why do you need a name here - works without
  components: {
    'search': Search
  },
  methods: {
    // changeCategory(cat) {
    //   console.log(event.target);
    //   this.$root.$emit('eventing', cat);
    // }
  }
}
</script>


<style lang="scss">
@import "../../assets/vars.scss";

.header {
  background-color: #fff;
.menu {
  max-width: 1300px;
  font-family: Helvetica;
  margin: auto;
}
  nav {
    font-size: 1.3rem;
    display: inline-block;
    margin-left: 15rem;
    
    ul {
    list-style: none;
    margin: 0;
    padding:0;
    li {
      display: inline-block;
      padding: 0 1rem;

      &:first-child {
        padding-left: 0;
      }

      a {
        display: inline-block;
        padding: .75rem 1rem; 
        text-decoration: none;
        color: $color-text;

        &.router-link-active {
          color: $color-theme;
          border-bottom: 3px solid $color-theme;
        }

        &:not(.router-link-active):hover {
          color: $color-theme;
        }
      }
    }
  }
  }
}
</style>
