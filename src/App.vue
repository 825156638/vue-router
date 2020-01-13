<template>
  <div id="app">
    <router-link to='/hello/122/xx'>跳转hello组件</router-link>
    <!-- <router-link :to="{name:'hello'}">22</router-link> -->
    <router-view></router-view>

    <router-link to="/user">lode...</router-link>
    <hr>
    <router-view name="Student"></router-view>
     <hr>
    <router-view name="Tearch"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
