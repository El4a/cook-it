<template>
  <div class='filter-wrapper'>
    <div class="types">
      <a href="javascript:void()" @click="changeCategory(null)" :class="{'active': activeType === null}">All</a>
      <a href="javascript:void()" @click="changeCategory('drinks')" :class="{'active': activeType === 'drinks'}">Drinks</a>
      <a href="javascript:void()" @click="changeCategory('amuse')" :class="{'active': activeType === 'amuse'}">Appetizers</a>
      <a href="javascript:void()" @click="changeCategory('main')" :class="{'active': activeType === 'main'}">Main</a>
      <a href="javascript:void()" @click="changeCategory('dessert')" :class="{'active': activeType === 'dessert'}">Dessert</a>
      <a href="javascript:void()" @click="changeCategory('breakfast')" :class="{'active': activeType === 'breakfast'}">Breakfast</a>
    </div>

    <router-link to="/new" tag="button" role="button" class="fas fa-plus fa-2x hvr-bob" ></router-link>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      activeType: null
    }
  },
  methods: {
    changeCategory(type) {
      this.activeType = type;
      this.$root.$emit('eventing', type);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/vars.scss";
@import "../../assets/effects.css";

  .filter-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 1.3rem;
    font-family: Helvetica;
    background-color: $color-dark;
    color: #fff;

    .types {
      max-width: 60%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      
      a {
        padding: 1rem; 
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

    button {
      position: absolute;
      top: -1.2rem;
      right: 5rem;
      background-color: $color-dark;
      color: $color-theme;
      border: 3px solid $color-background;
      border-radius: 100%;

      &:hover {
        cursor: pointer;
      }
    }

  }
</style>
