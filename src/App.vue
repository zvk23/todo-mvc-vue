<template lang="pug">
  #app
    todo
</template>


<script>
import todo from './components/todo.vue'

export default {
  name: 'app',
  components: {
   todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  margin: 0 auto;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #f5f5f5;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
