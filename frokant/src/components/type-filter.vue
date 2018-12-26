<template>
  <div class='wrapper'>
    <div class="types">
      <a href="javascript:void()">Drinks</a>
      <a href="javascript:void()" class="active">Appetizers</a>
      <a href="javascript:void()">Main</a>
      <a href="javascript:void()">Dessert</a>
      <a href="javascript:void()">Breakfast</a>
    </div>

    <button role="button" class="fas fa-plus fa-2x hvr-bob"></button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/vars.scss";
@import "../assets/effects.css";

  .wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 1.3rem;
    font-family: Helvetica;
    background-color: $color-dark;
    color: #fff;

    .types {
      max-width: 50%;
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
