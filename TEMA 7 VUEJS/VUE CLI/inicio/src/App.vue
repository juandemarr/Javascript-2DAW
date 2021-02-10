<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <cabecera ejemplo="datos desde afuera"></cabecera>
    <listaSuperior></listaSuperior>
    <pie></pie>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import pie from './components/Pie.vue'
import listaSuperior from './components/listaSuperior.vue'
import cabecera from './components/cabecera.vue'
export default {
  name: 'App',
  components: {
    /* HelloWorld, */
    cabecera,
    pie,
    listaSuperior
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
</style>
