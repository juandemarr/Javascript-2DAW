<template>
<div class="hello">
  <div v-for="dato in datos" 
       v-bind:key="dato.id"
       v-on:click="baja(dato)">{{dato.nombreDoc}}</div>

  <!-- <p>Introduce un nombre<input v-model="nombreNuevo"></p>
  <p>Introduce un formato<input v-model="formatoNuevo"></p>
  <p v-on:click="introducir">Introducir</p>

  <button v-on:click="ordenarASC">Ordenar ASC</button>
  <button v-on:click="ordenarDESC">Ordenar DESC</button> -->

  <div v-on:click="alta">Nueva alta</div>


</div>
</template>

<script>
import {db}  from '../db.js'; //tiene que estar db entre llaves

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      datos:[],
      nombreNuevo:"",
      formatoNuevo:""
    }
  },
  firestore:{
    datos:db.collection('documentos')
  },
  methods:{
    alta: function(){
      db.collection('documentos').add({//se añade en formato JSON, el formato con el que firebase trabaja
        nombreDoc:"hello",
        formato:"there"
      })
    },
    /******** */
    /*ordenarASC:function(){
     db.collection('documentos').orderBy('nombreDoc',"asc");
    },
    ordenarDESC:function(){
      db.collection('documentos').orderBy('nombreDoc',"desc");
    },*/
    /*introducir:function(){
      db.collection('documentos').add({
        nombreDoc:nombreNuevo,
        formato:there
      })
    },*/
    /******** */
    baja:function(dato){
      db.collection('documentos')
      .doc(dato.id).delete()
    }
  },
  computed:{

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
