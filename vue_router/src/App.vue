<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
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
</style> -->

<template>
  <h1>helloworld</h1>
  <p>
    <router-link to="/demo1">page1</router-link> <br>
    <router-link to="/demo2">page2</router-link>
  </p>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {

  } 
}
</script>