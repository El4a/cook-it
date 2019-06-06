<script>
  import axios from 'axios';

  const baseURL = 'https://f36dot8n7k.execute-api.eu-west-2.amazonaws.com/dev/';

  export default {
    getRecipes() {
      return axios.get(baseURL+'recipes');
    },
    saveRecipe(recipe) {
      return axios.put(baseURL+'recipes', recipe);
    }
  };
</script>
