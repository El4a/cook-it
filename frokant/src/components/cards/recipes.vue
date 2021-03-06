<template>
  <div>
    <div class="toggle-published" v-if="category === 'mine'">
      <input type="checkbox" role="checkbox" id="published"/>
      <label for='published'>Show only published</label>
    </div>
    <div class="recipe-wrapper">
      {{this.errMsg}}
      <div class="recipe" v-for="recipe in filteredRecipes" :key="recipe.id">
        <div class="content">
          <div class="img-container">
            <img :src="recipe.imgUrl" />
          </div>
          <div class="txt-container">
            <h1>{{recipe.title}}</h1>
            <span class="fas fa-stopwatch">{{recipe.time ? recipe.time : '??'}} </span>
          </div>
          <span class="type-tag" :class="recipe.type" v-if="recipe.type">{{recipe.type | capitalize}}</span>
          <span class="favo fa-heart" v-bind:class="[ recipe.favorite ? '-yes fas' : 'far'  ]"></span>
        </div>
      </div>
    </div>
    <router-link to="/new" tag="button" role="button" class="add fas fa-plus hvr-bob"></router-link>
  </div>
</template>

<script>
  import DataService from '@/services/DataService';
  export default {
    data: () => {
      return {
        recipes: [],
        filter: null, //for type of dish
        errMsg: '',
      }
    },
    props: ['category'], //var comes from navigation to know on what category to filter
    computed: {
      filteredRecipes() {
        let filteredByCategory = this.category ? this.recipes.filter(recipe => recipe[this.category]) : this.recipes;
        return this.filter ? filteredByCategory.filter(recipe => recipe.type === this.filter) : filteredByCategory;
      }
    },
    methods: {
      async getRecipes() {
        try {
          let response = await DataService.getRecipes();
          this.recipes = response.data;
        } catch (error) {
          this.errMsg = error;
          console.log('Simon says: ', error);
        }
      }
    },
    created() {
      this.getRecipes();
    },
    mounted() {
      /**
       * filtering on type
       */
      this.$root.$on('eventing', filter => {
        this.filter = filter;
      });
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/vars.scss";

  .toggle-published {
    position: absolute;
    top: -1.75rem;
    right: 1rem;
    display: inline-block;
    padding: .25rem .5rem;
    background-color: $color-secondary;
    color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0,0,0,.4);

    input {
      margin-right: .5rem;
    }
  }
  .recipe-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: 14rem;
    padding-bottom: 3rem;

    .recipe {
      max-width: 25%;
      padding: 1rem;
      box-sizing: border-box;


    }

    .content {
      background: #fff;
      height: 100%;
      position: relative;
    }

    .img-container {
      height: 60%;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .txt-container {
      color: $color-text;
      padding: 1rem;

      h1 {
        font-size: 1.5rem;
        margin: 0 0 .5rem 0;
      }

      .fa-stopwatch {
        font-size: .85rem;
        color: $color-meta;

        &:before {
          margin-right: .25rem;
        }
      }

    }

    .type-tag {
      border-radius: 1px;
      padding: .1rem .3rem;
      color: #fff;
      font-size: .85rem;
      position: absolute;
      bottom: .5rem;
      left: 1rem;

      &.drinks {
        background-color: $color-drinks;
      }

      &.amuse {
        background-color: $color-amuse;
      }

      &.main {
        background-color: $color-main;
      }

      &.dessert {
        background-color: $color-dessert;
      }

      &.breakfast {
        background-color: $color-breakfast;
      }
    }

    .favo {
      position: absolute;
      bottom: .5rem;
      right: 1rem;
      color: $color-meta;
      font-size: 1.5rem;
      cursor: pointer;

      &.-yes {
        color: $color-theme;
      }
    }
  }

  .add {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    height: 4rem;
    width: 4rem;
    font-size: 1.5rem;
    background-color: $color-theme;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }
</style>