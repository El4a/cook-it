<template>
  <div class="recipe-wrapper">
    <div class="recipe" v-for="recipe in filteredRecipes">
      <div class="content">
        <div class="img-container">
          <img :src="recipe.imgUrl"/>
        </div>
        <div class="txt-container">
          <h1>{{recipe.title}}</h1>
          <span class="fas fa-stopwatch">{{recipe.time ? recipe.time : '??'}} </span>
        </div>
        <span class="type-tag" v-if="recipe.type">{{recipe.type | capitalize}}</span>
        <span class="favo fa-heart" v-bind:class="[ recipe.favorite ? '-yes fas' : 'far'  ]"></span>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from '@/services/DataService';
export default {
  data: () => {
    return {
        recipes: [],
        filter: null,
        errMsg: '',
      }
  },
  computed: {
    filteredRecipes() {
      return this.filter ? this.recipes.filter(recipe => recipe[this.filter]) : this.recipes;
    }
  },
  methods: {
    getRecipes() {
      return DataService.getRecipes()
        .then((recipes) => {
          console.log(recipes.data);
          this.recipes = recipes.data
          })
        .catch(err => this.errMsg = err)
    }
  },
  created() {
    this.getRecipes();
  },
  mounted() {
    this.$root.$on('eventing', filter => {
        this.filter = filter;
    });
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/vars.scss";
  .recipe-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .recipe {
      max-width: 20%;
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
      background-color: green;
      color: #fff;
      font-size: .85rem;
      position: absolute;
      bottom: .5rem;
      left: 1rem;
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
</style>
