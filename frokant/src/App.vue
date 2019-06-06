<template>
  <div id="app">
    <img class="banner" alt="banner" src="./assets/banner.png">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  head: {
    link: [
      { rel:'stylesheet', href:'https://use.fontawesome.com/releases/v5.6.3/css/solid.css', integrity:'sha384-+0VIRx+yz1WBcCTXBkVQYIBVNEFH1eP6Zknm16roZCyeNg2maWEpk/l/KsyFKs7G', crossorigin:"anonymous"},
      { rel:'stylesheet', href:'https://use.fontawesome.com/releases/v5.6.3/css/regular.css', integrity:'sha384-aubIA90W7NxJ+Ly4QHAqo1JBSwQ0jejV75iHhj59KRwVjLVHjuhS3LkDAoa/ltO4', crossorigin:'anonymous'},
      { rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css" ,integrity:"sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0", crossorigin:"anonymous" }
    ]
  }
}
</script>

<style lang="scss">
@import "/assets/vars.scss";
body {
  margin: 0;
  background-color: $color-background;
  font-size: 16px;
}

button, input, optgroup, select, textarea {
  font: inherit;
  color: inherit; 
}

#app {
  position: relative;
  min-height: 100vh;
}

.banner {
  width: 100%;
}

a {
  color: $color-link;

  &:hover {
    color: $color-link-hover;
  }
}

input[type="text"] {
  padding: .4rem;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 3px;
  box-shadow: inset 0 1px 3px #e3e5e7;

  &:active {
    border-color: $color-theme;
    outline: 0;
  }
}
</style>
