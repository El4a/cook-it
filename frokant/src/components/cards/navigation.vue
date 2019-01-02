<template>
  <nav role="navigation">
    <ul>
      <li>
        <a href="javscript:void()" class="active">Public</a>
      </li>
      <li>
        <a href="javscript:void()">Mine</a>
      </li>
      <li>
        <a href="javscript:void()" @click="testfilter('fav')">Favorites</a>
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
    testfilter(e) {
      console.log(e);
      this.$root.$emit('eventing', e);
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
