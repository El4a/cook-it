<script>
  import axios from 'axios';


  const baseURL = 'https://f36dot8n7k.execute-api.eu-west-2.amazonaws.com/dev/';

  export default {
    async getRecipes() {
        try {
          const response = await axios.get(baseURL+'recipes');
          console.log(response);
          return response;
        } catch (error) {
          console.error(error);
          return error;
        }
      }
  };
</script>
