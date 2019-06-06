<template>
  <div>
    <form>
      <h1>Add new recipe</h1>
      <hr>

      <div class="form-wrapper">
        <div class="form-section-img">
          <button>Upload image</button>
        </div>

        <div class="form-section-text">
          <div class="formrow">
            <label class="input-label" for="recipe-name">Title</label>
            <input type="text" id="recipe-name" size="50" v-model="newRecipe.title" />
          </div>
          <div>
            <div class="formrow">
              <label class="input-label" for=" recipe-type">Type</label>
              <select v-model="newRecipe.type">
                <option value="" disabled selected>Select your option</option>
                <option value="drink">Drink</option>
                <option value="appetizer">Appetizer</option>
                <option value="main">Main</option>
                <option value="dessert">Dessert</option>
                <option value="breakfast">Breakfast</option>
              </select>
            </div>
          </div>
          <div>
            <div class="formrow">
              <label class="input-label">Ingredients</label>
              <!-- eslint-disable-next-line -->
              <div v-for="ingredient in newRecipe.ingredients">{{ingredient}}</div>
              <input type="text" @keydown.enter.prevent="addIngredient()" v-model="newIngredient" />
            </div>
          </div>
          <div>
            <div class="formrow line">
              <label class="input-label">Lowcarb?</label>
              <input type="radio" name="lowcarb" id="lowcarb-true" value="true" v-model="newRecipe.lowcarb" />
              <label for="lowcarb-true">yes</label>
              <input type="radio" name="lowcarb" id="lowcarb-false" value="false" v-model="newRecipe.lowcarb" />
              <label for="lowcarb-false">no</label>
            </div>
          </div>
          <div>
            <div class="formrow line">
              <label class="input-label">Veggie?</label>
              <input type="radio" name="veggie" id="veggie-true" value="true" v-model="newRecipe.veggie" />
              <label for="veggie-true">yes</label>
              <input type="radio" name="veggie" id="veggie-false" value="false" v-model="newRecipe.veggie" />
              <label for="veggie-false">no</label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-footer">
        <button v-on:click="saveRecipe()">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
  import DataService from '@/services/DataService';
  export default {
    data: () => {
      return {
        newRecipe: {
          ingredients: []
        },
        newIngredient: null,
      }
    },
    computed: {

    },
    methods: {
      async saveRecipe() {
        try {
          let r = await DataService.saveRecipe(this.newRecipe);
          console.log(r)
        } catch (error) {
          console.log('Simon says: ', error);
        }
      },
      addIngredient() {
        console.log('ingr', this.newIngredient);
        this.newRecipe.ingredients.push(this.newIngredient);
        this.newIngredient = '';
      }
    },
    created() {

    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/vars.scss";

  form {
    max-width: 75%;
    background-color: #fff;
    box-shadow: 10px 10px 24px 0px rgba(0, 0, 0, 0.55);
    margin: 2rem auto;
    padding: 2rem;
  }

  .form-wrapper {
    display: flex;
    margin-top: 2rem;
  }

  .form-section-img {
    width: 40%;
  }

  .formrow {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    &.line {
      display: block;

      label {
        margin-right: .5rem;
      }
    }
  }

  .input-label {
    color: $color-meta;
  }

  .form-footer {
    text-align: right;

    button {
      padding: .75rem 1rem;
      background-color: $color-theme;
      //background: linear-gradient(180deg, rgba(245,166,35,1) 0%, rgba(250,212,131,1) 100%);
      border-radius: 5px;
      color: white;
      font-size: 1.2rem;

      &:hover {
        cursor: pointer;
        background-color: rgba(245,166,35,.7)
      }
    }

  }
</style>