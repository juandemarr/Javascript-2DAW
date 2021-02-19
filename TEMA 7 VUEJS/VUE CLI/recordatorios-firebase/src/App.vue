<template>
  <div id="app">
    <contenido/>
  </div>
</template>

<script>

import contenido from './components/contenido.vue'

export default {
  name: 'App',
  components: {
    contenido
  },
  mounted(){
    
  },
  data () {
    return {
      
    }
  },
  methods: {

  },
  computed: {
  
  }
}
</script>

<style>
  *{
    box-sizing:border-box;
    margin:0;
  }
  body{
    font-family:sans-serif;
    padding:2%;
    line-height:25px;
    background-color:#f8c596;
  }
  .completadoClase{
    font-weight:bold;
    color:green;
  }
  
  /*Animacion*/
  .list-enter-active, .list-leave-active{
    transition: all 1s;
  }
  .list-enter, .list-leave-to{
    opacity: 0;
  }
</style>
