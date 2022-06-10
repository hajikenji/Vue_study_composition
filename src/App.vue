<template>
  <div id="app">
    <router-link to="/" class="btn btn-primary mx-2">top</router-link>
    <router-link to="/jsx" class="btn btn-warning">jsx</router-link>
    <router-link to="/test" class="btn btn-warning">test</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      title: 'router'
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
