<template>
  <div class='filter-wrapper'>
    <div class="types">
      <!-- <a href="javascript:void()" @click="changeCategory(null)" :class="{'active': activeType === null}">All</a> -->
      <a href="javascript:void()" @click="changeCategory('drinks')" :class="{'active': activeType === 'drinks'}">Drinks</a>
      <a href="javascript:void()" @click="changeCategory('amuse')" :class="{'active': activeType === 'amuse'}">Appetizers</a>
      <a href="javascript:void()" @click="changeCategory('main')" :class="{'active': activeType === 'main'}">Main</a>
      <a href="javascript:void()" @click="changeCategory('dessert')" :class="{'active': activeType === 'dessert'}">Dessert</a>
      <a href="javascript:void()" @click="changeCategory('breakfast')" :class="{'active': activeType === 'breakfast'}">Breakfast</a>
    </div>
    <a href="javascript:void()" class="clear" @click="changeCategory(null)" v-if="activeType">Clear filter <i class="fas fa-times-circle"></i></a>
    <!-- <router-link to="/new" tag="button" role="button" class="fas fa-plus fa-2x hvr-bob" ></router-link> -->
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
    font-size: 1.3rem;
    font-family: Helvetica;
    padding-top: 1rem; //to align with recipe flexbox that has unavoidable padding
    flex-basis: 15%;
    margin-right: 2rem;

    .types {
      background-color: inherit;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      
      a {
        background-color: #fff;
        color: $color-text;
        padding: 1rem; 
        text-decoration: none;
        margin: .25rem 0;

        &:first-of-type {
          margin-top: 0;
        }

        &.active {
          background-color: $color-theme;
          color: #fff;
        }

        &:not(.active):hover {
          color: $color-theme;
        }
      }
    }

    .clear {
      text-decoration: none;
      font-size: .875rem;
      
      i {
        vertical-align: text-bottom;
      }
    }
    button {
      //position: absolute;
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
