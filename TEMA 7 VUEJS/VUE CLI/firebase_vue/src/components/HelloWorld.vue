<template>
<div class="hello">
  <div v-for="dato in datos" v-bind:key="dato">{{dato.nombreDoc}}</div>
</div>
</template>

<script>
import {db}  from '../db.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      datos:[]
    }
  },
  methods:{

  },
  computed:{

  },
  firestore:{
    datos:db.collection('documentos')
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
