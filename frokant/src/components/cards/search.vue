<template>
  <div class="searchbar">
    <input placeholder="Zoek recept..."/>
    <button><i class="fas fa-search"></i></button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

  .searchbar {
    display: inline-block;
    float: right;
    margin-right: 1rem;
    margin-top: .5rem;
    width: 30%;
  }
  input {
    padding: .5rem 1rem;
    background-color: rgba(226,219,219,0.15);
    border: 1px solid rgba(0,0,0,.15);
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    box-shadow: inset 0 1px 3px #e3e5e7;
    width: 77%;

  }
  button {
    padding: .5rem;
    border: 1px solid rgba(0,0,0,.15);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: darkgoldenrod;
    color: #fff;
    width: 12%;
  }
</style>
