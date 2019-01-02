<template>
  <nav role="navigation">
    <ul>
      <li>
        <router-link :to="{ name: 'publicRecipes', params: { category: 'test' }}" class="active">All</router-link>
        <!-- <a href="javscript:void()" class="active" @click="changeCategory()">All</a> -->
      </li>
      <li>
        <a href="javscript:void()" @click="changeCategory('published')">Public</a>
      </li>
      <li>
        <a href="javscript:void()">Mine</a>
      </li>
      <li>
        <a href="javscript:void()" @click="changeCategory('favorite')">Favorites</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  //name: 'navigation', //why do you need a name here - works without
  props: {
    
  },
  methods: {
    changeCategory(cat) {
      console.log(event.target);
      this.$root.$emit('eventing', cat);
    }
  }
}
</script>


<style lang="scss">
@import "../../assets/vars.scss";

nav {
  margin-top: -3.5rem;
  text-align: center;
  font-size: 1.3rem;
  font-family: Helvetica;
  ul {
    list-style: none;
    li {
      display: inline-block;
      background-color: $color-dark;
      padding: 1rem 0;

      &:first-child {
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }

      a {
        padding: 1rem 1.5rem; 
        text-decoration: none;
        color: #fff;

        &.active {
          background-color: $color-theme;
        }

        &:not(.active):hover {
          color: $color-theme;
        }
      }
    }
  }
}
</style>
